import React, {useEffect, useState} from 'react'
import {Paper, Radio, RadioGroup, Step, StepContent, StepLabel, Stepper} from "@mui/material";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import {beginTest, endUserTest, fetchQuestions} from "../Api/testService";
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


function Test() {
    const [isTestMode, SetTestMode] = useState(false)
    const [seconds, setSeconds] = useState(600);
    const [testId, SetTestId] = useState("");
    const [questions, SetQuestions] = useState([{}])
    const [activeStep, setActiveStep] = useState(0);
    const [score, SetScore] = useState(0);
    const [questionIdAnswerMap, setQuestionIdAnswerMap] = useState([{}])
    const handleNext = async () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        if (activeStep === 9) {
            let score = await endTest()
            SetScore(score)
        }
    };

    async function endTest() {
        SetTestMode(false)
        let data = {}
        data.userTestId = testId
        data.TestData = questionIdAnswerMap
        data.timestamp = Date.now()

        let newData = await endUserTest(data)
        console.log(newData)
        return newData.score
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleOptionChange = (event, questionId) => {
        const updatedItems = questionIdAnswerMap.map(item => {
            if (item.id === questionId) {
                return {...item, selectedOption: event.target.value};
            }
            return item;
        });
        setQuestionIdAnswerMap(updatedItems);

    };

    async function startTest() {
        if (isTestMode === true) {
            return
        }
        let data = await fetchQuestions()
        if (data != null) {
            if (data instanceof Error) {
                console.log("Error")
            } else {
                SetQuestions(data)
                setQuestionIdAnswerMap(data.map((ques) => {
                    let val = {}
                    val.id = ques._id
                    val.label = ques.question_data
                    val.options = [ques.option_one, ques.option_two, ques.option_three, ques.option_four]
                    val.selectedOption = null
                    return val
                }))
                SetTestMode(true)
                let questionIds = data.map((ele) => ele._id)
                let newData = {questionIds: questionIds, timestamp: Date.now()}
                const tempTestId = await beginTest(newData)
                SetTestId(tempTestId)
                console.log(tempTestId)
            }
        }
    }

    useEffect(() => {
        let timer = null
        if (isTestMode) {
            timer = setInterval(() => {
                setSeconds(prevSeconds => {
                    if (prevSeconds === 0 || isTestMode === false) {
                        clearInterval(timer);
                        endTest()
                        return 0;
                    } else {
                        return prevSeconds - 1;
                    }
                });
            }, 1000)
        } else {
            if (timer !== null) {
                clearInterval(timer);
                timer = null
            }
        }
    }, [isTestMode])


    return (
        <>
            <Paper elevation={3} sx={{
                maxWidth: '600px',
                height: "60px",
                display: "flex",
                justifyContent: 'center',
                alignItems: 'center',
            }}
            >
                {!isTestMode ?
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                        <IconButton color="primary" onClick={startTest} aria-label="start test">
                            <PlayCircleRoundedIcon fontSize="large"/>
                        </IconButton>
                        <span>Start Test</span>
                    </Box>
                    :
                    <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                        <IconButton color="primary" onClick={endTest} aria-label="start test">
                            <PublishRoundedIcon fontSize="large"/>
                        </IconButton>
                        <span>Finish Test</span>

                        <Typography
                            sx={{pl: '30px'}}>{Math.round(seconds / 60)} :: {Math.round(seconds % 60)}</Typography>
                    </Box>}
            </Paper>
            {isTestMode ? <Paper elevation={3} sx={{
                    mt: "10px",
                    p: "30px",
                }}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {questionIdAnswerMap.map((question, index) => (
                            <Step key={index}>
                                <StepLabel>{question.label}</StepLabel>
                                <StepContent>
                                    <RadioGroup value={question.selectedOption}
                                                onChange={(event) => handleOptionChange(event, question.id)}>
                                        {question.options.map((option, optionIndex) => (
                                            <FormControlLabel key={optionIndex} value={option} control={<Radio/>}
                                                              label={option}/>
                                        ))}
                                    </RadioGroup>
                                    <div>
                                        <Button
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                        >
                                            Back
                                        </Button>
                                        <Button
                                            variant="contained"
                                            onClick={handleNext}
                                            style={{marginLeft: '8px'}}
                                        >
                                            {activeStep === questions.length - 1 ? 'Submit' : 'Next'}
                                        </Button>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                </Paper>
                :
                <div></div>}
        </>
    )
}

export default Test

const express = require('express');
const auth = require('../middleware/auth')
const {GetQuestions, StartUserTest, EndUserTest} = require("../services/testService");
const UserTests = require('../models/userTests')
const router = new express.Router();


router.get('/questions', auth, async (req,res) => {
    let responseData = await GetQuestions()
    res.send(responseData).status(200)
})

router.post('/startTest',auth, async (req,res) => {
    console.log(req.body)
    const id =  await StartUserTest(req.body.user, req.body.questionIds, req.body.timestamp)
    res.send(id).status(200)
})

router.post('/endTest', async (req,res) => {
    let questionData = {}
    for(let i=0;i<req.body.TestData.length;i++) {
        questionData[req.body.TestData[i].id] = req.body.TestData[i].selectedOption
    }
    console.log(questionData)
    let score = await EndUserTest('asasa', req.body.userTestId , req.body.timestamp, questionData)
    console.log(score)
    res.send({'score':score})
})

router.get('/performance', async (req,res) => {
    let score = await EndUserTest('asasa', req.body.userTestId , req.body.timestamp, questionData)
    console.log(score)
    res.send({'score':score})
})

router.post('/usertests', auth, async (req,res) => {

    try {
        const test = await UserTests.find({user_id : req.user._id });
        res.send(test);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router
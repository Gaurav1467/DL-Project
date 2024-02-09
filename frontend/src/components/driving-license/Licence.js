import { Container, Button, Box } from '@mui/material'
import { useRef, useState } from 'react'
import generatePDF from 'react-to-pdf';




function Licence(props) {

    const targetRef = useRef();
    const [flag, setFlag] = useState(true);
    let LL_N0 = '';

    const licenseFunc = async () => {
        const url = ``

        const response = await fetch(`${url}`, {
            method: "GET",
        })

        const json = await response.json();

        for (let i = 0; i < json.length; i++) {
            if (json[i].is_completed == true) {
                setFlag(true);
                LL_N0 = json[i].toString();
                break;

            }
        }


    }


    return (
        <>
            {
                flag === true ? <Container>
                    <div>
                        <Button variant="outlined" onClick={() => generatePDF(targetRef, { filename: 'page.pdf' })}>Download PDF</Button>
                        <div ref={targetRef}>

                            <div classNameName="container">
                                <header>
                                    <h1 style={{display : "flex", justifyContent : "center"}}>Learner License</h1>
                                </header>
                                <section className="details">
                                    <h2>Personal InFormation</h2>
                                    <div className="field">
                                        <label htmlFor="fullName">Full Name: </label>
                                        <p id="fullName">{props.name}</p>
                                    </div>
                                    <div className="field">
                                        <label htmlhtmlFor="address">Address:</label>
                                        <p id="address">{props.address}</p>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="licenseNumber">License Number:</label>
                                        <p id="licenseNumber">LL123456</p>
                                    </div>
                                </section>
                                <footer>
                                    <p>Issued on: February 9, 2024</p>
                                </footer>
                            </div>
                        </div>
                    </div>
                </Container> : <Container>
                    <Box sx={{
                    display : "flex",
                    justifyContent : "center",
                    fontSize : 40

                }}>
                        Please pass test first to get Leaner Licensse!!
                    </Box>
                </Container>
            }
        </>
    )
}

export default Licence
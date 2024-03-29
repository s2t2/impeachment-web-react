
import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import './ResponsiveVideo.css'

export default function Talks() {

    return (
        <Container fluid>

            <Card>
                <Card.Body>
                    <Card.Title><h3>Talks</h3></Card.Title>

                    <Card.Title><h4>INFORMS (2021)</h4></Card.Title>

                    <Card.Text>
                        Here is a prerecording of our
                        {" "}<a href="https://www.abstractsonline.com/pp8/#!/10390/presentation/7111">presentation</a>
                        {" "}for the INFORMS Annual Meeting in 2021.
                    </Card.Text>

                    <div class="video-container" style={{marginTop:"20px"}}>
                        <iframe
                            src="https://www.youtube.com/embed/9oxmJr2xX1s"
                            title="Bots, Disinformation, and the (First) Trump Impeachment"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>

                    <Card.Text>
                        NOTE: we have since updated the bot impact scores (see the <a href="/bot-impact">Bot Impact</a> page for updated results).
                    </Card.Text>
                </Card.Body>
            </Card>


        </Container>
    )
}

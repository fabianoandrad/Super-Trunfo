
import { useState } from 'react';

import { Button, Container, Row, Col, Alert } from 'reactstrap';

export default function Comparison() {

    let player1 = 0
    let player2 = 0

    const [values, setValues] = useState({
        type: "Valor do poder",
        play1: 0,
        play2: 0,
        result: "",
    });

    function comparison(value, f) {

        if (player1 === 0) {
            player1 = value;

            // console.log("player 1")
            // console.log(player1)
            // console.log(f)

        } else {
            player2 = value;

            // console.log("player 2")
            // console.log(player2)

            if (player1 > player2) {
                setValues({
                    ...values,
                    type: f,
                    play1: player1,
                    play2: player2,
                    result: "Jogador 1 Venceu!",
                });
                console.log("Jogador 1 Venceu!")

            } else {
                setValues({
                    ...values,
                    type: f,
                    play1: player1,
                    play2: player2,
                    result: "Jogador 2 Venceu!",
                });

                //console.log("Jogador 2 Venceu!")
            }
            zeraGame();
        }
    }

    function zeraGame() {
        player1 = 0
        player2 = 0
    }

    return (
        <>
            <Container className="text-center">

                <div>
                    <span>Jogador 1 </span>
                    <span>{values.type} = </span>
                    <span>{values.play1}</span>
                </div>
                <div>
                    <span>Jogador 2 </span>
                    <span>{values.type} = </span>
                    <span>{values.play2}</span>
                </div>

                <div >
                    <h1 >{values.result}</h1>
                </div>



                <Row>
                    <Col>
                        <div className="m-5">
                            <Button outline color="info" onClick={() => comparison(10, "Força")}>Força</Button>
                            <Button outline color="info" onClick={() => comparison(6, "Agilidade")}>Agilidade</Button>
                            <Button outline color="info" onClick={() => comparison(8, "Inteligencia")}>Inteligencia</Button>
                            <Button outline color="info" onClick={() => comparison(4, "Foco")}>Foco</Button>
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/homemdeferro.jpg?alt=media&token=4846d4a7-cac6-4e78-b631-78c9f03152af" alt="" width="324px" />
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className="m-5">
                            <Button outline color="info" onClick={() => comparison(6, "Força")}>Força</Button>
                            <Button outline color="info" onClick={() => comparison(9, "Agilidade")}>Agilidade</Button>
                            <Button outline color="info" onClick={() => comparison(3, "Inteligencia")}>Inteligencia</Button>
                            <Button outline color="info" onClick={() => comparison(7, "Foco")}>Foco</Button>
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/captonamerica.jpg?alt=media&token=6c955544-03ae-4466-9bab-ca39ff7c400c" alt="" width="324px" />
                            </div>
                        </div>
                    </Col>
                </Row>



                <Row>
                    <Col>
                        <div>
                            <Button outline color="info" onClick={() => comparison(12, "Força")}>Força</Button>
                            <Button outline color="info" onClick={() => comparison(5, "Agilidade")}>Agilidade</Button>
                            <Button outline color="info" onClick={() => comparison(7, "Inteligencia")}>Inteligencia</Button>
                            <Button outline color="info" onClick={() => comparison(1, "Foco")}>Foco</Button>
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/hulk.jpg?alt=media&token=b5fbe565-62ba-4508-969d-948024616a9d" alt="" width="324px" />
                            </div>
                        </div>
                    </Col>

                    <Col>

                        <div>
                            <Button outline color="info" onClick={() => comparison(8, "Força")}>Força</Button>
                            <Button outline color="info" onClick={() => comparison(4, "Agilidade")}>Agilidade</Button>
                            <Button outline color="info" onClick={() => comparison(9, "Inteligencia")}>Inteligencia</Button>
                            <Button outline color="info" onClick={() => comparison(2, "Foco")}>Foco</Button>
                            <div>
                                <img src="https://firebasestorage.googleapis.com/v0/b/appdelivery-1cd83.appspot.com/o/thor.jpg?alt=media&token=727f0cb4-3919-45fc-af4c-ec658899bcc0" alt="" width="324px" />
                            </div>
                        </div>
                    </Col>
                </Row>






            </Container>







        </>
    )

}




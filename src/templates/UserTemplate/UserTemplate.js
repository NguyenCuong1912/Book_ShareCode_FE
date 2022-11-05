import React from 'react'
import { Route } from 'react-router';
import { useEffect } from 'react';
import './../../assets/css/User.css'
// reactstrap components
import {
    Container,
    Row,
    Col
} from "reactstrap";
export const UserTemplate = (props) => {
    const { Component, ...restRoute } = props;
    // useEffect(() => {
    //     window.scrollTo(0, 0);
    // })

    const [squares1to6, setSquares1to6] = React.useState("");
    const [squares7and8, setSquares7and8] = React.useState("");
    React.useEffect(() => {
        document.body.classList.toggle("register-page");
        document.documentElement.addEventListener("mousemove", followCursor);
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("register-page");
            document.documentElement.removeEventListener("mousemove", followCursor);
        };
    }, []);
    const followCursor = (event) => {
        let posX = event.clientX - window.innerWidth / 2;
        let posY = event.clientY - window.innerWidth / 6;
        setSquares1to6(
            "perspective(500px) rotateY(" +
            posX * 0.05 +
            "deg) rotateX(" +
            posY * -0.05 +
            "deg)"
        );
        setSquares7and8(
            "perspective(500px) rotateY(" +
            posX * 0.02 +
            "deg) rotateX(" +
            posY * -0.02 +
            "deg)"
        );
    };
    return <Route {...restRoute} render={(propsRoute) => {

        return <>
            <div className="wrapper">
                <div className="page-header">
                    <div className="page-header-image" />
                    <div className="content">
                        <Container>
                            <Row>
                                <Col className="grid gird-cols-12">
                                    <div
                                        className="square square-7 col-span-1"
                                        id="square7"
                                        style={{ transform: squares7and8 }}
                                    />
                                    <div
                                        className="square square-8 col-span-1"
                                        id="square8"
                                        style={{ transform: squares7and8 }}
                                    />
                                    <div className='col-start-5 col-span-10'>
                                        <Component {...propsRoute} />

                                    </div>
                                </Col>
                            </Row>
                            {/* <div className="rounded-3xl z-0" style={{ width: '700px', height: '700px', background: 'linear-gradient(to bottom, transparent 0%, #1f2251 100%)', transform: 'rotate(-15deg)', marginLeft: '700px', marginTop: '-1100px' }} /> */}
                            <div
                                className="square square-1"
                                id="square1"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-2"
                                id="square2"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-3"
                                id="square3"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-4"
                                id="square4"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-5"
                                id="square5"
                                style={{ transform: squares1to6 }}
                            />
                            <div
                                className="square square-6"
                                id="square6"
                                style={{ transform: squares1to6 }}
                            />
                        </Container>
                    </div>
                </div>
            </div>
        </>
    }} />
}
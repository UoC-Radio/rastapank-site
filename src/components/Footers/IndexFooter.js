import React from "react";
// reactstrap components
import {Col, Container, Row} from "reactstrap";

function IndexFooter() {
    return (
        <footer className="footer footer-black bg-dark">
            <Container>
                <Row>
                    <Col md="6">
                        <div className='m-3'>

                            <div className="description">
                                <h6>ΔΙΕΥΘΥΝΣΗ</h6>
                                <span>Πανεπιστημιούπολη Βουτών, Φοιτητικό Κέντρο</span>
                                <br/> <br/>
                                <h6>ΕΠΙΚΟΙΝΩΝΙΑ</h6>
                                <span className="">studio: &nbsp;</span>
                                <span className="text-muted subscribe-line">< a target="_blank" href="callto:+302810394894">2810-394894</a></span>
                                <br/>
                                <span className="">email: &nbsp;</span>
                                <span className="text-muted subscribe-line">< a target="_blank" href="mailto:radio@culture.uoc.gr">radio@culture.uoc.gr</a></span>
                            </div>
                        </div>

                    </Col>
                    <Col md="6">
                        <div className='m-3'>
                            <div className="credits center">
                                <span className="copyright">
                                © {new Date().getFullYear()}
                                    <i className="fa fa-music heart" style={{position: "unset"}}/>
                                    Made by rastapank 96.7 (based on matzore fm 89.1)
                                    <br/>
                                    Το περιεχόμενο του site διατίθεται υπό την άδεια CC BY-NC-SA

                                </span>
                            </div>
                            <div className="center">
                                <div className="middle">
                                    <a className="btn2" target="_blank" href="https://www.facebook.com/rastapank967">
                                        <i className="fa fa-facebook-f"/>
                                    </a>
                                    <a className="btn2" target="_blank" href="https://www.instagram.com/rastapank967">
                                        <i className="fa fa-instagram"/>
                                    </a>
                                    <a className="btn2" target="_blank" href="https://twitter.com/rastapank967">
                                        <i className="fa fa-twitter"/>
                                    </a>
                                    <a className="btn2" target="_blank" href="https://www.youtube.com/channel/UCh314hh9K5WV1i697roHh1Q">
                                        <i className="fa fa-youtube"/>
                                    </a>
                                    <a className="btn2" target="_blank" href="https://github.com/UoC-Radio">
                                        <i className="fa fa-github"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>
        </footer>
    );
}

export default IndexFooter;

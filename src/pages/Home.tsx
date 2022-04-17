import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { Particle } from "../components/Particles";
import { Type } from "../components/TypeWriter";

import homeMainIcon from '../assets/images/home-main.svg';

import avatarImg from "../assets/images/avatar.svg";
import Tilt from "react-parallax-tilt";

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import '../styles/home.scss';

export function Home () {
    return (
        <section>
            <Container id="home-page" maxWidth={false}>
                <Particle />
                <Container className="content">
                    <Grid container>
                        <Grid item md={7} className="header">
                            <h1 style={{ paddingBottom: 15 }} className="heading">
                                Hi There!{" "}
                                <span className="wave" role="img" aria-labelledby="wave">
                                👋🏻
                                </span>
                            </h1>

                            <h1 className="heading-name">
                                I'M
                                <strong className="main-name"> Victor Lellis</strong>
                            </h1>

                            <div style={{ padding: 50, textAlign: "left" }}>
                                <Type />
                            </div>
                        </Grid>

                        <Grid item md={5} sx={{ paddingBottom: 20 }}>
                            <img
                                src={homeMainIcon}
                                alt="home pic"
                                style={{ maxHeight: "450px" }}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Container>
            <Container id="home-about" >
                <Grid container spacing={12}>
                    <Grid item md={8} className="description">
                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="body">
                            I fell in love with programming within 11y and I have at least learnt
                            something, I think… 🤷‍♂️
                        <br />
                        <br />I am fluent in classics like
                        <i>
                            <b className="purple"> Lua and Javascript/Typescript. </b>
                        </i>
                        <br />
                        <br />
                        My field of Interest's are building new&nbsp;
                        <i>
                            <b className="purple">Web Technologies and Scripts.</b>
                        </i>
                        <br />
                        <br />
                        Whenever possible, I also apply my passion for developing products
                        with <b className="purple">Node.js</b> and
                        <i>
                            <b className="purple">
                            {" "}
                            Modern Javascript/Typescript Library and Frameworks
                            </b>
                        </i>
                        &nbsp; like
                        <i>
                            <b className="purple"> React.js and Vue.js</b>
                        </i>
                        </p>
                    </Grid>
                    <Grid item md={4} className="myAvtar" sx={{ margin: { xs: '0 5rem', md: '0'} }}>
                        <Tilt>
                            <img src={avatarImg} alt="avatar" />
                        </Tilt>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item md={12} className="about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="about-social-links">
                            <li className="social-icons">
                                <a
                                href="https://github.com/vWernay"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour hsocial-icons"
                                >
                                    <GitHubIcon />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                href="https://www.linkedin.com/in/victor-lellis-70015b20b"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour hsocial-icons"
                                >
                                    <LinkedInIcon />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                href="https://www.instagram.com/victorlwernay"
                                target="_blank"
                                rel="noreferrer"
                                className="icon-colour hsocial-icons"
                                >
                                <InstagramIcon />
                                </a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};
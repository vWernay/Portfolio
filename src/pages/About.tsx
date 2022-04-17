import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { Particle } from "../components/Particles";
import laptopImg from "../assets/images/about.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython,
    DiGit,
} from "react-icons/di";
import {
    SiTypescript,
    SiMysql,
    SiLua,
    SiFirebase,
    SiVuedotjs,
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel,
} from "react-icons/si";

import '../styles/about.scss';

export function About() {
  return (
    <Container id="about-page" maxWidth={false}>
        <Particle />
        <Container>
            <Grid container>
                <Grid
                    item
                    md={7}
                    sx={{
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px",
                    }}
                >
                    <Typography variant="h1" component="h1" sx={{ fontSize: "2.4em", paddingBottom: "20px" }}>
                        Know Who <strong className="purple">I'm</strong>
                    </Typography>
                    <Card className="quote-card-view">
                        <CardContent>
                            <blockquote style={{ fontSize: "1.25rem" }}>
                                <Typography component="p" sx={{ textAlign: "justify" }}>
                                    Hi, i'm <Typography component="span" className="purple">Victor Lellis </Typography>
                                    from <Typography component="span" className="purple"> Brasilia, Brazil.</Typography>
                                    <br />I'm currently a full-stack developer.
                                    <br />
                                    <br />
                                    Apart from coding, some other activities that I love to do!
                                </Typography>
                                <ul>
                                    <li className="activity">
                                        <ChevronRightIcon /> Playing Games
                                    </li>
                                    <li className="activity">
                                        <ChevronRightIcon /> Enjoy Cars
                                    </li>
                                </ul>
                            </blockquote>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid
                    item
                    md={4}
                    style={{ paddingBottom: "50px" }}
                    className="aimg"
                >
                    <img src={laptopImg} />
                </Grid>
            </Grid>
            <Typography component="h1" variant="h1" className="project-heading">
                Professional <strong className="purple">Skillset </strong>
            </Typography>

            <Grid container style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiLua />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiTypescript />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <DiNodejs />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <DiReact />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiMysql />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiVuedotjs />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <DiGit />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiFirebase />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <DiPython />
                </Grid>
            </Grid>

            <Typography component="h1" variant="h1" className="project-heading">
                <strong className="purple">Tools</strong> I use
            </Typography>

            <Grid container style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiLinux />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiVisualstudiocode />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiPostman />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiVercel />
                </Grid>
                <Grid item xs={4} md={2} className="tech-icons">
                    <SiHeroku />
                </Grid>
            </Grid>
        </Container>
    </Container>
  );
};

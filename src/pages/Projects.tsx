import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Particle } from "../components/Particles"
import { ProjectCard } from '../components/ProjectCard';

import './../styles/projects.scss'

export function Projects () {
    return (
        <Container id="project-page" maxWidth={false}>
            <Particle />
            <Container>
                <Typography variant="h1" component="h1" className="heading">
                    My Recent <strong className="purple">Works </strong>
                </Typography>
                <Typography component="p" sx={{ color: "white" }}>
                    Here are a project(s) I've worked on recently.
                </Typography>
                <Grid container sx={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Grid item className="card">
                        <ProjectCard
                            imgPath='https://github.com/vWernay/Letmeask/raw/master/.github/cover.svg'
                            title="Letmeask - Rocketseat NLW"
                            description="FAQ Room build with Typescript, React.js, and Firebase. Have features which allows user for realtime messaging, administration controll and supports reactions on messages."
                            link="https://github.com/vWernay/Letmeask"
                        />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

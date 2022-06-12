import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { Particle } from "../components/Particles"
import { ProjectCard } from '../components/ProjectCard';

import './../styles/projects.scss';

const projectsList = {
    Letmeask: {
        title: "Letmeask - Rocketseat NLW",
        imgPath: 'https://github.com/vWernay/Letmeask/raw/master/.github/cover.svg',
        description: "FAQ Room build with Typescript, React.js, and Firebase. Have features which allows user for realtime messaging, administration control and supports reactions on messages.",
        repoLink: 'https://github.com/vWernay/Letmeask'
    },
    Feedget: {
        title: "Feedget - Rocketseat NLW",
        imgPath: 'https://github.com/vWernay/Feedget/raw/master/.github/preview_1.jpg',
        description: "An interactive Feedback Widget for the user. Used: React, TypeScript, TailwindCSS, Accessibility, NodeJs, Prisma and S.O.L.I.D principles.",
        repoLink: 'https://github.com/vWernay/Feedget'
    },
    RDiscoverChallenges: {
        title: "Rocketseat Discover Challenges",
        imgPath: 'https://github.com/vWernay/Desafios-Rocketseat/raw/master/.github/cover.jfif',
        description: "Some front-end challenges from Rocketseat Discover, using a variety of Principles, Frameworks/Libs and Languages",
        repoLink: 'https://github.com/vWernay/Desafios-Rocketseat'
    }
}

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

                <Grid container spacing={4} sx={{ justifyContent: "center", paddingTop: "2rem", paddingBottom: "1rem" }}>
                    {Object.entries(projectsList).map(([key, value]) => (
                        <ProjectCard
                            key={key}
                            imgPath={value.imgPath}
                            title={value.title}
                            description={value.description}
                            link={value.repoLink}
                        />
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

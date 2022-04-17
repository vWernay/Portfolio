import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { BiLinkExternal } from "react-icons/bi";

import './styles.scss'

type PropsType = {
    imgPath: string;
    title: string;
    description: string;
    link: string;
}

export function ProjectCard (props: PropsType) {
    return(
        <Grid item md={4} id="project-card">
            <Card className="view">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={props.imgPath}
                        alt="chatif preview"
                    />
                    <CardContent>
                        <Typography gutterBottom align="center" variant="h5" component="div">
                            {props.title}
                        </Typography>
                        <Typography variant="body2">
                            {props.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{justifyContent: 'center'}}>
                    <Button color="primary" sx={{margin: '.15rem 0 1.5rem'}} href={props.link} target="_blank">
                        <BiLinkExternal /> &nbsp;
                        View Project
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}
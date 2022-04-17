import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './styles.scss';

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container id="footer" maxWidth={false}>
        <Grid container sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row' }, alignItems: 'center' }}>
            <Grid item md={4} className="copywright">
                <Typography variant="h3" component="h3">
                    Developed by Victor Lellis
                </Typography>
            </Grid>
            <Grid item md={4} className="copywright">
                <Typography variant="h3" component="h3">
                    Copyright © {year} vWernay
                </Typography>
            </Grid>
            <Grid item md={4} className="body">
                <ul className="icons">
                    <li className="social-icons">
                        <a
                            href="https://github.com/vWernay"
                            style={{ color: "white" }}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <GitHubIcon />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.linkedin.com/in/victor-lellis-70015b20b"
                            style={{ color: "white" }}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <LinkedInIcon />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                            href="https://www.instagram.com/victorlwernay"
                            style={{ color: "white" }}
                            target="_blank" 
                            rel="noopener noreferrer"
                        >
                            <InstagramIcon />
                        </a>
                    </li>
                </ul>
            </Grid>
        </Grid>
    </Container>
  );
};

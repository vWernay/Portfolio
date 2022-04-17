import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { Particle } from '../components/Particles';

import pdf from "./../assets/pdf/Victor-Lellis_Resume.pdf";
import { Document, Page, pdfjs } from "react-pdf";

import { AiOutlineDownload } from "react-icons/ai";

import './../styles/resume.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const resumeLink = "https://raw.githubusercontent.com/vWernay/portfolio/master/src/assets/pdf/Victor-Lellis_Resume.pdf";

export function Resume () {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
      setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container id="resume-page" maxWidth={false}>
                <Particle />
                <Grid container className="document">
                    <Document file={resumeLink} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
                    </Document>
                </Grid>
        
                <Grid container sx={{ justifyContent: "center", position: "relative" }}>
                    <Button
                        color="primary"
                        href={pdf}
                        target="_blank"
                        sx={{ maxWidth: "250px" }}
                    >
                        <AiOutlineDownload />
                        &nbsp;Download CV
                    </Button>
                </Grid>
            </Container>
        </div>
    );
};
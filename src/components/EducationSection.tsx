import { Box, Grid, styled, Typography, Icon, alpha } from '@mui/material';
import React from 'react';
import education_svg from '../assets/graduation hats-pana.svg';
import EventIcon from '@mui/icons-material/Event'; // Import the Event icon from Material-UI
import LocationOnIcon from '@mui/icons-material/LocationOn'; // Import the LocationOn icon from Material-UI

export interface EducationItem {
    institution: string;
    degree: string;
    period: string;
    location: string;
    svg: string;
}

const educations: EducationItem[] = [
    {
        institution: "Faculty of Computer and Data Science",
        degree: "Alexandria University",
        period: "2019 - 2023",
        location: "Alexandria, Egypt",
        svg: education_svg
    }
];

export const EducationSection: React.FC = () => {
    return (
        <Box component="section" id="Education" sx={{ my: 8, px: 3 }}>
            <TitleBox>
                <Typography variant="h2" component="h2">
                    Education
                </Typography>
            </TitleBox>
            {educations.map((education) => (
                <EducationItemBox key={JSON.stringify(education)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <SvgContainer>
                                <img src={education.svg} alt="Work Illustration" />
                            </SvgContainer>
                        </Grid>
                        <Grid item sx={{ justifyContent: 'center', display: 'flex', flexDirection: 'column' }} xs={12} md={8}>
                            <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 1 }}>
                                {education.institution}
                            </Typography>
                            <TypographyWithBorder variant="body1" sx={{ mb: 1 }}>
                                <Icon component={EventIcon} sx={{ fontSize: 20, mr: 1 }} />
                                {education.period}
                            </TypographyWithBorder>
                            <TypographyWithBorder variant="body1" sx={{ mb: 2 }}>
                                <Icon component={LocationOnIcon} sx={{ fontSize: 20, mr: 1 }} />
                                {education.location}
                            </TypographyWithBorder>
                        </Grid>
                    </Grid>
                </EducationItemBox>
            ))}
        </Box>
    );
};

const TitleBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
    "& h2": {
        paddingBottom: theme.spacing(1),
        position: "relative",
        "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: theme.palette.primary.main,
            width: "50%",
            height: theme.spacing(0.5),
        },
    },
}));

const EducationItemBox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(6),
    padding: theme.spacing(3),
    borderRadius: theme.shape.borderRadius,
    background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.7)}, ${theme.palette.background.default})`,
    boxShadow: theme.shadows[3],
    transition: "transform 0.3s, box-shadow 0.3s",
    "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: theme.shadows[6],
    },
}));

const TypographyWithBorder = styled(Typography)(({ theme }) => ({
    borderLeft: `4px solid ${theme.palette.primary.dark}`,
    paddingLeft: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
}));

const SvgContainer = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    "& img": {
        maxWidth: '50%',
        height: 'auto',
    }
}));

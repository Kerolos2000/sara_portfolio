import { alpha, Box, Chip, Grid, styled, Typography } from "@mui/material";
import { WorkOutline, Event } from "@mui/icons-material";
import React from "react";
import work1 from "../assets/freelancer-bro.svg";

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  svg: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Data Analyst",
    company: "Brand Marketing Agency",
    period: "08/2023 - Present",
    location: "Remote",
    description: [
      "Built Power BI dashboards to visualize core Business KPIs (such as monthly revenues) saving 10 hours per week of manual reporting work.",
      "Handled large datasets, conducted data cleansing, and gathered information from diverse sources, executing Extract, Transform, Load (ETL) processes.",
    ],
    svg: work1,
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <Box component="section" id="Experience" sx={{ my: 8 }}>
      <TitleBox>
        <Typography variant="h2" component="h2">
          Experience
        </Typography>
      </TitleBox>
      {experiences.map((experience) => (
        <ExperienceItemBox key={JSON.stringify(experience)}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <SvgContainer>
                <img src={experience.svg} alt="Work Illustration" />
              </SvgContainer>
            </Grid>
            <Grid
              item
              sx={{
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
              xs={12}
              md={8}
            >
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: "bold", mb: 1 }}
              >
                {experience.title}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap" }} gap={1} mb={2}>
                <StyledChip
                  label={experience.company}
                  color="info"
                  icon={<WorkOutline />}
                />
                <StyledChip
                  label={experience.period}
                  color="success"
                  icon={<Event />}
                />
                <StyledChip
                  label={experience.location}
                  color="secondary"
                  icon={<WorkOutline />}
                />
              </Box>
              <DescriptionList>
                {experience.description.map((desc, i) => (
                  <Typography
                    variant="body2"
                    component="li"
                    key={i}
                    sx={{ mb: 1 }}
                  >
                    {desc}
                  </Typography>
                ))}
              </DescriptionList>
            </Grid>
          </Grid>
        </ExperienceItemBox>
      ))}
    </Box>
  );
};

const StyledChip = styled(Chip)(({ theme }) => ({
  padding: theme.spacing(0.5, 1),
}));

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

const ExperienceItemBox = styled(Box)(({ theme }) => ({
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

const DescriptionList = styled("ul")(({ theme }) => ({
  padding: theme.spacing(0),
  margin: theme.spacing(0, 0, 2),
  listStyle: "none",
  "& li": {
    marginBottom: theme.spacing(1),
    paddingLeft: theme.spacing(2),
    borderLeft: `4px solid ${theme.palette.primary.dark}`,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const SvgContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  "& img": {
    maxWidth: "75%",
    height: "auto",
  },
}));

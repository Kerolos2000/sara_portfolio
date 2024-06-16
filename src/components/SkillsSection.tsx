import { Box, styled, Typography } from "@mui/material";
import React from "react";
import Atropos from "atropos/react";
import {
  Storage,
  BarChart,
  InsertChartOutlined,
  Code,
  Functions,
  LocalDining,
  Analytics,
  EmojiObjects,
  StorageOutlined,
  BarChartOutlined,
  Grain,
  FilterListOutlined,
  AccountTreeOutlined,
  LayersOutlined,
  PlaylistAddCheckOutlined,
  BuildOutlined,
} from "@mui/icons-material";
import { Masonry } from "@mui/lab";

export interface Skill {
  name: string;
  icon: React.ReactElement;
}
const skills: Skill[] = [
  {
    name: "MySQL",
    icon: <Storage fontSize="large" />,
  },
  {
    name: "Power BI",
    icon: <BarChart fontSize="large" />,
  },
  {
    name: "Excel",
    icon: <InsertChartOutlined fontSize="large" />,
  },
  {
    name: "Python",
    icon: <Code fontSize="large" />,
  },
  {
    name: "R",
    icon: <Functions fontSize="large" />,
  },
  {
    name: "HTML/CSS",
    icon: <LocalDining fontSize="large" />,
  },
  {
    name: "PHP",
    icon: <Analytics fontSize="large" />,
  },
  {
    name: "JavaScript",
    icon: <EmojiObjects fontSize="large" />,
  },
  {
    name: "SAS Viya",
    icon: <StorageOutlined fontSize="large" />,
  },
  {
    name: "Machine Learning",
    icon: <BarChartOutlined fontSize="large" />,
  },
  {
    name: "Data Modeling",
    icon: <Grain fontSize="large" />,
  },
  {
    name: "Data Visualization",
    icon: <FilterListOutlined fontSize="large" />,
  },
  {
    name: "Web Scraping",
    icon: <AccountTreeOutlined fontSize="large" />,
  },
  {
    name: "Data Wrangling",
    icon: <LayersOutlined fontSize="large" />,
  },
  {
    name: "Data Warehousing",
    icon: <PlaylistAddCheckOutlined fontSize="large" />,
  },
  {
    name: "Data Architecture",
    icon: <BuildOutlined fontSize="large" />,
  },
  {
    name: "Data Preparation",
    icon: <StorageOutlined fontSize="large" />,
  },
  {
    name: "ETL",
    icon: <BarChartOutlined fontSize="large" />,
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <Box component="section" id="Skills" sx={{ my: 8 }}>
      <TitleBox>
        <Typography variant="h2" component="h2">
          Skills
        </Typography>
      </TitleBox>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
        {skills.map((skill) => (
          <Atropos key={JSON.stringify(skill)}>
            <SkillBox>
              <Box sx={{ fontWeight: "bold", mb: 1 }}>{skill.icon}</Box>
              <Typography variant="h5" component="h3">
                {skill.name}
              </Typography>
            </SkillBox>
          </Atropos>
        ))}
      </Masonry>
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

const SkillBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  borderRadius: theme.shape.borderRadius,
  border: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

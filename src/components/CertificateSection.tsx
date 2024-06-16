import React from "react";
import img1 from "../assets/certificate1.png";
import img2 from "../assets/certificate2.png";
import img3 from "../assets/certificate3.png";
import img4 from "../assets/certificate4.png";
import img5 from "../assets/certificate5.png";
import img6 from "../assets/certificate6.png";
import img7 from "../assets/certificate7.png";
import img8 from "../assets/certificate8.png";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import { TitleBox } from "../themes";
import Atropos from "atropos/react";

const certificateImages = [img1, img2, img3, img4, img5, img6, img7, img8];

interface CertificateProps {
  imgSrc: string;
}

export const CertificateSection: React.FC = () => {
  return (
    <Box component="section" id="Education" sx={{ my: 8 }}>
      <TitleBox>
        <Typography variant="h2" component="h2">
          Certificates
        </Typography>
      </TitleBox>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
        {certificateImages.map((img) => (
          <Atropos key={JSON.stringify(img)}>
            <img style={{ width: "100%" }} src={img} title="Certificate" />
          </Atropos>
        ))}
      </Masonry>
    </Box>
  );
};

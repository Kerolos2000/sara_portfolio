import { alpha, Box, CircularProgress, useTheme } from "@mui/material";
import React from "react";

export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        position: "fixed",
        zIndex: theme.zIndex.drawer + 1,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: alpha(theme.palette.background.default, 0.95),
        backdropFilter: "blur(5px)",
      }}
    >
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={theme.palette.secondary.main} />
            <stop offset="100%" stopColor={theme.palette.primary.main} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        size={100}
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </Box>
  );
};

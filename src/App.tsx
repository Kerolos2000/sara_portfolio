import { CssBaseline } from "@mui/material";
import { Layout } from "./components";
import { StoreProvider, ThemeProvider } from "./providers";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);
  return (
    <StoreProvider>
      <ThemeProvider>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  );
}

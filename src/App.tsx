import { CssBaseline } from "@mui/material";
import { Layout } from "./components";
import { StoreProvider, ThemeProvider } from "./providers";

export function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </StoreProvider>
  );
}

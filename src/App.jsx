import { Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Details from "./components/Details";

function App() {
  return (
    <>
      <CssBaseline />
      {/* The rest of your application */}
      <Header />
      <Container maxWidth="xl">
        <Details />
      </Container>
    </>
  );
}

export default App;

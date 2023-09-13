import { Button, Divider, Stack } from "@mui/material";
import logoFitlfe from "./../assets/fitlife-logo.png";

const HEIGHT = "100px";

export default function Header() {
  return (
    <Stack>
      <Stack
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        height={HEIGHT}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={"92%"}
        >
          <img
            src={logoFitlfe}
            alt="Logo da fitlife"
            style={{ width: "auto", height: "80px" }}
          />
          <Button
            variant="contained"
            sx={{ background: "rgba(185, 0, 0,0.2)", color: "rgb(185, 0, 0)" }}
          >
            Entrar no sistema
          </Button>
        </Stack>
      </Stack>
      <Divider />
    </Stack>
  );
}

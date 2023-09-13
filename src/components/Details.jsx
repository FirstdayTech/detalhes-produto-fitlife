import { Box, Grid, Stack, Typography } from "@mui/material";
import whey1 from "./../assets/whey/whey1.webp";
import whey2 from "./../assets/whey/whey2.webp";
import whey3 from "./../assets/whey/whey3.webp";
import whey4 from "./../assets/whey/whey4.webp";

export default function Details() {
  return (
    <Grid container pt={5}>
      <Grid item xs={7}>
        <Grid container>
          <Grid item xs={2}>
            <Stack spacing={4} pr={2}>
              <Box
                component={"img"}
                src={whey2}
                sx={{ width: "100%", height: "auto", borderRadius: 4 }}
              />
              <Box
                component={"img"}
                src={whey3}
                sx={{ width: "100%", height: "auto", borderRadius: 4 }}
              />
              <Box
                component={"img"}
                src={whey4}
                sx={{ width: "100%", height: "auto", borderRadius: 4 }}
              />
            </Stack>
          </Grid>
          <Grid item xs={10}>
            <Box
              component={"img"}
              src={whey1}
              sx={{ width: "100%", height: "auto", borderRadius: 7 }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <Stack spacing={3} pl={3}>
          <Typography variant="h3" color="rgb(185,0,0)">
            Whey Protein Gold Standard
          </Typography>
          <Typography variant="h4" color="rgb(185,0,0)">
            R$ 150,00
          </Typography>
          <Typography variant="body1" color="rgb(185,0,0)">
            Proteína de soro de leite para recuperação muscular de alta
            qualidade.
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
}

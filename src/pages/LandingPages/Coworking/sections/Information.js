/*
=========================================================
* Material Kit 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import SimpleInfoCard from "examples/Cards/InfoCards/SimpleInfoCard";

function Information() {
  return (
    <MKBox component="section" py={{ xs: 6, md: 4 }}>
      <Container>
      <Grid container
          item
          flexDirection="column"
          alignItems="center"
          sx={{ textAlign: "center", mx: "auto" }}>
            <MKTypography variant="h3" position="center" my={1}>
              Our Services
              <br/><br/>
            </MKTypography>  
        <Grid container item xs={12} justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
            sx={{ ml: { xs: 0, md: "auto" }, mr: { xs: 0, md: 6 }, mb: { xs: 4, md: 0 } }}
          >
            <Stack spacing={{ xs: 4, md: 8 }}>
              <SimpleInfoCard
                icon="language_icon"
                title="Web Development"
                description="We create rich products and applications that help your business drive innovation and growth sustainably and edge out your competitors for market dominance. We use the latest technology trends to meet your ever-evolving business needs."
              />
              <SimpleInfoCard
                icon="psychology_icon"
                title="Artifical Intelligence Development"
                description="Every day, more businesses and companies adopt Artificial Intelligence (AI) to
                leverage their growth. We help you to grow you business by building custom AI
                solutions tailored to your work ecosystem. We help you to put AI to work to
                gain a competitive edge and drive growth to your business."
              />
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ mr: { xs: 0, md: "auto" }, ml: { xs: 0, md: 6 }, mb: { xs: 4, md: 0 } }}
          >
            <Stack spacing={{ xs: 4, md: 8 }}>
              <SimpleInfoCard
                icon="phone_android_icon"
                title="Mobile App Development"
                description="We offer adaptive product development services in Android and iOS application development. We help your business to bring out the best mobile experiences on all Android and iOS powered devices for your consumers."
                /><br />
              <SimpleInfoCard
                icon="celebration_icon"
                title="Enterprise Solutions"
                description="We help to make your organisation more efficient, more agile and more
                intelligent. Our custom enterprise software development services allow
                enterprises to equip their workforce with better productivity tools and
                capabilities.
                "
              />
            </Stack>
          </Grid>
        </Grid>
        </Grid> 
      </Container>
    </MKBox>
  );
}

export default Information;

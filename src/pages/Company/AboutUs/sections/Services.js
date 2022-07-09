// @mui material components
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// Material Kit 2 PRO React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 PRO React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";

// Images
import bgWeb from "assets/images/web.jpg";
import bgMobile from "assets/images/mobile.jpg";
import bgAi from "assets/images/ai.jpg";
import bgEnterprise from "assets/images/enterprise.jpg";
import bgImage from "assets/images/examples/city.jpg";

function CardRotate() {
  return (
    <MKBox
      component="section"
      position="relative"
      py={12}
      sx={{
        backgroundImage: ({ palette: { gradients }, functions: { linearGradient, rgba } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
      }}
    >
      <Container>
        <Grid container>
          <Grid item xs={12} lg={8} sx={{ mb: 6 }}>
            <MKTypography variant="h3" color="white">
              Our Services
            </MKTypography>
            <MKTypography variant="body2" color="white" opacity={0.8}>
              Temp explanation
            </MKTypography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgWeb}
                  icon="language_icon"
                  title={
                    <>
                      Web
                      <br />
                      Development
                    </>
                  }
                  description="We create rich products and applications that help your business drive innovation and growth sustainably and edge out your competitors for market dominance. We use the latest technology trends to meet your ever-evolving business needs."
                />
              </RotatingCard>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={1}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgMobile}
                  icon="phone_android_icon"
                  title={
                    <>
                      Mobile App
                      <br />
                      Development
                    </>
                  }
                  description="We offer adaptive product development services in Android and iOS application development. We help your business to bring out the best mobile experiences on all Android and iOS powered devices for your consumers."
                />
              </RotatingCard>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgAi}
                  icon="psychology_icon"
                  title={
                    <>
                      Artificial Intelligence
                      <br />
                      Development
                    </>
                  }
                  description={
                    <>
                      Every day, more businesses and companies adopt Artificial Intelligence (AI) to
                      leverage their growth. We help you to grow you business by building custom AI
                      solutions tailored to your work ecosystem. We help you to put AI to work to
                      gain a competitive edge and drive growth to your business.
                    </>
                  }
                />
              </RotatingCard>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={6}>
            <MKBox mb={{ xs: 1, lg: 0 }}>
              <RotatingCard>
                <RotatingCardFront
                  image={bgEnterprise}
                  icon="celebration_icon"
                  title={
                    <>
                      Enterprise
                      <br />
                      Solutions
                    </>
                  }
                  description={
                    <>
                      We help to make your organisation more efficient, more agile and more
                      intelligent. Our custom enterprise software development services allow
                      enterprises to equip their workforce with better productivity tools and
                      capabilities.
                      <br />
                      <br />
                    </>
                  }
                />
              </RotatingCard>
            </MKBox>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default CardRotate;

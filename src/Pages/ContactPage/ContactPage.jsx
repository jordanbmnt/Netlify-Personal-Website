import { Container } from "@mui/system";
import "./contactPage.css";
import Spline from "@splinetool/react-spline";

export const ContactPage = () => {
  return (
    <Container sx={{ display: "flex" }} className='hero-page'>
      <Container>
        <h1>
          hello
          <Spline scene='https://prod.spline.design/BVCqfL6og-M0RKFp/scene.splinecode' />
        </h1>
      </Container>
    </Container>
  );
};

import { Container } from "@mui/system";
import "./contactPage.css";
import robot from "../../Images/robot.png";
import browser from "../../Images/browser.png";

export const ContactPage = () => {
  return (
    <Container
      sx={{ display: "flex", position: "relative" }}
      className='hero-page'
    >
      <img src={robot} alt='robot' />
      <img src={browser} alt='robot' />
    </Container>
  );
};

import { Container } from "@mui/system";
import "./heroPage.css";
import cloud from "../../Images/whiteFluffyCloud.png";

export const HeroPage = () => {
  return (
    <Container
      sx={{ display: "flex", scrollSnapAlign: "start" }}
      className='hero-page'
    >
      <Container>
        <h1>
          hello
          <img id='hero-cloud' src={cloud} alt='' />
        </h1>
      </Container>
    </Container>
  );
};

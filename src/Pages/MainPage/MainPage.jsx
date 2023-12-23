import { Container } from "@mui/system";
import "./mainPage.css";
import { Button } from "@mui/material";
import earth from "../../Images/planetEarth.png";
import spaceMan from "../../Images/astronautThreeQuarterBackView.png";
import { NavBar } from "../../Components/NavBar/NavBar";

export const MainPage = () => {
  return (
    <Container
      sx={{ display: "flex", scrollSnapAlign: "start" }}
      className='main-page'
    >
      <NavBar />
      <Container className='heading-container'>
        <h1>I am Jordan M Beaumont</h1>
        <h1 id='key-word'>Web developer.</h1>
        <h4>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, magnam
          quidem nostrum praesentium quisquam suscipit, qui optio hic
          distinctio, voluptatibus aliquid. Nam, culpa. Aliquam libero sed quod
          maxime laboriosam officia debitis, laudantium eos ullam alias fugit
          ipsum deserunt incidunt dicta nihil expedita tenetur! Voluptates
          delectus aspernatur autem eos perferendis quis.
        </h4>
      </Container>
      <Button id='generate-button' variant='outlined'>
        Generate
      </Button>
      <img id='main-earth' src={earth} alt='' />
      <img id='main-spaceman' src={spaceMan} alt='' />
    </Container>
  );
};

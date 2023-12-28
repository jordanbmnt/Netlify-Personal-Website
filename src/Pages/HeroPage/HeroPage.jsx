import { Container } from "@mui/system";
import "./heroPage.css";
import Spline from "@splinetool/react-spline";
import { useRef, useState } from "react";
import { Box } from "@mui/material";

export const HeroPage = () => {
  const cloudOne = useRef();
  const cloudTwo = useRef();
  const cloudThree = useRef();
  const [pos, setPos] = useState(0);
  function onLoad(spline) {
    const obj = spline.findObjectById("40cab445-4094-4332-a8d9-9d0a8d3025b7");
    const obj2 = spline.findObjectById("eb31b5fc-57ec-45cf-b47f-9ebba36a44c6");
    const obj3 = spline.findObjectById("97731825-e852-4f04-8e7c-d31ae12482aa");
    cloudOne.current = obj;
    cloudTwo.current = obj2;
    cloudThree.current = obj3;

    if (cloudOne.current) {
      cloudOne.current.position.x += 600;
      cloudTwo.current.position.x += 600;
      cloudThree.current.position.x += 600;
      window.addEventListener("scroll", function () {
        setPos(Math.floor(this.scrollY - window.innerHeight));
        // cloudOne.current.position.x += 100;
      });
    }
  }
  return (
    <Container
      sx={{ display: "flex", scrollSnapAlign: "start" }}
      className='hero-page'
    >
      <Container id='content-box'>
        <Box id='link-box' sx={{ height: "60vh", width: "50vw" }}>
          <Box className='link-element'></Box>
          <Box className='link-element'></Box>
          <Box className='link-element'></Box>
        </Box>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem unde
          voluptatem illo eligendi veritatis quibusdam accusantium error
          praesentium iste nam labore repellat similique dolores architecto
          neque ipsam optio quasi, adipisci minus quod qui quis nemo? Eos
          voluptatem facilis quos consequatur, suscipit temporibus quod unde
          placeat repudiandae cupiditate quia nostrum consequuntur.
        </p>
      </Container>
      <Spline
        onLoad={onLoad}
        id='spline-clouds'
        scene='https://draft.spline.design/GkT0VW68VktYVduV/scene.splinecode'
      />
    </Container>
  );
};

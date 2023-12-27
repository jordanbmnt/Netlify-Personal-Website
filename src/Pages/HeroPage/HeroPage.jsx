import { Container } from "@mui/system";
import "./heroPage.css";
import Spline from "@splinetool/react-spline";
import { useRef, useState } from "react";

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
      window.addEventListener("scroll", function () {
        setPos(Math.floor(this.scrollY - window.innerHeight));
        cloudOne.current.position.x += 100;
      });
      // cloudOne.current.position.x += pos * 100;
      // cloudTwo.current.position.x += pos * 100 * 3;
      // cloudThree.current.position.x += pos * 100 * 4;
    }
  }
  return (
    <Container
      sx={{ display: "flex", scrollSnapAlign: "start" }}
      className='hero-page'
    >
      <Container id='content-box'>
        <h1>{pos}</h1>
      </Container>
      <Spline
        onLoad={onLoad}
        id='spline-clouds'
        scene='https://draft.spline.design/WpGfUOX7-iXG2VgG/scene.splinecode'
      />
    </Container>
  );
};

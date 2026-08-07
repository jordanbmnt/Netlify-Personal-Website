import { LucideArrowRight } from "lucide-react";
import heroImage from "../../assets/hero-image.png"
import "./style.css"

export const Home = () => {

  return (
    <div className="page">
      <div className="hero">
        <div className="titles">
          <h1>Sculpting </h1>
          <h1><span>Digital</span> Reality.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ullam autem. Similique ipsam dolores ratione corrupti maiores aspernatur ipsa, labore deserunt omnis velit! Possimus, non magni voluptatem expedita suscipit magnam.</p>
          <a href="#">View Exhibition <LucideArrowRight size={"0.8rem"} /></a>
        </div>
        <div className="content">
          <img src={heroImage} alt="soy_jimb clay model" />
          <div className="info">
            <p>EXHIBIT 01</p>
            <h3>The Sentinel</h3>
            <p>Digital Clay 2026</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="index">
        <div className="head">
          <div className="title">
            <p>INDEX</p>
            <h3>Selected Works</h3>
          </div>
          <div>
            <p className="active">ALL</p>
            <p>PORTRAITURE</p>
            <p>ABSTRACT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
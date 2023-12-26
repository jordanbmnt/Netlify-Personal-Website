import { Container } from "@mui/system";
import "./navBar.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export const NavBar = () => {
  return (
    <Container>
      <Container sx={{ display: "flex" }} className='nav-bar'>
        <a href='https://google.com'>Home</a>
        <a href='https://google.com'>About</a>
        <a href='https://google.com'>Contact</a>
      </Container>
      <nav className='left-arrow'>
        <ChevronLeft sx={{ fontSize: 40 }} />
      </nav>
      <nav className='right-arrow'>
        <ChevronRight sx={{ fontSize: 40 }} />
      </nav>
    </Container>
  );
};

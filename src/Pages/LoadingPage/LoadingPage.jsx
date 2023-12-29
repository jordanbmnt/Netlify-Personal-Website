import { Container } from "@mui/system";
import "./loadingPage.css";

export const LoadingPage = () => {
  return (
    <Container
      sx={{
        display: "flex",
        backgroundColor: "#1f2121",
        zIndex: 10,
        alignContent: "center",
        justifyContent: "center",
      }}
      className='hero-page'
    >
      <Container
        sx={{
          backgroundColor: "#424747",
          width: "50px",
        }}
        className='loader'
      ></Container>
      <Container
        sx={{
          backgroundColor: "#121413",
          width: "50px",
        }}
        className='loader'
      ></Container>
    </Container>
  );
};

import { useEffect, useState } from "react";
import "./App.css";
import { ContactPage } from "./Pages/ContactPage/ContactPage";
import { HeroPage } from "./Pages/HeroPage/HeroPage";
import { LoadingPage } from "./Pages/LoadingPage/LoadingPage";
import { MainPage } from "./Pages/MainPage/MainPage";

function App() {
  const [loadingVisible, setLoadingVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingVisible(false);
    }, 1000);
  }, []);

  return (
    <div className='App'>
      {loadingVisible && <LoadingPage />}
      <MainPage />
      <HeroPage />
      <ContactPage />
    </div>
  );
}

export default App;

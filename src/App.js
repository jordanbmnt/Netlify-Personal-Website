import './App.css';
import { HeroPage } from './Pages/HeroPage/HeroPage';
import { MainPage } from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className="App" sx={{scrollSnapType: "y mandatory"}}>
      <MainPage/>
      <HeroPage/>
    </div>
  );
}

export default App;

import './App.css';
import { ContactPage } from './Pages/ContactPage/ContactPage';
import { HeroPage } from './Pages/HeroPage/HeroPage';
import { MainPage } from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <MainPage/>
      <HeroPage/>
      <ContactPage/>
    </div>
  );
}

export default App;

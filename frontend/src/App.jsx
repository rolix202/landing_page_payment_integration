import './index.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Benefits from './components/Benefits';
import Ticket from './components/Ticket';
import MissingOut from './components/MissingOut';
import Foot from './components/Foot';
import Stats from './components/Stats';

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <NavBar />
      <Hero />
      <Partners />
      <Benefits />
      <Stats />
      <Ticket />
      <MissingOut />
      <Foot />
    </div>
  );
}

export default App;

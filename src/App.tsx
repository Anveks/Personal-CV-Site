import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Portfolio from './components/Portfolio/Portfolio';
import Reviews from './components/Reviews/Reviews';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

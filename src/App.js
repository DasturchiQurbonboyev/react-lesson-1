import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services/Services';
import Covid from './components/covid/Covid';
import Articles from './components/articles/Articles';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
let number = 14
console.log(number);

function App() {
  return (
    <div className="App">
      <header className='container'>
        <Navbar />
      </header>

      <main>
        <section className='container'>
          <Hero />
        </section>

        <section className="container">
          <About />
        </section>

        <section className="container">
          <Services />
        </section>

        <section className="container">
          <Covid />
        </section>

        <section className="container">
          <Articles />
        </section>

        <section className="">
          <Contact />
        </section>
      </main>


      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;

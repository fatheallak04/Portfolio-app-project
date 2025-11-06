import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Portfolio from './components/Portfolio/Portfolio.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import { Route, Routes } from 'react-router-dom';

function App(){

  return <>
    <Header />
    <Routes>
      <Route path = '/' element = {<Hero />}></Route>
      <Route path = '/Portfolio' element = {<Portfolio />}></Route>
      <Route path = '/About' element = {<About />}></Route>
      <Route path = '/Contact' element = {<Contact />}></Route>
    </Routes>
    <Footer />
  </>
}
export default App;
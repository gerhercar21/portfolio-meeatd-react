import React from 'react';
import {Navbar} from './components/Navbar.js';
import {Asignaturas} from './components/Asignaturas.js';
import { Home } from './components/Home.js';
import { Ect } from './components/Ect.js';
import Pidi from './components/Pidi.js';
import EctD from './components/EctD.js';
import Micro from './components/Micro.js';
import Design from './components/Design.js';
import Metod from './components/Metod.js';
import { Soc } from './components/Soc.js';
import { Fudi } from './components/Fudi.js';
import { Footer } from './components/Footer.js';

export default function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break;
    case "/Asignaturas":
      component = <Asignaturas />
      break;
    case "/Ect":
      component = <Ect />
        break;
    case "/Soc":
      component = <Soc />
    break;
    case "/Pidi":
      component = <Pidi />
    break;
    case "/Fudi":
      component = <Fudi />
    break;
    case "/EctD":
      component = <EctD />
    break;
    case "/Micro":
      component = <Micro />
    break;
    case "/Design":
      component = <Design />
    break;
    case "/Metod":
      component = <Metod />
    break;
  }
  return (
    <>
      <Navbar />
      {component}
      <br></br>
      {/* <Home /> */}
      <Footer />
    </>
  );
}
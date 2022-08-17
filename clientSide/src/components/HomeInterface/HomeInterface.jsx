import React from "react";
import description_img from '../images/description_img.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NosValeur from "../NosValeur";
import { LinkContainer } from "react-router-bootstrap";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
import NavDropdown from 'react-bootstrap/NavDropdown';

function HomeInterface() {

  fontawesome.library.add(faCheckSquare, faCoffee);

  return (
    <div className="bg-img" id="bg_img_header">

      <Navbar bg="transparent" expand="lg" id="navbarTestIcons">
        <Container>
          <Navbar.Brand href="/">
            <div className="bgTestImg"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span> <FontAwesomeIcon icon="bars" color="white" size="lg" /> </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="HomeNav">
              <Nav.Link className='Nav_home' id='NavText_home' href="/">Acceuil</Nav.Link>
              <NavDropdown title="Nos Solutions" id="dropdown_Solution">
                <NavDropdown.Item href="/Hodhod">Hodhod</NavDropdown.Item>
                <NavDropdown.Item href="/SensesIA">SensesIA</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/NosExpertises" className='Nav_home' id='NavText_home'>
                Notre expertise
              </Nav.Link>
              <Nav.Link href="/Apropos" className='Nav_home' id='NavText_home'>
                A propos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div className="Description_supersenses">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
            <h2>Bienvenue à</h2>
              <h1>Super Senses</h1>
              <p>Super Senses est une startup Tunisienne dévoilée par une équipe d’ingénieurs
                multidisciplinaires. Notre vision est de crée un outil technologique d’aide à la
                décision capable d’ajouter un 6ieme sens utilisant l’intelligence artificielle.</p>
              <LinkContainer to="/Apropos"><Button variant="outline-dark">Lire tout</Button></LinkContainer>
            </div>
            <div className="col-md-6 align-self-center">
            <div id="description_img">
                <img src={description_img} alt="description_img" className="img-responsive" style={{width: '100%', maxWidth: '471px'}}/>
              </div>
            </div>
          </div>
        </div>
        <NosValeur />
      </div>

    </div>
  );
}

export default HomeInterface;

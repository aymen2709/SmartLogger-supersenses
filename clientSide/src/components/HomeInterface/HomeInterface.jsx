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
import { useEffect } from 'react';
import { useState } from 'react';
import NavBarHeader from "../NavBarsHeaderFooter/NavBarHeader";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { HashLink } from 'react-router-hash-link';

function HomeInterface() {

  const [isScrolled, setIsScrolled] = useState(false);

  const onScrollEvent = () => {
    window.scrollY >= 100 ? setIsScrolled(true) : setIsScrolled(false);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScrollEvent);
    return () => {
      window.removeEventListener('scroll', onScrollEvent);
    }
  }, []);

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
              <Nav.Link className='Nav_home NavText_home' id='' href="/">Accueil</Nav.Link>
              {/* <NavDropdown title="Nos Solutions" id="dropdown_Solution">
                <NavDropdown.Item href="/Hodhod">Hodhod</NavDropdown.Item>
                <NavDropdown.Item href="/SensesIA">SensesIA</NavDropdown.Item>
              </NavDropdown> */}
              <div className='btnNosSolution'>
                <Dropdown as={ButtonGroup}>
                  <Button variant='transparent' >
                    <HashLink style={{ textDecoration: "none", color: "black" }} smooth to="/#no-solutions">
                      <h6 className="NavText_home">Nos Solutions</h6>
                    </HashLink>
                  </Button>
                  <Dropdown.Toggle split variant="transparent" size="sm" id="dropdown-split-basic" />
                  <Dropdown.Menu size="sm">
                    <Dropdown.Item href="/Hodhod"><h6 className="NavText_home">Hodhod</h6></Dropdown.Item>
                    <Dropdown.Item href="/SensesIA"><h6 className="NavText_home">SensesIA</h6></Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Nav.Link href="/NosExpertises" className='Nav_home NavText_home' id=''>
                Nos expertises
              </Nav.Link>
              <Nav.Link href="/Apropos" className='Nav_home NavText_home' id=''>
                A propos
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {isScrolled ? <NavBarHeader /> : null}


      <div className="Description_supersenses">
        <div className="container">
          <div className="row">
            <div className="col-md-6 align-self-center">
              <div className="bienvenuto">Bienvenue à</div>
              <div className="big-title">Super Senses</div>
              <p className="bienvenuto-p">Super Senses est une startup Tunisienne dévoilée par une équipe d’ingénieurs
                multidisciplinaires. Notre vision est de créer un outil technologique d’aide à la
                décision capable d’ajouter un 6ieme sens utilisant l’intelligence artificielle.</p>
              <LinkContainer to="/Apropos"><Button className="more-info-btn" variant="outline-dark">Lire tout</Button></LinkContainer>
            </div>
            <div className="col-md-6 align-self-center">
              <div id="description_img">
                <img src={description_img} alt="description_img" className="img-responsive"
                  style={{ width: '100%', maxWidth: '471px' }} />
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

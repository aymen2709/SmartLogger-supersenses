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
import { useEffect } from 'react';
import { useState } from 'react';
import NavBarHeader from "../NavBarsHeaderFooter/NavBarHeader";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import { HashLink } from 'react-router-hash-link';
import { useRef } from "react";

function HomeInterface() {

  // ---------------------------------
  // Detect when we scrolled down
  // ---------------------------------
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

  // ------------------------------
  // Prevent scroll when navbar is 
  // expanded in mobile devices
  // ------------------------------
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = 'hidden';
    }
    if (!expanded) {
      document.body.style.overflow = 'unset';
    }
  }, [expanded]);


  // -----------------------------
  // Hide NavBar if the user click
  // outside EXPANDED navbar
  // -----------------------------
  const navBarRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (expanded) {
        if (navBarRef.current && !navBarRef.current.contains(event.target)) {
          // Clicked outside
          setExpanded(false);
        }
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navBarRef, expanded]);



  fontawesome.library.add(faCheckSquare, faCoffee);

  return (
    <div className="bg-img" id="bg_img_header">

      <Navbar ref={navBarRef} bg="transparent" expand="lg" id="navbarTestIcons" expanded={expanded}>
        <Container>
          <Navbar.Brand href="/">
            <div className="bgTestImg"></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)}>
            <span> <FontAwesomeIcon icon="bars" color="white" size="lg" /> </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto" id="HomeNav">
              <Nav.Link className='Nav_home NavText_home' id='' href="/" onClick={() => setExpanded(false)}>
                Accueil
              </Nav.Link>
              <div className='btnNosSolution'>
                <Dropdown as={ButtonGroup}>
                  <Button variant='transparent' className="dropdown-btn" >
                    <HashLink className="NavText_home" style={{ textDecoration: "none" }} smooth to="/#no-solutions"
                      onClick={() => setExpanded(false)}>
                      Nos Solutions
                    </HashLink>
                  </Button>
                  <Dropdown.Toggle className="NavText_home" split variant="transparent" size="sm"
                    id="dropdown-split-basic" />
                  <Dropdown.Menu size="sm" className="home-nav-dropdown">
                    <Dropdown.Item onClick={() => setExpanded(false)} className="dropdown-item-home" href="/Hodhod">
                      Hodhod
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => setExpanded(false)} className="dropdown-item-home" href="/SensesIA">
                      SensesIA
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <Nav.Link onClick={() => setExpanded(false)} href="/NosExpertises" className='Nav_home NavText_home'>
                Nos expertises
              </Nav.Link>
              <Nav.Link onClick={() => setExpanded(false)} href="/Apropos" className='Nav_home NavText_home' id=''>
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
                décision capable d’ajouter un sixième sens en utilisant l’intelligence artificielle.</p>
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

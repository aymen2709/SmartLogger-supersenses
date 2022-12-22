import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
//import language from '../images/language.png';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { LinkContainer } from 'react-router-bootstrap';
import logo_supersenses from '../images/logo_supersenses.png';

//import ProgressBar from 'react-progressbar-on-scroll';
import { HashLink } from 'react-router-hash-link';
import { useRef } from "react";



function NavBarHeader() {

  // -------------------------------
  // Detectc when we scrolled down
  // -------------------------------
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


  return (
    <div className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
      <Navbar ref={navBarRef} expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand href="/"><img src={logo_supersenses} alt="logo_supersenses"
            className={`logo_supersenses ${isScrolled ? 'scrolled' : ''}`} />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link className='Nav_item' id='NavText_other' onClick={() => setExpanded(false)}>
                  <h6>Accueil</h6>
                </Nav.Link>
              </LinkContainer>

              <div className='btnNosSolution'>
                <Dropdown as={ButtonGroup}>
                  <Button variant='transparent' className="dropdown-btn" >
                    <HashLink style={{ textDecoration: "none", color: "black" }} onClick={() => setExpanded(false)}
                      smooth to="/#no-solutions"><h6>Nos Solutions</h6>
                    </HashLink>
                  </Button>
                  <Dropdown.Toggle split variant="transparent" size="sm" id="dropdown-split-basic" />
                  <Dropdown.Menu size="sm" className='home-nav-dropdown'>
                    <Dropdown.Item className="dropdown-item-home" href="/Hodhod" onClick={() => setExpanded(false)}>
                      Hodhod
                    </Dropdown.Item>
                    <Dropdown.Item className="dropdown-item-home" href="/SensesIA" onClick={() => setExpanded(false)}>
                      SensesIA
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>

              <LinkContainer to="/NosExpertises">
                <Nav.Link className='Nav_item' id='NavText_other' onClick={() => setExpanded(false)}>
                  <h6>Nos expertises</h6>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Apropos">
                <Nav.Link className='Nav_item' id='NavText_other' onClick={() => setExpanded(false)}>
                  <h6>A propos</h6>
                </Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <ProgressBar
        id="ProgressBar"
        color="#25ACDE"
        height={11}
        direction="right"
        position="relative"
        gradient={true}
        gradientColor="#eee"
      /> */}
    </div>
  );
}

export default NavBarHeader;
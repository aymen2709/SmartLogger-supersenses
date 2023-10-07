import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import NavBarHeader from "./components/NavBarsHeaderFooter/NavBarHeader.jsx";
import NavBarFooter from "./components/NavBarsHeaderFooter/NavBarFooter";
import HomeInterface from "./components/HomeInterface/HomeInterface.jsx";
import NosExpertises from "./components/NosExpertises/NosExpertises";
import ContactezNous from "./components/ContactezNous/ContactezNous";
import NosOffres from "./components/NosOffres/NosOffres";
// import NosValeur from "./components/NosValeur";
import NosSolution from "./components/NosSolution/NosSolution";
import Apropos from './components/Apropos';
import EspaceCarriereForm from "./components/EspaceCarriere/EspaceCarriereFom/EspaceCarriereForm";
import EspaceCarriereOffre from "./components/EspaceCarriere/EspaceCarriereOffre/EspaceCarriereOffre";
import NosSolutionSensesIA from './components/NosSolution/NosSolutionSensesIA';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';


function App() {

    return (
        <Router>
            <div className="App">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomeInterface />} />
                        <Route path="/NosExpertises" element={<> <NosExpertises /></>} />
                        {/* <Route path="/NosOffres" element={<> <NosOffres /></>} /> */}
                        <Route path="/ContactezNous" element={<><ContactezNous /></>} />
                        {/* <Route path="/Hodhod" element={<> <NosSolution /></>} /> */}
                        <Route path="/Apropos" element={<><Apropos /></>} />
                        <Route path="/EspaceCarriere" element={<> < EspaceCarriereForm /></>} />
                        <Route path="/InformationOffre" element={<> <EspaceCarriereOffre /></>} />
                        <Route path="/SensesIA" element={<> <NosSolutionSensesIA /></>} />
                        <Route path='/privacy-policy' element={<> <PrivacyPolicy /></>} />
                    </Routes>
                    <div className="bg-img" id="bg_img_footer">
                        <NavBarFooter />
                    </div>
                </div>

            </div >
            <ToastContainer />
        </Router >
    );
}
export default App;

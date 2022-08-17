import img1 from './images/18771.png';
import img2 from './images/Kannan-Future-Customer-Service-AI-Artificial-Intelligence-1200x627-1200x627.png';
import img3 from './images/Component17–6.png';
import hodhod1 from "./images/hodhod1.png";
import hodhod2 from "./images/hodhod2.png";
import img1Solution from './images/MaskGroup10115@2x.png';
import img2Solution from './images/Group 14382.png';
import img3Solution from './images/senses_IA.png';
import backgroundImg from './images/Groupe_19186.png';
import port1 from './images/christina-wocintechchat-com-faEfWCdOKIg-unsplash.png';
import port2 from './images/scott-graham-5fNmWej4tAA-unsplash.png';
import port3 from './images/sigmund-Im_cQ6hQo10-unsplash.png';
import { Link } from 'react-router-dom';




const NosValeur = () => {

  return (
    <div className="part2">
      <div className="container">
        <div className="row">
          <h1 className="text-center" id="title1">Nos valeurs & Engagements</h1>
        </div>
        <div className="row">
          <h2 className="text-center text-sm-left" id="title2">Notre clé de réussite</h2>
        </div>
        <div className="col">
        </div>
      </div>
      <div className="p1">
        
        <p><br></br>Nos engagements et nos valeurs nous définissent.<br></br>Ils sont le moteur de notre développement et la clé de notre réussite.<br></br>
          Nous déposons nos savoir-faire et notre expertise au profit de nos clients.<br></br>
          Nous sommes engagés de digitaliser notre quotidien pour un avenir meilleur.</p>
      </div>
      <div className="images text-center">
        <div className="container text-center">
          <div className="row">
            <div className="col" >
              <div className="contenuS text-center">
                <img src={img1} alt="Avatar" className="image" />
                <div className="middle">
                  <div className="text">Engagements</div>
                </div>
              </div>
            </div>
            <div className="col" >
              <div className="contenuS text-center">
                <img src={img3} alt="Avatar" className="image" />
                <div className="middle">
                  <div className="text">Savoir-Faire</div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="contenuS text-center">
                <img src={img2} alt="Avatar" className="image" />
                <div className="middle">
                  <div className="text">Expertise </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="solution">
        <div className="container">
          <div className="col">
            <div className="row">
              <h1 className="text-center" id="title1">Nos Solutions</h1>
            </div>
            <div className="row">
              <h2 className="text-center text-sm-left" id="title2">Découvrir les solutions techniques</h2>
            </div>

          </div>
        </div>
      </div>

      <div className='container text-center'>
        <div className='row'>
          <div className='col'>
            <Link to="/Hodhod"><img src={hodhod1} id="hodhod1" /></Link>
          </div>
          <div className='col'>
            <Link to="/SensesIA"><img src={hodhod2} id="hodhod1" /></Link>
          </div>
        </div>
      </div>

      {/* 
      <div className="container" id="boxs">
        <div className="row">
          <div className="col">
            <img className="bgSolution img-thumbnail shadow rounded" src={img1Solution} alt="img1" id="img3Solution" />
            <div className="box">
              <p>
                <div className="col">
                  <div className='row'>
                    <img src={img2Solution} alt="hodhod" id="chatSize" />
                  </div>
                  <div className="row">

                    <Link to="/Hodhod" id="LinkHome"><h1 className="text-center" id="hodhodTitle">HODHOD</h1></Link>
                    <div className="row text-center" id="hodhodparagraph" >

                      <p>Une application mobile pour<br></br> la municipalité et les citoyens.</p>
                    </div>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className="col">
            <img src={img3Solution} className="img-thumbnail shadow rounded" id="img3Solution" />
            <div className='img3Box'>
              <img src={img2Solution} alt="hodhod" id="chatSize2" />
              <Link to="/SensesIA" id="LinkHome"><h1 id="hodhodTitle">Senses IA</h1></Link>
              <p id="SensiaP">Solution technologique permettant aux industriels la collection des données.</p>
            </div>
          </div>
        </div>

      </div> */}

      <br></br><br></br><br></br><br></br>
      <div className="expertisets">
        <div className='expertiseBox'>
          <ul>
            <li><h1 id="expertiseBoxItems">Notre Expertise</h1></li>
            <li><h5 id="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Machine Learning</h5></li>
            <li><h5 id="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Internet des Objets</h5></li>
            <li><h5 id="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Intelligence Artificielle</h5></li>
            <li><h5 id="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Formation technologique</h5></li>
            <li><h5 id="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Développement web/mobile</h5></li>
            <li><h5 id="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;Conception et layout des cartes électroniques</h5></li>
          </ul>
        </div>
      </div>
      <br></br><br></br><br></br><br></br>
      {/* <div className="row text-center" id="portfolioBox"> */}
      <div className='container'>
        <div className='row'  >
          <h1 className='text-center'>Portfolio </h1>
          <h3 className='text-center'>L'esprit d'équipe est notre clé de réussite</h3><br></br>
          <div className='col mt-5 text-center'>
            <img src={port1} alt="portfolio" id="portfolio1" />
          </div>
          <div className='col mt-5 text-center'>
            <img src={port2} alt='portfolio' id="portfolio1" />
          </div>
          <div className='col mt-5 text-center'>
            <img src={port3} alt='portfolio' id="portfolio1" />
          </div>
        </div>
      </div>
      
    </div>
  );


}
export default NosValeur;
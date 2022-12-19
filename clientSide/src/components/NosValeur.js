import img1 from './images/18771.png';
import img2 from './images/Kannan-Future-Customer-Service-AI-Artificial-Intelligence-1200x627-1200x627.png';
import img3 from './images/Component17–6.png';
import hodhod1 from "./images/Mask Group 10115.png";
import hodhod2 from "./images/senses_IA.png";
import iconMsg from "./images/Group 14382.png";
import ccd4SarraImg from './images/portfolio/ccd4_sarra.jpg';
import ccd4GroupImg from './images/portfolio/ccd4_group.jpg';
import municipalite1Img from './images/portfolio/municipalite_1.jpg';
import municipalite2Img from './images/portfolio/municipalite_2.jpg';
import safranImg from './images/portfolio/safran.jpg';
import sidiBoualiImg from './images/portfolio/sidi_bouali.jpg';

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

      <div className="p1 container">
        <p><br></br>Nos engagements et nos valeurs nous définissent.<br></br>Ils sont le moteur de notre développement et la clé de notre réussite.<br></br>
          Nous déposons nos savoir-faire et nos expertises au profit de nos clients.<br></br>
          Nous sommes engagés de digitaliser notre quotidien pour un avenir meilleur.</p>
      </div>


      <div className="container images">
        <div className="row">
          <div className='col-md-4'>
            <div className='our-value-item'>
              <img src={img1} alt="Engagements" className="our-value-image img-responsive"></img>
              <div className='our-value-text-container'>
                <div className='our-value-text'>Engagements</div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='our-value-item'>
              <img src={img3} alt="Savoir-Faire" className="our-value-image img-responsive"></img>
              <div className='our-value-text-container'>
                <div className='our-value-text'>Savoir-Faire</div>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='our-value-item'>
              <img src={img2} alt="Expertise" className="our-value-image img-responsive"></img>
              <div className='our-value-text-container'>
                <div className='our-value-text'>Expertise</div>
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
      <div className='container solutions-container'>
        <div className='row'>
          <div className='col-md-6'>
            <Link className='link-to-solution' to="/Hodhod">
              <img src={hodhod1} className="solution-img img-responsive" id="hodhod1" alt='Hodhod' />
              <div className='solution-description-container'>
                <div className='solution-title'>HODHOD</div>
                <div className='solution-text'>Une application mobile pour la municipalité et les citoyens.</div>
              </div>
              <img src={iconMsg} alt='message' className='solution-icon'></img>
            </Link>
          </div>
          <div className='col-md-6'>
            <Link className='link-to-solution' to="/SensesIA">
              <img src={hodhod2} id="hodhod1" className='solution-img img-responsive' alt='Sensea' />
              <div className='solution-description-container'>
                <div className='solution-title'>Senses IA</div>
                <div className='solution-text'>
                  Solution technologique permettant aux industriels la collection des données.
                </div>
              </div>
              <img src={iconMsg} alt='message' className='solution-icon'></img>
            </Link>
          </div>
        </div>
      </div>

      <div className="expertisets">
        <div className='expertiseBox'>
          <ul>
            <li><h1 className="expertiseBoxItems">Nos expertises</h1></li>
            <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Machine Learning</h5></li>
            <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Internet des Objets</h5></li>
            <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Intelligence Artificielle</h5></li>
            <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Formation technologique</h5></li>
            <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;&nbsp;Développement web/mobile</h5></li>
            <li><h5 className="expertiseBoxItems"><i className="bi bi-check-circle-fill"></i>&nbsp;Conception et layout des cartes électroniques</h5></li>
          </ul>
        </div>
      </div>

      {/* Portfolio */}
      <div className='container portfolio-container'>
        <div className='row'>
          <h1 className='text-center'>Portfolio </h1>
          <h3 className='text-center'>L'esprit d'équipe est notre clé de réussite</h3><br></br>

          <div className='col-lg-4 mt-5 text-center'>
            <div className='portfolio-img-container'>
              <span className='helper-portfolio'></span>
              <img src={ccd4GroupImg} alt='Les participants de CCD4 Tunisia'
                className="portfolio-img img-responsive" />
            </div>
          </div>

          <div className='col-lg-4 mt-5 text-center'>
            <div className='portfolio-img-container'>
              <span className='helper-portfolio'></span>
              <img src={municipalite1Img} alt='Municipalité 1' className="portfolio-img img-responsive" />
            </div>
          </div>

          <div className='col-lg-4 mt-5 text-center'>
            <div className='portfolio-img-container'>
              <span className='helper-portfolio'></span>
              <img src={municipalite2Img} alt='Municipalité 2' className='portfolio-img img-responsive' />
            </div>
          </div>

          <div className='col-lg-4 mt-5 text-center'>
            <div className='portfolio-img-container'>
              <span className='helper-portfolio'></span>
              <img src={ccd4SarraImg} alt="Participation de CEO de Supersenses Madame Sarra Boufayed à CCD4 TUNISIA"
                className="portfolio-img img-responsive" />
            </div>
          </div>

          <div className='col-lg-4 mt-5 text-center'>
            <div className='portfolio-img-container'>
              <span className='helper-portfolio'></span>
              <img src={sidiBoualiImg} alt="Municipalité de Sidi Bou Ali" className='portfolio-img img-responsive' />
            </div>
          </div>

          <div className='col-lg-4 mt-5 text-center'>
            <div className='portfolio-img-container'>
              <span className='helper-portfolio'></span>
              <img src={safranImg} alt="CTO Aymen Abid Boukadida chez Safran" className='portfolio-img img-responsive' />
            </div>
          </div>
        </div>

      </div>

    </div>
  );


}
export default NosValeur;
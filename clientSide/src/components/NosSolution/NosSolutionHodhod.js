

import googlePlay from '../images/GooglePLay.png';
import applestore from '../images/app-store.png';
import hodhod from '../images/Mask Group 10114.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const NosSolutionHodhod = () => {

  return (


    <div>
      <div className="container NosSolutionPa">
        <div className="col">
          <div className="row">
            <img id="hodhodImage" className="img-thumbnail shadow " src={hodhod} alt="hodhod image " />
          </div>
          <div className="row">
            <p id="hodhodStatement"><br></br>Devenez acteurs dans votre commune</p><br></br><br></br>
            <div className="col">
              <img id="googlePlay" src={googlePlay} alt="google store" />
            </div>
            {/* <div className="col">
              <img id="appStore" src={applestore} alt="apple store" />
            </div> */}
          </div>
        </div>
      </div>
    </div>


  );
}
export default NosSolutionHodhod;
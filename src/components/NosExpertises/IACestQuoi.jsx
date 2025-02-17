import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img_cercle_AI from '../images/img_cercle_AI.png';

import icon_BD from '../images/icon_BD.png';
import icon_entrainement from '../images/icon_entrainement.png';
import icon_iterations from '../images/icon_iterations.png';
import icon_miseEnProduction from '../images/icon_miseEnProduction.png';

import icon_entrainement_onHover from '../images/icon_entrainement_onHover.jpg';

function IACestQuoi(props) {
  return (
    <div>
      <Container className="bloc_intro_AI">

        <Row>
          <Col className="intro_AI_data">
            <h5>L’IA, QU’EST-CE QUE C’EST ?</h5>
            <p >Une IA est un programme qui repose sur des algorithmes exécutés capable de
              traiter un grand volume de données rapidement dans un environnement
              informatique dynamique. Elle est donc plus efficace que l’Homme sur des
              applications spécifiques et permet de nombreuses automatisations et
              optimisations.<br /><br />

            </p>
          </Col>

          <Col><img src={img_cercle_AI} alt="img_cercle_AI" className="img_cercle_AI" style={{ width: "100%", height: "100%" }} /></Col>
        </Row>
      </Container>


      <Container className="bloc_etapes_AI">

        <h6 className="bloc_etapes_AI_title">Quelles sont les grandes étapes pour réussir un projet en IA ?</h6>

        <Row xs={1} md={2}>

          <Col >
            <div id="etape_AI">
              <div id="blocBD_header">
                <img src={icon_BD} alt="icon_BD" className="icon_etapes_AI"  />
                <h5 id="etape_AI_title">BASE DE DONNÉES ACQUISITION & STRUCTURE</h5>
              </div>
              <p id="etape_AI_paragraph" >Les données correspondent à la matière première nécessaire à la création d’IA.
                Ces dernières doivent être représentatives des données réelles que devra
                analyser l’algorithme. Sans données, pas d’IA. Les données doivent ensuite être
                nettoyées et annotées avant d’être exploitées par un algorithme.
              </p>
            </div>
          </Col>

          <Col >
            <div id="etape_AI">
              <div id="blocEntrainement_header">
                <img src={icon_entrainement} alt="icon_entrainement" className="icon_etapes_AI" />
                <h5 id="etape_AI_title">ENTRAINEMENT POUR CRÉER LE MODÈLE </h5>
              </div>
              <p id="etape_AI_paragraph">Une fois la base de données préparée, il convient de trouver l’algorithme idoine.
                Qu’il soit Open Source ou bien conçu de toute part par nos soins, un algorithme
                sera adapté à certains types de données et cas d’usages. Une fois sélectionné,
                l’algorithme sera entraîné sur les données préparées précédemment.
              </p>
            </div>
          </Col>

          <Col >
            <div id="etape_AI">
              <div id="blocIterations_header">
                <img src={icon_iterations} alt="icon_iterations" className="icon_etapes_AI" />
                <h5 id="etape_AI_title">TÉRATIONS POUR OPTIMISER LES PERFORMANCES</h5>
              </div>
              <p id="etape_AI_paragraph">POUR OPTIMISER LES PERFORMANCES
                Suite à l’entraînement de l’algorithme, nous obtenons un modèle, une fonction
                mathématique capable d’appliquer un traitement sur de nouvelles données. Ce
                modèle est donc testé et validé sur le jeu de données. Si les résultats ne sont pas
                satisfaisants, il faudra retravailler les jeux de données et ré-entraîner les modèles.
              </p>
            </div>
          </Col>

          <Col>
            <div id="etape_AI">
              <div id="blocMiseEnProduction_header">
                <img src={icon_miseEnProduction} alt="icon_miseEnProduction" className="icon_etapes_AI" />
                <h5 id="etape_AI_title">MISE EN PRODUCTION DE LA SOLUTION LOGICIELLE</h5>
              </div>
              <p id="etape_AI_paragraph">Le modèle donnant satisfaction, il faut maintenant le mettre en production. En
                premier lieu, il convient de rapidement mettre en place une version bêta de la
                solution, pour pouvoir tester la technologie en environnement réel. Par la suite,
                des travaux d’ingénierie logicielle sont nécessaires pour interfacer la brique
                logicielle avec le système informatique en place chez le client.
              </p>
            </div>
          </Col>

        </Row>

      </Container>

    </div>
  );
}
export default IACestQuoi;
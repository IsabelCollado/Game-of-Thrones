import { NavLink, useParams } from 'react-router-dom';
import '../styles/App.scss';
import House_Arryn from '../images/House_Arryn.png';
import House_Baelish from '../images/House_Baelish.png';
import House_Baratheon from '../images/House_Baratheon.png';
import House_Bolton from '../images/House_Bolton.png';
import House_Clegane from '../images/House_Clegane.png';
import House_Greyjoy from '../images/House_Greyjoy.png';
import House_Lannister from '../images/House_Lannister.png';
import House_Martell from '../images/House_Martell.png';
import House_Mormont from '../images/House_Mormont.png';
import House_Seaworth from '../images/House_Seaworth.png';
import House_Stark from '../images/House_Stark.png';
import House_Targaryen from '../images/House_Targaryen.png';
import House_Tully from '../images/House_Tully.png';
import House_Tyrell from '../images/House_Tyrell.png';
//import yes from '../images/icons8-corazón-con-pulso-48.png';
//import no from '../images/icons8-skull-heart-45.png';
import NotFoundCharacter from './NotFoundCharacter';

const CharacterDetails = ({ findCharacter }) => {
  const params = useParams();
  const characterSelected = findCharacter(params.id);

  const houseClass = () => {
    if (characterSelected.family === 'House_Arryn') {
      return `${House_Arryn}`;
    } else if (characterSelected.family === 'House_Baelish') {
      return `${House_Baelish}`;
    } else if (characterSelected.family === 'House_Baratheon') {
      return `${House_Baratheon}`;
    } else if (characterSelected.family === 'House_Bolton') {
      return `${House_Bolton}`;
    } else if (characterSelected.family === 'House_Clegane') {
      return `${House_Clegane}`;
    } else if (characterSelected.family === 'House_Greyjoy') {
      return `${House_Greyjoy}`;
    } else if (characterSelected.family === 'House_Lannister') {
      return `${House_Lannister}`;
    } else if (characterSelected.family === 'House_Martell') {
      return `${House_Martell}`;
    } else if (characterSelected.family === 'House_Mormont') {
      return `${House_Mormont}`;
    } else if (characterSelected.family === 'House_Seaworth') {
      return `${House_Seaworth}`;
    } else if (characterSelected.family === 'House_Stark') {
      return `${House_Stark}`;
    } else if (characterSelected.family === 'House_Targaryen') {
      return `${House_Targaryen}`;
    } else if (characterSelected.family === 'House_Tully') {
      return `${House_Tully}`;
    } else if (characterSelected.family === 'House_Tyrell') {
      return `${House_Tyrell}`;
    }
  };

  if (characterSelected !== undefined) {
    return characterSelected && characterSelected.id ? (
      <>
        <NavLink className="return" to="/house">
          Volver página principal
        </NavLink>

        <article className="article">
          <div className="card_details">
            <img
              className="img_details"
              src={characterSelected.imageUrl}
              alt={characterSelected.firstName}
            />

            <ul className="ul_details">
              <li className="list_details">
                <h2 className="name_details">{characterSelected.firstName}</h2>
              </li>
              <li className="list_details">
                <h2 className="name_details">{characterSelected.lastName}</h2>
              </li>

              <li className="list_details">
                <span className="span_details_title">Title</span>
                <span className="span_details">{characterSelected.title}</span>
              </li>

              <li className="list_details">
                <span className="span_details_title">
                  House: {characterSelected.family}
                </span>
                <img src={houseClass()} alt="" className="detail_house_img" />
              </li>
            </ul>
          </div>
        </article>
      </>
    ) : (
      <main>
        <NotFoundCharacter />
      </main>
    );
  }
};

export default CharacterDetails;

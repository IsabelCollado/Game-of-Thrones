import { NavLink } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <NavLink to={`/character/${eachCharacter.id}`}>
      <li className="list_character">
        <img
          className="list_character_img"
          src={eachCharacter.imageUrl}
          alt={eachCharacter.firstName}
        />
        <p className="list_character_name">{eachCharacter.firstName}</p>
        <p className="list_character_lastName">{eachCharacter.lastName}</p>
      </li>
    </NavLink>
  );
};

export default CharacterCard;

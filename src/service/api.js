const Api = (eachCharacter) => {
  return {
    id: eachCharacter.id,
    firstName: eachCharacter.firstName,
    lastName: eachCharacter.lastName,
    title: eachCharacter.title,
    imageUrl:
      eachCharacter.imageUrl !== ''
        ? eachCharacter.imageUrl
        : require('../images/userdefault.png.png'),
    family: eachCharacter.family,
  };
};

const getCharactersHouse = (inputHouse) => {
  const url = `https://thronesapi.com/api/v2/Characters/`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.map(Api);
    });
};

const getCharacters = (id) => {
  return fetch(`https://thronesapi.com/api/v2/Characters/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.map(Api);
    });
};

const api = {
  getCharactersHouse,
  getCharacters,
};
export default api;

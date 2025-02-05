function getDataApi (searchHouse) {
    //ponemos parametro porque va a depender de la casa que busque la usuaria
    return fetch(`https://hp-api.onrender.com/api/characters/house/${searchHouse}`)
    .then ((resp) => resp.json())
    .then ((data) => {
        const newArrayCharacters = data.map((user) => {
            return {
                id: user.id,
                img: user.image,
                name: user.name,
                nickName: user.alternate_names,
                house: user.house,
                alive: user.alive,
                gender: user.gender,
                specie: user.species
            };
        });
        return newArrayCharacters;
    });
}

export default getDataApi;
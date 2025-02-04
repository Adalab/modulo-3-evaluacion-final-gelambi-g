function api () {
    fetch("https://hp-api.onrender.com/")
    .then ((resp) => resp.json())
    .then ((data) => {
        const newArray = data.results.map((user) => {
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
        return newArray;
    });
}

export default api;
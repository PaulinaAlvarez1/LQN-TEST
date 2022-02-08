export interface ICharacter {
    name: string,
    id: string,
    filmConnection?: IFilmConnection,
};

export interface IFilmConnection {
    films: Array<IFilm>,
};

export interface IFilm {
    title: string,
    director: string,
    planetConnection: IPlanetConnection,
};

export interface IPlanetConnection {
    planets:  Array<IPlanet>,
};

export interface IPlanet {
    name: string,
};

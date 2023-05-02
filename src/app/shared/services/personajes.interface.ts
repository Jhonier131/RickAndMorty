// export interface Personaje {
//   id: number;
//   nombre: string;
//   imagen: string;
//   estatus: string;
//   especies: Especies;
//   genero: string;
//   creado: string;
//   origen: string;
// }

// type tipo  = 'Human'| 'alien';
// export interface Especies {
//   id: number;
//   nombre: tipo;
// }


export interface InfoGeneral {
  info:    Info;
  results: Result[];
}

export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface Result {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  string;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url:  string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}

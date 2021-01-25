export interface Data {
  id: number;
  name: string;
  age: number;
  address: string;
  disabled: boolean;
}

export interface DataTestModel {
  totalPages: number;
  totalPassengers: number;
  data: DataModel[];
}

export interface DataModel {
  trips: number;
  name: string;
  _id: string;
  gender: string;
  airline: AirlineModel;
}

export interface AirlineModel {
  country: string;
  established: string;
  head_quaters: string;
  id: number;
  logo: string;
  name: string;
  slogan: string;
  website: string;
  disabled: boolean;
}

// export interface PassengerModel {
//   country: string;
//   established: string;
//   head_quaters: string;
//   id: number;
//   logo: string;
//   name: string;
//   slogan: string;
//   website: string;
// }

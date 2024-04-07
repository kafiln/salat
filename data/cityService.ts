import cities from "data/cities.json";

export type City = {
  id: number;
  name: string;
  long_d: number;
  long_m: number;
  lat_d: number;
  lat_m: number;
  alt: number;
};

export const getCityName = (city: number) => {
  const cityName = cities.find((c) => c.id === city);
  return cityName ? cityName.name : "";
};

const cityMapper = (city: City) => {
  return {
    id: city.id,
    name: city.name,
    longitude: -Number(`${city.long_d}.${city.long_m}`),
    latitude: Number(`${city.lat_d}.${city.lat_m}`),
    elevation: city.alt,
  };
};

export const getAllCities = () => {
  return cities.map(cityMapper);
};

export const getCityById = (id: number) => {
  return cityMapper(cities.find((i) => i.id === id)!);
};

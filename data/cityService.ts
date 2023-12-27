import cities from "data/cities.json";

export const getCityName = (city: number) => {
  const cityName = cities.find((c) => c.id === city);
  return cityName ? cityName.name : "";
};

export const getAllCities = () => {
  return cities;
};


export const getCityById = (id: number) => {
  return cities.find(i => i.id === id)
};

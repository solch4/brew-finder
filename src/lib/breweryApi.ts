import axios from "axios";
import { APIBrewery, Brewery } from "@/types";

axios.defaults.baseURL = "https://api.openbrewerydb.org/v1/breweries";

export const formatBrewery = (brewery: APIBrewery): Brewery => {
  return {
    id: brewery.id,
    name: brewery.name,
    phone: brewery.phone ?? "No disponible",
    street: brewery.street ?? "No disponible",
  };
};

export const getBreweries = async (endpoint: string = "/") => {
  const res = await axios.get(endpoint);
  const breweries: APIBrewery[] = res.data;
  return breweries.map(formatBrewery);
};

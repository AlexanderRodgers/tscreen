import axios from 'axios';

const TOKEN = process.env.MAP_API_KEY;

const locUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';

export const getAddress = async (input) => {
  if (!input) return {};
  const res = await axios.get(`${locUrl}${input}.json?access_token=${TOKEN}`);
  return res.data;
}
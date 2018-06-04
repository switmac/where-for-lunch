import axios from 'axios';

const YELP_API_URL = 'https://api.yelp.com/v3';

const authedAxios = axios.create({
  baseURL: YELP_API_URL,
  headers: { Authorization: `Bearer ${process.env.YELP_API_KEY}` },
});
export function searchPlaces(params) {
  console.log('PARAMS! ', params);
  return authedAxios.get('/businesses/search', {
    params,
  }).then(({ data }) => data.businesses)
    .catch((err) => {
      console.log('!!! ', err);
    });
}

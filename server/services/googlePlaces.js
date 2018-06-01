import axios from 'axios';

// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.964833,151.095163&radius=1000&type=restaurant&keyword=thai&key=AIzaSyC1UBk3bzeDCz7LeNvC8t8u0l1cQeBrSxs


const GOOGLE_API_URL = 'https://maps.googleapis.com/maps/api/place';

export function searchPlaces(params) {
  params.key = process.env.GOOGLE_PLACE_API_KEY;
  return axios.get(`${GOOGLE_API_URL}/nearbysearch/json`, {
    params,
  }).then(({ data }) => Promise.resolve(data.results))
    .catch((err) => {
      console.log('!!! ', err);
    });
}

export function getPlaceDetails(placeId) {
  return axios.get(`${GOOGLE_API_URL}/details/json`, {
    params: {
      key: process.env.GOOGLE_PLACE_API_KEY,
      placeid: placeId,
    },
  }).then(({ data }) => Promise.resolve(data.result))
    .catch((err) => {
      console.log('!!! ', err);
    });
}

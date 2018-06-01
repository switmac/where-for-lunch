export function toSearchPlacesParams(params) {
  const result = {
    location: '-33.964833,151.095163',
    radius: params.distance,
    type: 'restaurant',
    key: params.cruisine,
    opennow: true,
    minprice: 0,
    maxprice: 4,
  };
  return result;
}

export function fromSearchPlacesParams(params) {
  return params.place_id;
}

export function fromPlaceDetailsParams(params) {
  const result = {
    address: params.formatted_address,
    phone: params.formatted_phone_number,
    name: params.name,
    rating: params.rating,
  };
  return result;
}

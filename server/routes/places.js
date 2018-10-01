import { Router } from 'express';

import {
  searchPlaces,
  getPlaceDetails,
} from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  toGetPlaceParams,
  fromPlaceDetailsParams,
} from '../lib/placeHelper';

const router = Router();
router.get('/', async (req, res) => {
  const list = await searchPlaces(toSearchPlacesParams(req.query));
  res.send(list.map(i => fromSearchPlacesParams(i)));
});

router.get('/:id', async (req, res) => {
  const place = await getPlaceDetails(toGetPlaceParams(req.params));
  res.send(fromPlaceDetailsParams(place));
});

export default router;

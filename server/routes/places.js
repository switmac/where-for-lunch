import { Router } from 'express';

import { searchPlaces, getPlaceDetails } from '../services/yelp';
import {
  toSearchPlacesParams,
  fromSearchPlacesParams,
  fromPlaceDetailsParams,
} from '../lib/placeHelper';

const router = Router();
router.get('/', (req, res) => {
  searchPlaces(toSearchPlacesParams(req.query))
    .then((list) => {
      res.send(list.map(i => fromSearchPlacesParams(i)));
    });
});

router.get('/:placeId', (req, res) => {
  getPlaceDetails(req.params.placeId)
    .then((result) => {
      res.send(fromPlaceDetailsParams(result));
    });
});

export default router;

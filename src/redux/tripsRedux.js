/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;

  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
  }

  // TODO - filter by duration

  // TODO - filter by tags

  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips;

  // TODO - filter trips by tripId
  const filteredTrips = filtered.filter(trip => tripId == trip.id);

  console.log('filtering trips by tripId:', tripId, filteredTrips);
  return filteredTrips.length ? filteredTrips[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips;

  // TODO - filter trips by countryCode
  const filteredTrips = filtered.filter(trip => trip.country.code == countryCode);

  console.log('filtering trips by countryCode:', countryCode, filteredTrips);
  return filteredTrips.length ? filteredTrips : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */

import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  //console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      //return state.concat([ action.payload.data ]); // don't use .push (mutation)
      return [ action.payload.data, ...state ] // ES6 syntax...inserts new item at front of array
      // [city, city, city] instead of [city, [city, city]]
       // both of these create NEW arrays, as opposed to pushing into state which would MUTATE state...BAD!
  }
  return state;
}

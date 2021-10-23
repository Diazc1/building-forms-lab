//It will need to respond to an action of type 'ADD_BAND' and 
//correspondingly concatenate a new band into the bands array each time the action is dispatched. 
//Each band in the array should be an object with a name key.



export default function manageBand(state = {
  bands: [],
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      return { ...state, bands: [...state.bands, action.band] }
    default:
      return state;
  }
};
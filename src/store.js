import { legacy_createStore as createStore} from 'redux'

// Define initial state
const initialState = {
  offersPageScroll: 'top',
};

// Define reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_OFFERS_PAGE_SCROLL':
      return {
        ...state,
        offersPageScroll: action.payload,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);

export default store;
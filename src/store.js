import { SET_OFFERS_PAGE_SCROLL,SET_GALLERY_PAGE_SCROLL } from './constantss';

import { legacy_createStore as createStore} from 'redux'

// Define initial state
const initialState = {
  offersPageScroll: 'op__top',
  galleryPageScroll: 'gp__top',
};

// Define reducer function
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OFFERS_PAGE_SCROLL:
        return {
            ...state,
            offersPageScroll: action.payload,
        };

    case SET_GALLERY_PAGE_SCROLL:
        return{
            ...state,
            galleryPageScroll: action.payload
        }
    default:
      return state;
  }
};

// Create store
const store = createStore(rootReducer);

export default store;
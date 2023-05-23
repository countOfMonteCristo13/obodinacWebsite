import { SET_OFFERS_PAGE_SCROLL, SET_GALLERY_PAGE_SCROLL } from "./constantss";

export const setOffersPageScroll = (scrollValue) => {
    return {
      type: SET_OFFERS_PAGE_SCROLL,
      payload: scrollValue,
    };
};

export const setGalleryPageScroll = (scrollValue) =>{
    return{
        type: SET_GALLERY_PAGE_SCROLL,
        payload: scrollValue
    };
};
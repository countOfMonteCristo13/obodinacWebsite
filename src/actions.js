import { SET_OFFERS_PAGE_SCROLL, SET_GALLERY_PAGE_SCROLL,SET_SCROLL_UP } from "./constants";

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

export const setScrollUpBtn = (scrollBtnVisibility) =>{
    return{
        type:SET_SCROLL_UP,
        payload:scrollBtnVisibility
    };
};
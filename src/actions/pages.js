export const SET_PAGE = Symbol('SET_PAGE');
export const TOGGLE_TRIANGLE = Symbol('TOGGLE_TRIANGLE');
export const TOGGLE_MENU = Symbol('TOGGLE_MENU');

export const setPage = (currentPage) =>{
  return{
    type: SET_PAGE,
    currentPage,
  };
}

export const toggleTriangle = (triangleDisplayed) =>{
  return{
    type: TOGGLE_TRIANGLE,
    triangleDisplayed,
  };
}

export const toggleMenu = (menuDisplayed) =>{
  return{
    type: TOGGLE_MENU,
    menuDisplayed,
  };
}
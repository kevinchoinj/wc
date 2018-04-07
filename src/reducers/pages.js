import {
  SET_PAGE,
  TOGGLE_TRIANGLE,
  TOGGLE_MENU,
} from '../actions/pages'

const DEFAULT_STATE={
  currentPage: '',
  triangleDisplayed: false,
  menuDisplayed: false,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
    case SET_PAGE:
      return state = {...state, currentPage: payload.currentPage};
    case TOGGLE_TRIANGLE:
      return {...state, triangleDisplayed: payload.triangleDisplayed};
    case TOGGLE_MENU:
      return {...state, menuDisplayed: payload.menuDisplayed};
    default:
      return state;
  }
};

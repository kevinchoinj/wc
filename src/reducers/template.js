import {
  CHECK_SCROLL_COMPONENT,
} from '../actions/template'

const DEFAULT_STATE={
  scrollAmountComponent: 0,
}

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){

    case CHECK_SCROLL_COMPONENT:
      state = {...state, scrollAmountComponent: payload.payload};
      return state;

    default:
      return state;
  }
};

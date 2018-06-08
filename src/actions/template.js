export const CHECK_SCROLL_COMPONENT = Symbol('CHECK_SCROLL_COMPONENT');

export const checkScrollComponent = (payload) =>{
  return{
    type: CHECK_SCROLL_COMPONENT,
    payload,
  };
}
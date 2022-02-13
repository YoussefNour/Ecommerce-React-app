export function getAllCarouselItems(state = null, action) {
  if (action.type === "CAROUSEL") {
    return action.payload;
  }
  return state;
}

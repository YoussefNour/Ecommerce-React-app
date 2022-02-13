const URL = "http://localhost:3003/carousel";

export async function getAllCarouselItems() {
  let payload = [];
  await fetch(`${URL}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      payload = data;
    })
    .catch(() => {});
  return {
    type: "CAROUSEL",
    payload,
  };
}

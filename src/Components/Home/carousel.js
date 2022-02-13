let Carousel = (props) => {
  console.log(props);
  let renderItems = () => {
    if (props.items) {
      return props.items.map((item) => {
        return (
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={item.image} className="d-block w-100" alt={item.title} />
          </div>
        );
      });
    } else {
      <div className="carousel-item active" data-bs-interval="10000">
        No Adds
      </div>;
    }
  };

  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">{renderItems()}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

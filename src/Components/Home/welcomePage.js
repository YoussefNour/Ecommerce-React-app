import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import Carousel from "./carousel";
import { getAllCarouselItems } from "../../Actions/Carousel/index";

let WelcomePage = (props) => {
  let [topProducts, setTopProducts] = useState([]);
  let [carouselItems, setCarouselItems] = useState([]);

  useEffect(() => {
    props.getAllCarouselItems();
    setCarouselItems(props.carouselItems);
  }, []);

  let renderItems = () => {
    if (props.carouselItems) {
      return props.carouselItems.map((item) => {
        return (
          <div className="carousel-item active" key={item.id}>
            <img className="d-block w-100" src={item.image} alt={item.advert} />
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
    <div className="container">
      <div className="row">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">{renderItems()}</div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            {/* <span className="sr-only">Previous</span> */}
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            {/* <span className="sr-only">Next</span> */}
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => {
    return {
      topProducts: state.productList,
      carouselItems: state.carouselItems,
    };
  },
  (dispatch) => {
    return bindActionCreators({ getAllCarouselItems }, dispatch);
  }
)(WelcomePage);

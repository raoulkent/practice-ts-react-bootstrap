import "./styles.css";

import CardText from "./components/CardText/CardText";
import CardImage from "./components/CardImage/CardImage";
import CardFavourite from "./components/CardFavourite/CardFavourite";
import { useState } from "react";

const ProductCard: React.FC = (props) => {
  const [isFavourite, setIsFavourite] = useState(true);
  const toggle = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="ProductCard">
      <div className="ImageArea">
        <CardFavourite isFavourite={isFavourite} onClick={toggle} />
        <CardImage
          url="https://i.pinimg.com/originals/ce/d4/d2/ced4d2c6944e31150b6e7b60da2bf6b3.jpg"
          alt="Tophatcat"
        />
      </div>
      <CardText extraClassName="Brand">Brand</CardText>
      <CardText extraClassName="ProductName">Product name</CardText>
      <CardText extraClassName="Price">Price</CardText>
    </div>
  );
};

export default ProductCard;

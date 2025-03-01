import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  placeOrder = e => {
    e.preventDefault();
    this.props.addToOrder(this.props.index);
  };
  render() {
    const { image, name, price, status, desc } = this.props.details;
    const isAvailable = status === "available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.placeOrder}>
          {isAvailable ? "Add To Cart" : "Sold Out"}
        </button>
      </li>
    );
  }
}

export default Fish;

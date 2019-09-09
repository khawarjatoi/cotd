import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderTotal = (prevTotal, key) => {
    console.log(formatPrice(prevTotal), key);
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (isAvailable) {
      return prevTotal + count * fish.price;
    }
    return prevTotal;
  };
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === "available";
    if (!fish) return null;

    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce(this.renderTotal, 0);
    return (
      <div className="order-wrap">
        <h2>Your Order</h2>
        <ul className="order">
          <span>
            <span className="count">{orderIds.map(this.renderOrder)}</span>
          </span>
          <li className="total">
            Total:
            <strong>{formatPrice(total)}</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Order;

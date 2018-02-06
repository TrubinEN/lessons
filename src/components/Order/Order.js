import React, { Component } from "react";
import "./Order.css";

class Order extends Component {
  render() {
    const { id, price, date, name } = this.props;
    return (
      <div className="order" key={id}>
        <div className="order__upper">
          <p className="p--order">Название: {name}</p>
          <p className="p--order">
            Цена: <span className="order-price">{price}</span>
          </p>
        </div>
        <div className="order__lower">
          <p className="p--order">Создан: {date}</p>
        </div>
      </div>
    );
  }
}

export default Order;

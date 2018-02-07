import React, { Component } from "react";
import "./Market.css";
import { connect } from "react-redux";
import { createOrder, moveOrderToFarm } from "../../actions/marketActions";
import Order from "../../components/Order";

let id = 0;
const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  "Капуста",
  "Редиска",
  "Огурцы",
  "Морковь",
  "Горох",
  "Баклажан",
  "Тыква",
  "Чеснок",
  "Лук",
  "Перец",
  "Картофель",
  "Редька"
];

const getNewOrder = () => {
  return {
    id: getId(),
    name: vegetables[Math.floor(Math.random() * vegetables.length)],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date()
  };
};

export class Market extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOrder: false,
      orders: props.market.orders
    };
  }

  handleClickCreateOrder = () => {
    const { orders } = this.state;
    const newOrder = getNewOrder();

    this.setState({
      orders: [...orders, newOrder],
      isOrder: true
    });

    this.props.createOrder(newOrder);
  };

  handleClickSendToFarm = () => {
    const { orders } = this.state;
    const orderToFarm = orders.pop();

    this.setState({
      orders: [...orders],
      isOrder: orders.length > 0
    });

    if (orderToFarm.id) {
      this.props.moveOrderToFarm(orderToFarm);
    }
  };

  checkOrder = () => {
    return !this.state.isOrder;
  };

  render() {
    const { orders } = this.state;

    return (
      <div className="market">
        <div className="market">
          <h2>Новые заказы в магазине</h2>

          <button
            className="new-orders__create-button"
            onClick={this.handleClickCreateOrder}
          >
            Создать заказ
          </button>

          <button
            disabled={this.checkOrder()}
            onClick={this.handleClickSendToFarm}
          >
            Отправить заказ на ферму
          </button>

          <div className="order-list">
            {orders.map(order => {
              return (
                <Order
                  key={order.id}
                  id={order.id}
                  name={order.name}
                  price={order.price}
                  date={order.createdAt.toString()}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    budget: state.budget,
    farm: state.farm,
    market: state.market
  };
};

const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm
};

export default connect(mapStateToProps, mapDispatchToProps)(Market);

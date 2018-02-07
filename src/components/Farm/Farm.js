import React, { Component } from "react";
import "./Farm.css";
import { connect } from "react-redux";
import { moveOrderToCustomer } from "../../actions/farmActions";
import Order from "../../components/Order";

class Farm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOrder: false,
      orders: props.farm.orders
    };
  }

  componentWillReceiveProps(nextProps) {
    const { orders } = nextProps.farm;
    this.setState({
      orders: [...orders],
      isOrder: orders.length > 0
    });
  }

  handleClickSendOrderClien = () => {
    const { orders } = this.state;
    const orderToFarm = orders.pop();

    this.setState({
      orders: [...orders],
      isOrder: orders.length > 0
    });

    if (orderToFarm.id) {
      this.props.moveOrderToCustomer(orderToFarm);
    }
  };

  checkOrder = () => {
    return !this.state.isOrder;
  };

  render() {
    const { orders } = this.state;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={this.checkOrder()}
          onClick={this.handleClickSendOrderClien}
        >
          Отправить урожай клиенту
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
  moveOrderToCustomer
};

export default connect(mapStateToProps, mapDispatchToProps)(Farm);

import React, { Component } from "react";
import "./Budget.css";
import { connect } from "react-redux";

class Budget extends Component {
  render() {
    const {
      profit,
      deliveryExpanse,
      farmExpanse,
      marketExpanse
    } = this.props.budget;
    const total = profit - deliveryExpanse - farmExpanse - marketExpanse;

    return (
      <div className="budget">
        <h2>Бюджет</h2>
        <p>
          Всего получено денег: <span className="t-profit">{profit}</span>
        </p>
        <p>
          Расходы продавцов: <span className="t-sellers">{-marketExpanse}</span>
        </p>
        <p>
          Расходы на ферме: <span className="t-farm">{-farmExpanse}</span>
        </p>
        <p>
          Расходы на доставку:{" "}
          <span className="t-delivery">{-deliveryExpanse}</span>
        </p>
        <p>
          Итого: <span className="t-total">{total}</span>
        </p>
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

export default connect(mapStateToProps)(Budget);

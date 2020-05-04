// 因為Next已經包含react，不需另外import

class Prices extends React.Component {
  state = {
    currency: "USD",
  };
  render() {
    let list = "";
    if (this.state.currency === "USD") {
      // <li>{this.props.bpi}</li>
      list = <li>USD</li>;
    } else if (this.state.currency === "GBP") {
      {
        /* <li>{this.props.bpi}</li> */
      }
      list = <li>GBP</li>;
    } else if (this.state.currency === "EUR") {
      {
        /* <li>{this.props.bpi}</li> */
      }
      list = <li>EUR</li>;
    }
    return (
      <div>
        {/* <ul className="list-group">
          <li>{this.props.bpi}</li>
        </ul> */}
        <ul className="list-group">{list}</ul>
        <br />
        <select
          onChange={(e) =>
            this.setState({
              currency: e.target.value,
            })
          }
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;

import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, } from 'reactstrap';

class ViewToken extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.location.state.values.name,
      price: props.location.state.values.price,
      value: props.location.state.values.value,
      symbol: props.location.state.values.symbol,
      volume: props.location.state.values.volume,
    }
  }

  render() {
    return (
      <div>
        <h4>Token Info</h4>
        <Card>
         <CardBody>
          <CardTitle><b>{this.state.name}</b></CardTitle>
           <CardSubtitle>Price: {this.state.price}</CardSubtitle>
           <CardText>
            Value: {this.state.symbol}
            Volume: {this.state.volume}
           </CardText>
         </CardBody>
       </Card>
      </div>
    );
  }
}

export default ViewToken;

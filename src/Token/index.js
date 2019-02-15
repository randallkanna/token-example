import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

import { Card, CardBody, CardTitle, Button } from 'reactstrap';

class Token extends Component {
  constructor(props) {
    super(props)

    this.starToken = this.starToken.bind(this);
  }

  starToken() {
    // let tokenToStar = this.props.tokenInfo.
    // debugger;
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle className="link-style__token_name">
            <Link to={{ pathname: '/view', state: { values: this.props.tokenInfo.value } }}>{this.props.tokenInfo.value.name}</Link>
          </CardTitle>
          <Button color="info" onClick={this.starToken}>Star</Button>
        </CardBody>
      </Card>
    );
  }
}

export default Token;

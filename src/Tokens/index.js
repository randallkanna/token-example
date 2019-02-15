import React, { Component } from 'react';
import Token from '../Token'
import './style.css'

import { Row } from 'reactstrap';

class Tokens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokens: [],
    };
  }

  componentWillMount() {
    this.getTokens();
  }

  getTokens() {
    fetch('https://roll-76f98.firebaseio.com/tokens.json', {
      method: 'GET',
      dataType : "json",
    }).then((response) => {
      response.json().then((results) => {
        var tokens = [];
        // note
        // firebase returns objects which isn't ideal to iterate in react obviously
        // so I'm just going to iterate over and push them into an array
        // preferably I would interact with firebase directly or just get a proper payload returned
        for (let [key, value] of Object.entries(results)) {
          tokens.push({
            value
          })
        }
        this.setState({tokens: tokens})
      });
    });
  }

  // note - Noticed some of the data is just empty. In something that wasn't an mvp, we'd need to provide checks for that
  // edge case: include a check later if the token has no name - example case for this "" in data set

  render() {
    const tokens = this.state.tokens.map((token, index) =>
        <Token className="token-container" tokenInfo={token} index={index} key={index} />
    );

    return (
      <div className="container">
        <Row>
          {tokens}
        </Row>
      </div>
    );
  }
}

export default Tokens;

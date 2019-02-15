import React, { Component } from 'react';
import Token from '../Token';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchTokens } from "../actions/index";
import './style.css'

import { Row } from 'reactstrap';

const mapStateToProps = (state) => {
  debugger;
  return {
    tokens: state.tokens
  };
};

class Tokens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokens: [],
    };
  }

  componentWillMount() {
  //   var test = this.props.fetchTokens();
    // this.props.fetchTokens();
    this.props.dispatch(fetchTokens())
  //   debugger;
  //   this.setState({ tokens: "" });
  }

  componentDidMount() {
    // this.props.fetchTokens();
  }

  // getTokens() {
    // fetch('https://roll-76f98.firebaseio.com/tokens.json', {
    //   method: 'GET',
    //   dataType : "json",
    // }).then((response) => {
    //   response.json().then((results) => {
    //     var tokens = [];
    //     // note
    //     // firebase returns objects which isn't ideal to iterate in react obviously
    //     // so I'm just going to iterate over and push them into an array
    //     // preferably I would interact with firebase directly or just get a proper payload returned
    //     for (let [key, value] of Object.entries(results)) {
    //       tokens.push({
    //         value
    //       })
    //     }
    //     this.setState({tokens: tokens})
    //   });
    // });
  // }

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

// export default Tokens;

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchTokens }, dispatch);
// }

const mapDispatchToProps = (dispatch) => {
   tokens: dispatch(fetchTokens())
 }

export default connect()(Tokens);
// export default connect(mapStateToProps, {fetchTokens})(Tokens);
// export default connect(null, mapDispatchToProps)(Tokens);

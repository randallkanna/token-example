import React, { Component } from 'react';

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

class RollNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      name: '',
      symbol: '',
      volume: '',
      price: '',
    };

    // If this was more than an mvp, I'd also create form validation to make sure they couldn't submit
      /// tokens with no data
    this.toggle = this.toggle.bind(this);
    this.handleTokenCreation = this.handleTokenCreation.bind(this);
    this.setStateValues = this.setStateValues.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
   }

   setStateValues(event) {
     this.setState({[event.target.name]: event.target.value})
   }

   handleTokenCreation() {
     fetch({
       url: 'https://roll-76f98.firebaseio.com/tokens.json',
       type: "POST",
       data: JSON.stringify({
         name: this.state.name,
         symbol: this.state.symbol,
         volume: this.state.volume,
         price: this.state.price,
       }),
       success: function () {
         alert("success");
       },
       error: function(error) {
         console.log("error: "+error);
       }
     });
   }

  render() {
    return (
      <Navbar color="dark" dark  expand="md">
        <NavbarBrand href="/">Example Token App</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <Button color="info" onClick={this.toggle}>+</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle}>
                <ModalHeader toggle={this.toggle}>Create Token</ModalHeader>
                <ModalBody>
                  <form onSubmit={this.handleTokenCreation}>
                    <div>
                      <p>Name: <input name="name" defaultValue={this.state.name} type="text" onChange={(e) => this.setStateValues(e)} /></p>
                      <p>Symbol: <input name="symbol" defaultValue={this.state.symbol} type="text" onChange={(e) => this.setStateValues(e)} /></p>
                      <p>Volume: <input name="volume" defaultValue={this.state.volume} type="number" onChange={(e) => this.setStateValues(e)} /></p>
                      <p>Price: <input name="price" defaultValue={this.state.price} type="number" onChange={(e) => this.setStateValues(e)} /></p>
                      <p>Volume and price must be a number.</p>
                    </div>
                    <br />
                      <Button color="info">Create</Button>
                  </form>
                </ModalBody>
              </Modal>
            </NavItem>
          </Nav>
      </Navbar>
    );
  }
}

export default RollNav;

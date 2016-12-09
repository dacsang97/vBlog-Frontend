/**
 * Created by sang on 11/28/16.
 */
import React, { Component } from 'react';
import { Panel, Nav, NavItem } from 'react-bootstrap';
import SweetAlert from 'sweetalert-react';
import constructorImage from '../../assets/images/constructor.png';

class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      show: false,
    }
  }
  componentDidMount() {

  }
  onClick() {
    this.setState({
      show: true,
    })
  }
  render() {
    return (
      <Panel className="widget" header="Chuyên mục">
        <Nav>
          <NavItem onClick={this.onClick}>Web</NavItem>
          <NavItem onClick={this.onClick}>Android</NavItem>
          <NavItem onClick={this.onClick}>iOS</NavItem>
          <NavItem onClick={this.onClick}>Design UI/UX</NavItem>
        </Nav>
        <SweetAlert
          show={this.state.show}
          title="Site Constructor"
          text="Tính năng đang phát triển"
          confirmButtonColor="#DD6B55"
          imageUrl={constructorImage}
          imageSize="200x200"
          onConfirm={() => this.setState({ show: false })}
        />
      </Panel>
    );
  }
}


export default CategoryCard;

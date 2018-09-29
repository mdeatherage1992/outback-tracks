import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
render() {
return (
  <Grid>
    <Jumbotron>
    <h2> Welcome to Outback Tracks </h2>
    <p> Your tracks destination </p>
    <Link to="/about">
    <Button bsStyle="primary">Recent Tracks</Button>
      </Link>
    </Jumbotron>
    <Row className="show-grid text-center">

      <Col xs={12} sm={4} className="person-wrapper">
        <Image src="assets/pexels-photo-26681.jpg" className="profile-pic" />
        <p> Ad Lorem Ipsum Ad Lorem Ipsum Ad Lorem Ipsum </p>
        </Col>

        <Col xs={12} sm={4} className="person-wrapper">
          <Image src="assets/road-red-street-sign.jpg" className="profile-pic" />
          <p> Ad Lorem Ipsum Ad Lorem Ipsum Ad Lorem Ipsum </p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/pexels-photo-1089070.jpg" className="profile-pic" />
            <p> Ad Lorem Ipsum Ad Lorem Ipsum Ad Lorem Ipsum </p>
            </Col>

        </Row>
  </Grid>
    )
  }
}

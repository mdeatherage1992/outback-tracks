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
    </Jumbotron>
    <Link to="/about">
    <Button bsStyle="primary">Recent Tracks</Button>
    </Link>
  </Grid>
    )
  }
}

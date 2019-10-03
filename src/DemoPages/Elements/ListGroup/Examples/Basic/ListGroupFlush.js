import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class ListGroupFlush extends React.Component {
  render() {
    return (
      <ListGroup flush>
        <ListGroupItem disabled tag="a" >Cras justo odio</ListGroupItem>
        <ListGroupItem tag="a" >Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem tag="a" >Morbi leo risus</ListGroupItem>
        <ListGroupItem tag="a" >Porta ac consectetur ac</ListGroupItem>
        <ListGroupItem tag="a" >Vestibulum at eros</ListGroupItem>
      </ListGroup>
    );
  }
}

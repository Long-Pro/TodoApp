import React from 'react';

import{
  Container,Row,Col,
  Card,Button,
  Form,InputGroup,Dropdown,DropdownButton,
  Table,Badge ,
} from 'react-bootstrap'
import Search from './Search'
import Sort from './Sort'



function Controller(props) {
  return (
    
    <Row>
      <Search onSearch={props.onSearch}/>
      <Sort onSort={props.onSort}/>
    </Row>          

  );
}

export default Controller;

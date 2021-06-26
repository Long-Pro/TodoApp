import React from 'react';
import{
  Container,Row,Col,
  Card,Button,
  Form,InputGroup,Dropdown,DropdownButton,
  Table,Badge ,
} from 'react-bootstrap'


class Sort extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort:{
        by:'name',
        value:1
      }
    };
  }
  onClick=async (by,value)=>{
    await this.setState({
      sort:{
        by,
        value

      }
    })
    
    this.props.onSort(this.state.sort)
    
  }
  render() {
    return (   
      <Col xs={6}>
        <DropdownButton id="dropdown-basic-button" title="Sắp Xếp" className='text-left'>
          <Dropdown.Item 
            onClick={()=>this.onClick('name',1)}
          >
            <i className="fas fa-sort-alpha-up-alt"></i> Tên A-Z
          </Dropdown.Item>
          <Dropdown.Item 
            onClick={()=>this.onClick('name',-1)}
          >
            <i className="fas fa-sort-alpha-down-alt"></i> Tên Z-A
          </Dropdown.Item>
          
          <Dropdown.Item 
            onClick={()=>this.onClick('status',1)}
          >
            Kích hoạt
          </Dropdown.Item>
          <Dropdown.Item 
            onClick={()=>this.onClick('status',-1)}
          >
            Ẩn
          </Dropdown.Item>
        </DropdownButton>
      </Col>    
    );
    
  }
}

export default Sort;

import React from 'react';

import{
  Container,Row,Col,
  Card,Button,
  Form,InputGroup,Dropdown,DropdownButton,
  Table,Badge ,
} from 'react-bootstrap'




class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      keyword:'',
    }
  }
  onChange=(e)=>{
    let{value,name}=e.target
    this.setState({
      [name]:value
    })

  }
  onSearch=(e)=>{
    this.props.onSearch(this.state.keyword)
  }
  render() {
    let{keyword} = this.state
    return (
      <Col xs={6}>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Nhập từ khóa...."
              name='keyword'
              value={keyword}
              onChange={this.onChange}

            />
            <InputGroup.Append>
              <InputGroup.Text id="basic-addon2"
                onClick={this.onSearch}
              > 
                <i className="fas fa-search"></i> Tìm
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col> 
    
    );

  }
}


export default Search;

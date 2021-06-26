import React from 'react';

import{
  Container,Row,Col,
  Card,Button,
  Form,InputGroup,Dropdown,DropdownButton,
  Table,Badge ,
} from 'react-bootstrap'

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      id:'',
      name:'',
      status:false,
    }
  }
  onChange=(e)=>{
    // console.log(e)
    let target=e.target
    let {name,value}=target
    if(name=='status'){
      value=value=='true'?true:false
    }
    this.setState({[name]:value})
  }
  onSubmit=(e)=>{
    e.preventDefault()
    console.log(this.state)
    
    this.props.onSubmit(this.state)
    this.onClear()
    this.onCloseForm()
  }
  onCloseForm=()=>{
    this.props.onCloseForm()
  }
  onClear=()=>{
    this.setState({
      id:'',
      name:'',
      status:false
    })
  }
  componentWillMount(){
    let {task}=this.props
    if(task){
      this.setState({
        id:task.id,
        name:task.name,
        status:task.status
      })

    }
  }
  componentWillReceiveProps(nextProps){
    let {task}=nextProps
    if(task){
      this.setState({
        id:task.id,
        name:task.name,
        status:task.status
      })

    }else{
      this.setState({
        id:'',
        name:'',
        status:false
      })
    }

  }
  render() {
    return (
      <Card >
        <Card.Header as="h5" className='d-flex justify-content-between'>
          <span>{this.state.id?'Sửa công việc':'Thêm công việc'}</span>
          <i className="far fa-times-circle " 
            onClick={this.onCloseForm}
          ></i> </Card.Header>
        <Card.Body >
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label  >Tên</Form.Label>
              <Form.Control type="text" placeholder="" name='name'
               value={this.state.name} 
               onChange={this.onChange}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label >Trạng thái</Form.Label>
              <Form.Control as="select"
                value={this.state.status} 
                name='status'
                onChange={this.onChange}
              >
                <option value={true}>Kích hoạt</option>
                <option value={false}>Ẩn</option> 
              </Form.Control>
            </Form.Group>
            <div>
              <Button variant="primary mr-3" type='submit'><i className="fas fa-plus"></i>Lưu lại</Button>
              <Button variant="danger"
                onClick={this.onClear}
              ><i className="fas fa-times"></i>Hủy bỏ</Button>
              
            </div>
            
          </Form>
        </Card.Body>
      </Card>           

    );
  }
}

export default TaskForm;

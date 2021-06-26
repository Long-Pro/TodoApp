import React from 'react';

import{
  Container,Row,Col,
  Card,Button,
  Form,InputGroup,Dropdown,DropdownButton,
  Table,Badge ,
} from 'react-bootstrap'
import TaskItem from './TaskItem'

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      filterName:'',
      filterStatus:-1//tatca:-1,kichhoat:1,an:0
    }
  }
  onChange=(e)=>{
    let {value,name}=e.target
    console.log(value)
    this.setState({
      [name]:value
    })
    this.props.onFilter(
      name=='filterName'?value:this.state.filterName,
      name=='filterStatus'?value:this.state.filterStatus)

  }
  render() {
    let{tasks}=this.props
    let{filterStatus,filterName}=this.state
    return (
      <Table  bordered hover size="sm">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody >
          <tr >
            <td colSpan="4"  style={{textAlign: 'center'}}>
              <input type="text"
                name='filterName'
                value={filterName}
                onChange={this.onChange}
              />
              <select className='p-1 ml-2'
                name='filterStatus'
                value={filterStatus}
                onChange={this.onChange}
                >
                <option value={-1}>Tất cả</option>
                <option value={1}>Kích hoạt</option>
                <option value={0}>ẩn</option>
              </select>
    
            </td>
          </tr>
          {tasks.map((item,index) =>{
            return  <TaskItem key={index} index={index}  task={item} 
                      onUpdateStatus={this.props.onUpdateStatus}
                      onDelete={this.props.onDelete}
                      onUpdate={this.props.onUpdate}
                    />
          })}
          
          
        </tbody>
      </Table>   
    
    
    );
  }
}




export default TaskList;

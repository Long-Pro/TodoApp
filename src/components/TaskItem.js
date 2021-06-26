import{
  Container,Row,Col,
  Card,Button,
  Form,InputGroup,Dropdown,DropdownButton,
  Table,Badge ,
} from 'react-bootstrap'
import classNames from 'classnames';


function TaskItem(props) {
  let{task,index}=props
  let onUpdateStatus=() => {
    props.onUpdateStatus(task.id)
  }
  let onDelete=() => {
    props.onDelete(task.id)
  }
  let onUpdate=() => {
    props.onUpdate(task.id)
  }
  return (
    
    <tr>
      <td>{index+1}</td>
      <td>{task.name}</td>
      <td style={{textAlign: 'center'}}>
        <Badge variant={task.status?'success':"danger"}
          onClick={onUpdateStatus}
        >
          {task.status?'Ẩn':"Kích hoạt"}
          </Badge>
      </td>
      <td style={{display:'flex',justifyContent: 'center'}}>
        <Button variant="warning" style={{color:'white'}} className='mr-2'
          onClick={onUpdate}
        >
           <i className="fas fa-pencil-alt"></i> Sửa
        </Button>{' '}
        <Button variant="danger"
          onClick={onDelete}
        > <i className="fas fa-trash-alt"></i> Xóa
        </Button>
      </td>
    </tr>

  );
}

export default TaskItem;

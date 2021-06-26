import React from 'react';
import { nanoid } from 'nanoid'
import _ from 'lodash';


import{
  Container,Row,Col,
  Card,Button,
  Form,InputGroup,Dropdown,DropdownButton,
  Table,Badge ,
} from 'react-bootstrap';

import TaskForm from './components/TaskForm'
import Controller from './components/Controller'
import TaskList from './components/TaskList'



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      tasks:[],
      isDisplayForm:false,
      taskEditing:null,
      filter:{
        name:'',
        status:-1
      },
      keyword:'',
      sort:{
        by:'name',
        value:1
      },

    }
  }
  generateData=()=>{
    let tasks =[
      {
        id:'1',
        name:'Reactjs',
        status:true
      },
      {
        id:'2',
        name:'redux',
        status:false
      },
      {
        id:'3',
        name:'ASP.NET',
        status:true
      },
    ]
    this.setState({ tasks})
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }
  onToggleForm=()=>{
    if(this.state.taskEditing){//đag Sửa
      this.setState({
        isDisplayForm:true,
        taskEditing:null
      })

    }else{
      this.setState({
        isDisplayForm:!this.state.isDisplayForm,
        taskEditing:null
      })

    }
  }
  onShowForm=()=>{
    this.setState({isDisplayForm:true})
  }
  onCloseForm=()=>{
    this.setState({isDisplayForm:!this.state.isDisplayForm})
  }
  onSubmit=(data)=>{
    console.log(data)
    let {tasks}=this.state
    if(data.id){//Sửa
      let i=_.findIndex(tasks, function(o) { return o.id == data.id; });
      tasks[i].name=data.name
      tasks[i].status=data.status
    }else{//Thêm
      let id=nanoid()
      data.id=id
      let {tasks}=this.state
      tasks.push(data)
    }
    
    this.setState({
      tasks,
      taskEditing:null
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))

  }
  onUpdateStatus=(id)=>{
    console.log(id)
    let {tasks}=this.state
    let i=_.findIndex(tasks, function(o) { return o.id == id; });
    tasks[i].status=!tasks[i].status
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  onDelete=(id)=>{//
    console.log(id)
    let {tasks}=this.state
    let i=_.findIndex(tasks, function(o) { return o.id == id; });
    tasks.splice(i,1);
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }
  onUpdate=(id)=>{
    console.log(id)
    let {tasks}=this.state
    let i=_.findIndex(tasks, function(o) { return o.id == id; });
    this.setState({
      taskEditing:tasks[i]
    })
    console.log(this.state.taskEditing)
    this.onShowForm()

  }
  onFilter=(filterName,filterStatus)=>{
    // console.log(filterName+'  -  '+filterStatus)
    filterStatus=parseInt(filterStatus)
    // console.log(filterStatus)
    this.setState({
      filter:{
        name:filterName.toLowerCase(),
        status:filterStatus
      }
    })

  }
  onSearch=(keyword)=>{//////////////////////////
    console.log(keyword)
    this.setState({keyword})
  }
  onSort=(sort)=>{
    console.log(sort)
    this.setState({sort})

  }
  componentWillMount(){
    if(localStorage&&localStorage.getItem('tasks')) {
      let tasks =localStorage.getItem('tasks')
      tasks=JSON.parse(tasks)
      this.setState({tasks})

    }

  }
  render() {
    let{tasks,isDisplayForm,taskEditing,filter,keyword,sort}=this.state
    {
      if(filter.name){
        tasks=tasks.filter(item=>{
          return item.name.toLowerCase().includes(filter.name.toLowerCase())
        })
      }
      
      if(filter.status===0){
        tasks=tasks.filter(item=>{
          return item.status===false
        })
      }
      else if(filter.status===1){
        tasks=tasks.filter(item=>{
          return item.status===true
        })
      }

      if(keyword){
        tasks=tasks.filter(item=>{
          return item.name.toLowerCase().includes(keyword.toLowerCase())
        })
      }
      if(sort.by=='name'){  
        tasks.sort((a,b)=>{
          if(a.name>=b.name) return sort.value
          else return -sort.value
        })
      }
      else{
        tasks.sort((a,b)=>{
          if(a.status>=b.status) return sort.value
          else return -sort.value
        })
      }
      
    }
    let elmTaskForm=isDisplayForm?
      <TaskForm onCloseForm={this.onCloseForm} onSubmit={this.onSubmit} task={taskEditing}/>
      :''
    return (
      <div className="App"> 
        <Container>
          <h3 className="text-center my-2">Quản lí công việc</h3>
          <Row>
            <Col xs={isDisplayForm?4:0}>
              {/* <TaskForm/> */}
              {elmTaskForm}
            </Col>
            <Col xs={isDisplayForm?8:12}>
              <Button variant="primary mb-2"
                onClick={()=>this.onToggleForm()}
              >
                 <i className="fas fa-plus" ></i> 
                 Thêm công việc
              </Button> 
              <Button variant="danger mb-2" 
                onClick={()=>this.generateData()}
              >
                 <i className="fas fa-plus" ></i> 
                 Thêm công việc
              </Button> 
              <Controller 
                onSearch={this.onSearch}
                onSort={this.onSort}
              /> 
              <TaskList tasks={tasks} 
                onUpdateStatus={this.onUpdateStatus}
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
                onFilter={this.onFilter}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

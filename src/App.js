import './App.css';
import {BrowserRouter as Router,Route,NavLink,Prompt} from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input, FormText, Jumbotron, Container, CardBody,Card, CardText, CardSubtitle} from 'reactstrap';
import React, { useState } from 'react';
import Header from './Component/header';

const Home = ()=>(

  <Jumbotron> 
    <h1>Learn By Balkrishna Sharma</h1>
    <p> I am a software develper to work B.tech cse by Md University</p>
    <Container>
      <Button color="primary" outline>
        Start Using
      </Button>
      </Container>
    </Jumbotron>
  
  
)

const About = ()=>(
  <div className ="col-md=8">
    <div>
      <h3 className="text-center">Application Form</h3>
      </div>
    <Form >
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input style = {{width:'100%',height:40}} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input style = {{width:'100%',height:40}} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      
     
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input style = {{width:'100%',height:100}} type="textarea" name="text" id="exampleText" />
      </FormGroup>
      
      
        
        
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Container className = "text-center">
      <Button color="success">Add Course</Button>
      <Button color = "warning ml-2"> Clear</Button>
    </Container>
    </Form>
    </div>

)
const Links = ()=>(
  <div className = 'list-group'>
    <NavLink className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
    <NavLink className="list-group-item" exact activeClassName="active" to="/about">About</NavLink>
    <NavLink className="list-group-item" exact activeClassName="active" to="/content">Content</NavLink>
    <NavLink className="list-group-item" exact activeClassName="active" to="/form">Form</NavLink>
    <NavLink className="list-group-item" exact activeClassName="active" to="/course">AllCourse</NavLink>
    </div>
)
const Courses = ({course})=>{
 
  
  return(
    
    <Card>
     
      <CardBody>
            <CardSubtitle class= "font-weight-bold" className="text-center">{course.title}</CardSubtitle>
            <CardText className="text-center">{course.description}</CardText>
            <Container className = "text-center">
              
            
              <Button style={{margin:5}}  color = "warning">Add Courses</Button>
              <Button  color = "success">Update Course</Button>
              </Container>
        </CardBody>
      </Card>
  );
}
const AllCourses = ()=>{

  const [courses, setCourses] = useState([
      {title:"JavaScript",description:"this is the course"},
      {title:"Django Course",description:"this is the course"},
      {title:"React - Native",description:"this is the course"}
  ]);
  return(
      <div>
          <h1>All Courses</h1>
          <p> this is the paragraph to show that</p>
          {
              courses.length>0?
              courses.map((item)=><Courses course={item}/>):
              "No Course"
          }
          </div>

  );
}


const Content = ()=>(
  <div className = 'list-group'>
    <NavLink className = "list-group-item"  activeClassName = "active" to = "/content/city">City</NavLink>
    <NavLink className = "list-group-item"  activeClassName = "active" to = "/content/sports">Spoart</NavLink>
    <Route path= "/content/:contentName" component = {ContentDetails}/>
    </div>
)

const ContentDetails = (props)=>(
<div>
  <img src = {'./pubic/logo512.png'}/>
</div>
)

class form extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      isChanged : false
    }
  }
  render()
  {
    return(
     <div>
      
       <Prompt when = {this.state.isChanged} message = "Are you sure You want to leave"/>
       <input onChange = {()=>
       {
         this.setState({
           isChanged:true
         })
       }} type = 'text'/>
       </div>
    );
  }
}



const App = () => {
  return (
    <Container>
       <Header/>
     <Router>
        
       <div className="row">
         <section className="col-sm-4" >
         <Links/>
         </section>
         <section className = "col-sm-8">
         <Route exact path = "/" component={Home}/>
         <Route  path = "/about" component={About}/>
         <Route  path = "/content" component={Content}/>
         <Route  path = "/form" component= {form}/>
         <Route  path = "/course" component={AllCourses}/>
        
         </section>
         </div>
        
     </Router>
     
     </Container>
     );
     }

export default App;

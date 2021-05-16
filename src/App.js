import './App.css';
import {BrowserRouter as Router,Route,NavLink,Prompt} from 'react-router-dom';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import React from 'react';


const Home = ()=>(
  <div>
  <h1>Home</h1>
  <Button color="primary">primary</Button>{' '}
  <Button color="secondary">secondary</Button>{' '}
  <Button color="success">success</Button>{' '}
  <Button color="info">info</Button>{' '}
  <Button color="warning">warning</Button>{' '}
  <Button color="danger">danger</Button>{' '}
  <Button color="link">link</Button>
  </div>
  
)

const About = ()=>(
  <div>
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelectMulti">Select Multiple</Label>
        <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleFile">File</Label>
        <Input type="file" name="file" id="exampleFile" />
        <FormText color="muted">
          This is some placeholder block-level help text for the above input.
          It's a bit lighter and easily wraps to a new line.
        </FormText>
      </FormGroup>
      <FormGroup tag="fieldset">
        <legend>Radio Buttons</legend>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option one is this and that—be sure to include why it's great
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" name="radio1" />{' '}
            Option two can be something else and selecting it will deselect option one
          </Label>
        </FormGroup>
        <FormGroup check disabled>
          <Label check>
            <Input type="radio" name="radio1" disabled />{' '}
            Option three is disabled
          </Label>
        </FormGroup>
      </FormGroup>
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          Check me out
        </Label>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>

)
const Links = ()=>(
  <div className = 'list-group'>
    <NavLink className="list-group-item" exact activeClassName="active" to="/">Home</NavLink>
    <NavLink className="list-group-item" exact activeClassName="active" to="/about">About</NavLink>
    <NavLink className="list-group-item" exact activeClassName="active" to="/content">Content</NavLink>
    <NavLink className="list-group-item" exact activeClassName="active" to="/form">Form</NavLink>
    </div>
)
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
         </section>
         </div>
     </Router>
     );
     }

export default App;

import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import React from 'react';

class App1
{

}



//class App extends React.Component
  //{

    //buttonClickHandle()
    //{
    //console.log("clicked the button")
    //console.log(this.buttonClickHandle)
  //}
   //render()  
   //{
    // return <div>
      //<p>
        //<ol>
          //<li>list 1</li>
          //<li>list 2</li>
          //<li>list 3</li>
        //</ol>

//        <button onClick={()=> this.buttonClickHandle()}>Click me!!</button>
  //    </p>
    // </div>
   
   //}
//}

//const App = (promps) =>
//{
  /console.log(promps)
  //return <div><h1>This is a Component</h1></div>

//}
//export default App;
{
  state ={
    counter:0,
    component= <ChildComponent/>
  }
  constructor(props)
  {
    super(props)
    {
      console.log("This is child component")
    }
    ChildComponent()
    {
      console.log("This is a child Component")
    }
  }
}
componentDidMount()
{
  console.log("componentDidMount")
  return true
}
shouldcomponentUpdate()
{
  console.log("shouldComponentUpdate")
  return true
}
getSnapshotBeforeUpdae()
{
  console.log("getSnapshotBeforeUpdae")
  return true
}
componentDidUpdate()
{
  consolelog("componentDidUpdate") 
}

class ChildComponent extends React.Component
{
  componentWillUnmount()
  {
    console.log("unmounting child component")
  }
  render()
  {
    return <div>This is my child component</div>
  }
}
export default App;
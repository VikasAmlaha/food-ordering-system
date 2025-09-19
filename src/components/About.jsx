import UserClass from "./UserClass";
// import UserFunction from "./UserFunction";
import React from "react";


class About extends React.Component {
  constructor(props){
    super(props);
    console.log("Parent Class Constructor");


  }
  componentDidMount() {
    console.log("Parent Component Did mount");

  }

  render() {
    console.log("Parent render method ran");
    return (
    <div>
      <h1>About Us Page</h1>
      <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
        <div style={{ flex: 1 }}>
          <UserClass name="Vikas" location="Hyderabad" />
        </div>
        <div style={{ flex: 1 }}>
         <UserClass name="Vikas" location="Mars" />
        </div> 
        
      </div>
    </div>
    );
  }

  
};

export default About;
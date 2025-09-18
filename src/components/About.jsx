import UserClass from "./UserClass";
import UserFunction from "./UserFunction";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
        <div style={{ flex: 1 }}>
          <UserClass name="Vikas" location="Hyderabad" />
        </div>
        <div style={{ flex: 1 }}>
          <UserFunction name="Vikas" location="Mars" />
        </div>
      </div>
    </div>
  );
};

export default About;
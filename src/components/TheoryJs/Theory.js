import React from "react";
import "./Theory.css";
const Theory = () => {
  return (
    <div className="theory">
      <div className="theory-item">
        <h5>HOW REACT WORKS</h5>
        <p>
          React is a declarative, efficient, and flexible JavaScript library for
          building user interfaces. It lets you compose complex UIs from small
          and isolated pieces of code called “components”
        </p>
        <p>
          Basically react creates a virtual DOM and Instead of manipulating the browser's DOM directly.

          Virtual DOM is react object and Browser DOM is browser object.React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred. where it does all the necessary manipulating, before making the changes in the browser DOM. then changes only what needs to be changed.
        </p>
      </div>
      <div className="theory-item">
          <h5 className="text-uppercase">difference between state and props</h5>
          <div className="state">
              <h5 className="text-center">State</h5>
          <ul>
              <li>States are mutable</li>
              <li>State use inside a class component</li>
              <li>Which lets React do fast reference checks</li>
              <li>States are associated with the individual components can't be used by other components.</li>
              <li>States are initialize on component mount.</li>
              <li>States are used for rendering dynamic changes within component.</li>
          </ul>
          </div>
          <div className="props">
            <h5 className="text-center">Props</h5>
            <ul>
                <li>Represents "read-only" data, that are immutable and refer to attributes from parents component.</li>
                <li>Props are immutable.</li>
                <li>you can pass props between components.</li>
                <li>Props use to pass data in the child component</li>
                <li>Props change a value outside a component(child component)</li>
            </ul>
          </div>
      </div>
      <div className="theory-item">
          <h5>HOW useState WORKS </h5>
          <p>Mainly State allows us to manage changing data in an application. It's defined as an object where we define key-value pairs specifying various data we want to track in the application.</p>
          <p>
          useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
          </p>
          <p>
          useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component.
          </p>
          <ul>
              <li>useState is one of build-in react hooks available in 0.16.7 version.</li>
              <li>useState should be used only inside functional components. useState is the way if we need an internal state and don't need to implement more complex logic such as lifecycle methods.</li>
          </ul>
          <h6>Syntax</h6>
          <p>const [state, setState] = useState(initialState);</p>
      </div>
    </div>
  );
};

export default Theory;

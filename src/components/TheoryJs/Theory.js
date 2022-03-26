import React from "react";
import "./Theory.css";
const Theory = () => {
  return (
    <div className="theory">
      <div>
        <h4>HOW REACT WORKS</h4>
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
      <div>
          <h4 className="text-uppercase">difference between state and props</h4>
          <div className="state">
              <h5 className="text-center">State</h5>
          <ul>
              <li>States are mutable</li>
              <li>state use inside a class component</li>
              <li>Which lets React do fast reference checks</li>
              <li>States are associated with the individual components can't be used by other components.</li>
              <li>states are initialize on component mount.</li>
              <li>states are used for rendering dynamic changes within component.</li>
          </ul>
          </div>
          <div className="props">
            <h5 className="text-center">Props</h5>
            <ul>
                <li>represents "read-only" data, that are immutable and refer to attributes from parents componen</li>
                <li>Props are immutable.</li>
                <li>you can pass props between components.</li>
                <li>Props use to pass data in the child component</li>
                <li>Props change a value outside a component(child component)</li>
            </ul>
          </div>
      </div>
      <div>
          <h4>HOW useState WORKS </h4>
          <p>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
          useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component
          </p>
      </div>
    </div>
  );
};

export default Theory;

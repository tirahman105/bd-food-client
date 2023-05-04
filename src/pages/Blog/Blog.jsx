import React from "react";
import "./Blog.css";
import Pdf from "react-to-pdf";

const Blog = () => {
    const ref = React.createRef();
  return (
    <div className="container">
         <div className="text-center">
      <Pdf targetRef={ref} filename="BD-food-blog.pdf">
         {({ toPdf }) => <button className="btn btn-color" onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      </div>
      <div className="row w-75 mx-auto"  ref={ref}>
        <div className="card blog-card p-4 my-4">
          <h1>
            Tell us the differences between uncontrolled and controlled
            components.
          </h1>
          <p>
            In software engineering, components can be broadly classified into
            two categories: uncontrolled and controlled components. The main
            differences between these two types of components are as follows:
            Definition: Controlled components are those components that are
            managed by a framework or library, while uncontrolled components are
            those components that are not managed by a framework or library.
            State: Controlled components have their state managed by the
            framework or library, while uncontrolled components have their state
            managed by themselves or other components. Data flow: Controlled
            components typically receive data from their parent components and
            communicate with them through callbacks or events, while
            uncontrolled components can receive data from anywhere and
            communicate with any other component directly. Reusability:
            Controlled components are typically more reusable, as they are
            designed to work with the framework or library they are built on,
            while uncontrolled components may be more tightly coupled to
            specific use cases. Testing: Controlled components can be easier to
            test, as they have a clearly defined interface with the framework or
            library they are built on, while uncontrolled components may require
            more complex testing strategies to cover all possible use cases.
            Examples of controlled components include React components, Angular
            components, and Vue components, while examples of uncontrolled
            components include vanilla JavaScript functions, classes, and
            modules.
          </p>
        </div>
        <div className="card blog-card p-4 my-4">
          <h1>How to validate React props using PropTypes?</h1>
          <p>
            In React, PropTypes is a built-in library that allows developers to
            define the types of props that a component should receive. This
            helps ensure that the component receives the correct data and can
            help catch errors early in the development process. Here is an
            example of how to use PropTypes to validate React props: First,
            import the PropTypes library: javascript Copy code import PropTypes
            from 'prop-types'; Define the expected types of props for your
            component, for example: yaml
            <pre>
              <code class="language-javascript">
                {`MyComponent.propTypes = {
      name: PropTypes.string,
      age: PropTypes.number,
      isActive: PropTypes.bool
    };`}
              </code>
            </pre>
            In this example, the propTypes object specifies that the component
            should receive a string called name, a number called age, and a
            boolean called isActive. Add the propTypes validation to the
            component definition: php
            <pre>
              <code>
                {`
          function MyComponent(props) {
            // your component code here
          }

          MyComponent.propTypes = {
            name: PropTypes.string,
            age: PropTypes.number,
            isActive: PropTypes.bool
          };
        `}
              </code>
            </pre>
            Now, if a prop of the wrong type is passed to the component, React
            will log a warning in the console. It's important to note that
            PropTypes is intended for development purposes only, and should not
            be relied on for runtime type checking or input validation. For more
            robust type checking, consider using a library like TypeScript or
            Flow.
          </p>
        </div>
        <div className="card blog-card p-4 my-4">
          <h1>Tell us the difference between nodejs and express js.</h1>
          <p>
            Node.js is a JavaScript runtime that allows you to run JavaScript on
            the server-side. It provides a lightweight and efficient way to
            build server-side applications. Express.js is a web application
            framework built on top of Node.js. It provides a set of features and
            tools for building web applications, such as routing, middleware,
            and templating. In simpler terms, Node.js is the technology that
            allows you to write JavaScript for the server-side, while Express.js
            is a framework that makes it easier to build web applications with
            Node.js.
          </p>
        </div>
        <div className="card blog-card p-4 my-4">
          <h1>Tell us the difference between nodejs and express js.</h1>
          <p>
            A custom hook in React is a reusable function that encapsulates
            logic you want to share between components. You create a custom hook
            when you find yourself repeating code between components or when you
            want to reuse some stateful logic in multiple places. They help
            simplify and organize your code. <br />
            <p>
              There are several reasons why you might want to create a custom
              hook in React:
            </p>
            <p>
              <span className="fw-bold">Reusability:</span> If you find yourself
              repeating the same logic in multiple components, it's a good sign
              that you should create a custom hook. By encapsulating the logic
              in a custom hook, you can reuse it in multiple components without
              duplicating code.
            </p>
            <p>
              {" "}
              <span className="fw-bold">Abstraction:</span> If you have complex
              logic that is cluttering up your component code, you can move it
              into a custom hook to keep your components simple and focused.
            </p>
            <p>
              <span className="fw-bold">Readability:</span> By separating
              complex logic into a custom hook, you can make your component code
              more readable and easier to understand.
            </p>
            <p>
              <span className="fw-bold">Testing:</span> Custom hooks can be
              tested in isolation from your components, which can make it easier
              to write and maintain tests.
            </p>
            <p>
              {" "}
              <span className="fw-bold">Code organization:</span> Custom hooks
              can help you organize your code by grouping related logic together
              in one place.{" "}
            </p>
            Overall, creating custom hooks can help you write cleaner, more
            reusable, and more maintainable code in React.
          </p>
        </div>
      </div>
     
    </div>
   
  );
};

export default Blog;

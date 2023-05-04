/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();



const Blog = () => {
    return (
       <div className='mt-5'>
        <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
        <div ref={ref}>
         <div className='mt-5'>
            <h3>Question 1: Tell us the differences between uncontrolled and controlled components.
</h3>
        <h4>Answer: Controlled components have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components manage their own state internally.</h4>
        <h3>Question 2: How to validate React props using PropTypes?</h3>
        <h4>Answer: The way to validate React props using propTypes is given below:

             <p>React PropTypes validators:</p>
        <p>PropTypes.any : The prop can be of any data type.</p>
<p>PropTypes.bool : The prop should be a Boolean.</p>
        <p>PropTypes.number : The prop should be a number.</p>
        <p>PropTypes.string : The prop should be a string.
</p>
<p>PropTypes.func : The prop should be a function.
</p>
<p>PropTypes.array : The prop should be an array.</p>

</h4>
        <h3>Question 3: Tell us the difference between nodejs and express js.</h3>
        <h4>Answer:  NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</h4>
        <h3>Question 4: What is a custom hook, and why will you create a custom hook?</h3>
        <h4>Answer: Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</h4>


        </div>
       </div>
       </div>
    );
};

export default Blog;
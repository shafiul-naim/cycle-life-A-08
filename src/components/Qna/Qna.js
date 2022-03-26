import React from 'react';
import './Qna.css'

const Qna = () => {
    return (
        <div className='qna'>
            <h2>Question-01: How react works</h2>
            <p>Ans: React js create a virtual dom using components, state, props.When we create a components we create JSX element.In JSX we can do both JS and HTML.Creating JSX through props and using state we can manipulate design and data separately.After that we keep those data in virtual dom.Then we compare the new virtual dom with old virtual dom.If any changes happen then we update it.after that it make changes the real dom.Thats why in react we dont need to load full data.it works as a single page application </p>
            <h2>Question-2: props vs state</h2>
            <p>Ans: <br></br><b>props: </b> We use Props for sending data and event handlers to a component's children.its immutable — it cant be modified after that.The parent component sets props for the children components.<br></br><b>state: </b>A state is an object that stores properties values of an component.A state can be changed which might change over time.we can store multiple properties in the state object..Event handlers are responsible for updating the state.</p>
        </div>
    );
};

export default Qna;
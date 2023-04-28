
import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
// const heading = React.createElement("h1", {id : "heading"}, "Namaste React");
// console.log(heading);

// // JSX Element
// const JSXHeading = <h1 className="head">Namaste React from JSX</h1>;
// console.log(JSXHeading);

// React Funcational Component
// const HeadingComponent = () => {
//     return <h1>Namaste React from Functional Component</h1>;
// };

// above and below syntax is same

// const HeadingComponent = () => (
//         <h1>Namaste React from Functional Component</h1>
// );


// Component Composition

// const Title = () => (
//     <h1 className="head">Namaste React from JSX</h1>
// );

// 
// const HeadingComponent = () => (
//     <div id="container">
//          <Title/>
//         <h2>{200 + 300}</h2> 
//         <h1 className='head'>Namaste React from Functional Component</h1>
//     </div>
// );



// Adding React Element in Component
// const title = (
//     <h1 className="head">Namaste React from JSX</h1>
// );

// const HeadingComponent = () => (
//     <div id="container">
//         {title}
//         <h1 className='head'>Namaste React from Functional Component</h1>
//     </div>
// );

// Calling the component with function call
// const Title = () => (
//     <h1 className="head">Namaste React from JSX</h1>
// );


// const HeadingComponent = () => (
//     <div id="container">
//         {Title()}
//         <h1 className='head'>Namaste React from Functional Component</h1>
//     </div>
// );

// React Fragments
const Title = () => (
    <h1 className="head">Namaste React from JSX</h1>
);


const HeadingComponent = () => (
    <>
        <div id="container">
            {Title()}
            <h1 className='head'>Namaste React from Functional Component</h1>
        </div>
        <div id="container">
        </div>
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
import React from 'react';
import ReactDOM from 'react-dom/client';

const todoTitle = 'Call Family';
const todoDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a /galley of type and scrambled it to make a type specimen book.';
// const date = '8/5/2025';
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();

// const headingStyle = {
//     backgroundColor: "purple",
//     color: "white",
//     textAlign: "center",
//     padding: "15px"
// }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div>
    <h1 className="headingStyle largeText">Welcome</h1>
    <h3>{todoTitle}</h3>
    <h3>{todoDescription}</h3>
    <h3 style={{color: 'green'}}>Hello</h3>
    <p>{dateName + "/" + monthName + "/" + currentYear}</p>

</div>
);


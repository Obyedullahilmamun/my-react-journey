import React from 'react';
import ReactDOM from 'react-dom/client';

const todoTitle = 'Call Family';
const todoDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a /galley of type and scrambled it to make a type specimen book.';

const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const currentYear = date.getFullYear();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <div>
    <h1 className="headingStyle largeText">Welcome</h1>

   <div className="card">
    <h3 className="cardTitle">{todoTitle}</h3>
    <h3 className="cardDescription">{todoDescription}</h3>
    <h3 className="cardText">Hello</h3>
    <p className="cardDate">{dateName + "/" + monthName + "/" + currentYear}</p>
   </div>
   
</div>
);


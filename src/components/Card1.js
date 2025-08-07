// const date = new Date();
// const dateName = date.getDate();
// const monthName = date.getMonth();
// const currentYear = date.getFullYear();



// function Card(props) {
//     console.log(props);
//     return  <div className="card">
//     <h3 className="cardTitle">{props.titleText}</h3>
//     <h3 className="cardDescription">{props.todoDescription}</h3>
//     {/* <h3 className="cardText">Hello</h3> */}
//     <p className="cardDate">{dateName + "/" + monthName + "/" + currentYear}</p>
//    </div>
// }

// export default Card;



function Card1(props) {
    return (
        <div>
           <h3>{props.name}</h3>
           <p>{props.desc}</p>
        </div>
    )
}

export default Card1;
// import React from "react"
// import Card from "./components/Card";
// import Data from "./data.json"; 
// function App() {

//     return <div>
//                 <h1 className="headingStyle largeText">Welcome</h1>
//                  {Data.map((item, index) => <Card key={index} titleText={item.title} descText={item.desc} /> )}  
//     </div>
 
// } 

// export default App;

import React from 'react'
import Card1 from './components/Card1'
import Card2 from './components/Card2'

function App(){
    return (
        <div>
            <Card1 name="Card1" desc="this is card1" />
            <Card2 name="Card2" />
        </div>

    )

} 

export default App;
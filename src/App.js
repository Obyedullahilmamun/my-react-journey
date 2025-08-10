import React from 'react';
import { Child } from './components/STATE_LIFTING/Child';


export default function App() {

  const data = "I am from Parent (app)"

  const handleChildData= (childData) => {
    console.log("App: " + childData);
  }

  return (
    <div>
      <Child data={data} onChildData={handleChildData}/>
    </div>
  );
}

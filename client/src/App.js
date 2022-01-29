import React, { Fragment, useState } from "react";
import "./App.css";
import classes from './App.module.css'
import AddModal from './Components/AddModal'
function App() {

  const [add, setAdd] = useState(true);
  
  return (
    <Fragment>
      <div className={classes.container}>
        
        <button  className={classes.fab}>+</button>
        {
          add?<AddModal/>:null
        }
       
      </div>
    </Fragment>
  );
}

export default App;

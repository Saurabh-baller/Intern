import React from "react";
import Components1 from "../component/Components1";
import Question2 from "../component/Question2";
import Scroll from "../component/Scroll";
import ContextComponent from "../component/MyComponent";


import ParentComponent from "../component/ParentComponent";
import ChildComponent from "../component/ChildComponent";
import Styles from "../App.css"

const Mainpage = () => {
  

  return (
    <div >
      <div>
        <Components1 />
      </div>
      <div>
        <Question2 />
      </div>
      <div>
        <ContextComponent />
      </div>
      <div>
        <Scroll />
      </div>
     <div>
        <ParentComponent/>
        {/* <ChildComponent/> */}
     </div>
    </div>
 
  );
};

export default Mainpage;

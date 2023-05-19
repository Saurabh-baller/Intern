import React, { useRef } from "react";

function Scroll() {
  const divRef = useRef(null);

  const handleScroll = () => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="q4" >
        <h1>Question 4</h1>
        I've used useRef hook in this to scroll to another div
      </div>

      <div >
        <button onClick={handleScroll}>Scroll to Div</button>
       
        <div style={{ height: "50vh", background:"pink"}}>Scroll down</div>
        Div to scroll into
        <div ref={divRef} style={{ height: "50vh", background: "lightblue" }}>
          <h1>Scrolled</h1> 
        </div>
       
      </div>
    </div>
  );
}

export default Scroll;

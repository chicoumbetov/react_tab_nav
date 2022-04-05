import { useState } from "react";
import "../../App.css";
import Content1 from "../Content1";
import Content2 from "../Content2";
import Content3 from "../Content3";

const TabsPage = () => {
    const [toggleState, setToggleState] = useState(1)
    const toggleTab = (index: number) => setToggleState(index);

    return (
       <>
           <div className="container">
               <div className="bloc-tabs">
                   <button
                       className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                       onClick={() => toggleTab(1)}
                   >
                       Companies
                   </button>
                   <button
                       className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                       onClick={() => toggleTab(2)}
                   >
                       Activities
                   </button>
                   <button
                       className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                       onClick={() => toggleTab(3)}
                   >
                       Declarations
                   </button>
               </div>

               <div className="content-tabs">
                   <Content1 toggleState={toggleState} />
                  <Content2 toggleState={toggleState} />
                   <Content3 toggleState={toggleState} />
               </div>
           </div>
            <div/>
       </>
    );
}

export default TabsPage;

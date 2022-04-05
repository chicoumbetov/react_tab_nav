import React from "react";
import '../App.css';

const Content1 = ({toggleState}: { toggleState: number }) => {

    return(
        <div
            className={toggleState === 2 ? "content  active-content" : "content"}
        >
            <h2>Content 2</h2>
            <hr />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                voluptatum qui adipisci.
            </p>
        </div>
    )
}

export default Content1;

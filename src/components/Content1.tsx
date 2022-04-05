import React from "react";
import '../App.css';

const Content1 = ({toggleState}: { toggleState: number }) => {

    return(
        <div
            className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <h2>Content 1</h2>
            <hr />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                vel voluptatum?
            </p>
        </div>
    )
}

export default Content1;

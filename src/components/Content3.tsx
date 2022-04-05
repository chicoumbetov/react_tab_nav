import React from "react";
import '../App.css';

const Content1 = ({toggleState}: { toggleState: number }) => {

    return(
        <div
            className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <h2>Content 3</h2>
            <hr />
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                Accusamus in quia odit aspernatur provident et ad vel distinctio
                recusandae totam quidem repudiandae omnis veritatis nostrum
                laboriosam architecto optio rem, dignissimos voluptatum beatae
                aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
        </div>
    )
}

export default Content1;

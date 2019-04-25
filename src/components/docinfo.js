import React from "react"

export default props => (
    <div>
        <p>Author: {props.author}</p>
        <p>Last Update: {props.date}</p>
        <p><a href={"https://github.com/mathmathniconico/mathdala/tree/master/src/pages"+props.path+".md"}>View on GitHub</a></p>
    </div>
)
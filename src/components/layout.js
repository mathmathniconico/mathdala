import React from "react"
import Header from "../components/header"
import { Helmet } from "react-helmet"

import "./layout.css"

export default ({ children }) => (
    <div>
        <Helmet>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.10.1/dist/katex.css" integrity="sha384-b/NoaeRXkMxyKcrDw2KtVtYKkVg3dA0rTRgLoV7W2df3MzeR1eHLTi+l4//4fMwk" crossorigin="anonymous" />
        </Helmet>
        <Header></Header>
        {children}
    </div>
)
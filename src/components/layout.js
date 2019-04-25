import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

import "./layout.css"

export default ({ children }) => (
    <div>
        <Header></Header>
        {children}
    </div>
)
import React from "react"
import { Link } from "gatsby"

const ListLink = props => {
    const internal = /^\/(?!\/)/.test(props.to)

    if (internal) {
        return (
            <li style={{ display: `inline-block`, marginRight: `1rem` }}>
                <Link to={props.to} style={{ color: `#FFFFFF`, textDecoration: `none` }} activeStyle={{ color: `#FFFFFF`, textDecoration: `none` }}>{props.children}</Link>
            </li>
        )
    } else {
        return (
            <li style={{ display: `inline-block`, marginRight: `1rem` }}>
                <a href={props.to} style={{ color: `#FFFFFF`, textDecoration: `none` }}>{props.children}</a>
            </li>
        )
    }
}

export default () => (
    <header style={{ background: `#2979FF`, padding: `0.1rem 0`, marginBottom: `0 1.45rem` }}>
        <ul style={{ listStyle: `none` }}>
            <ListLink to="/"><h2 style={{ display: `inline`, marginRight: `2rem` }}>ますだら</h2></ListLink>
            <ListLink to="/Articles/">記事</ListLink>
            <ListLink to="/Notes/">ノート</ListLink>
            <ListLink to="/Links/">リンク集</ListLink>
            <ListLink to="https://github.com/mathmathniconico/mathdala">GitHub</ListLink>
        </ul>  
    </header>
)
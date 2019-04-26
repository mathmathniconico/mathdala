import React from 'react'
import { graphql } from 'gatsby'
import rehypeReact from "rehype-react"
import Layout from "../components/layout"
import Docinfo from "../components/docinfo"

import 'katex/dist/katex.min.css'

const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { }     // add components here. gatsby-remark-component
}).Compiler

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds our post data.
    const { frontmatter, htmlAst } = markdownRemark
    return (
        <Layout>
            <div className="blog-post-container">
                <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <div className="docinfo" align="right"><Docinfo author={frontmatter.author} date={frontmatter.date} path={frontmatter.path}/></div>
                    <div className="blog-post-content">{renderAst(htmlAst)}</div>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            htmlAst
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
                author
            }
        }
    }
`
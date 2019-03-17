module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/pages/`,
                name: "markdown-pages",
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [],
            },
        },
    ],
}
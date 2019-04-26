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
                plugins: [
                    {
                        resolve: `gatsby-remark-component`,
                        options: {
                            // add options
                        },
                    },
                    {
                        resolve: `gatsby-remark-katex`,
                        options: {
                            // add options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
                            throwOnError: false,
                            strict: `ignore`,
                        },
                    },
                    {
                        resolve: `gatsby-remark-autolink-headers`,
                        options: {
                            // add options from https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-remark-autolink-headers here
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-catch-links`,
            options: {
                // add options
            },
        },
        {
            resolve: `gatsby-plugin-web-font-loader`,
            options: {

            },
        },
    ],
}
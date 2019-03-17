plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
  
        // Defaults to `() => true`
        filter: node => node.sourceInstanceName === `blog`,
        // Defaults to `MarkdownRemark`
        type: `BlogPost`,
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [],
      },
    },
  ],
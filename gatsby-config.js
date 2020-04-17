module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        // source directory
        contentPath: 'src/decks',
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /full-logo/,
        }
      }
    },
  ]
}
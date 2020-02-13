module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-mdx-deck',
      options: {
        // source directory
        contentPath: 'src/decks',
        basePath: '../slide',
      }
    }
  ]
}
module.exports = api => {
  api.cache(true)
  return {
    plugins: [
      "styled-jsx/babel"
    ],
  }
}

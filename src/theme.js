import Provider from './Provider'

export default {
  Provider,
  fonts: {
    body: "-apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  colors: {
    text: '#333',
    background: 'white',
    primary: '#05c5cc',
  },
  styles: {
    Slide: {
      padding: 32,
      overflow: 'auto',
    },
    h2: {
      fontSize: '75%',
      textAlign: 'left',
      maxWidth: 640,
      width: '100%',
    },
    p: {
      color: '#9d9d9d',
      fontSize: '50%',
      lineHeight: 1.6,
      marginTop: '1.5em',
      marginBottom: '1.5em',
      maxWidth: 640,
    },
    a: {
      textDecoration: 'none',
    }
  },
}
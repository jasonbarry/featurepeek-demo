import Button from '../components/Button'
import ColorGrid from '../components/ColorGrid'
import Emoji from '../components/Emoji'
import Layout from '../components/Layout'
import LocalStorage from '../components/LocalStorage'
import Logo from '../components/Logo'
import Metadata from '../components/Metadata'
import Provider from '../components/Provider'
import TriggerError from '../components/TriggerError'

export default {
  Provider,
  components: {
    Button,
    ColorGrid,
    Emoji,
    Layout,
    LocalStorage,
    Logo,
    Metadata,
    TriggerError,
  },
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
      paddingBottom: 64,
      paddingTop: 96,
      overflow: 'auto',
    },
    h2: {
      fontSize: '36px !important',
      textAlign: 'left',
      maxWidth: 640,
      width: '100%',
    },
    p: {
      color: '#9d9d9d',
      fontSize: '24px !important',
      lineHeight: 1.6,
      marginTop: '1.5em',
      marginBottom: '1.5em',
      maxWidth: 640,
    },
    strong: {
      color: '#333',
    },
    a: {
      textDecoration: 'none',
    }
  },
}
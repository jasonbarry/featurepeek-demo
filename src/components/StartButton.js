import React from 'react'
import { navigate } from '@reach/router'

import Button from './Button'

export default () => {
  return (
    <div style={{ marginTop: 80 }}>
      <Button onClick={() => navigate('/1')}>Start Demo</Button>
    </div>
  )
}

import React from 'react'

const containerStyles = {
  background: 'white',
  borderRadius: 100,
  bottom: 0,
  lineHeight: 0,
  position: 'fixed',
  padding: 16,
  paddingBottom: 32,
  textAlign: 'center',
  width: '100%',
}

export default ({ currentStep, totalSteps }) => {
  const arr = Array(totalSteps)
  const steps = arr.fill(<div />)
  return (
    <div style={containerStyles}>
      {steps.map((step, i) => {
        const isActive = currentStep === i + 1
        const dot = {
          backgroundColor: isActive ? '#05c5cc' : '#d9d9d9',
          borderRadius: 8,
          display: 'inline-block',
          height: 8,
          marginLeft: 5,
          marginRight: 5,
          transform: `scale(${isActive ? 1.5 : 1})`,
          transition: 'transform 0.3s ease, background-color 0.3s ease',
          width: 8,
        }

        return (
          <a
            key={`step-${i}`}
            href={`/${i}`}
            style={dot}
          />
        )
      })}
    </div>
  )
}

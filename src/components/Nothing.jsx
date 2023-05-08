import React from 'react'
//css for this is inside Filter.css
const Nothing = (props) => {
  return (
    <div className='nothing-page'>
        <h3>No resutls found for "{props.info}"</h3>
    </div>
  )
}

export default Nothing
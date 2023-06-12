import React from 'react'

const Title = ({ title, subTitle }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} {subTitle}
      </h2>
    </div>
  )
}

export default Title

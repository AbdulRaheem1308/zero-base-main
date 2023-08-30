import React from 'react'
// import "./Error.scss";

const Error = (props) => {
  const { name, item, error } = props
  const errorMsg = (error && error[name] && error[name].message) || ''

  if (item === undefined) return null
  const { description } = item

  return (
    <div>
      {!!description && <div className='error'>{description}</div>}
      <div className='error'>{errorMsg}</div>
    </div>
  )
}

export default Error

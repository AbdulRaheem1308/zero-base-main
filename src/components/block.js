import React from 'react'
import PropTypes from 'prop-types'
// import './Block.scss'
import Tooltip from './tooltip'
const Block = (props) => {
  const {
    title,
    padding,
    background,
    children,
    blockClassName,
    titleClassName,
    childrenClassName,
    variant,
    tooltip, 
    style
  } = props
  return (
    <div variant={variant} className={`${blockClassName} `} style={style}>
      {title && (
        <div className={`${titleClassName} `}>
          {title}
          <div
            style={{ marginLeft: '4px', display: 'flex', alignItems: 'center' }}
          >
            {tooltip && <Tooltip tooltip={tooltip} title={title} />}
          </div>
        </div>
      )}
      {children && (
        <div
          className={childrenClassName}
          style={{
            padding: padding,
            background: background
          }}
        >
          {children}
        </div>
      )}
    </div>
  )
}

Block.defaultProps = {
  title: '',
  padding: '',
  background: '',
  blockClassName: '',
  titleClassName: '',
  childrenClassName: '',
  tooltip: true
}

Block.propTypes = {
  title: PropTypes.string,
  padding: PropTypes.string,
  background: PropTypes.string,
  blockClassName: PropTypes.string,
  titleClassName: PropTypes.string,
  childrenClassName: PropTypes.string
}

export default Block;
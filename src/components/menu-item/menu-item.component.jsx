import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = (props) => {
  // console.log(props)
  return (
    <div  
      className={`menu-item ${props.size}`} 
      onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}>
      <div className="background-image" style={{
        backgroundImage: `url(${props.imageUrl})`
      }} />
      <div className="content">
        <h1 className="title">{props.title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem);
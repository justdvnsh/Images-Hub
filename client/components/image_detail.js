import React from 'react';

const ImageDetail = (props) => {
  return (
    <li className="media list-group-item">
      <div className="media-left">
        <img src = {props.image.link} />
      </div>
      <div className="media-body">
        <div className="media-heading">
          <h2>{props.image.title}</h2>
        </div>
      </div>
    </li>
  )
}

export default ImageDetail;

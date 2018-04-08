import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  {title: 'pick', link: 'https://dummyimage.com/600X400'},
  {title: 'hick', link: 'https://dummyimage.com/600X400'},
  {title: 'pen', link: 'https://dummyimage.com/600X400'},
]

const imagesList = () => {
  const renderedImages = IMAGES.map((image) => {
    return <ImageDetail image={image} key={image.title}/>
  })
  return (
    <ul className="media-list list-group">
      {renderedImages}
    </ul>
  );
};

export default imagesList;

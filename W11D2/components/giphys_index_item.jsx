import React from 'react';

function GiphysIndexItem({ img }) {
  return (
    <li >
      <img src={img.images.original.url} />
    </li>
  );
}

export default GiphysIndexItem;

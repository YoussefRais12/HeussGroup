import React from 'react';
// Import the image from your src folder or reference it directly from the public folder
import imagePath from '../img/heuss-logo.png'; // Adjust the path to where your image is located

function ImageComponent(props) {
  return <img src={imagePath} alt="LogoGroup" width={85} height={75} {...props} />;
}

export default ImageComponent;

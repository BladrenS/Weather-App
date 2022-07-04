import React from "react";
import PropTypes from 'prop-types'
import logo from '../assets/cloudLogo.svg'

const Image = ({
   src, alt
}) => {
   
   return (
      <img 
         src={logo} 
         alt={alt}
         className={'cloudPic'}
         />
   );
};

Image.propTypes = {
   src: PropTypes.string,
   alt: PropTypes.string,
}

Image.defaultProps = {
   src: 'https://via.placeholder.com/100x100',
   alt: 'image name',
}

export default Image;
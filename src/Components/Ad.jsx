import React from 'react'
import bannerImage from '../images/banner.svg'
function Ad(props) {

    if (!props.warn) {
        return null;
      }
    
      return (
        <div>
        <img src={bannerImage} alt="배너이미지" />
        </div>
      );

    }

export default Ad; 
import React from 'react';
import {images} from '../../constants';
import {SubHeading} from '../../components';


import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src = {images.chef} alt = "chef"/>
    </div>

    <div className="app__wrapper_info">
      <SubHeading title ="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src = {images.quote} alt = "quote"/>
          <p className='p__opensans'>While it may not be obvious to everyone,</p>
        </div>
        <p className='p__opensans'>there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraph</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src = {images.sign} alt = 'sign'/>
      </div>
    </div>
  </div>
);

export default Chef;

import React from 'react';

import './AboutUs.css';
import {images} from '../../constants';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id = 'about'>
    <div className="app__aboutus-overlay flex__center">
      <img src = {images.G} alt = "g-letter"/>
    </div>
    <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className='headtext__cormorant'>About Us</h1>
          <img src = {images.spoon} alt = 'about_spoon' className='spoon__img'/>
          <p className='p__opensans'>To be, or not to be: that is the question: whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles, and by opposing end them? To die: to sleep; no more; and, by a sleep to say we end the heart-ache and the thousand natural shocks that flesh is heir to, 'tis a consummation devoutly to be wish'd.</p>
          <button type = "button" className='custom__button'>Learn More</button>
        </div>
      

      <div className="app__aboutus-content_knife flex__center">
        <img src = {images.knife} alt = "knife"/>
      </div>

      
        <div className="app__aboutus-content_history">
          <h1 className='headtext__cormorant'>Our History</h1>
          <img src = {images.spoon} alt = 'about_spoon' className='spoon__img'/>
          <p className='p__opensans'>To be, or not to be: that is the question: whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles, and by opposing end them? To die: to sleep; no more; and, by a sleep to say we end the heart-ache and the thousand natural shocks that flesh is heir to, 'tis a consummation devoutly to be wish'd.</p>
          <button type = "button" className='custom__button'>Learn More</button>
        </div>
      </div>

  </div>
);

export default AboutUs;

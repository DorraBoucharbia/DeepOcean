import React from 'react';
import './WaveComponent.css'; // Import the CSS file for styling
import waveimg from "../assets/wave.jpg"
import jounta from "../assets/jounta.jpg"
import merza9 from "../assets/merza9.png"
import drink from "../assets/drink.png"
import joint from "../assets/joint.png"
import fish from "../assets/fish.gif"
import kerch from "../assets/9erch.png"
import glass from "../assets/glass.png"
import drop from "../assets/drop.gif"
import kaabour from "../assets/kaabour.gif"
import radio from "../assets/radio.png"
import dam from "../assets/dam.png"





const WaveComponent = () => {
  return (
    <div className="ocean-scene">
      <img src={waveimg} className="ocean-image">
      </img>

      <img src={jounta} className='jounta' />
      <img src={merza9} className='merza9' />
      <div className="bubble small"></div>
      <div className="bubble medium"></div>
      <div className="bubble large"></div>
      <img src={drink} className='drink' />
      <img src={joint} className='joint' />
      <div className='smoke'></div>
      <img src={fish} alt="Fish" class="fish" />
      <div className="container">
        <img src={kerch} className="kerch" />
        <img src={glass} className="glass" />
      </div>

      <img src={drop} className='drop' />
      <img src={kaabour} className='kaabour' />
      <img src={radio} className='radio' />
      <img src={dam} className='dam' />



    </div>
    
  );
};

export default WaveComponent;
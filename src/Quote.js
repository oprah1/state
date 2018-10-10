// src/Quote.js
import React from "react";

const Quote = ({Quote, character, image}) => (
  <figure>
    <img
      src={image}
      alt={character} 
    />
    <figcaption>
      <blockquote>{Quote}</blockquote>
      <cite>{character}</cite>
    </figcaption>
  </figure>
);

export default Quote;

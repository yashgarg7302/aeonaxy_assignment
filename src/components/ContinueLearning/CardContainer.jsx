import React from 'react';
import Card from './Card';
import img1 from '../ContinueLearning/course1.jpg';
import img2 from '../ContinueLearning/course2.jpg';
import img3 from '../ContinueLearning/course3.jpg';
import img4 from '../ContinueLearning/course4.jpg';

function CardContainer() {
  return (
    <div>
        <h1 className="mt-16 mb-4 text-xl font-bold">Continue Learning</h1>
        <div className="flex flex-wrap justify-center">
        
    {/* First 4 cards in one row */}
    <div className="grid gap-4 grid-cols-4 w-full md:w-3/4 mb-4">
      <Card image={img1} title="Computer memory Lesson 2 of 26" description="Binary, Decimal and Hexadecimal" progressWidth="0%"/>
      <Card image={img2} title="Random,Variables & Distributions.." description=" Random Variable Applications" progressWidth="0%"/>
      <Card image={img3} title="Artificial Neural Networks - Lesso.." description="Computationally Modelling the Brain" progressWidth="100%"/>
      <Card image={img4} title="Casino Probability - Lesson 3 of 16" description="Avoid the Scam" progressWidth="0%"/>
    </div>
  </div></div>
    
  );
}

export default CardContainer;
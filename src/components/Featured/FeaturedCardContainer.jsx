import React from 'react'
import FeaturedCard from './FeaturedCard'
import img from '../Featured/featuredcourse.jpg';
function FeaturedCardContainer() {
  return (
    <div>
         <h1 className="mt-16 mb-4 text-xl font-bold">Featured Learning Paths</h1>
        <div className="flex flex-wrap justify-center">
        <div className="grid gap-4 grid-cols-2 w-full md:w-3/4 mb-4">
        <FeaturedCard
        image={img}
        numCourses={6}
        title="Foundational Math"
        description="This 7-course path starts with pre-algebra and builds up to fundamentals of algebra and geometry. Let's Get started!"
        link="#"
      />
      {/* Add another FeaturedCard with custom props */}
      <FeaturedCard
        image={img}
        numCourses={7}
        title="Mathematical Thinking"
        description="This course path starts with everyday math and builds up to fundamentals of Algebra and Geometry. Let's get started!"
        link="#"
      />
        </div>
        </div>
        
      
    </div>
  )
}

export default FeaturedCardContainer
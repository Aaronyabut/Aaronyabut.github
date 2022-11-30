import React from 'react';
import ReadingRainforest from './data/ReadingRainforest';

export default function Projects () {
  return (
    <div className="flex justify-center mx-14 my-96 border-2">
      <div className="w-1100 border-2 ">
        <div className="w-50 border-2">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500/100 to-pinkish">
          projects
          </h1>
        </div>
        <ReadingRainforest />
      </div>
    </div>
  )
}
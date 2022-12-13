import React from 'react';

export default function Introduction () {
  return (
    <div className=" flex justify-center mx-14">
      <div className="w-150">
        <h5 className="text-left text-2xl font-display text-white">
          Hi there, my name is
        </h5>
        <div className="w-140">
          <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500/100 to-pinkish ">
            Aaron Yabut.
          </h1>
        </div>
        <h3 className="text-left text-5xl mb-3 font-display text-white">
          I am Full Stack Developer
        </h3>
        <h3 className="text-left text-1xl font-display text-white">
          I graduated at California State University of Long Beach, with a B.S. in Kinesiology and Cum Laude in 2021. I was previously pursuing to become a Physical Therapist but during my last in year college I dicovered software development. After writing my first line of code, I immediately fell in love! Software development fit my personality a lot more, I love the critical thinking aspect and it also allowed me to express my creativity side. I was self teaching myself how to code during my last year of college and after graduating, I took coding more serious.
        </h3>
        <>&nbsp;</>
        <h3 className="text-left text-1xl font-display text-white">
          Six months after graduating, I enrolled into&nbsp;
          <a href="https://www.hackreactor.com/" id="link"
          className="text-pinkish">Hack Reactor</a>
          , an advance software engineering immersive. I completed their 12-week program where I learned how to create full stack applications in an agile enviroment.
        </h3>

        <div className="ml-10 mt-10 w-48 hover:cursor-pointer " >
          <div className="relative group">
            <a href="resume.pdf" target="_blank">
              <div className="absolute -inset-3 bg-gradient-to-r from-indigo-500/100 to-pinkish rounded-lg blur opacity-25 animate-pulse group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="flex justify-center relative px-7 py-6 bg-blueish ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="flex justify-center">
                  <p className="text-right font-extrabold text-slate-100">RESUME</p>
                </div>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>

  )
}
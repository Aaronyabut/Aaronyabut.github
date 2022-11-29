import React from 'react';

export default function Projects () {
  return (
    <div className="flex justify-center mx-14 my-96 border-2">
      <div className="w-1000 border-2">
        <div className="w-50 border-2">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500/100 to-pinkish">
          projects
          </h1>
        </div>
        <div className="flex flex-row">
          <div id="card"
            className="
              rounded-2xl mt-4 w-500 max-w-full overflow-hidden bg-cover bg-temp-img2 shadow-3xl
            "
            >
            <div id='info'
              className="
                relative max-w-full h-500 bg-white transition opacity-60
              "
              >
              <h1 id='title'
                className="
                  m-0 p-6 text-2.5 leading-none decoration-black
                "
                >Title</h1>
              <p id='description'
                className="
                  m-0 p-desc text-base leading-normal
                "
                >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius esse corporis, velit porro impedit laudantium accusamus! Id velit, illum magni rem mollitia blanditiis iste maiores optio ipsa, est dolorem fugit.</p>
            </div>
          </div>
          <div className="border-2 relative right-6 h-auto my-auto w-126 text-right">
            <div className="border-2 text-white bg-purpleish h-auto my-2 rounded-xl p-2 shadow-3xl">
              <p className="h-auto p-2 ">
                A full-stack application of a website that allows users to trade their books locally.
              </p>
            </div>
              <ul className="border-2 flex flex-row-reverse space-x-4 space-x-reverse my-2 px-2 pt-2 text-pinkish">
                <li><a id="link" href="https://www.google.com/">Node.js</a></li>
                <li><a id="link" href="https://www.google.com/">JavaScript</a></li>
              </ul>
              <div className="border-2 text-white px-2">Hello</div>
          </div>
        </div>
      </div>
    </div>
  )
}
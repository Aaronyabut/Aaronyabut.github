import React from 'react';

export default function Projects () {
  return (
    <div className="flex justify-center mx-14 my-96 border-2">
      <div className="w-160 border-2">
        <div className="w-50 border-2">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500/100 to-pinkish">
          projects
          </h1>
        </div>
        <div id="card"
          className="
            rounded-2xl mt-4 w-500 max-w-full overflow-hidden bg-cover bg-temp-img shadow-3xl
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

      </div>
    </div>
  )
}
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Socials from './components/Socials'
import Outro from './components/Outro'

export default function App() {
  return (
    <div className="h-full text-slate-800 bg-blueish mb-1 static">
      <NavBar />

        <div className="border-2 bg-blueish">
          <Introduction />
        </div>
        <div className="border-2 bg-blueish" id="aboutMe">
          <AboutMe />
        </div>
        <div className="border-2 bg-blueish" id="projects">
          <Projects />
        </div>
        <div className="border-2 bg-blueish">
          <Socials />
        </div>


      {/* <Outro /> */}

    </div>
  )
}

/*
<h1>About Me</h1>
<h1>Projects</h1>
<h1>Socials</h1>
<h1>Contact Me</h1>
*/

/*
color: white;
color: #d2d3d0; text? whiteish
color: #3c3e48; blueish
color: #ff79c6; pink
color: #3d3244; purple
*/
import NavBar from './components/NavBar'
import AboutMe from './components/AboutMe'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'

export default function App() {
  return (
    <div className="h-full pt-40 text-slate-800 bg-blueish">
      <NavBar />
      <Introduction />
      <AboutMe />
      <Projects />
      <ContactMe />

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
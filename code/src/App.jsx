import './App.css'
import logo from '../src/images/logo.svg'
import iconMenu from '../src/images/icon-menu.svg'
import heroImageMobile from '../src/images/image-hero-mobile.png'
import heroImagedesktop from '../src/images/image-hero-desktop.png'
import clientDatabiz from '../src/images/client-databiz.svg'
import clientAudiophile from '../src/images/client-audiophile.svg'
import clientMeet from '../src/images/client-meet.svg'
import clientMaker from '../src/images/client-maker.svg'
import iconTodo from '../src/images/icon-todo.svg'
import iconCalendar from '../src/images/icon-calendar.svg'
import iconReminders from '../src/images/icon-reminders.svg'
import iconPlanning from '../src/images/icon-planning.svg'

// import arrowDown from '../src/images/icon-arrow-down.svg'
// import arrowUp from '../src/images/icon-arrow-up.svg'


const arrowDown = () => {
  return(
    <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
      <path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
    </svg>
  )
}

const arrowUp = () => {
  return(
    <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
      <path stroke="currentColor" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>
    </svg>
  )
}



function App() {

  const checkHover = (el) => {
    return(
      <div>
        {el.matches(':hover')? arrowDown():arrowUp()}
      </div>
    )
  }

  return (
    <div className="App">
      <nav>
        <div class = 'nav-wrap'>
          <div class = 'logo'>
            <img src={logo} alt = 'logo'/>
          </div>
          <div class = 'menu-wrap'>
            <div class = 'menu-desktop'>
              <div class = 'nav-items-wrap'>
                <div class = 'nav-item'>
                  <p>Features</p>
                  {arrowDown()}
                  <div class = 'nav-item-content'>
                    <img src = {iconTodo} alt = 'icon-todo-list'/>
                    <p>Todo List</p>
                    <img src = {iconCalendar} alt = 'icon-calendar'/>
                    <p>Calendar</p>
                    <img src = {iconReminders} alt = 'icon-reminders'/>
                    <p>Reminders</p>
                    <img src = {iconPlanning} alt = 'icon-planning'/>
                    <p>Planning</p>
                  </div>
                </div>
                <div class = 'nav-item'>
                  <p>Company</p>
                  {arrowDown()}
                  <div class = 'nav-item-content nav-item-content-no-icons'>
                    <p>History</p>
                    <p>Our Team</p>
                    <p>Blog</p>
                  </div>
                </div>
                <div class = 'nav-item'>
                  <p>Careers</p>
                </div>
                <div class = 'nav-item'>
                  <p>About</p>
                </div>
              </div>
              <div class = 'nav-btn-wrap'>
                <div class = 'nav-btn nav-btn-login'>
                  <p>Login</p>
                </div>
                <div class = 'nav-btn nav-btn-register'>
                  <p>Register</p>
                </div>
              </div>
            </div>
            <div class = 'menu-icon'>
              <img src={iconMenu} alt = 'icon-menu'/>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div class = "hero-section-wrap">
          <div class = 'hero-image-wrap'>
            <picture>
              <source media='(min-width: 900px)' srcSet= {`${heroImagedesktop}`}/>
              <source media='(max-width: 900px)' srcSet= {`${heroImageMobile}`}/>
              <img src= {`${heroImageMobile}`} alt = 'hero-image'/>
            </picture>
          </div>
          <div class = "hero-text-wrap">
            <div class = 'text-title'>
              Make <br class = 'break'/> remote Work
            </div>
            <div class = 'text-subtitle'>
              <p>Get your team in sync, no matter your location. Streamline processes, create team retuals, and watch productivity soar.</p>
            </div>
            <div class = 'btn-call-to-action-wrap'>
              <div class = 'btn-call-to-action'>
                <p>Learn More</p>
              </div>
            </div>
            <div class = 'social-proof'>
              <img src= {clientDatabiz} alt = 'databiz'/>
              <img src= {clientAudiophile} alt = 'auclientAudiophile'/>
              <img src= {clientMeet} alt = 'meetclientMeet'/>
              <img src= {clientMaker} alt = 'maker'/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App

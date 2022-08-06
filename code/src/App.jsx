import './App.css'
import logo from '../src/images/logo.svg'
// import iconMenu from '../src/images/icon-menu.svg'
// import iconCloseMenu from '../src/images/icon-close-menu.svg'
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
import { useState } from 'react'

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

const iconMenu = () => {
  return(
    <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
      <g fill="#151515" fill-rule="evenodd">
        <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/>
      </g>
    </svg>
  )
}

const iconCloseMenu = () => {
  return(
    <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
      <g fill="#151515" fill-rule="evenodd">
        <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z"/>
        <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z"/>
      </g>
    </svg>

  )
}



function App() {

  const [menuCollapse, setMenuCollapse] = useState(false)

  const [itemCollapse, setItemCollapse] = useState(Array(2).fill(false))

  return (
    <div id="App" class = {menuCollapse? 'app mobile-overlay' : 'app'}>
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
                  <div class = 'nav-item-content  nav-item-content-no-icons'>
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
            <div class = 'menu-icon' 
              style = {{'position' : menuCollapse? 'fixed' : 'absolute'}}
              onClick={() => setMenuCollapse(!menuCollapse)}>
              {menuCollapse? iconCloseMenu() : iconMenu()}
            </div>
            <div class = {menuCollapse? 'nav-menu-mobile nav-menu-mobile-fade-in' :
                                        'nav-menu-mobile'} /* style = 
                    {{'display': menuCollapse? 'flex' : 'none'}} */>
                <div class = 'nav-items-wrap'>
                  <div class = 'nav-item-mobile' >
                    <div class = 'nav-item-header' onClick = {() => setItemCollapse([!itemCollapse[0], itemCollapse[1]])}>
                      <p>Features</p>
                      {itemCollapse[0]? arrowUp() : arrowDown()}
                    </div>
                    <div class = 'nav-item-content-mobile' 
                        style = {{'display' : itemCollapse[0]? 'grid' : 'none'}}>
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
                  <div class = 'nav-item-mobile' >
                    <div class = 'nav-item-header' onClick = {() => setItemCollapse([itemCollapse[0], !itemCollapse[1]])}>
                      <p>Company</p>
                      {itemCollapse[1]? arrowUp() : arrowDown()}
                    </div>
                    <div class = 'nav-item-content-no-icons'
                        style = {{'display' : itemCollapse[1]? 'grid' : 'none'}}>
                      <p>History</p>
                      <p>Our Team</p>
                      <p>Blog</p>
                    </div>
                  </div>
                  <div class = 'nav-item-mobile'>
                    <div class = 'nav-item-header'>
                      <p>Careers</p>
                    </div>
                  </div>
                  <div class = 'nav-item-mobile'>
                    <div class = 'nav-item-header'>
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
              <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
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
        <div style={{'paddingBottom' : '50vh'}} />
      </main>
    </div>
  )
}

export default App

import './App.css'
import logo from '../src/images/logo.svg'
import iconMenu from '../src/images/icon-menu.svg'
import heroImageMobile from '../src/images/image-hero-mobile.png'
import heroImagedesktop from '../src/images/image-hero-desktop.png'
import clientDatabiz from '../src/images/client-databiz.svg'
import clientAudiophile from '../src/images/client-audiophile.svg'
import clientMeet from '../src/images/client-meet.svg'
import clientMaker from '../src/images/client-maker.svg'




function App() {

  return (
    <div className="App">
      <nav>
        <div class = 'nav-wrap'>
          <div class = 'logo'>
            <img src={logo} alt = 'logo'/>
          </div>
          <div class = 'menu-icon'>
            <img src={iconMenu} alt = 'icon-menu'/>
          </div>
        </div>
      </nav>
      <main>
        <div class = "hero-section-wrap">
          <div class = 'hero-image-wrap'>
            <img src= {heroImageMobile} alt = 'hero-image' />
          </div>
          <div class = "hero-text-wrap">
            <div class = 'text-title'>
              Make remote Work
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

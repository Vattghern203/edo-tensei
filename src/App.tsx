import { Hero } from "./components"

import { Header } from "./components/header";

import './assets/styles/global.css'

import { Navigation } from "./components/navigation"

import ContextMenu from "./components/context-menu/ContextMenuRoot";


function App() {

  return (

    <div>

      <Header.Root>

        <Header.Logo
          isImg={true}
          logo={'/vite.svg'}
        />

        <Navigation.Root>
          <Navigation.List>
            <Navigation.Item
            
              txt="sexo"
              url="/google.com"
              external={true}

            />
          </Navigation.List>
        </Navigation.Root>
        
      </Header.Root>

  
      <Hero
        heroImg="/akatsuki-hero.jpg"
        heroPos="center"
        heroSize="cover"
      />

      <ContextMenu>
        <div>Clock</div>
      </ContextMenu>
      
    </div>

  )
}

export default App

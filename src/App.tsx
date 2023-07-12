import { Hero, ContextMenu, Header } from "./components"

import './assets/styles/global.css'

import { Navigation } from "./components/navigation"
import Form from "./components/form"

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

            <Navigation.Item
            
              txt="feijao"
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

      <ContextMenu.Root>

        <ContextMenu.Item
        
          hasAction={false}
          labelText="farra"
        />

        <ContextMenu.Item
        
          hasAction={false}
          labelText="cachaça"

        />

        <ContextMenu.Item
        
          hasAction={false}
          labelText="sexo"

        />

        <ContextMenu.Expand
          isVisible={true}
          expandLabel="share"
        >
          <ContextMenu.Item
            hasAction={false}
            labelText="tuiter"
          />
        </ContextMenu.Expand>

      </ContextMenu.Root>

      <Form.Input
        inputType="textarea"
        placeholder="secsu gratis"
        required={false}
      />
      
    </div>

  )
}

export default App

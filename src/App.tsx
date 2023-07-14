import { Hero, ContextMenu, Header, Navigation } from "./components"

import './assets/styles/global.css'
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

      <Form.Root submitAction="/auth" method="post">

        <Form.Label
          labelText="clique here"
          labelFor="Omario"
        />

        <Form.Input
          name="Omario"
          inputType="email"
          placeholder="gratis"
          required={false}
        />

        

        <Form.Input
          placeholder="oooooo"
          name="radio"
          inputType="number"
        />
      </Form.Root>

      
    </div>

  )
}

export default App

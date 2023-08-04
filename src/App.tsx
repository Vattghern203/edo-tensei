import { Hero, ContextMenu, Header, Navigation, Footer, Form, Loader, Skeleton } from "./components"

import './assets/styles/global.css'

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
            
              txt="torrent"
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
          labelText="pao"

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

        <Form.RadioInput
          name="ping"
          value={10}
        />        

        <Form.Label
          labelText="ping"
          labelFor="radio"
        />
        
        <Form.Input
          placeholder="oooooo"
          name="radio"
          inputType="number"
        />

        <Form.Input
          inputType="color"
          name="color-name"
          placeholder="select a color"
        />

        
      </Form.Root>

    <Footer.Root>

      <Footer.Text
        text={
          'hello'
        }
      />

      <Form.Select value={'papagaio'} name="pog">
        <Form.Option value={'YES'} />
        <Form.Option value={'NO'} />
        <Form.Option value={'MAYBE'} />
        <Form.Option value={'SOMETIME'} />
      </Form.Select>

    </Footer.Root>

    <Loader.Spinner
      color="white"
      size={100}
      isLoading={true}
    />

    <Loader.ThreePoints
      color="magenta"
      size={100}
      isLoading={true}
    />

    <Skeleton.Root animation="shimmer" color="whitesmoke" isLoading={true}>
      <Skeleton.Image
        size={200}
        color="gray"
      />

      <Skeleton.Paragraph 
        color="gray"
      />

      <Skeleton.Box
        height={'10vh'}
        width={'100%'}
        color="gray"
      />

    </Skeleton.Root>
      
    </div>

  )
}

export default App
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './TextBlock'

function App() {

  return (
    <>
      <div>
      <Parallax pages={2} style={{ top: '0', left: '0' }} className='animation'>

      

      <ParallaxLayer offset={0} speed={.40}>
        <div className='animation_layer parallax' id='photo4'></div>
      </ParallaxLayer>

      

      <ParallaxLayer offset={0} speed={5.0}>
        <div className='animation_layer parallax' id='photo5'></div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={1} speed={0.25}>
          <TextBlock/>
      </ParallaxLayer>


    </Parallax>
      </div>
     
      
    </>
  )
}

export default App

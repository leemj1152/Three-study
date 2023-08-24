
import { Canvas } from '@react-three/fiber'
import './App.css'
import Exp from './components/Exp'

function App() {

  return (
    <div className='App'>
      <Canvas>
        <color attach={'background'} args={["#213547"]}/>
        <Exp />
      </Canvas>
    </div>
  )
}

export default App

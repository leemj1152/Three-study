import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <>
      <Canvas shadows camera={{position: [4, 0, -12], fov: 35}}>
        <Experience />
      </Canvas>
    </>
  );
}

export default App;

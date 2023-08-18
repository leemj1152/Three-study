import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Office } from "./Office"

export const Experience = () => {
    
    return (
        <>
        <ambientLight intensity={1} />
            <OrbitControls enableZoom={false}/>
            <ScrollControls damping={0.25} pages={3}>
                <Office />
            </ScrollControls>
        </>
    )
}
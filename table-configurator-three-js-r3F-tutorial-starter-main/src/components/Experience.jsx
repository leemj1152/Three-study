import { OrbitControls, Stage } from "@react-three/drei";

export const Experience = () => {
  return (
    <>
      <Stage
        intensity={1.5}
        environment={"city"}
        shadows={{type: "accumulative", color: "#d9afd9", colorBlend: 2, opacity: 2}}
        adjustCamera={0.9}
      >
        <mesh>
          <meshNormalMaterial />
          <boxBufferGeometry />
        </mesh>
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};

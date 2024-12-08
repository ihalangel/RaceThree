import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Track = () => {
  return (
    <Canvas>
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} intensity={1} />
      
      {/* Pista */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 0.2, 50]} /> {/* Dimensiones de la pista */}
        <meshStandardMaterial color="brown" />
      </mesh>

      {/* Caballos */}
      {Array.from({ length: 8 }, (_, index) => (
        <mesh key={index} position={[-3 + index, 0.3, -20]}>
          <boxGeometry args={[0.5, 0.5, 1]} />
          <meshStandardMaterial color="white" />
        </mesh>
      ))}

      {/* Controles */}
      <OrbitControls />
    </Canvas>
  );
};

export default Track;

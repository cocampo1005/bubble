import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function HeroModel(props) {
  const { nodes, materials } = useGLTF("/models/scifi_hexsphere.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Scene_-_Root"]}
            scale={[2, 2, 2]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/scifi_hexsphere.glb");
import React from "react";
import { useGLTF } from "@react-three/drei";

export function HeroModel(props) {
  const { nodes, materials } = useGLTF("/models/spherical_hex_force_field.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[8307.84, 3486.8, 4515.44]}
            rotation={[Math.PI, 0.78, 2.8]}
          />
          <mesh
            geometry={nodes.Sphere_6_M_0.geometry}
            material={materials.material}
            scale={[0.022, 0.022, 0.022]}
          />
          <mesh
            geometry={nodes.Sphere_6_A_1.geometry}
            material={materials.material_1}
            scale={[0.022, 0.022, 0.022]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/spherical_hex_force_field.glb");
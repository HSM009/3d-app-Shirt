"use client";
import React, { useRef } from "react";
import * as Three from "three";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { Decal, useGLTF, useTexture, Gltf } from "@react-three/drei";
import state from "../store/page";
import { type } from "os";

type GLTFResult = GLTF & {
  nodes: {
    T_Shirt_male: Three.Mesh;
  };
  materials: {
    lambert1: Three.MeshStandardMaterial;
  };
};

function Shirt(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<Three.Group>();
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF(
    "/shirt_baked-transformed.glb"
  ) as GLTFResult;

  const logoTexture = useTexture(snap.logoDecal);
  const fullTexture = useTexture(snap.fullDecal);

  return (
    <group>
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        {snap.isFullTexture && (
          <Decal
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
            scale={1}
            map={fullTexture}
          />
        )}
        {snap.isLogoTexture && (
          <Decal
            position={[0, 0.04, 0.15]}
            rotation={[0, 0, 0]}
            scale={0.15}
            map={logoTexture}
            depthTest={false}
          />
        )}
      </mesh>
    </group>
  );
}

export default Shirt;

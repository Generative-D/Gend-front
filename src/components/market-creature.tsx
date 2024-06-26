import { Suspense, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import tw from "twin.macro";

const CreatureModel = ({
  id,
  onClick,
  scene,
}: {
  id: string;
  onClick: () => void;
  scene: THREE.Group;
}) => {
  useFrame(() => {
    if (scene) {
      scene.rotation.y += 0.005; // Y축을 기준으로 회전
      scene.position.z = -5; // 회전축을 뒤로 이동
    }
  });

  return (
    <group key={id}>
      <primitive
        object={scene}
        onClick={onClick}
        scale={[1.5, 1.5, 1.5]} // 모델 크기 조절
      />
    </group>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const MarketCreature = ({ id, stats }: { id: string; stats: any }) => {
  const { scene } = useGLTF("/models/creature.glb") as {
    scene: THREE.Group;
  };
  const [localScene, setLocalScene] = useState<THREE.Group | null>(null);

  useEffect(() => {
    if (scene) {
      const clonedScene = scene.clone();
      setLocalScene(clonedScene);
    }
  }, [scene]);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <Wrapper>
      <Canvas>
        <Suspense fallback={<div>Loading...</div>}>
          {localScene && (
            <CreatureModel id={id} onClick={handleClick} scene={localScene} />
          )}
          <OrbitControls />
        </Suspense>
      </Canvas>
      <div>
        {Object.entries(stats).map(([key, value]) => (
          <div key={key}>
            <span>{key} : </span>
            <span>
              {typeof value === "number" ? value.toFixed(1) : String(value)}
            </span>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col items-center justify-center relative 
  w-200 h-200
`;

export default MarketCreature;

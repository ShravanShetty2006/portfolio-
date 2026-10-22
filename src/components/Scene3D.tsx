import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Lightformer } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

function Sculpture({ reduced }: { reduced: boolean }) {
  const group = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Mesh>(null);
  useFrame((state, dt) => {
    const k = 1 - Math.exp(-4 * dt); // frame-rate independent damping
    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.7, k);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.45, k);
    }
    if (ring.current && !reduced) ring.current.rotation.z += dt * 0.15;
  });
  return (
    <group ref={group}>
      <Float speed={reduced ? 0 : 1.4} floatIntensity={reduced ? 0 : 0.7} rotationIntensity={reduced ? 0 : 0.3}>
        <mesh>
          <torusKnotGeometry args={[1, 0.3, 160, 24, 2, 3]} />
          <meshPhysicalMaterial color="#d9d9d9" metalness={1} roughness={0.2} clearcoat={0.5} clearcoatRoughness={0.3} />
        </mesh>
        <mesh ref={ring} rotation={[Math.PI / 2.6, 0, 0]}>
          <torusGeometry args={[1.9, 0.012, 8, 120]} />
          <meshBasicMaterial color="#B6FF6C" />
        </mesh>
      </Float>
    </group>
  );
}

export default function Scene3D() {
  const reduced = !!useReducedMotion();
  return (
    <Canvas camera={{ position: [0, 0, 5.2], fov: 40 }} dpr={[1, 1.75]} gl={{ antialias: true, powerPreference: 'high-performance' }}
      eventSource={document.getElementById('root') as HTMLElement} eventPrefix="client" aria-hidden="true">
      <ambientLight intensity={0.25} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} />
      {/* Local light-panel environment: no external HDR download */}
      <Environment resolution={256}>
        <Lightformer form="rect" intensity={3} position={[0, 4, -4]} scale={[10, 2, 1]} />
        <Lightformer form="rect" intensity={1.5} position={[-5, 1, 2]} scale={[2, 6, 1]} />
        <Lightformer form="circle" intensity={2} color="#B6FF6C" position={[5, -2, 1]} scale={2} />
      </Environment>
      <Sculpture reduced={reduced} />
    </Canvas>
  );
}

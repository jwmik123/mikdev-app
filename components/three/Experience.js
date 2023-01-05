import {
  Html,
  ContactShadows,
  Float,
  Environment,
  useGLTF,
} from "@react-three/drei";

export default function Experience({ iframeLink }) {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <color args={["#f0eff1"]} attach="background" />
      <Environment preset="city" />
      <Float rotationIntensity={0.4}>
        <rectAreaLight
          width={2.5}
          height={1.65}
          intensity={65}
          color={"#ff6900"}
          rotation={[-0.1, Math.PI, 0]}
          position={[0, 0.55, -1.15]}
        />

        <primitive object={computer.scene} position-y={-1.2} rotation-y={-1}>
          <Html
            transform
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            position={[-0.05, 1.55, -1.5]}
            rotation-x={-0.256}
          >
            <iframe src={iframeLink} />
          </Html>
        </primitive>
      </Float>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}

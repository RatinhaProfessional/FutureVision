import { Canvas } from "@react-three/fiber";
import Blob from "./blob";

export default function Hero() {
  return (
    <section className="grid grid-cols-3 grid-rows-2 mx-52 mt-40 gap-y-36">
      <p className="text-2xl">
        Redefining Sunglasses,
        <br />
        One Bold Spark at a Time.
      </p>
      <div class="row-span-2 flex justify-center items-center">
        <div className="absolute w-full h-full overflow-visible">
          <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
            <Blob />
          </Canvas>
        </div>
      </div>
      <h1 className="text-5xl uppercase z-10">
        Wear the
        <br />
        future
      </h1>
      <h1 className="text-5xl text-end uppercase z-10">
        Embrace your
        <br />
        essence
      </h1>
      <p className="text-end text-2xl">
        Born of Innovation,
        <br />
        Worn with Confidence.
      </p>
    </section>
  );
}

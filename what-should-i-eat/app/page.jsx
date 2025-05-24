import Image from "next/image"
import { Geo } from "./components/geo";
import { Foods } from "./components/foods";


export default function Page() {

  return (
    <div className="text-center">
      <h1 className="m-5 text-center transform hover:scale-110 duration-500">What Should I Eat?</h1>
      <Foods />
      <Geo />
    </div>
  );
}

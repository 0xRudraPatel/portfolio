import Image from "next/image";
import Under from "../assets/under.svg";
import Cone from "../assets/cone.svg";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
      <div className="flex justify-center items-center md:space-x-32">
      <div className="hidden md:flex justify-center items-center">
        <Image src={Under} alt="Under Construction" width={200} height={200} />
      </div>
      <div className="flex-col space-y-16 md:space-y-0">
      <div className="flex md:hidden justify-center items-center">
        <Image src={Under} alt="Under Construction" width={100} height={100} />
      </div>
      <div className="flex-col space-y-10">
        <h1 className="flex justify-center items-center text-5xl truncate">Rudra's Portfolio</h1>
        <h2 className="flex justify-center items-center text-2xl truncate">Under Construction 🛠</h2>
      </div>
      <div className="flex md:hidden justify-center items-center">
        <Image src={Cone} alt="Under Construction" width={100} height={100} />
      </div>
      </div>
      <div className="hidden md:flex justify-center items-center">
        <Image src={Cone} alt="Under Construction" width={200} height={200} />
      </div>
      </div>
    </div>
  )
}
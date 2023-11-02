import Logo from "../../public/logos/logo_full_transparent.png";
import {useRouter} from "next/navigation";
import Image from "next/image"

const Nav = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center gap-4 z-20 relative bg-transparent">
      <div className="flex justify-center items-center gap-2">
        <Image
          src={Logo}
          alt=""
          height={100}
          width={100}
          style={{ margin: "-20px"}}
        ></Image>
        <h1 className="">
            Gaming Portal
        </h1>
      </div>
        <ul className="list-none flex gap-8 mr-14">
            <li className="">Home</li>
            <li className="opacity-60">Meet The Team</li>
            <li className="opacity-60">Mission Statement</li>
            <li className="opacity-60">Contact</li>
        </ul>
        <button className="bg-indigo-600 bg-opacity-50 border border-indigo-600 border-opacity-50 px-6 py-3 rounded-lg flex justify-center items-center hover:bg-opacity-100 duration-200">
            Enter The Portal{""}
        </button>
    </div>
    );
};

export default Nav;
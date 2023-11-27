import Logo from "../../public/logos/logo_full_transparent.png";
import {useRouter} from "next/navigation";
import Image from "next/image"
import Link from 'next/link'
const Nav = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center gap-4 z-20 relative bg-transparent">
      <div className="flex justify-center items-center gap-2">
      <Link href="/">
        <Image
          src={Logo}
          alt=""
          height={100}
          width={100}
          style={{ margin: "-20px"}}
        ></Image>
          </Link>
        <h1 className="">
            Gaming Portal
        </h1>
      
      </div>
        <ul className="list-none flex gap-8 mr-14">
            <li>
                <Link href="/">Home</Link>
            </li>
            <li >
              <Link href="/team">Meet The Team</Link>
            
            </li>
            <li >
            <Link href="/mission">Mission Statement</Link>
            
            </li>
            <li>  
              <Link href="/contact">Contact</Link>
              
              </li>
        </ul>
        <Link href="/portal">
            <button className="mt-6 justify-center items-center bg-indigo-600 bg-opacity-50 border border-indigo-600 border-opacity-50 px-6 py-3 rounded-lg flex justify-center items-center hover:bg-opacity-100 duration-200">
              Enter the Portal
            </button></Link>
    </div>
    );
};

export default Nav;
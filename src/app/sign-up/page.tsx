import Image from "next/image";
import { SignUpForm } from "../../components/SignUpForm";
import "../globals.css";
import Logo from "../../../public/Aegis_Logo.png";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative flex min-h-screen w-full items-center bg-black justify-center p-6 md:p-10">
      {/* Logo*/}
      <Link href="/" passHref>
        <Image
          src={Logo}
          alt="Aegis-Logo"
          className="absolute top-2 left-2  md:top-4 md:left-4"
          height={180}
          width={180}
          sizes="(max-width: 768px) 60px, 80px" // Responsive sizing
        />
      </Link>
      {/* sign Up form */}
      <div className="w-full max-w-sm ">
        <SignUpForm />
      </div>
    </div>
  );
}

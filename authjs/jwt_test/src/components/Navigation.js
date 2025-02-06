import Link from "next/link";
import Image from "next/image";
import { TbArrowBigRightFilled } from "react-icons/tb";

const Navigation = () => {
  return (
    <div className="sticky top-0 w-full backdrop-blur-xl bg-[rgba(0,0,0,0.8)] border-b border-slate-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-5 px-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/as.png" alt="Family Guy" width={70} height={50} />
        </Link>

        {/* Quiz Button */}
        <Link
          href="/quiz"
          className="flex items-center gap-2 px-5 py-2 font-semibold text-black bg-green-500 rounded-md transition duration-300 hover:bg-green-600"
        >
          <TbArrowBigRightFilled className="text-lg" />
          Take a Quiz
        </Link>
      </div>
    </div>
  );
};

export default Navigation;

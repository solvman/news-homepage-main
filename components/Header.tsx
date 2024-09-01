import Image from "next/image";
import Link from "next/link";

import imageLogo from "@/assets/images/logo.svg";
import DesktopNavigation from "@/components/DesktopNavigation";
import MobileNavigation from "@/components/MobileNavigation";

function Header() {
  return (
    <header className="content-wrapper my-site-clamp-30px-60px flex flex-row items-center justify-between">
      <Link href="#">
        <Image
          src={imageLogo}
          alt="News Logo"
          className="w-site-clamp-45px-66px"
        />
      </Link>
      <DesktopNavigation />
      <MobileNavigation />
    </header>
  );
}
export default Header;

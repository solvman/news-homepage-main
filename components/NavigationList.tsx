import Link from "next/link";

function NavigationList() {
  return (
    <ul className="gap-site-md p-site-md flex flex-col md:flex-row md:gap-11 md:p-0">
      <li>
        <Link href="#" className="transition duration-200 hover:text-accent">
          Home
        </Link>
      </li>
      <li>
        <Link href="#" className="transition duration-200 hover:text-accent">
          New
        </Link>
      </li>
      <li>
        <Link href="#" className="transition duration-200 hover:text-accent">
          Popular
        </Link>
      </li>
      <li>
        <Link href="#" className="transition duration-200 hover:text-accent">
          Trending
        </Link>
      </li>
      <li>
        <Link href="#" className="transition duration-200 hover:text-accent">
          Categories
        </Link>
      </li>
    </ul>
  );
}
export default NavigationList;

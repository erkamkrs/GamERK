import NavLink from "./NavLink.jsx";
import SearchBox from "@/components/SearchBox";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-wrap justify-between items-center gap-2">
        <li className="w-full md:w-auto text-2xl font-bold font-orbitron">
          <NavLink href="/">Home</NavLink>
        </li>
        <li className="w-full md:w-auto text-2xl">
          <NavLink href="/reviews">Reviews</NavLink>
        </li>
        <li className="w-full md:w-auto text-2xl">
          <NavLink href="/about" prefetch={false}>
            About
          </NavLink>
        </li>
        <li className="w-full md:w-auto text-2xl">
          <SearchBox />
        </li>
      </ul>
    </nav>
  );
}
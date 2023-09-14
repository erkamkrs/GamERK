import NavLink from "./NavLink.jsx";

export default function Navbar() {
   return ( 
   <nav>
        <ul className='flex gap-2'>  
            <li className="font-bold- font-orbitron">
                <NavLink href="/">
                Home
                </NavLink>
            </li>
            <li className="ml-auto">
                <NavLink href="/reviews">
                Reviews
                </NavLink>
            </li>
            <li>
                <NavLink href="/about" prefetch={false}>
                About
                </NavLink>
            </li>
        </ul>
    </nav>
   );
}
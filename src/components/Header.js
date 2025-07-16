import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.png";

export const Header = () => {
  const navActive = "px-4 py-2 bg-slate-200 rounded-lg";
  const navInactive = "px-4 py-2"
  return (
    <header className="">
      <div className="flex flex-wrap justify-center p-4 max-w-7xl mx-auto itens-center border-b border-slate-300">
          <Link to="/" className="mr-auto flex gap-2 items-center">
            <img src={logo} alt="Shopping cart logo" className="w-12" />
            <span>Shopping Cart</span>
          </Link>
          <nav className="flex h-auto items-center text-xl order-1 md:order-none">
              <NavLink to="/" className={ ({isActive}) => isActive ? navActive : navInactive }>Home</NavLink>
              <NavLink to="/cart" className={ ({isActive}) => isActive ? navActive : navInactive }>Cart</NavLink>
          </nav>
          <div className="ml-auto flex items-center flex-1 md:flex-none basis-1/3 md:basis-auto justify-end">Cart: <span>2</span></div>
        </div>
    </header>
  )
}

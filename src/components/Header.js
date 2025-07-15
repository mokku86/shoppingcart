import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
export const Header = () => {
  const navActive = "px-4 py-2 bg-slate-200 rounded-lg";
  const navInactive = "px-4 py-2"
  return (
    <header className="">
      <div className="flex p-4 max-w-7xl mx-auto itens-center border-b border-slate-300">
          <div className="mr-auto"><img src={logo} alt="Shopping cart logo" className="w-14" /></div>
          <nav className="flex h-auto items-center text-xl">
              <NavLink to="/" className={ ({isActive}) => isActive ? navActive : navInactive }>Home</NavLink>
              <NavLink to="/cart" className={ ({isActive}) => isActive ? navActive : navInactive }>Cart</NavLink>
          </nav>
          <div className="ml-auto flex items-center">Cart: <span>2</span></div>
        </div>
    </header>
  )
}

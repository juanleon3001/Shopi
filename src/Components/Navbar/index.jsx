import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { NavLink } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import { useContext } from 'react';

const Navbar = () => {
	const activeStyle = 'underline underline-offset-4';
	const context = useContext(ShoppingCartContext);

	return (
		<nav className="flex justify-between item-centers fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
			<ul className="flex items-center gap-3">
				<li className="font-semibold text-lg">
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Shopi
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-3">
				<li className="text-black/60">JuanLeon@gmail.com</li>
				<li>
					<NavLink
						to="/my-orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/my-account"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Sing In"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Sing In
					</NavLink>
				</li>
				<li className="flex items-center">
					<ShoppingCartIcon className="h-6 w-6 text-black"></ShoppingCartIcon>
					<div>{context.cartProducts.length}</div>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;

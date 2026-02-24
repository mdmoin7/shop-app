import { NavLink } from "react-router";
import { PropsWithChildren } from "react";

function Menu({ children }: PropsWithChildren) {
  const baseStyles =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";

  const activeStyles = "bg-blue-600 text-white dark:bg-blue-500";

  const inactiveStyles =
    "text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800";

  return (
    <header
      className="
        fixed top-0 left-0 w-full
        bg-white dark:bg-gray-900
        border-b border-gray-200 dark:border-gray-800
        shadow-sm
        z-50
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-2">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`
                }
              >
                Products
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                to="/checkout"
                className={({ isActive }) =>
                  `${baseStyles} ${isActive ? activeStyles : inactiveStyles}`
                }
              >
                Checkout
              </NavLink>
            </li> */}
          </ul>
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">{children}</div>
      </div>
    </header>
  );
}

export default Menu;

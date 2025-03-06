import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IoIosSearch } from "react-icons/io";
import Logo from "../Images/CompanyLogo.png";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/service" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
  { name: "About Us", href: "/about" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  // Handle Enter key press for search
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/blog?search=${encodeURIComponent(searchQuery)}`);
        setSearchQuery("");
        setSearchVisible(false);
      }
    }
  };

  return (
    <Disclosure as="nav" className="bg-white shadow-sm shadow-gray-500">
      <div className="mx-auto max-w-6xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center px-4 py-1 rounded-md text-xl font-bold">
              <a href="/">
                <img alt="Helix IT Solution" src={Logo} className="h-14 w-auto" />
              </a>
            </div>
            <div className="hidden sm:ml-10 sm:block">
              <div className="flex items-center justify-center space-x-4 h-full">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={location.pathname === item.href ? "page" : undefined} // Check current page
                    className={classNames(
                      location.pathname === item.href ? "text-[#0FCDFF]" : "text-gray-700 hover:text-[#0FCDFF]",
                      "rounded-md px-3 py-2 font-bold"
                    )}
                    style={{ fontSize: "16px" }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Search Button & Input */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-15">
            {searchVisible ? (
              <input
                type="text"
                className="border border-gray-400 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0FCDFF]"
                placeholder="Search Blog..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearchSubmit}
                autoFocus
              />
            ) : (
              <button onClick={() => setSearchVisible(true)}>
                <IoIosSearch size={25} className="text-gray-700 hover:text-[#0FCDFF]" />
              </button>
            )}
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigationItems.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={location.pathname === item.href ? "page" : undefined}
              className={classNames(
                location.pathname === item.href ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

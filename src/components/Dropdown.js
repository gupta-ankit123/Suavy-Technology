import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import { Link } from "react-router-dom";

const Dropdown = ({ name, link, dropdownItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="md:my-0 my-7">
      {dropdownItems ? (
        <div className="relative group">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className="inline-flex justify-center items-center space-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 focus:outline-none"
                onClick={handleToggle}
              >
                {name}
                <ChevronDownIcon
                  className="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute z-10 mt-2 left-0 w-full origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {dropdownItems.map((item) => (
                    <Menu.Item key={item}>
                      {({ active }) => (
                        <Link
                          to={
                            item.toLowerCase() === "careers"
                              ? "/career"
                              : item.toLowerCase() === "newsletter"
                              ? "/newsletter"
                              : item.toLowerCase()
                          }
                          className={clsx(
                            {
                              "bg-gray-100": active,
                              "text-gray-900": active,
                              "text-gray-700": !active,
                            },
                            "block px-4 py-2 text-sm font-semibold"
                          )}
                        >
                          {item}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      ) : (
        <Link
          to={link} // Assuming link is the route path
          className="text-gray-800 hover:text-gray-400 duration-500"
        >
          {name}
        </Link>
      )}
    </li>
  );
};

export default Dropdown;

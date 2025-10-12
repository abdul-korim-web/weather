import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@heroui/react";

export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkmode, setIsDarkmode] = useState(false);

  const menuItems = [
    {
      Icon:`fa-solid fa-address-card`,
      text:`Home`
    },
     {
      Icon:`fa-solid fa-address-book`,
      text:`Contact`
    },
     {
      Icon:`fa-solid fa-address-card`,
      text:`About`
    },
  ];

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkmode(!isDarkmode);
  };

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className=" border-b-2 shadow-2xl  static  ">
      {/* Left Content */}
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex items-center gap-3">
          <img src="image/logo.jpg" className="w-10 h-10" alt="" />
          <div className=" flex flex-col">
            <p className="font-bold text-xl  dark:text-amber-300">Weather</p>
            <p>Your Time</p>
          </div>
          {/* text-xl makes it bigger, dark:text-amber-300 for bright dark mode color */}
        </NavbarBrand>
      </NavbarContent>

      {/* Center Links */}
      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link className="text-lg dark:text-gray-200" color="foreground" href="#">
            <i class="fa-solid fa-house"></i> <span className="ml-2">Home</span>
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-lg dark:text-gray-200" aria-current="page" href="#">
            <i class="fa-solid fa-address-book"></i> <span className="ml-2">Contact</span>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-lg dark:text-gray-200" color="foreground" href="#">
            <i class="fa-solid fa-address-card"></i> <span className="ml-2">About</span>
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Right Content */}
      <NavbarContent justify="end" className="gap-3">
       
        <NavbarItem>
          <Button onClick={toggleDarkMode} color="primary" isIconOnly size="lg">
            {isDarkmode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full text-lg dark:text-gray-200"
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              <i className={item.Icon}></i> <span className="ml-2">{item.text}</span>
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

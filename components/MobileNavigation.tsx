"use client";

import { useEffect, useRef, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";

import NavigationList from "@/components/NavigationList";
import HamburgerIcon from "@/components/HamburgerIcon";

function MobileNavigation() {
  const [isActive, setIsActive] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsActive(false);
      }
    }

    if (isActive) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isActive]);

  function toggleActive() {
    setIsActive((prev) => !prev);
  }

  const HamburgerButton = (
    <button onClick={toggleActive} className="md:hidden">
      <HamburgerIcon />
      <span className="sr-only">Open navigation</span>
    </button>
  );

  const Drawer = (
    <FocusLock returnFocus>
      <RemoveScroll>
        <div className="fixed inset-0">
          <div
            className="animate-fade-in absolute inset-0 bg-primary-foreground opacity-50"
            onClick={toggleActive}
          ></div>
          <div className="animate-slide-in absolute bottom-0 right-0 top-0 w-2/3 bg-primary">
            <button onClick={toggleActive} className="my-8 ml-auto mr-6 block">
              <svg
                width="32"
                height="31"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
              >
                <g fill="#00001A" fillRule="evenodd">
                  <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
                  <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
                </g>
              </svg>
              <span className="sr-only">Close navigation</span>
            </button>
            <nav>
              <NavigationList />
            </nav>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );

  return <div className="md:hidden">{isActive ? Drawer : HamburgerButton}</div>;
}
export default MobileNavigation;

"use client";

import { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import NavigationList from "./NavigationList";
import { RemoveScroll } from "react-remove-scroll";
import FocusLock from "react-focus-lock";

function MobileNavigation() {
  const [isActive, setIsActive] = useState(false);

  function toggleActive() {
    setIsActive((prev) => !prev);
  }

  if (!isActive) {
    return (
      <button onClick={toggleActive} className="md:hidden">
        <HamburgerIcon />
      </button>
    );
  }

  return (
    <FocusLock returnFocus>
      <RemoveScroll>
        <div className="fixed inset-0">
          <div className="absolute inset-0 bg-primary-foreground opacity-25"></div>
          <div className="absolute bottom-0 right-0 top-0 w-2/3 bg-primary">
            <button onClick={toggleActive} className="my-8 ml-auto mr-6 block">
              <svg
                width="32"
                height="31"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
              >
                <g fill="#00001A" fill-rule="evenodd">
                  <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
                  <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
                </g>
              </svg>
              <span className="sr-only">Close navigation</span>
            </button>
            <NavigationList />
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}
export default MobileNavigation;

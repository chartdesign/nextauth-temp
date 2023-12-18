import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      {showSidebar ? (
        <button
          className='flex text-4xl text-black items-center cursor-pointer fixed right-10 top-6 z-50'
          onClick={() => setShowSidebar(!showSidebar)}
        >
          x
        </button>
      ) : (
        <GiHamburgerMenu
          size={30}
          className='flex items-center cursor-pointer right-10 top-6'
          onClick={() => setShowSidebar(!showSidebar)}
        />
      )}

      <div
        className={`top-0 right-0 w-full bg-white  p-10  text-black fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "translate-x-full"
        }`}
      >
        <div className='flex flex-col items-center'>
          <a
            href='#'
            onClick={() => setShowSidebar(!showSidebar)}
            className='text-black hover:text-gray-400'
          >
            Link 1
          </a>
          <a
            href='#'
            onClick={() => setShowSidebar(!showSidebar)}
            className='text-black hover:text-gray-400'
          >
            Link 2
          </a>
          <a
            href='#'
            onClick={() => setShowSidebar(!showSidebar)}
            className='text-black hover:text-gray-400'
          >
            Link 3
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function NavbarComp({ page }) {
  const [isOpen, setIsOpen] = useState(false);
  const homePage = useRef(null);
  const tujuanPage = useRef(null);
  const materiPage = useRef(null);
  const videoPage = useRef(null);
  const pageDetection = (pageRef) => {
    if (pageRef.current !== null) {
      homePage.current.classList.remove("active");
      tujuanPage.current.classList.remove("active");
      materiPage.current.classList.remove("active");
      videoPage.current.classList.remove("active");
      pageRef.current.classList.add("active");
    }
  };
  const lists = [
    {
      index: 1,
      title: "Home",
      ref: homePage,
      links: "/",
    },
    {
      index: 2,
      title: "Tujuan",
      ref: tujuanPage,
      links: "/Tujuan",
    },
    {
      index: 3,
      title: "Materi",
      ref: materiPage,
      links: "/Materi",
    },
    {
      index: 4,
      title: "Video",
      ref: videoPage,
      links: "/Video",
    },
  ];
  useEffect(() => {
    if (page === "home") {
      pageDetection(homePage);
    }
    if (page === "tujuan") {
      pageDetection(tujuanPage);
    }
    if (page === "materi") {
      pageDetection(materiPage);
    }
    if (page === "video") {
      pageDetection(videoPage);
    }
  }, [page]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 flex-row-reverse md:flex-row">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Literasi Keuangan</span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <LayoutGroup>
          <motion.div className={`${isOpen ? null : "fixed -left-[100%] top-[55px]"} w-full md:block md:w-auto md:static`} id="navbar-default">
            <motion.ul
              layout
              className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              {lists.map((l) => {
                return (
                  <>
                    <motion.li
                      key={l.index}
                      layout
                      ref={l.ref}
                      href="#"
                      className="block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                    >
                      <Link to={l.links}>{l.title}</Link>
                    </motion.li>
                  </>
                );
              })}
            </motion.ul>
          </motion.div>
        </LayoutGroup>
      </div>
    </nav>
  );
}

export default NavbarComp;

import { FaAlignJustify } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMailOpenSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoSunny } from "react-icons/io5";
import { BsToggleOn } from "react-icons/bs";
import { BsToggleOff } from "react-icons/bs";
import { toggleDarkMode } from "../utils/darkModeSlice";
const NavBar = () => {
  const [toggle, setToggle] = useState(true);
  const dark = useSelector((state) => state?.darkMode?.isDarkMode);
  const dispatch = useDispatch();
  const handleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <>
      <section
        className={
          dark === false
            ? "fixed w-full  flex justify-between items-center px-12 py-5 bg-[#6C3082] z-50 shadow-md"
            : "fixed w-full  flex justify-between items-center px-12 py-5 bg-[#003153] z-50 shadow-md"
        }
      >
        <p
          className={
            dark === false
              ? " font-caveat text-white text-2xl   lg:text-4xl ml-3 mr-2"
              : " font-caveat text-[#a5b4fc] text-2xl lg:text-4xl ml-3 mr-2"
          }
        >
          <span className="pr-1">Syed</span>
          <span className="pr-1 ">Mohd</span>
          <span className="pr-1">Azam</span>
        </p>
        <ul className="hidden  lg:flex lg:flex-row   lg:gap-x-7">
          {/* <li className="text-white font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md">
            Home
          </li> */}
          <Link to="about">
            <li
              className={
                dark === false
                  ? "text-white font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md italic"
                  : "text-[#a5b4fc] font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md italic"
              }
            >
              About
            </li>
          </Link>
          <Link to="skills">
            <li
              className={
                dark === false
                  ? "text-white font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md italic"
                  : "text-[#a5b4fc] font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md italic"
              }
            >
              Skills
            </li>
          </Link>
          <Link to="projects">
            <li
              className={
                dark === false
                  ? "text-white font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md italic"
                  : "text-[#a5b4fc] font-semibold text-xl hover:cursor-pointer  hover:border-[1px] p-2 hover:rounded-md italic"
              }
            >
              Projects
            </li>
          </Link>
          <Link to="education">
            <li
              className={
                dark === false
                  ? "text-white font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md italic"
                  : "text-[#a5b4fc] font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md italic"
              }
            >
              Education
            </li>
          </Link>
          <Link to="contact">
            <li
              className={
                dark === false
                  ? "text-white font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md italic"
                  : "text-[#a5b4fc] font-semibold text-xl hover:cursor-pointer hover:border-[1px] p-2 hover:rounded-md italic"
              }
            >
              Contact
            </li>
          </Link>
        </ul>
        <section className=" flex flex-row gap-2 sm:gap-4  justify-center items-center ">
          <button
            className={
              dark === false
                ? "text-white font-semibold italic text-xl"
                : "text-[#a5b4fc] font-semibold italic text-xl"
            }
            onClick={handleDarkMode}
          >
            {dark === true ? (
              <BsToggleOn className="w-6 h-6 sm:w-8 sm:h-8 font-bold" />
            ) : (
              <BsToggleOff className="w-6 h-6  sm:w-8 sm:h-8 font-bold " />
            )}
          </button>
          {dark === true ? (
            <MdDarkMode className="w-6 h-6 sm:w-8 sm:h-8  font-bold hover:cursor-pointer text-[#a5b4fc]" />
          ) : (
            <IoSunny className="w-6 h-6 sm:w-8 sm:h-8 text-white font-bold hover:cursor-pointer " />
          )}
        </section>
        <article className="lg:hidden z-10" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <FaAlignJustify
              className={
                dark === false
                  ? "ml-2 w-5 h-5 sm:h-7 sm:w-7 text-white "
                  : "ml-2 w-5 h-5 sm:h-7 sm:w-7 text-[#a5b4fc] "
              }
            />
          ) : (
            <AiOutlineClose
              className={
                dark == false
                  ? "w-5 h-5  sm:h-7 sm:w-7 text-white font-extrabold ml-2"
                  : "w-5 h-5  sm:h-7 sm:w-7 text-[#a5b4fc] font-extrabold ml-2"
              }
            />
          )}
        </article>
        {!toggle && (
          <ul
            className={
              dark === false
                ? "absolute left-0 top-0 bg-[#6a1b8b] w-full h-screen lg:hidden flex flex-col gap-7 font-semibold text-4xl justify-center items-center"
                : "absolute left-0 top-0 bg-[#121212] w-full h-screen lg:hidden flex flex-col gap-7 font-semibold text-4xl justify-center items-center"
            }
          >
            <Link to="about" onClick={() => setToggle(true)}>
              <li
                className={
                  dark === false
                    ? "text-white hover:border-[2px] hover:rounded-lg p-3"
                    : "text-[#a5b4fc] hover:border-[2px] hover:rounded-lg p-3"
                }
              >
                About
              </li>
            </Link>
            <Link to="skills" onClick={() => setToggle(true)}>
              <li
                className={
                  dark === false
                    ? "text-white hover:border-[2px] hover:rounded-lg p-3"
                    : "text-[#a5b4fc] hover:border-[2px] hover:rounded-lg p-3"
                }
              >
                Skills
              </li>
            </Link>
            <Link to="projects" onClick={() => setToggle(true)}>
              <li
                className={
                  dark === false
                    ? "text-white hover:border-[2px] hover:rounded-lg p-3"
                    : "text-[#a5b4fc] hover:border-[2px] hover:rounded-lg p-3"
                }
              >
                Projects
              </li>
            </Link>
            <Link to="education" onClick={() => setToggle(true)}>
              <li
                className={
                  dark === false
                    ? "text-white hover:border-[2px] hover:rounded-lg p-3"
                    : "text-[#a5b4fc] hover:border-[2px] hover:rounded-lg p-3"
                }
              >
                Education
              </li>
            </Link>
            <Link to="contact" onClick={() => setToggle(true)}>
              <li
                className={
                  dark === false
                    ? "text-white hover:border-[2px] hover:rounded-lg p-3"
                    : "text-[#a5b4fc] hover:border-[2px] hover:rounded-lg p-3"
                }
              >
                Contact
              </li>
            </Link>
          </ul>
        )}

        <article className="hidden md:block md:fixed  md:top-[42%] md:left-0">
          <ul className="flex flex-col">
            <li className="mb-1">
              <a
                href="https://www.linkedin.com/in/syed-mohd-azam/"
                rel="noreferrer"
                target="_blank"
                className={
                  dark === false
                    ? "flex flex-row items-center justify-center bg-[#6C3082] p-2 ml-[-92px] hover:ml-[-10px] w-fit"
                    : "flex flex-row items-center justify-center bg-[#a5b4fc] p-2 ml-[-92px] hover:ml-[-10px] w-fit"
                }
              >
                <span className=" text-xl text-white font-semibold pl-2 pr-2">
                  LinkedIn
                </span>{" "}
                <FaLinkedin className="w-6 h-6 text-white" />{" "}
              </a>
            </li>
            <li className="mb-1">
              <a
                href="https://github.com/Syed-Mohd-Azam"
                rel="noreferrer"
                target="_blank"
                className={
                  dark === false
                    ? "flex flex-row  items-center justify-center bg-[#6C3082] p-2 w-fit ml-[-80px] hover:ml-[-10px]"
                    : "flex flex-row  items-center justify-center bg-[#a5b4fc] p-2 w-fit ml-[-80px] hover:ml-[-10px]"
                }
              >
                <span className=" text-xl text-white font-semibold pr-2 pl-2">
                  GitHub
                </span>
                {"  "}
                <FaGithub className="w-6 h-6 text-white" />{" "}
              </a>
            </li>
            <li className="mb-1">
              <a
                href="mailto:smazamamu@gmail.com"
                rel="noreferrer"
                target="_blank"
                className={
                  dark === false
                    ? "flex flex-row  items-center justify-center bg-[#6C3082] p-2 w-fit ml-[-80px] hover:ml-[-10px]"
                    : "flex flex-row  items-center justify-center bg-[#a5b4fc] p-2 w-fit ml-[-80px] hover:ml-[-10px]"
                }
              >
                <span className=" text-xl text-white font-semibold pr-2 pl-2">
                  G-Mail
                </span>
                {"  "}
                <IoMailOpenSharp className="w-6 h-6 ml-1 text-white" />{" "}
              </a>
            </li>
            <li className="mb-1">
              <a
                href="tel:+91-9760217119"
                rel="noreferrer"
                target="_blank"
                className={
                  dark === false
                    ? "flex flex-row  items-center justify-center bg-[#6C3082] p-2 w-fit ml-[-160px] hover:ml-[-10px]"
                    : "flex flex-row  items-center justify-center bg-[#a5b4fc] p-2 w-fit ml-[-160px] hover:ml-[-10px]"
                }
              >
                <span className=" text-xl text-white font-semibold pr-2 pl-2">
                  +91-9760217119
                </span>
                {"  "}
                <FaPhone className="w-6 h-6 ml-1 text-white" />{" "}
              </a>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
};
export default NavBar;

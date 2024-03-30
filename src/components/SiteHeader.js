import React from "react";
import Image from "next/image";
import Link from "next/link";

function SiteHeader() {
  return (
    <div className="w-full h-dvh ">
      
      <svg className="hidden">
        <symbol
          id="moon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
          />
        </symbol>

        <symbol
          id="shoppingCart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </symbol>
        <symbol
          id="loginIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </symbol>
      </svg>
      <div className="w-[90%]  h-24 rounded-3xl bg-black/50 mx-auto  top-8 fixed left-0 right-0 flex justify-between items-center backdrop-blur-[6px]">
        {/* menu and logo */}
        <div className="flex font-dana-medium items-center mr-10">
          <div>
            <Image
              src="/img/app-logo.png"
              width={40}
              height={40}
              className="mx-10 "
              alt="golden cofee"
            />
          </div>
          <div>
            <ul className="flex gap-x-5 text-gray-300 tracking-tight ">
              <li className="  text-orange-200">
                {" "}
                <Link href="#">صفحه اصلی</Link>
              </li>
              <li className="">
                {" "}
                <Link href="#">دیکشنری</Link>
              </li>
              <li className="">
                {" "}
                <Link href="#">فروشگاه</Link>
              </li>
              <li className="">
                {" "}
                <Link href="#">بلاگ</Link>
              </li>
              <li className="">
                {" "}
                <Link href="#">درباره ما</Link>
              </li>
              <li className=" ">
                {" "}
                <Link href="#">تماس با ما</Link>
              </li>
            </ul>
          </div>
        </div>
        {/* login and daylight */}
        <div className="flex justify-center items-center h-[70%] ml-10">
          <div className="flex border-l-2 items-center ml-10 pl-10 ">
            <svg className="w-8 h-8 ml-5 text-orange-200 hover:cursor-pointer">
              <use xlinkHref="#shoppingCart"></use>
            </svg>
            <svg className="w-8 h-8 ml-5 text-orange-200 hover:cursor-pointer">
              <use xlinkHref="#moon"></use>
            </svg>
          </div>
          <div className="font-dana-medium flex items-center">
            <Link href={"#"} className="flex items-center text-orange-200">
              <span className="flex ml-5 items-center">
                <svg className="w-8 h-8 text-orange-200">
                  <use xlinkHref="#loginIcon"></use>
                </svg>
              </span>
              ورود | ثبت نام{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteHeader;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import DarkModeHandler from "./DarkModeHandler";


function SiteHeader() {
  return (
    <div className="w-full h-dvh ">
      <svg className="hidden">
       

        <symbol
          id="shoppingCart"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </symbol>
        <symbol
          id="loginIcon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
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
              priority
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
              <li className="relative transition-all group">
                {" "}
                <Link href="#">فروشگاه</Link>
                <ul className=" absolute w-44 invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-slate-50/40 rounded-xl border-y-2 border-orange-400 flex flex-col items-center justify-center overflow-hidden child:text-black child:h-full child:p-1 child-hover:text-orange-400 dark:bg-slate-600 dark:child-hover:text-white">
                  <li>
                    <Link href="#">قهوه ویژه</Link>
                  </li>
                  <li>
                    <Link href="#">ویژه در سطح جهانی</Link>
                  </li>
                  <li>
                    <Link href="#">قهوه درجه یک</Link>
                  </li>
                  <li>
                    <Link href="#">ترکیبات تجاری</Link>
                  </li>
                  <li>
                    <Link href="#">کپسول قهوه</Link>
                  </li>
                  <li>
                    <Link href="#">قهوه زینو برزیلی</Link>
                  </li>
                </ul>
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
              <use href="#shoppingCart"></use>
            </svg>
           <DarkModeHandler/>
          </div>
          <div className="font-dana-medium flex items-center">
            <Link href={"#"} className="flex items-center text-orange-200">
              <span className="flex ml-5 items-center">
                <svg className="w-8 h-8 text-orange-200">
                  <use href="#loginIcon"></use>
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

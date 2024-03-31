import React from "react";
import Image from "next/image";
import Link from "next/link";
import DarkModeHandler from "./DarkModeHandler";

function SiteHeader() {
  return (
    <div className="w-full h-dvh ">
      {/* ------------------ svgs (svg sprite) --------------------- */}
      <svg className="hidden">
        <symbol
          id="arrowLeft"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </symbol>

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
      {/* -------------- header container ------------------- */}
      <div className="w-[90%]  h-24 rounded-3xl bg-black/50 mx-auto  top-8 fixed left-0 right-0 flex justify-between items-center backdrop-blur-[6px]">
        {/* ------------------menu and logo-------------------- */}
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
                {/* ---------------- sub menu ---------------------- */}
                <ul className="child:font-dana leading-8 child:tracking-normal  absolute w-44 invisible opacity-0 group-hover:visible group-hover:opacity-100  rounded-xl border-y-2 border-orange-400 flex flex-col items-center justify-center overflow-hidden child:h-full child:p-1 child-hover:text-orange-40 bg-white child:text-black child-hover:text-orange-300 child:dark:text-white dark:bg-zinc-700 dark:child-hover:text-orange-300">
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
        {/* ------------------ login and dark mode ---------------- */}
        <div className="flex justify-center items-center h-[70%] ml-10">
          <div className="flex border-l-2 items-center ml-10 pl-10 ">
            {/* ---------------- shopping cart ---------------- */}
            <div className="group relative">
              <svg className="w-8 h-8 ml-5 text-orange-200 hover:cursor-pointer">
                <use href="#shoppingCart"></use>
              </svg>
              <div className="opacity-0 p-7 invisible absolute w-[400px] h-[309px] bg-white dark:bg-zinc-700 dark:text-white left-0 group-hover:visible group-hover:opacity-100 transition-all rounded-2xl border-t-[3px] border-orange-300 shadow-4xl ">
                {/* header */}
                <div className="flex justify-between text-black">
                  <div className="font-dana text-xs text-gray-300">1 مورد</div>
                  <div className=" flex font-dana text-xs text-orange-300">
                    مشاهده سبد خرید{" "}
                    <svg className="w-4 h-4 text-orange-300 font-dana-medium">
                      <use href="#arrowLeft"></use>
                    </svg>
                  </div>
                </div>
                <hr className="text-gray-300 w-full mt-4" />
                {/* body */}
                <div className="flex my-4">
                  <div>
                    <Image src="/img/p1.png" width={140} height={140} />
                  </div>
                  <div className="flex flex-col justify-between ">
                    <div className="font-dana text-base line-clamp-2">
                      قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی
                    </div>
                    <div>
                      <div className="font-dana text-xs text-teal-600 dark:text-emerald-500 tracking-tighter">
                        <span>14,500</span> تومان تخفیف
                      </div>
                      <div className="font-dana">
                        <span className="text-[20px]">175,000</span> تومان
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="text-gray-400 w-full mt-4" />
                {/* footer */}
                <div className="flex justify-between mt-4">
                  <div className="child:font-dana flex flex-col">
                    <span className="text-sm text-gray-400">مبلغ قابل پرداخت</span>
                    <span><span className="text-[20px]">350,000</span> <span className="tracking-tighter">تومان</span></span>
                  </div>
                  <div className="w-36 h-14 bg-teal-600 dark:bg-emerald-500 font-dana text-white rounded-xl flex justify-center items-center">
                    <Link href="#" className=" " >ثبت سفارش</Link>
                  </div>
                </div>
              </div>
            </div>
            <DarkModeHandler />
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

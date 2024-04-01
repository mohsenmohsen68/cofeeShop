"use client";
import React, { useState } from "react";
import Image from "next/image";
import DarkModeHandler from "./DarkModeHandler";

function MobileHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  return (
    <div className="relative">
      <svg className="hidden">
        <symbol
          id="home"
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
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </symbol>
        <symbol
          id="shop"
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
            d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
          />
        </symbol>
        <symbol id="arrowdown" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
</symbol>
<symbol id="info" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
</symbol>
<symbol id="blog" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</symbol>
<symbol id="phone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
</symbol>




      </svg>
      <div className="w-full h-16 bg-white text-black flex items-center px-4 justify-between md:hidden dark:bg-zinc-700 dark:text-white">
        <div>
          <svg className="w-9 h-9" onClick={() => setShowMenu(true)}>
            <use href="#bars"></use>
          </svg>
        </div>
        <div>
          <svg className="w-[138px] h-[55px] ">
            <use href="#logo"></use>
          </svg>
        </div>
        <div>
          <svg className="w-9 h-9" onClick={() => setShowCart(true)}>
            <use href="#shoppingCart"></use>
          </svg>
        </div>
      </div>
      {showMenu && (
        <div className="w-64 h-dvh bg-white dark:bg-zinc-700 absolute top-0 right-0 md:hidden flex flex-col">
          <div className="flex justify-between w-full h-16 px-4 items-center bg-slate-50 dark:bg-zinc-600">
            <svg onClick={() => setShowMenu(false)} className="w-9 h-9">
              <use href="#hidebar"></use>
            </svg>

            <Image
              src="/img/app-logo.png"
              width={40}
              height={40}
              className="h-10"
            />
          </div>
          <div className="flex flex-col space-y-1 child:pr-5 child:my-4 font-dana text-base">
            <div className="flex  items-center text-orange-200 ">
              <svg className="w-5 h-5 ml-2">
                <use href="#home"></use>
              </svg>
              صفحه اصلی
            </div>
            <div className="flex items-center justify-between">
              <div className="flex">
                <svg className="w-5 h-5 ml-2">
                  <use href="#shop"></use>
                </svg>
                فروشگاه
              </div>
              <svg className="w-5 h-5 ">
                <use href="#arrowdown"></use>
              </svg>
            </div>
            <div className="flex flex-col w-full child:pr-9 child:my-1 child:text-sm">
                <div>قهوه ویژه</div>
                <div>ویژه در سطح جهانی</div>
                <div>قهوه درجه یک</div>
                <div>ترکیبات تجاری</div>
                <div>کپسول قهوه</div>
                <div>قهوه زینو برزیلی</div>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 ml-2">
                <use href="#phone"></use>
              </svg>
              تماس با ما
              </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 ml-2">
                <use href="#blog"></use>
              </svg>
            بلاگ
              </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 ml-2">
                <use href="#info"></use>
              </svg>
              درباره ما
            </div>
          </div>
          <hr className="w-full  mt-2"/>
          <div className="flex justify-between px-5 w-full font-dana mt-4 mr-2 text-sm items-center">
            <div className="flex items-center text-orange-200">
                <div>
                ورود | ثبت نام
                </div>
                <span><svg className="w-7 h-7"><use href="#loginIcon"></use></svg></span>
            </div>
            <DarkModeHandler/>
          </div>
        </div>
      )}
      {showCart && (
        <div className="w-64 h-dvh bg-slate-200 absolute top-0 left-0 md:hidden flex flex-col">
          <div>"dkkkf"</div>
          <div>"efghfr"</div>
          <div>"ertyrte"</div>
        </div>
      )}
    </div>
  );
}

export default MobileHeader;

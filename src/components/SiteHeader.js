import React from "react";
import Image from "next/image";
import Link from "next/link";
import DarkModeHandler from "./DarkModeHandler";

function SiteHeader() {
  return (
    <div className="w-full h-dvh ">
      {/* ------------------ svgs (svg sprite) --------------------- */}
      <svg className="hidden">
      <symbol id="bars" xmlns="http://www.w3.org/200symbol" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
</symbol>

<symbol id="logo" width="138" height="55" viewBox="0 0 138 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.97653 1.56084C6.13015 2.7264 3.68246 4.94098 1.70099 9.07875C-2.14539 17.1212 0.710258 25.1636 8.46129 28.0775C11.7249 29.2431 20.4084 29.7676 21.9236 28.7769C22.2733 28.5437 22.6229 26.3292 22.7395 23.5318C22.9726 17.704 22.7395 17.4708 17.3196 17.704C13.4732 17.8788 12.4242 18.753 14.7554 19.802C16.4454 20.5596 17.1448 22.6576 16.6203 24.9305C16.2706 26.2126 15.9792 26.3874 14.6388 26.0378C10.1514 24.9305 8.46129 22.0748 8.46129 15.5477C8.40301 11.7013 8.6944 10.4774 9.80169 8.49597C12.4242 3.83369 7.29571 4.18336 73.4417 4.18336C115.868 4.18336 132.653 4.3582 133.235 4.82443C134.11 5.58205 134.343 18.753 133.468 18.753C133.177 18.753 131.079 16.247 128.806 13.2165L124.668 7.68007H121.172C119.249 7.68007 117.675 7.79663 117.675 7.97146C117.675 8.1463 118.083 8.90392 118.607 9.66154C119.307 10.8271 119.423 12.5172 119.249 18.8695C119.132 23.1238 118.841 27.2033 118.607 27.961C118.141 29.2431 118.2 29.3014 120.356 29.1265L122.629 28.9517L122.804 22.949C122.862 19.6854 123.211 17.0046 123.503 17.0046C123.736 17.0046 125.717 19.6271 127.815 22.8325C131.72 28.8351 132.653 29.5345 136.091 29.1265L137.781 28.9517L137.956 16.7715C138.131 3.0178 137.956 2.37673 134.168 1.32772C132.711 0.919775 112.022 0.686661 72.2179 0.744938C24.0799 0.744938 12.0163 0.919775 9.97653 1.56084Z" fill="#FDBA74"/>
<path d="M33.2296 7.68023C30.5488 8.32129 26.7607 11.0604 25.362 13.4498C24.6627 14.7319 24.2548 16.5385 24.1965 18.7531C24.1382 21.5505 24.4296 22.4247 25.8283 24.2313C27.9846 27.0287 30.3157 28.4856 34.2786 29.3015C40.5144 30.5836 47.4496 28.0194 49.8973 23.532C54.6178 14.965 48.79 6.92261 38.0085 7.15572C36.4932 7.214 34.3369 7.44711 33.2296 7.68023ZM40.8058 11.3518C41.3303 11.7597 42.3211 12.9836 43.0204 14.0909C46.9833 20.618 40.2813 29.4764 34.6866 25.1055C30.5488 21.8419 30.2574 15.6061 34.1038 12.0511C35.8522 10.4193 39.174 10.1279 40.8058 11.3518Z" fill="#FDBA74"/>
<path d="M73.0918 18.2285V29.3597L80.3766 29.1266C88.7687 28.8352 91.5661 27.8444 94.072 24.1729C95.9369 21.3755 96.1118 15.9556 94.4217 13.1583C91.6826 8.67085 87.6031 7.15561 78.6282 7.09733H73.0918V18.2285ZM86.5541 12.5755C88.3607 14.3821 88.5356 14.9066 88.5356 17.8206C88.5356 23.2404 86.6124 25.7464 82.4746 25.7464H80.3766V18.5782C80.3766 14.6152 80.5514 11.1768 80.7845 11.002C81.8336 9.89469 84.6892 10.7106 86.5541 12.5755Z" fill="#FDBA74"/>
<path d="M98.3264 17.4126C98.443 23.1238 98.6178 28.1358 98.7344 28.4855C98.9092 29.0682 101.066 29.2431 106.835 29.2431C114.295 29.2431 114.761 29.1848 115.577 27.9609C116.859 26.096 116.801 24.2894 115.519 24.9305C114.936 25.2219 112.663 25.455 110.39 25.455H106.311V22.5411V19.6271L109.05 19.4523C111.089 19.3357 112.08 18.9278 112.721 17.9953C113.187 17.296 113.595 16.5384 113.595 16.3053C113.595 16.0722 111.964 15.839 109.982 15.7225L106.311 15.5476L106.136 13.4496C105.903 10.4774 106.952 9.7198 110.507 10.5357C112.896 11.0602 113.421 11.0019 114.062 10.186C114.411 9.66153 114.761 8.72907 114.761 8.14629C114.761 7.15555 114.062 7.09727 106.485 7.09727H98.1516L98.3264 17.4126Z" fill="#FDBA74"/>
<path d="M54.0349 17.7039C54.1515 23.4735 54.5012 28.0775 54.8508 28.4855C55.2588 29.01 57.4151 29.2431 61.6694 29.2431C68.2549 29.2431 69.4787 28.8351 70.0032 26.5623C70.2946 25.3384 70.1198 25.2801 66.1569 25.3967L62.0191 25.455V16.5384V7.68006H57.9396H53.8601L54.0349 17.7039Z" fill="#FDBA74"/>
<path d="M5.95519 33.5558C2.92471 35.0127 0.943242 37.2856 0.185623 40.1995C-0.397161 42.4141 0.535293 47.7174 1.8757 49.6989C4.32339 53.3122 10.5592 55.1188 18.0188 54.4777C21.399 54.1281 21.6321 54.0698 22.448 52.0883C22.9142 50.981 23.1473 49.932 23.0308 49.7572C22.8559 49.6406 21.5155 49.932 20.0003 50.4565C16.6201 51.6221 14.3473 51.6221 12.3075 50.5731C8.63599 48.6499 6.82936 45.0366 7.64526 41.3068C8.92738 35.4207 12.5406 33.9055 18.7764 36.528C19.7089 36.9359 19.8254 36.7028 19.6506 34.7213L19.4758 32.4485L14.2307 32.2737C9.685 32.1571 8.57771 32.3319 5.95519 33.5558Z" fill="#FDBA74"/>
<path d="M34.3953 33.0312C28.1012 34.7796 24.4879 39.5584 25.1873 45.328C25.8866 51.5638 31.8893 55.3519 40.3396 54.7108C49.3145 54.128 54.7927 46.4353 51.5874 38.9756C49.3728 33.7306 41.5635 31.0498 34.3953 33.0312ZM42.9039 37.6935C44.8854 39.9664 45.643 43.1134 44.8854 45.969C42.9039 53.3704 34.8032 53.1956 32.5303 45.6194C30.4906 38.8008 38.4747 32.6816 42.9039 37.6935Z" fill="#FDBA74"/>
<path d="M55.2592 32.5651C55.2009 32.8565 55.2592 33.2645 55.3757 33.6141C55.4923 33.9055 55.7254 38.6261 55.9003 44.1043L56.1916 54.0116L59.9797 54.1864L63.8261 54.3613L63.7678 49.5242V44.687L66.7983 44.5122C69.9454 44.3374 71.4606 43.2884 70.8195 41.7731C70.5864 41.1321 69.5957 40.899 66.9732 40.899H63.4764V38.3347C63.4764 35.1877 64.3506 34.7214 68.4884 35.6539C70.9944 36.2367 71.4023 36.1784 72.1017 35.2459C72.5096 34.6632 72.7427 33.8473 72.6844 33.3228C72.5096 32.6234 71.0526 32.4486 63.8844 32.2737C59.1638 32.2155 55.2592 32.332 55.2592 32.5651Z" fill="#FDBA74"/>
<path d="M76.2389 32.5651C76.1806 32.8565 76.2389 33.2645 76.3555 33.6141C76.472 33.9055 76.7052 38.6261 76.88 44.1043L77.1714 54.0116L80.9595 54.1864L84.8059 54.3613L84.7476 49.5242V44.687L87.7781 44.5122C90.9251 44.3374 92.4403 43.2884 91.7993 41.7731C91.5661 41.1321 90.5754 40.899 87.9529 40.899H84.4562V38.3347C84.4562 35.1877 85.3304 34.7214 89.4681 35.6539C91.9741 36.2367 92.382 36.1784 93.0814 35.2459C93.4893 34.6632 93.7225 33.8473 93.6642 33.3228C93.4893 32.6234 92.0324 32.4486 84.8641 32.2737C80.1436 32.2155 76.2389 32.332 76.2389 32.5651Z" fill="#FDBA74"/>
<path d="M97.2191 32.565C97.1608 32.8564 97.2191 33.2643 97.2774 33.614C97.3939 33.9054 97.3939 38.3928 97.3939 43.4631C97.3356 49.4075 97.5688 53.079 97.9767 53.5452C98.4429 54.128 100.658 54.3029 106.369 54.3029H114.178L115.169 52.2631C116.393 49.7571 115.985 49.2909 113.595 50.5148C112.43 51.0975 110.74 51.3889 108.758 51.2724L105.728 51.0975L105.553 47.7174L105.378 44.3955H108.234C111.206 44.3955 112.43 43.6962 112.43 41.9478C112.43 41.0737 111.905 40.8988 108.875 40.8988H105.378L105.553 38.1015C105.728 35.071 106.077 34.8961 110.798 35.8286C112.663 36.2365 113.071 36.12 113.595 35.071C114.994 32.4485 114.236 32.1571 105.436 32.1571C100.949 32.1571 97.2191 32.3319 97.2191 32.565Z" fill="#FDBA74"/>
<path d="M119.307 41.8896C119.365 47.3094 119.598 52.2631 119.715 52.9625C120.006 54.3029 120.181 54.3029 128.223 54.3029H136.382L137.256 52.2631C138.364 49.524 138.364 49.524 135.974 50.5148C133.41 51.5638 128.515 51.6803 127.757 50.6313C127.466 50.2816 127.291 48.9995 127.349 47.8922C127.407 46.7849 127.524 45.5028 127.524 45.0949C127.582 44.6286 128.573 44.3955 130.438 44.3955C133.41 44.3955 134.984 43.3465 134.401 41.8313C134.168 41.2485 133.002 40.8988 130.671 40.7823L127.291 40.6074L127.116 38.5094C126.883 35.4789 127.932 34.7796 131.72 35.5955C134.401 36.1783 134.809 36.12 135.508 35.2458C135.974 34.663 136.266 33.7889 136.149 33.3226C136.033 32.6233 134.517 32.4485 127.582 32.2736L119.132 32.0988L119.307 41.8896Z" fill="#FDBA74"/>
</symbol>

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
      <div className="w-[90%]  h-24 rounded-3xl bg-black/50 mx-auto  top-8 fixed left-0 right-0 md:flex justify-between items-center backdrop-blur-[6px] hidden ">
        {/* ------------------menu and logo-------------------- */}
        <div className="flex font-dana-medium items-center mr-2 xl:mr-4 lg:mr-10">
          <div>
            <Image
              src="/img/app-logo.png"
              width={40}
              height={40}
              className="mx-2 xl:mx-4 lg:mx-10 "
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
        <div className="flex justify-center items-center h-[70%] xl:ml-10 ml-4">
          <div className="flex border-l-2 items-center xl:ml-10 xl:pl-10 ml-4 pl-4 ">
            {/* ---------------- shopping cart ---------------- */}
            <div className="group relative">
              <svg className="w-8 h-8 ml-2 xl:ml-5 text-orange-200 hover:cursor-pointer">
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
                    <span className="text-sm text-gray-400">
                      مبلغ قابل پرداخت
                    </span>
                    <span>
                      <span className="text-[20px]">350,000</span>{" "}
                      <span className="tracking-tighter">تومان</span>
                    </span>
                  </div>
                  <div className="w-36 h-14 bg-teal-600 dark:bg-emerald-500 font-dana text-white rounded-xl flex justify-center items-center">
                    <Link href="#" className=" ">
                      ثبت سفارش
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <DarkModeHandler />
          </div>
          <div className="font-dana-medium flex items-center">
            <Link href={"#"} className="flex items-center text-orange-200">
              <span className="flex ml-2 xl:ml-5 items-center">
                <svg className="w-8 h-8 text-orange-200">
                  <use href="#loginIcon"></use>
                </svg>
              </span>
              <span className="hidden xl:inline-block"> ورود | ثبت نام</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full h-16 bg-white text-black flex items-center px-4 justify-between md:hidden dark:bg-zinc-700 dark:text-white">
<div><svg className="w-9 h-9"><use href="#bars"></use></svg></div>
<div><svg className="w-[138px] h-[55px] "><use href="#logo"></use></svg></div>
<div><svg className="w-9 h-9"><use href="#shoppingCart"></use></svg></div>
      </div>
    </div>
  );
}

export default SiteHeader;

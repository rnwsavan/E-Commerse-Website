import React from 'react';

function Header(props) {
    return (
        <header id="sticky-header" className="fixed inset-x-0 top-0 w-full z-20">
            <div className="px-4 md:px-10 2xl:px-24 py-6 lg:py-0">
                <div className="flex items-center lg:relative">
                    <div className="w-6/12 lg:w-2/12">
                        <div className="logo"><a href="index.html"><img src="assets/images/logo/logo.webp" alt="logo" loading="lazy" width={125} height={45} /></a></div>
                    </div>
                    <div className="hidden lg:flex flex-1 xl:relative">
                        <nav className="main-menu">
                            <ul className="flex flex-wrap">
                                <li className="main-menu__item relative group">
                                    <a className="block py-10 xl:pr-6 md:pr-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="https://htmldemo.net/">Home</a>
                                    <ul className="submenu bg-white py-3 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10 min-w-max">
                                        <li className="my-3"><a className="text-dark font-normal text-base capitalize transition-all hover:text-orange" href="index.html">Airpod</a></li>
                                    </ul>
                                </li>
                                <li className="main-menu__item group">
                                    <a className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="#">Shop</a>
                                    <ul className="mega-menu flex flex-wrap bg-white py-5 px-8 shadow transition-all absolute left-0 top-full opacity-0 group-hover:opacity-100 invisible group-hover:visible group-hover:-translate-y-3 transform z-10">
                                        <li className="flex-auto px-4">
                                            <a className="font-normal text-base capitalize text-dark pb-5 border-b block border-solid border-gray-600 mb-6 tracking-wide transition-all hover:text-orange" href="shop-list.html">shop list</a>
                                            <ul className="pb-2">
                                                <li className="my-3"><a className="font-normal text-base capitalize text-dark tracking-wide block hover:text-orange transition-all" href="shop-list.html">Shop List</a></li>
                                            </ul>
                                        </li>
                                        <li className="overflow-hidden flex-auto mx-4"><a href="#"><img className="transform hover:scale-105 transition-all w-full" src="assets/images/mega-menu/megamenu.webp" alt="Smartwatch" loading="lazy" width={1000} height={120} /></a></li>
                                    </ul>
                                </li>
                                <li className="main-menu__item relative group"><a className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="blog.html">Blog</a>
                                </li>
                                <li className="main-menu__item relative group"><a className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="about-us.html">About-Us</a>
                                </li>
                                <li className="main-menu__item"><a className="block py-10 xl:px-6 md:px-5 capitalize font-normal text-md text-primary hover:text-orange transition-all" href="contact-us.html">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="w-6/12 lg:w-3/12">
                        <ul className="flex items-center justify-end">
                            <li className="ml-6 hidden lg:block">
                                <button className="search-toggle text-right text-primary text-md hover:text-orange transition-all" aria-label="icon-settings">
                                    <i className="icon-magnifier" />
                                </button>
                            </li>
                            <li className="ml-6">
                                <a href="#offcanvas-cart" className="text-primary text-md hover:text-orange transition-all relative offcanvas-toggle">
                                    <span className="w-5 h-5 bg-dark text-white text-sm rounded-full font-normal flex flex-wrap items-center justify-center absolute -top-3 left-2 leading-none">4</span>
                                    <i className="icon-bag" />
                                    <span className="text-base leading-none text-dark">$245</span>
                                </a>
                            </li>
                            <li id="toggle-menu" className="ml-6 hidden lg:block relative">
                                <button className="text-primary text-md hover:text-orange transition-all toggle-menu" aria-label="icon-settings">
                                    <i className="icon-settings" />
                                </button>
                                <div id="settings-card" className="bg-white absolute right-0 px-8 py-5 shadow w-80 opacity-0 invisible transition-all duration-300 ease-in-out z-20">
                                    <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">Currency</h4>
                                    <ul>
                                        <li className="my-4"><a href="#" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">USD - US Dollar</a></li>
                                        <li className="my-4"><a href="#" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">EUR - Euro</a></li>
                                        <li className="my-4"><a href="#" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">GBP - British Pound</a></li>
                                    </ul>
                                    <h4 className="text-md text-dark font-normal capitalize tracking-wide pb-5 border-b border-solid border-gray-600 mb-5">Account</h4>
                                    <ul>
                                        <li className="my-4"><a href="login-register.html" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">Login</a></li>
                                        <li className="mt-4"><a href="account.html" className="text-base text-dark hover:text-orange transition-all font-light capitalize tracking-wide">Create Account</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="ml-6 lg:hidden">
                                <a href="#offcanvas-mobile-menu" className="offcanvas-toggle text-primary text-md hover:text-orange transition-all"><i className="icon-menu" /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;
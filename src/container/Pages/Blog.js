import React from 'react';

function Blog(props) {
    return (
       <main>
            <div>
            <div className="search-form fixed top-0 left-0 w-full bg-black opacity-95 min-h-screen items-center justify-center py-8 px-10 transform  transition-transform translate-x-full ease-in-out duration-500 hidden lg:flex z-50">
                <button className="search-close absolute left-1/2 text-white text-xl top-12 translate-y-1/2" aria-label="close icon"><span className="icon-close" /></button>
                <form className="relative xl:w-1/3 lg:w-1/2" action="#" method="get">
                    <input className="text-md font-normal border-b border-solid border-gray-600 bg-transparent h-14 w-full focus:outline-none pr-14 text-white" type="search" name="search" placeholder="Search our store" />
                    <button className="absolute right-0 top-3 text-white text-md font-normal" type="submit" aria-label="submit button"><i className="icon-magnifier" /></button>
                </form>
            </div>
            {/* offcanvas-overlay start */}
            <div className="offcanvas-overlay hidden fixed inset-0 bg-black opacity-50 z-50" />
            {/* offcanvas-overlay end */}
            {/* offcanvas-mobile-menu start */}
            <div id="offcanvas-mobile-menu" className="offcanvas left-auto right-0  transform translate-x-translate-x-full-120 fixed font-normal text-sm top-0 z-50 h-screen w-72 sm:w-80 lg:w-96 transition-all ease-in-out duration-300 bg-white">
                <div className="px-8 py-12 h-5/6 overflow-y-auto">
                    {/* search form start */}
                    <form className="pb-10 mb-10 border-b border-solid border-gray-600" action="#" method="get">
                        <div className="relative">
                            <input className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-gray-light text-dark placeholder-current focus:outline-none" type="search" name="search" placeholder="Search our store" />
                            <button className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-600" type="submit" aria-label="button"><i className="icon-magnifier" /></button>
                        </div>
                    </form>
                    {/* search form end */}
                    {/* close button start */}
                    <button className="offcanvas-close bg-dark group transition-all hover:text-orange text-white w-10 h-10 flex items-center justify-center absolute -left-10 top-0" aria-label="offcanvas"><i className="icon-close transition-all transform group-hover:rotate-90" /></button>
                    {/* close button end */}
                    {/* offcanvas-menu start */}
                    <nav className="offcanvas-menu pb-10 mb-10 border-b border-solid border-gray-600">
                        <ul>
                            <li className="relative block">
                                <a href="#" className="block capitalize font-normal text-base my-2 py-1 font-roboto">Home</a>
                                <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                                    <li><a className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange" href="index.html">Airpod</a></li>
                                </ul>
                            </li>
                            <li className="relative block">
                                <a href="#" className="block capitalize font-normal text-base my-2 py-1 font-roboto">Shop</a>
                                <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                                    <li>
                                        <a className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange" href="#">shop list</a>
                                        <ul className="offcanvas-submenu static top-auto hidden w-full visible opacity-100">
                                            <li><a className="text-sm pt-3 px-10 pb-1 text-dark font-light block font-roboto transition-all hover:text-orange" href="shop-list.html">Shop List</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a className="text-sm py-2 px-4 text-dark font-light block font-roboto transition-all hover:text-orange" href="blog.html">blogs</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="relative block">
                                <a href="blog.html" className="block capitalize font-normal text-base my-2 py-1 font-roboto">Blog</a>
                            </li>
                            <li className="relative block"><a href="about-us.html" className="relative block capitalize font-normal text-base my-2 py-1 font-roboto">about Us</a></li>
                            <li className="relative block"><a href="contact.html" className="relative block capitalize font-normal text-base my-2 py-1 font-roboto">Contact Us</a></li>
                        </ul>
                    </nav>
                    {/* offcanvas-menu end */}
                    <nav>
                        <ul id="settings-menu">
                            <li className="block mb-3">
                                <a className="flex flex-wrap justify-between mb-3 text-base text-dark hover:text-orange" href="javascript:void(0)">Currency <i className="icon-arrow-down" /></a>
                                <ul className="sub-category hidden py-5 px-6 shadow">
                                    <li className="my-2 block"><a className="font-light text-sm tracking-wide text-dark block hover:text-orange" href="#">EUR €</a></li>
                                    <li className="my-2 block"><a className="font-light text-sm tracking-wide text-dark block hover:text-orange" href="#">USD $</a></li>
                                </ul>
                            </li>
                            <li className="block mb-3">
                                <a className="flex flex-wrap justify-between mb-3 text-base text-dark hover:text-orange" href="javascript:void(0)">Account <i className="icon-arrow-down" /></a>
                                <ul className="sub-category hidden py-5 px-6 shadow">
                                    <li className="my-2 block"><a className="font-light text-sm tracking-wide text-dark block hover:text-orange" href="#">English</a></li>
                                    <li className="my-2 block"><a className="font-light text-sm tracking-wide text-dark block hover:text-orange" href="#">Français</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* offcanvas-mobile-menu end */}
            {/* offcanvas-mobile-menu start */}
            <div id="offcanvas-cart" className="offcanvas left-auto right-0  transform translate-x-translate-x-full-120 fixed font-normal text-sm top-0 z-50 h-screen w-80 lg:w-96 transition-all ease-in-out duration-300 bg-white overflow-y-auto">
                <div className="p-8">
                    <div className="flex flex-wrap justify-between items-center pb-6 mb-6 border-b border-solid border-gray-600">
                        <h4 className="font-normal text-md text-dark capitalize">Shoping Cart</h4>
                        <button className="offcanvas-close hover:text-orange" aria-label="close icon"><i className="icon-close" /></button>
                    </div>
                    <ul className="h-96 overflow-y-auto">
                        <li className="flex flex-wrap group mb-8">
                            <div className="mr-5 relative">
                                <a href="#"><img src="assets/images/cart/product1.webp" alt="product image" loading="lazy" width={90} height={100} /></a>
                                <button className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange"><i className="icon-close" /></button>
                            </div>
                            <div className="flex-1">
                                <h4>
                                    <a className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide" href="#">Birpod product unsde - m / gold</a>
                                </h4>
                                <span className="font-light text-sm text-dark transition-all tracking-wide">1 x <span>$80.00</span></span>
                            </div>
                        </li>
                        <li className="flex flex-wrap group mb-8">
                            <div className="mr-5 relative">
                                <a href="https://htmldemo.net/#"><img src="assets/images/cart/product2.webp" alt="product image" loading="lazy" width={90} height={100} /></a>
                                <button className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange"><i className="icon-close" /></button>
                            </div>
                            <div className="flex-1">
                                <h4>
                                    <a className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide" href="https://htmldemo.net/#">Airpod product kiebd - red</a>
                                </h4>
                                <span className="font-light text-sm text-dark transition-all tracking-wide">1 x <span>$99.00</span></span>
                            </div>
                        </li>
                        <li className="flex flex-wrap group mb-8">
                            <div className="mr-5 relative">
                                <a href="#"><img src="assets/images/cart/product3.webp" alt="product image" loading="lazy" width={90} height={100} /></a>
                                <button className="absolute top-3 left-3 opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all hover:text-orange"><i className="icon-close" /></button>
                            </div>
                            <div className="flex-1">
                                <h4>
                                    <a className="font-light text-sm md:text-base text-dark hover:text-orange transition-all tracking-wide" href="#">Airpod product ides - navy</a>
                                </h4>
                                <span className="font-light text-sm text-dark transition-all tracking-wide">1 x <span>$39.00</span></span>
                            </div>
                        </li>
                    </ul>
                    <div>
                        <div className="flex flex-wrap justify-between items-center py-4 my-6 border-t border-b border-solid border-gray-600 font-normal text-base text-dark capitalize">Total:<span>$218.00</span>
                        </div>
                        <div className="text-center">
                            <a className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none" href="checkout.html">Checkout</a><a className="py-5 px-10 block bg-white border border-solid border-gray-600 uppercase font-semibold text-base hover:bg-orange hover:border-orange hover:text-white transition-all leading-none mt-3" href="cart.html">View Cart</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* offcanvas-mobile-menu end */}
            {/* Header end */}
            {/* blog grid section start */}
            <div className="py-24">
                <div className="container">
                    <div className="flex flex-wrap flex-col lg:flex-row -mx-4">
                        <div className="lg:w-1/4 px-4 order-last lg:order-first mt-8 lg:mt-0">
                            <div>
                                <div className="mb-12">
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize mb-6">Search</h4>
                                    <div className="pro-sidebar-search mb-50 mt-25">
                                        <form className="border border-solid border-gray-300" action="#" method="get">
                                            <div className="relative">
                                                <input className="w-full h-12 text-sm py-4 pl-4 pr-16 bg-white text-dark placeholder-current focus:outline-none" type="search" name="search" placeholder="Search our store" />
                                                <button className="w-12 h-full absolute top-0 right-0 flex items-center justify-center text-dark text-md border-l border-solid border-gray-300" type="submit"><i className="icon-magnifier" /></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="mb-12">
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize mb-5">Custom Menu</h4>
                                    <ul>
                                        <li className="mb-4"><a href="#" className="text-sm transition-all hover:text-orange">Best Value</a></li>
                                        <li className="mb-4"><a href="#" className="text-sm transition-all hover:text-orange">Your Order</a></li>
                                        <li className="mb-4"><a href="#" className="text-sm transition-all hover:text-orange">Terms &amp; Condition</a></li>
                                        <li className="mb-4"><a href="#" className="text-sm transition-all hover:text-orange">Contact us</a></li>
                                        <li className="mb-4"><a href="#" className="text-sm transition-all hover:text-orange">Manufactureres</a></li>
                                    </ul>
                                </div>
                                <div className="mb-12">
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize mb-8">Recent Post</h4>
                                    <div className="sidebar-project-wrap mt-30">
                                        <div className="flex flex-wrap pb-5 mb-5 border-b border-solid border-gray-300">
                                            <div className="w-20 mr-5 relative">
                                                <a href="#" className="block absolute top-0 left-0 h-full">
                                                    <img className="object-cover w-full h-full" loading="lazy" width={240} height={114} src="assets/images/blog/sm/blog1.webp" alt="blog image" /></a>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-sm">Apr 21, 2021</span>
                                                <h4><a className="transition-all hover:text-orange text-sm" href="#">Sarbi at ligula porta</a></h4>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap pb-5 mb-5 border-b border-solid border-gray-300">
                                            <div className="w-20 mr-5 relative">
                                                <a href="#" className="block absolute top-0 left-0 h-full">
                                                    <img className="object-cover w-full h-full" loading="lazy" width={240} height={114} src="assets/images/blog/sm/blog2.webp" alt="blog image" /></a>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-sm">Apr 21, 2021</span>
                                                <h4><a className="transition-all hover:text-orange text-sm" href="#">Donec tellus Nulla lorem</a></h4>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap">
                                            <div className="w-20 mr-5 relative">
                                                <a href="#" className="block absolute top-0 left-0 h-full">
                                                    <img className="object-cover w-full h-full" loading="lazy" width={240} height={114} src="assets/images/blog/sm/blog3.webp" alt="blog image" /></a>
                                            </div>
                                            <div className="flex-1">
                                                <span className="text-sm">Apr 20, 2021</span>
                                                <h4><a className="transition-all hover:text-orange text-sm" href="#">Norbi at omgula qorta</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12">
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize">Archive</h4>
                                    <span className="font-medium text-base text-dark capitalize my-4 block"> April 2021</span>
                                    <ul>
                                        <li className="mb-4"><a className="text-sm transition-all hover:text-orange" href="#"><i className="icofont-rounded-right" /> Sarbi at ligula porta</a></li>
                                        <li className="mb-4"><a className="text-sm transition-all hover:text-orange" href="#"><i className="icofont-rounded-right" /> Donec tellus Nulla lorem</a></li>
                                        <li className="mb-4"><a className="text-sm transition-all hover:text-orange" href="#"><i className="icofont-rounded-right" /> Norbi at omgula qorta</a></li>
                                        <li className="mb-4"><a className="text-sm transition-all hover:text-orange" href="#"><i className="icofont-rounded-right" /> Mithout wery warkness</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-lg xl:text-3xl text-dark capitalize mb-10">Tags</h4>
                                    <ul className="flex flex-wrap -m-1">
                                        <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">backpack</a></li>
                                        <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">Dron</a></li>
                                        <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">drone</a></li>
                                        <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">headphone</a></li>
                                        <li className="m-1"><a href="#" className="bg-gray-light leading-none py-3 px-5 block text-sm transition-all hover:text-white hover:bg-orange">news</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 px-4">
                            <div className="blog-details-wrapper">
                                <div className="mb-8">
                                    <img src="assets/images/blog/lg/blog1.webp" loading="lazy" width={850} height={402} alt="image" className="mb-8 w-full h-full" />
                                    <h3 className="mb-4 font-medium text-lg">Sarbi at ligula porta</h3>
                                    <ul className="flex flex-wrap text-gray-500 text-sm">
                                        <li>21 April, 2021</li>
                                        <li><span className="inline-block mx-2">\</span></li>
                                        <li>HasThemes</li>
                                    </ul>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprhendit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident, sunt in culpa qei officia deser mollit anim id est laborum.
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                    veritatis et
                                </p>
                                <blockquote className="my-6 ml-12 relative before:absolute before:top-0 before:-left-5 before:w-1 before:h-full before:empty before:bg-orange">
                                    Es un hecho establecido hace demasiado tiempo que un lector se distraerá con
                                    el contenido del texto de un sitio mientras que mira su diseño.
                                </blockquote>
                                <p className="mb-8">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehendrit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                </p>
                                <div className="flex flex-wrap justify-between mb-8">
                                    <ul className="flex flex-wrap">
                                        <li className="mr-2"><a href="#" className="hover:text-orange">backpack</a>,</li>
                                        <li><a href="#" className="hover:text-orange">drone</a></li>
                                    </ul>
                                    <div className="flex flex-wrap items-center">
                                        <span className="mr-4">Share:</span>
                                        <div className="share-social">
                                            <ul className="flex flex-wrap">
                                                <li className="mx-2 leading-none">
                                                    <a className="text-lg transition-all hover:text-orange" href="#">
                                                        <i className="icon-social-facebook" />
                                                    </a>
                                                </li>
                                                <li className="mx-2 leading-none">
                                                    <a className="text-lg transition-all hover:text-orange" href="#">
                                                        <i className="icon-social-twitter" />
                                                    </a>
                                                </li>
                                                <li className="mx-2 leading-none">
                                                    <a className="text-lg transition-all hover:text-orange" href="#">
                                                        <i className="icon-social-pinterest" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-12 py-5 border-t border-b border-solid border-gray-300">
                                    <a href="#" className="font-medium capitalize text-sm transition-all hover:text-orange"> <i className="icofont-rounded-left" /> Older Post</a>
                                </div>
                                <div>
                                    <h4 className="mb-8 font-medium text-lg uppercase">Leave a comment</h4>
                                    <form method="post" action="#">
                                        <div className="grid grid-cols-2 gap-x-4">
                                            <div className="leave-form col-span-2 sm:col-span-1">
                                                <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" name="name" placeholder="Name" />
                                            </div>
                                            <div className="leave-form col-span-2 sm:col-span-1">
                                                <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-12 focus:outline-none text-base" type="email" name="email" placeholder="Email" />
                                            </div>
                                            <div className="text-leave col-span-2">
                                                <textarea className="border border-solid border-gray-300 w-full py-1 px-5 mb-8 placeholder-current text-dark h-60 focus:outline-none text-base resize-none" placeholder="Message" defaultValue={""} />
                                                <button type="submit" className="leading-none uppercase text-white text-sm bg-orange px-5 py-5 transition-all hover:bg-dark">Post comment</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog grid section end */}
        </div>
       </main>

    );
}

export default Blog;
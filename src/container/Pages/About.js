import React from 'react';

function About(props) {
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
            {/* about us section start */}
            <div className="py-20 bg-white">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5">
                        <div className="flex flex-wrap items-center mb-10 lg:mb-0">
                            <img src="assets/images/drone/drone4.webp" alt="images" />
                        </div>
                        <div>
                            <div className="mb-10">
                                <h3 className="font-bold uppercase text-3xl md:text-4xl mb-5 text-dark">WELCOME TO <span className="text-orange">Sinp</span></h3>
                                <p>Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a complete.</p>
                            </div>
                            <div className="mb-10">
                                <h4 className="font-semibold uppercase text-md mb-4 text-dark">WE START AT 2022</h4>
                                <p>Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born nsidae.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold uppercase text-md mb-4 text-dark">WIN BEST ONLINE SHOP AT 2022</h4>
                                <p>Parlo provide how all this mistaken idea of denouncing pleasure and sing pain was born an will give you a solution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* about us section end */}
            {/* testimonial section start */}
            <div className="testimonial-area bg-gray-light py-24 bg-no-repeat bg-cover bg-center group" style={{ backgroundImage: 'url("assets/images/hero/slide5.webp")' }}>
                <div className="container">
                    <div className="grid grid-cols-12 gap-x-4">
                        <div className="col-span-12">
                            <div className="text-center pb-14">
                                <h2 className="font-playfair font-bold text-orange text-3xl sm:text-4xl xl:text-5xl mb-5">What Client Says</h2>
                                <p className="font-playfair font-medium text-md mb-3">Contrary to popular belief, Lorem Ipsum is not.</p>
                            </div>
                        </div>
                        <div className="lg:col-start-3 col-span-12 lg:col-span-8 text-center">
                            <div className="testimonial overflow-hidden relative">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                                                <img src="assets/images/testimonial/testimonial1.webp" alt="image" />
                                            </div>
                                            <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.</p>
                                            <h5 className="font-semibold text-sm text-dark uppercase">Hester Perkins</h5>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
                                                <img src="assets/images/testimonial/testimonial1.webp" alt="image" />
                                            </div>
                                            <p className="my-8">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit.</p>
                                            <h5 className="font-semibold text-sm text-dark uppercase">Hester Perkins</h5>
                                        </div>
                                    </div>
                                </div>
                                {/* Add Pagination */}
                                {/* <div class="swiper-pagination"></div> */}
                                {/* swiper navigation */}
                                <div className="swiper-buttons">
                                    <div className="swiper-button-prev right-auto left-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark group-hover:opacity-100 transition-all hover:text-orange hover:border-orange opacity-0 invisible group-hover:visible" />
                                    <div className="swiper-button-next left-auto right-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark group-hover:opacity-100 transition-all hover:text-orange hover:border-orange opacity-0 invisible group-hover:visible" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* testimonial section end */}
            {/* team carousel start */}
            <div className="py-20">
                <div className="container">
                    <div className="grid gap-x-4 grid-cols-12">
                        <div className="col-span-12">
                            <div className="text-center pb-14">
                                <h2 className="font-playfair font-bold text-orange text-3xl sm:text-4xl xl:text-5xl mb-5">Team Members</h2>
                                <p className="font-playfair font-medium text-md mb-3">Contrary to popular belief, Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="relative -m-4">
                                <div className="team-carousel overflow-hidden p-4">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="bg-gray-light group">
                                                    <div className="relative">
                                                        <a href="#" className="block"><img className="w-full h-full" src="assets/images/team/team1.webp" alt="team image" loading="lazy" width={270} height={330} /></a>
                                                        <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"><i className="icon-social-facebook" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"><i className="icon-social-twitter" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"><i className="icon-social-instagram" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="py-5 px-3 text-center">
                                                        <h4 className="font-medium text-dark text-md capitalize mb-1">Ms. Sophia</h4>
                                                        <span className="italic">Designer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="bg-gray-light group">
                                                    <div className="relative">
                                                        <a href="#" className="block"><img className="w-full h-full" src="assets/images/team/team2.webp" alt="team image" loading="lazy" width={270} height={330} /></a>
                                                        <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"><i className="icon-social-facebook" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"><i className="icon-social-twitter" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"><i className="icon-social-instagram" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="py-5 px-3 text-center">
                                                        <h4 className="font-medium text-dark text-md capitalize mb-1">Mr. Peter Pan</h4>
                                                        <span className="italic">Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="bg-gray-light group">
                                                    <div className="relative">
                                                        <a href="#" className="block"><img className="w-full h-full" src="assets/images/team/team3.webp" alt="team image" loading="lazy" width={270} height={330} /></a>
                                                        <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"><i className="icon-social-facebook" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"><i className="icon-social-twitter" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"><i className="icon-social-instagram" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="py-5 px-3 text-center">
                                                        <h4 className="font-medium text-dark text-md capitalize mb-1">Mr. John Lee</h4>
                                                        <span className="italic">Chairmen</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="bg-gray-light group">
                                                    <div className="relative">
                                                        <a href="#" className="block"><img className="w-full h-full" src="assets/images/team/team4.webp" alt="team image" loading="lazy" width={270} height={330} /></a>
                                                        <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"><i className="icon-social-facebook" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"><i className="icon-social-twitter" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"><i className="icon-social-instagram" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="py-5 px-3 text-center">
                                                        <h4 className="font-medium text-dark text-md capitalize mb-1">Mr. John Doh</h4>
                                                        <span className="italic">SEO Expert</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="bg-gray-light group">
                                                    <div className="relative">
                                                        <a href="#" className="block"><img className="w-full h-full" src="assets/images/team/team2.webp" alt="team image" loading="lazy" width={270} height={330} /></a>
                                                        <div className="absolute w-full top-1/2 left-0 transform translate-y-1/2 bg-white flex flex-wrap items-center justify-center p-3 transition-all group-hover:-translate-y-1/2 invisible opacity-0 group-hover:visible group-hover:opacity-100 duration-500">
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-facebook bg-facebook hover:text-facebook"><i className="icon-social-facebook" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-twitter bg-twitter hover:text-twitter"><i className="icon-social-twitter" /></a>
                                                            <a href="#" className="w-8 h-8 rounded-full flex flex-wrap items-center justify-center text-white text-sm mx-1
                               transition-all border border-solid border-transparent hover:bg-white hover:border-instagram bg-instagram hover:text-instagram"><i className="icon-social-instagram" /></a>
                                                        </div>
                                                    </div>
                                                    <div className="py-5 px-3 text-center">
                                                        <h4 className="font-medium text-dark text-md capitalize mb-1">Mr. Peter Pan</h4>
                                                        <span className="italic">Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                        </div>
                                    </div>
                                    {/* Add Pagination */}
                                    {/* <div class="swiper-pagination"></div> */}
                                    {/* swiper navigation */}
                                    <div className="swiper-buttons">
                                        <div className="swiper-button-prev right-auto left-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange" />
                                        <div className="swiper-button-next left-auto right-4  w-12 h-12 rounded-full bg-white border border-solid border-gray-400 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* team carousel end */}
        </div>
        </main>


    );
}

export default About;
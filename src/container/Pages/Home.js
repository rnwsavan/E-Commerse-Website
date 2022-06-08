import React from 'react';

function Home(props) {
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
            {/* Hero section start */}
            <section className="hero-section relative">
                <div className="hero-slider overflow-hidden">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {/* swiper-slide start */}
                            <div className="swiper-slide 2xl:h-screen lg:h-700px xs:h-600px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-6 lg:py-0  bg-no-repeat bg-left-top xl:bg-right bg-cover" style={{ backgroundImage: 'url("assets/images/hero/slide1.webp")' }}>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12">
                                        <div className="slider-content md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[800px]">
                                            <span className="text-lg font-normal text-primary block mb-3">#Feel The Rhythm.</span>
                                            <h1 className="font-playfair font-bold text-orange text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl mb-5">Walk Up Your Passion <span className="md:block mt-5">Listen Good Music.</span></h1>
                                            <hr className="w-16 h-1 bg-orange mb-7 border-0" />
                                            <p className="font-normal text-primary text-sm lg:text-md">
                                                Experience the decibels like your ears deserve to. Safe for
                                                the ears, very for the heart. A treat to your ears.
                                            </p>
                                            <div className="inline-block mt-8 lg:mt-12">
                                                <a className="flex flex-wrap items-center bg-primary transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal" href="shop-grid-3-column.html">Explore More<i className="icon-basket-loaded ml-3 xl:ml-5" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* swiper-slide end*/}
                            {/* swiper-slide start */}
                            <div className="swiper-slide 2xl:h-screen lg:h-700px xs:h-600px flex flex-wrap items-center px-4 md:px-10 2xl:px-24 py-6 lg:py-0  bg-no-repeat bg-left-top xl:bg-right bg-cover" style={{ backgroundImage: 'url("assets/images/hero/slide2.webp")' }}>
                                <div className="grid grid-cols-12">
                                    <div className="col-span-12">
                                        <div className="slider-content md:max-w-[500px] lg:max-w-[600px] 2xl:max-w-[800px]">
                                            <span className="text-lg font-normal text-primary block mb-3">Feel The Rhythm.</span>
                                            <h1 className="font-playfair font-bold text-orange text-3xl sm:text-4xl lg:text-5xl 2xl:text-7xl mb-5">Spark Up Your Passion <span className="md:block mt-5">With Good Music.</span></h1>
                                            <hr className="w-16 h-1 bg-orange mb-7 border-0" />
                                            <p className="font-normal text-primary text-sm lg:text-md">
                                                Experience the decibels like your ears deserve to. Safe for
                                                the ears, very for the heart. A treat to your ears.
                                            </p>
                                            <div className="inline-block mt-12">
                                                <a className="flex flex-wrap items-center bg-primary transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal" href="shop-grid-3-column.html">Explore More<i className="icon-basket-loaded ml-3 xl:ml-5" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination" />
                </div>
            </section>
            {/* Hero section end */}
            {/* Feartured section start */}
            <section className="pt-24">
                <div className="container">
                    <div className="flex items-center -mx-4 flex-wrap">
                        <div className="w-full md:w-1/2 px-4  order-last md:order-first">
                            <img className="mt-8 md:mt-0 w-full h-full lg:pr-14 xl:pr-20" src="assets/images/featured-products/product1.webp" alt="product image" loading="lazy" width={512} height={647} />
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-md font-normal text-primary block mb-4">FEATURED PRODUCT</h2>
                            <h3 className="font-playfair font-bold text-orange text-[30px] sm:text-[36px] xl:text-[48px] leading-tight mb-5">Minimal Headphone <br />For Music Lover</h3>
                            <hr className="w-16 h-1 bg-orange mb-7 border-0" />
                            <p className="font-normal text-primary text-base xl:text-md">
                                When an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. sint occaeca Excepteur sint occaecat
                                cupidatat non proident.
                            </p>
                            <a href="single-product.html" className="bg-primary transition-all hover:bg-orange hover:text-white px-5 md:px-12 py-3 md:py-4 xl:py-4 rounded-full text-orange capitalize font-medium text-sm lg:text-md inline-block mt-8 leading-normal">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Feartured section end */}
            {/* Feartured section start */}
            <section className="pt-24 pb-24">
                <div className="container">
                    <div className="flex items-center -mx-4 flex-wrap">
                        <div className="w-full md:w-1/2 px-4">
                            <h2 className="text-md font-normal text-primary block mb-4">MINIMAL PRODUCT</h2>
                            <h3 className="font-playfair font-bold text-orange text-[30px] sm:text-[36px] xl:text-[48px] leading-tight mb-5">Minimal Headphone <br />For Music Lover</h3>
                            <hr className="w-16 h-1 bg-orange mb-7 border-0" />
                            <p className="font-normal text-primary text-base xl:text-md">
                                When an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. sint occaeca Excepteur sint occaecat
                                cupidatat non proident.
                            </p>
                            <a href="single-product.html" className="bg-primary transition-all hover:bg-orange hover:text-white px-5 md:px-12 py-3 md:py-4 xl:py-4 rounded-full text-orange capitalize font-medium text-sm lg:text-md inline-block mt-8 leading-normal">Buy Now</a>
                        </div>
                        <div className="w-full md:w-1/2 px-4">
                            <img className="mt-8 md:mt-0 w-full h-full" src="assets/images/featured-products/product2.webp" alt="product image" loading="lazy" width={612} height={723} />
                        </div>
                    </div>
                </div>
            </section>
            {/* Feartured section end */}
            {/* Banner section start */}
            <section className="pt-24 pb-24 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: 'url("assets/images/banner/bg.webp")' }}>
                <div className="container">
                    <div className="w-full flex items-center -mx-4 flex-wrap justify-end px-4">
                        <div className="lg:w-2/4 xl:w-2/5">
                            <span className="text-md font-normal text-white block mb-8">#Action Feature</span>
                            <h2 className="font-playfair font-bold text-white text-4xl lg:text-xl xl:text-5xl mb-10">Ultimate comfort.</h2>
                            <hr className="w-16 h-1 bg-white mb-10 border-0" />
                            <ul>
                                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                                    <span className="block text-4xl mr-5"><i className="icofont-bluetooth" /></span>
                                    Smart Connectivity
                                </li>
                                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                                    <span className="block text-4xl mr-5"><i className="icofont-battery-full" /></span>
                                    Long lasting battery
                                </li>
                                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                                    <span className="block text-4xl mr-5"><i className="icofont-touch" /></span>
                                    Touch Control Panel
                                </li>
                                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                                    <span className="block text-4xl mr-5"><i className="icofont-volume-up" /></span>
                                    Volume Up Control
                                </li>
                                <li className="flex items-center text-white text-md md:text-3xl mb-10">
                                    <span className="block text-4xl mr-5"><i className="icofont-water-drop" /></span>
                                    Water Dust Proof
                                </li>
                            </ul>
                            <a href="single-product.html" className="bg-white transition-all hover:bg-orange hover:text-white px-5 md:px-12 py-3 md:py-4 xl:py-4 rounded-full text-orange capitalize font-medium text-sm lg:text-md inline-block leading-normal">Buy Now</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner section end */}
            {/* Product section start */}
            <section className="product-section pt-24 pb-24">
                <div className="container">
                    <div className="grid grid-rows-1 grid-flow-col gap-4">
                        <div className="text-center mb-14">
                            <h2 className="font-playfair font-bold text-orange text-4xl lg:text-xl mb-4">Deal Collection</h2>
                            <p className="font-normal text-black text-base">There are many variations of passages of Lorem</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-start-1 md:col-start-3 col-span-12 md:col-span-8">
                            {/* countdown start */}
                            <div className="relative py-4 p-4 before:absolute before:w-full before:empty before:block before:h-full before:z-10 before:shadow-deal before:inset-x-2 before:top-2 after:absolute after:w-full after:empty after:block after:h-full after:z-10 after:shadow-deal after:inset-x-3 after:top-3 mb-12">
                                <div className="countdown item-1 flex flex-wrap justify-center pt-4" data-countdown="2022/11/20" data-format="short">
                                    <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row mr-5">
                                        <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500 daysLeft" />
                                        <span className="countdown__text capitalize text-base text-dark font-400 daysText" />
                                    </div>
                                    <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row mr-5">
                                        <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500 hoursLeft" />
                                        <span className="countdown__text capitalize text-base text-dark font-400 hoursText" />
                                    </div>
                                    <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row mr-5">
                                        <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500 minsLeft" />
                                        <span className="countdown__text capitalize text-base text-dark font-400 minsText" />
                                    </div>
                                    <div className="countdown__item flex flex-wrap items-baseline flex-col sm:flex-row">
                                        <span className="countdown__time mr-1 text-lg lg:text-4xl text-dark font-500 secsLeft" />
                                        <span className="countdown__text capitalize text-base text-dark font-400 secsText" />
                                    </div>
                                </div>
                            </div>
                            {/* countdown end */}
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <section className="relative -m-4">
                                <div className="product-carousel overflow-hidden p-4">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-full h-full" src="assets/images/products/lg/product3.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View" aria-label="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="add to cart" data-tippy-content="Add to cart">
                                                                        <i className="icon-bag" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                        {/* variants start */}
                                                        <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                                                            <ul className="flex flex-wrap items-center justify-center mb-3">
                                                                <li className="mx-1 leading-none"><button className="text-sm">sm</button></li>
                                                                <li className="mx-1 leading-none"><button className="text-sm">l</button></li>
                                                                <li className="mx-1 leading-none"><button className="text-sm">m</button></li>
                                                                <li className="mx-1 leading-none"><button className="text-sm">xl</button></li>
                                                                <li className="mx-1 leading-none"><button className="text-sm">xxl</button></li>
                                                            </ul>
                                                            <ul className="flex flex-wrap items-center justify-center">
                                                                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-orange" aria-label="colors" /></li>
                                                                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-primary" aria-label="variants" /></li>
                                                                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-indigo-600" aria-label="variants" /></li>
                                                                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-dark" aria-label="variants" /></li>
                                                            </ul>
                                                        </div>
                                                        {/* variants end */}
                                                    </div>
                                                    <div className="py-5 px-4">
                                                        <ul className="mb-3 text-sm capitalize">
                                                            <li className="flex flex-wrap items-center justify-between"><span><span>Sold: </span><span className="text-orange">10</span></span> <span><span>Available: </span> <span className="text-orange">12</span> </span></li>
                                                        </ul>
                                                        <div className="h-2 bg-gray-600 rounded">
                                                            <div className="h-full bg-orange rounded-l" aria-label="progress bar" role="progressbar" style={{ width: '83%' }} aria-valuenow={83} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <h3 className="mt-4"><a className="block text-base hover:text-orange transition-all" href="single-product.html">Airpod product ides</a></h3>
                                                        <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
                                                    {/* tab-contents start */}
                                                    <div id="tab1" className="relative overflow-hidden">
                                                        <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <div className="tab-contents">
                                                            <div id="product1" className="tab-content">
                                                                <img className="w-full h-full" src="assets/images/products/lg/product5.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                            </div>
                                                            <div id="product2" className="tab-content">
                                                                <img className="w-full h-full" src="assets/images/products/lg/product2.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                            </div>
                                                            <div id="product3" className="tab-content">
                                                                <img className="w-full h-full" src="assets/images/products/lg/product3.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                            </div>
                                                        </div>
                                                        {/* tab-contents end */}
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View" aria-label="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Add to cart" aria-label="Add to cart">
                                                                        <i className="icon-bag" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                        {/* tabs nav start */}
                                                        <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                                                            <ul className="tab-nav flex flex-wrap items-center justify-center">
                                                                <li className="mx-1"><a href="#product1" className="w-8 h-8 overflow-hidden rounded-full block"><img src="assets/images/products/sm/product5.webp" alt="product image" loading="lazy" width={45} height={50} /></a></li>
                                                                <li className="mx-1"><a href="#product2" className="w-8 h-8 overflow-hidden rounded-full block"><img src="assets/images/products/sm/product2.webp" alt="product image" loading="lazy" width={45} height={50} /></a></li>
                                                                <li className="mx-1"><a href="#product3" className="w-8 h-8 overflow-hidden rounded-full block"><img src="assets/images/products/sm/product3.webp" alt="product image" loading="lazy" width={45} height={50} /></a></li>
                                                            </ul>
                                                        </div>
                                                        {/* tabs nav end */}
                                                    </div>
                                                    <div className="py-5 px-4">
                                                        <ul className="mb-3 text-sm capitalize">
                                                            <li className="flex flex-wrap items-center justify-between"><span><span>Sold: </span><span className="text-orange">10</span></span> <span><span>Available: </span> <span className="text-orange">12</span> </span></li>
                                                        </ul>
                                                        <div className="h-2 bg-gray-600 rounded">
                                                            <div className="h-full bg-orange rounded-l" aria-label="progress bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <h3 className="mt-4"><a className="block text-base hover:text-orange transition-all" href="single-product.html">Airpod product kiebd</a></h3>
                                                        <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
                                                    {/* tab-contents start */}
                                                    <div id="tab2" className="relative overflow-hidden">
                                                        <div className="tab-contents">
                                                            <div id="product4" className="tab-content">
                                                                <img className="w-full h-full" src="assets/images/products/lg/product2.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                            </div>
                                                            <div id="product5" className="tab-content">
                                                                <img className="w-full h-full" src="assets/images/products/lg/product1.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                            </div>
                                                            <div id="product6" className="tab-content">
                                                                <img className="w-full h-full" src="assets/images/products/lg/product3.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                            </div>
                                                            <div id="product7" className="tab-content">
                                                                <img className="w-full h-full" src="assets/images/products/lg/product4.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                            </div>
                                                            <div id="product8" className="tab-content">
                                                                <img className="w-full h-full" src="assets/images/products/lg/product5.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                            </div>
                                                        </div>
                                                        {/* tab-contents end */}
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View" aria-label="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Add to cart" aria-label="Add to cart">
                                                                        <i className="icon-bag" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                        {/* tabs nav start */}
                                                        <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                                                            <ul className="tab-nav flex flex-wrap items-center justify-center">
                                                                <li className="mx-1"><a href="#product4" className="w-8 h-8 overflow-hidden rounded-full block"><img src="assets/images/products/sm/product2.webp" alt="product image" loading="lazy" width={45} height={50} /></a></li>
                                                                <li className="mx-1"><a href="#product5" className="w-8 h-8 overflow-hidden rounded-full block"><img src="assets/images/products/sm/product1.webp" alt="product image" loading="lazy" width={45} height={50} /></a></li>
                                                                <li className="mx-1"><a href="#product6" className="w-8 h-8 overflow-hidden rounded-full block"><img src="assets/images/products/sm/product3.webp" alt="product image" loading="lazy" width={45} height={50} /></a></li>
                                                                <li className="mx-1"><a href="#product7" className="w-8 h-8 overflow-hidden rounded-full block"><img src="assets/images/products/sm/product4.webp" alt="product image" loading="lazy" width={45} height={50} /></a></li>
                                                                <li className="mx-1"><a href="#product8" className="w-8 h-8 overflow-hidden rounded-full block"><img src="assets/images/products/sm/product5.webp" alt="product image" loading="lazy" width={45} height={50} /></a></li>
                                                            </ul>
                                                        </div>
                                                        {/* tabs nav end */}
                                                    </div>
                                                    <div className="py-5 px-4">
                                                        <ul className="mb-3 text-sm capitalize">
                                                            <li className="flex flex-wrap items-center justify-between"><span><span>Sold: </span><span className="text-orange">10</span></span> <span><span>Available: </span> <span className="text-orange">12</span> </span></li>
                                                        </ul>
                                                        <div className="h-2 bg-gray-600 rounded">
                                                            <div className="h-full bg-orange rounded-l" aria-label="progress bar" role="progressbar" style={{ width: '45%' }} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <h3 className="mt-4"><a className="block text-base hover:text-orange transition-all" href="single-product.html">Birpod product unsde</a></h3>
                                                        <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-bold uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-full h-full" src="assets/images/products/lg/product3.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Quick View" aria-label="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Add to wishlist" aria-label="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" data-tippy-content="Compare" aria-label="compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" data-tippy-content="Add to cart" aria-label="Add to cart">
                                                                        <i className="icon-bag" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                        {/* variants start */}
                                                        <div className="p-2 bg-gray-200 shadow absolute left-2 right-2 -bottom-40 group-hover:bottom-2 z-20 transition-all duration-500 ease-linear">
                                                            <ul className="flex flex-wrap items-center justify-center mb-3">
                                                                <li className="mx-1 leading-none"><button className="text-sm">sm</button></li>
                                                                <li className="mx-1 leading-none"><button className="text-sm">l</button></li>
                                                                <li className="mx-1 leading-none"><button className="text-sm">m</button></li>
                                                                <li className="mx-1 leading-none"><button className="text-sm">xl</button></li>
                                                                <li className="mx-1 leading-none"><button className="text-sm">xxl</button></li>
                                                            </ul>
                                                            <ul className="flex flex-wrap items-center justify-center">
                                                                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-orange" aria-label="colors" /></li>
                                                                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-primary" aria-label="variants" /></li>
                                                                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-indigo-600" aria-label="variants" /></li>
                                                                <li className="mx-1 leading-none"><button className="w-4 h-4 rounded-full bg-dark" aria-label="variants" /></li>
                                                            </ul>
                                                        </div>
                                                        {/* variants end */}
                                                    </div>
                                                    <div className="py-5 px-4">
                                                        <ul className="mb-3 text-sm capitalize">
                                                            <li className="flex flex-wrap items-center justify-between"><span><span>Sold: </span><span className="text-orange">10</span></span> <span><span>Available: </span> <span className="text-orange">12</span> </span></li>
                                                        </ul>
                                                        <div className="h-2 bg-gray-600 rounded">
                                                            <div className="h-full bg-orange rounded-l" aria-label="progress bar" role="progressbar" style={{ width: '83%' }} aria-valuenow={83} aria-valuemin={0} aria-valuemax={100} />
                                                        </div>
                                                        <h3 className="mt-4"><a className="block text-base hover:text-orange transition-all" href="single-product.html">New minia nidesd</a></h3>
                                                        <h4 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h4>
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
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product section end */}
            {/* Vedio Banner section start */}
            <section className="vedio-banner-section relative h-sm-b-h md:h-full">
                <img className="object-cover h-full w-full" src="assets/images/banner/video-bg.webp" alt="banner image" loading="lazy" width={1920} height={902} />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full xl:max-w-3xl lg:px-10 px-4">
                    <h3 className="font-playfair font-bold text-orange text-lg sm:text-4xl lg:text-xl mb-3 md:mb-10">The Right Headphones</h3>
                    <p className="font-medium text-white text-base mb-4 md:mb-10">
                        In ornare quam viverra orci sagittis. Duis ultricies lacus sed turpis
                        tincidunt id aliquet risus. Arcu felis bibendum ut tristique et.
                    </p>
                    <a href="https://www.youtube.com/watch?v=pONeWAzDsQg" className="inline-block play-vedio">
                        <img src="assets/images/icon/play.webp" alt="play image" loading="lazy" width={50} height={50} />
                    </a>
                </div>
            </section>
            {/* Vedio Banner section end */}
            {/* Blog section start */}
            <section className="blog-carousel-section pt-24 pb-24">
                <div className="container">
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12">
                            <div className="section-title text-center pb-14">
                                <h3 className="font-playfair font-bold text-orange text-4xl lg:text-xl mb-4">Latest Blog</h3>
                                <p className="font-normal text-black text-base">There are many variations of passages of Lorem</p>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <section className="relative -m-4">
                                <div className="blog-carousel overflow-hidden p-4">
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="border border-solid border-gray-300 p-[20px] md:p-[30px] group">
                                                    <div className="mb-6">
                                                        <a href="blog-details.html" className="overflow-hidden block">
                                                            <img className="transform group-hover:scale-110 transition-transform duration-500 w-full h-full" src="assets/images/blog/blog1.webp" alt="blog image" loading="lazy" width={600} height={400} />
                                                        </a>
                                                    </div>
                                                    <h3><a href="blog-details.html" className="block text-base md:text-md hover:text-orange transition-all font-medium pb-[10px]">Donec tellus Nulla lorem</a></h3>
                                                    <div className="blog-meta">
                                                        <ul className="flex flex-wrap items-center pb-[10px]">
                                                            <li className="text-sm"><a href="#" className="text-sm text-dark hover:text-orange transition-all">21 April, 2021</a> <span className="inline-block mx-2">\</span> </li>
                                                            <li className="text-sm"><a href="#" className="text-sm text-dark hover:text-orange transition-all">0 comments</a></li>
                                                        </ul>
                                                    </div>
                                                    <p className="font-normal text-black text-sm mb-[25px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...</p>
                                                    <a className="bg-white transition-all hover:bg-orange hover:border-orange hover:text-white text-dark capitalize font-medium text-sm inline-block border border-solid border-gray-300 px-8 py-4 leading-none mb-[10px]" href="blog-details.html">blog details</a>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="border border-solid border-gray-300 p-[20px] md:p-[30px] group">
                                                    <div className="mb-6">
                                                        <a href="blog-details.html" className="overflow-hidden block">
                                                            <img className="transform group-hover:scale-110 transition-transform duration-500 w-full h-full" src="assets/images/blog/blog2.webp" alt="blog image" loading="lazy" width={600} height={400} />
                                                        </a>
                                                    </div>
                                                    <h3><a href="blog-details.html" className="block text-base md:text-md hover:text-orange transition-all font-medium pb-[10px]">Norbi at omgula qorta</a></h3>
                                                    <div className="blog-meta">
                                                        <ul className="flex flex-wrap items-center pb-[10px]">
                                                            <li className="text-sm"><a href="#" className="text-sm text-dark hover:text-orange transition-all">21 April, 2021</a> <span className="inline-block mx-2">\</span> </li>
                                                            <li className="text-sm"><a href="#" className="text-sm text-dark hover:text-orange transition-all">0 comments</a></li>
                                                        </ul>
                                                    </div>
                                                    <p className="font-normal text-black text-sm mb-[25px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...</p>
                                                    <a className="bg-white transition-all hover:bg-orange hover:border-orange hover:text-white text-dark capitalize font-medium text-sm inline-block border border-solid border-gray-300 px-8 py-4 leading-none mb-[10px]" href="blog-details.html">blog details</a>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="border border-solid border-gray-300 p-[20px] md:p-[30px] group">
                                                    <div className="mb-6">
                                                        <a href="blog-details.html" className="overflow-hidden block">
                                                            <img className="transform group-hover:scale-110 transition-transform duration-500 w-full h-full" src="assets/images/blog/blog3.webp" alt="blog image" loading="lazy" width={600} height={400} />
                                                        </a>
                                                    </div>
                                                    <h3><a href="blog-details.html" className="block text-base md:text-md hover:text-orange transition-all font-medium pb-[10px]">Mithout wery warkness</a></h3>
                                                    <div className="blog-meta">
                                                        <ul className="flex flex-wrap items-center pb-[10px]">
                                                            <li className="text-sm"><a href="#" className="text-sm text-dark hover:text-orange transition-all">21 April, 2021</a> <span className="inline-block mx-2">\</span> </li>
                                                            <li className="text-sm"><a href="#" className="text-sm text-dark hover:text-orange transition-all">0 comments</a></li>
                                                        </ul>
                                                    </div>
                                                    <p className="font-normal text-black text-sm mb-[25px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...</p>
                                                    <a className="bg-white transition-all hover:bg-orange hover:border-orange hover:text-white text-dark capitalize font-medium text-sm inline-block border border-solid border-gray-300 px-8 py-4 leading-none mb-[10px]" href="blog-details.html">blog details</a>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                            {/* swiper-slide start */}
                                            <div className="swiper-slide">
                                                <div className="border border-solid border-gray-300 p-[20px] md:p-[30px] group">
                                                    <div className="mb-6">
                                                        <a href="blog-details.html" className="overflow-hidden block">
                                                            <img className="transform group-hover:scale-110 transition-transform duration-500 w-full h-full" src="assets/images/blog/blog4.webp" alt="blog image" loading="lazy" width={600} height={400} />
                                                        </a>
                                                    </div>
                                                    <h3><a href="blog-details.html" className="block text-base md:text-md hover:text-orange transition-all font-medium pb-[10px]">Sarbi at ligula porta</a></h3>
                                                    <div className="blog-meta">
                                                        <ul className="flex flex-wrap items-center pb-[10px]">
                                                            <li className="text-sm"><a href="#" className="text-sm text-dark hover:text-orange transition-all">21 April, 2021</a> <span className="inline-block mx-2">\</span> </li>
                                                            <li className="text-sm"><a href="#" className="text-sm text-dark hover:text-orange transition-all">0 comments</a></li>
                                                        </ul>
                                                    </div>
                                                    <p className="font-normal text-black text-sm mb-[25px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore...</p>
                                                    <a className="bg-white transition-all hover:bg-orange hover:border-orange hover:text-white text-dark capitalize font-medium text-sm inline-block border border-solid border-gray-300 px-8 py-4 leading-none mb-[10px]" href="blog-details.html">blog details</a>
                                                </div>
                                            </div>
                                            {/* swiper-slide end*/}
                                        </div>
                                    </div>
                                    {/* Add Pagination */}
                                    {/* <div class="swiper-pagination"></div> */}
                                    {/* swiper navigation */}
                                    <div className="swiper-buttons">
                                        <div className="swiper-button-prev right-auto left-2 md:-left-2  w-12 h-12 rounded-full bg-white border border-solid border-gray-600 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange" />
                                        <div className="swiper-button-next left-auto right-2 md:-right-2  w-12 h-12 rounded-full bg-white border border-solid border-gray-600 text-sm text-dark opacity-100 transition-all hover:text-orange hover:border-orange" />
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog section end */}
        </div>

       </main>
    );
}

export default Home;
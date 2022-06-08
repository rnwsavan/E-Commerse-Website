import React from 'react';

function Shop(props) {
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
                            <div id="shoptab" className="flex-1 px-4">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className="flex flex-wrap">
                                        <div className="shop-select flex mr-12">
                                            <label htmlFor="SortBy">Sort by :</label>
                                            <select id="SortBy" className="px-2 bg-transparent">
                                                <option value="manual">Featured</option>
                                                <option value="best-selling">Best Selling</option>
                                                <option value="title-ascending">Alphabetically, A-Z</option>
                                                <option value="title-descending">Alphabetically, Z-A</option>
                                                <option value="price-ascending">Price, low to high</option>
                                                <option value="price-descending">Price, high to low</option>
                                                <option value="created-descending">Date, new to old</option>
                                                <option value="created-ascending">Date, old to new</option>
                                            </select>
                                        </div>
                                        <p className="my-2 sm:my-0">Showing 1 - 9 of 9 result</p>
                                    </div>
                                    <div>
                                        <span>Show :</span>
                                        <select className="bg-transparent">
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                        </select>
                                    </div>
                                    <div>
                                        <ul className="shop-tab-nav flex flex-wrap">
                                            <li><a href="#grid" className="text-base hover:text-orange inline-block py-2 px-2"><i className="icon-grid" /></a></li>
                                            <li className="active"><a href="#list" className="text-base hover:text-orange inline-block py-2 px-2 ml-5"><i className="icon-menu" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-10">
                                    <div id="grid" className="shop-tab-content">
                                        <div className="flex flex-wrap -my-4 -px-4">
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-full h-full" src="assets/images/products/drone/product1.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
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
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Batin crofessor pampden</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-full h-full" src="assets/images/products/drone/product2.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                        <i className="icon-bag" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                    </div>
                                                    <div className="py-5 px-4">
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Esse quam nihil molestiae</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <img className="w-full h-full" src="assets/images/products/drone/product3.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                    {/* actions start */}
                                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                    <i className="icon-magnifier" />
                                                                </a>
                                                            </li>
                                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-bag" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* actions end */}
                                                    <div className="py-5 px-4">
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Inisd deofessor smpden</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-full h-full" src="assets/images/products/drone/product4.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
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
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Nam libero tempore,</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-full h-full" src="assets/images/products/drone/product5.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
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
                                                        {/* countdown start */}
                                                        <div className="absolute w-full bottom-0 group-hover:opacity-0 group-hover:invisible transition-all">
                                                            <div className="countdown bg-dark item-1 flex flex-wrap justify-evenly p-2" data-countdown="2022/11/20" data-format="short">
                                                                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                                                                    <span className="countdown__time mr-1 text-base text-white font-500 daysLeft" />
                                                                    <span className="countdown__text capitalize text-sm text-white font-light daysText" />
                                                                </div>
                                                                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                                                                    <span className="countdown__time mr-1 text-base text-white font-500 hoursLeft" />
                                                                    <span className="countdown__text capitalize text-sm text-white font-light hoursText" />
                                                                </div>
                                                                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                                                                    <span className="countdown__time mr-1 text-base text-white font-500 minsLeft" />
                                                                    <span className="countdown__text capitalize text-sm text-white font-light minsText" />
                                                                </div>
                                                                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                                                                    <span className="countdown__time mr-1 text-base text-white font-500 secsLeft" />
                                                                    <span className="countdown__text capitalize text-sm text-white font-light secsText" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* countdown end */}
                                                    </div>
                                                    <div className="py-5 px-4">
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Catin uofessor eampden</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-ful h-fulll" src="assets/images/products/bags/product1.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
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
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Every pleasure is to be</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                    <img className="w-ful h-fulll" src="assets/images/products/bags/product2.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                    {/* actions start */}
                                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                    <i className="icon-magnifier" />
                                                                </a>
                                                            </li>
                                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-bag" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* actions end */}
                                                    <div className="py-5 px-4">
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Simple and repellendus</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-ful h-fulll" src="assets/images/products/bags/product5.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
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
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Architecto non provident</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                    <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                    <img className="w-ful h-fulll" src="assets/images/products/bags/product3.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                    {/* actions start */}
                                                    <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                        <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                    <i className="icon-magnifier" />
                                                                </a>
                                                            </li>
                                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                            <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-bag" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    {/* actions end */}
                                                    <div className="py-5 px-4">
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Simple and easy</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-ful h-fulll" src="assets/images/products/bags/product4.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
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
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Cupiditate non provident</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-full h-full" src="assets/images/products/drone/product1.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
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
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Batin crofessor pampden</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 lg:w-1/3 2xl:w-1/4 px-4 my-4">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative">
                                                    <div className="relative overflow-hidden">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="w-full h-full" src="assets/images/products/drone/product2.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow rounded-full h-0 transition-all group-hover:h-16 duration-500 overflow-hidden">
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Quick View" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                        <i className="icon-heart" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 md:py-5 md:pl-8">
                                                                    <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                        <i className="icon-refresh" />
                                                                    </a>
                                                                </li>
                                                                <li className="py-4 pl-7 pr-7 md:py-5 md:pl-8 md:pr-8">
                                                                    <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                        <i className="icon-bag" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                    </div>
                                                    <div className="py-5 px-4">
                                                        <h4><a className="block text-base hover:text-orange transition-all" href="#">Esse quam nihil molestiae</a></h4>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-3"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="list" className="shop-tab-content active">
                                        <div className="flex flex-wrap -mb-7 -px-4">
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/drone/product1.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
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
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Batin crofessor pampden</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/drone/product2.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                    </div>
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Esse quam nihil molestiae</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/drone/product3.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                    </div>
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Inisd deofessor smpden</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/drone/product4.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
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
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Nam libero tempore,</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/drone/product5.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
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
                                                        {/* countdown start */}
                                                        <div className="absolute w-full bottom-0 group-hover:opacity-0 group-hover:invisible transition-all">
                                                            <div className="countdown bg-dark item-1 flex flex-wrap justify-evenly p-2" data-countdown="2022/11/20" data-format="short">
                                                                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                                                                    <span className="countdown__time mr-1 text-base text-white font-500 daysLeft" />
                                                                    <span className="countdown__text capitalize text-sm text-white font-light daysText" />
                                                                </div>
                                                                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                                                                    <span className="countdown__time mr-1 text-base text-white font-500 hoursLeft" />
                                                                    <span className="countdown__text capitalize text-sm text-white font-light hoursText" />
                                                                </div>
                                                                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                                                                    <span className="countdown__time mr-1 text-base text-white font-500 minsLeft" />
                                                                    <span className="countdown__text capitalize text-sm text-white font-light minsText" />
                                                                </div>
                                                                <div className="countdown__item flex flex-wrap items-baseline flex-col">
                                                                    <span className="countdown__time mr-1 text-base text-white font-500 secsLeft" />
                                                                    <span className="countdown__text capitalize text-sm text-white font-light secsText" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* countdown end */}
                                                    </div>
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Catin uofessor eampden</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/bags/product1.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
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
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Every pleasure is to be</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/bags/product2.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                    </div>
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Simple and repellendus</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/bags/product5.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
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
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Architecto non provident</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/bags/product3.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                    </div>
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Simple and easy</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/bags/product4.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
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
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Cupiditate non provident</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/drone/product1.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
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
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Batin crofessor pampden</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full px-4 mb-7">
                                                <div className="border border-solid border-gray-300 transition-all hover:shadow-product group relative flex flex-wrap flex-col md:flex-row">
                                                    <div className="relative overflow-hidden md:w-1/3">
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 left-3">New</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-3 right-3">Sale</span>
                                                        <span className="font-medium uppercase text-sm text-black inline-block py-1 px-2 leading-none absolute top-10 right-3">-11%</span>
                                                        <img className="md:absolute w-full md:h-full md:object-cover" src="assets/images/products/drone/product2.webp" alt="product image" loading="lazy" width={432} height={480} />
                                                        {/* actions start */}
                                                        <div className="absolute left-2/4 top-2/4 transform -translate-x-2/4 -translate-y-2/4 z-10">
                                                            <ul className="flex items-center justify-center bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all ease-linear transform translate-y-4 group-hover:-translate-y-0">
                                                                <li>
                                                                    <a href="#modal-cart" className="text-dark flex items-center justify-center text-md hover:text-orange modal-toggle px-4 py-4" aria-label="quick veiw" data-tippy-content="Quick View">
                                                                        <i className="icon-magnifier-add" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        {/* actions end */}
                                                    </div>
                                                    <div className="py-5 px-4 flex-1">
                                                        <h4><a className="block text-md hover:text-orange transition-all mb-2" href="#">Esse quam nihil molestiae</a></h4>
                                                        <p className="text-sm">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                                        <h5 className="font-bold text-md leading-none text-orange mt-4 mb-4"><del className="font-normal text-sm mr-1 inline-block">$110.00</del>$130.00</h5>
                                                        <ul className="flex items-center">
                                                            <li className="mr-2">
                                                                <a href="whishlist.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Add to wishlist" data-tippy-content="Add to wishlist">
                                                                    <i className="icon-heart" />
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="#modal-addto-cart" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange modal-toggle" aria-label="Add to cart" data-tippy-content="Add to cart">
                                                                    <i className="icon-basket-loaded" />
                                                                    <span className="text-sm ml-2">Add to cart</span>
                                                                </a>
                                                            </li>
                                                            <li className="mr-2">
                                                                <a href="compare.html" className="text-dark flex items-center justify-center text-md hover:text-white border border-solid border-dark hover:bg-orange transition-all px-4 md:px-5 py-3 leading-none hover:border-orange" aria-label="Compare" data-tippy-content="Compare">
                                                                    <i className="icon-refresh" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <ul className="pagination flex flex-wrap items-center justify-center">
                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">
                                                <i className="icon-arrow-left" />
                                            </a>
                                        </li>
                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white active" href="#">1</a>
                                        </li>
                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">2</a>
                                        </li>
                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">3</a>
                                        </li>
                                        <li className="mx-2">
                                            <a className="flex flex-wrap items-center justify-center  w-11 h-11 bg-white shadow text-orange leading-none transition-all hover:bg-orange hover:text-white" href="#">
                                                <i className="icon-arrow-right" />
                                            </a>
                                        </li>
                                    </ul>
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

export default Shop;
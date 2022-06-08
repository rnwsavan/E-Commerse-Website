import React from 'react';

function Contact(props) {
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
            {/* contact us section start */}
            <div className="bg-white py-24">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                        <div className="contact-info-area">
                            <h2 className="font-semibold text-dark text-4xl mb-14 capitalize">Contact Us</h2>
                            <div className="flex flex-wrap items-center mb-8">
                                <span className="text-dark text-4xl mr-5"><i className="icon-location-pin" /></span>
                                <p className="flex-1">Address goes here, street, Crossroad 123.</p>
                            </div>
                            <div className="flex flex-wrap items-center mb-8">
                                <span className="text-dark text-4xl mr-5"><i className="icon-envelope" /></span>
                                <a href="mailto:info@example.com" className="flex-1">info@example.com / info@example.com</a>
                            </div>
                            <div className="flex flex-wrap items-center">
                                <span className="text-dark text-4xl mr-5"><i className="icon-screen-smartphone" /></span>
                                <a href="tel:01234567890" className="flex-1">+1 35 776 859 011 / +1 35 776 859 011</a>
                            </div>
                        </div>
                        <div className="p-10 lg:p-14 shadow mt-14 lg:mt-0">
                            <form id="contact-form" method="get" action="#">
                                <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" name="name" placeholder="Name" />
                                <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" type="email" placeholder="Email" name="email" />
                                <input className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 placeholder-current text-dark h-12 focus:outline-none text-base" type="text" placeholder="subject" name="subject" />
                                <textarea className="border border-solid border-gray-300 w-full py-1 px-5 mb-5 text-dark h-32 focus:outline-none text-base resize-none" name="massage" defaultValue={""} />
                                <button className="w-full leading-none uppercase text-white text-sm bg-dark px-5 py-5 transition-all hover:bg-orange" type="submit" aria-label="button">Send Message</button>
                            </form>
                            <p className="form-messege" />
                        </div>
                    </div>
                </div>
            </div>
            {/* contact us section end */}
            {/* google map start */}
            <div>
                <iframe className="w-full h-96 md:h-500px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743278.227637299!2d-61.159056951307704!3d-2.371597134950372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91e8605342744385%3A0x3d3c6dc1394a7fc7!2sAmazon%20Rainforest!5e0!3m2!1sen!2sbd!4v1638433670177!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
            </div>
            {/* google map end */}
        </div>
        </main>


    );
}

export default Contact;
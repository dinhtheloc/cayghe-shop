import React from 'react';
import { Helmet } from "react-helmet";
import Leaf from '../components/Leaf';

function Home(props) {
    return (
        <>
            <section class="bg-light pt-6 pt-md-11 pb-8 pb-md-9">
                <div class="container-lg">
                    <div class="row no-gutters">
                        <div class="col-12">


                            <div class="position-absolute top-right text-primary-light mt-n8 mr-n7">
                                <svg width="185" height="186" viewBox="0 0 185 186" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="2" cy="2" r="2" fill="currentColor" />
                                    <circle cx="22" cy="2" r="2" fill="currentColor" /><circle cx="42" cy="2" r="2" fill="currentColor" /><circle cx="62" cy="2" r="2" fill="currentColor" /><circle cx="82" cy="2" r="2" fill="currentColor" /><circle cx="102" cy="2" r="2" fill="currentColor" /><circle cx="122" cy="2" r="2" fill="currentColor" /><circle cx="142" cy="2" r="2" fill="currentColor" /><circle cx="162" cy="2" r="2" fill="currentColor" /><circle cx="182" cy="2" r="2" fill="currentColor" /><circle cx="2" cy="22" r="2" fill="currentColor" /><circle cx="22" cy="22" r="2" fill="currentColor" /><circle cx="42" cy="22" r="2" fill="currentColor" /><circle cx="62" cy="22" r="2" fill="currentColor" /><circle cx="82" cy="22" r="2" fill="currentColor" /><circle cx="102" cy="22" r="2" fill="currentColor" /><circle cx="122" cy="22" r="2" fill="currentColor" /><circle cx="142" cy="22" r="2" fill="currentColor" /><circle cx="162" cy="22" r="2" fill="currentColor" /><circle cx="182" cy="22" r="2" fill="currentColor" /><circle cx="2" cy="42" r="2" fill="currentColor" /><circle cx="22" cy="42" r="2" fill="currentColor" /><circle cx="42" cy="42" r="2" fill="currentColor" /><circle cx="62" cy="42" r="2" fill="currentColor" /><circle cx="82" cy="42" r="2" fill="currentColor" /><circle cx="102" cy="42" r="2" fill="currentColor" /><circle cx="122" cy="42" r="2" fill="currentColor" /><circle cx="142" cy="42" r="2" fill="currentColor" /><circle cx="162" cy="42" r="2" fill="currentColor" /><circle cx="182" cy="42" r="2" fill="currentColor" /><circle cx="2" cy="62" r="2" fill="currentColor" /><circle cx="22" cy="62" r="2" fill="currentColor" /><circle cx="42" cy="62" r="2" fill="currentColor" /><circle cx="62" cy="62" r="2" fill="currentColor" /><circle cx="82" cy="62" r="2" fill="currentColor" /><circle cx="102" cy="62" r="2" fill="currentColor" /><circle cx="122" cy="62" r="2" fill="currentColor" /><circle cx="142" cy="62" r="2" fill="currentColor" /><circle cx="162" cy="62" r="2" fill="currentColor" /><circle cx="182" cy="62" r="2" fill="currentColor" /><circle cx="2" cy="82" r="2" fill="currentColor" /><circle cx="22" cy="82" r="2" fill="currentColor" /><circle cx="42" cy="82" r="2" fill="currentColor" /><circle cx="62" cy="82" r="2" fill="currentColor" /><circle cx="82" cy="82" r="2" fill="currentColor" /><circle cx="102" cy="82" r="2" fill="currentColor" /><circle cx="122" cy="82" r="2" fill="currentColor" /><circle cx="142" cy="82" r="2" fill="currentColor" /><circle cx="162" cy="82" r="2" fill="currentColor" /><circle cx="182" cy="82" r="2" fill="currentColor" /><circle cx="2" cy="102" r="2" fill="currentColor" /><circle cx="22" cy="102" r="2" fill="currentColor" /><circle cx="42" cy="102" r="2" fill="currentColor" /><circle cx="62" cy="102" r="2" fill="currentColor" /><circle cx="82" cy="102" r="2" fill="currentColor" /><circle cx="102" cy="102" r="2" fill="currentColor" /><circle cx="122" cy="102" r="2" fill="currentColor" /><circle cx="142" cy="102" r="2" fill="currentColor" /><circle cx="162" cy="102" r="2" fill="currentColor" /><circle cx="182" cy="102" r="2" fill="currentColor" /><circle cx="2" cy="122" r="2" fill="currentColor" /><circle cx="22" cy="122" r="2" fill="currentColor" /><circle cx="42" cy="122" r="2" fill="currentColor" /><circle cx="62" cy="122" r="2" fill="currentColor" /><circle cx="82" cy="122" r="2" fill="currentColor" /><circle cx="102" cy="122" r="2" fill="currentColor" /><circle cx="122" cy="122" r="2" fill="currentColor" /><circle cx="142" cy="122" r="2" fill="currentColor" /><circle cx="162" cy="122" r="2" fill="currentColor" /><circle cx="182" cy="122" r="2" fill="currentColor" /><circle cx="2" cy="142" r="2" fill="currentColor" /><circle cx="22" cy="142" r="2" fill="currentColor" /><circle cx="42" cy="142" r="2" fill="currentColor" /><circle cx="62" cy="142" r="2" fill="currentColor" /><circle cx="82" cy="142" r="2" fill="currentColor" /><circle cx="102" cy="142" r="2" fill="currentColor" /><circle cx="122" cy="142" r="2" fill="currentColor" /><circle cx="142" cy="142" r="2" fill="currentColor" /><circle cx="162" cy="142" r="2" fill="currentColor" /><circle cx="182" cy="142" r="2" fill="currentColor" /><circle cx="2" cy="162" r="2" fill="currentColor" /><circle cx="22" cy="162" r="2" fill="currentColor" /><circle cx="42" cy="162" r="2" fill="currentColor" /><circle cx="62" cy="162" r="2" fill="currentColor" /><circle cx="82" cy="162" r="2" fill="currentColor" /><circle cx="102" cy="162" r="2" fill="currentColor" /><circle cx="122" cy="162" r="2" fill="currentColor" /><circle cx="142" cy="162" r="2" fill="currentColor" /><circle cx="162" cy="162" r="2" fill="currentColor" /><circle cx="182" cy="162" r="2" fill="currentColor" /><circle cx="2" cy="182" r="2" fill="currentColor" /><circle cx="22" cy="182" r="2" fill="currentColor" /><circle cx="42" cy="182" r="2" fill="currentColor" /><circle cx="62" cy="182" r="2" fill="currentColor" /><circle cx="82" cy="182" r="2" fill="currentColor" /><circle cx="102" cy="182" r="2" fill="currentColor" /><circle cx="122" cy="182" r="2" fill="currentColor" /><circle cx="142" cy="182" r="2" fill="currentColor" /><circle cx="162" cy="182" r="2" fill="currentColor" />
                                    <circle cx="182" cy="182" r="2" fill="currentColor" /></svg>
                            </div>


                            <div class="row align-items-center">
                                <div class="col-md-10 col-xl-9 order-md-1 offset-md-n6 offset-xl-n3 position-static">


                                    <div class="flickity-buttons-overlap position-static vw-100 w-sm-100 ml-n4 ml-sm-0" data-flickity='{"autoPlay": true, "imagesLoaded": true, "pageDots": false, "wrapAround": true}' id="imageSlider">
                                        <div class="w-100">
                                            <img class="img-fluid pos-relative" src="https://goodkit.goodthemes.co/assets/img/e-commerce/customer-hero-1.jpg" alt="..." data-aos="wipe-left" data-aos-delay="150" />
                                        </div>
                                        <div class="w-100">
                                            <img class="img-fluid" src="https://goodkit.goodthemes.co/assets/img/e-commerce/customer-hero-2.jpg" alt="..." />
                                        </div>
                                        <div class="w-100">
                                            <img class="img-fluid" src="https://goodkit.goodthemes.co/assets/img/e-commerce/customer-hero-3.jpg" alt="..." />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-8 col-xl-6 order-md-0">
                                    <div class="shadow-lg bg-white mt-n10 mt-md-0"
                                        data-flickity='{"fade": true, "asNavFor": "#imageSlider", "draggable": false, "imagesLoaded": true, "pageDots": false, "prevNextButtons": false, "wrapAround": true}'
                                        data-aos="fade-up" data-aos-delay="200">
                                        <div class="w-100">
                                            <div class="card card-lg shadow-none">
                                                <div class="card-body text-center">
                                                    <h6 class="text-uppercase text-warning mb-5">
                                                        01. Brand
                                                    </h6>
                                                    <h1 class="mb-4">
                                                        Building your brand.
                                                    </h1>
                                                    <p class="text-muted mb-5">
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="w-100">
                                            <div class="card card-lg shadow-none">
                                                <div class="card-body text-center">
                                                    <h6 class="text-uppercase text-warning mb-5">
                                                        02. Audience
                                                    </h6>
                                                    <h1 class="mb-4">
                                                        Finding your audience.
                                                    </h1>
                                                    <p class="text-muted mb-5">
                                                        In urna lectus, mattis non accumsan in, tempor dictum neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="w-100">


                                            <div class="card card-lg shadow-none">
                                                <div class="card-body text-center">


                                                    <h6 class="text-uppercase text-warning mb-5">
                                                        03. Operations
                                                    </h6>


                                                    <h1 class="mb-4">
                                                        Running your business.
                                                    </h1>



                                                    <p class="text-muted mb-5">
                                                        In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor.
                                                    </p>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <div class="position-relative">
                <div class="shape shape-fluid-x shape-bottom text-light">
                    <div class="shape-img pb-8 pb-md-11">
                        <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 0h100v50H75L25 25H0z" fill="currentColor"></path></svg>
                    </div>
                </div>
            </div>


            {/* products */}

            <section class="pt-9 pt-md-11">
                <div class="container-lg">
                    <div class="row align-items-center mb-6">
                        <div class="col-md">

                            <h1 class="mb-0">Mặt nạ</h1>

                            <p class="text-gray-600 mb-2 mb-md-0">
                                Learn to build products for your users.</p>

                        </div>
                        <div class="col-md-auto">
                            <a class="btn btn-sm btn-primary" href="#!">Xem tất cả</a>
                        </div>
                    </div>
                    <div class="row mt-n6">
                        <div class="col-md-4">
                            <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
                                <img class="card-img-top rounded-top-left" src="https://cf.shopee.vn/file/1f69d25ff839fa37a6ab1128a8fc1069" alt="..." />
                                <div class="position-relative">
                                    <div class="shape shape-fluid-x shape-top text-white">
                                        <div class="shape-img pb-5">
                                            <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h2 class="mb-2 line-clamp">Mỹ Phẩm Thanh Dược 40ml</h2>
                                    <div class="mb-4 text-center">
                                        <Leaf></Leaf> <Leaf></Leaf> <Leaf></Leaf> <Leaf></Leaf> <Leaf></Leaf>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div className="align-self-center">
                                            <p class="font-size-sm m-0">₫650.000</p>
                                        </div>
                                        <div>
                                            <a class="btn btn-sm btn-primary" href="#!">Xem chi tiết</a>
                                        </div>

                                    </div>
                                    <a class="stretched-link" href="blog-post.html"></a>
                                </div>
                            </div>
                        
                        </div>
                        <div class="col-md-4">
                            <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
                                <img class="card-img-top rounded-top-left" src="https://cf.shopee.vn/file/a9c0005dbb0905873d114c32fa865093" alt="..." />
                                <div class="position-relative">
                                    <div class="shape shape-fluid-x shape-top text-white">
                                        <div class="shape-img pb-5">
                                            <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h2 class="mb-2 line-clamp overflow-hidden">[Mã COSHOT22 giảm 10% đơn 350K] Mặt Nạ Tế Bào Gốc-Mặt Nạ Nhau Thai Cừu Rwine Beauty Stem Cell Placenta Mask Nhật Bản</h2>
                                    <div class="mb-4 text-center">
                                        <Leaf></Leaf> <Leaf></Leaf> <Leaf></Leaf> <Leaf></Leaf> 
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div className="align-self-center">
                                            <p class="font-size-sm m-0">₫650.000</p>
                                        </div>
                                        <div>
                                            <a class="btn btn-sm btn-primary" href="#!">Xem chi tiết</a>
                                        </div>

                                    </div>
                                    <a class="stretched-link" href="blog-post.html"></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-sm rounded-top-left rounded-bottom-right lift lift-lg mt-6">
                                <img class="card-img-top rounded-top-left" src="https://cf.shopee.vn/file/1f69d25ff839fa37a6ab1128a8fc1069" alt="..." />
                                <div class="position-relative">
                                    <div class="shape shape-fluid-x shape-top text-white">
                                        <div class="shape-img pb-5">
                                            <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <h2 class="mb-2 line-clamp">Mỹ Phẩm Thanh Dược 40ml</h2>
                                    <div class="mb-4 text-center">
                                        <Leaf></Leaf> <Leaf></Leaf> <Leaf></Leaf> <Leaf></Leaf> <Leaf></Leaf>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div className="align-self-center">
                                            <p class="font-size-sm m-0">₫650.000</p>
                                        </div>
                                        <div>
                                            <a class="btn btn-sm btn-primary" href="#!">Xem chi tiết</a>
                                        </div>

                                    </div>
                                    <a class="stretched-link" href="blog-post.html"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <Helmet>
                <script src="/js/theme.min.js" type="text/javascript" />
            </Helmet>
        </>
    );
}

export default Home;
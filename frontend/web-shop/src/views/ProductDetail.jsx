import React from 'react'
import './styles.css';
import Leaf from '../components/Leaf';

function ProductDetail(props) {
    return (
        <>
            <div class="page-title-overlap bg-dark pt-4">
                <div class="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div class="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb breadcrumb-dark flex-lg-nowrap justify-content-center justify-content-lg-start">
                                <li class="breadcrumb-item"><a class="text-nowrap" href="index.html"><i class="czi-home"></i>Home</a></li>
                                <li class="breadcrumb-item text-nowrap"><a href="#">Shop</a>
                                </li>
                                <li class="breadcrumb-item text-nowrap active" aria-current="page">Product Page v.1</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="order-lg-1 pr-lg-4 text-center text-lg-left">
                        <h1 class="h3 text-light mb-0">Sports Hooded Sweatshirt</h1>
                    </div>
                </div>
            </div>
            <div class="container">
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

                        <div className="thumblist">
                            <div className="thumblist-item">
                                <img src="https://demo.createx.studio/cartzilla/img/shop/single/gallery/th01.jpg" alt="Product thumb" />
                            </div>
                            <div className="thumblist-item">

                                <img src="https://demo.createx.studio/cartzilla/img/shop/single/gallery/th01.jpg" alt="Product thumb" />
                            </div>
                            <div className="thumblist-item">

                                <img src="https://demo.createx.studio/cartzilla/img/shop/single/gallery/th01.jpg" alt="Product thumb" />
                            </div>
                            <div className="thumblist-item">

                                <img src="https://demo.createx.studio/cartzilla/img/shop/single/gallery/th01.jpg" alt="Product thumb" />
                            </div>
                        </div>

                        <h2 class="mb-4 mt-4 line-clamp">Mỹ Phẩm Thanh Dược 40ml</h2>

                        <div class="d-flex justify-content-between">
                            <div className="align-self-center">
                                <p class="font-size-sm m-0">₫650.000</p>
                            </div>
                            <div>
                                <a class="btn btn-sm btn-primary" href="#!">Mua sản phẩm</a>
                            </div>

                        </div>

                        <div class="mt-4">
                            <h4 class="font-14">Mô tả:</h4>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
                        </div>
                    </div>
                </div>
                <h1 class="mb-0 mt-4 mb-4">
                    Có thể bạn quan tâm
                </h1>
                <div className="Suggestion mb-9">
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

            </div>


        </>
    )
}


export default ProductDetail


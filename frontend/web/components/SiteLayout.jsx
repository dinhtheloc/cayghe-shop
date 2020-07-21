import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
const SiteLayout = ({ children }) => (
    <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="css/jquery.fancybox.min.css" />
            <link rel="stylesheet" href="css/aos.css" />
            <link rel="stylesheet" href="css/flag-icon.min.css" />
            <link rel="stylesheet" href="css/flickity.min.css" />
            <link rel="stylesheet" href="css/flickity-fade.css" />
            <link rel="stylesheet" href="css/vs2015.css" />
            <link rel="stylesheet" href="css/jarallax.css" />
            <link rel="stylesheet" href="fonts/feather.css" />
            {/* Theme Sans Serif CSS */}
            {/* Remove the "disabled" attribute if you want to enable Sans Serif for headings. */}
            <link rel="stylesheet" href="css/theme.min.css" />
        </Head>
        <Header></Header>

        <section
                data-jarallax data-speed=".8"
                className="bg-cover jarallax"
                style={{ backgroundImage: 'url(/background-spa.jpg)' }}>
                <div className="py-13 py-md-15 bg-dark-50">
                    <div className="container-lg">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-8 text-center text-white">
                                <h6 className="text-uppercase mb-5">
                                    Work at Goodkit
                                </h6>

                                <h1 className="display-3 mb-4">
                                    A modern design system for your new <span className="text-underline-warning text-primary d-none d-xl-inline"><span data-typed data-options='{"strings": ["SaaS platform", "data API", "iOS app", "online course", "coworking space"]}'></span></span><span className="text-underline-warning d-xl-none">business</span>.
                                </h1>

                                <p class="mb-0">
                                    Goodkit is for <span class="text-success" data-toggle="typed" data-options='{"strings": ["designers", "developers"]}'></span>.
                                </p>

                                <p className="font-size-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna lectus, mattis non accumsan in, tempor dictum neque.
                                </p>

                                <a className="btn btn-primary-light" href="#!">
                                    View Open Roles
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="position-relative">
                <div className="shape shape-fluid-x shape-top text-white">
                    <div className="shape-img pb-5">
                        <svg viewBox="0 0 100 50" preserveAspectRatio="none"><path d="M0 25h25L75 0h25v50H0z" fill="currentColor" /></svg>
                    </div>
                </div>
            </div>


            <div className="text-center mt-n7 position-relative" style={{ zIndex: 1 }}>
                <a className="btn btn-primary-light btn-circle" href="#about" data-scroll data-offset="0">
                    <i className="fe fe-arrow-down"></i>
                </a>
            </div>

        {children}

        <Footer></Footer>

        {/* libs script */}
        <script src="/js/jquery.min.js"></script>
        <script src="/js/jquery.fancybox.min.js"></script>
        <script src="/js/popper.min.js"></script>
        <script src="/js/aos.js"></script>
        <script src="/js/bootstrap.bundle.min.js"></script>
        <script src="/js/countUp.min.js"></script>
        <script src="/js/flickity.pkgd.min.js"></script>
        <script src="/js/flickity-fade.js"></script>
        <script src="/js/highlight.pack.min.js"></script>
        <script src="/js/imagesloaded.pkgd.min.js"></script>
        <script src="/js/isotope.pkgd.min.js"></script>
        <script src="/js/jarallax.min.js"></script>
        <script src="/js/jarallax-video.min.js"></script>
        <script src="/js/jarallax-element.min.js"></script>
        <script src="/js/smooth-scroll.min.js"></script>
        <script src="/js/typed.min.js"></script>
        {/*  Theme JS */}

        <script src="/js/theme.min.js"></script>
    </>
);

export default SiteLayout;

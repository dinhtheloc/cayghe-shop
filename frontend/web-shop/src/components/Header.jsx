import React from 'react'

function Header(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navbar-reveal ">
                <div className="container-lg">

                    <a className="navbar-brand d-lg-none" href="./index.html">Goodkit</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav justify-content-end w-100">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="landingsDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Landings
                            </a>
                                <div className="dropdown-positioner">
                                    <div className="dropdown-menu dropdown-menu-xl dropdown-menu-flush" aria-labelledby="landingsDropdown">
                                        <div className="row align-items-center no-gutters">
                                            <div className="col-md-6 order-1 dropdown-menu-col rounded-top-left-0 bg-gray-900 pt-4 py-lg-5">
                                                <div className="dropdown-menu-body">

                                                    <h6 className="dropdown-header text-uppercase text-primary-light d-none d-lg-block">
                                                        Services
                                                </h6>

                                                    <a className="d-flex text-decoration-none" href="./coworking.html">

                                                        <div className="icon icon-sm text-primary-light">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M5.133 2.036c6.945 3.876 9.445 8.206 7.5 12.99-4.97-.79-7.47-5.12-7.5-12.99z" fill="#335EEA" opacity=".3" /><path d="M18.742 2.036c-6.945 3.876-9.445 8.206-7.5 12.99 4.97-.79 7.47-5.12 7.5-12.99z" fill="#335EEA" opacity=".3" /><path d="M12 1c-4.076 6.83-4.076 11.83 0 15 3.91-3.17 3.91-8.17 0-15z" fill="#335EEA" opacity=".3" /><path d="M6.344 13h11.312a1 1 0 01.958 1.287l-2.186 7.288A2 2 0 0114.512 23H9.488a2 2 0 01-1.916-1.425l-2.186-7.288A1 1 0 016.344 13z" fill="#335EEA" /></g></svg>
                                                        </div>

                                                        <div className="ml-3">

                                                            <p className="font-weight-bold text-white mb-0">
                                                                Coworking
                                                        </p>

                                                            <span className="text-gray-500">
                                                                Minimal, image-focused content
                                                        </span>

                                                        </div>

                                                    </a>
                                                    <a className="d-flex text-decoration-none mt-4" href="./hiring-agency.html">

                                                        <div className="icon icon-sm text-primary-light">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M12 11a4 4 0 110-8 4 4 0 010 8z" fill="#335EEA" opacity=".3" /><path d="M3 20.2c.388-4.773 4.262-7.2 8.983-7.2 4.788 0 8.722 2.293 9.015 7.2.012.195 0 .8-.751.8H3.727c-.25 0-.747-.54-.726-.8z" fill="#335EEA" /></g></svg>
                                                        </div>

                                                        <div className="ml-3">

                                                            <p className="font-weight-bold text-white mb-0">
                                                                Hiring Platform
                                                        </p>

                                                            <span className="text-gray-500">
                                                                A hiring service platform
                                                        </span>

                                                        </div>

                                                    </a>
                                                    <a className="d-flex text-decoration-none mt-4" href="./course.html">


                                                        <div className="icon icon-sm text-primary-light">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2zm-.5 2a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-12 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-12 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm0 4a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zm-12 0a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z" fill="#335EEA" opacity=".3" /><path d="M11.352 14.572l2.605-1.78a.5.5 0 00.001-.825l-2.605-1.792a.5.5 0 00-.783.412v3.572a.5.5 0 00.782.413z" fill="#335EEA" /></g></svg>
                                                        </div>

                                                        <div className="ml-3">

                                                            <p className="font-weight-bold text-white mb-0">
                                                                Course
                                                    </p>

                                                            <span className="text-gray-500">
                                                                React programming course
                            </span>

                                                        </div>

                                                    </a>
                                                    <a className="d-flex text-decoration-none mt-4" href="./software-automation.html">


                                                        <div className="icon icon-sm text-primary-light">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M8 7a1 1 0 110-2h8a4 4 0 110 8H8a2 2 0 100 4h9a1 1 0 010 2H8a4 4 0 110-8h8a2 2 0 100-4H8z" fill="#335EEA" opacity=".3" /><path d="M9.707 8.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 1.414L7.414 6l2.293 2.293zM14.293 20.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L16.586 18l-2.293 2.293z" fill="#335EEA" /></g></svg>
                                                        </div>

                                                        <div className="ml-3">


                                                            <p className="font-weight-bold text-white mb-0">
                                                                Automated Integrations
                            </p>


                                                            <span className="text-gray-500">
                                                                Digital integration software
                            </span>

                                                        </div>

                                                    </a>

                                                </div>
                                            </div>
                                            <div className="col-md-6 order-0 dropdown-menu-col">
                                                <div className="dropdown-menu-body">


                                                    <h6 className="dropdown-header text-uppercase d-none d-lg-block">
                                                        Software
                        </h6>


                                                    <a className="d-flex text-decoration-none text-reset" href="./robo-advisor.html">


                                                        <div className="icon icon-sm text-primary-light">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" fill="#335EEA" opacity=".3" /><path d="M18.5 11h-13A1.5 1.5 0 004 12.5v.5h4.586a1 1 0 01.707.293l1 1a2.414 2.414 0 003.414 0l1-1a1 1 0 01.707-.293H20v-.5a1.5 1.5 0 00-1.5-1.5zM5.5 6A1.5 1.5 0 004 7.5V8h16v-.5A1.5 1.5 0 0018.5 6h-13z" fill="#335EEA" /></g></svg>
                                                        </div>

                                                        <div className="ml-3">


                                                            <p className="font-weight-bold mb-0">
                                                                Robo Advisor
                            </p>


                                                            <span className="text-muted">
                                                                A simple and professional layout
                            </span>

                                                        </div>

                                                    </a>
                                                    <a className="d-flex text-decoration-none text-reset mt-4" href="./analytics-saas.html">


                                                        <div className="icon icon-sm text-primary-light">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M4.002 12.2L13 14V4.062A8.001 8.001 0 0112 20a8 8 0 01-7.998-7.8z" fill="#335EEA" opacity=".3" /><path d="M3.06 10.012A8.001 8.001 0 0111 3v8.6l-7.94-1.588z" fill="#335EEA" /></g></svg>
                                                        </div>

                                                        <div className="ml-3">


                                                            <p className="font-weight-bold mb-0">
                                                                Analytics SaaS
                            </p>


                                                            <span className="text-muted">
                                                                UI-heavy product example
                            </span>

                                                        </div>

                                                    </a>
                                                    <a className="d-flex text-decoration-none text-reset mt-4" href="./e-commerce-platform.html">


                                                        <div className="icon icon-sm text-primary-light">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M18.145 11.844l-.698 4.185a1 1 0 01-1.165.82L4.913 14.78a1 1 0 01-.783-.709L2.306 7.685a1 1 0 01.961-1.275h13.726l.613-2.627a1.18 1.18 0 011.15-.912h2.064a1.18 1.18 0 110 2.36h-1.128l-1.547 6.613z" fill="#335EEA" opacity=".3" /><path d="M6.5 21a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#335EEA" /></g></svg>
                                                        </div>

                                                        <div className="ml-3">


                                                            <p className="font-weight-bold mb-0">
                                                                E-Commerce Platform
                            </p>


                                                            <span className="text-muted">
                                                                SaaS for sales of goods
                            </span>

                                                        </div>

                                                    </a>
                                                    <a className="d-flex text-decoration-none text-reset mt-4" href="./mobile-chat-app.html">


                                                        <div className="icon icon-sm text-primary-light">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M7.139 4v15h9.722V4H7.14zm.694-3h8.334c1.406 0 2.083.981 2.083 2.5v17c0 1.519-.677 2.5-2.083 2.5H7.833c-1.406 0-2.083-.981-2.083-2.5v-17c0-1.519.677-2.5 2.083-2.5z" fill="#335EEA" /><path fill="#335EEA" opacity=".3" d="M7 4v15h10V4z" /><circle fill="#335EEA" cx="12" cy="21" r="1" /></g></svg>
                                                        </div>

                                                        <div className="ml-3">


                                                            <p className="font-weight-bold mb-0">
                                                                Mobile Apps
                            </p>


                                                            <span className="text-muted">
                                                                Minimal layout for mobile apps
                            </span>

                                                        </div>

                                                    </a>

                                                </div>
                                                <div className="dropdown-menu-footer align-items-center d-none d-lg-flex">


                                                    <span>Sans Serif Headers</span>


                                                    <form className="ml-auto mr-n3">
                                                        <div className="custom-control custom-switch">
                                                            <input type="checkbox" className="custom-control-input family-switch" id="familySwitch" onchange="switchFamily(this.checked)" />
                                                            <label className="custom-control-label" for="familySwitch"></label>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="pagesDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Pages
              </a>
                                <div className="dropdown-positioner">
                                    <div className="dropdown-menu dropdown-menu-lg" aria-labelledby="pagesDropdown">
                                        <div className="row no-gutters">
                                            <div className="col">


                                                <h6 className="dropdown-header text-uppercase mb-3">
                                                    Company
                      </h6>


                                                <a className="dropdown-item" href="./about.html">
                                                    About
                      </a>
                                                <a className="dropdown-item" href="./pricing.html">
                                                    Pricing
                      </a>
                                                <a className="dropdown-item" href="./pricing-feature-list.html">
                                                    Pricing Table
                      </a>
                                                <a className="dropdown-item" href="./career-listing.html">
                                                    Careers
                      </a>
                                                <a className="dropdown-item" href="./career-benefits.html">
                                                    Job benefits
                      </a>
                                                <a className="dropdown-item" href="./contact.html">
                                                    Contact
                      </a>
                                                <a className="dropdown-item" href="./faq.html">
                                                    FAQ
                      </a><a className="dropdown-item" href="./terms.html">
                                                    Terms
                      </a>

                                            </div>
                                            <div className="col">


                                                <h6 className="dropdown-header text-uppercase mb-3">
                                                    Blog
                      </h6>


                                                <a className="dropdown-item" href="./blog-listing.html">
                                                    Listing
                      </a>
                                                <a className="dropdown-item" href="./blog-post.html">
                                                    Article
                      </a>
                                                <a className="dropdown-item" href="./blog-post-cover.html">
                                                    Cover Article</a>


                                                <h6 className="dropdown-header text-uppercase mb-3">
                                                    Help Center</h6>
                                                <a className="dropdown-item" href="./help-center.html">
                                                    Overview</a>
                                                <a className="dropdown-item" href="./help-center-article.html">
                                                    Article</a>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </li>
                        </ul>


                        <a className="navbar-brand d-none d-lg-block px-lg-6" href="./index.html">Goodkit</a>


                        <ul className="navbar-nav justify-content-start w-100">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="accountDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Account</a>
                                <div className="dropdown-positioner">
                                    <ul className="dropdown-menu" aria-labelledby="accountDropdown">
                                        <li className="dropdown-item dropright">
                                            <a className="dropdown-link dropdown-toggle" id="signInDropright" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sign In</a>
                                            <div className="dropdown-positioner">
                                                <div className="dropdown-menu dropdown-menu-auto" aria-labelledby="signInDropright">
                                                    <a className="dropdown-item" href="./sign-in-cover.html">
                                                        Cover</a>
                                                    <a className="dropdown-item" href="./sign-in.html">
                                                        Simple</a>
                                                    <a className="dropdown-item" data-toggle="modal" href="#modalSignIn">
                                                        Modal</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown-item dropright">
                                            <a className="dropdown-link dropdown-toggle" id="signUpDropright" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Sign Up</a>
                                            <div className="dropdown-positioner">
                                                <div className="dropdown-menu dropdown-menu-auto" aria-labelledby="signUpDropright">
                                                    <a className="dropdown-item" href="./sign-up-cover.html">
                                                        Cover</a>
                                                    <a className="dropdown-item" href="./sign-up.html">
                                                        Simple</a>
                                                    <a className="dropdown-item" data-toggle="modal" href="#modalSignUp">
                                                        Modal</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown-item dropright">
                                            <a className="dropdown-link dropdown-toggle" id="passwordResetDropright" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Password Reset</a>
                                            <div className="dropdown-positioner">
                                                <div className="dropdown-menu dropdown-menu-auto" aria-labelledby="passwordResetDropright">
                                                    <a className="dropdown-item" href="./password-reset-cover.html">
                                                        Cover</a>
                                                    <a className="dropdown-item" href="./password-reset.html">
                                                        Simple</a>
                                                    <a className="dropdown-item" data-toggle="modal" href="#modalPasswordReset">
                                                        Modal</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="dropdown-item dropright">
                                            <a className="dropdown-link dropdown-toggle" id="errorsDropright" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Errors</a>
                                            <div className="dropdown-positioner">
                                                <div className="dropdown-menu dropdown-menu-auto" aria-labelledby="errorsDropright">
                                                    <a className="dropdown-item" href="./error-cover.html">
                                                        Cover</a>
                                                    <a className="dropdown-item" href="./error.html">
                                                        Simple
                                                </a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="docsDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Docs
                            </a>
                                <div className="dropdown-positioner">
                                    <div className="dropdown-menu dropdown-menu-lg" aria-labelledby="docsDropdown">
                                        <a className="d-flex align-items-center text-reset text-decoration-none" href="./docs/index.html">


                                            <div className="icon text-primary-light">
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M8 3v.5A1.5 1.5 0 009.5 5h5A1.5 1.5 0 0016 3.5V3h2a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h2z" fill="#335EEA" opacity=".3" /><path d="M11 2a1 1 0 012 0h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-1a.5.5 0 01.5-.5H11z" fill="#335EEA" /><rect fill="#335EEA" opacity=".3" x="7" y="10" width="5" height="2" rx="1" /><rect fill="#335EEA" opacity=".3" x="7" y="14" width="9" height="2" rx="1" /></g></svg>
                                            </div>

                                            <div className="ml-3">


                                                <h6 className="text-uppercase text-primary mb-0">
                                                    Documentation
                                            </h6>


                                                <span>Compiling and building.</span>

                                            </div>

                                        </a>
                                        <a className="d-flex align-items-center text-reset text-decoration-none mt-5" href="./docs/alerts.html">


                                            <div className="icon text-primary-light">
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M5.5 4h4A1.5 1.5 0 0111 5.5v1A1.5 1.5 0 019.5 8h-4A1.5 1.5 0 014 6.5v-1A1.5 1.5 0 015.5 4zm9 12h4a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-1a1.5 1.5 0 011.5-1.5z" fill="#335EEA" /><path d="M5.5 10h4a1.5 1.5 0 011.5 1.5v7A1.5 1.5 0 019.5 20h-4A1.5 1.5 0 014 18.5v-7A1.5 1.5 0 015.5 10zm9-6h4A1.5 1.5 0 0120 5.5v7a1.5 1.5 0 01-1.5 1.5h-4a1.5 1.5 0 01-1.5-1.5v-7A1.5 1.5 0 0114.5 4z" fill="#335EEA" opacity=".3" /></g></svg>
                                            </div>

                                            <div className="ml-3">


                                                <h6 className="text-uppercase text-primary mb-0">
                                                    Components
                                            </h6>


                                                <span>Full list of pieces in the theme</span>

                                            </div>

                                        </a>
                                        <a className="d-flex align-items-center text-reset text-decoration-none mt-5" href="./docs/changelog.html">


                                            <div className="icon text-primary-light">
                                                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path d="M0 0h24v24H0z" /><path d="M5.857 2h7.88a1.5 1.5 0 01.968.355l4.764 4.029A1.5 1.5 0 0120 7.529v12.554c0 1.79-.02 1.917-1.857 1.917H5.857C4.02 22 4 21.874 4 20.083V3.917C4 2.127 4.02 2 5.857 2z" fill="#335EEA" opacity=".3" /><rect fill="#335EEA" x="6" y="11" width="9" height="2" rx="1" /><rect fill="#335EEA" x="6" y="15" width="5" height="2" rx="1" /></g></svg>
                                            </div>

                                            <div className="ml-3">


                                                <h6 className="text-uppercase text-primary mb-0">
                                                    Changelog
                                            </h6>


                                                <span>This is the new version</span>

                                            </div>

                                        </a>
                                    </div>

                                </div>
                            </li>
                            <li className="nav-item d-lg-none">
                                <div className="nav-link">

                                    <span>
                                        Sans Serif Headers
                                </span>

                                    <form className="ml-auto mr-n3">
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" className="custom-control-input family-switch" id="familySwitchMobile" onchange="switchFamily(this.checked)" />
                                            <label className="custom-control-label" for="familySwitchMobile"></label>
                                        </div>
                                    </form>

                                </div>
                            </li>
                        </ul>

                    </div>

                </div>
            </nav>
        </>
    )
}

Header.propTypes = {

}

export default Header


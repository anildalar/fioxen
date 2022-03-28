import React from 'react'
import Master from '../Layouts/Master'

export default function Home() {
  return (
    <Master>
        <section className="hero-area">
            <div className="hero-wrapper-one">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="hero-content">
                    <h1>Dream Explore
                        Discover</h1>
                    <h3>People Don’t Take,Trips Take People</h3>
                    <div className="hero-search-wrapper">
                        <form>
                        <div className="row">
                            <div className="col-lg-5 col-md-4 col-sm-12">
                            <div className="form_group">
                                <input type="search" className="form_control" placeholder="Search By Category" name="search" required />
                                <i className="ti-ink-pen" />
                            </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="form_group">
                                <input type="text" className="form_control" placeholder="Location" name="location" required />
                                <i className="ti-location-pin" />
                            </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-12">
                            <div className="form_group">
                                <button className="main-btn icon-btn">Search Now</button>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                    <p className="tags"><span>Popular:</span><a href="#">Saloon</a>,<a href="#">Restaurant</a>,<a href="#">Game</a>,<a href="#">Counter</a>,<a href="#">Train Station</a>,<a href="#">Parking</a>,<a href="#">Shooping</a></p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="category-area">
            <div className="container">
            <div className="category-wrapper-one">
                <div className="row no-gutters">
                <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                    <div className="info text-center">
                        <div className="icon">
                        <i className="flaticon-government" />
                        </div>
                        <h6>Museums</h6>
                    </div>
                    <a href="index.html" className="category-btn"><i className="ti-arrow-right" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                    <div className="info text-center">
                        <div className="icon">
                        <i className="flaticon-serving-dish" />
                        </div>
                        <h6>Restaurant</h6>
                    </div>
                    <a href="index.html" className="category-btn"><i className="ti-arrow-right" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                    <div className="info text-center">
                        <div className="icon">
                        <i className="flaticon-game-controller" />
                        </div>
                        <h6>Game Field</h6>
                    </div>
                    <a href="index.html" className="category-btn"><i className="ti-arrow-right" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                    <div className="info text-center">
                        <div className="icon">
                        <i className="flaticon-suitcase" />
                        </div>
                        <h6>Job &amp; Feed</h6>
                    </div>
                    <a href="index.html" className="category-btn"><i className="ti-arrow-right" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                    <div className="info text-center">
                        <div className="icon">
                        <i className="flaticon-gift-box" />
                        </div>
                        <h6>Party Center</h6>
                    </div>
                    <a href="index.html" className="category-btn"><i className="ti-arrow-right" /></a>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 category-column">
                    <div className="category-item category-item-one">
                    <div className="info text-center">
                        <div className="icon">
                        <i className="flaticon-dumbbell" />
                        </div>
                        <h6>Fitness Zone</h6>
                    </div>
                    <a href="index.html" className="category-btn"><i className="ti-arrow-right" /></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="listing-grid-area pt-115 pb-75">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="section-title text-center mb-75">
                    <span className="sub-title">Featured List</span>
                    <h2>Explore Destination</h2>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="listing-item listing-grid-one mb-45">
                    <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-1.jpg" alt="Listing Image" />
                    <span className="featured-btn">Featured</span>
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                            <i className="flaticon-chef" />
                        </div>
                        <div className="title">
                            <h6>Restaurant</h6>
                        </div>
                        </div>
                        <span className="status st-open">Open</span>
                    </div>
                    </div>
                    <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">Food Corner</a></h3>
                    <div className="ratings">
                        <ul className="ratings ratings-three">
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li><span><a href="#">(02 Reviews)</a></span></li>
                        </ul>
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a></span>
                    <div className="listing-meta">
                        <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="listing-item listing-grid-one mb-45">
                    <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-2.jpg" alt="Listing Image" />
                    <span className="featured-btn">Featured</span>
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                            <i className="flaticon-government" />
                        </div>
                        <div className="title">
                            <h6>Museums</h6>
                        </div>
                        </div>
                        <span className="status st-open">Open</span>
                    </div>
                    </div>
                    <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">Central History</a></h3>
                    <div className="ratings">
                        <ul className="ratings ratings-three">
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li><span><a href="#">(02 Reviews)</a></span></li>
                        </ul>
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a></span>
                    <div className="listing-meta">
                        <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="listing-item listing-grid-one mb-45">
                    <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-3.jpg" alt="Listing Image" />
                    <span className="featured-btn">Fitness</span>
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                            <i className="flaticon-dumbbell" />
                        </div>
                        <div className="title">
                            <h6>Fitness</h6>
                        </div>
                        </div>
                        <span className="status st-close">Close</span>
                    </div>
                    </div>
                    <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">Xtream Gym</a></h3>
                    <div className="ratings">
                        <ul className="ratings ratings-three">
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li><span><a href="#">(02 Reviews)</a></span></li>
                        </ul>
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a></span>
                    <div className="listing-meta">
                        <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="listing-item listing-grid-one mb-45">
                    <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-4.jpg" alt="Listing Image" />
                    <span className="featured-btn">Featured</span>
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                            <i className="flaticon-suitcase" />
                        </div>
                        <div className="title">
                            <h6>Job &amp; Feed</h6>
                        </div>
                        </div>
                        <span className="status st-open">Open</span>
                    </div>
                    </div>
                    <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">Mega Agency</a></h3>
                    <div className="ratings">
                        <ul className="ratings ratings-three">
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li><span><a href="#">(02 Reviews)</a></span></li>
                        </ul>
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a></span>
                    <div className="listing-meta">
                        <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="listing-item listing-grid-one mb-45">
                    <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-5.jpg" alt="Listing Image" />
                    <span className="featured-btn">Featured</span>
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                            <i className="flaticon-shopping" />
                        </div>
                        <div className="title">
                            <h6>Central Plaza</h6>
                        </div>
                        </div>
                        <span className="status st-close">Close</span>
                    </div>
                    </div>
                    <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">Central Plaza</a></h3>
                    <div className="ratings">
                        <ul className="ratings ratings-three">
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li><span><a href="#">(02 Reviews)</a></span></li>
                        </ul>
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a></span>
                    <div className="listing-meta">
                        <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="listing-item listing-grid-one mb-45">
                    <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-6.jpg" alt="Listing Image" />
                    <span className="featured-btn">Featured</span>
                    <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                        <div className="icon">
                            <i className="flaticon-color-palette" />
                        </div>
                        <div className="title">
                            <h6>Art Gallery</h6>
                        </div>
                        </div>
                        <span className="status st-open">Open</span>
                    </div>
                    </div>
                    <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">National Art</a></h3>
                    <div className="ratings">
                        <ul className="ratings ratings-three">
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li className="star"><i className="flaticon-star-1" /></li>
                        <li><span><a href="#">(02 Reviews)</a></span></li>
                        </ul>
                    </div>
                    <span className="price">$05.00 - $80.00</span>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a></span>
                    <div className="listing-meta">
                        <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="cta-area">
            <div className="cta-wrapper-one bg_cover" style={{backgroundImage: 'url(assets/images/bg/cta-bg-1.jpg)'}}>
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="cta-content-box text-center">
                    <img src="assets/images/icon-1.png" alt="offer icon" />
                    <h2>Splash Yourself Bigger
                        Offer on Everyday</h2>
                    <a href="how-work.html" className="main-btn icon-btn">Explore Now</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>

        <section className="features-area">
            <div className="features-wrapper-one pt-120">
            <div className="container">
                <div className="row">
                <div className="col-lg-6">
                    <div className="features-img">
                    <img src="assets/images/features/features-1.jpg" alt="Features Image" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="features-content-box features-content-box-one">
                    <div className="section-title section-title-left mb-25">
                        <span className="sub-title">Our Speciality</span>
                        <h2>Comprehnsive All Great
                        Destination Here</h2>
                    </div>
                    <h5>Risus urnas Iaculis per amet vestibulum luctus.tincidunt ultricies aenean
                        quam eros eleifend sodales cubilia mattis quam.</h5>
                    <ul className="features-list-one">
                        <li className="list-item">
                        <div className="icon">
                            <i className="flaticon-find" />
                        </div>
                        <div className="content">
                            <h5>Find What You Want</h5>
                            <p>Rhoncus dolor quam etiam mattis, tincidunt nec lobortis sociis
                            facilisi aenean netus tempor duis.</p>
                        </div>
                        </li>
                        <li className="list-item">
                        <div className="icon">
                            <i className="flaticon-place" />
                        </div>
                        <div className="content">
                            <h5>Easy Choose Your Place</h5>
                            <p>Rhoncus dolor quam etiam mattis, tincidunt nec lobortis sociis
                            facilisi aenean netus tempor duis.</p>
                        </div>
                        </li>
                        <li className="list-item">
                        <div className="icon">
                            <i className="flaticon-social-care" />
                        </div>
                        <div className="content">
                            <h5>Live Online Assistance</h5>
                            <p>Rhoncus dolor quam etiam mattis, tincidunt nec lobortis sociis
                            facilisi aenean netus tempor duis.</p>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="place-area pt-115 pb-110">
            <div className="container-fluid place-container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                    <span className="sub-title">Feature Places</span>
                    <h2>Explore By Destination</h2>
                </div>
                </div>
            </div>
            <div className="place-slider-one">
                <div className="place-item place-item-one">
                <div className="place-thumbnail">
                    <img src="assets/images/place/place-1.jpg" alt="Place Image" />
                    <div className="place-overlay">
                    <div className="place-content text-center">
                        <span className="listing">10 Listing</span>
                        <h3 className="title">Australia</h3>
                        <a href="listing-grid.html" className="arrow-btn"><i className="ti-arrow-right" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="place-item place-item-one">
                <div className="place-thumbnail">
                    <img src="assets/images/place/place-2.jpg" alt="Place Image" />
                    <div className="place-overlay">
                    <div className="place-content text-center">
                        <span className="listing">10 Listing</span>
                        <h3 className="title">Australia</h3>
                        <a href="listing-grid.html" className="arrow-btn"><i className="ti-arrow-right" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="place-item place-item-one">
                <div className="place-thumbnail">
                    <img src="assets/images/place/place-3.jpg" alt="Place Image" />
                    <div className="place-overlay">
                    <div className="place-content text-center">
                        <span className="listing">10 Listing</span>
                        <h3 className="title">Australia</h3>
                        <a href="listing-grid.html" className="arrow-btn"><i className="ti-arrow-right" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="place-item place-item-one">
                <div className="place-thumbnail">
                    <img src="assets/images/place/place-4.jpg" alt="Place Image" />
                    <div className="place-overlay">
                    <div className="place-content text-center">
                        <span className="listing">10 Listing</span>
                        <h3 className="title">Australia</h3>
                        <a href="listing-grid.html" className="arrow-btn"><i className="ti-arrow-right" /></a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="place-item place-item-one">
                <div className="place-thumbnail">
                    <img src="assets/images/place/place-2.jpg" alt="Place Image" />
                    <div className="place-overlay">
                    <div className="place-content text-center">
                        <span className="listing">10 Listing</span>
                        <h3 className="title">Australia</h3>
                        <a href="listing-grid.html" className="arrow-btn"><i className="ti-arrow-right" /></a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="download-app">
            <div className="download-wrapper-one pt-115">
            <div className="container">
                <div className="row">
                <div className="col-lg-5">
                    <div className="app-img">
                    <img src="assets/images/app-1.png" alt="App Image" />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="download-content-box download-content-box-one">
                    <div className="section-title section-title-left mb-25">
                        <span className="sub-title">Downlaod App</span>
                        <h2>Comprehnsive All Great
                        Destination Here</h2>
                    </div>
                    <p>Dictumst integer tellus eros quam vestibulum ante tortor mollis adipisn pharetra curae curae and pulvinar porttitor</p>
                    <ul className="button">
                        <li>
                        <a href="index.html" className="app-btn">
                            <div className="icon">
                            <i className="ti-android" />
                            </div>
                            <div className="info">
                            <span>get it on</span>
                            <h6>Goole Play</h6>
                            </div>
                        </a>
                        </li>
                        <li>
                        <a href="index.html" className="app-btn">
                            <div className="icon">
                            <i className="ti-apple" />
                            </div>
                            <div className="info">
                            <span>get it on</span>
                            <h6>App Store</h6>
                            </div>
                        </a>
                        </li>
                    </ul>
                    <div className="counter-area pt-120">
                        <div className="row">
                        <div className="col-lg-4 col-md-4 col-ms-12">
                            <div className="counter-item counter-item-one">
                            <div className="info">
                                <h4><span>Member</span>Professional</h4>
                                <h3><span className="count">220</span> +</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-ms-12">
                            <div className="counter-item counter-item-one">
                            <div className="info">
                                <h4><span>Listing</span>Received</h4>
                                <h3><span className="count">72</span>K +</h3>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-ms-12">
                            <div className="counter-item counter-item-one">
                            <div className="info">
                                <h4><span>Client</span>Satisfaction</h4>
                                <h3><span className="count">50</span>K +</h3>
                            </div>
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
        
        <section className="listing-grid-area pt-75 pb-110">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                <div className="section-title text-center mb-60">
                    <span className="sub-title">Featured List</span>
                    <h2>Explore Destination</h2>
                </div>
                </div>
            </div>
            <div className="listing-slider-one">
                <div className="listing-item listing-grid-item-two">
                <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-7.jpg" alt="Listing Image" />
                    <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                    <span className="featured-btn">Featured</span>
                    <ul className="ratings ratings-four">
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li><span><a href="#">(02 Reviews)</a></span></li>
                    </ul>
                </div>
                <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                    <p>Popular restaurant in california</p>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                    <div className="listing-meta">
                    <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="listing-item listing-grid-item-two">
                <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-8.jpg" alt="Listing Image" />
                    <a href="#" className="cat-btn"><i className="flaticon-dumbbell" /></a>
                    <ul className="ratings ratings-three">
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li><span><a href="#">(02 Reviews)</a></span></li>
                    </ul>
                </div>
                <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">Gym Ground</a></h3>
                    <p>Popular restaurant in california</p>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-close">close</span></span>
                    <div className="listing-meta">
                    <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="listing-item listing-grid-item-two">
                <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-9.jpg" alt="Listing Image" />
                    <a href="#" className="cat-btn"><i className="flaticon-government" /></a>
                    <span className="featured-btn">Featured</span>
                    <ul className="ratings ratings-five">
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li><span><a href="#">(02 Reviews)</a></span></li>
                    </ul>
                </div>
                <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">City Palace</a></h3>
                    <p>Popular restaurant in california</p>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                    <div className="listing-meta">
                    <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                    </ul>
                    </div>
                </div>
                </div>
                <div className="listing-item listing-grid-item-two">
                <div className="listing-thumbnail">
                    <img src="assets/images/listing/listing-grid-1.jpg" alt="Listing Image" />
                    <a href="#" className="cat-btn"><i className="flaticon-chef" /></a>
                    <span className="featured-btn">Featured</span>
                    <ul className="ratings ratings-two">
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li className="star"><i className="flaticon-star-1" /></li>
                    <li><span><a href="#">(02 Reviews)</a></span></li>
                    </ul>
                </div>
                <div className="listing-content">
                    <h3 className="title"><a href="listing-details-1.html">Pizza Recipe</a></h3>
                    <p>Popular restaurant in california</p>
                    <span className="phone-meta"><i className="ti-tablet" /><a href="tel:+982653652-05">+98 (265) 3652 - 05</a><span className="status st-open">Open</span></span>
                    <div className="listing-meta">
                    <ul>
                        <li><span><i className="ti-location-pin" />California, USA</span></li>
                        <li><span><i className="ti-heart" /><a href="#">Save</a></span></li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="intro-video">
            <div className="intro-wrapper-one bg_cover pt-115" style={{backgroundImage: 'url(assets/images/bg/video-bg-1.jpg)'}}>
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="play-content play-content-one text-center">
                    <a href="https://www.youtube.com/watch?v=lJyzByVH1oQ" className="video-popup"><i className="flaticon-play-button" /></a>
                    <h5>Play Video</h5>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="intro-content-box intro-content-box-one">
                    <div className="section-title section-title-left section-title-white mb-35">
                        <span className="sub-title">Checkout List</span>
                        <h2>Professional planners
                        for your vacation</h2>
                    </div>
                    <p>Risus urnas Iaculis per amet vestibulum luctus tincidunt ultricies aenean
                        quam eros eleifend sodales cubilia mattis quam.</p>
                    <a href="listing-grid.html" className="main-btn icon-btn">Explore List</a>
                    </div>
                </div>
                </div>
            </div>
            </div>  
        </section>
        
        <section className="newsletter-area">
            <div className="container">
            <div className="newsletter-wrapper newsletter-wrapper-one bg_cover" style={{backgroundImage: 'url(assets/images/bg/newsletter-bg-1.jpg)'}}>
                <div className="row">
                <div className="col-lg-5">
                    <div className="newsletter-content-box-one">
                    <div className="icon">
                        <i className="flaticon-email" />
                    </div>
                    <div className="content">
                        <h2>Get Special
                        Rewards</h2>
                    </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="newsletter-form">
                    <div className="form_group">
                        <input type="email" className="form_control" placeholder="Enter Address" name="email" required />
                        <i className="ti-location-pin" />
                        <button className="main-btn">Subscribe +</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="client-area pt-120">
            <div className="client-wrapper-one pb-120">
            <div className="container">
                <div className="client-slider-one">
                <div className="client-item">
                    <div className="client-img">
                    <a href="#"><img src="assets/images/client/01.png" alt="Client Image" /></a>
                    </div>
                </div>
                <div className="client-item">
                    <div className="client-img">
                    <a href="#"><img src="assets/images/client/02.png" alt="Client Image" /></a>
                    </div>
                </div>
                <div className="client-item">
                    <div className="client-img">
                    <a href="#"><img src="assets/images/client/03.png" alt="Client Image" /></a>
                    </div>
                </div>
                <div className="client-item">
                    <div className="client-img">
                    <a href="#"><img src="assets/images/client/04.png" alt="Client Image" /></a>
                    </div>
                </div>
                <div className="client-item">
                    <div className="client-img">
                    <a href="#"><img src="assets/images/client/02.png" alt="Client Image" /></a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="blog-area pt-115 pb-120">
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                <div className="section-title text-center mb-60">
                    <span className="sub-title">Recent Articles</span>
                    <h2>Every Single Journal</h2>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-item blog-post-item-one mb-40">
                    <div className="post-thumbnail">
                    <a href="blog-details.html"><img src="assets/images/blog/blog-1.jpg" alt="Blog Image" /></a>
                    <div className="post-date"><a href="#">20 <span>Oct</span></a></div>
                    </div>
                    <div className="entry-content">
                    <a href="#" className="cat-btn"><i className="ti-bookmark-alt" />Tours &amp; Travel</a>
                    <h3 className="title"><a href="blog-details.html">Duis nonummy socios mattis
                        tempus penatibus</a></h3>
                    <div className="post-meta">
                        <ul>
                        <li><span><i className="ti-comments-smiley" /><a href="#">0 Comment</a></span></li>
                        <li><span><i className="ti-id-badge" /><a href="#">By admin</a></span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-item blog-post-item-one mb-40">
                    <div className="post-thumbnail">
                    <a href="blog-details.html"><img src="assets/images/blog/blog-2.jpg" alt="Blog Image" /></a>
                    <div className="post-date"><a href="#">20 <span>Oct</span></a></div>
                    </div>
                    <div className="entry-content">
                    <a href="#" className="cat-btn"><i className="ti-bookmark-alt" />Tours &amp; Travel</a>
                    <h3 className="title"><a href="blog-details.html">Litora phasellus in phasellus
                        curabitur porta eun</a></h3>
                    <div className="post-meta">
                        <ul>
                        <li><span><i className="ti-comments-smiley" /><a href="#">0 Comment</a></span></li>
                        <li><span><i className="ti-id-badge" /><a href="#">By admin</a></span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="blog-post-item blog-post-item-one mb-40">
                    <div className="post-thumbnail">
                    <a href="blog-details.html"><img src="assets/images/blog/blog-3.jpg" alt="Blog Image" /></a>
                    <div className="post-date"><a href="#">20 <span>Oct</span></a></div>
                    </div>
                    <div className="entry-content">
                    <a href="#" className="cat-btn"><i className="ti-bookmark-alt" /> Tours &amp; Travel</a>
                    <h3 className="title"><a href="blog-details.html">Mattis parturent tortor lectus
                        lestie sapien Dapus</a></h3>
                    <div className="post-meta">
                        <ul>
                        <li><span><i className="ti-comments-smiley" /><a href="#">0 Comment</a></span></li>
                        <li><span><i className="ti-id-badge" /><a href="#">By admin</a></span></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <div className="button text-center mt-40">
                    <a href="blog.html" className="main-btn icon-btn">View Blog</a>
                </div>
                </div>
            </div>
            </div>
        </section>
    </Master>
  )
}

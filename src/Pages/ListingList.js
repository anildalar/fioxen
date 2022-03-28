import React from 'react'
import Master from '../Layouts/Master'

export default function ListingList() {
  return (
    <Master>
        <section className="hero-area">
            <div className="breadcrumbs-wrapper">
            <div className="container">
                <div className="row">
                <div className="col-lg-8">
                    <div className="page-title">
                    <h1 className="title">List Layout</h1>
                    <ul className="breadcrumbs-link">
                        <li><a href="index.html">Home</a></li>
                        <li className="active">List Layout</li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
        
        <section className="listing-list-area pt-120 pb-90">
            <div className="container">
            <div className="row">
                <div className="col-lg-4">
                <div className="sidebar-widget-area">
                    <div className="widget search-listing-widget mb-30">
                    <h4 className="widget-title">Filter Search</h4>
                    <form>
                        <div className="search-form">
                        <div className="form_group">
                            <input type="search" className="form_control" placeholder="Search keyword" name="search" required />
                            <i className="ti-search" />
                        </div>
                        <div className="form_group">
                            <select className="wide">
                            <option data-dsplay="Category">Category</option>
                            <option value="">Museums</option>
                            <option value="">Restaurant</option>
                            <option value="">Party Center</option>
                            <option value="">Fitness Zone</option>
                            <option value="">Game Field</option>
                            <option value="">Job &amp; Feeds</option>
                            <option value="">Shooping</option>
                            <option value="">Art Gallery</option>
                            </select>
                        </div>
                        <div className="form_group">
                            <select className="wide">
                            <option data-dsplay="Location">Location</option>
                            <option value="">Dhaka</option>
                            <option value="">Delhi</option>
                            <option value="">lahore</option>
                            <option value="">Rome</option>
                            <option value="">New york</option>
                            <option value="">Pris</option>
                            <option value="">Bern</option>
                            <option value="">Bangkok</option>
                            </select>
                        </div>
                        <div className="form_group">
                            <select className="wide">
                            <option data-dsplay="By Country">By Country</option>
                            <option value="">Bangladesh</option>
                            <option value="">India</option>
                            <option value="">Pakistan</option>
                            <option value="">Italy</option>
                            <option value="">America</option>
                            <option value="">London</option>
                            <option value="">Swizerland</option>
                            <option value="">Thailand</option>
                            </select>
                        </div>
                        <div className="form_group">
                            <select className="wide">
                            <option data-dsplay="By place">By place</option>
                            <option value="">Dhaka</option>
                            <option value="">Delhi</option>
                            <option value="">lahore</option>
                            <option value="">Rome</option>
                            <option value="">New york</option>
                            <option value="">Pris</option>
                            <option value="">Bern</option>
                            <option value="">Bangkok</option>
                            </select>
                        </div>
                        </div>
                        <div className="price-range-widget">
                        <h4 className="widget-title">Around Distance: 50 km</h4>
                        <div id="slider-range" className="mb-20" />
                        <div className="price-number">
                            <span className="amount"><input type="text" id="amount" /></span>
                        </div>
                        <select className="wide">
                            <option data-dsplay="Default price">Default price</option>
                            <option value="">$10-$30</option>
                            <option value="">$30-$70</option>
                            <option value="">$70-$100</option>
                            <option value="">$100-$130</option>
                            <option value="">$130-$150</option>
                        </select>
                        </div>
                        <div className="form_group">
                        <button className="main-btn icon-btn">Search Now</button>
                        </div>
                    </form>
                    </div>
                    <div className="widget newsletter-widget mb-30">
                    <div className="newsletter-widget-wrap bg_cover" style={{backgroundImage: 'url(assets/images/newsletter-widget-1.jpg)'}}>
                        <i className="flaticon-email-1" />
                        <h3>Subscribe Our
                        Newsletter</h3>
                        <button className="main-btn icon-btn">Subscribe</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-8">
                <div className="listing-search-filter mb-40">
                    <div className="row">
                    <div className="col-md-8">
                        <div className="filter-left d-flex align-items-center">
                        <div className="show-text">
                            <span>Showing Result 1-09</span>
                        </div>
                        <div className="sorting-dropdown">
                            <select>
                            <option data-dsplay="Default Sorting">Default Sorting</option>
                            <option value="">Museums</option>
                            <option value="">Restaurant</option>
                            <option value="">Party Center</option>
                            <option value="">Fitness Zone</option>
                            <option value="">Game Field</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="filter-right">
                        <ul className="filter-nav">
                            <li><a href="listing-grid.html" className="active"><i className="ti-view-grid" /></a></li>
                            <li><a href="listing-list.html"><i className="ti-view-list-alt" /></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="listing-list-wrapper">
                    <div className="listing-item listing-list-item-two mb-60">
                    <div className="listing-thumbnail">
                        <img src="assets/images/listing/listing-list-5.jpg" alt="listing Image" />
                        <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                            <div className="icon">
                            <i className="flaticon-government" />
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
                    <div className="listing-item listing-list-item-two mb-60">
                    <div className="listing-thumbnail">
                        <img src="assets/images/listing/listing-list-6.jpg" alt="listing Image" />
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
                    <div className="listing-item listing-list-item-two mb-60">
                    <div className="listing-thumbnail">
                        <img src="assets/images/listing/listing-list-7.jpg" alt="listing Image" />
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
                    <div className="listing-item listing-list-item-two mb-60">
                    <div className="listing-thumbnail">
                        <img src="assets/images/listing/listing-list-8.jpg" alt="listing Image" />
                        <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                            <div className="icon">
                            <i className="flaticon-dumbbell" />
                            </div>
                            <div className="title">
                            <h6>Fitness</h6>
                            </div>
                        </div>
                        <span className="status st-open">Open</span>
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
                    <div className="listing-item listing-list-item-two mb-60">
                    <div className="listing-thumbnail">
                        <img src="assets/images/listing/listing-list-9.jpg" alt="listing Image" />
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
                    <div className="listing-item listing-list-item-two mb-60">
                    <div className="listing-thumbnail">
                        <img src="assets/images/listing/listing-list-10.jpg" alt="listing Image" />
                        <div className="thumbnail-meta d-flex justify-content-between align-items-center">
                        <div className="meta-icon-title d-flex align-items-center">
                            <div className="icon">
                            <i className="flaticon-shopping" />
                            </div>
                            <div className="title">
                            <h6>Shopping</h6>
                            </div>
                        </div>
                        <span className="status st-open">Open</span>
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
                </div>
            </div>
            </div>
        </section>
    </Master>
  )
}

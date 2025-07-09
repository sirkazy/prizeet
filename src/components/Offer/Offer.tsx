import React from 'react'
import image from "../../assets/svgimage.svg"
import arrow from "../../assets/arrow-right-circle-fill-white.svg"
import './Offer.css'

const Offer : React.FC = () => {
  return (
    <div className='offer'>
      <div className="offer-content">
        <div className="upper">
            <h2>What we </h2>
            <p>We bring together a wide range of smartphones from verified vendors, so you don't have to search multiple sites. Easily compare features, prices, and deals side by side to make confident choices. Enjoy convenience, transparency, and great value — all tailored to help you shop smarter.</p>
        </div>
        <div className="lower">
            <div className="section1">
                <div className="body1">
                    {/* hidden feature image overlay */}
                </div>
                <div className="body2">
                    <div className="div1">
                        <p>For buyers</p>
                        <div>
                            <h2>
                                Find your perfect 
                                <br />
                                gadget in 5 simple steps
                            </h2>
                            <ul>
                                <li>
                                    <img src={arrow} alt="" />
                                    <div>
                                        <h5>Tell us what you need</h5>
                                        <p>Search by brand, price, or deals — we'll help you narrow it down.</p>
                                    </div>
                                </li>

                                <li>
                                    <img src={arrow} alt="" />
                                    <div>
                                        <h5>Choose a vendor</h5>
                                        <p>Select based on pricing, ratings, or exclusive deals</p>
                                    </div>
                                </li>

                                <li>
                                    <img src={arrow} alt="" />
                                    <div>
                                        <h5>Order through Prizeet</h5>
                                        <p>Enjoy a smooth, transparent checkout process.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <img src={arrow} alt="" />
                                    <div>
                                        <h5>Leave it to us</h5>
                                        <p>We handle delivery right to your doorstep — hassle-free.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="div2">
                        <a href="/products">
                        <span>Discover Prizeet For Buyers</span>
                        <div><img src={image} alt="" /></div>
                        </a>
                    </div>
                </div>
                <div className="body3">
                    {/* backgroundimage */}
                </div>
            </div>
            <div className="section2">
                 <div className="body1">
                    {/* hidden feature image overlay */}
                </div>
                
                <div className="body3">
                    {/* backgroundimage */}
                </div>

                <div className="body2">
                    <div className="div1">
                        <p>For vendors</p>
                        <div>
                            <h2>
                                Start selling in 5 simple steps
                            </h2>
                            <ul>
                                <li>
                                    <img src={arrow} alt="" />
                                    <div>
                                        <h5>Get your products listed</h5>
                                        <p>Add your gadgets, set prices, and showcase your best deals.</p>
                                    </div>
                                </li>

                                <li>
                                    <img src={arrow} alt="" />
                                    <div>
                                        <h5>Receive purchase orders</h5>
                                        <p>Get notified when customers place orders for your products.</p>
                                    </div>
                                </li>

                                <li>
                                    <img src={arrow} alt="" />
                                    <div>
                                        <h5>Process purchase orders</h5>
                                        <p>Confirm, package, and hand over to Prizeet's delivery team.</p>
                                    </div>
                                </li>
                                
                                <li>
                                    <img src={arrow} alt="" />
                                    <div>
                                        <h5>Get paid instantly</h5>
                                        <p>Enjoy fast payouts as soon as orders are fulfilled.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="div2">
                        <a href="/products">
                        <span>Discover Prizeet For Vendors</span>
                        <div><img src={image} alt="" /></div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Offer

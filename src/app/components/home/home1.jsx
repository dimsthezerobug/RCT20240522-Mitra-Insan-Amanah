import { useEffect } from "react";
import { loadScript, route, publicUrlFor } from "../../../globals/constants";
import FastImage from "../../../globals/elements/fastimg";
import CountUp from "react-countup";
import SectionSlider1 from "../../sections/home/home1/section-slider1";
import { NavLink } from "react-router-dom";
import SectionHome1Team from "../../sections/home/home1/section-home1-team";
import SectionHome1Plans from "../../sections/home/home1/section-home1-plans";
import SectionHome1Blogs from "../../sections/home/home1/section-home1-blogs";
import SectionHome1Testimonials from "../../sections/home/home1/section-home1-testimonials";
import _data from "../../../globals/data/data.json";
import { abouts, companyName, missions, services } from "../../../constants";
import Missions from "./Missions"
import AboutUs from "./AboutUs";

function Home1Page() {

    const { clients } = _data;

    useEffect(() => {
        loadScript("js/custom.js");
    })

    return (
        <>
            {/* Slider */}
            <SectionSlider1 />

            <AboutUs />
            
            <Missions /> 
            
            {/* Latest Project */}
            <div className="section-full  p-tb80 bg-full-height bg-secondry bg-repeat-x city-slide-image" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-trans-1.png")})` }}>
                <div className="container-fluid">
                    <div className="fillter-left-content">
                        <div className="filter-left-part shake_image">
                            <FastImage src="images/truck-2.png" alt="" />
                            <span className="tyre-position"><FastImage src="images/rotate-tyer.png" alt="" className="spin-tyres" /></span>
                            <FastImage className="blink-image" src="images/light-blink.png" alt="" />
                        </div>
                        <div className="container">
                            <div className="section-head text-center sx-title-mid-area">
                                <div className="mt-box  text-white m-b30">
                                    <h2 className="m-tb0">Since <span className="site-text-primary">10 years</span> we are providing you some special services.
                                    </h2>
                                    <p className="m-b15">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet, consectetur adipiscing elit, sed doeius mod tempor sed do eiusmod</p>
                                </div>
                            </div>
                            <div className=" filter-carousal-1-outer">
                                <div className="filter-carousal-1">
                                    {/* IMAGE CAROUSEL START */}
                                    <div className="section-content">
                                        <div className="owl-carousel owl-carousel-filter  owl-btn-vertical-center fillter-nav-left">
                                            {/* Block 1 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic1.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Less than truckload</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 2 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic2.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Trucking &amp; Warehousing</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 3 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic3.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Sea Delivery</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible.</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 4 */}
                                            <div className="item  overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic4.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Logistic Services</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 5 */}
                                            <div className="item  overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic5.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Ground Shipping</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 6 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic6.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">International Air Freight</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 7 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic7.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Rail Shipping</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Block 8 */}
                                            <div className="item overflow-hide">
                                                <div className="mt-box">
                                                    <div className="mt-img-effect overlay-2">
                                                        <FastImage src="images/gallery/portrait/pic8.jpg" alt="" />
                                                        <div className="overlay-2-bg bg-black" />
                                                        <div className="overlay-2-content">
                                                            <div className="p-a30 p-b20">
                                                                <h4 className="m-t0 m-b15 site-text-primary">Frost Shipping</h4>
                                                                <p className="m-b20 text-white">Imagination… What we can easily see is only a small percentage of what is possible</p>
                                                                <NavLink to={route.pages.ABOUT} className="site-button">Read More</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center p-t30">
                                <NavLink to={route.services.SERVICES} className="site-button">View all gallery</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Team */}
            <SectionHome1Team />

            {/* MY BLOG */}
            <SectionHome1Blogs />

                       

            {/* Testimonials */}
            <SectionHome1Testimonials />

            {/* Contact Us  */}
            <div className="section-full bg-white bg-right-center bg-no-repeat" style={{ backgroundImage: `url(${publicUrlFor("images/background/bg-trans-2.png")})` }}>
                <div className="container">
                    <div className="row conntact-home">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="contact-home1-left bg-secondry">
                                <div className="contact-tag-line bg-white site-text-primary">Contact us</div>
                                <div className="section-content p-lr30 p-tb30">
                                    <div className="call-back-form" style={{ zIndex: 1, position: 'relative' }}>
                                        <h2 className="text-white m-t0">Contact Us</h2>
                                        <form className="cons-contact-form2 form-transparent" method="post" action="form-handler2.php">
                                            <div className="form-group">
                                                <input name="username" type="text" required className="form-control" placeholder="Name" />
                                            </div>
                                            <div className="form-group">
                                                <input name="email" type="text" className="form-control" required placeholder="Email" />
                                            </div>
                                            <div className="form-group">
                                                <input name="phone" type="text" className="form-control" required placeholder="Phone" />
                                            </div>
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" rows={3} placeholder="Message" defaultValue={""} />
                                            </div>
                                            <button type="submit" className="site-button ">
                                                <span className="font-weight-700 inline-block  p-lr15">Submit</span>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="section-content  contact-home1-right">
                            <div className="mt-box">
                                <div className="mt-media">
                                    <FastImage src="images/con-1.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Our Client Logo */}
            <div className="section-full bg-white p-tb50">
                <div className="container">
                    <div className="section-content">
                        <div className="owl-carousel home-client-logo owl-btn-vertical-center">

                            {
                                clients.map((_item, index) => {
                                    return <div key={index} className="item">
                                        <div className="ow-client-logo">
                                            <div className="client-logo mt-img-effect on-color">
                                                <NavLink to={route.pages.team.TEAM}><FastImage src={_item} alt="" /></NavLink>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            {/* OUR PLANS  */}
            <SectionHome1Plans />
        </>
    )
}
export default Home1Page;
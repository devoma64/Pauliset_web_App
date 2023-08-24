import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
constructor (){
super();
this.setTile("Home");
}

async getHtml() {

return `
<!--Slider Start-->
<section id="home-slider" class="owl-carousel owl-theme wf100">
   <div class="item">
      <div class="slider-caption h2slider slide-one-container">
         <div class="container first-slider">
            <h1>PAULISET &amp; SON'S GLOBAL LTD</h1>
            <h3>Agro Company</h3>
            <br>
            <a href="#" class="active btn btn-success ">Discover More</a>
              <!-- Button trigger modal -->
              <a type="button" class="btn btn-success" data-toggle="modal" data-target="#sellProduct">
               Sell Products
             </a>

             <div class="modal" tabindex="-1" role="dialog">
               <div class="modal-dialog" role="document">
                 <div class="modal-content">
                   <div class="modal-header">
                     <h5 class="modal-title">Modal title</h5>
                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                       <span aria-hidden="true">&times;</span>
                     </button>
                   </div>
                   <div class="modal-body">
                      <div class="text-center">
                         <h2>Send us and email</h2>
                         <p>info@pauliset.com</p>
                         <h2>Or call:</h2>
                         <p>+234 9066492519</p>
                         <p>+234 9025272991</p>
                        </div>
                   </div>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary">Save changes</button>
                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                   </div>
                 </div>
               </div>
             </div>

            <!-- Modal -->
            <div class="modal fade" id="sellProduct" tabindex="-1" role="dialog"
               aria-labelledby="sellProductLabel" aria-hidden="true">
               <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title lead b" id="sellProductLabel">Contact us below</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true" class="btn btn-danger"> Not Interested &times;</span>
                        </button>
                     </div>
                     <div class="modal-body">
                      
                     </div>
                     <div class="modal-footer text-center">
                        <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Not Interested</button> -->
                        <button type="button" class="btn btn-success">Sell Products</button>
                     </div>
                  </div>
               </div>
            </div> 
         </div>
      </div>
      <img src="/static/images/bg-slider-1.jpg" class="image-fluid" alt="">

   </div>
   <div class="item">
      <div class="slider-caption h2slider slide-two-container-edited">
         <div class="container second-slider">
            <h1>WHO WE ARE, <span class="break-point"> and WHAT WE DO! </span></h1>
            <h3>
               We are Industrial base Agricultural Company, we farm and trade <span class="break-point"></span>
               agricultural produce!. Our Meticulous production processes yeild <span class="break-point">top-grade
                  cocoa beans, cocoa powder,</span> cocoa butter, palm oil, <span class="break-point">and
                  various derivatives. Strengent qualifty checks are in place </span> <span class="break-point">to
                  maintain the highest standards of our
                  offering.</span>
            </h3>
            <a href="" class="active btn btn-success ">Find Out More</a> 
              <!-- Button trigger modal -->
              <a type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
               Sell Products
             </a>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
               aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title lead b" id="exampleModalLabel">Contact us below</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true" class="btn btn-danger"> Not Interested &times;</span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <div class="text-center">
                         <h2>  Send us and email</h2>
                         <p>info@pauliset.com</p>
                         <h2>Or call:</h2>
                         <p>+234 9066492519</p>
                         <p>+234 9025272991</p>
                        </div>
                     </div>
                     <div class="modal-footer text-center">
                        <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Not Interested</button> -->
                        <button type="button" class="btn btn-success">Sell Products</button>
                     </div>
                  </div>
               </div>
            </div> 
         </div>
      </div>
      <img src="/static/images/bg-slider-ex.jpg" class="image-fluid" alt="">
   </div>
   <div class="item">
      <div class="slider-caption h2slider slide-two-container">
         <div class="container third-slider">
            <h1>FRESH <span class="break-point">FARM IDEAS</span></h1>
            <h3 class="third-slider-h3">
               We engaged you on Farm Seminars and Education to enable <span class="break-point">you become outstanding
                  in the agriculture industry</span>
            </h3>

            
            <a href="#" class="active btn btn-success">Find Out More</a> 
             <!-- Button trigger modal -->
             <a type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
               Sell Products
             </a>

            <!-- Modal -->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog"
               aria-labelledby="exampleModalLabel" aria-hidden="true">
               <div class="modal-dialog" role="document">
                  <div class="modal-content">
                     <div class="modal-header">
                        <h5 class="modal-title lead b" id="exampleModalLabel">Contact us below</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true" class="btn btn-danger"> Not Interested &times;</span>
                        </button>
                     </div>
                     <div class="modal-body">
                        <div class="text-center">
                         <h2>  Send us and email</h2>
                         <p>info@pauliset.com</p>
                         <h2>Or call:</h2>
                         <p>+234 9066492519</p>
                         <p>+234 9025272991</p>
                        </div>
                     </div>
                     <div class="modal-footer text-center">
                        <!-- <button type="button" class="btn btn-danger" data-dismiss="modal">Not Interested</button> -->
                        <button type="button" class="btn btn-success">Sell Products</button>
                     </div>
                  </div>
               </div>
            </div>            
         </div>
      </div>
      <img src="/static/images/h2-slide1.jpg" alt="">
   </div>
</section>
<!--Slider End-->

<!--Service Area Start-->
<section class="services-area wf100">
   <div class="container">
      <ul>
         <!--box  start-->
         <li>
            <div class="sifo">

            </div>
         </li>
         <!--box  end-->

         <!--box  start-->
         <li>
            <div class="sinfo">
               <img src="/static/images/sericon3.png" alt="">
               <h6>Cocoa Farming</h6>
               <p>We are into massive <br>cocoa farming and marketing</p>
            </div>
         </li>
         <!--box  end-->
         <!--box  start-->
         <li class="active">
            <div class="sinfo">
               <img src="/static/images/sericon4.png" alt="">
               <h6>Palm Estate</h6>
               <p>Produce and Market <br> palm oil in the global market</p>
            </div>
         </li>
         <!--box  end-->
         <!--box  start-->
         <li>
            <div class="sinfo">
               <img src="/static/images/sericon5.png" alt="">
               <h6>Market Place</h6>
               <p>We provide a an exchange Environment for both local <br>and internatinal exporters</p>
            </div>
         </li>
         <!--box  end-->
      </ul>
   </div>
</section>
<!--Service Area End-->

<!--About Section Start-->
<section class="home2-about wf100 p100 gallery">
   <div class="container">
      <div class="row">
         <div class="col-md-5">
            <!-- <div class="video-img"> <a href="http://vimeo.com/43338103&amp;width=700" data-rel="prettyPhoto"
                  title="Vimeo video"><i class="fas fa-play"></i></a> <img src="/static/images/h2about.jpg" alt="">
            </div> -->
            <div class="video-img"> <a href="http://vimeo.com/43338103&amp;width=700" data-rel="prettyPhoto"
                  title="Vimeo video"><i class="fas fa-play"></i></a> <img src="/static/images/pauliset-logo.png"
                  alt="">
            </div>
         </div>
         <div class="col-md-7">
            <div class="h2-about-txt about-text-customize">
               <h2>About Pauliset Agro Company</h2>
               <h4>Your satfisfaction is our target</h4>
               <p>At Pauliset & Son's Global Ltd., we take pride in being a leading agro company
                  specializing in the cultivation, production, buying, and selling of high-quality cocoa and palm oil
                  products. Established in 2010 by our visionary C.E.O Sir Paul, our company has become a symbol of
                  excellence and innovation in the agricultural sector. </p>
               <a class="aboutus" href="/about">More About us</a>
            </div>
         </div>
      </div>
   </div>
   <!-- <div class="home-facts counter pt80">
      <div class="container">
         <div class="row">
            <div class="col-lg-3 col-sm-6 col-md-3">
               <div class="counter-box">
                  <p class="counter-count">89000</p>
                  <p class="ctxt">Trees Planted</p>
               </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-3">
               <div class="counter-box">
                  <p class="counter-count">79000</p>
                  <p class="ctxt">Solar Panels in 2017</p>
               </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-3">
               <div class="counter-box">
                  <p class="counter-count">69000</p>
                  <p class="ctxt">Wildlife Saved</p>
               </div>
            </div>
            <div class="col-lg-3 col-sm-6 col-md-3">
               <div class="counter-box">
                  <p class="counter-count">59000</p>
                  <p class="ctxt">Served Water Gallons</p>
               </div>
            </div>
         </div>
      </div>
   </div> -->
</section>
<!--About Section End-->

<div class="container" style="margin-bottom: 2rem;">
   <div class="row">
      <div class="col-12">
         <img src="/static/images/agro-sec.jpg" class="img-fluid" alt="">
      </div>
   </div>
</div>

<!--Services Section Start-->
<section class="home2-about wf100 p100 gallery gallery-background">
   <div class="container bn-background" style="margin-bottom: 5rem;">
      <div class="row">
         <div class="col-md-4">
            <div class="h2-about-txt brief-description-one">
               <h2>We provide you with the best platform to sell your farm produce</h2>
            </div>
         </div>
         <div class="col-md-8 brief-description-two">
            <div class="row">
               <div class="col-md-6 about-media">
                  <div class="video-img">
                     <img src="/static/images/pauliset-cocoa-Tree.jpg" alt="">

                  </div>
               </div>
               <div class="col-md-6 about-media">
                  <div class="video-img">
                     <img src="/static/images/pauliset-oil-palm-farming-1.jpg" alt="">
                  </div>
               </div>
            </div>
            <h4 class="text-justify mt-5" style="color:#000; font-weight: bold;">
               A new profitable way to sell and invest your farm produce <strong>COCOA AND PALM OIL</strong>
            </h4>
            <p class="text-justify" style="color:#000;">

               Our strong supply chain enables us to purchase cocoa and palm oil from our farms and local farmers,
               promoting fair trade practices and empowering rural communities. We also
               distribute our products globally, connecting with manufacturers, distributors, and consumers worldwide
               <span id="dots">...</span> <span id="more">While introducing an innovative and lucrative approach for
                  marketing and investing in farm produce, leveraging modern technology, direct-to-consumer models,
                  sustainable practices, and value-added processing to maximize profits and attract conscious investors,
                  giving our farmers the opportunity to sell their produce at the very best price.
               </span>
            </p>

            <button class="mb-4 btn btn-success" href="" onclick="myFunction()" id="myBtn">
               Read more
            </button>

         </div>
      </div>
   </div>
   </div>
   <hr>

   <!--Urgent Causes Start-->
   <!-- <section class="urgent-causes wf100 p80">
      <div class="container">
         
      </div>
   </section> -->
   <!--Urgent Causes End-->
   <div class="cotainer container-opportunities">
      <div class="text-center opp-header">
         <h2 style="text-align: center; font-weight: bolder" class="mb-5">New Opportunities</h2>
         <p>

         </p>
      </div>
      <div class="row  m-auto op-center-items" style="padding: 0; margin-top: 5rem">
         <div class="col-9 m-auto">
            <div class="row">
               <div class="col-lg-4 col-md-12 col-sm-12 mb-5">
                  <div class="card h-100 shadow px-4 px-md-2 px-lg-4 card-span pt-6 card-padding">
                     <div class="text-center text-md-start card-hover"><img class="ps-3 icons"
                           src="/static/images/icons/farmer.svg" height="60" alt="" />
                        <div class="card-body text-left">
                           <h6 class="fw-bold fs-1 heading-color">Connect with a community of farmers</h6>
                           <p class="mt-3 mb-md-0 mb-lg-2"
                              style="font-size:19px; text-align:left; 	font-family: 'Roboto Slab', sans-serif; color:#000;">
                              Engage with fellow agricultural enthusiasts, either in person or online, to share
                              knowledge, support, and collaborate on innovative farming practices and business
                              opportunities.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4  col-md-12  col-sm-12 mb-5">
                  <div class="card h-100 shadow px-4 px-md-2 px-lg-4 card-span pt-6 card-padding">
                     <div class="text-center text-md-start card-hover"><img class="ps-3 icons"
                           src="/static/images/icons/growth.svg" height="60" alt="" />
                        <div class="card-body text-left">
                           <h6 class="fw-bold fs-1 heading-color">Grow your farm/business</h6>
                           <p class="mt-3 mb-md-0 mb-lg-2"
                              style="font-size: 18px; text-align:left; 	font-family: 'Roboto Slab', sans-serif; color:#000;">
                              Learn how to implement strategic plans, expanding operations, diversifying products or
                              services, optimizing resources, and capturing market opportunities to achieve increased
                              profitability and success.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-lg-4 col-md-12  col-sm-12 mb-5">
                  <div class="card h-100 shadow px-4 px-md-2 px-lg-4 card-span pt-6 card-padding">
                     <div class="text-center text-md-start card-hover"><img class="ps-3 icons"
                           src="/static/images/icons/planting.svg" height="60" alt="" />
                        <div class="card-body text-left">
                           <h6 class="fw-bold fs-1 heading-color">Social Impact Invesment</h6>
                           <p class="mt-3 mb-md-0 mb-lg-2"
                              style="font-size: 18px; text-align:left; 	font-family: 'Roboto Slab', sans-serif; color:#000;">
                              Becoming a farm investor require a bit of investment literacy, we teach you how to
                              allocate financial resources with the intention of generating positive and measurable
                              social or environmental outcomes alongside financial returns, addressing societal
                              challenges while promoting sustainable development.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<!--About Section End-->

<!-- <section> begin ============================-->
<section class="py-5" id="invest">
   <div class="container">
      <div class="row justify-content-center">
         <div class="col-xl-9 mb-3">
            <div class="row">
               <div class="col-lg-12 mb-3">
                  <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style="font-weight:bolder; font-size: 32px;">Become a
                     Factor/Supplier at your convenience</h5>
                  <p class="mb-5" style="color:#000; font-family: 'Roboto Slab', sans-serif;">Sign a contract with
                     Pauliset Agro Company to supply us farm products and earn massive income in return. We provide you
                     with the platform to connect with professional farmers ready to do business with you for both
                     short and long term deal.</p>
               </div>
               <div class="col-md-6 mb-5">
                  <div class="card text-white">
                     <img class="card-img" src="/static/images/pauliset-cocoa-Tree.jpg" alt="..." />
                  </div>
                  <div class="pt-lg-3">
                     <h6>Short term and Long term Supply</h6>
                     <p class="w-xxl-75">Supply farm produce for us in short term period and get back huge profit in
                        return.</p>
                     <button class="btn btn-lg btn-success" type="button">Contract details</button>
                  </div>
               </div>
               <div class="col-md-6 mb-5">
                  <div class="card text-white">
                     <img class="card-img" src="/static/images/pauliset-oil-palm-farming-1.jpg" alt="..." />
                  </div>
                  <div class="pt-lg-3">
                     <h6>Short term and Long term Supply</h6>
                     <p class="w-xxl-75">Supply farm produce for us in long term contract and get back huge profit in
                        return.</p>
                     <button class="btn btn-lg btn-success" type="button">Contract details</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   <section class="timeline_area section_padding_130">
      <div class="container">
         <div class="row justify-content-center time-line-header">
            <div class="col-lg-9 col-sm-12 col-md-12">
               <!-- Section Heading-->
               <div class="section_heading text-center time-line-header-section">
                  <h5>How it works</h5>
                  <p>Take your pick from the supply chain and participate in agribusiness projects that are backed up
                     not only by Pauliset Agro Company, but also by the best land, family heritage, innovation and
                     overall superior expertise.</p>
                  <div class="line"></div>
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-12">
               <!-- Timeline Area-->
               <div class="apland-timeline-area">
                  <!-- Single Timeline Content-->
                  <div class="single-timeline-area">
                     <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s"
                        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                        <button type="button" class="btn btn-success">
                           Step <span class="badge badge-light">01</span>
                           <span class="sr-only"></span>
                        </button>
                     </div>
                     <div class="row">
                        <div class="col- col-sm-9 col-md-12 col-lg-12">
                           <div class="single-timeline-content d-flex wow fadeInLeft " data-wow-delay="0.3s"
                              style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; border:0px;">
                              <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                              <div class="timeline-text timeline-text-edited">
                                 <h6>Select your farmshare and complete reservation form here.</h6>
                                 <!-- <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum
                                    soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime
                                    placeat facere</p> -->
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>

                  <!-- Single Timeline Content-->
                  <div class="single-timeline-area">
                     <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s"
                        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                        <button type="button" class="btn btn-success">
                           Step <span class="badge badge-light">02</span>
                           <span class="sr-only"></span>
                        </button>
                     </div>
                     <div class="row">
                        <div class="col-12 col-sm-9 col-md-12 col-lg-12">
                           <div class="single-timeline-content d-flex wow fadeInLeft " data-wow-delay="0.3s"
                              style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; border:0px;">
                              <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                              <div class="timeline-text timeline-text-edited">
                                 <h6>The Farm Share has been one of the best new additions to our life.</h6>
                                 <!-- <p>We the farmers choose the vegetables in your share each week. A Farm Share is
                                    perfect for those who love the weekly surprise, and who look forward to cooking with
                                    inspiration from the seasons.</p> -->
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Single Timeline Content-->
                  <div class="single-timeline-area">
                     <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s"
                        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                        <button type="button" class="btn btn-success">
                           Step <span class="badge badge-light">03</span>
                           <span class="sr-only"></span>
                        </button>
                     </div>
                     <div class="row">
                        <div class="col-12 col-sm-9 col-md-12 col-lg-12">
                           <div class="single-timeline-content d-flex wow fadeInLeft " data-wow-delay="0.3s"
                              style="visibility: visible;  animation-delay: 0.3s; animation-name: fadeInLeft; border:0px;">
                              <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                              <div class="timeline-text timeline-text-edited">
                                 <h6>There is so much love and thought put into this CSA. You can feel that..</h6>
                                 <!-- <p>We the farmers choose the vegetables in your share each week. A Farm Share is
                                    perfect for those who love the weekly surprise, and who look forward to cooking with
                                    inspiration from the seasons.</p> -->
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <!-- Single Timeline Content-->
                  <div class="single-timeline-area">
                     <div class="timeline-date wow fadeInLeft" data-wow-delay="0.1s"
                        style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;">
                        <button type="button" class="btn btn-success">
                           Step <span class="badge badge-light">04</span>
                           <span class="sr-only"></span>
                        </button>
                     </div>
                     <div class="row">
                        <div class="col-12 col-sm-9 col-md-12 col-lg-12">
                           <div class="single-timeline-content d-flex wow fadeInLeft single-timeline-content-edited"
                              data-wow-delay="0.3s"
                              style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; border:0px;">
                              <div class="timeline-icon"><i class="fa fa-address-card" aria-hidden="true"></i></div>
                              <div class="timeline-text timeline-text-edited">
                                 <h6>The Farm Share has been one of the best new additions to our life</h6>
                                 <!-- <p>
                                    We the farmers choose the vegetables in your share each week. A Farm Share is
                                    perfect for those who love the weekly surprise, and who look forward to cooking with
                                    inspiration from the seasons.
                                 </p> -->
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

   <!--Current Projects Start-->
   <section class="wf100 p80 current-projects">
      <div class="container">
         <div class="row">
            <div class="col-lg-6">
               <div class="section-title-2">
                  <h4
                     style="color: #000; font-weight:bold; background-image:url('/static/images/testimonial-bg.png');background-repeat:no-repeat;background-size:contain;background-position:cover;">
                     What farmers and investors like you are saying about Pauliset Agro Company
                  </h4>
               </div>
            </div>
            <section class="p" id="testimonial" style="margin-top: 4rem;">
               <div class="container">
                  <div class="row flex-center">
                     <div class="carousel slide pt-3" id="carouselExampleDark" data-ride="carousel">
                        <div class="carousel-inner">
                           <div class="carousel-item active" data-interval="10000">
                              <div class="row h-100 mx-3 mx-sm-5 mx-md-4 my-md-7 m-lg-7 mt-7">
                                 <div class="col-md-4 mb-5 mb-md-0">
                                    <div class="card h-100 shadow">
                                       <div class="card-body my-3">
                                          <div class="align-items-xl-center d-block d-xl-flex px-3">
                                             <img class="img-fluid me-3 me-md-2 me-lg-3"
                                                src="/static/images/marvelouswon.png" width="50" alt="" />
                                             <div class="flex-1 align-items-center pt-2">
                                                <h5 class="mb-0 fw-bold text-success">Marvelous Won</h5>
                                                <p class="fw-normal text-black">Top Cocoa Farmer</p>
                                             </div>
                                          </div>
                                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;Quis autem vel eum iure
                                             reprehenderit qui
                                             in ea voluptate velit esse quam nihil molestiae</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-4 mb-5 mb-md-0">
                                    <div class="card h-100 shadow">
                                       <div class="card-body my-3">
                                          <div class="align-items-xl-center d-block d-xl-flex px-3">
                                             <img class="img-fluid me-3 me-md-2 me-lg-3"
                                                src="/static/images/pauliset.png" width="50" alt="" />

                                             <div class="flex-1 align-items-center pt-2">
                                                <h5 class="mb-0 fw-bold text-success">Mr Sunday</h5>
                                                <p class="fw-normal text-black"> Top Palm Farmer </p>
                                             </div>
                                          </div>
                                          <p class="mb-0 px-3 px-md-2 px-xxl-3">
                                             &quot;At vero eos et accusamus et iusto odio
                                             dignissimos ducimus qui blanditiis praesentium
                                          </p>
                                       </div>
                                    </div>
                                 </div>
                                 <div class="col-md-4 mb-5 mb-md-0">
                                    <div class="card h-100 shadow">
                                       <div class="card-body my-3">
                                          <div class="align-items-xl-center d-block d-xl-flex px-3">
                                             <img class="img-fluid me-3 me-md-2 me-lg-3"
                                                src="/static/images/manager.png" width="50" alt="" />
                                             <div class="flex-1 align-items-center pt-2">
                                                <h5 class="mb-0 fw-bold text-success">Mrs. Pauliset</h5>
                                                <p class="fw-normal text-black">Farmer</p>
                                             </div>
                                          </div>
                                          <p class="mb-0 px-3 px-md-2 px-xxl-3">&quot;At vero eos et accusamus et iusto
                                             odio
                                             dignissimos ducimus qui blanditiis praesentium </p>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="row px-3 px-sm-6 px-md-0 px-lg-5 px-xl-4">
                                 <div class="col-12 position-relative">
                                    <a class="carousel-control-prev carousel-icon z-index-2" href="#carouselExampleDark"
                                       role="button" data-slide="prev"><span class="carousel-control-prev-icon"
                                          aria-hidden="true"></span>
                                       <span class="visually-hidden">
                                          Previous
                                       </span>
                                    </a>
                                    <a class="carousel-control-next carousel-icon z-index-2" href="#carouselExampleDark"
                                       role="button" data-slide="next">
                                 </div>
                              </div>
                              <span class="carousel-control-next-icon" aria-hidden="true"></span>
                              <span class="visually-hidden">
                                 Next
                              </span>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
         </div>

</section>

<!--Testimonials End-->

<!--Why Ecova + Facts Start-->
<!-- <section class="why-ecova wf100">
      <div class="container">
         <div class="row">
            <div class="col-md-12">
               <h1> Why Ecova!</h1>
               <p>Let’s Join us to do something awesome to Save Water, Energey, Control Pollution &
                  Environment, Wildlife, Forest Planting Implant for Solar System.
               </p>
               <a href="#" class="cus">Signup to Join us</a>
            </div>
         </div>
      </div>
   </section> -->
<!--Why Ecova + Facts End-->

<!--Why you Need to Choose Ecova Start-->
<div class="choose-ecova wf100 p80">
   <h3 style="text-align: center; font-weight: bolder">Why you Need to</h3>
   <h3 style="text-align: center; font-weight: bolder; margin-bottom: 3rem;">Choose Pauliset Agro Company</h3>
   <div class="container">
      <div class="row">
         <div class="col-lg-8">
            <div class="row">
               <div class="col-6">
                  <div class="eco-box">
                     <span class="econ-icon"><i class="far fa-handshake"></i></span>
                     <h5> Become a Factor or Supplier and earn massive income </h5>
                     <p> Sign a short/long term contract with Pualiset Agro Company to supply us with farm produce
                        and earn massive income in return.</p>
                  </div>
               </div>

               <div class="col-6">
                  <div class="eco-box">
                     <span class="econ-icon"><i class="fas fa-heart"></i></span>
                     <h5>Better Product Better Price </h5>
                     <p>Looking for where to sell your farm product at a better price, find no more. Here in Pauliset
                        Agro we offer a better price plus 10% discount when you purchase farm tools from us.</p>
                  </div>
               </div>

               <div class="col-6">
                  <div class="eco-box">
                     <span class="econ-icon"><i class="fas fa-heart"></i></span>
                     <h5>Effective Farm Training Opportunities and Support </h5>
                     <p>We provide a platform for Industrial Agricultural Training Skills and connect you with other
                        professional farmers and investors.</p>
                  </div>
               </div>

               <div class="col-6">
                  <div class="eco-box">
                     <span class="econ-icon"><i class="far fa-money-bill-alt"></i></span>
                     <h5> Get Funding </h5>
                     <p> Get financial support with little or no interest to support your farm. All this at Pauliset
                        Agro Company. </p>
                  </div>
               </div>

            </div>
         </div>
         <div class="col-lg-4">
            <div class="volunteer-form">
               <div class="section-title">
                  <h3>Get intouch</h3>
                  <p class="mt-2">Send us an Email</p>
               </div>
               <ul>
                  <li>
                     <input type="text" class="form-control" placeholder="Your Name" aria-label="Your Name">
                  </li>
                  <li>
                     <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address">
                  </li>
                  <li>
                     <input type="text" class="form-control" placeholder="Contact" aria-label="Contact">
                  </li>
                  <li>
                     <input type="submit" class="fsubmit" value="Send">
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</div>
<!--Why you Need to Choose Ecova End-->

<!--Partner Logos Section Start-->
<div class="partner-logos wf100">
   <div class="container">
      <div id="partner-logos" class="owl-carousel owl-theme">
         <div class="item"><img src="/static/images/plogo1.png" alt=""></div>
         <div class="item"><img src="/static/images/plogo2.png" alt=""></div>
         <div class="item"><img src="/static/images/plogo3.png" alt=""></div>
         <div class="item"><img src="/static/images/plogo4.png" alt=""></div>
         <div class="item"><img src="/static/images/plogo5.png" alt=""></div>
         <div class="item"><img src="/static/images/plogo1.png" alt=""></div>
         <div class="item"><img src="/static/images/plogo2.png" alt=""></div>
         <div class="item"><img src="/static/images/plogo3.png" alt=""></div>
         <div class="item"><img src="/static/images/plogo4.png" alt=""></div>
         <div class="item"><img src="/static/images/plogo5.png" alt=""></div>
      </div>
   </div>
</div>
<!--Partner Logos Section End-->
`
}
}
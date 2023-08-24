import AbstractView from "./AbstractView.js"

export default class extends AbstractView{
constructor () {
super();
this.setTile("Service");
}

async getHtml() {
return `

<!--Inner Header Start-->
<section class="wf100 p100 inner-header"
   style="background-image: url('/static/images/h2-slide1.jpg'); background-size:cover; background-position:center; background-repeat:no-repeat">
   <div class="container">
      <h1 class="text-center">/Our Services/</h1>
   </div>
</section>
<!--Inner Header End-->

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

   <section class="py-5" id="invest">
      <div class="container">
         <div class="row justify-content-center">
            <div class="col-xl-9 mb-3">
               <div class="row">
                  <div class="col-lg-12 mb-3">
                     <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3" style="font-weight:bolder; font-size: 32px;">Become a
                        Factor/Supplier at your convenience</h5>
                     <p class="mb-5" style="color:#000; font-family: 'Roboto Slab', sans-serif;">Sign a contract with
                        Pauliset Agro Company to supply us farm products and earn massive income in return. We provide
                        you
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
                           <p>Looking for where to sell your farm product at a better price, find no more. Here in
                              Pauliset
                              Agro we offer a better price plus 10% discount when you purchase farm tools from us.</p>
                        </div>
                     </div>

                     <div class="col-6">
                        <div class="eco-box">
                           <span class="econ-icon"><i class="fas fa-heart"></i></span>
                           <h5>Effective Farm Training Opportunities and Support </h5>
                           <p>We provide a platform for Industrial Agricultural Training Skills and connect you with
                              other
                              professional farmers and investors.</p>
                        </div>
                     </div>

                     <div class="col-6">
                        <div class="eco-box">
                           <span class="econ-icon"><i class="far fa-money-bill-alt"></i></span>
                           <h5> Get Funding </h5>
                           <p> Get financial support with little or no interest to support your farm. All this at
                              Pauliset
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
                           <input type="text" class="form-control" placeholder="Email Address"
                              aria-label="Email Address">
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
   </section>
   <!--About End-->




   `
   }
   }
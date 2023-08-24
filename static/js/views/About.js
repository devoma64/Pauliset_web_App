import AbstractView from "./AbstractView.js";


export default class extends AbstractView {
    constructor () {
        super();
        this.setTile("About");
    }

    async getHtml () {

       return `
        <!--Inner Header Start-->
        <section class="wf100 p100 inner-header" style="background-image: url('/static/images/h2-slide1.jpg'); background-size:cover; background-position:center; background-repeat:no-repeat">
           <div class="container">
              <h1>About Pauliset Agro Company</h1>
              <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/about">About Us</a></li>
              </ul>
           </div>
        </section>
        <!--Inner Header End--> 
      
        <!--About Start-->
        <section class="wf100 about">


         <!--About Txt Video Start-->
            <div class="about-video-section wf100">
               <div class="container">
                  <div class="row">
                     <div class="col-lg-6">
                        <div class="about-text">
                           <h5>Your satisfaction is our target</h5>
                           <h5></h5>
                           <p><strong>We are Taking Small Steps to Make</strong></p>
                           <h2>Agriculture Better in Boki</h2>
                         
                           <p class="text-justify" style=" font-family: 'Roboto Slab', sans-serif;">In the pursuit of enhancing agricultural practices in Boki, we are dedicated to taking incremental yet impactful measures. By focusing on these small steps, we aim to create a significant positive impact on the agricultural landscape of the region. Through the implementation of innovative techniques, improved crop management strategies, sustainable irrigation methods, and enhanced access to modern farming tools and education, we are committed to fostering a more productive, resilient, and environmentally conscious agricultural sector in Boki Local Government Area, Cross River State. </p>
                           <!-- <a href="#">Contact Us</a>  -->
                        </div>
                     </div>
                     <div class="col-lg-6">
                        <div class="about-video-img"> <a href="#"><i class="fas fa-play"></i></a> <img src="/static/images/aboutimg.jpg" alt=""> </div>
                     </div>
                  </div>
               </div>
            </div>
            <!--About Txt Video End-->


               <!--Our Success Story Start-->
         <div class="our-success-story wf100 about">
            <div class="container">
               <div class="row">
                  <div class="col-lg-4">
                     <div class="story-title-bg"> 
                        <strong class="t1 text-years-in-service" style="font-size:45px; text-align:center; line-height:2.5rem;">
                           Pauliset Agro Company
                        </strong> 
                        <strong class="t2 text-years-in-service">
                           10+
                        </strong> 
                        <strong class="t3">
                           Years of Services
                     </strong> 
                     </div>
                  </div>
                  <div class="col-lg-8">
                     <div class="section-title-2 mt-5">
                        <h2 class="b">
                           About Us
                        </h2>
                     </div>
                     <!--eco History Start-->
                     <div class="eco-history">
                      <p style="text-align: justify; color:#000; font-size:16px; font-family: 'Roboto Slab', sans-serif;">
                        Pauliset & Son's Global Ltd., we take pride in being a leading agro company specializing in the cultivation, production, buying, and selling of high-quality cocoa and palm oil products. Established in 2012 by our visionary C.E.O Sir Sunday, our company has become a symbol of excellence and innovation in the agricultural sector. A distinguished Agro Company and a prominent player in the cocoa and palm oil industry since her Establishment, the company has its headquarters situated in Okundi, Boki Local Government Area, Cross River State, and has further expanded its presence with a branch located in Ikom Local Government Area, Cross River State.
                        </p>
                        <p style="text-align: justify; color:#000; font-size:16px; font-family: 'Roboto Slab', sans-serif;">

                           We specializes in every aspect of cocoa and palm oil, starting from cultivation to the production, buying, and selling of the final products. Our commitment to excellence and sustainability drives our agricultural practices, making us a trusted name in the agro sector.

                           In the lush fields of our farms, and collaboration with local farmers, we diligently cultivates cocoa and palm oil crops. By employing advanced and environmentally responsible farming techniques, to ensure the production of high-quality raw materials, contributing to the overall health of the agricultural ecosystem.
                       
                        <p style="text-align: justify; color:#000; font-size:16px;font-family: 'Roboto Slab', sans-serif;">

                        With state-of-the-art processing facilities, Pauliset & Son's Global Ltd. undertakes the transformation of harvested cocoa and palm oil fruits into premium end products. The company's meticulous production processes yield top-grade cocoa beans, cocoa powder, cocoa butter, palm oil, and various derivatives. Stringent quality checks are in place to maintain the highest standards of our offerings.

                        The success of our company can be attributed to our robust supply chain. Through strategic partnerships and collaborations, the company sources cocoa and palm oil from its farms and local farmers, ensuring a consistent supply for production. Their commitment to fair trade practices not only ensures equitable compensation for farmers but also fosters community development and empowerment.

                        The reach of Pauliset & Son's Global Ltd. extends far beyond the borders of Cross River State, as the company adeptly markets and sells its products both locally and internationally. Their reputation for reliability and quality opens doors to partnerships with manufacturers, distributors, and discerning consumers worldwide.
                        </p>
                        

                        <p style="text-align: justify; color:#000; font-size:16px;font-family: 'Roboto Slab', sans-serif;">
                        
                        Recognizing the significance of modern agricultural tools and equipment, we takes pride in offering a comprehensive range of farm tools. This includes tools and machinery tailored to cocoa and palm oil cultivation, empowering farmers with the means to enhance their productivity and efficiency.

                        Under the exceptional leadership of the C.E.O, the company has flourished and continues to explore new opportunities for growth and expansion. Through a combination of innovation, dedication, and ethical business practices, Pauliset & Son's Global Ltd. remains a beacon of success in the agro industry.
   
                        Pauliset & Son's Global Ltd. is a reputable agro company, deeply rooted in cocoa and palm oil farming, production, buying, selling, and farm tools supply. With its strategic presence in two locations within Cross River State, the company's commitment to sustainability, quality, and community development cements its position as a respected and reliable industry leader.
                   
                        </p>
                    
                     <!-- <button onclick="myFunction()" class="btn btn-success" id="myBtn">Read More</button> -->
                     </div>
                     <!--Political History End--> 
                  </div>
               </div>
            </div>
         </div>
         <!--Our Success Story End--> 

           <!--About Txt Video Start-->
           <div class="about-video-section wf100">
              <div class="container">
                 <div class="row">
                    <div class="col-lg-6">
                       <div class="about-text">
                          <h5 class="text-center mb-5">Our Mission</h5>
                          <h2 style="font-size: 24px;">Foster Sustainable Agriculture</h2>
                          <p style="text-align: justify; color:#000; font-size:16px; font-family: 'Roboto Slab', sans-serif;">Our mission is to foster sustainable agriculture while delivering premium products that enrich lives and nourish communities. We are committed to responsible farming practices, fair trade principles, and environmental conservation, ensuring a positive impact on both our stakeholders and the planet.</p>
                          <!-- <a href="#">Contact Us</a>  -->
                       </div>

                    </div>
                    <div class="col-lg-6">
                       <!-- <div class="about-video-img"> 
                        <a href="#"><i class="fas fa-play"></i></a> 
                        <img src="/static/images/aboutimg.jpg" alt=""> 
                     </div> -->
                     <div class="about-text">
                        <h5 class="text-center mb-5">Our Vision</h5>
                        <h2 style="font-size: 24px;">Setting a Global Benchmark for Sustainable Agriculture</h2>
                        <p style="text-align: justify; color:#000; font-size:16px; font-family: 'Roboto Slab', sans-serif;">Our vision is to become the leading and most respected agro-industry leader in cocoa and palm oil farming, production, and distribution. Our commitment lies in consistently delivering premium-quality products that meet global standards, while upholding sustainable practices and positively impacting the lives of farmers and the environment. <span id="dots">...</span> <span id="more"> We aim to expand our global presence through strategic partnerships, cutting-edge technology, and innovative practices, all while remaining grounded in fair trade principles. Our company's vision extends beyond financial success, encompassing community empowerment, growth, and support for education initiatives. Ultimately, we aspires to redefine the agro industry's standards, setting a global benchmark for sustainable agriculture and becoming a catalyst for positive change. </span></p>
                        <button onclick="myFunction()" id="myBtn" class="btn btn-success">Read more</button>
                     </div>
                    </div>
                 </div>
              </div>
           </div>
           <!--About Txt Video End--> 

         
          

           <!--Why you Need to Choose Ecova Start-->
           <div class="choose-ecova wf100 p80">
              <div class="container">
                 <div class="row">
                    <div class="col-lg-8">
                       <div class="section-title-2">
                          <h5>Why you Need to</h5>
                          <h2>Choose Pauliset Agro Company</h2>
                       </div>
                       <div class="row">
                          <div class="col-6">
                             <div class="eco-box">
                                <span class="econ-icon"><i class="far fa-handshake"></i></span>
                                <h5> Become a Factor or Supplier and earn massive income </h5>
                                <p> Sign a short/long term contract with Pualiset Agro Company to supply us with farm produce and earn massive income in return.</p>
                             </div>
                          </div>

                          <div class="col-6">
                           <div class="eco-box">
                              <span class="econ-icon"><i class="fas fa-heart"></i></span>
                              <h5>Better Product Better Price </h5>
                              <p>Looking for where to sell your farm product at a better price, find no more. Here in Pauliset Agro we offer a better price plus 10% discount when you purchase farm tools from us.</p>
                           </div>
                        </div>
                         
                          <div class="col-6">
                             <div class="eco-box">
                                <span class="econ-icon"><i class="fas fa-heart"></i></span>
                                <h5>Effective Farm Training Opportunities and Support </h5>
                                <p>We provide a platform for Industrial Agricultural Training Skills and connect you with other professional farmers and investors.</p>
                             </div>
                          </div>
                       


                        <div class="col-6">
                           <div class="eco-box">
                              <span class="econ-icon"><i class="far fa-money-bill-alt"></i></span>
                              <h5> Get Funding </h5>
                              <p> Get financial support with little or no interest to support your farm. All this at Pauliset Agro Company. </p>
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
        </section>
        <!--About End--> 
    

        
        `
    }
}
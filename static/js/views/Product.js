import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor () {
        super();
        this.setTile("Products");
    }

    async getHtml() {

        return `
        <!--Inner Header Start-->
        <section class="wf100 p100 inner-header">
           <div class="container">
              <h1>Our Products</h1>
              <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="#">Take a look at our farm products List</a></li>
              </ul>
           </div>
        </section>
        <!--Inner Header End--> 

        <!--Causes Start-->
        <section class="wf100 p80 projects">
           <div class="projects-list">
              <div class="container">
                 <div class="row">
                    <div class="col-lg-12 col-md-8">
                       <!--Project Box Start-->
                       <div class="pro-list-box">
                          <div class="pro-thumb"> <a href="#"><i class="fas fa-link"></i></a> <img src="/static/images/pauliset-cocoa-Tree.jpg" alt="cocoa-farm-produce"> </div>
                          <div class="pro-txt">
                             <h5> <a href="#">Cocoa Farming, Production &  and Processing</a> </h5>
                             <p> The environment includes; the surface of the earth, natural re­sources, land and water, mountains and plains, fertile lands and deserts, oceans, storms and cy­clones, weather and climatic factors, seasons, etc. It also includes biological conditions. </p>
                             <a href="#" class="view">View Details</a> 
                          </div>
                       </div>
                       <!--Project Box End-->
                      
                        <!--Project Box Start-->
                        <div class="pro-list-box">
                           <div class="pro-thumb"> <a href="#"><i class="fas fa-link"></i></a> <img src="/static/images/pauliset-oil-palm-farming-1.jpg" alt="palm-oil-farm-products"> </div>
                           <div class="pro-txt">
                              <h5> <a href="#">Palm Oil Production &  and Processing</a> </h5>
                              <p> The environment includes; the surface of the earth, natural re­sources, land and water, mountains and plains, fertile lands and deserts, oceans, storms and cy­clones, weather and climatic factors, seasons, etc. It also includes biological conditions. </p>
                              <a href="#" class="view">View Details</a> 
                           </div>
                        </div>
                        <!--Project Box End-->

                    </div>
                 </div>

                 <div class="container">
                  <div class="product">
                     <h5>Check out our farm products below</h5>
                     <div class="product-image">
                        <img src="" alt="">
                     </div>
                  </div>
                 </div>
                 
                 <div class="row">
                    <div class="col-md-12">
                       <div class="gt-pagination mt20">
                          <nav>
                             <ul class="pagination">
                                <li class="page-item"> <a class="page-link" href="#" aria-label="Previous"> <i class="fas fa-angle-left"></i> </a> </li>
                                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"> <a class="page-link" href="#" aria-label="Next"> <i class="fas fa-angle-right"></i> </a> </li>
                             </ul>
                          </nav>
                       </div>
                    </div>
                 </div>
              </div>
            
           </div>
        </section>
        <!--Causes End-->        
        `;
    }
}
import AbstractView from "./AbstractView.js";

export default class extends AbstractView {

    
    constructor(){
        super();
        this.setTile("Testimonies");
    }
    async getHtml(){
        return `

        <!--Inner Header Start-->
        <section class="wf100 p100 inner-header" style="background-image: url('/static/images/h2-slide1.jpg'); background-size:cover; background-position:center; background-repeat:no-repeat">
           <div class="container">
              <h1>Testimonies</h1>
              <ul>
                 <li><a href="/">Home</a></li>
                 <li><a href="/testimonies">Testimonies</a></li>
              </ul>
           </div>
        </section>
        <!--Inner Header End--> 

        <!--Testimonials Start-->
        <section class="testimonials-section wf100 p80">
           <h1 class="text-center">What People Says</h1>
           <div class="container">
              <div class="row">
                 <div class="col-md-12">
                    <div id="h3testimonials" class="owl-carousel owl-theme">
                       <!--testimonials box start-->
                       <div class="item">
                          <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable. </p>
                          <div class="tuser"> <img src="images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                       </div>
                       <!--testimonials box End--> 
                       <!--testimonials box start-->
                       <div class="item">
                          <p> As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </p>
                          <div class="tuser"> <img src="images/tuser2.jpg" alt=""> <strong>Richardson</strong> Florida Partner </div>
                       </div>
                       <!--testimonials box End--> 
                       <!--testimonials box start-->
                       <div class="item">
                          <p> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour. </p>
                          <div class="tuser"> <img src="images/tuser3.jpg" alt=""> <strong>Anna Lillian</strong> Florida Partner </div>
                       </div>
                       <!--testimonials box End--> 
                       <!--testimonials box start-->
                       <div class="item">
                          <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, making it look like readable. </p>
                          <div class="tuser"> <img src="images/tuser1.jpg" alt=""> <strong>Danny Scotten</strong> Florida Partner </div>
                       </div>
                       <!--testimonials box End--> 
                       <!--testimonials box start-->
                       <div class="item">
                          <p> As opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. </p>
                          <div class="tuser"> <img src="images/tuser2.jpg" alt=""> <strong>Richardson</strong> Florida Partner </div>
                       </div>
                       <!--testimonials box End--> 
                       <!--testimonials box start-->
                       <div class="item">
                          <p> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour. </p>
                          <div class="tuser"> <img src="images/tuser3.jpg" alt=""> <strong>Anna Lillian</strong> Florida Partner </div>
                       </div>
                       <!--testimonials box End--> 
                    </div>
                 </div>
              </div>
           </div>
        </section>
        <!--Testimonials End--> 
        
        
        `
      }
}
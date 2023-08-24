import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
constructor(){
super();
this.setTile("Contact us");
}


async getHtml(){
return `

<!--Inner Header Start-->
<section class="wf100 p100 inner-header"
    style="background-image: url('/static/images/h2-slide1.jpg'); background-size:cover; background-position:center; background-repeat:no-repeat">
    <div class="container">
        <h1 class="text-center">/Contact Us/</h1>
    </div>
</section>
<!--Inner Header End-->


 <!--Contact Start-->
 <section class="contact-page wf100 p80">
    <div class="container">
       <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
             <div class="contact-form mb60">
                <h3>Feel Free to Contact us</h3>
                <ul class="cform">
                   <li class="half pr-15">
                      <input type="text" class="form-control" placeholder="Full Name">
                   </li>
                   <li class="half pl-15">
                      <input type="text" class="form-control" placeholder="Email">
                   </li>
                   <li class="half pr-15">
                      <input type="text" class="form-control" placeholder="Contact">
                   </li>
                   <li class="half pl-15">
                      <input type="text" class="form-control" placeholder="Subject">
                   </li>
                   <li class="full">
                      <textarea class="textarea-control" placeholder="Message"></textarea>
                   </li>
                   <li class="full">
                      <input type="submit" value="Contact us" class="fsubmit">
                   </li>
                </ul>
             </div>
          </div>
          <div class="col-md-12">
             <div class="google-map">
                <div class="contact-map-info">
                   <address>
                      <ul>
                         <li>
                            <strong class="add-title text-success">
                              Head Office:
                           </strong>
                              No. 1 Pauliset & Son's Global Ltd. Agro Company Okundi LGA, Cross River State
                         </li>
                         <li>
                            <p>
                              <strong>Phone:</strong> +234 9066492519</p>
                            <!-- <p><strong>Fax:</strong> +1 321 2345 876-7</p> -->
                         </li>

                         <li>
                            <strong class="add-title text-success">Branch Office:</strong>
                            No. 5 Pauliset & Son's Global Ltd. Agro Company Ikom LGA, Cross River State
                         </li>
                         <li>
                            <p><strong>Phone:</strong> +234 9066492519</p>
                         </li>
                      </ul>
                   </address>
                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11418.310112375979!2d-74.00986187433132!3d40.710981182716246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY!5e0!3m2!1sen!2s!4v1540972202179"></iframe>
             </div>
          </div>
       </div>
    </div>
 </section>
 <!--Contact End--> 

`
}
}
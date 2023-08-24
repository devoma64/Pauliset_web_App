import Home from "./views/Home.js";
import About from "./views/About.js";
import Product from "./views/Product.js"
import Services from "./views/Services.js";
import Contact from "./views/Contact.js"
import Testimonies from "./views/Testimonies.js";



const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {

    const routes = [

        { path: "/", view: Home},
        { path: "/about", view: About},
        { path: "/products", view: Product},
        { path: "/services", view: Services},
        { path: "/testimonies", view: Testimonies},
        { path: "/contacts", view:Contact}
    ];


    // looping through and findi
    const potentialMatch = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatch.find(potentialMatch => potentialMatch.isMatch);
    if(!match){
        match = {

            route: routes[1],
            isMatch: true

        };
    };

    const view = new match.route.view();

    document.querySelector("#app").innerHTML = await view.getHtml();
   
};


window.addEventListener("popstate", router);



document.addEventListener("DOMContentLoaded", () =>{

    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        };
    });

    router();
}); 
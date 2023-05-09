class MobileNavbar {

 constructor( mobileMenu, navList, navLinks ){

        this.Mobilenavbar = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
}

addClinkEvent(){
    this.Mobilenavbar.addEventListener("clink", () => console.log("mulher nua"));
}

init(){
if(this.mobileMenu){
this.addClinkEvent();
}
return this;
}
}

const MobileNavbar = new MobileNavbar(".mobile-menu",".nav-list",".nav-list li");
MobileNavbar.init();
import Alpine from "alpinejs";
import setupViewTransition from "./components/viewTransition";

// import.meta.glob(["../images/**", "../fonts/**"]);
setupViewTransition(); 

// import nav from "./components/nav";
// Alpine.data("nav", nav);

window.Alpine = Alpine;
Alpine.start();

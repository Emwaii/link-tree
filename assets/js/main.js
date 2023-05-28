/*=============== SHOW HIDDEN - PASSWORD ===============*/
let docTitle = document.title;
window.addEventListener("blur", () => {
   document.title = "Come Back :(";
});

window.addEventListener("focus", ()=> {
   document.title = docTitle;
});
window.addEventListener('load', function() {
   // Hide the preloader once the webpage is fully loaded
   var preloader = document.getElementById('preloader');
   preloader.style.display = 'none';
   document.body.classList.remove('disable-scrolling');

});
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
      if(event.keyCode == 123) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
         return false;
      }
}

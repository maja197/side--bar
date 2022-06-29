const btnOpen = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const btnClose = document.querySelector(".close-btn");

btnOpen.addEventListener("click", function(){
   if (sidebar.classList.contains("show-sidebar")){
    sidebar.classList.remove("show-sidebar")
   } else {
    sidebar.classList.add("show-sidebar")
   }
})

btnClose.addEventListener("click", function(){
     sidebar.classList.remove("show-sidebar")
    
 })

    
let linkTop = document.getElementById("topBtn")
window.addEventListener('scroll' , function(){
    (document.documentElement.scrollTop > 100) 
    ? linkTop.style.display = "inline-block"
    : linkTop.style.display = "none"

})

let linkBottom = document.getElementById("bottomBtn")
window.addEventListener('scroll' , function(){
    // var body = document.body,
    //     html = document.documentElement;
    // var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    
    // console.log(height)//10107
    // (document.documentElement.scrollTop < document.documentElement.style.height - 100) 

    // var bodyScrollHeight = document.documentElement.scrollHeight - 700
    // console.log(bodyScrollHeight);
    var height = 10107
    (document.documentElement.scrollTop < height - 1350)  // 9000
    ? linkBottom.style.display = "inline-block"
    : linkBottom.style.display = "none"  
})


var owl = $('.owl-carousel');
owl.owlCarousel({
    navText:['<i class= "fas fa-long-arrow-alt-left me-3 bg-primary px-3 py-2 text-white" style=""></i>','<i class= "fas fa-long-arrow-alt-right ms-3 bg-primary px-3 py-2  text-white"></i>'],
    items:2,
    loop:true,
    nav:true,
    dots:false,
    margin:30,
});




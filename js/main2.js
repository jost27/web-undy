
  $(document).ready(function(){
          
 $(".modalimg").click(function(){
    $(".modal").hide();
  });
  $(".marco").click(function(){
       $(".modal").show();
     var a=0;
     if("i0"==$(this).attr('id')){
           a=2;
      }else if("i1"==$(this).attr('id')){
          a=1;
      }else if("i2"==$(this).attr('id')){
          a=0;
      }else if("i3"==$(this).attr('id')){
          a=1;
      }else if("i4"==$(this).attr('id')){
          a=0;
      }else if("i5"==$(this).attr('id')){
          a=2;
      }
slideIndex = a;
showSlides(slideIndex);

  });
});
    
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  
}
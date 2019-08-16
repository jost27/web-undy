
  $(document).ready(function(){
          
 $(".modalimg").click(function(){
    $(".modal").hide();
  });
  $(".marco").click(function(){
       $(".modal").show();
     var a=0;
     if("i0"==$(this).attr('id')){
           a=1;
      }else if("i1"==$(this).attr('id')){
          a=1;
      }else if("i2"==$(this).attr('id')){
          a=2;
      }else if("i3"==$(this).attr('id')){
          a=3;
      }else if("i4"==$(this).attr('id')){
          a=4;
      }else if("i5"==$(this).attr('id')){
          a=5;
      }else if("i6"==$(this).attr('id')){
          a=6;
      }else if("i7"==$(this).attr('id')){
          a=7;
      }else if("i8"==$(this).attr('id')){
          a=8;
      }else if("i9"==$(this).attr('id')){
          a=9;
     }else if("i10"==$(this).attr('id')){
          a=10;
      }else if("i11"==$(this).attr('id')){
          a=11;
      }else if("i12"==$(this).attr('id')){
          a=12;
      }else if("i13"==$(this).attr('id')){
          a=13;
      }else if("i14"==$(this).attr('id')){
          a=14;
      }else if("i15"==$(this).attr('id')){
          a=15;
      }else if("i16"==$(this).attr('id')){
          a=16;
      }else if("i17"==$(this).attr('id')){
          a=17;
      }else if("i18"==$(this).attr('id')){
          a=18;
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
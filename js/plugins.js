//deal with tabs
$('.tab-switch li').click(function(){
  //add selected class to active link
  $(this).addClass('selected').siblings().removeClass('selected');
  //hide all div
  $('.tabs-section .tabs-content > div').hide();
  // show div connected with this link
  $($(this).data('class')).show();
  });
//Get the button
var mybutton = document.getElementById("scroll-top");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
    

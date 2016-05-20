
//dropdown
$(".dropdown-button").dropdown();

//side nav bar
(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

//search google
function searchGoogle(){
  var searchText = document.getElementById("searchText");
  if(searchText != undefined && searchText != null && searchText.value != undefined && searchText.value != null && searchText.value.trim() != ''){
    var searchString = String(searchText.value).split(' ').join('+');
    window.open("http://www.google.com/#q=" + searchString);
  }else{
    window.open("http://www.google.com");
  }
}

//toast text
function toastText(){
  var toastText = document.getElementById("toastText");
  if(toastText != undefined && toastText != null && toastText.value != undefined && toastText.value != null && toastText.value.trim() != ''){
    Materialize.toast(toastText.value, 3000, 'rounded teal lighten-2');
  }else{
    Materialize.toast('Need content to toast', 3000, 'rounded teal lighten-2');
    toastText.value = '';
  }
}

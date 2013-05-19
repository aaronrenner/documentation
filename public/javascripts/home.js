$(function() {

  if (window.location.pathname != '/references'){
    var path = window.location.pathname.split( '/' ).pop(-1);
    $(".dropdown-menu").each(function(){
      current_section = $(this);
      current_section.find("a").each(function(){
        //console.log(path)
        if ($(this).attr("href").indexOf(path) != -1){
          current_section.addClass("expanded");
          $(this).addClass("active");
        }
      });
    });
  }

  $("ul.dropdown a.dropdown-toggle").click(function(){
    $("ul.dropdown .dropdown-menu").removeClass("expanded");
    $(this).next().toggleClass("expanded");
    return false
  });

  // mobile 
  $('#nav-toggle').on('click',function(e){
    $('#main-nav').toggleClass('expanded');
    $(this).toggleClass('expanded');
  });
  
  // top menu
  $('#main-nav li.guides > a').on('click', function(e){
    e.preventDefault();
    $('#guides').toggle();
  });
});
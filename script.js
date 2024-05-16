$(document).ready(function() {
  $('.next-btn').click(function() {
    debugger;
    // Move the form up
    $('#form-wrap').css({
      'marginTop': "-=132px"
    });
    
    // Move the progress bar to the right
    $('.progress-bar').css({
      'marginLeft': "+=13%"
    });
  });
});

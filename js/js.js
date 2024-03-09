$('.btn_data').click(function() {

    $('#container').show();
});
  

$('.close_container').click(function() {

    $('#container').hide();
});
  
  

$(document).ready(function() {
    ClassicEditor
      .create(document.querySelector('#editor'))
      .then(editor => {
        console.log(editor);
      })
      .catch(error => {
        console.error(error);
      });
  });
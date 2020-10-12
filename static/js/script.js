 $(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('select').formSelect();
    $('.datepicker').datepicker({
        format: "dd mmmm, yyyy", 
        range: 3,
        ShowClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
  });
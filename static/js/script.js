 $(document).ready(function(){
    $('.sidenav').sidenav({edge: "right"});
    $('.collapsible').collapsible();
    $('.tooltipped').tooltip();
    $('.datepicker').datepicker({
        format: "dd mmmm, yyyy", 
        year range: 3,
        ShowClearBtn: true,
        i18n: {
            done: "Select"
        }
    });
  });
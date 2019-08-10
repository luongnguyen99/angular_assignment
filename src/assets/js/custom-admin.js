jQuery(document).ready(function(e){
   
    jQuery("body").on("keypress keyup blur", "#acf-field_5cde73ab67d26-field_5cde73fb67d28", function(){
        jQuery(this).val(jQuery(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
    });
});

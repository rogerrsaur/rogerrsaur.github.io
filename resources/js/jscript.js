$(document).ready(function() {

    $("#2015").hide();
    
    $("#show2015").click(function() {
        $("#2014").hide();
        $("#2015").show();
    });
    
    $("#show2014").click(function() {
        $("#2015").hide();
        $("#2014").show();
    });

});
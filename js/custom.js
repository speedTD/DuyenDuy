$(function () {

    
    $(".header .nav-toggle").click(function(){
        $(this).addClass("active");
        $(".header .box-right").addClass("open");
        $("#overlay").addClass("show");
    });
    $("#overlay").click(function(){
        $(this).removeClass("show");
        $(".header .box-right").removeClass("open");
        $(".header .nav-toggle").removeClass("active");
    });
});
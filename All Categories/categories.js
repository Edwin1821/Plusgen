
$(document).ready(function(){

    $(".tab-menu").on("click" , "li" ,function(){

        $("li").removeClass("active");
        $(this).addClass("active");

        let attr = $(this).data("tab");

        $(".grp-medicine").removeClass("show");
        $("#" + attr).addClass("show");
    })
})
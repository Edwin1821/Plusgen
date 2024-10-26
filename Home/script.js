$(document).ready(function(){

    $(".left5content").on("click","li",function(){

        $("li").removeClass("active");
        $(this).addClass("active");

        let attrval = $(this).data("show");

        $(".slide").removeClass("click");
        $("#" + attrval).addClass("click");
    })
})




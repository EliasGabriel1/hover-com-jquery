$(".redes-sociais li").hover(
    function(){
        //Ao posicionar o cursor sobre a div
        $(this).addClass('red');
        $(".redes-sociais li").addClass("pink")
    },
    function(){
        //Ao remover o cursor da div
        $(".redes-sociais li").removeClass("pink")
        $(this).removeClass('red');
    }
)
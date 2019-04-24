$(function(){
    getScroll();
        //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
        function getScroll() {
            $(window).scroll(function(){
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    $("#back-to-top").fadeIn(500);
                }
                else
                {
                    $("#back-to-top").fadeOut(500);
                }
            });

            //当点击跳转链接后，回到页面顶部位置
            $("#back-to-top").click(function(){  
        scrollToptimer = setInterval(function () {
            var top = document.body.scrollTop || document.documentElement.scrollTop;
            var speed = top / 4;
            if (document.body.scrollTop!=0) {
                document.body.scrollTop -= speed;
            }else {
                document.documentElement.scrollTop -= speed;
            }
            if (top == 0) {
                clearInterval(scrollToptimer);
            }
        }, 30); 
        return false;  
           });       
     }; 

    //  随机颜色
    function getColor(){
        const arr=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
        let color='#';
        for(let i=0;i<6;i++){
            const num=Math.floor(Math.random() * 16);
            color+=arr[num];
        }
        return color;
    }  
    
    // 生成随机标签
    getTips()
    function getTips(){
        $('.tags ul li').each((index,ele)=>{
            $(ele).find('a').css('background',getColor());
        })
    }
});
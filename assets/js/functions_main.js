//boxShadow
$(function() {
    var img_count = $(".img").length
    img_count = img_count - 1
    var img_array = document.querySelectorAll(".img")
    var color_array = []
        //loop for genrating box shadow velue and setting them ta all .img class
    for (i = 0; i < img_count; i++) {
        //genrate rendom colors
        var rendom_color = 'rgba(' + (Math.floor(Math.random() * 100)) + ',' + (Math.floor(Math.random() * 150)) + ',' + (Math.floor(Math.random() * 150)) + ',0.2)';
        //genrate box shadow velue
        color_array[i] = rendom_color
    }
    //hover functuions
    // var colors = JSON.stringify(color_array);
    $(".img").hover(
        function() {
            var color_index = $.inArray(this, img_array)
            var boxShadow_velue = "0px 2px 2px " + color_array[color_index] + ",0px 4px 4px " + color_array[color_index] + ",0px 8px 8px " + color_array[color_index] + ",0px 16px 16px " + color_array[color_index] + ",0px 32px 32px " + color_array[color_index] + ",0px 64px 64px " + color_array[color_index];
            TweenMax.to(this, 0.3, {
                boxShadow: boxShadow_velue
            });
        },
        function() {
            var color_index = $.inArray(this, img_array)
            var boxShadow_velue = "0px 0px 0px " + color_array[color_index] + ",0px 0px 0px " + color_array[color_index] + ",0px 0px 0px " + color_array[color_index] + ",0px 0px 0px " + color_array[color_index] + ",0px 0px 0px " + color_array[color_index] + ",0px 0px 0px " + color_array[color_index];
            TweenMax.to(this, 0.3, {
                boxShadow: boxShadow_velue
            });
        })

})
$(function() {
    var a = []
    var array = document.querySelectorAll(".temp")
    var coll_num = $(".temp").length
    var uniqueNames = [];
    for (var i = 0; i < coll_num; i++) {
        a[i] = $(array[i]).text()
        $(array[i]).remove()
    }
    $.each(a, function(i, el) {
        if ($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
    });
    // console.log(uniqueNames);
})
$(function(){
  var tl = new TimelineMax();
  tl.set("svg path", {drawSVG:"0 0%"})
  .set("svg .spark path", {drawSVG:"40% 40%"})
  .set("svg", {opacity:"1"})

  .to("svg .outer", 0.4, {
    drawSVG:"0 100%"
  })
  .to("svg .spark path", 0.2, {
    drawSVG:"0% 70%",
    ease:Linear.easeNone
  })
  .to("svg .spark path", 0.2, {
    drawSVG:"100% 100%",
    ease:Linear.easeNone
  })
  .to("svg#five .outer", 0.3,{
      fill:"#FF7C33"
  })
  .to("svg#three .outer", 0.3,{
      fill:"#2470E0"
  },"-=0.3")
  .to("svg#js .outer", 0.3,{
      fill:"#8ACF17"
  },"-=0.3")
  .to("svg .inner" ,0.4, {
    drawSVG:"0 100%"
  })
  .to("svg .top path" ,0.4, {
    drawSVG:"0 100%",
    ease:Linear.easeNone
  })
})

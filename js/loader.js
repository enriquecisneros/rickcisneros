function hide_preloader(){rotate=0,$("#preloader").fadeOut(1e3)}rotate=1,$(document).ready(function(){function e(){$("#preloader_image").animate({left:"-1400px"},8e3,function(){$("#preloader_image").animate({left:"0px"},5e3),1==rotate&&e()})}var a=$(window).height(),t=10,o=a/2-t;$("#preloader").css("padding-top",o+"px"),e()});
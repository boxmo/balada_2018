// CSS
import './assets/css/layout.sass';

// JS
import $ from 'jquery';
import popper from 'popper.js';
import * as bootstrap from 'bootstrap';
import fullclip from './assets/js/fullclip.js';
import photos from './assets/img/equipe.js';

window.jQuery = $;
$.fn.fullclip = fullclip;

$('document').ready( () => {

  console.log("#ELENÃO");

  $(".fullBackground").fullclip({
    images: photos.imgs,
    wait: 6000
  });

  $("#divider1").fullclip({
    images: photos.firstBgs,
    wait: 6000
  });

  $("#divider2").fullclip({
    images: photos.secondBgs,
    wait: 6000
  });

  $(".navbar-nav li a").on("click", function(e){
    var anchor = $(this).attr("href");
    $([document.documentElement, document.body]).animate({
      scrollTop: $(anchor).offset().top - 40
    }, 500);
  });

  //const monthDay = new Date().getDate();
  // const dayTrigger = $("#schedule-day-nav li").find(`[data-day="${monthDay}"]`);
  // console.log(dayTrigger);

});

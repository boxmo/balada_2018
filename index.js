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

  $("#schedule-select").on("change", function(e) {
    let href = $(this).val();
    let target = $("#schedule").find(`[href='${href}']`);
    $(target).click();
  });

  $(".nav-cust").each(function(){
    var sel = $(this).prev(".form-control")
    if(!sel.length){
      const select = $("<select>").insertBefore($(this));
      select.addClass("form-control mb-5 d-sm-none d-block");
      $(this).find("a.nav-link").each(function(){
        let value = $(this).attr("href");
        let text  = $(this).text();
        let option = $("<option>").attr("value", value).text(text)
        select.append(option);
      });
      select.on("change", function(){
        let value = $(this).val();
        let btn = $(`a[href='${value}']`);
        let target = $(value);
        btn.click();
        console.log(target.is(":visible"));
        var checkExist = setInterval(function() {
           if (target.is(":visible")) {
             $([document.documentElement, document.body]).animate({
               scrollTop: target.offset().top - 150
             }, 500);
              clearInterval(checkExist);
           }
        }, 100);
      });
    }
  });

  //const monthDay = new Date().getDate();
  // const dayTrigger = $("#schedule-day-nav li").find(`[data-day="${monthDay}"]`);
  // console.log(dayTrigger);

});

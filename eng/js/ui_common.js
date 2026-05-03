window.addEventListener('DOMContentLoaded', function() {
  //사이드맵 열고 닫기
  $('#sitemapBtn').click(function(e){
    let expanded = $(this).attr('aria-expanded');
    if(expanded == 'false') {
      $('#sitemapArea').show();
      $(this).attr('aria-expanded', 'true');
      $('.sitemapNav').prepend('<div class="dim"></div>');
    } else {
      $('#sitemapArea').hide();
      $(this).attr('aria-expanded', 'false');
      $('.sitemapNav > .dim').remove();
    }      
  });
  $('#sitemapBtn').on('focusin', function(){
    gnbClose();
  });

  //GNB
  $('.engGnb > ul > li').hover(
    function(){
      $(this).children(".engGnb__sub").stop().slideDown(200);
      $(this).addClass('on');
      $('.engGnb').addClass('open');
      $('.engHeader').prepend('<div class="dim"></div>');
    },
    function(){
      $(this).children(".engGnb__sub").hide();
      $(this).removeClass('on');
      $('.engGnb').removeClass('open');
      $('.engHeader > .dim').remove();
    }
  );

  $(".engGnb > ul > li").focusin(function(){
    sitemapClose();
    $(this).children(".engGnb__sub").slideDown(200); 
    $(this).siblings().children(".engGnb__sub").hide();  
    $(this).addClass('on');
    $(this).siblings().removeClass('on');
    $('.engGnb').addClass('open');
    if($('.engHeader > .dim').hasClass('dim') == false){
      $('.engHeader').prepend('<div class="dim"></div>');
    }  
  });

  $(".breadcrumb__home").focusin(function(){
    gnbClose();
  });


  function gnbClose() {
    $(".engGnb__sub").hide();
    $('.engGnb > ul > li').removeClass('on');
    $('.engGnb').removeClass('open');
    $('.engHeader > .dim').remove();
  }
  function sitemapClose() {
    $('#sitemapArea').hide();
    $('.sitemap').attr('aria-expanded', 'false');
    $('.sitemapNav > .dim').remove();
  }

  $('.engLnb__depth1').click(function(){
    let expanded = $(this).attr('data-expanded');
    if(expanded == 'false') {
      $(this).next().stop().slideDown(200);
      $(this).attr('data-expanded', 'true');
    } else {
      $(this).next().stop().slideUp(200);
      $(this).attr('data-expanded', 'false');
    }
    
  });
});

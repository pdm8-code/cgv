$(document).ready(function(){
      
  //헤더 서브메뉴
  $(".nav-list a").mouseenter(function(){
    $(".nav-wrap .sub-menu").stop().slideDown();
  });
  $(".nav-wrap").mouseleave(function(){
    $(".nav-wrap .sub-menu").stop().slideUp();
  });

  //비디오 정지/재생 이벤트
  $(".video-content .video-controls button.pause-btn").click(function(){
    var video = $("video")

    $(this).toggleClass("active");

    if($(this).hasClass("active")) {
      video.get(0).pause();
    } else {
      video.get(0).play();
    };
  });

  //비디오 소리/음소거 이벤트
  $(".video-content .video-controls button.sound-btn").click(function(){
    var video = $("video")
    
    $(this).toggleClass("active");

    if($(this).hasClass("active")) {
      video.prop('muted', true);
    } else {
      video.prop('muted', false);
    }
  });

  // 비디오 종료시 재생버튼 전환
  $("video").on("ended", function(){
    $(".video-content .video-controls button.pause-btn").addClass("active");
  });

  // 무비차트
  var moviechartswiper = new Swiper('#moviechart-list', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 32,
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.moviechart-swiper .swiper-button-next',
      prevEl: '.moviechart-swiper .swiper-button-prev',
    },
  });

  //상영예정작
  var filmswiper = new Swiper('#film-list', {
    slidesPerView: 5,
    slidesPerGroup: 5,
    spaceBetween: 32,
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.moviechart-swiper .swiper-button-next',
      prevEl: '.moviechart-swiper .swiper-button-prev',
    },
  });

  $(".film").on("click", function(){
    $("#film-list").show();
    $("#moviechart-list").hide();
    $(".moviechart").css("color", "#666");
    $(".moviechart").css("font-weight", "400");
    $(this).css("color", "#222");
    $(this).css("font-weight", "700");
  });

  $(".moviechart").on("click", function(){
    $("#moviechart-list").show();
    $("#film-list").hide();
    $(".film").css("color", "#666");
    $(".film").css("font-weight", "400");
    $(this).css("color", "#222");
    $(this).css("font-weight", "700");
  });

  // nav-fixed (스크롤 이벤트)
  $(window).scroll(function(){
      var headerTop = $("header").offset().top;           // header의 화면 위쪽에서부터의 거리
      var headerHeight = $("header").outerHeight(true);   // header의 외부 높이(true = 마진을 포함한 값)
      var fixedH = headerTop + headerHeight;              // 고정 헤더가 시작되는 위치 = header의 끝 부분
      var currentScrollTop = $(document).scrollTop();     // 현재 스크롤 위치
      
      if(currentScrollTop >= fixedH) {    // 현재 스크롤 위치가 고정 헤더의 시작 위치보다 크거나 같다면
          $(".nav-fixed").show();
      } else {
        $(".nav-fixed").hide();
      }
  });   
  
  // nav-fixed 서브메뉴 
  $(".nav-fixed .container ul li a").mouseenter(function(){
    $(".nav-fixed .sub-menu").stop().slideDown();
  });

  $(".nav-fixed").mouseleave(function(){
    $(".nav-fixed .sub-menu").stop().slideUp();
  });

  // 이벤트 스와이퍼
  var eventswiper = new Swiper('.event-swiper', {
    autoplay: {
      delay: 3000
    },
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 24,
    direction: 'horizontal',
    // Navigation arrows
    navigation: {
      nextEl: '.event-swiper .swiper-button-next',
      prevEl: '.event-swiper .swiper-button-prev',
    },
  });

  // 이벤트 스와이퍼 정지/재생 이벤트
  $(".event-header .stop-btn").click(function(){
    if(eventswiper.autoplay.running) {
      eventswiper.autoplay.stop();
      $(this).addClass("active");
    } else {
      eventswiper.autoplay.start();
      $(this).removeClass("active");
    }
  });

  // 특별관 hover 이벤트 
  $(".specialhall-content ul li").mouseenter(function () { 
    var index = $(this).index() + 1;

    $(".specialhall-content .specialhall-img").css("background-image", "url(assets/img/specialHall_content" + index + ".png)");

    $(".specialhall-content ul li").removeClass("active");
    $(this).addClass("active");
  });

  // 탑 버튼
  $('.header .btn_ticketing_Wrap a.arrowU').on('click',function(){
    $('html,body').animate({scrollTop: 0},500);
  }); 
});
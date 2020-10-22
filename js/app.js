$(window).on("load", function () {
  fun_display_loader();
  setTimeout(fun_play_img(), 500);
  setTimeout(fun_display_img, 1500);
});

function fun_display_loader() {
  $("#loader").css("display", "none");
}
function fun_play_img() {
  $("#mu-tran").addClass("Move");
  $(".mu-main").css("display", "block");
}
function fun_display_img() {
  $("#mu-tran").css("display", "none");
}

$(window).scroll(function () {
  var offset = $(window).scrollTop();
  offset = offset * 0.2;

  $(".mu-img-scroll").css({
    "-moz-transform": "rotate(" + offset + "deg)",
    "-webkit-transform": "rotate(" + offset + "deg)",
    "-o-transform": "rotate(" + offset + "deg)",
    "-ms-transform": "rotate(" + offset + "deg)",
    transform: "rotate(" + offset + "deg)",
  });
});

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  var animationSpeed = 0.75;
  var animationTimingIn = Expo.easeIn;
  var animationTimingOut = Expo.easeOut;

  /**header */
  var Header_TL = new TimelineMax({ paused: true });

  var header_section = $(".mu-bg-header");
  var text_span_h = $(header_section).find(".mu-solid span");
  var bg_text_h = $(header_section).find(".bg");
  var text_h = $(header_section).find(".mu-text-h");
  var button_h = $(header_section).find(".button-container-2");

  Header_TL.fromTo(
    header_section,
    animationSpeed,
    { y: -1500, opacity: 0, ease: animationTimingIn },
    { y: 0, opacity: 1, ease: animationTimingOut },
    "+=.7"
  )
    .fromTo(
      bg_text_h,
      animationSpeed,
      { width: "140px", opacity: 1, ease: animationTimingIn },
      { width: "0px", opacity: 0, ease: animationTimingIn },
      "+=.1"
    )
    .fromTo(
      text_span_h,
      animationSpeed,
      { opacity: 0, ease: animationTimingIn },
      { width: "0px", opacity: 1, ease: animationTimingIn },
      "-=.1"
    )
    .staggerFromTo(
      text_h,
      animationSpeed,
      { y: "120%", opacity: 0, ease: animationTimingIn },
      { y: "0%", opacity: 1, ease: animationTimingOut },
      0.25
    )
    .fromTo(
      button_h,
      animationSpeed,
      { y: -50, opacity: 0, ease: animationTimingIn },
      { y: 0, opacity: 1, ease: animationTimingOut },
      2.1
    );
  Header_TL.play();

  /**service */
  var Service_TL = new TimelineMax({ paused: true });

  var service_section = $(".serv-section");
  var text_serv = $(service_section).find("h4");
  var img_all_x = $(service_section).find(".mu-s-bg");
  var img_sec_s = $(service_section).find(".mu-img-l");

  Service_TL.fromTo(
    service_section,
    animationSpeed,
    { x: "-100%", ease: animationTimingIn },
    { x: "0%", ease: animationTimingOut }
  )
    .fromTo(
      text_serv,
      animationSpeed,
      { opacity: 0, ease: animationTimingIn },
      { opacity: 1, ease: animationTimingOut }
    )
    .fromTo(
      img_all_x,
      animationSpeed,
      { x: "0%", ease: animationTimingIn },
      { x: "100%", display: "none", ease: animationTimingOut }
    )
    .fromTo(
      img_sec_s,
      animationSpeed,
      { x: "-100%", ease: animationTimingIn },
      { x: "100%", ease: animationTimingOut },
      "-=0.58"
    );
  /*Scene */
  new ScrollMagic.Scene({
    triggerElement: ".serv-section",
    triggerHook: 0.75,
  })
    .setTween(Service_TL)
    .reverse(true)
    .addTo(controller);

  /**about */
  var About_TL = new TimelineMax({ paused: true });

  var about_section = $(".about-section");
  var title_about = $(about_section).find(".mu-header-title");
  var para_about = $(about_section).find(".about-info p");

  About_TL.fromTo(
    title_about,
    animationSpeed,
    { opacity: 0, x: "-100px", animationTimingIn },
    { opacity: 1, x: "0px", animationTimingOut }
  ).fromTo(
    para_about,
    animationSpeed,
    { opacity: 0, x: "100px", animationTimingIn },
    { opacity: 1, x: "0px", animationTimingOut },
    0.2
  );

  /*Scene */
  new ScrollMagic.Scene({
    triggerElement: ".about-section",
    triggerHook: 0.7,
  })
    .setTween(About_TL)
    .reverse(true)
    .addTo(controller);

  /**skills */
  /*new add*/
  var skills_section = $(".skills-section");
  var title_skills = $(skills_section).find(".mu-header-title");

  var Skills_TL = new TimelineMax({ paused: true });

  Skills_TL.fromTo(
    title_skills,
    animationSpeed,
    { opacity: 0, animationTimingIn },
    { opacity: 1, animationTimingOut }
  );
  Skills_TL.from("#UiDesing", 4, {
    y: 500,
    x: 1000,
    scale: 0,
    opacity: 0,
    ease: Power3.easeInOut,
  })
    .from(
      "#HTML5",
      4,
      {
        y: 500,
        x: 950,
        scale: 0,
        opacity: 0,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      "#UIKIT",
      4,
      {
        y: 500,
        x: 900,
        scale: 0,
        opacity: 0,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      "#ReactJs",
      4,
      {
        y: 500,
        x: 900,
        scale: 0,
        opacity: 0,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      "#JavaScript",
      4,
      {
        y: 500,
        x: 950,
        scale: 0,
        opacity: 0,
        ease: Power3.easeInOut,
      },
      "-=4"
    )
    .from(
      "#CSS3",
      4,
      {
        y: 500,
        x: 1000,
        scale: 0,
        opacity: 0,
        ease: Power3.easeInOut,
      },
      "-=4"
    );

  new ScrollMagic.Scene({
    triggerElement: ".skills-section",
    duration: "100%",
    triggerHook: 0,
  })
    .setTween(Skills_TL)
    .reverse(true)
    .setPin(".skills-section")
    .addTo(controller);

  //   var part1 = $(skills_section).find("#B");
  //   var part2 = $(skills_section).find(".mu-hover-part");

  //   /*Scene */
  // new ScrollMagic.Scene({
  //   triggerElement: ".skills-section",
  //   triggerHook: 0.7,
  // })
  //   .setTween(Skills_TL)
  //   .reverse(true)
  //   .addTo(controller);

  /**project */
  var Project_TL = new TimelineMax({ paused: true });

  var project_section = $(".project-section");
  var img_part = $(project_section).find(".proj-img-bg");

  Project_TL.staggerFromTo(
    img_part,
    animationSpeed,
    { y: "100%", animationTimingIn },
    { y: "0%", animationTimingOut },
    0.25
  );

  /*Scene */
  new ScrollMagic.Scene({
    triggerElement: ".project-section",
    triggerHook: 0.7,
  })
    .setTween(Project_TL)
    .reverse(true)
    .addTo(controller);
});

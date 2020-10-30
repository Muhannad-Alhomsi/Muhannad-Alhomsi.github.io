var _0x34e6 = [
  "100px",
  "addClass",
  ".mu-img-scroll",
  "addTo",
  "-100px",
  ".about-info\x20p",
  "#JavaScript",
  "-=0.58",
  "-=.1",
  "-100%",
  "#loader",
  "scrollTop",
  "css",
  "find",
  "140px",
  "setTween",
  "#ReactJs",
  "rotate(",
  "scroll",
  ".serv-section",
  ".project-section",
  "Scene",
  ".skills-section",
  ".mu-main",
  "play",
  "easeInOut",
  "display",
  "easeIn",
  ".about-section",
  "100%",
  "#mu-tran",
  ".button-container-2",
  "staggerFromTo",
  ".mu-text-h",
  "+=.1",
  "deg)",
  "#CSS3",
  "Move",
  ".proj-img-bg",
  "fromTo",
  ".bg",
  "-=4",
  "from",
  "+=.7",
  "easeOut",
  "ready",
  "setPin",
  "#UIKIT",
  "0px",
  "reverse",
  "none",
  "#UiDesing",
  "block",
];
(function (_0x388f5f, _0x34e6df) {
  var _0x37beec = function (_0x1d03ca) {
    while (--_0x1d03ca) {
      _0x388f5f["push"](_0x388f5f["shift"]());
    }
  };
  _0x37beec(++_0x34e6df);
})(_0x34e6, 0x9b);
var _0x37be = function (_0x388f5f, _0x34e6df) {
  _0x388f5f = _0x388f5f - 0x0;
  var _0x37beec = _0x34e6[_0x388f5f];
  return _0x37beec;
};
var _0x4fafc8 = _0x37be;
$(window)["on"]("load", function () {
  fun_display_loader(),
    setTimeout(fun_play_img(), 0x1f4),
    setTimeout(fun_display_img, 0x5dc);
});
function fun_display_loader() {
  var _0x514dd0 = _0x37be;
  $(_0x514dd0("0xe"))[_0x514dd0("0x10")](_0x514dd0("0x1e"), _0x514dd0("0x1"));
}
function fun_play_img() {
  var _0x230a87 = _0x37be;
  $(_0x230a87("0x22"))[_0x230a87("0x5")](_0x230a87("0x29")),
    $(_0x230a87("0x1b"))[_0x230a87("0x10")]("display", _0x230a87("0x3"));
}
function fun_display_img() {
  var _0x287e35 = _0x37be;
  $(_0x287e35("0x22"))["css"](_0x287e35("0x1e"), _0x287e35("0x1"));
}
$(window)[_0x4fafc8("0x16")](function () {
  var _0x42b9a3 = _0x4fafc8,
    _0x1d03ca = $(window)[_0x42b9a3("0xf")]();
  (_0x1d03ca = _0x1d03ca * 0.2),
    $(_0x42b9a3("0x6"))[_0x42b9a3("0x10")]({
      "-moz-transform": _0x42b9a3("0x15") + _0x1d03ca + _0x42b9a3("0x27"),
      "-webkit-transform": _0x42b9a3("0x15") + _0x1d03ca + _0x42b9a3("0x27"),
      "-o-transform": _0x42b9a3("0x15") + _0x1d03ca + _0x42b9a3("0x27"),
      "-ms-transform": _0x42b9a3("0x15") + _0x1d03ca + _0x42b9a3("0x27"),
      transform: "rotate(" + _0x1d03ca + _0x42b9a3("0x27"),
    });
}),
  $(document)[_0x4fafc8("0x31")](function () {
    var _0x21162b = _0x4fafc8,
      _0x376204 = new ScrollMagic["Controller"](),
      _0xff2d9f = 0.75,
      _0x58cf37 = Expo[_0x21162b("0x1f")],
      _0xae8336 = Expo[_0x21162b("0x30")],
      _0x7e6156 = new TimelineMax({ paused: !![] }),
      _0x39fa9b = $(".mu-bg-header"),
      _0x4f9d0c = $(_0x39fa9b)["find"](".mu-solid\x20span"),
      _0x39e7d6 = $(_0x39fa9b)[_0x21162b("0x11")](_0x21162b("0x2c")),
      _0x41f74a = $(_0x39fa9b)[_0x21162b("0x11")](_0x21162b("0x25")),
      _0x335ef4 = $(_0x39fa9b)[_0x21162b("0x11")](_0x21162b("0x23"));
    _0x7e6156[_0x21162b("0x2b")](
      _0x39fa9b,
      _0xff2d9f,
      { y: -0x5dc, opacity: 0x0, ease: _0x58cf37 },
      { y: 0x0, opacity: 0x1, ease: _0xae8336 },
      _0x21162b("0x2f")
    )
      [_0x21162b("0x2b")](
        _0x39e7d6,
        _0xff2d9f,
        { width: _0x21162b("0x12"), opacity: 0x1, ease: _0x58cf37 },
        { width: _0x21162b("0x34"), opacity: 0x0, ease: _0x58cf37 },
        _0x21162b("0x26")
      )
      [_0x21162b("0x2b")](
        _0x4f9d0c,
        _0xff2d9f,
        { opacity: 0x0, ease: _0x58cf37 },
        { width: _0x21162b("0x34"), opacity: 0x1, ease: _0x58cf37 },
        _0x21162b("0xc")
      )
      [_0x21162b("0x24")](
        _0x41f74a,
        _0xff2d9f,
        { y: "120%", opacity: 0x0, ease: _0x58cf37 },
        { y: "0%", opacity: 0x1, ease: _0xae8336 },
        0.25
      )
      [_0x21162b("0x2b")](
        _0x335ef4,
        _0xff2d9f,
        { y: -0x32, opacity: 0x0, ease: _0x58cf37 },
        { y: 0x0, opacity: 0x1, ease: _0xae8336 },
        2.1
      ),
      _0x7e6156[_0x21162b("0x1c")]();
    var _0x188e64 = new TimelineMax({ paused: !![] }),
      _0x53a52b = $(_0x21162b("0x17")),
      _0x4f5905 = $(_0x53a52b)[_0x21162b("0x11")]("h4"),
      _0xf700a7 = $(_0x53a52b)[_0x21162b("0x11")](".mu-s-bg"),
      _0x52b783 = $(_0x53a52b)["find"](".mu-img-l");
    _0x188e64[_0x21162b("0x2b")](
      _0x53a52b,
      _0xff2d9f,
      { x: "-100%", ease: _0x58cf37 },
      { x: "0%", ease: _0xae8336 }
    )
      ["fromTo"](
        _0x4f5905,
        _0xff2d9f,
        { opacity: 0x0, ease: _0x58cf37 },
        { opacity: 0x1, ease: _0xae8336 }
      )
      [_0x21162b("0x2b")](
        _0xf700a7,
        _0xff2d9f,
        { x: "0%", ease: _0x58cf37 },
        { x: _0x21162b("0x21"), display: _0x21162b("0x1"), ease: _0xae8336 }
      )
      ["fromTo"](
        _0x52b783,
        _0xff2d9f,
        { x: _0x21162b("0xd"), ease: _0x58cf37 },
        { x: _0x21162b("0x21"), ease: _0xae8336 },
        _0x21162b("0xb")
      ),
      new ScrollMagic[_0x21162b("0x19")]({
        triggerElement: _0x21162b("0x17"),
        triggerHook: 0.75,
      })
        ["setTween"](_0x188e64)
        [_0x21162b("0x0")](!![])
        [_0x21162b("0x7")](_0x376204);
    var _0x5ab92f = new TimelineMax({ paused: !![] }),
      _0x498da8 = $(_0x21162b("0x20")),
      _0x4e8135 = $(_0x498da8)["find"](".mu-header-title"),
      _0x3157bb = $(_0x498da8)["find"](_0x21162b("0x9"));
    _0x5ab92f[_0x21162b("0x2b")](
      _0x4e8135,
      _0xff2d9f,
      { opacity: 0x0, x: _0x21162b("0x8"), animationTimingIn: _0x58cf37 },
      { opacity: 0x1, x: _0x21162b("0x34"), animationTimingOut: _0xae8336 }
    )[_0x21162b("0x2b")](
      _0x3157bb,
      _0xff2d9f,
      { opacity: 0x0, x: _0x21162b("0x4"), animationTimingIn: _0x58cf37 },
      { opacity: 0x1, x: _0x21162b("0x34"), animationTimingOut: _0xae8336 },
      0.2
    ),
      new ScrollMagic[_0x21162b("0x19")]({
        triggerElement: ".about-section",
        triggerHook: 0.7,
      })
        [_0x21162b("0x13")](_0x5ab92f)
        [_0x21162b("0x0")](!![])
        [_0x21162b("0x7")](_0x376204);
    var _0x3feee2 = $(_0x21162b("0x1a")),
      _0x11289c = $(_0x3feee2)[_0x21162b("0x11")](".mu-header-title"),
      _0x443d0b = new TimelineMax({ paused: !![] });
    _0x443d0b["fromTo"](
      _0x11289c,
      _0xff2d9f,
      { opacity: 0x0, animationTimingIn: _0x58cf37 },
      { opacity: 0x1, animationTimingOut: _0xae8336 }
    ),
      _0x443d0b["from"](_0x21162b("0x2"), 0x4, {
        y: 0x1f4,
        x: 0x3e8,
        scale: 0x0,
        opacity: 0x0,
        ease: Power3[_0x21162b("0x1d")],
      })
        ["from"](
          "#HTML5",
          0x4,
          {
            y: 0x1f4,
            x: 0x3b6,
            scale: 0x0,
            opacity: 0x0,
            ease: Power3[_0x21162b("0x1d")],
          },
          _0x21162b("0x2d")
        )
        [_0x21162b("0x2e")](
          _0x21162b("0x33"),
          0x4,
          {
            y: 0x1f4,
            x: 0x384,
            scale: 0x0,
            opacity: 0x0,
            ease: Power3[_0x21162b("0x1d")],
          },
          _0x21162b("0x2d")
        )
        [_0x21162b("0x2e")](
          _0x21162b("0x14"),
          0x4,
          {
            y: 0x1f4,
            x: 0x384,
            scale: 0x0,
            opacity: 0x0,
            ease: Power3[_0x21162b("0x1d")],
          },
          _0x21162b("0x2d")
        )
        [_0x21162b("0x2e")](
          _0x21162b("0xa"),
          0x4,
          {
            y: 0x1f4,
            x: 0x3b6,
            scale: 0x0,
            opacity: 0x0,
            ease: Power3[_0x21162b("0x1d")],
          },
          _0x21162b("0x2d")
        )
        [_0x21162b("0x2e")](
          _0x21162b("0x28"),
          0x4,
          {
            y: 0x1f4,
            x: 0x3e8,
            scale: 0x0,
            opacity: 0x0,
            ease: Power3[_0x21162b("0x1d")],
          },
          _0x21162b("0x2d")
        ),
      new ScrollMagic[_0x21162b("0x19")]({
        triggerElement: ".skills-section",
        duration: _0x21162b("0x21"),
        triggerHook: 0x0,
      })
        [_0x21162b("0x13")](_0x443d0b)
        ["reverse"](!![])
        [_0x21162b("0x32")](_0x21162b("0x1a"))
        ["addTo"](_0x376204);
    var _0x5673c6 = new TimelineMax({ paused: !![] }),
      _0x45f9b9 = $(".project-section"),
      _0x17b2a5 = $(_0x45f9b9)[_0x21162b("0x11")](_0x21162b("0x2a"));
    _0x5673c6[_0x21162b("0x24")](
      _0x17b2a5,
      _0xff2d9f,
      { y: "100%", animationTimingIn: _0x58cf37 },
      { y: "0%", animationTimingOut: _0xae8336 },
      0.25
    ),
      new ScrollMagic[_0x21162b("0x19")]({
        triggerElement: _0x21162b("0x18"),
        triggerHook: 0.7,
      })
        [_0x21162b("0x13")](_0x5673c6)
        [_0x21162b("0x0")](!![])
        [_0x21162b("0x7")](_0x376204);
  });

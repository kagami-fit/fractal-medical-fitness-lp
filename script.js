// lp_JS
jQuery("#js-drawer-icon").on("click", function (e) {
  e.preventDefault(),
    jQuery("#js-drawer-icon").toggleClass("is-checked"),
    jQuery("#js-drawer-open").toggleClass("is-checked");
}),
  jQuery('#js-drawer-open a[href^="#"]').on("click", function (e) {
    jQuery("#js-drawer-icon").removeClass("is-checked"),
      jQuery("#js-drawer-open").removeClass("is-checked");
  }),
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".js-title").forEach((e) => {
      var r = e.getBoundingClientRect(),
        o = window.innerHeight;
      r.top < o - 100 && e.classList.add("is-visible");
    });
  }),
  window.addEventListener("load", function () {
    gsap.registerPlugin(ScrollTrigger);
    for (let e = 0; e < 5; e++)
      ((e, r) => {
        e.forEach((e) => {
          ScrollTrigger.create({
            trigger: e,
            start: "top 80%",
            onEnter: () => {
              setTimeout(() => {
                e.classList.add("js-show");
              }, r);
            },
          });
        });
      })(document.querySelectorAll(".animated__fadeIn.--delay" + e), 150 * e);
  }),
  -1 < navigator.userAgent.toLowerCase().indexOf("firefox") &&
    document.documentElement.classList.add("is-firefox");

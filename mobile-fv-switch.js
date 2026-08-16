(() => {
  const variant = new URLSearchParams(window.location.search).get("fv");
  const imageByVariant = {
    b: "compare-b/fv-mobile-b.png?v=20260817-mobile-fv-b",
    d: "compare-d/fv-mobile-d.png?v=20260817-mobile-fv-d",
  };
  const mobileImage = imageByVariant[variant];

  if (!mobileImage) return;

  const applyVariant = () => {
    const picture = document.querySelector(".fv__generated-picture");
    if (!picture || picture.querySelector('source[data-fv-variant="true"]')) {
      return;
    }

    const source = document.createElement("source");
    source.media = "(max-width: 767px)";
    source.srcset = mobileImage;
    source.dataset.fvVariant = "true";
    picture.insertBefore(source, picture.firstElementChild);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyVariant, { once: true });
  } else {
    applyVariant();
  }
})();

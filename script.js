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

(function () {
  document.querySelectorAll("[data-facility-slideshow]").forEach(function (gallery) {
    var track = gallery.querySelector(".facility-slideshow__track");
    var slides = Array.from(
      gallery.querySelectorAll(".facility-slideshow__slide")
    );
    var dots = Array.from(gallery.querySelectorAll(".facility-slideshow__dot"));
    var previous = gallery.querySelector(".facility-slideshow__control--prev");
    var next = gallery.querySelector(".facility-slideshow__control--next");
    var intervalMs = Math.max(
      1000,
      Number(gallery.getAttribute("data-slide-interval")) || 3000
    );
    var current = 0;
    var timer = null;
    var editorGrid = null;
    var editorOutput = null;
    var draggedItem = null;
    var pointerDrag = null;
    var editorMode =
      new URLSearchParams(window.location.search).get("facility-editor") === "1";
    var reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    var defaultOrder = [];

    slides.forEach(function (slide, i) {
      var id = String(i + 1);
      slide.setAttribute("data-slide-id", id);
      defaultOrder.push(id);
    });
    dots.forEach(function (dot, i) {
      dot.setAttribute("data-slide-id", String(i + 1));
    });

    if (slides.length < 2) return;

    function parseOrder(value) {
      if (!value) return [];
      return value
        .split(/[,-]/)
        .map(function (id) {
          return id.trim();
        })
        .filter(function (id) {
          return /^\d+$/.test(id);
        });
    }

    function getOrder() {
      return slides.map(function (slide) {
        return slide.getAttribute("data-slide-id");
      });
    }

    function completeOrder(ids) {
      var available = {};
      var result = [];
      slides.forEach(function (slide) {
        available[slide.getAttribute("data-slide-id")] = true;
      });
      ids.concat(defaultOrder).forEach(function (id) {
        if (available[id] && result.indexOf(id) === -1) result.push(id);
      });
      return result;
    }

    function updateOrderUrl() {
      if (!editorMode || !window.history || !window.history.replaceState) return;
      var params = new URLSearchParams(window.location.search);
      params.set("facility-editor", "1");
      params.set("facility-order", getOrder().join("-"));
      window.history.replaceState(
        null,
        "",
        window.location.pathname + "?" + params.toString() + window.location.hash
      );
    }

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        var active = i === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
      });
      dots.forEach(function (dot, i) {
        var active = i === current;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-selected", active ? "true" : "false");
      });
    }

    function formatEditorPosition(index) {
      return (index + 1 < 10 ? "0" : "") + (index + 1);
    }

    function updateEditorPositions() {
      if (!editorGrid) return;
      Array.from(editorGrid.children).forEach(function (item, index) {
        var position = item.querySelector(
          ".facility-slideshow__editor-position"
        );
        if (position) position.textContent = formatEditorPosition(index);
      });
    }

    function clearDropTarget() {
      if (!editorGrid) return;
      editorGrid
        .querySelectorAll(".facility-slideshow__editor-item.is-drop-target")
        .forEach(function (item) {
          item.classList.remove("is-drop-target");
        });
    }

    function getDropAfter(event, item) {
      var rect = item.getBoundingClientRect();
      var deltaX = event.clientX - (rect.left + rect.width / 2);
      var deltaY = event.clientY - (rect.top + rect.height / 2);
      return Math.abs(deltaX) > Math.abs(deltaY) ? deltaX > 0 : deltaY > 0;
    }

    function placeDraggedItem(item, event) {
      var after;
      if (!editorGrid || !draggedItem || item === draggedItem) return;
      after = getDropAfter(event, item);
      if (after) {
        editorGrid.insertBefore(draggedItem, item.nextSibling);
      } else {
        editorGrid.insertBefore(draggedItem, item);
      }
      clearDropTarget();
      item.classList.add("is-drop-target");
      updateEditorPositions();
    }

    function finishPointerDrag(event) {
      var item;
      var handle;
      if (!pointerDrag || event.pointerId !== pointerDrag.pointerId) return;
      item = pointerDrag.item;
      handle = pointerDrag.handle;
      if (
        handle.hasPointerCapture &&
        handle.hasPointerCapture(event.pointerId)
      ) {
        handle.releasePointerCapture(event.pointerId);
      }
      item.classList.remove("is-pointer-dragging");
      clearDropTarget();
      pointerDrag = null;
      draggedItem = null;
      if (editorGrid && editorGrid.contains(item)) syncEditorOrder();
      start();
    }

    function renderEditor() {
      if (!editorGrid) return;
      editorGrid.innerHTML = "";
      slides.forEach(function (slide, index) {
        var id = slide.getAttribute("data-slide-id");
        var source = slide.querySelector("img");
        var item = document.createElement("div");
        var header = document.createElement("div");
        var position = document.createElement("span");
        var previewButton = document.createElement("button");
        var previewImage = source.cloneNode(true);
        var label = document.createElement("span");
        var description = document.createElement("span");
        var handle = document.createElement("button");
        var actions = document.createElement("div");
        var up = document.createElement("button");
        var down = document.createElement("button");

        item.className = "facility-slideshow__editor-item";
        item.draggable = true;
        item.setAttribute("data-slide-id", id);
        item.setAttribute(
          "aria-label",
          "画像" + id + "、現在" + formatEditorPosition(index) + "番目"
        );
        header.className = "facility-slideshow__editor-header";
        position.className = "facility-slideshow__editor-position";
        position.textContent = formatEditorPosition(index);
        position.setAttribute("aria-hidden", "true");
        previewButton.className = "facility-slideshow__editor-preview";
        previewButton.type = "button";
        previewButton.setAttribute("aria-label", "画像" + id + "を表示");
        previewButton.title = "クリックで表示";
        previewImage.loading = "eager";
        previewButton.appendChild(previewImage);
        label.className = "facility-slideshow__editor-label";
        label.textContent = "画像" + id;
        description.className = "facility-slideshow__editor-description";
        description.textContent = source.getAttribute("alt") || "施設画像";
        handle.className = "facility-slideshow__editor-handle";
        handle.type = "button";
        handle.textContent = "↕";
        handle.setAttribute("aria-label", "画像" + id + "をドラッグして並び替え");
        handle.title = "ドラッグして並び替え";
        actions.className = "facility-slideshow__editor-item-actions";
        up.className = "facility-slideshow__editor-move";
        up.type = "button";
        up.textContent = "↑";
        up.setAttribute("aria-label", "画像" + id + "を上へ移動");
        up.title = "ひとつ上へ";
        down.className = "facility-slideshow__editor-move";
        down.type = "button";
        down.textContent = "↓";
        down.setAttribute("aria-label", "画像" + id + "を下へ移動");
        down.title = "ひとつ下へ";

        previewButton.addEventListener("click", function () {
          show(index);
          start();
        });
        up.addEventListener("click", function () {
          moveEditorItem(id, -1);
        });
        down.addEventListener("click", function () {
          moveEditorItem(id, 1);
        });
        handle.addEventListener("pointerdown", function (event) {
          if (event.pointerType === "mouse" || !event.isPrimary) return;
          event.preventDefault();
          stop();
          draggedItem = item;
          pointerDrag = {
            handle: handle,
            item: item,
            pointerId: event.pointerId,
          };
          item.classList.add("is-pointer-dragging");
          if (handle.setPointerCapture) handle.setPointerCapture(event.pointerId);
        });
        handle.addEventListener("pointermove", function (event) {
          var element;
          var target;
          if (!pointerDrag || event.pointerId !== pointerDrag.pointerId) return;
          event.preventDefault();
          element = document.elementFromPoint(event.clientX, event.clientY);
          target =
            element && element.closest
              ? element.closest(".facility-slideshow__editor-item")
              : null;
          if (
            target &&
            editorGrid.contains(target) &&
            target !== draggedItem
          ) {
            placeDraggedItem(target, event);
          }
        });
        handle.addEventListener("pointerup", finishPointerDrag);
        handle.addEventListener("pointercancel", finishPointerDrag);
        item.addEventListener("dragstart", function (event) {
          if (pointerDrag) return;
          draggedItem = item;
          stop();
          item.classList.add("is-dragging");
          if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = "move";
            event.dataTransfer.setData("text/plain", id);
          }
        });
        item.addEventListener("dragover", function (event) {
          if (!draggedItem || draggedItem === item) return;
          event.preventDefault();
          if (event.dataTransfer) event.dataTransfer.dropEffect = "move";
          placeDraggedItem(item, event);
        });
        item.addEventListener("drop", function (event) {
          var shouldSync;
          event.preventDefault();
          clearDropTarget();
          shouldSync = Boolean(draggedItem);
          draggedItem = null;
          if (shouldSync) syncEditorOrder();
        });
        item.addEventListener("dragend", function () {
          var shouldSync = draggedItem === item;
          item.classList.remove("is-dragging");
          clearDropTarget();
          draggedItem = null;
          if (shouldSync && editorGrid.contains(item)) syncEditorOrder();
          start();
        });

        header.appendChild(position);
        header.appendChild(label);
        header.appendChild(handle);
        actions.appendChild(up);
        actions.appendChild(down);
        item.appendChild(header);
        item.appendChild(previewButton);
        item.appendChild(description);
        item.appendChild(actions);
        editorGrid.appendChild(item);
      });
      if (editorOutput) {
        editorOutput.textContent = "現在の順番: " + getOrder().join(" -> ");
      }
    }

    function moveEditorItem(id, offset) {
      var ids = Array.from(editorGrid.children).map(function (item) {
        return item.getAttribute("data-slide-id");
      });
      var index = ids.indexOf(id);
      var target = index + offset;
      if (index < 0 || target < 0 || target >= ids.length) return;
      ids.splice(index, 1);
      ids.splice(target, 0, id);
      reorderSlides(ids, true);
    }

    function syncEditorOrder() {
      if (!editorGrid) return;
      reorderSlides(
        Array.from(editorGrid.children).map(function (item) {
          return item.getAttribute("data-slide-id");
        }),
        true
      );
    }

    function reorderSlides(ids, shouldUpdateUrl) {
      var slideById = {};
      var dotById = {};
      var orderedSlides = [];
      var orderedDots = [];
      var dotContainer = dots[0] ? dots[0].parentNode : null;
      var firstImage = null;

      slides.forEach(function (slide) {
        slideById[slide.getAttribute("data-slide-id")] = slide;
      });
      dots.forEach(function (dot) {
        dotById[dot.getAttribute("data-slide-id")] = dot;
      });
      completeOrder(ids).forEach(function (id) {
        orderedSlides.push(slideById[id]);
        if (dotById[id]) orderedDots.push(dotById[id]);
      });
      orderedSlides.forEach(function (slide) {
        track.appendChild(slide);
      });
      if (dotContainer) {
        orderedDots.forEach(function (dot) {
          dotContainer.appendChild(dot);
        });
      }
      slides = orderedSlides;
      dots = orderedDots;
      firstImage = slides[0] ? slides[0].querySelector("img") : null;
      if (firstImage) {
        firstImage.loading = "eager";
        firstImage.setAttribute("fetchpriority", "high");
      }
      show(0);
      renderEditor();
      if (shouldUpdateUrl) updateOrderUrl();
    }

    function stop() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function start() {
      if (reducedMotion) return;
      stop();
      timer = window.setInterval(function () {
        show(current + 1);
      }, intervalMs);
    }

    function setupEditor() {
      var editor = document.createElement("section");
      var reset = null;
      var copy = null;
      editor.className = "facility-slideshow__editor";
      editor.setAttribute("aria-label", "施設画像の並び替え");
      editor.innerHTML =
        '<div class="facility-slideshow__editor-actions">' +
        '<button type="button" data-facility-editor-reset>初期順に戻す</button>' +
        '<button type="button" data-facility-editor-copy>並び順リンクをコピー</button>' +
        '<output aria-live="polite"></output>' +
        '</div><div class="facility-slideshow__editor-grid"></div>';
      gallery.appendChild(editor);
      editorGrid = editor.querySelector(".facility-slideshow__editor-grid");
      editorOutput = editor.querySelector("output");
      reset = editor.querySelector("[data-facility-editor-reset]");
      copy = editor.querySelector("[data-facility-editor-copy]");
      reset.addEventListener("click", function () {
        reorderSlides(defaultOrder.slice(), true);
      });
      copy.addEventListener("click", function () {
        var value = window.location.href;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(value).then(function () {
            editorOutput.textContent = "並び順リンクをコピーしました";
          });
        } else {
          editorOutput.textContent = "リンク: " + value;
        }
      });
      renderEditor();
    }

    var queryOrder = parseOrder(
      new URLSearchParams(window.location.search).get("facility-order")
    );
    var markupOrder = parseOrder(gallery.getAttribute("data-slide-order"));
    reorderSlides(queryOrder.length ? queryOrder : markupOrder, false);
    if (editorMode) setupEditor();

    if (previous) {
      previous.addEventListener("click", function () {
        show(current - 1);
        start();
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        show(current + 1);
        start();
      });
    }
    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        show(dots.indexOf(dot));
        start();
      });
    });
    gallery.addEventListener("mouseenter", stop);
    gallery.addEventListener("mouseleave", start);
    gallery.addEventListener("focusin", stop);
    gallery.addEventListener("focusout", function () {
      if (!gallery.contains(document.activeElement)) start();
    });
    show(0);
    start();
  });
})();

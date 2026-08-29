const STORAGE_KEY = "mf-image-selection-20260828";
const REVIEWER_STORAGE_KEY = "mf-image-selection-reviewer-20260828";

const finalAssets = [
  { id: "fv-desktop-female", filename: "fv-desktop-photo-female-v4-20260828.png", title: "FV desktop", section: "FV", group: "FV", gender: "女性" },
  { id: "fv-desktop-male", filename: "fv-desktop-photo-male-v4-20260828.png", title: "FV desktop", section: "FV", group: "FV", gender: "男性" },
  { id: "fv-mobile-female", filename: "fv-mobile-photo-female-v4-20260828.png", title: "FV mobile", section: "FV", group: "FV", gender: "女性" },
  { id: "fv-mobile-male", filename: "fv-mobile-photo-male-v4-20260828.png", title: "FV mobile", section: "FV", group: "FV", gender: "男性" },
  { id: "c01-female", filename: "c01-consultation-female-v4-20260828.png", title: "コンセプト・相談", section: "コンセプト", group: "コンセプト", gender: "女性" },
  { id: "c01-male", filename: "c01-consultation-male-v4-20260828.png", title: "コンセプト・相談", section: "コンセプト", group: "コンセプト", gender: "男性" },
  { id: "c02-female", filename: "c02-powerplate-female-v4-20260828.png", title: "コンセプト・Power Plate", section: "コンセプト", group: "コンセプト", gender: "女性" },
  { id: "c02-male", filename: "c02-powerplate-male-v4-20260828.png", title: "コンセプト・Power Plate", section: "コンセプト", group: "コンセプト", gender: "男性" },
  { id: "p01-female", filename: "p01-health-numbers-female-v4-20260828.png", title: "悩み・健診数値", section: "悩み", group: "悩み", gender: "女性" },
  { id: "p01-male", filename: "p01-health-numbers-male-v4-20260828.png", title: "悩み・健診数値", section: "悩み", group: "悩み", gender: "男性" },
  { id: "p02-female", filename: "p02-exercise-anxiety-female-v4-20260828.png", title: "悩み・運動不安", section: "悩み", group: "悩み", gender: "女性" },
  { id: "p02-male", filename: "p02-exercise-anxiety-male-v4-20260828.png", title: "悩み・運動不安", section: "悩み", group: "悩み", gender: "男性" },
  { id: "p03-female", filename: "p03-continuity-female-v4-20260828.png", title: "悩み・継続", section: "悩み", group: "悩み", gender: "女性" },
  { id: "p03-male", filename: "p03-continuity-male-v4-20260828.png", title: "悩み・継続", section: "悩み", group: "悩み", gender: "男性" },
  { id: "a01-female", filename: "a01-counseling-female-v4-20260828.png", title: "About・カウンセリング", section: "About", group: "About", gender: "女性" },
  { id: "a01-male", filename: "a01-counseling-male-v4-20260828.png", title: "About・カウンセリング", section: "About", group: "About", gender: "男性" },
  { id: "v01-female", filename: "v01-ongoing-support-female-v4-20260828.png", title: "Vision・継続サポート", section: "Vision", group: "Vision", gender: "女性" },
  { id: "v01-male", filename: "v01-ongoing-support-male-v4-20260828.png", title: "Vision・継続サポート", section: "Vision", group: "Vision", gender: "男性" },
  { id: "v02-female", filename: "v02-program-planning-female-v4-20260828.png", title: "Vision・プログラム設計", section: "Vision", group: "Vision", gender: "女性" },
  { id: "v02-male", filename: "v02-program-planning-male-v4-20260828.png", title: "Vision・プログラム設計", section: "Vision", group: "Vision", gender: "男性" },
  { id: "r01-female", filename: "r01-assessment-female-v4-20260828.png", title: "選ばれる理由01・測定", section: "選ばれる理由", group: "選ばれる理由", gender: "女性" },
  { id: "r01-male", filename: "r01-assessment-male-v4-20260828.png", title: "選ばれる理由01・測定", section: "選ばれる理由", group: "選ばれる理由", gender: "男性" },
  { id: "r02-female", filename: "r02-powerplate-female-v4-20260828.png", title: "選ばれる理由02・Power Plate", section: "選ばれる理由", group: "選ばれる理由", gender: "女性" },
  { id: "r02-male", filename: "r02-powerplate-male-v4-20260828.png", title: "選ばれる理由02・Power Plate", section: "選ばれる理由", group: "選ばれる理由", gender: "男性" },
  { id: "r03-female", filename: "r03-documents-female-v4-20260828.png", title: "選ばれる理由03・書類", section: "選ばれる理由", group: "選ばれる理由", gender: "女性" },
  { id: "r03-male", filename: "r03-documents-male-v4-20260828.png", title: "選ばれる理由03・書類", section: "選ばれる理由", group: "選ばれる理由", gender: "男性" },
  { id: "r04-female", filename: "r04-long-term-female-v4-20260828.png", title: "選ばれる理由04・長期継続", section: "選ばれる理由", group: "選ばれる理由", gender: "女性" },
  { id: "r04-male", filename: "r04-long-term-male-v4-20260828.png", title: "選ばれる理由04・長期継続", section: "選ばれる理由", group: "選ばれる理由", gender: "男性" },
  { id: "d01-female", filename: "d01-deduction-documents-female-v4-20260828.png", title: "医療費控除・書類", section: "医療費控除", group: "医療費控除", gender: "女性" },
  { id: "d01-male", filename: "d01-deduction-documents-male-v4-20260828.png", title: "医療費控除・書類", section: "医療費控除", group: "医療費控除", gender: "男性" },
  { id: "pr02-female", filename: "pr02-pilates-support-female-v4-20260828.png", title: "Private・ピラティス", section: "Private", group: "Private", gender: "女性" },
  { id: "pr02-male", filename: "pr02-pilates-support-male-v4-20260828.png", title: "Private・ピラティス", section: "Private", group: "Private", gender: "男性" },
  { id: "pr04-female", filename: "pr04-powerplate-guidance-female-v4-20260828.png", title: "Private・Power Plate", section: "Private", group: "Private", gender: "女性" },
  { id: "pr04-male", filename: "pr04-powerplate-guidance-male-v4-20260828.png", title: "Private・Power Plate", section: "Private", group: "Private", gender: "男性" },
  { id: "m01-female", filename: "m01-latpulldown-female-v4-20260828.png", title: "マシン案内・ラットプルダウン", section: "マシン案内", group: "マシン案内", gender: "女性" },
  { id: "m01-male", filename: "m01-latpulldown-male-v4-20260828.png", title: "マシン案内・ラットプルダウン", section: "マシン案内", group: "マシン案内", gender: "男性" },
  { id: "h01-female", filename: "h01-cta-background-female-v4-20260828.png", title: "CTA背景", section: "CTA", group: "CTA", gender: "女性" },
  { id: "h01-male", filename: "h01-cta-background-male-v4-20260828.png", title: "CTA背景", section: "CTA", group: "CTA", gender: "男性" },
  { id: "ft01-female", filename: "ft01-footer-contact-female-v4-20260828.png", title: "フッター背景", section: "フッター", group: "フッター", gender: "女性" },
  { id: "ft01-male", filename: "ft01-footer-contact-male-v4-20260828.png", title: "フッター背景", section: "フッター", group: "フッター", gender: "男性" }
];

function addVariant(asset, options) {
  return {
    ...asset,
    ...options,
    src: `${options.root}${options.filename}`
  };
}

const finalVersionAssets = finalAssets.map((asset) => addVariant(asset, {
  versionKey: "v4",
  version: "V4（最終）",
  root: "../lp-medical-fitness/img/mf-replacement-20260828-v4/",
  filename: asset.filename
}));

const firstVersionAssets = finalAssets.map((asset) => {
  const filename = asset.filename.replace(
    "-v4-20260828.png",
    asset.gender === "男性" ? "-v2-20260828.png" : "-20260828.png"
  );

  return addVariant({ ...asset, id: `base-${asset.id}` }, {
    versionKey: "base",
    version: "初版",
    root: "../lp-medical-fitness/img/mf-replacement-20260828/",
    filename
  });
});

const v3Assets = finalAssets
  .filter((asset) => ["c01-female", "c01-male"].includes(asset.id))
  .map((asset) => addVariant({ ...asset, id: `v3-${asset.id}` }, {
    versionKey: "v3",
    version: "V3",
    root: "../lp-medical-fitness/img/mf-replacement-20260828-v3/",
    filename: asset.filename.replace("-v4-20260828.png", "-v3-20260828.png")
  }));

const backgroundDefinitions = [
  { id: "bg-base-counseling-0181", filename: "backgrounds/bg-counseling-0181.jpg", title: "背景・カウンセリング", versionKey: "base", version: "初版", root: "../lp-medical-fitness/img/mf-replacement-20260828/" },
  { id: "bg-base-hall-0007", filename: "backgrounds/bg-hall-0007.jpg", title: "背景・施設ホール", versionKey: "base", version: "初版", root: "../lp-medical-fitness/img/mf-replacement-20260828/" },
  { id: "bg-base-reception-0106", filename: "backgrounds/bg-reception-0106.jpg", title: "背景・受付", versionKey: "base", version: "初版", root: "../lp-medical-fitness/img/mf-replacement-20260828/" },
  { id: "bg-v2-counseling-0181", filename: "backgrounds/bg-counseling-0181.jpg", title: "背景・カウンセリング", versionKey: "v2", version: "V2背景", root: "../lp-medical-fitness/img/mf-replacement-20260828-v2/" },
  { id: "bg-v2-hall-0007", filename: "backgrounds/bg-hall-0007.jpg", title: "背景・施設ホール", versionKey: "v2", version: "V2背景", root: "../lp-medical-fitness/img/mf-replacement-20260828-v2/" },
  { id: "bg-v2-reception-0106", filename: "backgrounds/bg-reception-0106.jpg", title: "背景・受付", versionKey: "v2", version: "V2背景", root: "../lp-medical-fitness/img/mf-replacement-20260828-v2/" },
  { id: "bg-v3-0007", filename: "backgrounds/bg-0007.jpg", title: "背景・施設ホール", versionKey: "v3", version: "V3背景", root: "../lp-medical-fitness/img/mf-replacement-20260828-v3/" },
  { id: "bg-v3-0106", filename: "backgrounds/bg-0106.jpg", title: "背景・受付", versionKey: "v3", version: "V3背景", root: "../lp-medical-fitness/img/mf-replacement-20260828-v3/" },
  { id: "bg-v3-0181", filename: "backgrounds/bg-0181.jpg", title: "背景・カウンセリング", versionKey: "v3", version: "V3背景", root: "../lp-medical-fitness/img/mf-replacement-20260828-v3/" },
  { id: "bg-v4-0007", filename: "backgrounds/bg-0007.jpg", title: "背景・施設ホール", versionKey: "v4", version: "V4背景", root: "../lp-medical-fitness/img/mf-replacement-20260828-v4/" },
  { id: "bg-v4-0106", filename: "backgrounds/bg-0106.jpg", title: "背景・受付", versionKey: "v4", version: "V4背景", root: "../lp-medical-fitness/img/mf-replacement-20260828-v4/" },
  { id: "bg-v4-0181", filename: "backgrounds/bg-0181.jpg", title: "背景・カウンセリング", versionKey: "v4", version: "V4背景", root: "../lp-medical-fitness/img/mf-replacement-20260828-v4/" }
].map((background) => addVariant({
  ...background,
  section: "背景素材",
  group: "背景素材",
  gender: "共通"
}, background));

const archiveAssets = [
  addVariant({
    id: "archive-c01-male",
    filename: "_archive-do-not-use/c01-consultation-male-20260828.png",
    title: "コンセプト・相談（旧アーカイブ）",
    section: "アーカイブ",
    group: "アーカイブ",
    gender: "男性"
  }, {
    versionKey: "archive",
    version: "使用しない旧版",
    root: "../lp-medical-fitness/img/mf-replacement-20260828/",
    filename: "_archive-do-not-use/c01-consultation-male-20260828.png"
  }),
  addVariant({
    id: "archive-c02-male",
    filename: "_archive-do-not-use/c02-powerplate-male-20260828.png",
    title: "コンセプト・Power Plate（旧アーカイブ）",
    section: "アーカイブ",
    group: "アーカイブ",
    gender: "男性"
  }, {
    versionKey: "archive",
    version: "使用しない旧版",
    root: "../lp-medical-fitness/img/mf-replacement-20260828/",
    filename: "_archive-do-not-use/c02-powerplate-male-20260828.png"
  })
];

const referenceAssets = [
  addVariant({
    id: "reference-female-wavy-layers",
    filename: "customer_female_40_wavy_layers.png",
    title: "顔参照・女性",
    section: "顔参照",
    group: "顔参照",
    gender: "女性"
  }, {
    versionKey: "reference",
    version: "顔参照",
    root: "reference-faces/",
    filename: "customer_female_40_wavy_layers.png"
  }),
  addVariant({
    id: "reference-male-swept-back",
    filename: "customer_male_45_swept_back.png",
    title: "顔参照・男性",
    section: "顔参照",
    group: "顔参照",
    gender: "男性"
  }, {
    versionKey: "reference",
    version: "顔参照",
    root: "reference-faces/",
    filename: "customer_male_45_swept_back.png"
  })
];

const assets = [
  ...finalVersionAssets,
  ...firstVersionAssets,
  ...v3Assets,
  ...backgroundDefinitions,
  ...archiveAssets,
  ...referenceAssets
];

const filters = [
  { key: "all", label: "すべて" },
  { key: "female", label: "女性" },
  { key: "male", label: "男性" },
  { key: "v4", label: "V4最終" },
  { key: "base", label: "初版" },
  { key: "v3", label: "V3" },
  { key: "v2", label: "V2背景" },
  { key: "archive", label: "旧アーカイブ" },
  { key: "FV", label: "FV" },
  { key: "コンセプト", label: "コンセプト" },
  { key: "悩み", label: "悩み" },
  { key: "About", label: "About" },
  { key: "Vision", label: "Vision" },
  { key: "選ばれる理由", label: "選ばれる理由" },
  { key: "医療費控除", label: "医療費控除" },
  { key: "Private", label: "Private" },
  { key: "マシン案内", label: "マシン案内" },
  { key: "背景素材", label: "背景素材" },
  { key: "顔参照", label: "顔参照" },
  { key: "CTA", label: "CTA" },
  { key: "フッター", label: "フッター" }
];

const assetById = new Map(assets.map((asset) => [asset.id, asset]));
const state = {
  selected: new Set(),
  filter: "all",
  query: "",
  reviewer: ""
};

const elements = {
  assetGrid: document.querySelector("#assetGrid"),
  clearSelection: document.querySelector("#clearSelection"),
  copyShareLink: document.querySelector("#copyShareLink"),
  filterTabs: document.querySelector("#filterTabs"),
  noResults: document.querySelector("#noResults"),
  reviewerName: document.querySelector("#reviewerName"),
  searchInput: document.querySelector("#searchInput"),
  selectedCount: document.querySelector("#selectedCount"),
  selectedSummary: document.querySelector("#selectedSummary"),
  selectVisible: document.querySelector("#selectVisible"),
  toast: document.querySelector("#toast"),
  visibleCount: document.querySelector("#visibleCount")
};

let toastTimer;

function validIds(ids) {
  return ids.filter((id) => assetById.has(id));
}

function readStoredSelection() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? validIds(JSON.parse(raw)) : [];
  } catch {
    return [];
  }
}

function readInitialState() {
  const params = new URLSearchParams(window.location.search);
  const hasSharedSelection = params.has("selected");
  const sharedSelection = (params.get("selected") || "").split(",").filter(Boolean);
  const initialSelection = hasSharedSelection ? validIds(sharedSelection) : readStoredSelection();

  state.selected = new Set(initialSelection);
  state.reviewer = params.get("reviewer") || readStoredReviewer();
  elements.reviewerName.value = state.reviewer;
}

function readStoredReviewer() {
  try {
    return window.localStorage.getItem(REVIEWER_STORAGE_KEY) || "";
  } catch {
    return "";
  }
}

function persistState() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify([...state.selected]));
    window.localStorage.setItem(REVIEWER_STORAGE_KEY, state.reviewer);
  } catch {
    // Private browsing or file URLs may not allow localStorage.
  }
}

function updateShareUrl() {
  const params = new URLSearchParams();
  const selectedIds = assets.filter((asset) => state.selected.has(asset.id)).map((asset) => asset.id);

  if (selectedIds.length) {
    params.set("selected", selectedIds.join(","));
  }

  if (state.reviewer.trim()) {
    params.set("reviewer", state.reviewer.trim());
  }

  const query = params.toString();
  const nextUrl = `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`;

  try {
    window.history.replaceState({}, "", nextUrl);
  } catch {
    // Some file:// contexts do not permit history updates.
  }
}

function saveState() {
  persistState();
  updateShareUrl();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  toastTimer = window.setTimeout(() => {
    elements.toast.hidden = true;
  }, 2400);
}

function isVisible(asset) {
  const filterMatches = state.filter === "all"
    || (state.filter === "female" && asset.gender === "女性")
    || (state.filter === "male" && asset.gender === "男性")
    || asset.versionKey === state.filter
    || asset.group === state.filter;
  const query = state.query.trim().toLowerCase();
  const queryMatches = !query
    || [asset.title, asset.filename, asset.section, asset.gender, asset.group, asset.version].join(" ").toLowerCase().includes(query);

  return filterMatches && queryMatches;
}

function renderFilters() {
  elements.filterTabs.innerHTML = filters.map((filter) => `
    <button
      class="filter-tab${state.filter === filter.key ? " is-active" : ""}"
      type="button"
      role="tab"
      aria-selected="${state.filter === filter.key}"
      data-filter="${filter.key}"
    >${filter.label}</button>
  `).join("");
}

function renderSelectedSummary() {
  const selectedAssets = assets.filter((asset) => state.selected.has(asset.id));

  if (!selectedAssets.length) {
    elements.selectedSummary.innerHTML = '<p class="empty-summary">画像を選ぶと、ここに選択内容が表示されます。</p>';
    return;
  }

  elements.selectedSummary.innerHTML = selectedAssets.map((asset) => `
    <span class="summary-chip">
      ${asset.title}
      <small>${asset.version} / ${asset.gender}</small>
    </span>
  `).join("");
}

function renderCard(asset, index) {
  const selected = state.selected.has(asset.id);
  const genderClass = asset.gender === "男性" ? "gender-male" : "gender-female";
  const image = document.createElement("img");
  image.src = asset.src;
  image.alt = `${asset.title} / ${asset.version} / ${asset.gender}`;
  image.loading = index < 4 ? "eager" : "lazy";
  image.decoding = "async";

  const card = document.createElement("article");
  card.className = `asset-card${selected ? " is-selected" : ""}`;
  card.dataset.assetId = asset.id;
  card.innerHTML = `
    <div class="asset-media">
      <span class="asset-number">${String(assets.indexOf(asset) + 1).padStart(2, "0")}</span>
      <span class="asset-status">✓ 選択済み</span>
    </div>
    <div class="asset-body">
      <div class="asset-tags">
        <span class="asset-tag asset-version">${asset.version}</span>
        <span class="asset-tag">${asset.section}</span>
        <span class="asset-tag ${genderClass}">${asset.gender}</span>
      </div>
      <h2 class="asset-title">${asset.title}</h2>
      <code class="asset-filename">${asset.filename}</code>
      <button class="select-button" type="button" data-select-id="${asset.id}">${selected ? "選択を外す" : "採用候補に選ぶ"}</button>
    </div>
  `;
  card.querySelector(".asset-media").prepend(image);
  card.querySelector(".select-button").addEventListener("click", () => toggleSelection(asset.id));

  return card;
}

function renderAssets() {
  const visibleAssets = assets.filter(isVisible);
  elements.assetGrid.replaceChildren(...visibleAssets.map((asset, index) => renderCard(asset, index)));
  elements.visibleCount.textContent = `表示中 ${visibleAssets.length}点`;
  elements.noResults.hidden = visibleAssets.length > 0;
}

function renderSelection() {
  elements.selectedCount.textContent = `${state.selected.size} / ${assets.length}`;
  renderSelectedSummary();
}

function render() {
  renderFilters();
  renderAssets();
  renderSelection();
}

function toggleSelection(id) {
  if (state.selected.has(id)) {
    state.selected.delete(id);
  } else {
    state.selected.add(id);
  }

  saveState();
  render();
}

async function copyShareLink() {
  const shareUrl = window.location.href;

  try {
    await navigator.clipboard.writeText(shareUrl);
  } catch {
    const helper = document.createElement("textarea");
    helper.value = shareUrl;
    helper.setAttribute("readonly", "");
    helper.style.position = "fixed";
    helper.style.opacity = "0";
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
  }

  const originalText = elements.copyShareLink.innerHTML;
  elements.copyShareLink.innerHTML = '<span class="button-icon" aria-hidden="true">✓</span>コピーしました';
  showToast(`選択${state.selected.size}点の共有リンクをコピーしました。`);
  window.setTimeout(() => {
    elements.copyShareLink.innerHTML = originalText;
  }, 1800);
}

elements.filterTabs.addEventListener("click", (event) => {
  const tab = event.target.closest("[data-filter]");
  if (!tab) return;
  state.filter = tab.dataset.filter;
  render();
});

elements.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderAssets();
});

elements.reviewerName.addEventListener("input", (event) => {
  state.reviewer = event.target.value;
  saveState();
});

elements.selectVisible.addEventListener("click", () => {
  assets.filter(isVisible).forEach((asset) => state.selected.add(asset.id));
  saveState();
  render();
  showToast("表示中の画像を選択しました。");
});

elements.clearSelection.addEventListener("click", () => {
  state.selected.clear();
  saveState();
  render();
  showToast("選択を解除しました。");
});

elements.copyShareLink.addEventListener("click", copyShareLink);

readInitialState();
render();

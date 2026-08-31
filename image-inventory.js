const STORAGE_KEY = 'mf-lp-image-change-plan-20260831-v2';
const REVIEWER_KEY = 'mf-lp-image-replacement-reviewer-20260829';
const PUBLIC_PAGE_URL = 'https://kagami-fit.github.io/fractal-medical-fitness-lp/image-inventory.html';
const PUBLIC_SITE_ROOT = 'https://kagami-fit.github.io/fractal-medical-fitness-lp/';
const CURRENT_LP_URL = 'https://kagami-fit.github.io/fractal-medical-fitness-lp/?v=20260831-regenerated-v1';
const TARGET_LP_URL = 'https://fractal-workout.com/medicalfitness/';
const CURRENT_ROOT = 'lp-medical-fitness/img/';
const LOCAL_WP_IMAGE_ROOT = '/Users/hayatokagami/⭐FW/fractal-pilates-lp/lp-medical-fitness/img/';
const LOCAL_GITHUB_ROOT = '/Users/hayatokagami/⭐FW/fractal-pilates-lp/github-pages-medical-fitness/';
const CANDIDATE_BASE_ROOT = 'lp-medical-fitness/img/mf-replacement-20260828/';
const CANDIDATE_V2_ROOT = 'lp-medical-fitness/img/mf-replacement-20260828-v2/';
const CANDIDATE_V3_ROOT = 'lp-medical-fitness/img/mf-replacement-20260828-v3/';
const CANDIDATE_ROOT = 'lp-medical-fitness/img/mf-replacement-20260828-v4/';

const currentImages = [
  { id: 'I-01', kind: 'image', section: 'ヘッダー', title: 'ロゴ', source: 'mf-header-logo-medical-fitness-20260720.webp?v=20260720-logo-v1' },
  { id: 'I-02', kind: 'image', section: 'ファーストビュー', title: 'デスクトップ版', source: 'mf-fv-main-clean-polished-badges-20260722.webp?v=20260722-clean-polished-badges-v1', hint: 'fv-desktop' },
  { id: 'I-03', kind: 'image', section: 'ファーストビュー', title: 'モバイル表示（専用画像なし）', source: 'mf-fv-main-clean-polished-badges-20260722.webp?v=20260722-clean-polished-badges-v1', hint: 'fv-mobile' },
  { id: 'I-04', kind: 'image', section: 'ファーストビュー', title: '信頼バッジ・アクセス', source: 'mf-trust-badge-access-circle-text.webp?v=20260707-trust-circle-mobile-v1' },
  { id: 'I-05', kind: 'image', section: 'ファーストビュー', title: '信頼バッジ・認定施設', source: 'mf-trust-badge-certified-circle-text.webp?v=20260707-trust-circle-mobile-v1' },
  { id: 'I-06', kind: 'image', section: 'ファーストビュー', title: '信頼バッジ・処方箋', source: 'mf-trust-badge-prescription-circle-text.webp?v=20260707-trust-circle-mobile-v1' },
  { id: 'I-07', kind: 'image', section: 'コンセプト', title: '相談スペース', source: 'mf-selected-20260831/i07-concept-consultation.webp?v=20260831-selected-v1', hint: 'c01' },
  { id: 'I-08', kind: 'image', section: 'コンセプト', title: 'Power Plate運動', source: 'mf-regenerated-20260831/i08-concept-powerplate-v2.webp?v=20260831-regenerated-v1', hint: 'c02' },
  { id: 'I-09', kind: 'image', section: '悩みカード', title: '健診数値', source: 'mf-selected-20260831/i09-problem-health-numbers.webp?v=20260831-selected-v1', hint: 'p01' },
  { id: 'I-10', kind: 'image', section: '悩みカード', title: '運動への不安', source: 'mf-selected-20260831/i10-problem-exercise-anxiety.webp?v=20260831-selected-v1', hint: 'p02' },
  { id: 'I-11', kind: 'image', section: '悩みカード', title: '継続の悩み', source: 'mf-selected-20260831/i11-problem-continuity.webp?v=20260831-selected-v1', hint: 'p03' },
  { id: 'I-12', kind: 'image', section: 'About', title: 'カウンセリング', source: 'mf-selected-20260831/i12-about-counseling.webp?v=20260831-selected-v1', hint: 'a01' },
  { id: 'I-13', kind: 'image', section: 'Vision', title: '相談スペース', source: 'mf-selected-20260831/i13-vision-consultation.webp?v=20260831-selected-v1', hint: 'v01' },
  { id: 'I-14', kind: 'image', section: 'Vision', title: 'プログラム設計', source: 'mf-selected-20260831/i14-vision-program-planning.webp?v=20260831-selected-v1', hint: 'v02' },
  { id: 'I-15', kind: 'image', section: '選ばれる理由01', title: '測定・評価', source: 'mf-regenerated-20260831/i15-feature-assessment-v2.webp?v=20260831-regenerated-v1', hint: 'r01' },
  { id: 'I-16', kind: 'image', section: '選ばれる理由02', title: '低負荷運動', source: 'mf-regenerated-20260831/i16-feature-low-load-v2.webp?v=20260831-regenerated-v1', hint: 'r02' },
  { id: 'I-17', kind: 'image', section: '選ばれる理由03', title: '必要書類', source: 'mf-selected-20260831/i17-feature-documents.webp?v=20260831-selected-v1', hint: 'r03' },
  { id: 'I-18', kind: 'image', section: '選ばれる理由04', title: '長期伴走', source: 'mf-selected-20260831/i18-feature-long-term.webp?v=20260831-selected-v1', hint: 'r04' },
  { id: 'I-19', kind: 'image', section: '医療費控除', title: '書類確認', source: 'mf-regenerated-20260831/i19-deduction-documents-v2.webp?v=20260831-regenerated-v1', hint: 'd01' },
  { id: 'I-20', kind: 'image', section: 'Private', title: '施設案内', source: 'mf-facility-reception.webp', hint: 'bg-v4-0106' },
  { id: 'I-21', kind: 'image', section: 'Private', title: 'ピラティスサポート', source: 'mf-regenerated-20260831/i21-private-pilates-v2.webp?v=20260831-regenerated-v1', hint: 'pr02' },
  { id: 'I-22', kind: 'image', section: 'Private', title: '施設全景', source: 'mf-facility-gym-overview.webp', hint: 'bg-v4-0007' },
  { id: 'I-23', kind: 'image', section: 'Private', title: 'Power Plate', source: 'mf-regenerated-20260831/i23-private-powerplate-v2.webp?v=20260831-regenerated-v1', hint: 'pr04' },
  { id: 'B-01', kind: 'background', section: 'コンセプト', title: 'セクション背景', source: 'mf-facility-window-powerplate.webp', hint: 'bg-v4-0007' },
  { id: 'B-02', kind: 'background', section: '悩みカード', title: 'セクション背景', source: 'mf-facility-gym-overview.webp', hint: 'bg-v4-0007' },
  { id: 'B-03', kind: 'background', section: 'About', title: 'セクション背景', source: 'mf-facility-reception.webp', hint: 'bg-v4-0106' },
  { id: 'B-04', kind: 'background', section: 'About', title: 'ロゴ背景', source: 'https://fractal-workout.com/wp-content/uploads/2025/09/about_logo.webp' },
  { id: 'B-05', kind: 'background', section: '選ばれる理由', title: 'タイトル背景', source: 'mf-regenerated-20260831/b05-feature-reasons-background-v2.webp?v=20260831-regenerated-v1', hint: 'm01' },
  { id: 'B-06', kind: 'background', section: 'プログラム', title: 'セクション背景', source: 'mf-program-bg-clean.webp?v=20260705-program-bg-v1' },
  { id: 'B-07', kind: 'background', section: 'Vision', title: 'セクション背景', source: 'mf-power-plate-guidance.webp?v=20260705-facility-bg-v1', hint: 'pr04' },
  { id: 'B-08', kind: 'background', section: 'CTA', title: 'セクション背景', source: 'mf-regenerated-20260831/b08-cta-background-v2.webp?v=20260831-regenerated-v1', hint: 'h01' },
  { id: 'B-09', kind: 'background', section: 'フッター', title: 'メッセージ背景', source: 'mf-selected-20260831/b09-footer-background.webp?v=20260831-selected-v1', hint: 'ft01' }
];

const candidateDefinitions = [
  { id: 'fv-desktop-female', filename: 'fv-desktop-photo-female-v4-20260828.png', title: 'FV desktop', section: 'FV', gender: '女性' },
  { id: 'fv-desktop-male', filename: 'fv-desktop-photo-male-v4-20260828.png', title: 'FV desktop', section: 'FV', gender: '男性' },
  { id: 'fv-mobile-female', filename: 'fv-mobile-photo-female-v4-20260828.png', title: 'FV mobile', section: 'FV', gender: '女性' },
  { id: 'fv-mobile-male', filename: 'fv-mobile-photo-male-v4-20260828.png', title: 'FV mobile', section: 'FV', gender: '男性' },
  { id: 'c01-female', filename: 'c01-consultation-female-v4-20260828.png', title: 'コンセプト・相談', section: 'コンセプト', gender: '女性' },
  { id: 'c01-male', filename: 'c01-consultation-male-v4-20260828.png', title: 'コンセプト・相談', section: 'コンセプト', gender: '男性' },
  { id: 'c02-female', filename: 'c02-powerplate-female-v4-20260828.png', title: 'コンセプト・Power Plate', section: 'コンセプト', gender: '女性' },
  { id: 'c02-male', filename: 'c02-powerplate-male-v4-20260828.png', title: 'コンセプト・Power Plate', section: 'コンセプト', gender: '男性' },
  { id: 'p01-female', filename: 'p01-health-numbers-female-v4-20260828.png', title: '悩み・健診数値', section: '悩み', gender: '女性' },
  { id: 'p01-male', filename: 'p01-health-numbers-male-v4-20260828.png', title: '悩み・健診数値', section: '悩み', gender: '男性' },
  { id: 'p02-female', filename: 'p02-exercise-anxiety-female-v4-20260828.png', title: '悩み・運動不安', section: '悩み', gender: '女性' },
  { id: 'p02-male', filename: 'p02-exercise-anxiety-male-v4-20260828.png', title: '悩み・運動不安', section: '悩み', gender: '男性' },
  { id: 'p03-female', filename: 'p03-continuity-female-v4-20260828.png', title: '悩み・継続', section: '悩み', gender: '女性' },
  { id: 'p03-male', filename: 'p03-continuity-male-v4-20260828.png', title: '悩み・継続', section: '悩み', gender: '男性' },
  { id: 'a01-female', filename: 'a01-counseling-female-v4-20260828.png', title: 'About・カウンセリング', section: 'About', gender: '女性' },
  { id: 'a01-male', filename: 'a01-counseling-male-v4-20260828.png', title: 'About・カウンセリング', section: 'About', gender: '男性' },
  { id: 'v01-female', filename: 'v01-ongoing-support-female-v4-20260828.png', title: 'Vision・継続サポート', section: 'Vision', gender: '女性' },
  { id: 'v01-male', filename: 'v01-ongoing-support-male-v4-20260828.png', title: 'Vision・継続サポート', section: 'Vision', gender: '男性' },
  { id: 'v02-female', filename: 'v02-program-planning-female-v4-20260828.png', title: 'Vision・プログラム設計', section: 'Vision', gender: '女性' },
  { id: 'v02-male', filename: 'v02-program-planning-male-v4-20260828.png', title: 'Vision・プログラム設計', section: 'Vision', gender: '男性' },
  { id: 'r01-female', filename: 'r01-assessment-female-v4-20260828.png', title: '選ばれる理由01・測定', section: '選ばれる理由', gender: '女性' },
  { id: 'r01-male', filename: 'r01-assessment-male-v4-20260828.png', title: '選ばれる理由01・測定', section: '選ばれる理由', gender: '男性' },
  { id: 'r02-female', filename: 'r02-powerplate-female-v4-20260828.png', title: '選ばれる理由02・Power Plate', section: '選ばれる理由', gender: '女性' },
  { id: 'r02-male', filename: 'r02-powerplate-male-v4-20260828.png', title: '選ばれる理由02・Power Plate', section: '選ばれる理由', gender: '男性' },
  { id: 'r03-female', filename: 'r03-documents-female-v4-20260828.png', title: '選ばれる理由03・書類', section: '選ばれる理由', gender: '女性' },
  { id: 'r03-male', filename: 'r03-documents-male-v4-20260828.png', title: '選ばれる理由03・書類', section: '選ばれる理由', gender: '男性' },
  { id: 'r04-female', filename: 'r04-long-term-female-v4-20260828.png', title: '選ばれる理由04・長期継続', section: '選ばれる理由', gender: '女性' },
  { id: 'r04-male', filename: 'r04-long-term-male-v4-20260828.png', title: '選ばれる理由04・長期継続', section: '選ばれる理由', gender: '男性' },
  { id: 'd01-female', filename: 'd01-deduction-documents-female-v4-20260828.png', title: '医療費控除・書類', section: '医療費控除', gender: '女性' },
  { id: 'd01-male', filename: 'd01-deduction-documents-male-v4-20260828.png', title: '医療費控除・書類', section: '医療費控除', gender: '男性' },
  { id: 'pr02-female', filename: 'pr02-pilates-support-female-v4-20260828.png', title: 'Private・ピラティス', section: 'Private', gender: '女性' },
  { id: 'pr02-male', filename: 'pr02-pilates-support-male-v4-20260828.png', title: 'Private・ピラティス', section: 'Private', gender: '男性' },
  { id: 'pr04-female', filename: 'pr04-powerplate-guidance-female-v4-20260828.png', title: 'Private・Power Plate', section: 'Private', gender: '女性' },
  { id: 'pr04-male', filename: 'pr04-powerplate-guidance-male-v4-20260828.png', title: 'Private・Power Plate', section: 'Private', gender: '男性' },
  { id: 'm01-female', filename: 'm01-latpulldown-female-v4-20260828.png', title: 'マシン案内・ラットプルダウン', section: 'マシン案内', gender: '女性' },
  { id: 'm01-male', filename: 'm01-latpulldown-male-v4-20260828.png', title: 'マシン案内・ラットプルダウン', section: 'マシン案内', gender: '男性' },
  { id: 'h01-female', filename: 'h01-cta-background-female-v4-20260828.png', title: 'CTA背景', section: 'CTA', gender: '女性' },
  { id: 'h01-male', filename: 'h01-cta-background-male-v4-20260828.png', title: 'CTA背景', section: 'CTA', gender: '男性' },
  { id: 'ft01-female', filename: 'ft01-footer-contact-female-v4-20260828.png', title: 'フッター背景', section: 'フッター', gender: '女性' },
  { id: 'ft01-male', filename: 'ft01-footer-contact-male-v4-20260828.png', title: 'フッター背景', section: 'フッター', gender: '男性' }
];

function createCandidate(candidate, options) {
  const src = options.root + options.filename;
  return Object.assign({}, candidate, options, {
    src: src,
    path: LOCAL_GITHUB_ROOT + src,
    publicUrl: PUBLIC_SITE_ROOT + src
  });
}

const finalCandidates = candidateDefinitions.map(function (candidate) {
  return createCandidate(candidate, {
    usageId: candidate.id,
    versionKey: 'v4',
    version: 'V4最終',
    root: CANDIDATE_ROOT,
    filename: candidate.filename
  });
});

const firstCandidates = candidateDefinitions.map(function (candidate) {
  const filename = candidate.filename.replace(
    '-v4-20260828.png',
    candidate.gender === '男性' ? '-v2-20260828.png' : '-20260828.png'
  );
  return createCandidate(Object.assign({}, candidate, { id: 'base-' + candidate.id }), {
    usageId: candidate.id,
    versionKey: 'base',
    version: '初版',
    root: CANDIDATE_BASE_ROOT,
    filename: filename
  });
});

const v3Candidates = candidateDefinitions
  .filter(function (candidate) { return candidate.id === 'c01-female' || candidate.id === 'c01-male'; })
  .map(function (candidate) {
    const filename = candidate.filename.replace('-v4-20260828.png', '-v3-20260828.png');
    return createCandidate(Object.assign({}, candidate, { id: 'v3-' + candidate.id }), {
      usageId: candidate.id,
      versionKey: 'v3',
      version: 'V3',
      root: CANDIDATE_V3_ROOT,
      filename: filename
    });
  });

const backgroundDefinitions = [
  { id: 'bg-base-counseling-0181', filename: 'backgrounds/bg-counseling-0181.jpg', title: '背景・カウンセリング', versionKey: 'base', version: '初版', root: CANDIDATE_BASE_ROOT },
  { id: 'bg-base-hall-0007', filename: 'backgrounds/bg-hall-0007.jpg', title: '背景・施設ホール', versionKey: 'base', version: '初版', root: CANDIDATE_BASE_ROOT },
  { id: 'bg-base-reception-0106', filename: 'backgrounds/bg-reception-0106.jpg', title: '背景・受付', versionKey: 'base', version: '初版', root: CANDIDATE_BASE_ROOT },
  { id: 'bg-v2-counseling-0181', filename: 'backgrounds/bg-counseling-0181.jpg', title: '背景・カウンセリング', versionKey: 'v2', version: 'V2背景', root: CANDIDATE_V2_ROOT },
  { id: 'bg-v2-hall-0007', filename: 'backgrounds/bg-hall-0007.jpg', title: '背景・施設ホール', versionKey: 'v2', version: 'V2背景', root: CANDIDATE_V2_ROOT },
  { id: 'bg-v2-reception-0106', filename: 'backgrounds/bg-reception-0106.jpg', title: '背景・受付', versionKey: 'v2', version: 'V2背景', root: CANDIDATE_V2_ROOT },
  { id: 'bg-v3-0007', filename: 'backgrounds/bg-0007.jpg', title: '背景・施設ホール', versionKey: 'v3', version: 'V3背景', root: CANDIDATE_V3_ROOT },
  { id: 'bg-v3-0106', filename: 'backgrounds/bg-0106.jpg', title: '背景・受付', versionKey: 'v3', version: 'V3背景', root: CANDIDATE_V3_ROOT },
  { id: 'bg-v3-0181', filename: 'backgrounds/bg-0181.jpg', title: '背景・カウンセリング', versionKey: 'v3', version: 'V3背景', root: CANDIDATE_V3_ROOT },
  { id: 'bg-v4-0007', filename: 'backgrounds/bg-0007.jpg', title: '背景・施設ホール', versionKey: 'v4', version: 'V4背景', root: CANDIDATE_ROOT },
  { id: 'bg-v4-0106', filename: 'backgrounds/bg-0106.jpg', title: '背景・受付', versionKey: 'v4', version: 'V4背景', root: CANDIDATE_ROOT },
  { id: 'bg-v4-0181', filename: 'backgrounds/bg-0181.jpg', title: '背景・カウンセリング', versionKey: 'v4', version: 'V4背景', root: CANDIDATE_ROOT }
];

const backgroundCandidates = backgroundDefinitions.map(function (background) {
  return createCandidate({
    id: background.id,
    title: background.title,
    section: '背景素材',
    gender: '共通'
  }, Object.assign({ usageId: background.id }, background));
});

const archiveCandidates = [
  createCandidate({ id: 'archive-c01-male', title: 'コンセプト・相談（旧アーカイブ）', section: 'アーカイブ', gender: '男性' }, {
    usageId: 'c01-male', versionKey: 'archive', version: '使用しない旧版', root: CANDIDATE_BASE_ROOT,
    filename: '_archive-do-not-use/c01-consultation-male-20260828.png'
  }),
  createCandidate({ id: 'archive-c02-male', title: 'コンセプト・Power Plate（旧アーカイブ）', section: 'アーカイブ', gender: '男性' }, {
    usageId: 'c02-male', versionKey: 'archive', version: '使用しない旧版', root: CANDIDATE_BASE_ROOT,
    filename: '_archive-do-not-use/c02-powerplate-male-20260828.png'
  })
];

const referenceCandidates = [
  createCandidate({ id: 'reference-female-wavy-layers', title: '顔参照・女性', section: '顔参照', gender: '女性' }, {
    usageId: 'reference-female', versionKey: 'reference', version: '顔参照', root: 'mf-image-selection-board-20260829/reference-faces/',
    filename: 'customer_female_40_wavy_layers.png'
  }),
  createCandidate({ id: 'reference-male-swept-back', title: '顔参照・男性', section: '顔参照', gender: '男性' }, {
    usageId: 'reference-male', versionKey: 'reference', version: '顔参照', root: 'mf-image-selection-board-20260829/reference-faces/',
    filename: 'customer_male_45_swept_back.png'
  })
];

const candidates = finalCandidates
  .concat(firstCandidates, v3Candidates, backgroundCandidates, archiveCandidates, referenceCandidates);

const currentById = new Map(currentImages.map(function (item) { return [item.id, item]; }));
const candidateById = new Map(candidates.map(function (item) { return [item.id, item]; }));

const currentFilters = [
  { key: 'all', label: 'すべて' },
  { key: 'image', label: '通常画像' },
  { key: 'background', label: '背景画像' },
  { key: 'ファーストビュー', label: 'FV' },
  { key: 'コンセプト', label: 'コンセプト' },
  { key: '悩みカード', label: '悩み' },
  { key: 'Vision', label: 'Vision' },
  { key: '選ばれる理由', label: '選ばれる理由' },
  { key: 'Private', label: 'Private' }
];

const candidateFilters = [
  { key: 'recommended', label: '同じ用途の候補' },
  { key: 'all', label: 'すべて' },
  { key: 'female', label: '女性' },
  { key: 'male', label: '男性' },
  { key: 'v4', label: 'V4最終' },
  { key: 'base', label: '初版' },
  { key: 'v3', label: 'V3' },
  { key: 'v2', label: 'V2背景' },
  { key: 'background', label: '背景素材' },
  { key: 'reference', label: '顔参照' },
  { key: 'FV', label: 'FV' },
  { key: '悩み', label: '悩み' },
  { key: 'Vision', label: 'Vision' },
  { key: '選ばれる理由', label: '選ばれる理由' },
  { key: 'Private', label: 'Private' }
];

const preserveDefinitions = [
  { key: 'customer', label: 'お客様の顔・同一人物' },
  { key: 'trainer', label: 'トレーナーの顔・同一人物' },
  { key: 'composition', label: '画角・構図' },
  { key: 'background', label: '背景' },
  { key: 'clothing', label: '衣装・色' },
  { key: 'ratio', label: '画像の縦横比' }
];

const defaultPreserveKeys = ['customer', 'trainer', 'ratio'];

const state = {
  changes: new Map(),
  currentFilter: 'all',
  currentQuery: '',
  changedOnly: false,
  candidateFilter: 'recommended',
  candidateQuery: '',
  activeCurrentId: null,
  pickerMode: 'replace',
  reviewer: ''
};

const elements = {
  reviewerName: document.querySelector('#reviewerName'),
  copyShareLink: document.querySelector('#copyShareLink'),
  copyInstructions: document.querySelector('#copyInstructions'),
  copyInstructionsAside: document.querySelector('#copyInstructionsAside'),
  clearPlan: document.querySelector('#clearPlan'),
  searchInput: document.querySelector('#searchInput'),
  currentFilters: document.querySelector('#currentFilters'),
  changedOnly: document.querySelector('#changedOnly'),
  currentGrid: document.querySelector('#currentGrid'),
  noCurrentResults: document.querySelector('#noCurrentResults'),
  visibleCount: document.querySelector('#visibleCount'),
  changeCount: document.querySelector('#changeCount'),
  planList: document.querySelector('#planList'),
  instructionText: document.querySelector('#instructionText'),
  pickerDialog: document.querySelector('#pickerDialog'),
  pickerTitle: document.querySelector('#pickerTitle'),
  pickerTarget: document.querySelector('#pickerTarget'),
  closePicker: document.querySelector('#closePicker'),
  changeModeTabs: document.querySelector('.change-mode-tabs'),
  replacePanel: document.querySelector('#replacePanel'),
  regeneratePanel: document.querySelector('#regeneratePanel'),
  candidateSearch: document.querySelector('#candidateSearch'),
  candidateFilters: document.querySelector('#candidateFilters'),
  candidateGrid: document.querySelector('#candidateGrid'),
  noCandidateResults: document.querySelector('#noCandidateResults'),
  customLabel: document.querySelector('#customLabel'),
  customPath: document.querySelector('#customPath'),
  applyCustomPath: document.querySelector('#applyCustomPath'),
  regeneratePreviewImage: document.querySelector('#regeneratePreviewImage'),
  regeneratePreviewPath: document.querySelector('#regeneratePreviewPath'),
  regenerateInstruction: document.querySelector('#regenerateInstruction'),
  preserveOptions: document.querySelector('#preserveOptions'),
  regenerateFromScratch: document.querySelector('#regenerateFromScratch'),
  regenerateBasePath: document.querySelector('#regenerateBasePath'),
  applyRegenerate: document.querySelector('#applyRegenerate'),
  toast: document.querySelector('#toast')
};

let toastTimer;

function escapeHtml(value) {
  const entities = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(value).replace(/[&<>"']/g, function (character) { return entities[character]; });
}

function stripQuery(path) {
  return String(path).split('?')[0];
}

function basename(path) {
  const clean = stripQuery(path).replace(/\\/g, '/');
  return clean.split('/').pop() || clean;
}

function resolveCurrentSource(item) {
  return /^https?:\/\//.test(item.source) ? item.source : CURRENT_ROOT + item.source;
}

function currentDisplayPath(item) {
  return /^https?:\/\//.test(item.source) ? stripQuery(item.source) : LOCAL_WP_IMAGE_ROOT + stripQuery(item.source);
}

function currentPublicUrl(item) {
  return /^https?:\/\//.test(item.source) ? item.source : PUBLIC_SITE_ROOT + CURRENT_ROOT + item.source;
}

function resolveCustomPreview(path) {
  if (/^(https?:|data:|blob:)/.test(path)) return path;
  if (/^(\.\/|\.\.\/|lp-medical-fitness\/)/.test(path)) return path;
  if (window.location.protocol === 'file:' && path.startsWith('/')) return 'file://' + encodeURI(path);
  return '';
}

function replacementDetails(change) {
  if (!change) return null;
  if (change.kind === 'catalog') return candidateById.get(change.candidateId) || null;
  if (change.kind === 'custom' && change.path) {
    return {
      id: null,
      title: change.label || basename(change.path),
      filename: basename(change.path),
      section: '指定画像',
      gender: '指定',
      version: '個別指定',
      src: resolveCustomPreview(change.path),
      path: change.path
    };
  }
  return null;
}

function preserveLabels(keys) {
  const selected = new Set(Array.isArray(keys) ? keys : []);
  return preserveDefinitions
    .filter(function (definition) { return selected.has(definition.key); })
    .map(function (definition) { return definition.label; });
}

function regenerateBasePath(item, change) {
  return change && change.basePath ? change.basePath : currentDisplayPath(item);
}

function regenerateBasePreview(item, change) {
  if (change && change.basePath) return resolveCustomPreview(change.basePath) || currentPublicUrl(item);
  return resolveCurrentSource(item);
}

function changeDetails(item, change) {
  if (!change) return null;
  if (change.kind === 'regenerate') {
    return {
      kind: 'regenerate',
      title: '修正して再生成',
      filename: '再生成指示あり',
      src: regenerateBasePreview(item, change),
      path: regenerateBasePath(item, change),
      instruction: change.instruction
    };
  }
  const replacement = replacementDetails(change);
  return replacement ? Object.assign({ kind: 'replace' }, replacement) : null;
}

function readStoredPlan() {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
  } catch {
    return {};
  }
}

function readStoredReviewer() {
  try {
    return window.localStorage.getItem(REVIEWER_KEY) || '';
  } catch {
    return '';
  }
}

function normalizePlan(rawPlan) {
  const normalized = new Map();
  Object.entries(rawPlan || {}).forEach(function (entry) {
    const currentId = entry[0];
    const change = entry[1];
    if (!currentById.has(currentId) || !change || typeof change !== 'object') return;
    if (change.kind === 'catalog' && candidateById.has(change.candidateId)) {
      normalized.set(currentId, { kind: 'catalog', candidateId: change.candidateId });
    }
    if (change.kind === 'custom' && typeof change.path === 'string' && change.path.trim()) {
      normalized.set(currentId, {
        kind: 'custom',
        path: change.path.trim(),
        label: typeof change.label === 'string' ? change.label.trim() : ''
      });
    }
    if (change.kind === 'regenerate' && typeof change.instruction === 'string' && change.instruction.trim()) {
      const preserve = Array.isArray(change.preserve)
        ? change.preserve.filter(function (key) {
          return preserveDefinitions.some(function (definition) { return definition.key === key; });
        })
        : defaultPreserveKeys.slice();
      normalized.set(currentId, {
        kind: 'regenerate',
        instruction: change.instruction.trim(),
        basePath: typeof change.basePath === 'string' ? change.basePath.trim() : '',
        preserve: preserve,
        fromScratch: change.fromScratch !== false
      });
    }
  });
  return normalized;
}

function readInitialState() {
  const params = new URLSearchParams(window.location.search);
  let rawPlan = readStoredPlan();

  if (params.has('plan')) {
    try {
      rawPlan = JSON.parse(params.get('plan') || '{}');
    } catch {
      rawPlan = {};
    }
  }

  state.changes = normalizePlan(rawPlan);
  state.reviewer = params.get('reviewer') || readStoredReviewer();
  elements.reviewerName.value = state.reviewer;
}

function planObject() {
  return Object.fromEntries(state.changes);
}

function persistState() {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(planObject()));
    window.localStorage.setItem(REVIEWER_KEY, state.reviewer);
  } catch {
    // file:// and private browsing can restrict localStorage.
  }
}

function buildShareUrl() {
  const shareUrl = new URL(
    window.location.protocol === 'http:' || window.location.protocol === 'https:'
      ? window.location.href
      : PUBLIC_PAGE_URL
  );
  shareUrl.search = '';
  if (state.changes.size) shareUrl.searchParams.set('plan', JSON.stringify(planObject()));
  if (state.reviewer.trim()) shareUrl.searchParams.set('reviewer', state.reviewer.trim());
  return shareUrl.href;
}

function updateBrowserUrl() {
  if (window.location.protocol !== 'http:' && window.location.protocol !== 'https:') return;
  try {
    window.history.replaceState({}, '', buildShareUrl());
  } catch {
    // URL updates are optional; the share button still builds the complete link.
  }
}

function saveState() {
  persistState();
  updateBrowserUrl();
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.hidden = false;
  toastTimer = window.setTimeout(function () {
    elements.toast.hidden = true;
  }, 2400);
}

async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const helper = document.createElement('textarea');
    helper.value = value;
    helper.setAttribute('readonly', '');
    helper.style.position = 'fixed';
    helper.style.opacity = '0';
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    helper.remove();
  }
}

function currentMatchesFilter(item) {
  if (state.changedOnly && !state.changes.has(item.id)) return false;
  const filterMatches = state.currentFilter === 'all'
    || state.currentFilter === item.kind
    || item.section === state.currentFilter
    || (state.currentFilter === '選ばれる理由' && item.section.startsWith('選ばれる理由'));
  const query = state.currentQuery.trim().toLowerCase();
  const queryMatches = !query
    || [item.id, item.section, item.title, item.source].join(' ').toLowerCase().includes(query);
  return filterMatches && queryMatches;
}

function renderCurrentFilters() {
  elements.currentFilters.innerHTML = currentFilters.map(function (filter) {
    const activeClass = state.currentFilter === filter.key ? ' is-active' : '';
    return '<button class="filter-tab' + activeClass + '" type="button" role="tab" aria-selected="' + (state.currentFilter === filter.key) + '" data-current-filter="' + escapeHtml(filter.key) + '">' + escapeHtml(filter.label) + '</button>';
  }).join('');
}

function brokenImageFallback(image) {
  image.addEventListener('error', function () {
    const fallback = document.createElement('div');
    fallback.className = 'replacement-empty';
    fallback.textContent = '画像を読み込めません';
    image.replaceWith(fallback);
  }, { once: true });
}

function renderCurrentCard(item) {
  const change = state.changes.get(item.id);
  const details = changeDetails(item, change);
  const isRegenerate = details && details.kind === 'regenerate';
  const replacementImage = details && details.src
    ? '<div class="planned-image-wrap"><img src="' + escapeHtml(details.src) + '" alt="">' +
      (isRegenerate ? '<span class="regenerate-mark">再生成</span>' : '') + '</div>'
    : '<div class="replacement-empty">' + (details ? '指定済み（プレビューなし）' : '差し替えまたは再生成を指定') + '</div>';
  const replacementCaption = details
    ? escapeHtml(isRegenerate ? details.instruction : details.filename)
    : '未指定';

  const card = document.createElement('article');
  card.id = 'current-' + item.id;
  card.className = 'image-card' + (details ? ' is-changed' : '') + (isRegenerate ? ' is-regenerate' : '');
  card.innerHTML =
    '<header class="card-heading">' +
      '<div class="card-id-block">' +
        '<span class="image-id">' + escapeHtml(item.id) + '</span>' +
        '<span class="card-section">' + escapeHtml(item.section + '／' + item.title) + '</span>' +
      '</div>' +
      (details ? '<span class="changed-mark">' + (isRegenerate ? '再生成予定' : '差し替え予定') + '</span>' : '') +
    '</header>' +
    '<div class="comparison">' +
      '<div class="image-side">' +
        '<span class="side-label">現在</span>' +
        '<img src="' + escapeHtml(resolveCurrentSource(item)) + '" alt="">' +
        '<p class="file-caption">' + escapeHtml(basename(item.source)) + '</p>' +
      '</div>' +
      '<div class="comparison-arrow" aria-hidden="true">→</div>' +
      '<div class="image-side">' +
        '<span class="side-label">' + (isRegenerate ? '再生成の基準' : '変更後') + '</span>' +
        replacementImage +
        '<p class="file-caption" title="' + replacementCaption + '">' + replacementCaption + '</p>' +
      '</div>' +
    '</div>' +
    '<div class="card-actions">' +
      '<button class="select-replacement" type="button" data-pick="' + escapeHtml(item.id) + '">画像を差し替え</button>' +
      '<button class="select-regenerate" type="button" data-regenerate="' + escapeHtml(item.id) + '">修正して再生成</button>' +
      (details ? '<button class="remove-replacement" type="button" data-remove="' + escapeHtml(item.id) + '" aria-label="' + escapeHtml(item.id) + 'の変更を解除" title="変更を解除">×</button>' : '') +
    '</div>';

  card.querySelectorAll('img').forEach(brokenImageFallback);
  return card;
}

function renderCurrentImages() {
  const visibleItems = currentImages.filter(currentMatchesFilter);
  elements.currentGrid.replaceChildren.apply(elements.currentGrid, visibleItems.map(renderCurrentCard));
  elements.visibleCount.textContent = '表示中 ' + visibleItems.length + ' / ' + currentImages.length + '点';
  elements.noCurrentResults.hidden = visibleItems.length > 0;
}

function sortedChangedItems() {
  return currentImages.filter(function (item) { return state.changes.has(item.id); });
}

function buildInstructions() {
  const changedItems = sortedChangedItems();
  if (!changedItems.length) return '';

  const lines = [
    'MF LP画像変更・再生成指示',
    '基準プレビュー：' + CURRENT_LP_URL,
    '反映対象：' + TARGET_LP_URL
  ];

  if (state.reviewer.trim()) lines.push('確認者：' + state.reviewer.trim());
  lines.push('', '以下の画像を、それぞれの指示どおりに更新してください。', '');

  changedItems.forEach(function (item, index) {
    const change = state.changes.get(item.id);
    lines.push((index + 1) + '. ' + item.id + '｜' + item.section + '／' + item.title);
    if (change.kind === 'regenerate') {
      const preserved = preserveLabels(change.preserve);
      lines.push(
        '   処理：画像を修正して再生成',
        '   基準画像：' + regenerateBasePath(item, change),
        '   修正内容：' + change.instruction.replace(/\n/g, '\n             '),
        '   変えない要素：' + (preserved.length ? preserved.join('、') : '特になし'),
        '   生成方法：' + (change.fromScratch
          ? 'image-gen2で部分上書きせず、画像全体を一から生成する'
          : 'image-gen2で指示箇所を調整する'),
        '   生成後：' + item.id + 'の画像として設定',
        ''
      );
    } else {
      const replacement = replacementDetails(change);
      lines.push(
        '   処理：既存画像へ差し替え',
        '   現在：' + currentDisplayPath(item),
        '   変更後：' + replacement.path,
        ''
      );
    }
  });

  return lines.join('\n').trim();
}

function renderPlan() {
  const changedItems = sortedChangedItems();
  const hasChanges = changedItems.length > 0;
  elements.changeCount.textContent = changedItems.length + '件';
  elements.copyShareLink.disabled = !hasChanges;
  elements.copyInstructions.disabled = !hasChanges;
  elements.copyInstructionsAside.disabled = !hasChanges;
  elements.clearPlan.disabled = !hasChanges;
  elements.instructionText.value = buildInstructions();

  if (!hasChanges) {
    elements.planList.innerHTML = '<p class="empty-plan">画像の差し替えまたは再生成内容を指定すると、ここにまとめて表示されます。</p>';
    return;
  }

  elements.planList.innerHTML = changedItems.map(function (item) {
    const details = changeDetails(item, state.changes.get(item.id));
    return '<div class="plan-item">' +
      '<button class="summary-link" type="button" data-jump="' + escapeHtml(item.id) + '">' + escapeHtml(item.id) + '</button>' +
      '<div class="plan-item-copy"><strong>' + escapeHtml(item.section + '／' + item.title) + '</strong><span>' + (details.kind === 'regenerate' ? '再生成：' : '差し替え：') + escapeHtml(details.kind === 'regenerate' ? details.instruction : details.title) + '</span></div>' +
      '<button class="plan-remove" type="button" data-remove="' + escapeHtml(item.id) + '" aria-label="' + escapeHtml(item.id) + 'の変更を解除" title="変更を解除">×</button>' +
    '</div>';
  }).join('');
}

function renderAll() {
  renderCurrentFilters();
  renderCurrentImages();
  renderPlan();
}

function matchesRecommendation(candidate, item) {
  if (!item || !item.hint) return true;
  const usageId = candidate.usageId || candidate.id;
  return usageId === item.hint || usageId.startsWith(item.hint + '-') || usageId.startsWith(item.hint);
}

function candidateMatchesFilter(candidate) {
  const activeItem = currentById.get(state.activeCurrentId);
  const filterMatches = state.candidateFilter === 'all'
    || (state.candidateFilter === 'recommended' && matchesRecommendation(candidate, activeItem))
    || (state.candidateFilter === 'female' && candidate.gender === '女性')
    || (state.candidateFilter === 'male' && candidate.gender === '男性')
    || candidate.versionKey === state.candidateFilter
    || (state.candidateFilter === 'background' && candidate.section === '背景素材')
    || (state.candidateFilter === 'reference' && candidate.section === '顔参照')
    || candidate.section === state.candidateFilter;
  const query = state.candidateQuery.trim().toLowerCase();
  const queryMatches = !query
    || [candidate.title, candidate.filename, candidate.section, candidate.gender, candidate.version].join(' ').toLowerCase().includes(query);
  return filterMatches && queryMatches;
}

function renderCandidateFilters() {
  elements.candidateFilters.innerHTML = candidateFilters.map(function (filter) {
    const activeClass = state.candidateFilter === filter.key ? ' is-active' : '';
    return '<button class="filter-tab' + activeClass + '" type="button" role="tab" aria-selected="' + (state.candidateFilter === filter.key) + '" data-candidate-filter="' + escapeHtml(filter.key) + '">' + escapeHtml(filter.label) + '</button>';
  }).join('');
}

function renderCandidateCard(candidate) {
  const activeChange = state.changes.get(state.activeCurrentId);
  const selected = activeChange && activeChange.kind === 'catalog' && activeChange.candidateId === candidate.id;
  const genderClass = candidate.gender === '女性' ? ' gender-female' : candidate.gender === '男性' ? ' gender-male' : '';
  const card = document.createElement('button');
  card.className = 'candidate-card' + (selected ? ' is-selected' : '');
  card.type = 'button';
  card.dataset.candidateId = candidate.id;
  card.setAttribute('aria-label', candidate.title + 'を変更後の画像に指定');
  card.innerHTML =
    '<img src="' + escapeHtml(candidate.src) + '" alt="">' +
    '<span class="candidate-copy">' +
      '<span class="candidate-tags">' +
        '<span class="candidate-tag">' + escapeHtml(candidate.section) + '</span>' +
        '<span class="candidate-tag' + genderClass + '">' + escapeHtml(candidate.gender) + '</span>' +
        '<span class="candidate-tag">' + escapeHtml(candidate.version) + '</span>' +
      '</span>' +
      '<strong>' + escapeHtml(candidate.title) + '</strong>' +
      '<code>' + escapeHtml(candidate.filename) + '</code>' +
    '</span>';
  brokenImageFallback(card.querySelector('img'));
  return card;
}

function renderCandidates() {
  renderCandidateFilters();
  const visibleCandidates = candidates.filter(candidateMatchesFilter);
  elements.candidateGrid.replaceChildren.apply(elements.candidateGrid, visibleCandidates.map(renderCandidateCard));
  elements.noCandidateResults.hidden = visibleCandidates.length > 0;
}

function renderPreserveOptions(selectedKeys) {
  const selected = new Set(selectedKeys);
  elements.preserveOptions.innerHTML = preserveDefinitions.map(function (definition) {
    return '<label class="preserve-option">' +
      '<input type="checkbox" value="' + escapeHtml(definition.key) + '"' + (selected.has(definition.key) ? ' checked' : '') + '>' +
      '<span>' + escapeHtml(definition.label) + '</span>' +
    '</label>';
  }).join('');
}

function updateRegeneratePreview() {
  const item = currentById.get(state.activeCurrentId);
  if (!item) return;
  const basePath = elements.regenerateBasePath.value.trim();
  const preview = basePath ? resolveCustomPreview(basePath) : resolveCurrentSource(item);
  elements.regeneratePreviewImage.src = preview || resolveCurrentSource(item);
  elements.regeneratePreviewPath.textContent = basePath || currentDisplayPath(item);
}

function prepareRegenerateForm(item) {
  const change = state.changes.get(item.id);
  const existingReplacement = change && change.kind !== 'regenerate' ? replacementDetails(change) : null;
  elements.regenerateInstruction.value = change && change.kind === 'regenerate' ? change.instruction : '';
  elements.regenerateBasePath.value = change && change.kind === 'regenerate'
    ? change.basePath
    : (existingReplacement ? existingReplacement.path : '');
  elements.regenerateFromScratch.checked = change && change.kind === 'regenerate' ? change.fromScratch : true;
  renderPreserveOptions(change && change.kind === 'regenerate' ? change.preserve : defaultPreserveKeys);
  updateRegeneratePreview();
}

function setPickerMode(mode) {
  state.pickerMode = mode === 'regenerate' ? 'regenerate' : 'replace';
  elements.replacePanel.hidden = state.pickerMode !== 'replace';
  elements.regeneratePanel.hidden = state.pickerMode !== 'regenerate';
  elements.changeModeTabs.querySelectorAll('[data-picker-mode]').forEach(function (button) {
    const active = button.dataset.pickerMode === state.pickerMode;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });
}

function openPicker(currentId, mode) {
  const item = currentById.get(currentId);
  if (!item) return;
  state.activeCurrentId = currentId;
  state.candidateFilter = 'recommended';
  state.candidateQuery = '';
  elements.candidateSearch.value = '';
  elements.customLabel.value = '';
  elements.customPath.value = '';
  elements.pickerTitle.textContent = currentId + ' の変更内容';
  elements.pickerTarget.textContent = item.section + '／' + item.title;
  renderCandidates();
  prepareRegenerateForm(item);
  setPickerMode(mode);
  elements.pickerDialog.showModal();
  document.documentElement.style.overflow = 'hidden';
}

function closePicker() {
  if (elements.pickerDialog.open) elements.pickerDialog.close();
}

function assignCatalogCandidate(candidateId) {
  if (!state.activeCurrentId || !candidateById.has(candidateId)) return;
  state.changes.set(state.activeCurrentId, { kind: 'catalog', candidateId: candidateId });
  const targetId = state.activeCurrentId;
  saveState();
  closePicker();
  renderAll();
  showToast(targetId + ' の変更後画像を指定しました。続けて別の画像も指定できます。');
}

function assignCustomPath() {
  const path = elements.customPath.value.trim();
  const label = elements.customLabel.value.trim();
  if (!state.activeCurrentId || !path) {
    showToast('ファイルパスまたはURLを入力してください。');
    elements.customPath.focus();
    return;
  }
  state.changes.set(state.activeCurrentId, { kind: 'custom', path: path, label: label });
  const targetId = state.activeCurrentId;
  saveState();
  closePicker();
  renderAll();
  showToast(targetId + ' の変更後画像を指定しました。続けて別の画像も指定できます。');
}

function assignRegenerate() {
  const instruction = elements.regenerateInstruction.value.trim();
  if (!state.activeCurrentId || !instruction) {
    showToast('修正したい内容を入力してください。');
    elements.regenerateInstruction.focus();
    return;
  }
  const preserve = Array.from(elements.preserveOptions.querySelectorAll('input:checked')).map(function (input) {
    return input.value;
  });
  state.changes.set(state.activeCurrentId, {
    kind: 'regenerate',
    instruction: instruction,
    basePath: elements.regenerateBasePath.value.trim(),
    preserve: preserve,
    fromScratch: elements.regenerateFromScratch.checked
  });
  const targetId = state.activeCurrentId;
  saveState();
  closePicker();
  renderAll();
  showToast(targetId + ' の再生成指示を追加しました。');
}

function removeChange(currentId) {
  state.changes.delete(currentId);
  saveState();
  renderAll();
  showToast(currentId + ' の変更を解除しました。');
}

async function copyInstructions() {
  const instructions = buildInstructions();
  if (!instructions) return;
  await copyText(instructions);
  showToast(state.changes.size + '件分の指示文をコピーしました。');
}

async function copyShareLink() {
  if (!state.changes.size) return;
  const shareUrl = buildShareUrl();
  await copyText(shareUrl);
  showToast(state.changes.size + '件の変更内容を含む共有リンクをコピーしました。');
}

elements.currentFilters.addEventListener('click', function (event) {
  const button = event.target.closest('[data-current-filter]');
  if (!button) return;
  state.currentFilter = button.dataset.currentFilter;
  renderCurrentFilters();
  renderCurrentImages();
});

elements.searchInput.addEventListener('input', function (event) {
  state.currentQuery = event.target.value;
  renderCurrentImages();
});

elements.changedOnly.addEventListener('change', function (event) {
  state.changedOnly = event.target.checked;
  renderCurrentImages();
});

elements.currentGrid.addEventListener('click', function (event) {
  const pickButton = event.target.closest('[data-pick]');
  const regenerateButton = event.target.closest('[data-regenerate]');
  const removeButton = event.target.closest('[data-remove]');
  if (pickButton) openPicker(pickButton.dataset.pick, 'replace');
  if (regenerateButton) openPicker(regenerateButton.dataset.regenerate, 'regenerate');
  if (removeButton) removeChange(removeButton.dataset.remove);
});

elements.planList.addEventListener('click', function (event) {
  const jumpButton = event.target.closest('[data-jump]');
  const removeButton = event.target.closest('[data-remove]');
  if (removeButton) {
    removeChange(removeButton.dataset.remove);
    return;
  }
  if (jumpButton) {
    const target = document.querySelector('#current-' + CSS.escape(jumpButton.dataset.jump));
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

elements.candidateFilters.addEventListener('click', function (event) {
  const button = event.target.closest('[data-candidate-filter]');
  if (!button) return;
  state.candidateFilter = button.dataset.candidateFilter;
  renderCandidates();
});

elements.candidateSearch.addEventListener('input', function (event) {
  state.candidateQuery = event.target.value;
  renderCandidates();
});

elements.candidateGrid.addEventListener('click', function (event) {
  const card = event.target.closest('[data-candidate-id]');
  if (card) assignCatalogCandidate(card.dataset.candidateId);
});

elements.changeModeTabs.addEventListener('click', function (event) {
  const button = event.target.closest('[data-picker-mode]');
  if (button) setPickerMode(button.dataset.pickerMode);
});

elements.closePicker.addEventListener('click', closePicker);
elements.pickerDialog.addEventListener('close', function () {
  document.documentElement.style.overflow = '';
  state.activeCurrentId = null;
});
elements.pickerDialog.addEventListener('click', function (event) {
  if (event.target === elements.pickerDialog) closePicker();
});
elements.applyCustomPath.addEventListener('click', assignCustomPath);
elements.applyRegenerate.addEventListener('click', assignRegenerate);
elements.regenerateBasePath.addEventListener('input', updateRegeneratePreview);
elements.regenerateInstruction.addEventListener('keydown', function (event) {
  if ((event.metaKey || event.ctrlKey) && event.key === 'Enter') assignRegenerate();
});
elements.customPath.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') assignCustomPath();
});

elements.reviewerName.addEventListener('input', function (event) {
  state.reviewer = event.target.value;
  saveState();
  renderPlan();
});

elements.copyInstructions.addEventListener('click', copyInstructions);
elements.copyInstructionsAside.addEventListener('click', copyInstructions);
elements.copyShareLink.addEventListener('click', copyShareLink);
elements.clearPlan.addEventListener('click', function () {
  if (!state.changes.size) return;
  if (!window.confirm('すべての変更予定を解除しますか？')) return;
  state.changes.clear();
  saveState();
  renderAll();
  showToast('すべての変更予定を解除しました。');
});

readInitialState();
renderAll();

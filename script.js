const copy = {
  en: {
    navFeatures: 'Features', navWhy: 'Why', navGithub: 'GitHub', lang: '中文',
    eyebrow: 'A quieter X experience', heroTitle: 'Clean X Up',
    heroLede: 'A quieter way to use X, with the small distractions gently out of view.',
    download: 'Download for Chrome', viewGithub: 'View on GitHub', microcopy: 'Free, open source, no tracking.',
    featuresEyebrow: 'Four small switches', featuresTitle: 'Features',
    f1Title: 'Notification badges', f1Body: 'Hide the numbers and colored dots while keeping the Notifications icon and label visible.',
    f2Title: 'The new-posts bar', f2Body: 'Remove the blue prompt that keeps asking you to jump back to the top of the timeline.',
    f3Title: 'The right sidebar', f3Body: 'Clear away search, trends, recommendations, and the panel that never stops refreshing.',
    f4Title: 'Tab notifications', f4Body: "Remove unread counts and keep X's current favicon without the notification dot.",
    whyEyebrow: 'Why Clean X Up', whyTitle: 'Why',
    whyBody: 'Clean X Up gives the interface a little more silence, so the things you chose to read can stay in view.',
    closingEyebrow: 'Make it yours', closingTitle: 'Get started',
    closingBody: 'Each feature can be turned on or off independently. The popup follows your browser language, with English and Simplified Chinese included.',
    getIt: 'Get Clean X Up', privacy: 'Read the privacy policy', footer: 'Open source for a less noisy web.'
  },
  zh: {
    navFeatures: '功能', navWhy: '为什么', navGithub: 'GitHub', lang: 'EN',
    eyebrow: '让 X 安静一点', heroTitle: 'Clean X Up',
    heroLede: '让 X 安静一点，让那些细小的干扰轻轻退到视线之外。',
    download: '下载 Chrome 插件', viewGithub: '在 GitHub 查看', microcopy: '免费、开源、不追踪。',
    featuresEyebrow: '四个小开关', featuresTitle: '功能',
    f1Title: '通知 badge', f1Body: '隐藏数字和红色/蓝色圆点，同时保留通知图标和文字。',
    f2Title: '新帖蓝条', f2Body: '移除那个不断催你回到时间线顶部的蓝色提示。',
    f3Title: '右侧面板', f3Body: '清掉搜索、趋势、推荐，以及那块永远在刷新的侧栏。',
    f4Title: 'Tab 通知', f4Body: '移除未读数字，使用没有通知红点的 X favicon。',
    whyEyebrow: '为什么是 Clean X Up', whyTitle: '为什么',
    whyBody: 'Clean X Up 给界面留出一点安静，让你选择留下的内容好好待在视线里。',
    closingEyebrow: '按你的方式使用', closingTitle: '开始使用',
    closingBody: '四个功能都可以独立开关。设置面板支持英文和简体中文，也会默认跟随浏览器语言。',
    getIt: '获取 Clean X Up', privacy: '查看隐私政策', footer: '开源，只让网络少一点噪音。'
  }
};

let language = navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
const button = document.querySelector('[data-lang-toggle]');

function render() {
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[language][element.dataset.i18n];
  });
  button.textContent = copy[language].lang;
}

button.addEventListener('click', () => {
  language = language === 'en' ? 'zh' : 'en';
  render();
});

render();

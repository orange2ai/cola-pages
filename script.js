const copy = {
  en: {
    navFeatures: 'Features', navWhy: 'Why', navGithub: 'GitHub', lang: '中文',
    eyebrow: 'A quieter X experience', heroTitle: 'X is already loud enough.',
    heroLede: 'Clean X Up removes the tiny attention traps that keep pulling you back: red badges, blue bars, a busy sidebar, and unread numbers in your browser tab.',
    download: 'Download for Chrome', viewGithub: 'View on GitHub', microcopy: 'Free, open source, no tracking.',
    featuresEyebrow: 'Four small switches', featuresTitle: 'Keep the posts. Lose the pull.',
    f1Title: 'Notification badges', f1Body: 'Hide the numbers and colored dots while keeping the Notifications icon and label visible.',
    f2Title: 'The new-posts bar', f2Body: 'Remove the blue prompt that keeps asking you to jump back to the top of the timeline.',
    f3Title: 'The right sidebar', f3Body: 'Clear away search, trends, recommendations, and the panel that never stops refreshing.',
    f4Title: 'Tab notifications', f4Body: "Remove unread counts and keep X's current favicon without the notification dot.",
    whyEyebrow: 'Why Clean X Up', whyTitle: 'You opened X for the content, not to be managed by the interface.',
    whyBody: 'Clean X Up does not redesign X or decide what you should read. It simply turns off the little things that ask for your attention before you have chosen to give it.',
    closingEyebrow: 'Make it yours', closingTitle: 'One master switch. Four quiet decisions.',
    closingBody: 'Each feature can be turned on or off independently. The popup follows your browser language, with English and Simplified Chinese included.',
    getIt: 'Get Clean X Up', privacy: 'Read the privacy policy', footer: 'Open source for a less noisy web.'
  },
  zh: {
    navFeatures: '功能', navWhy: '为什么', navGithub: 'GitHub', lang: 'EN',
    eyebrow: '让 X 安静一点', heroTitle: 'X 已经够吵了。',
    heroLede: 'Clean X Up 清掉那些不断把你拽回来的注意力陷阱：红色 badge、蓝色提示条、拥挤的侧栏，以及浏览器 Tab 里的未读数字。',
    download: '下载 Chrome 插件', viewGithub: '在 GitHub 查看', microcopy: '免费、开源、不追踪。',
    featuresEyebrow: '四个小开关', featuresTitle: '留下内容，放下牵引。',
    f1Title: '通知 badge', f1Body: '隐藏数字和红色/蓝色圆点，同时保留通知图标和文字。',
    f2Title: '新帖蓝条', f2Body: '移除那个不断催你回到时间线顶部的蓝色提示。',
    f3Title: '右侧面板', f3Body: '清掉搜索、趋势、推荐，以及那块永远在刷新的侧栏。',
    f4Title: 'Tab 通知', f4Body: '移除未读数字，使用没有通知红点的 X favicon。',
    whyEyebrow: '为什么是 Clean X Up', whyTitle: '你打开 X 是为了看内容，不是为了被界面管理。',
    whyBody: 'Clean X Up 不重新设计 X，也不替你决定应该看什么。它只是关掉那些在你做出选择之前就来索取注意力的小东西。',
    closingEyebrow: '按你的方式使用', closingTitle: '一个总开关，四个安静的决定。',
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

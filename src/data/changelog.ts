export interface ChangelogItem {
  version: string;
  date: string;
  new: Record<string, string[]>;
  improved: Record<string, string[]>;
  fixed: Record<string, string[]>;
}

export type ChangelogChannel = "stable" | "beta";
export type ChangelogLang = "en" | "zh-hans";

const labels: Record<ChangelogLang, { new: string; improved: string; fixed: string }> = {
  en: {
    new: "New",
    improved: "Improved",
    fixed: "Fixed",
  },
  "zh-hans": {
    new: "新增",
    improved: "改进",
    fixed: "修复",
  },
};

const changelogData: Record<ChangelogChannel, ChangelogItem[]> = {
  stable: [],
  beta: [
    {
      version: "0.1.0-beta",
      date: "2026-03-20",
      new: {
        en: [
          "Released the first public beta version of Aether.",
        ],
        "zh-hans": [
          "发布 Aether 首个公开 Beta 版本。",
        ],
      },
      improved: {
        en: [
          "This is the first public testing release, and the beta changelog starts here.",
        ],
        "zh-hans": [
          "这是第一次对外开放测试，Beta 更新日志从这个版本开始记录。",
        ],
      },
      fixed: {
        en: [],
        "zh-hans": [],
      },
    },
    {
      version: "0.1.0-beta (202603201212)",
      date: "2026-03-20",
      new: {
        en: [],
        "zh-hans": [],
      },
      improved: {
        en: [
          "Expanded the built-in voice lexicon across more locales.",
          "Refined the main window layout and sidebar sizing behavior.",
          "Moved the activation gate to a sheet flow so the main UI stays consistent.",
        ],
        "zh-hans": [
          "扩展内置语音指令词库，覆盖更多语言环境。",
          "优化主窗口布局与侧边栏宽度适配逻辑。",
          "将授权门槛改为 sheet 流程，主界面保持一致。",
        ],
      },
      fixed: {
        en: [
          "Fixed a routing edge case where shorter aliases could win over longer, more specific commands.",
          "Adjusted the DMG Finder layout for a cleaner drag-to-Applications experience.",
        ],
        "zh-hans": [
          "修复语音路由在部分场景下被较短别名抢先匹配的问题（更长、更准确的指令优先）。",
          "调整 DMG Finder 布局，拖拽到 Applications 更清晰。",
        ],
      },
    },
  ],
};

export function getChangelogTimeline(lang: ChangelogLang, channel: ChangelogChannel) {
  const label = labels[lang];
  return changelogData[channel].map((entry) => ({
    version: entry.version,
    date: entry.date,
    bullets: [
      ...entry.new[lang].map((item) => `${label.new}: ${item}`),
      ...entry.improved[lang].map((item) => `${label.improved}: ${item}`),
      ...entry.fixed[lang].map((item) => `${label.fixed}: ${item}`),
    ],
  }));
}

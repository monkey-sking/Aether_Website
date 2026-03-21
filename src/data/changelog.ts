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
      version: "0.1.0-beta (b33)",
      date: "2026-03-21",
      new: {
        en: [],
        "zh-hans": [],
      },
      improved: {
        en: [
          "Hid the HUD immediately before showing Sparkle update checks and modal alerts.",
          "Suppressed HUD overlays while Aether's own foreground windows are visible.",
        ],
        "zh-hans": [
          "在 Sparkle 检查更新和弹出模态更新提示前，立即收起 HUD。",
          "当前台显示 Aether 自身窗口时，抑制 HUD 叠加层继续出现。",
        ],
      },
      fixed: {
        en: [
          "Reduced the chance of the update prompt being covered by existing HUD surfaces.",
        ],
        "zh-hans": [
          "降低检测更新弹窗被已有 HUD 层遮挡的概率。",
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

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
      version: "0.1.0-beta (b37)",
      date: "2026-03-21",
      new: {
        en: [],
        "zh-hans": [],
      },
      improved: {
        en: [
          "Tightened Voice Usage Insights rows by moving app identifiers into hover help and keeping issue or anomaly summaries on a single line.",
          "Stabilized HUD typing-state recovery around explicit suppression windows for apps with special typing behavior.",
        ],
        "zh-hans": [
          "继续收紧语音统计行布局，将应用标识放入悬浮提示，并把问题或异常摘要稳定压缩为单行。",
          "修正特殊输入应用下显式抑制窗口期间的 HUD 输入态恢复判断。",
        ],
      },
      fixed: {
        en: [],
        "zh-hans": [],
      },
    },
    {
      version: "0.1.0-beta (b36)",
      date: "2026-03-21",
      new: {
        en: [],
        "zh-hans": [],
      },
      improved: {
        en: [
          "Condensed Voice Usage Insights cards by moving full bundle identifiers into hover help and surfacing issue or anomaly summaries inline.",
        ],
        "zh-hans": [
          "收紧语音统计卡片布局，将完整 bundle 标识改为悬浮提示，并把问题或异常摘要压缩到单行展示。",
        ],
      },
      fixed: {
        en: [],
        "zh-hans": [],
      },
    },
    {
      version: "0.1.0-beta (b35)",
      date: "2026-03-21",
      new: {
        en: [
          "Added a developer terminology boost toggle that automatically applies contextual vocabulary in Terminal, Xcode, VS Code, Codex, and similar apps.",
        ],
        "zh-hans": [
          "新增“开发者术语增强”开关，在 Terminal、Xcode、VS Code、Codex 等应用前台时自动补充上下文词汇。",
        ],
      },
      improved: {
        en: [
          "Expanded Voice Usage Insights with anomaly-aware summaries, full bundle identifiers, and richer recent-activity cards.",
          "Suppressed focused typing fallback after explicit non-input clicks for apps with unusual typing behavior.",
        ],
        "zh-hans": [
          "扩展语音统计页，加入异常维度汇总，并在按 App 和最近活动中显示完整 bundle 标识。",
          "针对输入行为异常的 App，在明确点击非输入区域后抑制错误的输入状态回退。",
        ],
      },
      fixed: {
        en: [
          "Added regression coverage for developer-speech profile matching and common phrase corrections.",
        ],
        "zh-hans": [
          "补充开发者语音配置匹配与常见短语纠正的回归测试覆盖。",
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

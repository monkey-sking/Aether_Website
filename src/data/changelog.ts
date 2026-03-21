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
      version: "0.1.0-beta (b34)",
      date: "2026-03-21",
      new: {
        en: [
          "Added a separate anomaly bucket for no-speech and environment-triggered dictation issues.",
        ],
        "zh-hans": [
          "新增“异常”统计分类，用于单独统计未识别到人声等环境触发问题。",
        ],
      },
      improved: {
        en: [
          "Expanded Voice Usage Insights with anomaly prioritization, clearer per-app rows, and full bundle identifiers in recent activity.",
          "Suppressed focused typing fallback after explicit non-input clicks for apps with unusual typing behavior.",
        ],
        "zh-hans": [
          "扩展语音统计页，按异常优先排序，并在按 App 和最近活动中显示完整 bundle 标识。",
          "针对输入行为异常的 App，在明确点击非输入区域后抑制错误的输入状态回退。",
        ],
      },
      fixed: {
        en: [
          "Reduced the chance of Sparkle update prompts being covered by existing HUD surfaces.",
        ],
        "zh-hans": [
          "降低 Sparkle 检测更新弹窗被已有 HUD 层遮挡的概率。",
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

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
      version: "0.1.0-beta (b32)",
      date: "2026-03-21",
      new: {
        en: [],
        "zh-hans": [],
      },
      improved: {
        en: [
          "Polished the recent activity list in Voice Usage Insights with tighter event grouping and hover-revealed copy actions.",
          "Kept the latest beta rollout aligned with the refreshed usage diagnostics and dictation feedback flow.",
        ],
        "zh-hans": [
          "优化语音统计最近活动列表的排版分组，并将复制按钮改为悬停显示。",
          "让最新一轮 Beta 与新的使用诊断和听写反馈流程保持一致。",
        ],
      },
      fixed: {
        en: [
          "Full beta update remains available even though the delta package from b31 to b32 was skipped during publish.",
        ],
        "zh-hans": [
          "本次发布未生成 b31 到 b32 的增量包时，更新仍会自动回退到完整包下载。",
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

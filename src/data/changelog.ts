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
      version: "0.1.0-beta (b31)",
      date: "2026-03-21",
      new: {
        en: [
          "Added a one-click option to clear both retained voice history and cumulative usage statistics.",
        ],
        "zh-hans": [
          "新增一键清空语音历史与累计统计的操作。",
        ],
      },
      improved: {
        en: [
          "Reworked Voice Usage Insights with cumulative summaries, per-app aggregates, issue-rate cards, and recent-activity filters.",
          "Improved Chinese dictation endpoint detection and added a safer final punctuation fallback.",
          "Polished HUD diagnostics, command previews, and localized settings copy for clearer feedback.",
        ],
        "zh-hans": [
          "重做语音使用统计页，加入累计概览、按 App 汇总、问题率卡片和最近记录筛选。",
          "优化中文听写收尾判断，并补充更稳妥的句末标点兜底。",
          "统一 HUD 诊断、命令预览与设置页多语言文案，反馈更清晰。",
        ],
      },
      fixed: {
        en: [
          "Kept older Unrecognized labels compatible after renaming unmatched dictation events and statistics.",
          "Added regression coverage for voice command routing and endpoint handling edge cases.",
        ],
        "zh-hans": [
          "将旧版“未识别”统计口径兼容到新版“未匹配”命名，避免升级后数据断层。",
          "补充语音命令路由与收尾判断的回归测试覆盖。",
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

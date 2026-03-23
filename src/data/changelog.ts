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
  stable: [
    {
      version: "0.1.0",
      date: "2026-03-23",
      new: {
        en: [
          "Added a dedicated Wake & Activation page with wake hits, empty wakes, dictation or control follow-ups, phrase distribution, and recent event history.",
          "Added wake-history management controls for capture, retention limits, statistics reset, and history cleanup.",
        ],
        "zh-hans": [
          "新增独立的“唤醒与激活”页面，可查看唤醒命中、空唤醒、转输入、转控制、唤醒词分布和最近事件历史。",
          "新增唤醒历史管理，可直接控制记录开关、保留上限、统计重置和历史清空。",
        ],
      },
      improved: {
        en: [
          "Reworked the Voice Usage Insights layout and copy so the main view is tighter and more detail moves into side panels and sheets.",
          "Improved standby and wake follow-up recognition so wake tracking and follow-up conversion are more complete.",
          "Improved activation recovery with clearer device-loading states, safer device-list retries, and a direct quit action from the locked screen.",
        ],
        "zh-hans": [
          "重做语音统计页布局与文案，主视图更收口，更多细节移入分栏和详情页。",
          "改进待机与唤醒后的后续识别链路，让唤醒统计和转化记录更完整。",
          "改进激活恢复流程，区分设备列表加载中与空列表状态，并补上锁定页直接退出入口。",
        ],
      },
      fixed: {
        en: [
          "Fixed rapid flickering between dictation and control mode in auto mode, and reduced false cross-utterance trimming around short Chinese fragments.",
        ],
        "zh-hans": [
          "修复自动模式下输入态与控制态来回闪烁的问题，并降低短中文片段的跨句误裁剪概率。",
        ],
      },
    },
    {
      version: "0.1.0",
      date: "2026-03-22",
      new: {
        en: [
          "Released the first public stable version of Aether.",
          "Opened the public stable download path and in-app stable update feed.",
        ],
        "zh-hans": [
          "发布 Aether 首个公开正式版本。",
          "正式开放 Stable 下载路径和 App 内正式更新通道。",
        ],
      },
      improved: {
        en: [],
        "zh-hans": [],
      },
      fixed: {
        en: [],
        "zh-hans": [],
      },
    },
  ],
  beta: [
    {
      version: "0.1.0-beta (b67-b74)",
      date: "2026-03-23",
      new: {
        en: [
          "Added a dedicated Wake & Activation page with wake hits, empty wakes, dictation or control follow-ups, phrase distribution, and recent event history.",
          "Added wake-history controls for capture, retention limits, statistics reset, and history cleanup.",
        ],
        "zh-hans": [
          "新增独立的“唤醒与激活”页面，可查看唤醒命中、空唤醒、转输入、转控制、唤醒词分布和最近事件历史。",
          "新增唤醒历史管理，可直接控制记录开关、保留上限、统计重置和历史清空。",
        ],
      },
      improved: {
        en: [
          "Improved activation recovery with clearer device-loading states, safer device-list retries, and a direct quit action from the locked screen.",
          "Split microphone and speech permission onboarding into normal request and repair actions so first-time prompts no longer jump into System Settings too early.",
          "Beta builds now default to the beta update feed unless the user explicitly switches channels.",
        ],
        "zh-hans": [
          "改进激活恢复流程，区分设备列表加载中与空列表状态，并补上锁定页直接退出入口。",
          "将麦克风和语音识别权限引导拆成“正常申请”和“修复权限”两条路径，首次授权不再过早跳到系统设置。",
          "Beta 构建现在默认跟随 Beta 更新通道，只有用户手动切换后才会改走 Stable。",
        ],
      },
      fixed: {
        en: [
          "Fixed rapid flickering between dictation and control mode in auto mode by removing the HUD-routing feedback loop.",
          "Fixed denied-permission recovery paths that could clear TCC records too early and leave Aether missing from privacy panes.",
        ],
        "zh-hans": [
          "修复自动模式下输入态与控制态来回闪烁的问题，拆掉 HUD 与语音路由之间的反馈环。",
          "修复已拒绝权限场景下过早重置 TCC 记录，导致系统隐私列表里看不到 Aether 的问题。",
        ],
      },
    },
    {
      version: "0.1.0-beta (b58-b66)",
      date: "2026-03-23",
      new: {
        en: [],
        "zh-hans": [],
      },
      improved: {
        en: [
          "Reworked Voice Usage Insights into a tighter usage-focused dashboard with clearer labels, a more useful app rail, and more detail moved into sheets.",
          "Refined dictation routing and wake-session re-arm behavior so everyday phrases stay in text input while wake follow-up tracking becomes more stable.",
          "Added more Chinese command aliases and forcing prefixes for command or dictation routing.",
        ],
        "zh-hans": [
          "重做语音统计页，改成更收口的使用概览布局，文案更清楚，按 App 侧栏和详情页也更好扫读。",
          "继续收紧听写路由和待机唤醒后的 re-arm 逻辑，让普通短句更稳定留在输入流里，同时让唤醒后续统计更完整。",
          "补充更多中文命令别名和强制前缀，提升命令/听写切换时的可控性。",
        ],
      },
      fixed: {
        en: [
          "Reduced accidental command matches from ordinary dictation phrases that referenced panel, paste, or undo operations.",
        ],
        "zh-hans": [
          "降低普通听写短句误触“显示面板”“粘贴”“撤销”等命令的概率。",
        ],
      },
    },
    {
      version: "0.1.0-beta (b52-b57)",
      date: "2026-03-22",
      new: {
        en: [],
        "zh-hans": [],
      },
      improved: {
        en: [
          "Rebuilt the early Voice Usage Insights iterations into a more compact dashboard with clearer labels, a usage-focused app list, and fewer always-visible details.",
          "Added an option to hide no-speech events from the insights view.",
        ],
        "zh-hans": [
          "将早期语音统计页重构成更紧凑的仪表盘，文案更清楚，按 App 列表更偏使用概览，主界面也减少了长期占位的细节。",
          "新增隐藏 no-speech 事件的统计页开关。",
        ],
      },
      fixed: {
        en: [
          "Blocked speech actions while macOS is locked.",
        ],
        "zh-hans": [
          "修复系统锁屏时仍可能继续执行语音动作的问题。",
        ],
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

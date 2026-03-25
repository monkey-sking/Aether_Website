import { manualDownloadURL } from "./downloads";

export type SupportedLang = "en" | "zh-hans";

export interface SectionBlock {
  title: string;
  body: string;
}

export interface SiteCopy {
  meta: {
    siteName: string;
    defaultDescription: string;
    supportEmail: string;
    brandSubtitle: string;
  };
  nav: {
    home: string;
    pricing: string;
    faq: string;
    beta: string;
    guide: string;
    changelog: string;
  };
  footer: {
    slogan: string;
    primaryCta: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
    contact: string;
  };
  home: {
    title: string;
    subtitle: string;
    heroTag: string;
    primaryCta: string;
    secondaryCta: string;
    heroFootnote: string;
    betaNote: string;
    betaLinkLabel: string;
    heroPills: string[];
    heroNotes: [string, string][];
    coreTitle: string;
    coreFeatures: SectionBlock[];
    experienceTitle: string;
    experiences: SectionBlock[];
    releaseTitle: string;
    releaseSubtitle: string;
    releaseCards: SectionBlock[];
    systemTitle: string;
    systemSubtitle: string;
    systemCards: SectionBlock[];
    setupTitle: string;
    setupSteps: SectionBlock[];
    galleryTitle: string;
    galleryBody: string;
    finalBand: string;
    coreTag: string;
    useTag: string;
    galleryTag: string;
    setupTag: string;
  };
  download: {
    title: string;
    subtitle: string;
    tag: string;
    stableLabel: string;
    stablePath: string;
    stableBody: string;
    betaLabel: string;
    betaPath: string;
    betaBody: string;
    betaLinkLabel: string;
    stepsTitle: string;
    steps: SectionBlock[];
    stepsTag: string;
    notesTitle: string;
    notes: string[];
    helpTitle: string;
    helpItems: string[];
  };
  pricing: {
    title: string;
    subtitle: string;
    tag: string;
    plans: Array<{
      eyebrow: string;
      name: string;
      price: string;
      body: string;
      bullets: string[];
    }>;
    referral: string;
    cta: string;
    noteTitle: string;
    noteBody: string;
  };
  faq: {
    title: string;
    subtitle: string;
    tag: string;
    items: SectionBlock[];
  };
  beta: {
    title: string;
    subtitle: string;
    tag: string;
    bullets: string[];
    cautionTitle: string;
    cautionBody: string;
    reportTitle: string;
    reportBody: string;
  };
  guide: {
    title: string;
    description: string;
    intro: string;
    sections: SectionBlock[];
  };
  changelog: {
    title: string;
    description: string;
    intro: string;
    stableLabel: string;
    betaLabel: string;
    emptyTitle: string;
    emptyBody: string;
  };
  betaChangelog: {
    title: string;
    description: string;
    intro: string;
    stableLabel: string;
    betaLabel: string;
    emptyTitle: string;
    emptyBody: string;
  };
  privacy: {
    title: string;
    description: string;
    intro: string;
    sections: SectionBlock[];
  };
  terms: {
    title: string;
    description: string;
    intro: string;
    sections: SectionBlock[];
  };
}

const en: SiteCopy = {
  meta: {
    siteName: "Aether",
    defaultDescription:
      "Aether helps Mac users type, click, scroll, and control common actions with less hand movement.",
    supportEmail: "aether@7caifei.com",
    brandSubtitle: "Use Mac without keyboard & mouse",
  },
  nav: {
    home: "Home",
    pricing: "Pricing",
    faq: "FAQ",
    beta: "Beta",
    guide: "Guide",
    changelog: "Changelog",
  },
  footer: {
    slogan:
      "Use your Mac without the keyboard and mouse.",
    primaryCta: "Download for Mac",
    legal: "Legal",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    rights: "ProcessZero Team. All rights reserved.",
    contact: "Contact",
  },
  home: {
    title: "Use your Mac without the keyboard and mouse.",
    subtitle:
      "Voice input and everyday control, so the keyboard and mouse stay optional.",
    heroTag: "",
    primaryCta: "Download for Mac",
    secondaryCta: "See what it handles",
    heroFootnote: "Requires macOS 15.0 or later.",
    betaNote: "Want earlier builds?",
    betaLinkLabel: "Download Beta",
    heroPills: ["Hands-free typing", "Voice control", "Head cursor", "Without keyboard & mouse"],
    heroNotes: [],
    coreTitle: "What Aether takes off your hands",
    coreFeatures: [
      {
        title: "Typing, replies, and short edits",
        body:
          "Reply, label, rename, and make short edits by speaking directly into the active field.",
      },
      {
        title: "Clicks, context menus, and simple commands",
        body: "Offload the small actions that keep pulling you back to the trackpad.",
      },
      {
        title: "Optional precision when you need pointer help",
        body:
          "Head control stays optional, so the product still feels useful before you add it.",
      },
      {
        title: "One app for input, control, activation, and updates",
        body:
          "The workflow, license state, and release channel all stay in one place instead of being scattered across tools.",
      },
    ],
    experienceTitle: "It starts to feel natural when",
    experiences: [
      {
        title: "Replies, notes, and short writing",
        body:
          "These are the easiest wins—say it, and it appears where you need it.",
      },
      {
        title: "Scrolling, checking, and light edits",
        body:
          "Let voice handle the low-cost actions so your hands stay on the desk when time is tight.",
      },
      {
        title: "Cursor lifts start to hurt",
        body:
          "Use optional head or hand control to move the pointer without reaching for the hardware.",
      },
    ],
    releaseTitle: "Public release paths already match production",
    releaseSubtitle:
      "The site only points to the signed DMG downloads and appcast feeds we ship, so nothing here is a placeholder.",
    releaseCards: [
      {
        title: "Stable channel",
        body:
          "Download the signed Stable DMG and keep using the daily-driver path.",
      },
      {
        title: "Beta channel",
        body:
          "Early builds live on this channel so testers can see UI, motion, activation, and update changes before they reach Stable.",
      },
      {
        title: "Update attribution",
        body:
          "Manual downloads and in-app update downloads both flow through the tracking gateway so release reporting stays coherent.",
      },
    ],
    systemTitle: "The product is larger than the app window",
    systemSubtitle:
      "Aether ships as a system made of three surfaces: the macOS app, the public website, and the authorization backend. The site should make that architecture obvious.",
    systemCards: [
      {
        title: "Apps",
        body:
          "Holds the native macOS interaction layer: pointer control, voice control, HUD, activation, device state, and update-channel selection.",
      },
      {
        title: "Website",
        body:
          "Holds the public narrative and distribution surface: home, download, pricing, FAQ, beta recruitment, guide, changelog, privacy, and terms.",
      },
      {
        title: "Admin",
        body:
          "Holds the entitlement and issuance system: Paddle, manual beta codes, device limits, resend, and product-specific release handling.",
      },
    ],
    setupTitle: "How to start without getting overwhelmed",
    setupSteps: [
      {
        title: "Install first, then grant permissions",
        body: "Put Aether in /Applications before turning on Accessibility, Microphone, and Speech Recognition so macOS remembers the right path.",
      },
      {
        title: "Start with dictation",
        body: "Use Push to Talk for the first run. Once dictation feels stable, add commands.",
      },
      {
        title: "Add head tracking only when you need it",
        body: "Head tracking is optional. Turn it on after the simpler workflow feels stable, then use posture guide or recenter to dial it in.",
      },
    ],
    galleryTitle: "What the app actually looks like",
    galleryBody:
      "Setup, status, activation, and update controls already exist in the product. This is the real app surface, not a concept mockup.",
    finalBand:
      "Aether is for people who want to do more on Mac by speaking, with less constant dependence on the keyboard and mouse.",
    coreTag: "What Gets Easier",
    useTag: "Real Use",
    galleryTag: "What It Looks Like",
    setupTag: "Start Here",
  },
  download: {
    title: "Download Aether",
    subtitle:
      "Stable downloads are now public. Beta remains available for earlier preview builds.",
    tag: "Download",
    stepsTag: "Installation",
    stableLabel: "Stable",
    stablePath: manualDownloadURL("stable"),
    stableBody: "Recommended for most people. Use this if you want the normal public release path.",
    betaLabel: "Beta",
    betaPath: manualDownloadURL("beta"),
    betaBody: "Earlier changes for testers who want them and can tolerate rougher builds.",
    betaLinkLabel: "Download Beta",
    stepsTitle: "After download",
    steps: [
      {
        title: "Move it into /Applications",
        body: "Drag Aether into /Applications before granting permissions so macOS binds the final install path.",
      },
      {
        title: "Open Overview first",
        body: "Check readiness, then finish Accessibility, Microphone, and Speech Recognition before testing features.",
      },
      {
        title: "Start with voice input",
        body: "Use Push to Talk for the first run. Once dictation is stable, add voice control and head tracking.",
      },
    ],
    notesTitle: "Before launch",
    notes: [
      "Install Aether into /Applications before granting permissions.",
      "Stable is now the default public download path. Beta stays available for earlier preview builds.",
      "Use the About page inside the app for activation, device status, and updates.",
    ],
    helpTitle: "If something feels off",
    helpItems: [
      "If permissions look wrong, reopen the app from /Applications and check readiness again.",
      "If updates fail, open About and try the manual download again.",
      "If head control feels off, recenter first before changing anything else.",
    ],
  },
  pricing: {
    title: "Pricing Coming Soon",
    subtitle:
      "Aether is now publicly available on the stable channel. Pricing details will be announced soon.",
    tag: "Pricing",
    plans: [],
    referral: "",
    cta: "Download for Mac",
    noteTitle: "Current Access",
    noteBody:
      "Stable and Beta are both publicly available right now. Pricing is still being finalized.",
  },
  faq: {
    title: "Questions people ask before they install",
    subtitle:
      "Most people only need to know what Aether replaces, what it needs, and how to get started.",
    tag: "FAQ",
    items: [
      {
        title: "What problems does Aether actually solve?",
        body: "It lets you type and handle common Mac actions with your voice, so you do not need to keep switching back to the keyboard and mouse for every small task.",
      },
      {
        title: "Do I need AirPods?",
        body: "They matter most if you want head control. If you only want to start with voice input and simple voice actions, begin there first.",
      },
      {
        title: "Do I need to turn everything on at once?",
        body: "No. Start with voice input, then add voice control, and only turn on head control after the simpler workflow feels stable.",
      },
      {
        title: "Why does Aether ask for permissions?",
        body: "Because it needs access to the microphone, speech recognition, and accessibility features to help you type and control parts of the system.",
      },
      {
        title: "Can I switch between the normal version and beta?",
        body: "Yes. Most people should stay on the normal version. Beta is there if you want earlier changes and can tolerate rough edges.",
      },
      {
        title: "Where do I manage activation and updates?",
        body: "Use the About page inside the app. That is where activation, device status, and update controls live.",
      },
      {
        title: "Is there a refund window?",
        body: "Yes. Aether is sold with a 7-day trial and a 7-day refund window. If a paid plan does not fit, contact support within the first 7 days.",
      },
      {
        title: "Where should I look if the installation feels wrong?",
        body: "Check that Aether is installed in /Applications, then reopen the app and review the readiness section on the Overview page.",
      },
    ],
  },
  beta: {
    title: "Beta exists for earlier changes, not for most people.",
    subtitle:
      "Use Beta only if you want earlier changes and are comfortable with rougher builds. Most people should start with the normal download.",
    tag: "Beta",
    bullets: [
      "Earlier changes than the normal version",
      "Separate public download",
      "Switchable from inside the app",
      "Best for testers following changes closely",
    ],
    cautionTitle: "Who should use Beta",
    cautionBody:
      "Choose Beta if you want earlier access to motion, HUD, or voice behavior changes. Choose Stable if you want the more conservative daily-driver path.",
    reportTitle: "What to send when something breaks",
    reportBody:
      "Include the app version, update channel, what you were trying to do, and a screenshot or log snippet if you have one.",
  },
  guide: {
    title: "Getting Started",
    description: "Install Aether correctly, grant permissions, and start with the simplest workflow first.",
    intro:
      "This guide is written for first-time users. Start with permissions, try voice input first, then voice control, and only then turn on head tracking.",
    sections: [
      {
        title: "Install in /Applications",
        body: "Move Aether into /Applications before granting permissions so macOS binds accessibility, microphone, and speech permissions to the final path.",
      },
      {
        title: "Confirm readiness first",
        body: "Open the Overview page and check the readiness section for Accessibility, Microphone, Speech Recognition, and at least one input device.",
      },
      {
        title: "Start with voice input",
        body: "Use Push to Talk first if you are unsure. It is the safest way to verify that dictation works in your environment.",
      },
      {
        title: "Add voice control next",
        body: "Once dictation is stable, enable voice control and try a few simple commands like click, scroll, drag, or undo in a safe app.",
      },
      {
        title: "Turn on head tracking last",
        body: "Only enable head tracking after voice input and control feel stable. If the cursor drifts, use the posture guide or recenter action.",
      },
      {
        title: "Use About for activation and updates",
        body: "The About page handles trial, activation, device management, and Stable/Beta switching in one place.",
      },
    ],
  },
  changelog: {
    title: "Stable Changelog",
    description: "Public release notes for stable Aether releases.",
    intro: "Stable release notes start when the first public stable build is announced.",
    stableLabel: "Stable",
    betaLabel: "Beta",
    emptyTitle: "Preparing the first stable release notes",
    emptyBody: "This page will initialize with the first public stable version.",
  },
  betaChangelog: {
    title: "Beta Changelog",
    description: "Preview release notes for public Aether beta builds.",
    intro: "Beta notes track earlier builds, faster iteration, and channel-specific packaging changes.",
    stableLabel: "Stable",
    betaLabel: "Beta",
    emptyTitle: "No beta entries yet",
    emptyBody: "Beta release notes will appear here once the first public beta build is posted.",
  },
  privacy: {
    title: "Privacy Policy",
    description: "How Aether handles activation, entitlement, and required service data.",
    intro:
      "Aether is designed to keep the product's interaction logic as local to the Mac as possible. The website and entitlement flow only use the minimum data needed to deliver the product and validate access.",
    sections: [
      {
        title: "What we collect",
        body: "We collect the email used for trial or subscription, activation state, device binding metadata, and related account status required for entitlement validation.",
      },
      {
        title: "What we use it for",
        body: "This data is used to deliver activation emails, validate trials and subscriptions, enforce device limits, and support update-channel-aware account management.",
      },
      {
        title: "What this flow does not upload",
        body: "The website and activation path do not exist to upload your dictation text, documents, or workspace files as part of normal use.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    description: "Commercial terms for using Aether via direct download and subscription access.",
    intro:
      "Aether is distributed directly from the website and activated inside the macOS app using email and activation code.",
    sections: [
      {
        title: "Subscriptions and trials",
        body: "Aether starts with a 7-day trial and can continue on monthly or yearly subscription. Paid purchases are eligible for refund within the first 7 days when requested through support.",
      },
      {
        title: "Release channels",
        body: "Stable and Beta are both public channels. Beta may receive earlier changes and may provide a lower stability guarantee than Stable.",
      },
      {
        title: "Device limits and account access",
        body: "Users are responsible for keeping access to the activation email account and for managing device slots when old machines need to be removed.",
      },
    ],
  },
};

const zhHans: SiteCopy = {
  meta: {
    siteName: "Aether",
    defaultDescription:
      "Aether 帮助 Mac 用户用更少的手部动作完成输入、点击、滚动和常见操作。",
    supportEmail: "aether@7caifei.com",
    brandSubtitle: "离开键鼠也能用 Mac",
  },
  nav: {
    home: "首页",
    pricing: "价格",
    faq: "常见问题",
    beta: "Beta",
    guide: "指南",
    changelog: "更新日志",
  },
  footer: {
    slogan:
      "离开键盘鼠标，也能用 Mac。",
    primaryCta: "下载 Mac 版",
    legal: "法律",
    privacy: "隐私政策",
    terms: "服务条款",
    rights: "ProcessZero Team. All rights reserved.",
    contact: "联系",
  },
  home: {
    title: "离开键盘鼠标，也能用 Mac。",
    subtitle:
      "语音输入，语音操作。键盘鼠标变成可选项。",
    heroTag: "",
    primaryCta: "下载 Mac 版",
    secondaryCta: "",
    heroFootnote: "要求 macOS 15.0 或更高版本。",
    betaNote: "想更早拿到新版本？",
    betaLinkLabel: "下载 Beta 版",
    heroPills: ["不用键鼠", "听写输入", "语音控制", "头控光标"],
    heroNotes: [],
    coreTitle: "Aether 先替你接管这些动作",
    coreFeatures: [
      {
        title: "输入、回复和短编辑",
        body:
          "回消息、改名字、补几句短文本时，直接说出来就行。",
      },
      {
        title: "点击、右键、双击和简单命令",
        body: "把那些总把你拉回触控板的小动作，尽量交给 Aether 完成。",
      },
      {
        title: "需要指针精度时再加头控",
        body:
          "头控是补充层，不是先决条件，所以你不用一上来就学完整套姿势。",
      },
      {
        title: "输入、控制、激活和更新都在一个 App",
        body:
          "工作流、授权状态和更新通道都留在 Aether 里，不用来回切工具。",
      },
    ],
    experienceTitle: "以下情况会让它更顺手",
    experiences: [
      {
        title: "简短回复与笔记",
        body:
          "这些是最容易看到成效的时刻——说出来，它就出现在你要的地方。",
      },
      {
        title: "浏览、检查、轻量编辑",
        body:
          "让语音接管那些低成本的动作，保持手部在桌面上、节奏不被打断。",
      },
      {
        title: "频繁挪动光标开始让人疲劳",
        body:
          "用头控移动指针，不用再每次都去拿键鼠。",
      },
    ],
    releaseTitle: "公开发布路径与生产一致",
    releaseSubtitle:
      "官网直接指向我们签名的 DMG 下载和 appcast，确保展示的内容就是实际发布的流水线。",
    releaseCards: [
      {
        title: "Stable 通道",
        body:
          "下载签名的 Stable DMG，继续用作日常工作的稳定通道。",
      },
      {
        title: "Beta 通道",
        body:
          "Beta 是早期测试通道，提供 UI、头控、激活和更新行为的预览。",
      },
      {
        title: "更新归因",
        body:
          "手动下载与 App 内更新都走统一追踪网关，方便派发统计。",
      },
    ],
    systemTitle: "产品不只是一扇 App 窗口",
    systemSubtitle:
      "Aether 的完整形态由三个面组成：macOS App、公开官网和授权后台。官网需要把这层架构讲清楚。",
    systemCards: [
      {
        title: "Apps",
        body:
          "承载原生 macOS 交互层：头控指针、语音控制、HUD、激活、设备状态和更新通道切换。",
      },
      {
        title: "Website",
        body:
          "承载公开叙事和分发：首页、下载、价格、FAQ、Beta 招募、指南、更新日志、隐私与条款。",
      },
      {
        title: "Admin",
        body:
          "承载授权与发码系统：Paddle、Beta 人工码、设备限制、重发、以及产品级发布处理。",
      },
    ],
    setupTitle: "最简单的开始方式",
    setupSteps: [
      {
        title: "先安装，再授权",
        body: "先把 Aether 放进 /Applications，再开辅助功能、麦克风和语音识别，这样系统会记住正确路径。",
      },
      {
        title: "先从听写开始",
        body: "第一次先用按住说话，确认输入框能稳定出字；熟悉以后再加命令操作。",
      },
      {
        title: "最后再开头控指针",
        body: "头控适合放在最后启用；如果姿势或坐姿变化了，再用姿态引导或重新校准慢慢调顺。",
      },
    ],
    galleryTitle: "App 实际就是这个样子",
    galleryBody:
      "安装引导、状态视图、激活和更新入口都已经在产品里。这里展示的是实际界面，不是概念稿。",
    finalBand:
      "Aether 适合那些想多用声音做事、少一点依赖键盘和鼠标的人。",
    coreTag: "哪些事会更轻松",
    useTag: "真实场景",
    galleryTag: "界面预览",
    setupTag: "这样开始",
  },
  download: {
    title: "下载 Aether",
    subtitle:
      "Stable 现已正式开放下载，Beta 继续保留给想更早体验变化的用户。",
    tag: "下载",
    stepsTag: "安装步骤",
    stableLabel: "Stable",
    stablePath: manualDownloadURL("stable"),
    stableBody: "适合大多数用户，作为当前默认的公开正式下载入口。",
    betaLabel: "Beta",
    betaPath: manualDownloadURL("beta"),
    betaBody: "给想更早拿到变化的测试者准备，也会更粗糙一些。",
    betaLinkLabel: "下载 Beta 版",
    stepsTitle: "下载后怎么做",
    steps: [
      {
        title: "先放进 /Applications",
        body: "请先把 Aether 拖到 /Applications，再去授予权限，这样系统会记住最终安装路径。",
      },
      {
        title: "先看总览页",
        body: "先看准备情况，把辅助功能、麦克风和语音识别补齐，再开始试功能。",
      },
      {
        title: "先从语音输入开始",
        body: "第一次先用按住说话验证听写流程。确认稳定以后，再开语音控制和头控。",
      },
    ],
    notesTitle: "启动前先确认",
    notes: [
      "请先将 Aether 安装到 /Applications，再授予权限。",
      "Stable 现在已经是默认公开下载入口；Beta 继续提供更早的预览版本。",
      "App 内 About 页面统一管理激活、设备状态和更新。",
    ],
    helpTitle: "如果哪里不对",
    helpItems: [
      "如果权限状态不对，先从 /Applications 重新打开 Aether，再看准备情况。",
      "如果更新失败，先去 About 页面，再尝试手动重新下载。",
      "如果头控感觉不对，先重新校准，再决定要不要继续调整。",
    ],
  },
  pricing: {
    title: "价格敬请期待",
    subtitle:
      "Aether 现已通过 Stable 通道正式对外提供下载，定价规则即将公布。",
    tag: "价格",
    plans: [],
    referral: "",
    cta: "下载 Mac 版",
    noteTitle: "当前开放方式",
    noteBody:
      "当前 Stable 和 Beta 都已公开提供，正式定价仍在收口中。",
  },
  faq: {
    title: "安装前大家最常问的事",
    subtitle:
      "大多数人只需要先知道 Aether 能替代什么、需要什么，以及怎么开始。",
    tag: "常见问题",
    items: [
      {
        title: "Aether 到底是帮我解决什么问题？",
        body: "它让你用声音完成输入和常见电脑操作，不用每一个小动作都再回到键盘和鼠标。",
      },
      {
        title: "一定要用 AirPods 吗？",
        body: "如果你想用头控，它们会更重要。如果你只是先试语音输入和简单语音操作，可以先从那部分开始。",
      },
      {
        title: "是不是要一下子把所有功能都打开？",
        body: "不用。先试语音输入，再试语音控制，最后再开头控，这样最稳。",
      },
      {
        title: "为什么会申请这些权限？",
        body: "因为它需要麦克风、语音识别和辅助功能权限，才能帮你输入文字并控制一部分系统动作。",
      },
      {
        title: "普通版和 Beta 能切换吗？",
        body: "可以。大多数人建议先用普通版。Beta 适合想更早体验变化，并接受粗糙细节的用户。",
      },
      {
        title: "激活和更新去哪里管？",
        body: "都在 App 里的 About 页面。激活、设备状态和更新控制都放在那里。",
      },
      {
        title: "有退款期吗？",
        body: "有。Aether 提供 7 天试用，也支持前 7 天退款。如果付费后发现不适合，请在 7 天内联系支持。",
      },
      {
        title: "如果安装感觉不对，先看哪里？",
        body: "先确认 Aether 是否装在 /Applications，再重新打开 App，看总览页的准备情况。",
      },
    ],
  },
  beta: {
    title: "Beta 有，但它不是大多数人的默认入口。",
    subtitle:
      "只有当你想更早体验变化，并且可以接受更粗糙的版本时，再使用 Beta。大多数人先下载普通版就够了。",
    tag: "Beta",
    bullets: ["比普通版更早拿到变化", "使用单独下载地址", "可以在 App 内切换", "更适合愿意帮忙测试的人"],
    cautionTitle: "谁应该用 Beta",
    cautionBody:
      "如果你更在意更早拿到交互变化，可以选择 Beta；如果你更在意日常稳定性，Stable 仍然是默认推荐。",
    reportTitle: "出问题时发什么",
    reportBody:
      "请带上 App 版本、更新渠道、你当时想做什么，如果能附一张截图或日志片段会更快定位问题。",
  },
  guide: {
    title: "使用指南",
    description: "先正确安装 Aether，再按最简单的顺序开始使用。",
    intro:
      "这份指南是给第一次使用 Aether 的普通用户写的。先处理权限，再试语音输入，接着试语音控制，最后再开头控指针。",
    sections: [
      {
        title: "安装到 /Applications",
        body: "先把 Aether 移到 /Applications，再授予权限，这样辅助功能、麦克风和语音识别授权会绑定到稳定路径。",
      },
      {
        title: "先看准备情况",
        body: "打开总览页，先确认准备情况里的辅助功能、麦克风、语音识别和输入设备是否都已就绪。",
      },
      {
        title: "先试语音输入",
        body: "如果你不确定怎么开始，先用按住说话验证最基础的听写流程，确认输入框里能正常出字。",
      },
      {
        title: "再试语音控制",
        body: "语音输入稳定以后，再开语音控制，先用点击、滚动、拖拽和撤销这类简单命令。",
      },
      {
        title: "最后再开头控指针",
        body: "头控更适合放在最后启用；如果光标偏移，用姿态引导或校准动作把它拉回正位。",
      },
      {
        title: "账户和更新都放在 About",
        body: "试用、激活、设备管理，以及 Stable / Beta 切换都在 About 页面完成。",
      },
    ],
  },
  changelog: {
    title: "正式版更新日志",
    description: "Aether 正式版对外发布记录。",
    intro: "正式版日志会从首个公开稳定版本开始记录。",
    stableLabel: "正式版",
    betaLabel: "Beta",
    emptyTitle: "正在准备第一个正式版记录",
    emptyBody: "这里会从首个公开正式版本开始初始化更新日志。",
  },
  betaChangelog: {
    title: "Beta 更新日志",
    description: "Aether 公开测试版的发布记录。",
    intro: "Beta 日志记录更早的预览版本、快速迭代和测试通道的分发变化。",
    stableLabel: "正式版",
    betaLabel: "Beta",
    emptyTitle: "还没有 Beta 记录",
    emptyBody: "当首个公开 Beta 发布后，日志会显示在这里。",
  },
  privacy: {
    title: "隐私政策",
    description: "Aether 如何处理激活、授权状态和必要的服务数据。",
    intro:
      "Aether 的目标是尽量把交互逻辑保留在本地 Mac 上。官网与授权流程只使用交付产品和验证访问权限所需的最小数据。",
    sections: [
      {
        title: "我们收集什么",
        body: "我们会收集试用或订阅使用的邮箱、激活状态、设备绑定元数据，以及授权验证所需的账户状态信息。",
      },
      {
        title: "这些数据用来做什么",
        body: "这些数据用于发送激活邮件、验证试用或订阅、执行设备数量限制，以及支持与更新渠道相关的账户管理。",
      },
      {
        title: "这个流程不会上传什么",
        body: "官网和激活链路不会为了正常使用而上传你的听写文本、文档内容或工作区文件。",
      },
    ],
  },
  terms: {
    title: "服务条款",
    description: "Aether 官网直发和订阅访问相关的商业条款。",
    intro:
      "Aether 通过官网直接分发，并通过邮箱和激活码在 macOS App 内完成激活。",
    sections: [
      {
        title: "试用与订阅",
        body: "Aether 先提供 7 天试用，之后可以按月或按年继续订阅。付费购买后，如需退款，请在前 7 天内联系支持处理。",
      },
      {
        title: "更新渠道",
        body: "Stable 和 Beta 都是公开渠道。Beta 会更早拿到变更，稳定性保证可能低于 Stable。",
      },
      {
        title: "设备限制与账户访问",
        body: "用户需要保持对激活邮箱的访问能力，并在旧设备不再使用时自行管理设备占用。",
      },
    ],
  },
};

export function getSiteCopy(lang: string): SiteCopy {
  return lang === "zh-hans" ? zhHans : en;
}

export const prerender = false;

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Aether Download</title>
    <style>
      :root {
        color-scheme: dark;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        padding: 24px;
        font-family: "SF Pro Text", "Avenir Next", sans-serif;
        background:
          radial-gradient(circle at top left, rgba(108, 231, 255, 0.16), transparent 30%),
          radial-gradient(circle at 82% 12%, rgba(158, 182, 255, 0.18), transparent 26%),
          linear-gradient(180deg, #07101b 0%, #091321 55%, #060d16 100%);
        color: #eef5ff;
      }
      .card {
        width: min(520px, 100%);
        border-radius: 28px;
        border: 1px solid rgba(255, 255, 255, 0.12);
        background: linear-gradient(180deg, rgba(11, 20, 34, 0.96), rgba(9, 17, 29, 0.98));
        box-shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
        padding: 30px 24px 24px;
      }
      h1 {
        margin: 0 0 12px;
        font-size: 1.7rem;
        line-height: 1.15;
      }
      p {
        margin: 0;
        color: rgba(220, 232, 248, 0.8);
        line-height: 1.7;
      }
      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 22px;
      }
      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 46px;
        padding: 0 18px;
        border-radius: 999px;
        font-weight: 700;
        text-decoration: none;
      }
      .btn-primary {
        background: linear-gradient(135deg, #6ce7ff, #8ea6ff);
        color: #04101d;
      }
      .btn-secondary {
        background: rgba(255, 255, 255, 0.08);
        color: #eef5ff;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1 id="title">Stable is not public yet</h1>
      <p id="body">Beta downloads are currently the public channel. You can continue with the Beta build for now.</p>
      <div class="actions">
        <a class="btn btn-primary" href="/beta/Aether.dmg" id="primary">Open Beta Download</a>
        <a class="btn btn-secondary" href="/" id="secondary">Back to Home</a>
      </div>
    </div>
    <script>
      const referrer = document.referrer || "";
      const lang = referrer.includes("/zh-hans/") ? "zh-hans" : "en";
      if (lang === "zh-hans") {
        document.documentElement.lang = "zh-Hans";
        document.getElementById("title").textContent = "正式版暂未开放";
        document.getElementById("body").textContent = "当前对外开放的是 Beta 下载。你可以先下载 Beta 版本继续体验 Aether。";
        document.getElementById("primary").textContent = "前往 Beta 下载";
        document.getElementById("secondary").textContent = "返回首页";
      }
    </script>
  </body>
</html>
`;

export function GET() {
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

// Independent SillyTavern phone scaffold. No third-party source code copied.
const ROOT_ID = 'xinglugu-phone-root';
function mount() {
  if (document.getElementById(ROOT_ID)) return;
  const root = document.createElement('div');
  root.id = ROOT_ID;
  root.innerHTML = `
    <button class="xg-launch" type="button" aria-label="打开星露谷手机" aria-expanded="false">🌱</button>
    <section class="xg-panel" aria-label="星露谷手机" hidden>
      <header class="xg-header"><strong>星露谷手机</strong><button class="xg-close" type="button" aria-label="关闭手机">×</button></header>
      <main class="xg-home"><p>欢迎来到星露谷 ✨</p><p class="xg-note">独立扩展框架已就绪。农场、聊天和存档功能正在分阶段开发。</p></main>
    </section>`;
  document.body.append(root);
  const launch = root.querySelector('.xg-launch');
  const panel = root.querySelector('.xg-panel');
  const toggle = (open) => { panel.hidden = !open; launch.setAttribute('aria-expanded', String(open)); };
  launch.addEventListener('click', () => toggle(panel.hidden));
  root.querySelector('.xg-close').addEventListener('click', () => toggle(false));
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount, { once: true });
else mount();

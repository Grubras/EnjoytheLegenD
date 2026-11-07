// ==UserScript==
// @name         EnjoytheLegenD · Painel no Dashboard
// @namespace    https://github.com/EnjoytheLegenD
// @version      1.0.0
// @description  Injeta um painel compacto de agentes/skills/conhecimento no github.com/dashboard
// @match        https://github.com/dashboard*
// @match        https://github.com/
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
  'use strict';
  if (document.getElementById('el-panel')) return;

  const MANIFEST = 'https://enjoythelegend.github.io/EnjoytheLegenD/data/manifest.json';

  const panel = document.createElement('section');
  panel.id = 'el-panel';
  panel.innerHTML = `
    <header>
      <strong>◈ Central</strong>
      <span id="el-status">carregando…</span>
      <button id="el-toggle" title="recolher">–</button>
    </header>
    <div id="el-body">
      <div class="el-kpis">
        <div><span>agentes</span><b id="el-agents">—</b></div>
        <div><span>skills</span><b id="el-skills">—</b></div>
        <div><span>conhecimento</span><b id="el-know">—</b></div>
        <div><span>tokens</span><b id="el-tokens">—</b></div>
      </div>
      <div class="el-links">
        <a href="https://enjoythelegend.github.io/EnjoytheLegenD/" target="_blank" rel="noopener">abrir painel</a>
        <a href="https://github.com/EnjoytheLegenD/opencode-brain" target="_blank" rel="noopener">cérebro</a>
        <a href="https://github.com/EnjoytheLegenD/ai-command-center" target="_blank" rel="noopener">central</a>
        <a href="http://127.0.0.1:28894" target="_blank" rel="noopener">opencode</a>
      </div>
    </div>`;

  const css = document.createElement('style');
  css.textContent = `
    #el-panel{position:fixed;right:18px;bottom:18px;width:270px;z-index:2147483000;
      background:#0b1026;color:#e8ecff;border:1px solid #232a4d;border-radius:14px;
      font:13px/1.45 "Segoe UI",system-ui,sans-serif;box-shadow:0 12px 40px rgba(0,0,0,.45)}
    #el-panel header{display:flex;align-items:center;gap:8px;padding:10px 12px;
      border-bottom:1px solid #232a4d}
    #el-panel header strong{font-size:12px;color:#35d6f0;letter-spacing:.4px}
    #el-panel #el-status{font-size:10px;color:#8b94c4;margin-left:auto}
    #el-panel #el-toggle{background:transparent;border:0;color:#8b94c4;cursor:pointer;font-size:15px}
    #el-body{padding:10px 12px}
    #el-panel.collapsed #el-body{display:none}
    .el-kpis{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px}
    .el-kpis div{background:#151a33;border:1px solid #232a4d;border-radius:10px;padding:7px 9px}
    .el-kpis span{display:block;font-size:10px;color:#8b94c4}
    .el-kpis b{font-size:15px}
    .el-links{display:flex;flex-wrap:wrap;gap:6px}
    .el-links a{font-size:11px;color:#35d6f0;text-decoration:none;
      border:1px solid #232a4d;border-radius:999px;padding:3px 9px}
    .el-links a:hover{background:#151a33}
  `;

  document.head.appendChild(css);
  document.body.appendChild(panel);

  const toggle = document.getElementById('el-toggle');
  if (localStorage.getItem('el-panel-collapsed') === '1') panel.classList.add('collapsed');
  toggle.addEventListener('click', () => {
    panel.classList.toggle('collapsed');
    localStorage.setItem('el-panel-collapsed', panel.classList.contains('collapsed') ? '1' : '0');
  });

  fetch(MANIFEST, { cache: 'no-store' })
    .then(r => r.json())
    .then(d => {
      document.getElementById('el-agents').textContent = d.counts?.agents ?? '—';
      document.getElementById('el-skills').textContent = d.counts?.skills ?? '—';
      document.getElementById('el-know').textContent = d.counts?.knowledge ?? '—';
      const u = d.usage || {};
      document.getElementById('el-tokens').textContent = (u.tokensIn || 0) + (u.tokensOut || 0);
      document.getElementById('el-status').textContent = 'ok';
    })
    .catch(() => { document.getElementById('el-status').textContent = 'offline'; });
})();

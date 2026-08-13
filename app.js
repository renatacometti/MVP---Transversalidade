window.renderPinkRailIcons = function() {
  const railContainer = document.getElementById('rail-top-icons');
  if (!railContainer) return;

  railContainer.innerHTML = `
    <!-- Icon 1: Arch Portal (Governança / Clique para ir para Transversalidades) -->
    <button class="rail-btn" title="Governança" id="rail-btn-home" onclick="openHomeScenarioView(event)">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 21h18M5 21V7l7-4 7 4v14"/>
        <circle cx="12" cy="12" r="2.5"/>
        <path d="M12 9.5v5"/>
      </svg>
    </button>

    <!-- Icon 2: Drafting Compass (ACTIVE - Modelo de Plano) -->
    <button class="rail-btn active" title="Modelos de Plano" id="rail-btn-plano" onclick="openPlanoView(event)">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="5" r="2"/>
        <path d="M12 7l-6 14"/>
        <path d="M12 7l6 14"/>
        <path d="M8 15a8 8 0 0 0 8 0"/>
      </svg>
    </button>

    <!-- Icon 3: Skyscraper / Building -->
    <button class="rail-btn" title="Escritórios e Unidades">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="1"/>
        <path d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"/>
      </svg>
    </button>

    <!-- Icon 4: Lock -->
    <button class="rail-btn" title="Segurança">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2"/>
        <path d="M8 11V7a4 4 0 0 1 8 0v4"/>
      </svg>
    </button>

    <!-- Icon 5: Users -->
    <button class="rail-btn" title="Equipes">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    </button>
  `;
};

window.renderBlueRailIcons = function() {
  const railContainer = document.getElementById('rail-top-icons');
  if (!railContainer) return;

  railContainer.innerHTML = `
    <!-- Icon 1: House (Clique para voltar para o tema rosa) -->
    <button class="rail-btn" title="Início" id="rail-btn-home" data-tooltip="Início" onclick="openPlanoView(event)">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    </button>

    <!-- Icon 2: Hammer (Voltar para Modelo de Plano) -->
    <button class="rail-btn" title="Modelos de Plano" id="rail-btn-plano" data-tooltip="Modelos de Plano" onclick="openPlanoView(event)">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    </button>

    <!-- Icon 3: Briefcase -->
    <button class="rail-btn" title="Projetos" data-tooltip="Projetos">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    </button>

    <!-- Icon 4: Search -->
    <button class="rail-btn" title="Busca" data-tooltip="Busca">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </button>
  `;

  // Render single Crossed Arrows icon for Visões Transversais
  const btn = document.createElement('button');
  btn.className = 'rail-btn dynamic-transversal-btn active';
  btn.title = 'Visões Transversais';
  btn.setAttribute('data-tooltip', 'Visões Transversais');
  btn.onclick = function(e) {
    document.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    openHomeScenarioView(e);
  };
  btn.innerHTML = `
    <svg class="programa-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 3h5v5"/>
      <path d="M4 20h2c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.8-1.1 2-1.7 3.3-1.7H21"/>
      <path d="M21 16v5h-5"/>
      <path d="M4 4h2c1.3 0 2.5.6 3.3 1.7l6.1 8.6c.8 1.1 2 1.7 3.3 1.7H21"/>
    </svg>
  `;
  railContainer.appendChild(btn);
};

window.syncTransversalRailIcons = function() {
  const appContainer = document.querySelector('.app-container');
  if (appContainer && appContainer.classList.contains('blue-theme')) {
    renderBlueRailIcons();
  }
};

window.syncDominioOptions = function() {
  const dominioSelect = document.getElementById('dominio-select');
  const transversalidadeTab = document.getElementById('tab-transversalidade');
  if (!dominioSelect || !transversalidadeTab) return;

  const itemElements = transversalidadeTab.querySelectorAll('.estrutura-model-row .estrutura-model-left span');
  const values = [];
  itemElements.forEach(el => {
    const text = el.innerText.trim();
    if (text && !values.includes(text)) {
      values.push(text);
    }
  });

  if (values.length === 0) {
    values.push('Programa');
  }

  const currentVal = dominioSelect.value;
  dominioSelect.innerHTML = '';
  values.forEach(val => {
    const opt = document.createElement('option');
    opt.value = val;
    opt.innerText = val;
    if (val === currentVal || (!currentVal && val === 'Programa')) {
      opt.selected = true;
    }
    dominioSelect.appendChild(opt);
  });
};

window.renderEAPProjects = function() {
  const container = document.getElementById('eap-projetos-list');
  if (!container) return;

  const projects = [
    { name: 'Cais das Artes', warning: true, icon: 'play', ghost: true, bars: [30, 0, 70], idc: true, idp: true, money: true, clock: true, scope: true },
    { name: 'Centro Cultural Carmélia', warning: false, icon: 'play', ghost: true, bars: [50, 30, 20], idc: true, idp: true, money: true, clock: true, scope: true },
    { name: 'Coinvestimento da Cultura – Fundo a Fundo', warning: true, icon: 'A', ghost: true, bars: [10, 40, 50], idc: false, idp: false, money: true, clock: true, scope: true },
    { name: 'Editais Funcultura', warning: false, icon: 'play', ghost: true, bars: [10, 20, 50, 20], idc: false, idp: false, money: true, clock: true, scope: true },
    { name: 'Hub Criativo ES+', warning: true, icon: 'play', ghost: true, bars: [5, 80, 15], idc: true, idp: true, money: true, clock: true, scope: true },
    { name: 'Incentivo à Produção Cultural Capixaba', warning: false, icon: 'play', ghost: true, bars: [50, 40, 10], idc: true, idp: true, money: true, clock: true, scope: true },
    { name: 'Interiorização de sinal', warning: true, icon: 'play', ghost: true, bars: [70, 10, 10, 10], idc: true, idp: true, money: true, clock: true, scope: true },
    { name: 'Midiateca Capixaba', warning: false, icon: 'A', ghost: true, bars: [20, 60, 10, 10], idc: false, idp: false, money: true, clock: true, scope: true },
    { name: 'Modernização TVE e Rad ES', warning: false, icon: 'play', ghost: true, bars: [20, 60, 20], idc: true, idp: true, money: true, clock: true, scope: true },
    { name: 'Reforma do Teatro Carlos Gomes', warning: false, icon: 'check', ghost: true, bars: [100], idc: true, idp: true, money: true, clock: true, scope: true },
    { name: 'Sistema Estadual de Espaços Culturais', warning: false, icon: 'play', ghost: true, bars: [60, 30, 10], idc: true, idp: true, money: true, clock: true, scope: true },
    { name: 'TVE Revista', warning: true, icon: 'check', ghost: true, bars: [100], idc: true, idp: true, money: true, clock: true, scope: true },
    { name: 'Valorização das Culturas Populares', warning: false, icon: 'play', ghost: true, bars: [10, 80, 10], idc: true, idp: true, money: true, clock: true, scope: true }
  ];

  const colors = ['#36b39b', '#ef4444', '#0ea5e9', '#8b5cf6'];

  let html = '';
  projects.forEach(p => {
    let barsHtml = '';
    p.bars.forEach((w, i) => {
      barsHtml += `<div style="width: ${w}%; background: ${colors[i % colors.length]};"></div>`;
    });

    const warningIcon = p.warning ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2.5" style="margin-right: 4px;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>` : '';
    const nameColor = p.warning ? '#f59e0b' : '#64748b';
    
    let stateIcon = '';
    if (p.icon === 'play') {
      stateIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#36b39b" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>`;
    } else if (p.icon === 'check') {
      stateIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="#0ea5e9" stroke="#0ea5e9" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9" stroke="#fff" stroke-width="2.5"/></svg>`;
    } else if (p.icon === 'A') {
      stateIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#475569" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 7l-4 9h8z"/><path d="M9.5 13h5"/></svg>`;
    }

    html += `
      <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 16px; border-bottom: 1px solid #f1f5f9; padding-left: 64px; color: ${nameColor};">
        <div style="display: flex; align-items: center; gap: 8px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          ${warningIcon}${p.name}
        </div>
        <div style="display: flex; align-items: center; gap: 14px;">
          ${stateIcon}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" stroke-width="2"><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"/><path d="M5 21V9a7 7 0 0 1 14 0v12"/></svg>
          <div style="display: flex; height: 6px; width: 100px; border-radius: 3px; overflow: hidden; background: #e2e8f0;">
            ${barsHtml}
          </div>
          <span style="font-size: 10px; font-weight: 700; color: ${p.idc ? '#ef4444' : 'transparent'};">IDC</span>
          <span style="font-size: 10px; font-weight: 700; color: ${p.idp ? '#0ea5e9' : 'transparent'};">IDP</span>
          <span style="color: ${p.money ? '#36b39b' : 'transparent'}; font-weight: 700;">$</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${p.clock ? '#36b39b' : 'transparent'}" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="${p.scope ? '#36b39b' : 'transparent'}" stroke-width="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg>
        </div>
      </div>
    `;
  });
  
  container.innerHTML = html;
};

// Initialize EAP Projects list after a small delay to ensure DOM is ready
setTimeout(renderEAPProjects, 500);

window.switchVTTab = function(tabName) {
  // Reset all tabs
  document.querySelectorAll('.vt-tab').forEach(t => {
    t.style.color = '#64748b';
    t.style.fontWeight = '500';
    t.style.borderBottom = 'none';
    t.style.marginBottom = '0';
  });
  
  // Set active tab
  const activeTab = document.getElementById('tab-vt-' + tabName);
  if (activeTab) {
    activeTab.style.color = '#004b6e';
    activeTab.style.fontWeight = '700';
    activeTab.style.borderBottom = '3px solid #36b39b';
    activeTab.style.marginBottom = '-2px';
  }

  // Hide all contents
  document.querySelectorAll('.vt-content').forEach(c => {
    c.style.display = 'none';
  });

  // Show active content
  const activeContent = document.getElementById('vt-content-' + tabName);
  if (activeContent) {
    activeContent.style.display = 'block';
  }
};

window.openHomeScenarioView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vCenario) vCenario.classList.remove('hidden');

  // Activate Blue Theme Mode on app container and render blue rail icons
  const appContainer = document.querySelector('.app-container');
  if (appContainer) appContainer.classList.add('blue-theme');

  renderBlueRailIcons();

  // Update sub-sidebar header title to PE 2023-2026 and set pin icon on the right (Blue Menu Theme)
  const subTitle = document.querySelector('.sub-sidebar .sidebar-title');
  if (subTitle) subTitle.innerText = 'PE 2023-2026';

  const headerSvg = document.querySelector('.sub-sidebar .sidebar-header svg');
  if (headerSvg) {
    headerSvg.setAttribute('data-blue-icon', 'true');
    headerSvg.innerHTML = `
      <path d="M12 17v5"/>
      <path d="M9 4h6l-1 6h2.5l-4.5 7-4.5-7H10z"/>
    `;
  }

  const dropBox = document.querySelector('.sub-sidebar .sidebar-dropdown-box');
  if (dropBox) {
    dropBox.style.display = 'flex';
    dropBox.innerHTML = `
      <div class="sidebar-dropdown-left" style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 13px; font-weight: 500; color: #004b6e;">Visão Transversal</span>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2c3e50" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    `;
  }

  const treeSec = document.querySelector('.sub-sidebar .sidebar-tree-section');
  if (treeSec) treeSec.style.display = 'none';

  if (typeof showToast === 'function') showToast('Cenário Transversalidades exibido no Tema Azul!');
};

window.updateBreadcrumb = function(viewMode, activePillName) {
  const container = document.querySelector('.pink-breadcrumb');
  if (!container) return;

  const homeSvg = `
    <div style="display: flex; align-items: center; gap: 6px; padding-top: 4px;">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="cursor: pointer;" onclick="openPlanoView(event)" title="Início"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </div>
  `;

  const pill1 = `
    <div style="display: flex; flex-direction: column; gap: 2px;">
      <div style="background: #e2e8f0; color: #004b6e; padding: 4px 14px; border-radius: 12px; font-size: 12px; font-weight: 500;">Configurações do Escritório</div>
      <span style="font-size: 11px; color: #64748b; padding-left: 8px;">PMO-ES</span>
    </div>
  `;

  const chevron = `
    <div style="padding-top: 6px;">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </div>
  `;

  if (viewMode === 'list') {
    // Mode 1: Lista Principal 'MODELOS DE PLANO' (2 pílulas)
    container.innerHTML = `
      ${homeSvg}
      ${pill1}
      ${chevron}
      <div style="display: flex; flex-direction: column; gap: 2px;">
        <div style="background: #e2e8f0; color: #004b6e; padding: 4px 14px; border-radius: 12px; font-size: 12px; font-weight: 500;">Configuração</div>
      </div>
    `;
  } else if (viewMode === 'detail') {
    // Mode 2: Modelo de Plano (3 pílulas)
    container.innerHTML = `
      ${homeSvg}
      ${pill1}
      ${chevron}
      <div style="display: flex; flex-direction: column; gap: 2px;">
        <div style="background: #e2e8f0; color: #004b6e; padding: 4px 14px; border-radius: 12px; font-size: 12px; font-weight: 500;">Configuração</div>
        <span style="font-size: 11px; color: #64748b; padding-left: 8px;">Modelos de Plano</span>
      </div>
      ${chevron}
      <div style="display: flex; flex-direction: column; gap: 2px;">
        <div style="background: #e2e8f0; color: #004b6e; padding: 4px 14px; border-radius: 12px; font-size: 12px; font-weight: 500;">Modelo de Plano</div>
      </div>
    `;
  } else {
    // Mode 3: Subtelas como Portfólio, Programa, Projeto, Eixo (4 pílulas)
    const label = activePillName || 'Modelo de Pacote de Trabalho';
    container.innerHTML = `
      ${homeSvg}
      ${pill1}
      ${chevron}
      <div style="display: flex; flex-direction: column; gap: 2px;">
        <div style="background: #e2e8f0; color: #004b6e; padding: 4px 14px; border-radius: 12px; font-size: 12px; font-weight: 500;">Configuração</div>
        <span style="font-size: 11px; color: #64748b; padding-left: 8px;">Modelos de Plano</span>
      </div>
      ${chevron}
      <div style="display: flex; flex-direction: column; gap: 2px;">
        <div style="background: #e2e8f0; color: #004b6e; padding: 4px 14px; border-radius: 12px; font-size: 12px; font-weight: 500;">Modelo de Plano</div>
        <span style="font-size: 11px; color: #64748b; padding-left: 8px;">Modelo de Gestão PMO23-26</span>
      </div>
      ${chevron}
      <div style="display: flex; flex-direction: column; gap: 2px;">
        <div style="background: #e2e8f0; color: #004b6e; padding: 4px 14px; border-radius: 12px; font-size: 12px; font-weight: 500;">${label}</div>
      </div>
    `;
  }
};

window.openPortfolioView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));
  const itemPort = document.getElementById('tree-portfolio-toggle');
  if (itemPort) itemPort.classList.add('active-selected');

  updateBreadcrumb('subdetail', 'Modelo de Pacote de Trabalho');

  if (typeof showToast === 'function') showToast('Navegando para Propriedades do Portfólio (Organizador)');
};

window.openEixoView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vEixo) vEixo.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));

  updateBreadcrumb('subdetail', 'Eixo');

  if (typeof showToast === 'function') showToast('Navegando para Propriedades do Eixo (Organizador)');
};

window.openAreaTematicaView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));

  updateBreadcrumb('subdetail', 'Área Temática');

  if (typeof showToast === 'function') showToast('Navegando para Propriedades de Área Temática (Organizador)');
};

window.openProgramaView = function(e, customName) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vPrograma) vPrograma.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));
  const progItem = document.querySelector('.sidebar-tree-item.level-2');
  if (progItem) progItem.classList.add('active-selected');

  let selectedName = 'Programa';
  if (typeof customName === 'string' && customName.trim()) {
    selectedName = customName.trim();
  } else if (e && e.currentTarget) {
    const span = e.currentTarget.querySelector('.estrutura-model-left span');
    if (span && span.innerText.trim()) {
      selectedName = span.innerText.trim();
    }
  }

  if (vPrograma) {
    const titleEl = vPrograma.querySelector('.page-title');
    if (titleEl) titleEl.innerHTML = `${selectedName} <span style="font-size: 13px; font-weight: normal; color: #64748b;">(Programa)</span>`;
  }

  updateBreadcrumb('subdetail', 'Modelo de Pacote de Trabalho');

  const form = document.getElementById('programa-properties-form');
  if (form) {
    const inputs = form.querySelectorAll('.form-row-grid input[type="text"]');
    if (inputs.length >= 3) {
      inputs[0].value = selectedName;
      inputs[1].value = selectedName.toLowerCase().endsWith('s') ? selectedName : selectedName + 's';
      inputs[2].value = '1';
    }
  }

  // Diferenciar cards exibidos entre MENU AZUL e MENU ROSA
  const appContainer = document.querySelector('.app-container');
  const isBlueTheme = appContainer && appContainer.classList.contains('blue-theme');
  if (vPrograma) {
    const costCenterSec = document.getElementById('programa-centro-custo-section') || vPrograma.querySelector('.card-section:has(#cost-centers-list)');
    const riskSec = document.getElementById('gestao-risco-card');
    const processSec = document.getElementById('gestao-processo-card');

    if (isBlueTheme) {
      if (costCenterSec) costCenterSec.style.display = 'none';
      if (riskSec) riskSec.style.display = 'none';
      if (processSec) processSec.style.display = 'none';
    } else {
      if (costCenterSec) costCenterSec.style.display = 'block';
      if (riskSec) riskSec.style.display = 'block';
      if (processSec) processSec.style.display = 'block';
    }
  }

  if (typeof showToast === 'function') showToast('Navegando para Propriedades do Programa (Programa)');
};

window.openSubprogramaView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vPrograma) vPrograma.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));
  const subItem = document.getElementById('tree-item-subprograma');
  if (subItem) subItem.classList.add('active-selected');

  if (vPrograma) {
    const titleEl = vPrograma.querySelector('.page-title');
    if (titleEl) titleEl.innerHTML = 'Subprograma <span style="font-size: 13px; font-weight: normal; color: #64748b;">(Programa)</span>';
  }

  const form = document.getElementById('programa-properties-form');
  if (form) {
    const inputs = form.querySelectorAll('.form-row-grid input[type="text"]');
    if (inputs.length >= 3) {
      inputs[0].value = 'Subprograma';
      inputs[1].value = 'Subprogramas';
      inputs[2].value = '1.1';
    }
  }

  if (typeof showToast === 'function') showToast('Navegando para Propriedades do Subprograma (Programa)');
};

window.openNewProgramaView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vPrograma) vPrograma.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));

  const form = document.getElementById('programa-properties-form');
  if (form) {
    const inputs = form.querySelectorAll('.form-row-grid input[type="text"]');
    if (inputs.length >= 3) {
      inputs[0].value = '';
      inputs[0].placeholder = 'Informe o nome do modelo';
      inputs[1].value = '';
      inputs[1].placeholder = 'Informe o nome no plural';
      inputs[2].value = '';
      inputs[2].placeholder = 'Ex: 1';
    }
  }

  const tagsAddMenu = document.getElementById('tags-add-menu');
  if (tagsAddMenu) tagsAddMenu.style.display = 'none';

  const visaoAddMenu = document.getElementById('visao-add-menu');
  if (visaoAddMenu) visaoAddMenu.style.display = 'none';

  if (typeof showToast === 'function') showToast('Novo Programa: Preencha os campos para incluir e salvar.');
};

window.openNewPortfolioView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));

  const form = document.getElementById('portfolio-properties-form');
  if (form) {
    const inputs = form.querySelectorAll('.form-row-grid input[type="text"]');
    if (inputs.length >= 3) {
      inputs[0].value = '';
      inputs[0].placeholder = 'Informe o nome do modelo';
      inputs[1].value = '';
      inputs[1].placeholder = 'Informe o nome no plural';
      inputs[2].value = '';
      inputs[2].placeholder = 'Ex: 1';
    }
  }

  const estAddMenu = document.getElementById('estrutura-add-menu');
  if (estAddMenu) estAddMenu.style.display = 'none';

  const visaoAddMenu = document.getElementById('visao-add-menu');
  if (visaoAddMenu) visaoAddMenu.style.display = 'none';

  if (typeof showToast === 'function') showToast('Novo Portfólio: Preencha os campos para cadastrar.');
};

window.openNewProjetoView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vPlano) vPlano.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vProjeto) vProjeto.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));

  const form = document.getElementById('projeto-properties-form');
  if (form) {
    const inputs = form.querySelectorAll('.tags-form-row input[type="text"]');
    if (inputs.length >= 1) {
      inputs[0].value = '';
      inputs[0].placeholder = 'Informe o nome do modelo';
    }
  }

  const estAddMenu = document.getElementById('estrutura-add-menu');
  if (estAddMenu) estAddMenu.style.display = 'none';

  const visaoAddMenu = document.getElementById('visao-add-menu');
  if (visaoAddMenu) visaoAddMenu.style.display = 'none';

  if (typeof showToast === 'function') showToast('Novo Projeto: Preencha os campos para cadastrar.');
};

window.openProjetoView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vPlano) vPlano.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');
  if (vProjeto) vProjeto.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));
  const itemProj = document.getElementById('tree-item-projeto');
  if (itemProj) itemProj.classList.add('active-selected');

  updateBreadcrumb('subdetail', 'Projeto');

  if (typeof syncDominioOptions === 'function') syncDominioOptions();
  if (typeof showToast === 'function') showToast('Navegando para Propriedades do Projeto (Projeto)');
};

window.openPlanoView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');

  if (vPlanoList) vPlanoList.classList.remove('hidden');

  // Remove Blue Theme Mode and restore pink rail icons
  const appContainer = document.querySelector('.app-container');
  if (appContainer) appContainer.classList.remove('blue-theme');

  renderPinkRailIcons();

  // Restore sub-sidebar elements
  const subTitle = document.querySelector('.sub-sidebar .sidebar-title');
  if (subTitle) subTitle.innerText = 'Modelos de Plano';

  const headerSvg = document.querySelector('.sub-sidebar .sidebar-header svg');
  if (headerSvg && headerSvg.getAttribute('data-blue-icon')) {
    headerSvg.removeAttribute('data-blue-icon');
    headerSvg.innerHTML = `
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 7v5l3 2"/>
    `;
  }

  const dropBox = document.querySelector('.sub-sidebar .sidebar-dropdown-box');
  if (dropBox) {
    dropBox.style.display = 'flex';
    dropBox.innerHTML = `
      <div class="sidebar-dropdown-left">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7l-6 14"/>
          <path d="M12 7l6 14"/>
          <path d="M8 15a8 8 0 0 0 8 0"/>
        </svg>
        <span>Modelo de Gestão PMO23-26</span>
      </div>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#2c3e50" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
    `;
  }

  const treeSec = document.querySelector('.sub-sidebar .sidebar-tree-section');
  if (treeSec) treeSec.style.display = 'block';

  document.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active'));
  const railPlano = document.getElementById('rail-btn-plano');
  if (railPlano) railPlano.classList.add('active');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));
  const itemPort = document.getElementById('tree-portfolio-toggle');
  if (itemPort) itemPort.classList.add('active-selected');

  updateBreadcrumb('list');

  if (typeof showToast === 'function') showToast('Navegando para Modelos de Plano');
};

window.openModelosEstruturaisView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.add('hidden');

  if (vPlano) vPlano.classList.remove('hidden');

  const appContainer = document.querySelector('.app-container');
  if (appContainer) appContainer.classList.remove('blue-theme');

  renderPinkRailIcons();

  // Restore sub-sidebar elements
  const subTitle = document.querySelector('.sub-sidebar .sidebar-title');
  if (subTitle) subTitle.innerText = 'Modelos de Plano';

  const dropBox = document.querySelector('.sub-sidebar .sidebar-dropdown-box');
  if (dropBox) dropBox.style.display = 'flex';

  const treeSec = document.querySelector('.sub-sidebar .sidebar-tree-section');
  if (treeSec) treeSec.style.display = 'block';

  updateBreadcrumb('detail');

  if (typeof showToast === 'function') showToast('Abrindo Modelos Estruturais (Propriedades, Estrutura, Centro de Custo, Relatórios)');
};

window.openVisoesTransversaisView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlanoList = document.getElementById('view-modelo-de-plano-list');
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');
  const vVisoes = document.getElementById('view-visoes-transversais');

  if (vPlanoList) vPlanoList.classList.add('hidden');
  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vVisoes) vVisoes.classList.remove('hidden');

  // Maintain Pink Theme Mode (remove blue-theme)
  const appContainer = document.querySelector('.app-container');
  if (appContainer) appContainer.classList.remove('blue-theme');

  renderPinkRailIcons();

  // Restore sub-sidebar elements with Pink theme header
  const subTitle = document.querySelector('.sub-sidebar .sidebar-title');
  if (subTitle) subTitle.innerText = 'Modelos de Plano';

  const dropBox = document.querySelector('.sub-sidebar .sidebar-dropdown-box');
  if (dropBox) dropBox.style.display = 'flex';

  const treeSec = document.querySelector('.sub-sidebar .sidebar-tree-section');
  if (treeSec) treeSec.style.display = 'block';

  updateBreadcrumb('subdetail', 'Modelo de Pacote de Trabalho');

  if (typeof showToast === 'function') showToast('Abrindo Visões Transversais');
};

document.addEventListener('DOMContentLoaded', () => {
  if (typeof syncDominioOptions === 'function') syncDominioOptions();
  if (typeof syncTransversalRailIcons === 'function') syncTransversalRailIcons();

  // Tab Switching Lógica Isolada para o Modelo de Plano
  const mainView = document.getElementById('view-modelo-de-plano');
  if (mainView) {
    const tabBtns = mainView.querySelectorAll('.tab-btn');
    const tabPanels = mainView.querySelectorAll('.tab-content-panel');

    tabBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const currentBtn = e.target.closest('.tab-btn');
        if (!currentBtn) return;

        const targetTab = currentBtn.getAttribute('data-tab');

        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));

        currentBtn.classList.add('active');
        const activePanel = document.getElementById(`tab-${targetTab}`);
        if (activePanel) {
          activePanel.classList.add('active');
        }
      });
    });
  }

  // Multiselect Dropdown (Escritórios) Lógica Interativa
  const msContainer = document.getElementById('multiselect-escritorios');
  const msTrigger = document.getElementById('multiselect-trigger');
  const msSearch = document.getElementById('multiselect-search');
  const msClose = document.getElementById('multiselect-close');
  const msOptions = document.querySelectorAll('.multiselect-option');
  const chipsContainer = document.getElementById('selected-chips');

  if (msContainer && msTrigger) {
    // Open/Close Dropdown
    msTrigger.addEventListener('click', (e) => {
      if (e.target.classList.contains('chip-pill-remove')) return;
      msContainer.classList.toggle('open');
      if (msContainer.classList.contains('open') && msSearch) {
        msSearch.focus();
      }
    });

    if (msClose) {
      msClose.addEventListener('click', () => {
        msContainer.classList.remove('open');
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!msContainer.contains(e.target)) {
        msContainer.classList.remove('open');
      }
    });

    // Search Filtering
    if (msSearch) {
      msSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        msOptions.forEach(opt => {
          const val = opt.getAttribute('data-value').toLowerCase();
          if (val.includes(query)) {
            opt.style.display = 'flex';
          } else {
            opt.style.display = 'none';
          }
        });
      });
    }

    // Toggle Option Selection
    msOptions.forEach(opt => {
      opt.addEventListener('click', () => {
        const val = opt.getAttribute('data-value');
        
        if (val === 'Todos') {
          const isSelected = opt.classList.contains('selected');
          msOptions.forEach(o => {
            if (isSelected) {
              o.classList.remove('selected');
            } else {
              o.classList.add('selected');
            }
          });
        } else {
          opt.classList.toggle('selected');
          
          const individualOpts = Array.from(msOptions).filter(o => o.getAttribute('data-value') !== 'Todos');
          const allSelected = individualOpts.every(o => o.classList.contains('selected'));
          const todosOpt = document.querySelector('.multiselect-option[data-value="Todos"]');
          if (todosOpt) {
            if (allSelected) {
              todosOpt.classList.add('selected');
            } else {
              todosOpt.classList.remove('selected');
            }
          }
        }
        updateSelectedChips();
      });
    });

    // Update Chip Pills Display
    function updateSelectedChips() {
      if (!chipsContainer) return;
      chipsContainer.innerHTML = '';
      const selectedOpts = Array.from(msOptions).filter(o => o.classList.contains('selected'));
      const todosOpt = selectedOpts.find(o => o.getAttribute('data-value') === 'Todos');
      
      if (todosOpt) {
        const chip = document.createElement('span');
        chip.className = 'chip-pill';
        chip.setAttribute('data-value', 'Todos');
        chip.innerHTML = `Todos <span class="chip-pill-remove" title="Remover">&times;</span>`;
        chipsContainer.appendChild(chip);
      } else {
        selectedOpts.forEach(opt => {
          const val = opt.getAttribute('data-value');
          const chip = document.createElement('span');
          chip.className = 'chip-pill';
          chip.setAttribute('data-value', val);
          chip.innerHTML = `${val} <span class="chip-pill-remove" title="Remover">&times;</span>`;
          chipsContainer.appendChild(chip);
        });
      }
    }

    // Remove Chip Pill Click Event
    if (chipsContainer) {
      chipsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('chip-pill-remove')) {
          e.stopPropagation();
          const chip = e.target.closest('.chip-pill');
          if (chip) {
            const val = chip.getAttribute('data-value');
            if (val === 'Todos') {
              msOptions.forEach(o => o.classList.remove('selected'));
            } else {
              const matchingOpt = document.querySelector(`.multiselect-option[data-value="${val}"]`);
              if (matchingOpt) matchingOpt.classList.remove('selected');
              const todosOpt = document.querySelector('.multiselect-option[data-value="Todos"]');
              if (todosOpt) todosOpt.classList.remove('selected');
            }
            updateSelectedChips();
          }
        }
      });
    }
  }

  // Toast Notification System
  window.showToast = function(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast-notification';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>${message}</span>
    `;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  };

  // Estrutura (+) Add Box Menu Toggle
  const estAddTrigger = document.getElementById('estrutura-add-box-trigger');
  const estAddMenu = document.getElementById('estrutura-add-menu');
  if (estAddTrigger && estAddMenu) {
    estAddMenu.style.display = 'block';
    estAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      estAddMenu.style.display = (estAddMenu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!estAddTrigger.contains(e.target) && !estAddMenu.contains(e.target)) {
        estAddMenu.style.display = 'none';
      }
    });
  }

  // Tags (+) Add Box Menu Toggle em Centro de Custo
  const tagsAddTrigger = document.getElementById('tags-add-box-trigger');
  const tagsAddMenu = document.getElementById('tags-add-menu');
  if (tagsAddTrigger && tagsAddMenu) {
    tagsAddMenu.style.display = 'block';
    tagsAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      tagsAddMenu.style.display = (tagsAddMenu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!tagsAddTrigger.contains(e.target) && !tagsAddMenu.contains(e.target)) {
        tagsAddMenu.style.display = 'none';
      }
    });
  }

  // Visões Transversais Card (+) Add Box Menu Toggle em Modelos Estruturais
  const vtCardAddTrigger = document.getElementById('visoes-transversais-add-box-trigger');
  const vtCardAddMenu = document.getElementById('visoes-transversais-add-menu');
  if (vtCardAddTrigger && vtCardAddMenu) {
    vtCardAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      vtCardAddMenu.style.display = (vtCardAddMenu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!vtCardAddTrigger.contains(e.target) && !vtCardAddMenu.contains(e.target)) {
        vtCardAddMenu.style.display = 'none';
      }
    });
  }


  // Visão (+) Add Box Menu Toggle na secao VISÕES
  const visaoAddTrigger = document.getElementById('visao-add-box-trigger');
  const visaoAddMenu = document.getElementById('visao-add-menu');
  if (visaoAddTrigger && visaoAddMenu) {
    visaoAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      visaoAddMenu.style.display = (visaoAddMenu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!visaoAddTrigger.contains(e.target) && !visaoAddMenu.contains(e.target)) {
        visaoAddMenu.style.display = 'none';
      }
    });
  }

  // Modelos (+) Add Box Menu Toggle na secao MODELOS (Programa)
  const modelosAddTrigger = document.getElementById('modelos-add-box-trigger');
  const modelosAddMenu = document.getElementById('modelos-add-menu');
  if (modelosAddTrigger && modelosAddMenu) {
    modelosAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      modelosAddMenu.style.display = (modelosAddMenu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!modelosAddTrigger.contains(e.target) && !modelosAddMenu.contains(e.target)) {
        modelosAddMenu.style.display = 'none';
      }
    });
  }

  // Vínculos (+) Add Box Menu Toggle na secao VÍNCULOS (Programa)
  const vinculosAddTrigger = document.getElementById('vinculos-add-box-trigger');
  const vinculosAddMenu = document.getElementById('vinculos-add-menu');
  const vinculosTreePopup = document.getElementById('vinculos-tree-popup');
  if (vinculosAddTrigger) {
    vinculosAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleVinculosTreePopup();
    });
    document.addEventListener('click', (e) => {
      if (vinculosAddTrigger && vinculosTreePopup && !vinculosAddTrigger.contains(e.target) && !vinculosTreePopup.contains(e.target)) {
        vinculosTreePopup.style.display = 'none';
      }
    });
  }

window.toggleVinculosTreePopup = function(show) {
  const popup = document.getElementById('vinculos-tree-popup');
  const menu = document.getElementById('vinculos-add-menu');
  if (menu) menu.style.display = 'none';
  if (popup) {
    if (typeof show === 'boolean') {
      popup.style.display = show ? 'block' : 'none';
    } else {
      popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    }
  }
};

window.selectProjetoVinculo = function(element, name) {
  document.querySelectorAll('#vinculos-tree-popup .selectable-projeto').forEach(el => {
    el.style.background = 'none';
    el.style.color = '#475569';
    el.style.fontWeight = 'normal';
  });
  if (element) {
    element.style.background = '#e0f2fe';
    element.style.color = '#0369a1';
    element.style.fontWeight = '600';
  }

  // Append new item to vinculos-models-list if not present
  const vinculosList = document.getElementById('vinculos-models-list');
  if (vinculosList) {
    const existing = vinculosList.querySelector('.vinculo-added-row');
    if (!existing) {
      const row = document.createElement('div');
      row.className = 'estrutura-model-row vinculo-added-row';
      row.style.marginBottom = '12px';
      row.style.cursor = 'pointer';
      row.innerHTML = `
        <div class="estrutura-model-left">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
          <span>Projeto</span>
        </div>
        <div class="estrutura-model-right">
          <button type="button" class="cost-center-kebab-btn" title="Mais opções" onclick="showToast('Opções do Projeto 119')">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
          </button>
          <span class="cost-center-id-code">119</span>
        </div>
      `;
      vinculosList.appendChild(row);
    }
  }

  setTimeout(() => {
    toggleVinculosTreePopup(false);
  }, 250);

  if (typeof showToast === 'function') showToast('Vínculo efetivado com sucesso');
};

  // Modelos (+) Add Box Menu Toggle na secao MODELOS (Portfólio)
  const portModelosAddTrigger = document.getElementById('portfolio-modelos-add-box-trigger');
  const portModelosAddMenu = document.getElementById('portfolio-modelos-add-menu');
  const portNovoTrigger = document.getElementById('portfolio-novo-trigger');
  const portNovoSubMenu = document.getElementById('portfolio-novo-sub-menu');

  if (portModelosAddTrigger && portModelosAddMenu) {
    portModelosAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isVisible = (portModelosAddMenu.style.display === 'block');
      portModelosAddMenu.style.display = isVisible ? 'none' : 'block';
      if (isVisible && portNovoSubMenu) {
        portNovoSubMenu.style.display = 'none';
      }
    });

    if (portNovoTrigger && portNovoSubMenu) {
      portNovoTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        portNovoSubMenu.style.display = (portNovoSubMenu.style.display === 'block') ? 'none' : 'block';
      });
    }

    document.addEventListener('click', (e) => {
      if (!portModelosAddTrigger.contains(e.target) && !portModelosAddMenu.contains(e.target)) {
        portModelosAddMenu.style.display = 'none';
        if (portNovoSubMenu) portNovoSubMenu.style.display = 'none';
      }
    });
  }

  // Modelos (+) Add Box Menu Toggle na secao MODELOS (Eixo)
  const eixoModelosAddTrigger = document.getElementById('eixo-modelos-add-box-trigger');
  const eixoModelosAddMenu = document.getElementById('eixo-modelos-add-menu');
  if (eixoModelosAddTrigger && eixoModelosAddMenu) {
    eixoModelosAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      eixoModelosAddMenu.style.display = (eixoModelosAddMenu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!eixoModelosAddTrigger.contains(e.target) && !eixoModelosAddMenu.contains(e.target)) {
        eixoModelosAddMenu.style.display = 'none';
      }
    });
  }

  // Modelos (+) Add Box Menu Toggle na secao MODELOS (Área Temática)
  const areaModelosAddTrigger = document.getElementById('area-tematica-modelos-add-box-trigger');
  const areaModelosAddMenu = document.getElementById('area-tematica-modelos-add-menu');
  if (areaModelosAddTrigger && areaModelosAddMenu) {
    areaModelosAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      areaModelosAddMenu.style.display = (areaModelosAddMenu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!areaModelosAddTrigger.contains(e.target) && !areaModelosAddMenu.contains(e.target)) {
        areaModelosAddMenu.style.display = 'none';
      }
    });
  }

  // Sidebar Portfólio Tree Toggle
  const treePortfolioToggle = document.getElementById('tree-portfolio-toggle');
  const treePortfolioBranch = document.getElementById('tree-portfolio-branch');
  if (treePortfolioToggle && treePortfolioBranch) {
    treePortfolioToggle.addEventListener('click', () => {
      const isExpanded = treePortfolioBranch.style.display !== 'none';
      treePortfolioBranch.style.display = isExpanded ? 'none' : 'flex';
      const chevron = treePortfolioToggle.querySelector('.chevron-icon');
      if (chevron) {
        chevron.innerHTML = isExpanded ? '<polyline points="9 18 15 12 9 6"/>' : '<polyline points="6 9 12 15 18 9"/>';
      }
    });
  }

  // Property Type Dropdown Menu Toggle (Adicionar propriedade +)
  const addPropTrigger = document.getElementById('btn-add-property-trigger');
  const addPropMenu = document.getElementById('add-property-menu');

  if (addPropTrigger && addPropMenu) {
    addPropTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      addPropMenu.style.display = (addPropMenu.style.display === 'block') ? 'none' : 'block';
    });

    document.addEventListener('click', (e) => {
      if (!addPropTrigger.contains(e.target) && !addPropMenu.contains(e.target)) {
        addPropMenu.style.display = 'none';
      }
    });
  }

  window.selectPropertyType = function(typeName) {
    if (addPropMenu) addPropMenu.style.display = 'none';
    showToast(`Propriedade "${typeName}" adicionada.`);
  };

  window.addModelToEstruturaList = function(name, iconSvg, clickFn) {
    const container = document.getElementById('estrutura-models-list');
    if (!container) return;

    const randomCode = Math.floor(106 + Math.random() * 900);
    const row = document.createElement('div');
    row.className = 'estrutura-model-row';
    row.style.cursor = 'pointer';
    row.style.marginBottom = '8px';
    row.title = `Abrir ${name}`;
    if (clickFn) row.onclick = clickFn;
    
    row.innerHTML = `
      <div class="estrutura-model-left">
        ${iconSvg}
        <span>${name}</span>
      </div>
      <div class="estrutura-model-right">
        <button class="cost-center-kebab-btn" title="Mais opções" onclick="showToast('Opções do ${name} ${randomCode}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
        </button>
        <span class="cost-center-id-code">${randomCode}</span>
      </div>
    `;

    container.appendChild(row);

    // Update Estrutura tab badge count
    const badge = document.querySelector('.tab-btn[data-tab="tab-estrutura"] .tab-badge');
    if (badge) {
      const currentCount = parseInt(badge.innerText, 10) || 0;
      badge.innerText = currentCount + 1;
    }
  };

  // Form submit handlers
  const propForm = document.getElementById('properties-form');
  if (propForm) {
    propForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Alterações salvas com sucesso!');
    });
  }

  const portPropForm = document.getElementById('portfolio-properties-form');
  if (portPropForm) {
    portPropForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = portPropForm.querySelector('input[type="text"]');
      const name = (input && input.value.trim()) ? input.value.trim() : 'Portfólio';
      const iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`;
      addModelToEstruturaList(name, iconSvg, openPortfolioView);
      showToast(`Modelo '${name}' cadastrado com sucesso na Estrutura!`);
      openPlanoView();
      const tabBtn = document.querySelector('.tab-btn[data-tab="tab-estrutura"]');
      if (tabBtn) tabBtn.click();
    });
  }

  const projPropForm = document.getElementById('projeto-properties-form');
  if (projPropForm) {
    projPropForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = projPropForm.querySelector('input[type="text"]');
      const name = (input && input.value.trim()) ? input.value.trim() : 'Projeto';
      const iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;
      addModelToEstruturaList(name, iconSvg, openProjetoView);
      showToast(`Modelo '${name}' cadastrado com sucesso na Estrutura!`);
      openPlanoView();
      const tabBtn = document.querySelector('.tab-btn[data-tab="tab-estrutura"]');
      if (tabBtn) tabBtn.click();
    });
  }

window.addProgramaToVisoesTransversais = function(name, iconSvg) {
  const targetContainers = [
    document.querySelector('#visoes-transversais-models-list'),
    document.querySelector('#view-visoes-transversais #transversalidade-programas-list'),
    document.querySelector('#view-visoes-transversais .card-body > div'),
    document.querySelector('#view-cenario-transversalidades #transversalidade-programas-list')
  ];

  const randomId = Math.floor(106 + Math.random() * 900);

  targetContainers.forEach(container => {
    if (!container) return;
    const row = document.createElement('div');
    row.className = 'estrutura-model-row';
    row.style.background = '#fff';
    row.style.border = '1px solid #e2e8f0';
    row.style.borderRadius = '6px';
    row.style.padding = '12px 16px';
    row.style.display = 'flex';
    row.style.alignItems = 'center';
    row.style.justifyContent = 'space-between';
    row.style.marginBottom = '10px';
    row.style.cursor = 'pointer';
    row.title = `Abrir ${name}`;
    row.onclick = function(e) { openProgramaView(e, name); };

    row.innerHTML = `
      <div class="estrutura-model-left" style="display: flex; align-items: center; gap: 12px;">
        ${iconSvg}
        <span style="font-size: 14px; font-weight: 500; color: #475569;">${name}</span>
      </div>
      <div class="estrutura-model-right" style="display: flex; align-items: center; gap: 12px;">
        <button class="cost-center-kebab-btn" title="Mais opções" onclick="event.stopPropagation(); showToast('Opções do ${name} ${randomId}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
        </button>
        <span class="cost-center-id-code" style="font-size: 11px; color: #94a3b8;">${randomId}</span>
      </div>
    `;
    container.appendChild(row);
  });

  if (typeof syncTransversalRailIcons === 'function') syncTransversalRailIcons();
};

  const programaForm = document.getElementById('programa-properties-form');
  if (programaForm) {
    programaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const inputs = programaForm.querySelectorAll('.form-row-grid input[type="text"]');
      let progName = (inputs.length > 0 && inputs[0].value.trim()) ? inputs[0].value.trim() : 'Novo Programa';
      const iconSvg = window.selectedIconObj ? window.selectedIconObj.svg : `<svg class="programa-icon-svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#004b6e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M4 20h2c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.8-1.1 2-1.7 3.3-1.7H21"/><path d="M21 16v5h-5"/><path d="M4 4h2c1.3 0 2.5.6 3.3 1.7l6.1 8.6c.8 1.1 2 1.7 3.3 1.7H21"/></svg>`;

      addProgramaToVisoesTransversais(progName, iconSvg);

      if (typeof syncDominioOptions === 'function') syncDominioOptions();
      if (typeof syncTransversalRailIcons === 'function') syncTransversalRailIcons();

      showToast(`Programa '${progName}' cadastrado em Visões Transversais!`);
      openVisoesTransversaisView();
    });
  }
});

// ==========================================
// ICON PICKER & PROGRAMA ICON MANAGEMENT
// ==========================================

window.ICON_DATABASE = [
  {
    id: 'transversal',
    name: 'Setas Cruzadas (Transversal)',
    category: 'Programa',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#004b6e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5"/><path d="M4 20h2c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.8-1.1 2-1.7 3.3-1.7H21"/><path d="M21 16v5h-5"/><path d="M4 4h2c1.3 0 2.5.6 3.3 1.7l6.1 8.6c.8 1.1 2 1.7 3.3 1.7H21"/></svg>`
  },
  {
    id: 'engrenagem',
    name: 'Engrenagem / Configurações',
    category: 'Geral',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`
  },
  {
    id: 'maleta',
    name: 'Maleta / Portfólio',
    category: 'Portfólio',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`
  },
  {
    id: 'pasta',
    name: 'Pasta / Categoria',
    category: 'Geral',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`
  },
  {
    id: 'edificio',
    name: 'Edifício / Organização',
    category: 'Estrutura',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6.01"/><line x1="15" y1="6" x2="15" y2="6.01"/><line x1="9" y1="10" x2="9" y2="10.01"/><line x1="15" y1="10" x2="15" y2="10.01"/><line x1="9" y1="14" x2="9" y2="14.01"/><line x1="15" y1="14" x2="15" y2="14.01"/><path d="M10 22v-4h4v4"/></svg>`
  },
  {
    id: 'alvo',
    name: 'Alvo / Meta',
    category: 'Objetivos',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>`
  },
  {
    id: 'grafico',
    name: 'Gráfico / Desempenho',
    category: 'Métricas',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`
  },
  {
    id: 'camadas',
    name: 'Camadas / Níveis',
    category: 'Estrutura',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`
  },
  {
    id: 'livro',
    name: 'Documento / Registro',
    category: 'Geral',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`
  },
  {
    id: 'estrela',
    name: 'Estrela / Destaque',
    category: 'Geral',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`
  },
  {
    id: 'usuarios',
    name: 'Usuários / Equipe',
    category: 'Geral',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`
  },
  {
    id: 'check',
    name: 'Check / Validação',
    category: 'Geral',
    svg: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`
  }
];

window.activeModelContext = 'programa';
window.selectedIconObj = window.ICON_DATABASE[0]; // Setas Cruzadas default!

window.openIconPickerModal = function(context = 'programa') {
  window.activeModelContext = context;
  const modal = document.getElementById('icon-picker-modal');
  if (!modal) return;

  renderIconGallery();
  modal.classList.remove('hidden');
};

window.closeIconPickerModal = function() {
  const modal = document.getElementById('icon-picker-modal');
  if (modal) modal.classList.add('hidden');
};

window.renderIconGallery = function(searchTerm = '') {
  const grid = document.getElementById('icon-gallery-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const term = searchTerm.toLowerCase().trim();
  const filtered = window.ICON_DATABASE.filter(item => 
    item.name.toLowerCase().includes(term) || item.category.toLowerCase().includes(term)
  );

  filtered.forEach(iconItem => {
    const card = document.createElement('div');
    card.className = 'icon-gallery-item' + (window.selectedIconObj && window.selectedIconObj.id === iconItem.id ? ' selected' : '');
    card.onclick = function() {
      selectIconItem(iconItem);
    };
    card.ondblclick = function() {
      selectIconItem(iconItem);
      applySelectedIcon();
    };

    card.innerHTML = `
      <div class="icon-gallery-svg">${iconItem.svg}</div>
      <div class="icon-gallery-item-name">${iconItem.name}</div>
    `;
    grid.appendChild(card);
  });
};

window.filterIconGallery = function(val) {
  renderIconGallery(val);
};

window.selectIconItem = function(iconItem) {
  window.selectedIconObj = iconItem;
  renderIconGallery(document.getElementById('icon-search-input')?.value || '');
};

window.applySelectedIcon = function() {
  if (!window.selectedIconObj) return;

  const iconSvg = window.selectedIconObj.svg;
  const context = window.activeModelContext || 'programa';

  // Update target preview box
  const targetPreview = document.getElementById(`${context}-icon-preview`);
  if (targetPreview) {
    targetPreview.innerHTML = iconSvg;
  }

  // If context is programa, update all programa icon instances across UI
  if (context === 'programa') {
    window.updateAllProgramaIcons(iconSvg);
  }

  closeIconPickerModal();
  if (typeof showToast === 'function') showToast(`Ícone '${window.selectedIconObj.name}' setado com sucesso em Propriedades!`);
};

window.clearSelectedIcon = function(context = 'programa') {
  const targetPreview = document.getElementById(`${context}-icon-preview`);
  if (targetPreview) {
    targetPreview.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" stroke-width="2"><circle cx="12" cy="12" r="9"/><line x1="18" y1="6" x2="6" y2="18"/></svg>`;
  }
  if (typeof showToast === 'function') showToast(`Ícone limpo.`);
};

window.updateAllProgramaIcons = function(iconSvgHtml) {
  document.querySelectorAll('.programa-icon-svg').forEach(el => {
    const parent = el.parentElement;
    if (parent) {
      parent.innerHTML = iconSvgHtml;
    }
  });
};


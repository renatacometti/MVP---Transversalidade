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
    <!-- Icon 1: House -->
    <button class="rail-btn" title="Início" id="rail-btn-home" onclick="openHomeScenarioView(event)">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    </button>

    <!-- Icon 2: Hammer (Voltar para Modelo de Plano) -->
    <button class="rail-btn" title="Modelos de Plano" id="rail-btn-plano" onclick="openPlanoView(event)">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    </button>

    <!-- Icon 3: Briefcase -->
    <button class="rail-btn" title="Projetos">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    </button>

    <!-- Icon 4: Search -->
    <button class="rail-btn" title="Busca">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    </button>
  `;

  // Render dynamic book icons (1 initial + 1 for each extra item)
  const itemsList = document.getElementById('transversalidade-items-list');
  if (itemsList) {
    const spans = itemsList.querySelectorAll('.estrutura-model-left span');
    spans.forEach((s, index) => {
      const title = s.innerText.trim();
      if (!title) return;

      const btn = document.createElement('button');
      btn.className = 'rail-btn dynamic-transversal-btn' + (index === 0 ? ' active' : '');
      btn.title = `Transversalidade: ${title}`;
      btn.onclick = function(e) { openHomeScenarioView(e); };
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        </svg>
      `;
      railContainer.appendChild(btn);
    });
  }
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

  if (typeof syncTransversalRailIcons === 'function') syncTransversalRailIcons();
};

// Global helper functions for View Switching (disponíveis imediatamente para eventos inline)
window.openHomeScenarioView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.remove('hidden');

  // Activate Blue Theme Mode on app container and render blue rail icons
  const appContainer = document.querySelector('.app-container');
  if (appContainer) appContainer.classList.add('blue-theme');

  renderBlueRailIcons();

  // Update sub-sidebar header title and hide dropdown & tree for clean panel
  const subTitle = document.querySelector('.sub-sidebar .sidebar-title');
  if (subTitle) subTitle.innerText = 'Transversalidades';

  const dropBox = document.querySelector('.sub-sidebar .sidebar-dropdown-box');
  if (dropBox) dropBox.style.display = 'none';

  const treeSec = document.querySelector('.sub-sidebar .sidebar-tree-section');
  if (treeSec) treeSec.style.display = 'none';

  if (typeof showToast === 'function') showToast('Cenário Transversalidades exibido no Tema Azul!');
};

window.openPortfolioView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));
  const itemPort = document.getElementById('tree-portfolio-toggle');
  if (itemPort) itemPort.classList.add('active-selected');

  if (typeof showToast === 'function') showToast('Navegando para Propriedades do Portfólio (Organizador)');
};

window.openEixoView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vEixo) vEixo.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));

  if (typeof showToast === 'function') showToast('Navegando para Propriedades do Eixo (Organizador)');
};

window.openAreaTematicaView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));

  if (typeof showToast === 'function') showToast('Navegando para Propriedades de Área Temática (Organizador)');
};

window.openProgramaView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vPrograma) vPrograma.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));

  const form = document.getElementById('programa-properties-form');
  if (form) {
    const inputs = form.querySelectorAll('.form-row-grid input[type="text"]');
    if (inputs.length >= 3) {
      inputs[0].value = 'Programa';
      inputs[1].value = 'Programas';
      inputs[2].value = '1';
    }
  }

  if (typeof showToast === 'function') showToast('Navegando para Propriedades do Programa (Programa)');
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

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
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

  if (vPlano) vPlano.classList.add('hidden');
  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
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

  if (typeof showToast === 'function') showToast('Novo Portfólio: Preencha os campos para cadastrar.');
};

window.openNewProjetoView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');

  if (vPlano) vPlano.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
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

  if (typeof showToast === 'function') showToast('Novo Projeto: Preencha os campos para cadastrar.');
};

window.openProjetoView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');

  if (vPlano) vPlano.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vProjeto) vProjeto.classList.remove('hidden');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));
  const itemProj = document.getElementById('tree-item-projeto');
  if (itemProj) itemProj.classList.add('active-selected');

  if (typeof syncDominioOptions === 'function') syncDominioOptions();
  if (typeof showToast === 'function') showToast('Navegando para Propriedades do Projeto (Projeto)');
};

window.openPlanoView = function(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const vPlano = document.getElementById('view-modelo-de-plano');
  const vProjeto = document.getElementById('view-modelo-projeto');
  const vPrograma = document.getElementById('view-modelo-programa');
  const vPortfolio = document.getElementById('view-modelo-portfolio');
  const vEixo = document.getElementById('view-modelo-eixo');
  const vAreaTematica = document.getElementById('view-modelo-area-tematica');
  const vCenario = document.getElementById('view-cenario-transversalidades');

  if (vProjeto) vProjeto.classList.add('hidden');
  if (vPrograma) vPrograma.classList.add('hidden');
  if (vPortfolio) vPortfolio.classList.add('hidden');
  if (vEixo) vEixo.classList.add('hidden');
  if (vAreaTematica) vAreaTematica.classList.add('hidden');
  if (vCenario) vCenario.classList.add('hidden');
  if (vPlano) vPlano.classList.remove('hidden');

  // Remove Blue Theme Mode and restore pink rail icons
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

  document.querySelectorAll('.rail-btn').forEach(b => b.classList.remove('active'));
  const railPlano = document.getElementById('rail-btn-plano');
  if (railPlano) railPlano.classList.add('active');

  document.querySelectorAll('.sidebar-tree-item').forEach(i => i.classList.remove('active-selected'));
  const itemPort = document.getElementById('tree-portfolio-toggle');
  if (itemPort) itemPort.classList.add('active-selected');

  if (typeof showToast === 'function') showToast('Navegando para Modelo de Plano');
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
  if (vinculosAddTrigger && vinculosAddMenu) {
    vinculosAddTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      vinculosAddMenu.style.display = (vinculosAddMenu.style.display === 'block') ? 'none' : 'block';
    });
    document.addEventListener('click', (e) => {
      if (!vinculosAddTrigger.contains(e.target) && !vinculosAddMenu.contains(e.target)) {
        vinculosAddMenu.style.display = 'none';
      }
    });
  }

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

  const programaForm = document.getElementById('programa-properties-form');
  if (programaForm) {
    programaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const inputs = programaForm.querySelectorAll('.form-row-grid input[type="text"]');
      let progName = (inputs.length > 0 && inputs[0].value.trim()) ? inputs[0].value.trim() : 'Novo Programa';
      const iconSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`;

      addModelToEstruturaList(progName, iconSvg, openProgramaView);

      // Transversalidade items list sync
      const itemsList = document.getElementById('transversalidade-items-list');
      if (itemsList) {
        const existingSpans = itemsList.querySelectorAll('.estrutura-model-left span');
        let exists = false;
        existingSpans.forEach(s => {
          if (s.innerText.trim().toLowerCase() === progName.toLowerCase()) {
            exists = true;
          }
        });

        if (!exists) {
          const newId = Math.floor(106 + Math.random() * 900);
          const newRow = document.createElement('div');
          newRow.className = 'estrutura-model-row';
          newRow.style.cursor = 'pointer';
          newRow.title = `Abrir ${progName}`;
          newRow.onclick = function(ev) { openProgramaView(ev); };
          newRow.innerHTML = `
            <div class="estrutura-model-left">
              ${iconSvg}
              <span>${progName}</span>
            </div>
            <div class="estrutura-model-right">
              <button class="cost-center-kebab-btn" title="Mais opções" onclick="showToast('Opções do ${progName} ${newId}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
              </button>
              <span class="cost-center-id-code">${newId}</span>
            </div>
          `;
          itemsList.appendChild(newRow);
        }
      }

      if (typeof syncDominioOptions === 'function') syncDominioOptions();
      if (typeof syncTransversalRailIcons === 'function') syncTransversalRailIcons();

      showToast(`Modelo '${progName}' cadastrado com sucesso!`);
      openPlanoView();
      const tabBtn = document.querySelector('.tab-btn[data-tab="tab-estrutura"]');
      if (tabBtn) tabBtn.click();
    });
  }
});

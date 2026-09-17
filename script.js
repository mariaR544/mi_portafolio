// ==========================================================================
// PORTAFOLIO - Maria Rojas
// Lógica de Acordeón y Galería de Capturas por Proyecto (Vanilla JS)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Datos de las capturas de cada proyecto
  const projectGalleries = {
    'proyecto-1': [
      {
        src: 'assets/proyecto-1/screenshot-18.png',
        alt: 'Sistema de Asistencias - Login'
      },
      {
        src: 'assets/proyecto-1/screenshot-19.png',
        alt: 'Sistema de Asistencias - Panel Principal de Administración'
      },
      {
        src: 'assets/proyecto-1/screenshot-20.png',
        alt: 'Sistema de Asistencias - Módulo de Reconocimiento Facial'
      },
      {
        src: 'assets/proyecto-1/screenshot-21.png',
        alt: 'Sistema de Asistencias - Módulo de Reportes y Horas Extra'
      },
      {
        src: 'assets/proyecto-1/screenshot-22.png',
        alt: 'Sistema de Asistencias - Inicio de sesión y control de acceso'
      },
      {
        src: 'assets/proyecto-1/screenshot-23.png',
        alt: 'Sistema de Asistencias - Dashboard del monitor de asistencia'
      },
      {
        src: 'assets/proyecto-1/screenshot-24.png',
        alt: 'Sistema de Asistencias - Registro y gestión de empleados'
      },
      {
        src: 'assets/proyecto-1/screenshot-25.png',
        alt: 'Sistema de Asistencias - Administración de turnos'
      }
    ],
    'proyecto-2': [
      {
        src: 'assets/proyecto-2/screenshot-1.jpg',
        alt: 'Quantis - Pantalla de Bienvenida e Introducción'
      },
      {
        src: 'assets/proyecto-2/screenshot-2.jpg',
        alt: 'Quantis - Menú de Módulos (Probabilidades, Líneas de Espera, Monte Carlo)'
      },
      {
        src: 'assets/proyecto-2/screenshot-3.jpg',
        alt: 'Quantis - Distribución de Poisson: Cálculo Puntual P(X = x)'
      },
      {
        src: 'assets/proyecto-2/screenshot-4.jpg',
        alt: 'Quantis - Distribución de Poisson: Cálculo por Intervalo P(xi <= X < xj)'
      },
      {
        src: 'assets/proyecto-2/screenshot-5.jpg',
        alt: 'Quantis - Fórmulas Teóricas Principales y Estadísticos Descriptivos'
      },
      {
        src: 'assets/proyecto-2/screenshot-6.jpg',
        alt: 'Quantis - Módulo de Probabilidades: Vista general de Poisson'
      },
      {
        src: 'assets/proyecto-2/screenshot-7.jpg',
        alt: 'Quantis - Módulo de Probabilidades: Distribución de Poisson'
      },
      {
        src: 'assets/proyecto-2/screenshot-8.jpg',
        alt: 'Quantis - Módulo de Probabilidades: Probabilidad por rango'
      },
      {
        src: 'assets/proyecto-2/screenshot-9.jpg',
        alt: 'Quantis - Módulo de Probabilidades: Resultado puntual'
      },
      {
        src: 'assets/proyecto-2/screenshot-10.jpg',
        alt: 'Quantis - Módulo de Probabilidades: Desglose teórico y fórmulas'
      },
      {
        src: 'assets/proyecto-2/screenshot-11.jpg',
        alt: 'Quantis - Módulo de Probabilidades: Resultados y estadísticos'
      },
      {
        src: 'assets/proyecto-2/screenshot-12.jpg',
        alt: 'Quantis - Módulo de Líneas de Espera: M/M/1 sin límite en cola'
      },
      {
        src: 'assets/proyecto-2/screenshot-13.jpg',
        alt: 'Quantis - Módulo de Líneas de Espera: M/M/1 con límite en cola'
      },
      {
        src: 'assets/proyecto-2/screenshot-14.jpg',
        alt: 'Quantis - Módulo de Líneas de Espera: Fórmulas principales'
      },
      {
        src: 'assets/proyecto-2/screenshot-15.jpg',
        alt: 'Quantis - Módulo de Líneas de Espera: Métricas del sistema'
      },
      {
        src: 'assets/proyecto-2/screenshot-16.jpg',
        alt: 'Quantis - Módulo de Líneas de Espera: Gráfica de distribución'
      },
      {
        src: 'assets/proyecto-2/screenshot-17.jpg',
        alt: 'Quantis - Módulo de Líneas de Espera: Tabla de probabilidades'
      },
      {
        src: 'assets/proyecto-2/screenshot-18.jpg',
        alt: 'Quantis - Módulo de Líneas de Espera: Desglose teórico y fórmulas'
      },
      {
        src: 'assets/proyecto-2/screenshot-19.jpg',
        alt: 'Quantis - Módulo de Líneas de Espera: Interpretación del resultado'
      },
      {
        src: 'assets/proyecto-2/screenshot-20.jpg',
        alt: 'Quantis - Módulo de Multiservidor: M/M/c sin límite en cola'
      },
      {
        src: 'assets/proyecto-2/screenshot-21.jpg',
        alt: 'Quantis - Módulo de Multiservidor: Parámetros de entrada'
      },
      {
        src: 'assets/proyecto-2/screenshot-22.jpg',
        alt: 'Quantis - Módulo de Multiservidor: Métricas del sistema'
      },
      {
        src: 'assets/proyecto-2/screenshot-23.jpg',
        alt: 'Quantis - Módulo de Multiservidor: Estado de los servidores'
      },
      {
        src: 'assets/proyecto-2/screenshot-24.jpg',
        alt: 'Quantis - Módulo de Multiservidor: Fórmulas principales'
      },
      {
        src: 'assets/proyecto-2/screenshot-25.jpg',
        alt: 'Quantis - Módulo de Multiservidor: Gráfica de probabilidad'
      },
      {
        src: 'assets/proyecto-2/screenshot-26.jpg',
        alt: 'Quantis - Módulo de Multiservidor: Tabla de probabilidades'
      },
      {
        src: 'assets/proyecto-2/screenshot-27.jpg',
        alt: 'Quantis - Módulo de Multiservidor: Capacidad finita'
      },
      {
        src: 'assets/proyecto-2/screenshot-28.jpg',
        alt: 'Quantis - Módulo de Multiservidor: Resultado final'
      },
      {
        src: 'assets/proyecto-2/screenshot-29.jpg',
        alt: 'Quantis - Módulo de Simulación: Parámetros de la simulación'
      },
      {
        src: 'assets/proyecto-2/screenshot-30.jpg',
        alt: 'Quantis - Módulo de Simulación: Generación de variables'
      },
      {
        src: 'assets/proyecto-2/screenshot-31.jpg',
        alt: 'Quantis - Módulo de Simulación: Comparación muestral vs. teórico'
      },
      {
        src: 'assets/proyecto-2/screenshot-32.jpg',
        alt: 'Quantis - Módulo de Simulación: Base de datos generada'
      },
      {
        src: 'assets/proyecto-2/screenshot-33.jpg',
        alt: 'Quantis - Módulo de Simulación: Tabla de resultados'
      },
      {
        src: 'assets/proyecto-2/screenshot-34.jpg',
        alt: 'Quantis - Módulo de Simulación: Gráfica de comparación'
      },
      {
        src: 'assets/proyecto-2/screenshot-35.jpg',
        alt: 'Quantis - Módulo de Simulación: Resultado final'
      },
      {
        src: 'assets/proyecto-2/screenshot-36.jpg',
        alt: 'Quantis - Menú principal con módulos disponibles'
      },
      {
        src: 'assets/proyecto-2/screenshot-37.jpg',
        alt: 'Quantis - Pantalla final de bienvenida'
      }
    ]
  };

  // Estado del índice activo por proyecto
  const projectStates = {
    'proyecto-1': { currentIndex: 0 },
    'proyecto-2': { currentIndex: 0 }
  };

  /**
   * Genera dinámicamente los botones de miniatura para mantenerlos 100% sincronizados
   * @param {string} projectKey 
   */
  function renderThumbnails(projectKey) {
    const gallery = projectGalleries[projectKey];
    const container = document.getElementById(`miniaturas-${projectKey}`);
    if (!gallery || !container) return;

    container.innerHTML = '';
    gallery.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `miniatura-btn ${index === 0 ? 'is-active' : ''}`;
      btn.setAttribute('data-index', index);
      btn.setAttribute('aria-label', `Ver captura ${index + 1}`);

      const thumbImg = document.createElement('img');
      thumbImg.src = item.src;
      thumbImg.alt = `Miniatura ${index + 1}`;
      thumbImg.loading = 'lazy';

      btn.appendChild(thumbImg);
      btn.addEventListener('click', () => {
        projectStates[projectKey].currentIndex = index;
        updateProjectViewer(projectKey);
      });

      container.appendChild(btn);
    });
  }

  /**
   * Actualiza el visor activo (imagen principal, caption, contador y miniatura activa)
   * @param {string} projectKey Identificador del proyecto ('proyecto-1' | 'proyecto-2')
   */
  function updateProjectViewer(projectKey) {
    const gallery = projectGalleries[projectKey];
    const state = projectStates[projectKey];
    if (!gallery || !state) return;

    const item = gallery[state.currentIndex];
    const imgElem = document.getElementById(`img-visor-${projectKey}`);
    const contadorElem = document.getElementById(`contador-${projectKey}`);
    const captionElem = document.getElementById(`caption-${projectKey}`);
    const miniaturasWrap = document.getElementById(`miniaturas-${projectKey}`);

    if (imgElem) {
      imgElem.src = item.src;
      imgElem.alt = item.alt;
    }

    if (contadorElem) {
      contadorElem.textContent = `${state.currentIndex + 1} / ${gallery.length}`;
    }

    if (captionElem) {
      captionElem.textContent = item.alt;
    }

    if (miniaturasWrap) {
      const btns = miniaturasWrap.querySelectorAll('.miniatura-btn');
      btns.forEach((btn, idx) => {
        if (idx === state.currentIndex) {
          btn.classList.add('is-active');
          if (miniaturasWrap.scrollWidth > miniaturasWrap.clientWidth) {
            btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          }
        } else {
          btn.classList.remove('is-active');
        }
      });
    }
  }

  /**
   * Alterna la visibilidad del acordeón de la galería para un proyecto
   * @param {string} projectKey 
   * @param {HTMLElement} btn 
   */
  function toggleAccordion(projectKey, btn) {
    const accordion = document.getElementById(`galeria-${projectKey}`);
    if (!accordion) return;

    const isCurrentlyHidden = accordion.hasAttribute('hidden');
    const btnTexto = btn.querySelector('.btn-texto');

    if (isCurrentlyHidden) {
      accordion.removeAttribute('hidden');
      btn.setAttribute('aria-expanded', 'true');
      if (btnTexto) btnTexto.textContent = 'Ocultar capturas';
      updateProjectViewer(projectKey);
    } else {
      accordion.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
      if (btnTexto) btnTexto.textContent = 'Ver capturas';
    }
  }

  // Inicializar miniaturas dinámicas para ambos proyectos
  renderThumbnails('proyecto-1');
  renderThumbnails('proyecto-2');

  // Inicializar visor con la primera imagen y contador de ambos proyectos
  updateProjectViewer('proyecto-1');
  updateProjectViewer('proyecto-2');

  // 1. Manejo del botón de despliegue del acordeón
  const toggleButtons = document.querySelectorAll('.btn-toggle-galeria');
  toggleButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const projectKey = btn.getAttribute('data-project');
      toggleAccordion(projectKey, btn);
    });
  });

  // 2. Navegación Siguiente / Anterior en el visor
  document.querySelectorAll('.visor-nav').forEach((navBtn) => {
    navBtn.addEventListener('click', () => {
      const projectKey = navBtn.getAttribute('data-target');
      const gallery = projectGalleries[projectKey];
      const state = projectStates[projectKey];
      if (!gallery || !state) return;

      if (navBtn.classList.contains('visor-next')) {
        state.currentIndex = (state.currentIndex + 1) % gallery.length;
      } else if (navBtn.classList.contains('visor-prev')) {
        state.currentIndex = (state.currentIndex - 1 + gallery.length) % gallery.length;
      }

      updateProjectViewer(projectKey);
    });
  });
});

// ==========================================================================
// Modo Claro / Oscuro
// ==========================================================================
(function () {
  const root = document.documentElement;
  const STORAGE_KEY = 'portafolio-tema';

  /**
   * Aplica el tema dado ('dark' | 'light') al <html> y guarda la preferencia.
   * @param {'dark'|'light'} tema
   */
  function aplicarTema(tema) {
    if (tema === 'dark') {
      root.setAttribute('data-theme', 'dark');
    } else {
      root.removeAttribute('data-theme');
    }
    localStorage.setItem(STORAGE_KEY, tema);
  }

  // 1. Al cargar: respetar preferencia guardada, o la del sistema operativo
  const guardado = localStorage.getItem(STORAGE_KEY);
  if (guardado) {
    aplicarTema(guardado);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    aplicarTema('dark');
  }

  // 2. Escuchar cambios en la preferencia del SO (solo si el usuario no la fijó manualmente)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      aplicarTema(e.matches ? 'dark' : 'light');
    }
  });

  // 3. Click en el botón toggle
  document.addEventListener('DOMContentLoaded', () => {
    const btnTema = document.getElementById('btn-tema');
    if (!btnTema) return;

    btnTema.addEventListener('click', () => {
      const temaActual = root.getAttribute('data-theme');
      aplicarTema(temaActual === 'dark' ? 'light' : 'dark');
    });
  });
})();

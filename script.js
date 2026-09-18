// ==========================================================================
// PORTAFOLIO - Maria Rojas
// Lógica de Acordeón, Galería y Sistema de Idiomas (Vanilla JS)
// ==========================================================================

// Diccionario de Traducciones (ES / EN)
const translations = {
  es: {
    nav: {
      sobre_mi: 'Sobre mí',
      habilidades: 'Habilidades',
      proyectos: 'Proyectos',
      servicios: 'Servicios',
      contacto: 'Contacto'
    },
    hero: {
      badge: 'Disponible para nuevos proyectos',
      rol: 'Desarrolladora Full Stack <br> Web y Aplicaciones Móviles',
      frase: 'Desarrollo aplicaciones web y móviles completas, desde la interfaz hasta la base de datos.',
      btn_proyectos: 'Ver proyectos',
      btn_contacto: 'Contactar'
    },
    sobre_mi: {
      tag: 'Perfil',
      titulo: 'Sobre mí',
      texto: 'Soy desarrolladora full stack con experiencia en el desarrollo de páginas web y aplicaciones móviles. Actualmente curso el último trimestre de Ingeniería de Sistemas en la Universidad de Margarita (UNIMAR). Trabajo tanto en la lógica de backend como en la experiencia de frontend, cuidando que ambos lados de cada producto funcionen de forma sólida y coherente.'
    },
    habilidades: {
      tag: 'Conocimientos',
      titulo: 'Habilidades técnicas',
      movil: 'Desarrollo móvil',
      frontend: 'Frontend',
      backend: 'Backend',
      bd: 'Bases de datos',
      sub_sistemas: 'Sistemas de Bases de Datos:',
      sub_plataformas: 'Plataformas y Herramientas de Gestión:',
      formacion_titulo: 'Formación académica',
      formacion_estado: '<span class="dot-pulso-ambar"></span> En curso (último trimestre)',
      formacion_carrera: 'Ingeniería de Sistemas <br> Universidad de Margarita (UNIMAR)'
    },
    proyectos: {
      tag: 'Portafolio',
      titulo: 'Proyectos destacados',
      ver_capturas: 'Ver capturas',
      ocultar_capturas: 'Ocultar capturas'
    },
    p1: {
      badge: 'Web e Integración de Hardware',
      titulo: 'Sistema de Control de Asistencias con Reconocimiento Facial',
      descripcion: 'Plataforma web desarrollada para una institución educativa con el objetivo de sustituir el sistema de asistencia por huella dactilar por uno de reconocimiento facial, integrando el hardware y software de hikVision. Permite gestionar empleados, turnos, marcaciones, cálculo automático de horas extra y generación de reportes exportables en Excel.',
      rol: '<strong>Rol:</strong> Desarrollo full stack completo (base de datos, backend, integración con hardware, frontend). Desarrollado junto a una compañera.',
      btn_capturas: 'Ver capturas',
      btn_github: 'Enlace a GitHub'
    },
    p2: {
      badge: 'Móvil y Modelado Matemático',
      titulo: 'Calculadora de Probabilidades y Líneas de Espera',
      descripcion: 'Aplicación para el cálculo, análisis e interpretación de modelos probabilísticos y de teoría de colas: distribuciones de Poisson y Exponencial, modelos de líneas de espera, modelos multiservidor, y simulación de Monte Carlo. Cada resultado incluye desglose teórico de fórmulas, interpretación en lenguaje simple, gráficas y exportación a PDF.',
      rol: '<strong>Rol:</strong> Desarrollo completo de la aplicación (única autora).',
      btn_capturas: 'Ver capturas',
      btn_github: 'Enlace a GitHub'
    },
    servicios: {
      tag: 'Especialidades',
      titulo: 'Servicios',
      s1_titulo: 'Desarrollo de aplicaciones móviles con Flutter',
      s1_desc: 'Aplicaciones modernas y fluidas para Android e iOS a partir de una única base de código robusta.',
      s2_titulo: 'Desarrollo web full stack',
      s2_desc: 'Desarrollo integral desde interfaces accesibles y responsivas hasta arquitecturas y lógica de backend.',
      s3_titulo: 'Integración y gestión de bases de datos',
      s3_desc: 'Diseño eficiente, normalización, consultas optimizadas y conexión segura con bases relacionales y modernas.'
    },
    contacto: {
      tag: 'Conexión',
      titulo: 'Contacto',
      bajada: '¿Tienes una propuesta o un proyecto en el que pueda aportar valor? Hablemos.'
    },
    footer: {
      texto: '© 2026 Maria Rojas <br> Desarrollo Full Stack'
    },
    tooltip_idioma: '¡Selecciona tu idioma aquí! 🌐'
  },
  en: {
    nav: {
      sobre_mi: 'About me',
      habilidades: 'Skills',
      proyectos: 'Projects',
      servicios: 'Services',
      contacto: 'Contact'
    },
    hero: {
      badge: 'Available for new projects',
      rol: 'Full Stack Developer <br> Web & Mobile Applications',
      frase: 'I build end-to-end web and mobile applications, from user interface to database architecture.',
      btn_proyectos: 'View projects',
      btn_contacto: 'Get in touch'
    },
    sobre_mi: {
      tag: 'Profile',
      titulo: 'About me',
      texto: 'I am a full stack developer with experience building web pages and mobile applications. I am currently in my final term of Systems Engineering at Universidad de Margarita (UNIMAR). I work on both backend logic and frontend user experience, ensuring that every layer of the product works reliably and seamlessly.'
    },
    habilidades: {
      tag: 'Skills',
      titulo: 'Technical Skills',
      movil: 'Mobile Development',
      frontend: 'Frontend',
      backend: 'Backend',
      bd: 'Databases',
      sub_sistemas: 'Database Systems:',
      sub_plataformas: 'Management Platforms & Tools:',
      formacion_titulo: 'Education',
      formacion_estado: '<span class="dot-pulso-ambar"></span> In progress (final term)',
      formacion_carrera: 'Systems Engineering <br> Universidad de Margarita (UNIMAR)'
    },
    proyectos: {
      tag: 'Portfolio',
      titulo: 'Featured Projects',
      ver_capturas: 'View screenshots',
      ocultar_capturas: 'Hide screenshots'
    },
    p1: {
      badge: 'Web & Hardware Integration',
      titulo: 'Attendance Control System with Facial Recognition',
      descripcion: 'Web platform developed for an educational institution to replace fingerprint attendance checking with facial recognition by integrating HikVision hardware and software. Enables employee management, shift scheduling, clock-in tracking, automatic overtime calculation, and Excel report export.',
      rol: '<strong>Role:</strong> Complete full stack development (database, backend, hardware integration, frontend). Developed alongside a team member.',
      btn_capturas: 'View screenshots',
      btn_github: 'GitHub Link'
    },
    p2: {
      badge: 'Mobile & Mathematical Modeling',
      titulo: 'Probability & Queueing Theory Calculator',
      descripcion: 'Mobile application for computing, analyzing, and interpreting probabilistic models and queueing theory: Poisson and Exponential distributions, waiting line models, multi-server queues, and Monte Carlo simulation. Each result includes formula breakdowns, plain-language interpretations, charts, and PDF exports.',
      rol: '<strong>Role:</strong> Complete app development (sole author).',
      btn_capturas: 'View screenshots',
      btn_github: 'GitHub Link'
    },
    servicios: {
      tag: 'Specialties',
      titulo: 'Services',
      s1_titulo: 'Mobile App Development with Flutter',
      s1_desc: 'Modern and smooth mobile applications for Android and iOS built from a single robust codebase.',
      s2_titulo: 'Full Stack Web Development',
      s2_desc: 'End-to-end development from responsive and accessible user interfaces to robust backend architectures.',
      s3_titulo: 'Database Integration & Management',
      s3_desc: 'Efficient database design, normalization, query optimization, and secure connections for relational and modern databases.'
    },
    contacto: {
      tag: 'Connection',
      titulo: 'Contact',
      bajada: 'Have a project proposal or an opportunity where I can add value? Let’s talk.'
    },
    footer: {
      texto: '© 2026 Maria Rojas <br> Full Stack Development'
    },
    tooltip_idioma: 'Select your language here! 🌐'
  }
};

// Manejo Global de Idioma
const LANG_STORAGE_KEY = 'portafolio-idioma';
let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || 'es';

function getCurrentLanguage() {
  return currentLang;
}

function aplicarIdioma(lang) {
  currentLang = lang;
  document.documentElement.setAttribute('lang', lang);
  localStorage.setItem(LANG_STORAGE_KEY, lang);

  // Actualizar el texto del botón en el navbar
  const btnIdiomaText = document.querySelector('#btn-idioma .lang-texto');
  if (btnIdiomaText) {
    btnIdiomaText.textContent = lang.toUpperCase();
  }

  // Actualizar todos los elementos con data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  const dict = translations[lang];

  elements.forEach((elem) => {
    const keyPath = elem.getAttribute('data-i18n').split('.');
    let value = dict;
    for (const key of keyPath) {
      if (value) value = value[key];
    }
    if (value !== undefined) {
      elem.innerHTML = value;
    }
  });

  // Actualizar texto de los botones del acordeón
  document.querySelectorAll('.btn-toggle-galeria').forEach((btn) => {
    const isExpanded = btn.getAttribute('aria-expanded') === 'true';
    const btnTexto = btn.querySelector('.btn-texto');
    if (btnTexto) {
      btnTexto.textContent = isExpanded
        ? translations[lang].proyectos.ocultar_capturas
        : translations[lang].proyectos.ver_capturas;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Aplicar idioma guardado o por defecto
  aplicarIdioma(currentLang);

  // Manejo de la burbuja de sugerencia de idioma
  const tooltipIdioma = document.getElementById('tooltip-idioma');
  const btnIdioma = document.getElementById('btn-idioma');

  if (tooltipIdioma) {
    // Mostrar la burbuja tras un breve retraso inicial
    setTimeout(() => {
      tooltipIdioma.classList.add('is-visible');
    }, 600);

    const ocultarTooltip = () => {
      tooltipIdioma.classList.remove('is-visible');
    };

    // Desaparecer automáticamente después de 6.5 segundos
    setTimeout(ocultarTooltip, 6500);

    if (btnIdioma) {
      btnIdioma.addEventListener('click', () => {
        ocultarTooltip();
        const nuevoIdioma = currentLang === 'es' ? 'en' : 'es';
        aplicarIdioma(nuevoIdioma);
      });
    }
  } else if (btnIdioma) {
    btnIdioma.addEventListener('click', () => {
      const nuevoIdioma = currentLang === 'es' ? 'en' : 'es';
      aplicarIdioma(nuevoIdioma);
    });
  }

  // Datos de las capturas de cada proyecto
  const projectGalleries = {
    'proyecto-1': [
      {
        src: 'assets/proyecto-1/screenshot-18.png',
        altEs: 'Sistema de Asistencias - Login',
        altEn: 'Attendance System - Login'
      },
      {
        src: 'assets/proyecto-1/screenshot-19.png',
        altEs: 'Sistema de Asistencias - Panel Principal de Administración',
        altEn: 'Attendance System - Main Admin Dashboard'
      },
      {
        src: 'assets/proyecto-1/screenshot-20.png',
        altEs: 'Sistema de Asistencias - Módulo de Reconocimiento Facial',
        altEn: 'Attendance System - Facial Recognition Module'
      },
      {
        src: 'assets/proyecto-1/screenshot-21.png',
        altEs: 'Sistema de Asistencias - Módulo de Reportes y Horas Extra',
        altEn: 'Attendance System - Reports & Overtime Module'
      },
      {
        src: 'assets/proyecto-1/screenshot-22.png',
        altEs: 'Sistema de Asistencias - Inicio de sesión y control de acceso',
        altEn: 'Attendance System - Login & Access Control'
      },
      {
        src: 'assets/proyecto-1/screenshot-23.png',
        altEs: 'Sistema de Asistencias - Dashboard del monitor de asistencia',
        altEn: 'Attendance System - Attendance Monitor Dashboard'
      },
      {
        src: 'assets/proyecto-1/screenshot-24.png',
        altEs: 'Sistema de Asistencias - Registro y gestión de empleados',
        altEn: 'Attendance System - Employee Registration & Management'
      },
      {
        src: 'assets/proyecto-1/screenshot-25.png',
        altEs: 'Sistema de Asistencias - Administración de turnos',
        altEn: 'Attendance System - Shift Management'
      }
    ],
    'proyecto-2': [
      {
        src: 'assets/proyecto-2/screenshot-1.jpg',
        altEs: 'Quantis - Pantalla de Bienvenida e Introducción',
        altEn: 'Quantis - Welcome & Introduction Screen'
      },
      {
        src: 'assets/proyecto-2/screenshot-2.jpg',
        altEs: 'Quantis - Menú de Módulos (Probabilidades, Líneas de Espera, Monte Carlo)',
        altEn: 'Quantis - Modules Menu (Probability, Queues, Monte Carlo)'
      },
      {
        src: 'assets/proyecto-2/screenshot-3.jpg',
        altEs: 'Quantis - Distribución de Poisson: Cálculo Puntual P(X = x)',
        altEn: 'Quantis - Poisson Distribution: Point Calculation P(X = x)'
      },
      {
        src: 'assets/proyecto-2/screenshot-4.jpg',
        altEs: 'Quantis - Distribución de Poisson: Cálculo por Intervalo P(xi <= X < xj)',
        altEn: 'Quantis - Poisson Distribution: Interval Calculation P(xi <= X < xj)'
      },
      {
        src: 'assets/proyecto-2/screenshot-5.jpg',
        altEs: 'Quantis - Fórmulas Teóricas Principales y Estadísticos Descriptivos',
        altEn: 'Quantis - Main Theoretical Formulas & Descriptive Statistics'
      },
      {
        src: 'assets/proyecto-2/screenshot-6.jpg',
        altEs: 'Quantis - Módulo de Probabilidades: Vista general de Poisson',
        altEn: 'Quantis - Probability Module: Poisson Overview'
      },
      {
        src: 'assets/proyecto-2/screenshot-7.jpg',
        altEs: 'Quantis - Módulo de Probabilidades: Distribución de Poisson',
        altEn: 'Quantis - Probability Module: Poisson Distribution'
      },
      {
        src: 'assets/proyecto-2/screenshot-8.jpg',
        altEs: 'Quantis - Módulo de Probabilidades: Probabilidad por rango',
        altEn: 'Quantis - Probability Module: Range Probability'
      },
      {
        src: 'assets/proyecto-2/screenshot-9.jpg',
        altEs: 'Quantis - Módulo de Probabilidades: Resultado puntual',
        altEn: 'Quantis - Probability Module: Point Result'
      },
      {
        src: 'assets/proyecto-2/screenshot-10.jpg',
        altEs: 'Quantis - Módulo de Probabilidades: Desglose teórico y fórmulas',
        altEn: 'Quantis - Probability Module: Formula Breakdown'
      },
      {
        src: 'assets/proyecto-2/screenshot-11.jpg',
        altEs: 'Quantis - Módulo de Probabilidades: Resultados y estadísticos',
        altEn: 'Quantis - Probability Module: Results & Statistics'
      },
      {
        src: 'assets/proyecto-2/screenshot-12.jpg',
        altEs: 'Quantis - Módulo de Líneas de Espera: M/M/1 sin límite en cola',
        altEn: 'Quantis - Queueing Module: M/M/1 Infinite Capacity'
      },
      {
        src: 'assets/proyecto-2/screenshot-13.jpg',
        altEs: 'Quantis - Módulo de Líneas de Espera: M/M/1 con límite en cola',
        altEn: 'Quantis - Queueing Module: M/M/1 Finite Capacity'
      },
      {
        src: 'assets/proyecto-2/screenshot-14.jpg',
        altEs: 'Quantis - Módulo de Líneas de Espera: Fórmulas principales',
        altEn: 'Quantis - Queueing Module: Key Formulas'
      },
      {
        src: 'assets/proyecto-2/screenshot-15.jpg',
        altEs: 'Quantis - Módulo de Líneas de Espera: Métricas del sistema',
        altEn: 'Quantis - Queueing Module: System Metrics'
      },
      {
        src: 'assets/proyecto-2/screenshot-16.jpg',
        altEs: 'Quantis - Módulo de Líneas de Espera: Gráfica de distribución',
        altEn: 'Quantis - Queueing Module: Distribution Chart'
      },
      {
        src: 'assets/proyecto-2/screenshot-17.jpg',
        altEs: 'Quantis - Módulo de Líneas de Espera: Tabla de probabilidades',
        altEn: 'Quantis - Queueing Module: Probability Table'
      },
      {
        src: 'assets/proyecto-2/screenshot-18.jpg',
        altEs: 'Quantis - Módulo de Líneas de Espera: Desglose teórico y fórmulas',
        altEn: 'Quantis - Queueing Module: Theoretical Breakdown'
      },
      {
        src: 'assets/proyecto-2/screenshot-19.jpg',
        altEs: 'Quantis - Módulo de Líneas de Espera: Interpretación del resultado',
        altEn: 'Quantis - Queueing Module: Result Interpretation'
      },
      {
        src: 'assets/proyecto-2/screenshot-20.jpg',
        altEs: 'Quantis - Módulo de Multiservidor: M/M/c sin límite en cola',
        altEn: 'Quantis - Multi-Server Module: M/M/c Infinite Queue'
      },
      {
        src: 'assets/proyecto-2/screenshot-21.jpg',
        altEs: 'Quantis - Módulo de Multiservidor: Parámetros de entrada',
        altEn: 'Quantis - Multi-Server Module: Input Parameters'
      },
      {
        src: 'assets/proyecto-2/screenshot-22.jpg',
        altEs: 'Quantis - Módulo de Multiservidor: Métricas del sistema',
        altEn: 'Quantis - Multi-Server Module: System Metrics'
      },
      {
        src: 'assets/proyecto-2/screenshot-23.jpg',
        altEs: 'Quantis - Módulo de Multiservidor: Estado de los servidores',
        altEn: 'Quantis - Multi-Server Module: Server Status'
      },
      {
        src: 'assets/proyecto-2/screenshot-24.jpg',
        altEs: 'Quantis - Módulo de Multiservidor: Fórmulas principales',
        altEn: 'Quantis - Multi-Server Module: Key Formulas'
      },
      {
        src: 'assets/proyecto-2/screenshot-25.jpg',
        altEs: 'Quantis - Módulo de Multiservidor: Gráfica de probabilidad',
        altEn: 'Quantis - Multi-Server Module: Probability Chart'
      },
      {
        src: 'assets/proyecto-2/screenshot-26.jpg',
        altEs: 'Quantis - Módulo de Multiservidor: Tabla de probabilidades',
        altEn: 'Quantis - Multi-Server Module: Probability Table'
      },
      {
        src: 'assets/proyecto-2/screenshot-27.jpg',
        altEs: 'Quantis - Módulo de Multiservidor: Capacidad finita',
        altEn: 'Quantis - Multi-Server Module: Finite Capacity'
      },
      {
        src: 'assets/proyecto-2/screenshot-28.jpg',
        altEs: 'Quantis - Módulo de Multiservidor: Resultado final',
        altEn: 'Quantis - Multi-Server Module: Final Result'
      },
      {
        src: 'assets/proyecto-2/screenshot-29.jpg',
        altEs: 'Quantis - Módulo de Simulación: Parámetros de la simulación',
        altEn: 'Quantis - Simulation Module: Simulation Parameters'
      },
      {
        src: 'assets/proyecto-2/screenshot-30.jpg',
        altEs: 'Quantis - Módulo de Simulación: Generación de variables',
        altEn: 'Quantis - Simulation Module: Variable Generation'
      },
      {
        src: 'assets/proyecto-2/screenshot-31.jpg',
        altEs: 'Quantis - Módulo de Simulación: Comparación muestral vs. teórico',
        altEn: 'Quantis - Simulation Module: Sample vs Theoretical Comparison'
      },
      {
        src: 'assets/proyecto-2/screenshot-32.jpg',
        altEs: 'Quantis - Módulo de Simulación: Base de datos generada',
        altEn: 'Quantis - Simulation Module: Generated Dataset'
      },
      {
        src: 'assets/proyecto-2/screenshot-33.jpg',
        altEs: 'Quantis - Módulo de Simulación: Tabla de resultados',
        altEn: 'Quantis - Simulation Module: Results Table'
      },
      {
        src: 'assets/proyecto-2/screenshot-34.jpg',
        altEs: 'Quantis - Módulo de Simulación: Gráfica de comparación',
        altEn: 'Quantis - Simulation Module: Comparison Chart'
      },
      {
        src: 'assets/proyecto-2/screenshot-35.jpg',
        altEs: 'Quantis - Módulo de Simulación: Resultado final',
        altEn: 'Quantis - Simulation Module: Final Result'
      },
      {
        src: 'assets/proyecto-2/screenshot-36.jpg',
        altEs: 'Quantis - Menú principal con módulos disponibles',
        altEn: 'Quantis - Main Menu with Available Modules'
      },
      {
        src: 'assets/proyecto-2/screenshot-37.jpg',
        altEs: 'Quantis - Pantalla final de bienvenida',
        altEn: 'Quantis - Final Welcome Screen'
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
      btn.setAttribute('aria-label', `Captura ${index + 1}`);

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

    const activeAlt = (currentLang === 'en' && item.altEn) ? item.altEn : item.altEs;

    if (imgElem) {
      imgElem.src = item.src;
      imgElem.alt = activeAlt;
    }

    if (contadorElem) {
      contadorElem.textContent = `${state.currentIndex + 1} / ${gallery.length}`;
    }

    if (captionElem) {
      captionElem.textContent = activeAlt;
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
      if (btnTexto) {
        btnTexto.textContent = translations[currentLang].proyectos.ocultar_capturas;
      }
      updateProjectViewer(projectKey);
    } else {
      accordion.setAttribute('hidden', '');
      btn.setAttribute('aria-expanded', 'false');
      if (btnTexto) {
        btnTexto.textContent = translations[currentLang].proyectos.ver_capturas;
      }
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

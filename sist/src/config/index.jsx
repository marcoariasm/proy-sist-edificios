export const MENU = [
  {
    header: 'OPERACIONES',
    isOpen: false,
    titles: [
      {
        title: 'Transparencia',
        titleLink: '#',
        titleIcon: 'fa-magnifying-glass-dollar',
        hasTreeView: true,
        hasBadge: false,
        colorBadge: 'error',
        badge: '',
        items: [
          { item: 'Cuadros', itemLink: 'operations/dashboard' },
          { item: 'Morosos', itemLink: 'operations/defaulters' },
          // { item: 'Reportes', itemLink: '#' },
        ],
      },
      {
        title: 'Finanzas',
        titleLink: '#',
        titleIcon: 'fa-coins',
        hasTreeView: true,
        hasBadge: true,
        colorBadge: 'warning',
        badge: '3',
        items: [
          { item: 'Ingresos', itemLink: 'operations/incomes' },
          { item: 'Gastos', itemLink: 'operations/expenses' },
          { item: 'Cuotas', itemLink: 'operations/dues' }, // UPDATE!
          { item: 'Presupuestos', itemLink: 'operations/budgets' },
          { item: 'Cuentas', itemLink: 'operations/accounts' },
          { item: 'Condonaciones', itemLink: 'operations/condonations' },
        ],
      },
      {
        title: 'Comunicaciones',
        titleLink: '#',
        titleIcon: 'fa-paper-plane',
        hasTreeView: true,
        hasBadge: true,
        colorBadge: 'success',
        badge: '3',
        items: [
          { item: 'Anuncios', itemLink: 'operations/notices' },
          { item: 'Encuestas', itemLink: 'operations/polls' },
          { item: 'Tickets', itemLink: 'operations/tickets' },
        ],
      }
    ],
  },
  {
    header: 'GESTIÓN',
    isOpen: false,
    titles: [
      {
        title: 'Administración',
        titleLink: '#',
        titleIcon: 'fa-people-roof',
        hasTreeView: true,
        hasBadge: true,
        colorBadge: 'success',
        badge: '4',
        items: [
          { item: 'Unidades', itemLink: 'management/units' },
          { item: 'Usuarios', itemLink: 'management/users' },
          // { item: 'Áreas comunes', itemLink: 'management/commons' },
          { item: 'Documentos', itemLink: 'management/documents' },
          // { item: 'Visitas', itemLink: 'management/visits' },
        ],
      },
      {
        title: 'Configuración',
        titleLink: '#',
        titleIcon: 'fa-sliders',
        hasTreeView: true,
        hasBadge: true,
        colorBadge: 'danger',
        badge: 'New',
        items: [
          { item: 'Parámetros', itemLink: 'management/parameters' },
          { item: 'Editar tablas', itemLink: 'management/tables' },
          { item: 'Importar registros', itemLink: 'management/imports' },
          { item: 'Ajustes', itemLink: 'management/settings' }, // aquí configuraciones, tipos, etc
        ],
      },
    ],
  },
];

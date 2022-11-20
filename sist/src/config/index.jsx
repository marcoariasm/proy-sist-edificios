export const MENU = [
    {
      header: 'MODULOS',
      isOpen: false,
      titles: [
        // {
        //   title: 'Tablero de Control',
        //   titleLink: '#',
        //   titleIcon: 'fa-tachometer-alt',
        //   hasTreeView: true,
        //   hasBadge: false,
        //   colorBadge: '',
        //   badge: '',
        //   items: [
        //     { item: 'Tablero 1', itemLink: '#' },
        //     { item: 'Tablero 2', itemLink: '#' },
        //   ],
        // },
        {
          title: 'Medición de Servicios',
          titleLink: '#',
          titleIcon: 'fa-tachometer-alt',
          hasTreeView: true,
          hasBadge: true,
          colorBadge: 'warning',
          badge: '3',
          items: [
            { item: 'Añadir lectura', itemLink: 'services/list' }
          ],
        }
      ],
    },
    // {
    //   header: 'ADMINISTRACIÓN',
    //   isOpen: false,
    //   titles: [
        // {
        //   title: 'Doctores',
        //   titleLink: '#',
        //   titleIcon: 'fa-stethoscope',
        //   hasTreeView: true,
        //   hasBadge: true,
        //   colorBadge: 'success',
        //   badge: '4',
        //   items: [
        //     { item: 'Lista', itemLink: 'doctors' }
        //   ],
        // },
        // {
        //   title: 'Pacientes',
        //   titleLink: '#',
        //   titleIcon: 'fa-bed',
        //   hasTreeView: true,
        //   hasBadge: true,
        //   colorBadge: 'danger',
        //   badge: 'New',
        //   items: [
        //     { item: 'Registro rápido', itemLink: 'patients' },
        //     { item: 'Listado', itemLink: 'patients' }
        //   ],
        // },
      // ],
    // },
  ];
import React from 'react';

// // OPERACIONES
// // transparencia
// const DashboardPage = React.lazy(() => import('../pages/Dashboard'));
// const DefaultersPage = React.lazy(() => import('../pages/Defaulters'));
// // finanzas
// const IncomesPage = React.lazy(() => import('../pages/Incomes'));
// const ExpensesPage = React.lazy(() => import('../pages/Expenses'));
const DuesPage = React.lazy(() => import('../pages/Dues'));
// const BudgetsPage = React.lazy(() => import('../pages/Budgets'));
// const AccountsPage = React.lazy(() => import('../pages/Accounts'));
// const CondonationsPage = React.lazy(() => import('../pages/Condonations'));
// // comunicaciones
// const NoticesPage = React.lazy(() => import('../pages/notices'));
// const PollsPage = React.lazy(() => import('../pages/polls'));
// const TicketsPage = React.lazy(() => import('../pages/tickets'));

// // GESTION
// // administracion
// const UnitsPage = React.lazy(() => import('../pages/units'));
// const UsersPage = React.lazy(() => import('../pages/users'));
// const DocumentsPage = React.lazy(() => import('../pages/documents'));
// // configuracion
const ParametersPage = React.lazy(() => import('../pages/Parameters'));
// const TablesPage = React.lazy(() => import('../pages/tables'));
// const ImportsPage = React.lazy(() => import('../pages/imports'));
// const SettingsPage = React.lazy(() => import('../pages/settings'));

// legacy
// const MedicalRecord = React.lazy(() => import('../modules/medical-record/pages/MedicalRecord'));
// const ListMedicalRecords = React.lazy(() => import('../modules/medical-record/pages/MedicalRecord/list'));
// const DoctorsList = React.lazy(() => import('../views/pages/Doctors/List'));
// const PatientsLists = React.lazy(() => import('../views/pages/Patients/List'));
// const Services = React.lazy(() => import('../views/pages/Services'));


const routes = [
  // legacy
  // { path: '/', element: DuesPage },
  // { path: '/dashboard', name: 'Dashboard', element: Services, exact: true },
  // { path: '/medicalrecord', name: 'Historia Clínica', element: MedicalRecord, exact: true },
  // { path: '/medicalrecord/list', name: 'Listado de Historias Clínicas', element: ListMedicalRecords },
  // { path: '/doctors', name: 'Doctores', element: DoctorsList, exact: true },
  // { path: '/patients', name: 'Pacientes', element: PatientsLists, exact: true },
  // { path: '/services/list', name: 'Servicios', element: Services, exact: true },
  // new
  { path: '/operations', element: DuesPage, exact: true },
  { path: '/operations/dashboard', element: DuesPage, exact: true },
  { path: '/operations/defaulters', element: DuesPage, exact: true },
  { path: '/operations/incomes', element: DuesPage, exact: true },
  { path: '/operations/expenses', element: DuesPage, exact: true },
  { path: '/operations/dues', element: DuesPage, exact: true },
  { path: '/operations/budgets', element: DuesPage, exact: true },
  { path: '/operations/accounts', element: DuesPage, exact: true },
  { path: '/operations/condonations', element: DuesPage, exact: true },
  { path: '/operations/notices', element: DuesPage, exact: true },
  { path: '/operations/polls', element: DuesPage, exact: true },
  { path: '/operations/tickets', element: DuesPage, exact: true },
  { path: '/management', element: DuesPage, exact: true },
  { path: '/management/units', element: DuesPage, exact: true },
  { path: '/management/users', element: DuesPage, exact: true },
  { path: '/management/documents', element: DuesPage, exact: true },
  { path: '/management/parameters', element: ParametersPage, exact: true },
  { path: '/management/tables', element: DuesPage, exact: true },
  { path: '/management/imports', element: DuesPage, exact: true },
  { path: '/management/settings', element: DuesPage, exact: true },
];

export default routes;

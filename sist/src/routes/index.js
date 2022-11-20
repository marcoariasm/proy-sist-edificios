import React from 'react';

const Dashboard = React.lazy(() => import('../views/pages/Dashboard'));
const MedicalRecord = React.lazy(() => import('../modules/medical-record/pages/MedicalRecord'));
const ListMedicalRecords = React.lazy(() => import('../modules/medical-record/pages/MedicalRecord/list'));
const DoctorsList = React.lazy(() => import('../views/pages/Doctors/List'));
const PatientsLists = React.lazy(() => import('../views/pages/Patients/List'));
const Services = React.lazy(() => import('../views/pages/Services'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Services, exact: true },
  { path: '/medicalrecord', name: 'Historia Clínica', element: MedicalRecord, exact: true },
  { path: '/medicalrecord/list', name: 'Listado de Historias Clínicas', element: ListMedicalRecords },
  { path: '/doctors', name: 'Doctores', element: DoctorsList, exact: true },
  { path: '/patients', name: 'Pacientes', element: PatientsLists, exact: true },
  { path: '/services/list', name: 'Servicios', element: Services, exact: true }
];

export default routes;

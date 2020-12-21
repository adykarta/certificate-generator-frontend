import React from 'react';
import Homepage from './pages/Homepage';
import TestPage from './pages/Test';
import CoordinatePage from './pages/Coordinate';
import UploadOne from './pages/Upload/One';
import UploadMultiple from './pages/Upload/Two';
import EditOne from './pages/Edit/One';
import EditMultiple from './pages/Edit/Two';

const routes = [
    { path: '/', element: <Homepage /> },
    { path: '/test', element: <TestPage /> },
    { path: '/coor', element: <CoordinatePage /> },
    { path: '/upload-one', element: <UploadOne /> },
    { path: '/upload-multiple', element: <UploadMultiple /> },
    { path: '/edit-one', element: <EditOne />},
    { path: '/edit-multiple', element: <EditMultiple />},
];

export default routes;

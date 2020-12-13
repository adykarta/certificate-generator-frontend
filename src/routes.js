import React from 'react';
import Homepage from './pages/Homepage';
import UploadOne from './pages/Upload/One';
import TestPage from './pages/Test';
import CoordinatePage from './pages/Coordinate';
import EditOne from './pages/Edit/One';

const routes = [
    { path: '/', element: <Homepage /> },
    { path: '/test', element: <TestPage /> },
    { path: '/coor', element: <CoordinatePage /> },
    { path: '/upload-one', element: <UploadOne /> },
    { path: '/edit-one', element: <EditOne />},
];

export default routes;

import React from 'react';
import Homepage from './pages/Homepage';
import UploadOne from './pages/Upload/One'
import UploadMultiple from './pages/Upload/Two'
import EditOne from './pages/Edit/One'
import EditMultiple from './pages/Edit/Two'

const routes = [
    { path: '/', element: <Homepage /> },
    { path: '/upload-one', element: <UploadOne /> },
    { path: '/upload-multiple', element: <UploadMultiple /> },
    { path: '/edit-one', element: <EditOne />},
    { path: '/edit-multiple', element: <EditMultiple />},
];

export default routes;

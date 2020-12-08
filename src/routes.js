import React from 'react';
import Homepage from './pages/Homepage';
import UploadOne from './pages/Upload/One'
import EditOne from './pages/Edit/One'

const routes = [
    { path: '/', element: <Homepage /> },
    { path: '/upload-one', element: <UploadOne /> },
    { path: '/edit-one', element: <EditOne />},
];

export default routes;

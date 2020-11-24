import React from 'react';
import Homepage from './pages/Homepage';
import UploadOne from './pages/Upload/One'

const routes = [
    { path: '/', element: <Homepage /> },
    { path: '/upload-one', element: <UploadOne /> },
];

export default routes;

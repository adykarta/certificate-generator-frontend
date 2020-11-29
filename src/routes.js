import React from 'react';
import CoordinatePage from './pages/Coordinate';
import Homepage from './pages/Homepage';
import UploadOne from './pages/Upload/One'

const routes = [
    { path: '/', element: <CoordinatePage /> },
    { path: '/home', element: <Homepage /> },
    { path: '/upload-one', element: <UploadOne /> },
];

export default routes;

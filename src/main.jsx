import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/router';
import AuthProvider from './AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'
import { FormDataProvider } from './Hooks/FormDataContext';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <FormDataProvider>
          <RouterProvider router={router} />
          <Toaster />
        </FormDataProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
);

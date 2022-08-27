import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FooterComponent } from './components/Footer';
import { HeaderComponent } from './components/Header';
import { MyThemeProvider } from './styles/MyThemeProvider';
import { Home } from './templates/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </MyThemeProvider>
  </React.StrictMode>,
);

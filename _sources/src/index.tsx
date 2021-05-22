import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

(() => {
  const startLoadingTime = Date.now();
  window.addEventListener('load', () => {
    setTimeout(function () {
      const loading = document.querySelector<HTMLDivElement>('#loading');
      if (!loading) {
        renderApp();
        return;
      }

      loading.style.opacity = '0';
      loading.addEventListener('transitionend', () => {
        loading.remove();
        renderApp();
      });
    }, Math.max(1000 - (Date.now() - startLoadingTime), 0));
  });
})();

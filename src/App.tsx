import { Provider } from 'react-redux';
import Kambaz from './Kambaz';
import Labs from './Labs';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import store from './Kambaz/store';
export default function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Labs" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kambaz/*" element={<Kambaz />} />
          </Routes>
        </div>
      </Provider>
    </HashRouter>
  );
}

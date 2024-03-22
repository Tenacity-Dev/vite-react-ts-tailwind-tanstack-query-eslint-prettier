import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>test</div>} />
      </Routes>
    </BrowserRouter>
  );
}

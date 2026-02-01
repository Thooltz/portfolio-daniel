import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";

import Home from "../pages/Home/index.tsx";         
import ItemForm from "../pages/ItemForm/index.tsx";
import Signin from "../pages/Signin/index.tsx";
import Signup from "../pages/Signup/index.tsx";
import useAuth from "../hooks/useAuth.tsx";

// Guard de rota privada
function RequireAuth() {
  const { signed } = useAuth() as { signed: boolean | number };
  const isSigned = typeof signed === "number" ? signed > 0 : !!signed;
  return isSigned ? <Outlet /> : <Navigate to="/" replace />;
}

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        {/* públicas */}
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* privadas */}
        <Route element={<RequireAuth />}>
          <Route path="/home" element={<Home />} />
          <Route path="/home/novo" element={<ItemForm />} />
          <Route path="/home/editar/:id" element={<ItemForm />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

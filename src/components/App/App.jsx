import { useDispatch, useSelector } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import Loader from "../Loader/Loader";
import { Route, Routes } from "react-router-dom";
import RestrictedRoute from "../RestrictedRoute.jsx";
import PrivateRoute from "../PrivateRoute.jsx";
import Layout from "../Layout/Layout.jsx";
import { refreshUser } from "../../redux/auth/operations.js";
import { selectIsRefreshing } from "../../redux/auth/selectors.js";


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(()=>import("../../pages/LoginPage/LoginPage"))
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));



export default function App(){
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing)

  useEffect(()=>{
    dispatch(refreshUser());
  },[dispatch])

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : ( <div>
      <Layout>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/register" element={<RestrictedRoute component={<RegistrationPage/>} redirectTo="/contacts"/>}/>
          <Route path="/login" element={<RestrictedRoute component={<LoginPage/>}redirectTo="/contacts"/>}/>
          <Route path="/contacts" element={<PrivateRoute component={<ContactsPage/>}redirectTo="/login"/>}/>
          <Route path="*" element={<NotFoundPage />} />
          </Routes>
    </Suspense>
    </Layout>
    </div>
  );
}
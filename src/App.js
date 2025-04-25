import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Sidebar from "./components/ui/sidebar/Sidebar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./components/ui/loader/Loader";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import CustomerEditForm from "./components/customersCompnents/customerEditForm/CustomerEditForm";
import Users from "./pages/Users";
import UserAddForm from "./components/usersComponents/userAddForm/UserAddForm";
import UserEditForm from "./components/usersComponents/userEditForm/UserEditForm";
import Products from "./pages/Products";
import ProductAddForm from "./components/productsComponents/productAddForm/ProductAddForm";
import ProductEditForm from "./components/productsComponents/prductEditForm/ProductEditForm";
import Interactions from "./components/interactionsComponents/Interactions";
import RemovedProductsTable from "./components/productsComponents/RemovedProductsTable";
import RemovedUsersTable from "./components/usersComponents/RemovedUsersTable";
import DeletedDataPage from "./pages/deletedDataPage/DeletedDataPage.jsx";
import Sales from "./pages/Sales.jsx";
import SaleAddForm from "./components/salesCompnents/saleAddForm/SaleAddForm.jsx";
import SaleEditForm from "./components/salesCompnents/saleEditForm/SaleEditForm.jsx";
import RemovedSalesTable from "./components/salesCompnents/RemovedSalesTable.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import UnauthorizedPage from "./pages/UnauthorizedPage.jsx";
import TopSection from "./components/ui/topSections/TopSection.jsx";
import { setCustomTheme, setDarkTheme, setLightTheme } from "./store/slices/themeSlice.js";
const Content = styled.div`
  display: flex;
  max-width: 100%;
  width: 100%;
`;
const RightSection = styled.div`
  flex: 1;
  padding: 50px 10px 10px 10px;
  width: calc(100% - 60px);
`;
export default function App() {
  const theme = useSelector((state) => state.theme);
  const [collapsed, setCollapsed] = useState(true);
  const isLoading = useSelector((state) => state.loader.isLoading);
  const user = useSelector((state) => state.user.user); // افترض أن حالة المستخدم مخزنة في Redux

  const  {currentTheme}  = useSelector((state) => state.theme);
  const isAdmin = user? user.role == "admin" : false
  
    const dispatch = useDispatch();
  useEffect(()=>{
   if(user){
    switch(user.theme){
      case "light":{
        dispatch(setLightTheme());
        break;
      }
      case "dark":{
        dispatch(setDarkTheme());
        break;
      }
      default:{
        dispatch(setCustomTheme(user.theme))
        break;
      }
   }
      
    }

  }, [user])
  const renderProtectedRoute = (Component, props = {}, show=true) => {
    const { collapsed, setCollapsed } = props;
    if(show)
    return (
      <Content>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <RightSection>
          <TopSection/>
          <Component {...props} />
        </RightSection>
      </Content>
    );
    else
    return <UnauthorizedPage/>
  };
  return (
    <>
      <Router>
        <ThemeProvider theme={currentTheme}>
          {isLoading && <Loader />}
          <GlobalStyles />
          <Routes>
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <LoginPage />}
            />
            <Route
              path="/register"
              element={user ? <Navigate to="/" /> : <RegisterPage />}
            />

            {user && (
              <>
                <Route
                  path="/"
                  element={renderProtectedRoute(Products, {
                    collapsed,
                    setCollapsed,
                  })}
                />
                <Route
                  path="/dashboard"
                  element={renderProtectedRoute(Dashboard, {
                    collapsed,
                    setCollapsed,
                  })}
                />
                <Route
                  path="/customers"
                  element={renderProtectedRoute(Customers, {
                    collapsed,
                    setCollapsed,
                  })}
                />
                <Route
                  path="/editCustomer/:id"
                  element={renderProtectedRoute(CustomerEditForm, {
                    collapsed,
                    setCollapsed,
                  }, isAdmin)}
                />

                <Route
                  path="/users"
                  element={renderProtectedRoute(Users, {
                    collapsed,
                    setCollapsed,
                  }, isAdmin)}
                />
                <Route
                  path="/addUser"
                  element={renderProtectedRoute(UserAddForm, {
                    collapsed,
                    setCollapsed,
                  }, isAdmin)}
                />
                <Route
                  path="/editUser/:id"
                  element={renderProtectedRoute(UserEditForm, {
                    collapsed,
                    setCollapsed,
                  }, isAdmin)}
                />

                <Route
                  path="/products"
                  element={renderProtectedRoute(Products, {
                    collapsed,
                    setCollapsed,
                  })}
                />
                <Route
                  path="/addProduct"
                  element={renderProtectedRoute(ProductAddForm, {
                    collapsed,
                    setCollapsed,
                  }, isAdmin)}
                />
                <Route
                  path="/editProduct/:id"
                  element={renderProtectedRoute(ProductEditForm, {
                    collapsed,
                    setCollapsed,
                  }, isAdmin)}
                />

                <Route
                  path="/interactions"
                  element={renderProtectedRoute(Interactions, {
                    collapsed,
                    setCollapsed,
                  })}
                />
                <Route
                  path="/addInteraction"
                  element={renderProtectedRoute(
                    () => (
                      <h2>add interaction</h2>
                    ),
                    { collapsed, setCollapsed }
                  ,isAdmin) }
                />
                <Route
                  path="/editInteraction"
                  element={renderProtectedRoute(
                    () => (
                      <h2>Edit interaction</h2>
                    ),
                    { collapsed, setCollapsed }
                  ,isAdmin) }
                />

                <Route
                  path="/sales"
                  element={renderProtectedRoute(Sales, {
                    collapsed,
                    setCollapsed,
                  })}
                />
                <Route
                  path="/addSale"
                  element={renderProtectedRoute(SaleAddForm, {
                    collapsed,
                    setCollapsed,
                  }, isAdmin)}
                />
                <Route
                  path="/editSale/:id"
                  element={renderProtectedRoute(SaleEditForm, {
                    collapsed,
                    setCollapsed,
                  }, isAdmin)}
                />

                <Route
                  path="/deleted"
                  element={renderProtectedRoute(DeletedDataPage, {
                    collapsed,
                    setCollapsed,
                  }, isAdmin)}
                >
                  <Route path="products" element={<RemovedProductsTable />} />
                  <Route path="users" element={<RemovedUsersTable />} />
                  <Route path="sales" element={<RemovedSalesTable />} />
                  <Route index element={<RemovedUsersTable />} />
                </Route>
              </>
            )}

            <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

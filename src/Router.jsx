import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import AllShops from "./pages/Shop/AllShops";
import ShopDetails from "./pages/Shop/ShopDetails";
import AllProductsPage from "./pages/Products/AllProductsPage";
import PopulerProductsPage from "./pages/populer/mostpopuler";
import BestDeals from "./pages/BestDeals/BestDeals";
import ContactUs from "./pages/Contact/ContactUs";
import Blog from "./pages/Blog/Blog";
import Checkout from "./pages/checkout/checkout";
import ChangePassword from "./pages/Dashboard/ChangePassword";
import Wishlist from "./pages/Wishlist/Wishlist";
import MyProfile from "./pages/Dashboard/profile";
import OrderHistory from "./pages/Dashboard/orderhistory";
// import Therapy from "./pages/therapy/Therapy";
// import All_therapists from "./pages/therapists/All_therapists";
// import WellBeing from "./pages/wellbeing/WellBeing";
// import ContactForm from "./pages/contactForm/ContactForm";
// import AboutUs from "./pages/aboutUs/AboutUs";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import SelectedTherapists from "./pages/therapists/SelectedTherapists";
// import Career from "./pages/Career";
// import Terms_condition from "./pages/policy/Terms_condition";
// import Faqs from "./pages/policy/Faqs";
// import Pricing from "./pages/policy/Pricing";
// import Privacy_Policy from "./pages/policy/Privacy_Policy";
// import Refund_policy from "./pages/policy/Refund_policy";
// import Profile from "./components/Profile";
// import ProtectedRoutes from "./pages/auth/ProtectedRoutes"
// import CorporateContactForm from "./pages/corporate/CorporateContactForm";
export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/categories",
                element: <CategoriesPage />
            },
            {
                path: "/blogs",
                element: <Blog />
            },
            {
                path: "/all-shops",
                element: <AllShops />
            },
            {
                path: "/PopulerProducts",
                element: <PopulerProductsPage />
            },
            {
                path: "/bestdeals",
                element: <BestDeals />
            },
            {
                path: "/contactus",
                element: <ContactUs />
            },
            {
                path: "/allproducts",
                element: <AllProductsPage />
            },
            {
                path: "/shop/:id",
                element: <ShopDetails  />
            },
            {
                path: "/checkout",
                element: <Checkout  />
            },
            {
                path: "/changepassword",
                element: <ChangePassword />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/profile",
                element: <MyProfile />
            },
            {
                path: "/orderhistory",
                element: <OrderHistory />
            },
            // {
            //     path: "/profile",
            //     element:<ProtectedRoutes> <Profile /></ProtectedRoutes>
            // },
            // {
            //     path: "/therapy",
            //     element: <Therapy />
            // },
            // {
            //     path: "/our_therapy",
            //     element: <All_therapists />
            // },
            // {
            //     path: "/therapists/:title",
            //     element: <SelectedTherapists />
            // },
            // {
            //     path: "/wellbeing",
            //     element: <WellBeing />
            // },
            // {
            //     path: "/contactForm",
            //     element: <ContactForm />
            // },
            // {
            //     path: "/corporateForm",
            //     element: <CorporateContactForm />
            // },
            // {
            //     path: "/aboutus",
            //     element: <AboutUs />
            // },
            // {
            //     path: "/career",
            //     element: <Career />
            // },
            // {
            //     path: "/t&c",
            //     element: <Terms_condition />
            // },
            // {
            //     path: "/faqs",
            //     element: <Faqs />
            // },
            // {
            //     path: "/pricing",
            //     element: <Pricing />
            // },
            // {
            //     path: "/privacypolicy",
            //     element: <Privacy_Policy />
            // },
            // {
            //     path: "/refundpolicy",
            //     element: <Refund_policy />
            // },
            // {
            //     path: "/login",
            //     element: <Login />
            // },
            // {
            //     path: "/register",
            //     element: <Register />
            // },
        ]
    },
])
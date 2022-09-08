// import { Route,Routes,useNavigate } from "react-router-dom";
// import { useAuth } from "../contexts/AuthContext";

// function ProtectedRoute({ component: Component, ...rest }) {
//   const { loggedIn } = useAuth();

//   return (
//     <></>
//     <Routes>
//     <Route
//       {...rest}
//       render={(props) => {
//         if (loggedIn) {
//           return <Component {...props} />;
//         }

//         return navigate('/');
//       }}
//     />
//     </Routes>
//   );
// }

// export default ProtectedRoute;

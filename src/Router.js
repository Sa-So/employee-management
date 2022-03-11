// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/Signup/Signup";
// import Dashboard from "./pages/Dashboard/Dashboard";
// import Profile from "./pages/Profile/Profile";
// const Router = () => {
//   const [user, setUser] = useState(null);
//   // const [userDetails, setUserDetails] = useState(null);
//   // const handleLogin(){
//   //     (e)=>{
//   //     setUserDetails()
//   // }
//   useEffect(() => {
//     const user = localStorage.getItem("user");
//     // user && JSON.parse(user) && setUser(JSON.parse(user));
//     user && JSON.parse(user) ? setUser(true) : setUser(false);
//     // if (user) {
//     //   setUser(user);
//     // }
//   }, []);
//   // const authenticate = (user) => {
//   //   setUser(user);
//   //   localStorage.setItem("user", user);
//   // };
//   useEffect(() => {
//     localStorage.setItem("user", user);
//   }, [user]);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {!user && (
//           <Route
//             path="/auth"
//             element={<Auth authenticate={() => setUser(true)} />}
//           />
//         )}
//         {/* <Route path="/" element={<Home user={user} setUser={setUser} />} /> */}
//         {user && (
//           <>
//             <Route
//               path="/profile"
//               element={<Profile logout={() => setUser(false)} />}
//             />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </>
//         )}

//         <Route
//           path="*"
//           element={<Navigate to={user ? "/profile" : "/auth"} />}
//         />
//         {/* shouldn't it be 404 error ??? */}
//       </Routes>
//     </BrowserRouter>
//   );
// };
// /*
// const Router = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" component={Login} />
//         <Route path="/signup" component={Signup} />
//         <Route path="/dashboard" component={Dashboard} />
//         <Route path="/profile" component={Profile} />
//         <Route path="/settings" component={Settings} />
//         <Route path="/users" component={Users} />
//         <Route path="/users/:id" component={User} />
//         <Route path="/posts" component={Posts} />
//         <Route path="/posts/:id" component={Post} />
//         <Route path="/posts/new" component={NewPost} />
//         <Route path="/posts/edit/:id" component={EditPost} />
//         <Route path="/posts/delete/:id" component={DeletePost} />
//         <Route path="/posts/:id/comments" component={Comments} />
//         <Route path="/posts/:id/comments/:id" component={Comment} />
//         <Route path="/posts/:id/comments/new" component={NewComment} />
//         <Route path="/posts/:id/comments/edit/:id" component={EditComment} />
//         <Route
//           path="/posts/:id/comments/delete/:id"
//           component={DeleteComment}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };
// */

// export default Router;

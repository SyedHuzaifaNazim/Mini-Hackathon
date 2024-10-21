'use client'
import Image from "next/image";
// import SignIn from "./pages/signin/page";
// import SignUp from "./pages/signup/page";
// import {email,password} from "firebase/auth"
import LandingPage from "./components/header";
// import Login from "./pages/login"
import Login from "./pages/login";
import Dashboard from "./dashboard/page";


export default function Home() {
  return (
    <>
    {/* <LandingPage/> */}
    <Login/>
    <Dashboard/>
    </>
  );
}

import Image from "next/image";
// import SignIn from "./pages/signin/page";
// import SignUp from "./pages/signup/page";
// import {email,password} from "firebase/auth"
import LandingPage from "./components/header";
import Dashboard from "./pages/dashboard";


export default function Home() {
  return (
    <>
    <LandingPage/>
    <Dashboard/>
    </>
  );
}

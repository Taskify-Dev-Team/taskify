import LoginPage from "@/app/user/login/page";
import Image from "next/image";
import RegisterPage from '@/app/user/register/page';



export default function Home() {
  return (
    <main>
      <LoginPage/>
      <RegisterPage/>
    </main>
  );
}

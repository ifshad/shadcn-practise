"use client";
// pages/login.js
import { loginUser } from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const handleLogin = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const phoneNumber = formData.get("phoneNumber");
    const password = formData.get("password");
    const token = loginUser(phoneNumber, password);
    if (token) {
      // Redirect to dashboard or home
      router.push("/");
      console.log(phoneNumber);
    } else {
      // Show error
      console.log("an error occured");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      {/* Add form for login */}
      <form onSubmit={handleLogin}>
        <input
          type="number"
          name="phoneNumber"
          id="phoneNumber"
          placeholder="Enter your phone number"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter password"
        />
        <button>Login</button>
      </form>
      <Link href="/register">Register here.</Link>
    </div>
  );
};

export default Login;

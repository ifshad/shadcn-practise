"use client";
// pages/login.js
import { registerUser } from "@/utils/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const phoneNumber = formData.get("phoneNumber");
    const password = formData.get("password");
    const token = registerUser(phoneNumber, password);
    if (token) {
      // Redirect to dashboard or home
      router.push('/')
      console.log(phoneNumber, "authentication successfull");
    } else {
      // Show error
      console.log("an error occured during authentication");
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
        <button>Register</button>
      </form>
      <Link href="/login">Login here.</Link>
    </div>
  );
};

export default Login;

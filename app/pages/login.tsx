import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useUser } from "./userContext";

export default function LoginPage() {
  const { setUsername } = useUser();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const loginInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loginInputRef.current?.focus();
  }, []);

  const handleLoginKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter") {
      e.preventDefault();
      passwordInputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUsername(login);
    navigate("/");
  };

  return (
    <div className="d-flex items-center justify-center bg-white p-5  p-4 sm:p-6 md:p-8">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-8 rounded shadow-md w-full max-w-md border border-secondary sm:max-w-lg md:max-w-xl"
      >
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Sign in to Github
          </h1>
        <label htmlFor="username" className="block mb-2 text-gray-700">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          onKeyDown={handleLoginKeyDown}
          ref={loginInputRef}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          required
          placeholder="Enter your username"
        />

        <label htmlFor="password" className="block mb-2 text-gray-700">
          Password
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordInputRef}
          className="w-full p-2 border border-gray-300 rounded mb-6"
          required
          placeholder="Enter your password"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mt-4"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

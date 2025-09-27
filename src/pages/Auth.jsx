import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // track auth state
  const [user, loading] = useAuthState(auth);

  // if logged in, redirect
  useEffect(() => {
    if (user && !loading) {
      navigate("/home");
    }
  }, [user, loading, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        setMessage("✅ Login successful!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage("🎉 Account created successfully!");
      }
      // navigate handled by useEffect
    } catch (err) {
      setMessage("❌ " + err.message);
    }
  };

  // 👇 Loading screen
  if (loading) {
    return <p>Checking authentication...</p>;
  }

  // 👇 Show login/register form only if no user
  if (!user) {
    return (
      <section className="page">
        <h2>{isLogin ? "Sign In" : "Register"}</h2>
        <form onSubmit={handleSubmit} className="auth-form">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <p>
          {isLogin ? "Don't have an account?" : "Already registered?"}{" "}
          <button onClick={() => setIsLogin(!isLogin)} className="link-btn">
            {isLogin ? "Register here" : "Login here"}
          </button>
        </p>
        <p>{message}</p>
      </section>
    );
  }

  // 👇 If user exists, nothing to show (redirect will trigger)
  return null;
}

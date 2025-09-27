import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth"); // redirect after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  return (
    <section className="page landing">
      <h2>Welcome to IICL Management</h2>
      <p>Loading full experience...</p>
    </section>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.firstName || !form.email || !form.password) {
      return setError("All fields are required.");
    }

    try {
      const res = await axios.post("https://ecomm-back-sbvq.onrender.com/api/auth/register", form);
      
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      
      
      navigate("/");

    } catch (err) {
      console.error(err);
      const msg = err.response?.data?.message || "Registration failed. Please try again.";
      setError(msg);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition"
        >
          Register
        </button>
      </form>

      <p className="text-center mt-4 text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-indigo-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}

export default Register;

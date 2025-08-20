import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Heading from "./components/hading-line";
import UserName from "./components/UserName";
import Email from "./components/Email";
import Password from "./components/Password";
import ConfirmPassword from "./components/ConfirmPassword";
import SignUp_btn from "./components/Sign_btn";
import style from "./components/signUp.module.css";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!username.trim()) newErrors.username = "Please enter your username.";
    if (!email.trim()) newErrors.email = "Please enter your email address.";
    if (!password.trim()) newErrors.password = "Please enter your password.";
    if (!confirmPassword.trim()) newErrors.confirmPassword = "Please confirm your password.";
    if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("/api/signup", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ username, email, password }),
});


  

  if (!response.ok) {
    // Handle HTTP errors
    console.error("Server responded with status:", response.status);
    return;
  }

  const data = await response.json(); // parse JSON safely
  console.log("Signup successful:", data);

} catch (error) {
  console.error("Fetch failed:", error);
}

    }
  };

  return (
    <center>
      <div className={style.container}>
        <form onSubmit={handleSubmit}>
          <Heading />
          <UserName value={username} setValue={setUsername} error={errors.username} />
          <Email value={email} setValue={setEmail} error={errors.email} />
          <Password value={password} setValue={setPassword} error={errors.password} />
          <ConfirmPassword value={confirmPassword} setValue={setConfirmPassword} error={errors.confirmPassword} />
          <SignUp_btn />
        </form>
      </div>
    </center>
  );
}

export default App;

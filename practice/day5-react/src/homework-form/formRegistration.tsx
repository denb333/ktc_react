import React, { useState } from "react";
import './formRegistration.css';

interface Errors {
  [key: string]: string;
}

const RegistrationForm: React.FC = () => {
  /* ---------- State cho input ---------- */
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [hobbies, setHobbies] = useState<string[]>([]);
  const [bio, setBio] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);

  /* ---------- State lỗi ---------- */
  const [errors, setErrors] = useState<Errors>({});

  /* ---------- Regex ---------- */
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* ---------- Xử lý change checkbox ---------- */
  const toggleHobby = (value: string) => {
    setHobbies((prev) =>
      prev.includes(value) ? prev.filter((h) => h !== value) : [...prev, value],
    );
  };

  /* ---------- Validate ---------- */
  const validate = () => {
    const newErr: Errors = {};
    if (fullName.trim().length < 3)
      newErr.fullName = "Full Name must be at least 3 characters";

    if (!emailRegex.test(email)) newErr.email = "Email format is invalid";

    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[a-zA-Z]/.test(password)
    )
      newErr.password = "Password must be at least 8 chars with letters & numbers";

    if (confirmPassword !== password)
      newErr.confirmPassword = "Passwords do not match";

    if (!/^\d{10,}$/.test(phone))
      newErr.phone = "Phone must be digits only and at least 10 digits";

    if (!gender) newErr.gender = "Please select your gender";

    if (!dob) newErr.dob = "Please pick your date of birth";
    else {
      const age = new Date().getFullYear() - new Date(dob).getFullYear();
      if (age < 18) newErr.dob = "You must be at least 18 years old";
    }

    if (!country) newErr.country = "Please select your country";

    if (hobbies.length === 0)
      newErr.hobbies = "Please select at least one hobby";

    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  /* ---------- Submit ---------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Xử lý dữ liệu tuỳ ý, ở đây chỉ reset
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhone("");
      setGender("");
      setDob("");
      setCountry("");
      setHobbies([]);
      setBio("");
      setProfilePic(null);
      setErrors({});
    }
  };

  /* ---------- JSX ---------- */
  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Đăng ký người dùng</h2>

      <label>Full Name</label>
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className={errors.fullName ? "error" : ""}
      />
      <div className="error-message">{errors.fullName}</div>

      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={errors.email ? "error" : ""}
      />
      <div className="error-message">{errors.email}</div>

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={errors.password ? "error" : ""}
      />
      <div className="error-message">{errors.password}</div>

      <label>Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        className={errors.confirmPassword ? "error" : ""}
      />
      <div className="error-message">{errors.confirmPassword}</div>

      <label>Phone Number</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className={errors.phone ? "error" : ""}
      />
      <div className="error-message">{errors.phone}</div>

      <label>Gender</label>
      <div className="gender-group">
        {["Male", "Female", "Other"].map((g) => (
          <label key={g}>
            <input
              type="radio"
              name="gender"
              value={g}
              checked={gender === g}
              onChange={() => setGender(g)}
            />
            {g}
          </label>
        ))}
      </div>
      <div className="error-message">{errors.gender}</div>

      <label>Date of Birth</label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className={errors.dob ? "error" : ""}
      />
      <div className="error-message">{errors.dob}</div>

      <label>Country</label>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className={errors.country ? "error" : ""}
      >
        <option value="">-- Select Country --</option>
        <option>Vietnam</option>
        <option>USA</option>
        <option>UK</option>
      </select>
      <div className="error-message">{errors.country}</div>

      <label>Hobbies</label>
      {["Reading", "Sports", "Music"].map((h) => (
        <div key={h} className="hobby-checkbox">
            {h}
          <input
            type="checkbox"
            name="hobbies"
            value={h}
            checked={hobbies.includes(h)}
            onChange={() => toggleHobby(h)}
          />{" "}
          
        </div>
      ))}
      <div className="error-message">{errors.hobbies}</div>

      <label>Profile Picture (optional)</label>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={(e) => setProfilePic(e.target.files?.[0] ?? null)}
      />

      <label>About You</label>
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        maxLength={300}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;

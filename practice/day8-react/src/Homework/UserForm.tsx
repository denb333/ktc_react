import React from "react";
import './UserForm.css';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const today = new Date();
const minAdultDate = new Date(
  today.getFullYear() - 18,
  today.getMonth(),
  today.getDate()
);
interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
  gender: string;
  dateOfBirth: Date;
  country: string;
  hobbies: string[];
  profilePicture: FileList;
  bio: string;
}

export const userFormSchema = yup.object({
    fullName: yup
      .string()
      .required("Full Name is required")
      .min(3, "Full Name must be at least 3 characters"),
  
    email: yup
      .string()
      .required("Email is required")
      .email("Must be a valid email"),
  
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[A-Za-z]/, "Password must contain letters")
      .matches(/\d/, "Password must contain numbers"),
  
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^\d{10,}$/, "Phone number must be at least 10 digits"),
  
    gender: yup
      .string()
      .required("Gender is required")
      .oneOf(["Male", "Female", "Other"], "Must select gender"),
  
    dateOfBirth: yup
      .date()
      .required("Date of birth is required")
      .max(minAdultDate, "You must be at least 18 years old"),
  
    country: yup
      .string()
      .required("Country is required")
      .notOneOf([""], "Please select a country"),
  
    hobbies: yup
      .array()
      .of(yup.string())
      .min(1, "Select at least one hobby"),
  
      profilePicture: yup
      .mixed<FileList>()
      .notRequired()                      
      .test("fileType", "...", (list) => {
        if (!list || list.length === 0) return true; 
        return ["image/jpeg", "image/png", "image/jpg"].includes(list[0].type);
      }),
  
    bio: yup
      .string()
      .max(300, "Bio must be at most 300 characters")
      .notRequired(),
  });


const UserForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({ resolver: yupResolver(userFormSchema) });
    const currentEmail = watch("email", "");
    
    const onSubmit = (data: FormValues) => {
        console.log("Form hợp lệ:", data);
        // console.log("Form hợp lệ:", data);
        // navigate("/home");
      }


  /* ---------- JSX ---------- */
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Đăng ký người dùng</h2>

      <label>Full Name</label>
      <input
        
        className={errors.fullName ? "error" : ""}
        {...register("fullName")}
      />
      <div className="error-message">{errors.fullName?.message}</div>

      <label>Email</label>
      <input
        type="email"
        className={errors.email ? "error" : ""}
        {...register("email")}
      />
      <div className="error-message">{errors.email?.message}</div>

      <label>Password</label>
      <input
        type="password"
        className={errors.password ? "error" : ""}
        {...register("password")}
      />
      <div className="error-message">{errors.password?.message}</div>

      <label>Confirm Password</label>
      <input
        type="password"
        className={errors.confirmPassword ? "error" : ""}
        {...register("confirmPassword")}
      />
      <div className="error-message">{errors.confirmPassword?.message}</div>

      <label>Phone Number</label>
      <input
        type="tel"
        className={errors.phoneNumber ? "error" : ""}
        {...register("phoneNumber")}
      />
      <div className="error-message">{errors.phoneNumber?.message}</div>

      <label>Gender</label>
      <div className="gender-group">
        {["Male", "Female", "Other"].map((g) => (
          <label key={g}>
            <input
              type="radio"
              value={g}
              {...register("gender")}
            />
            {g}
          </label>
        ))}
      </div>
      <div className="error-message">{errors.gender?.message}</div>

      <label>Date of Birth</label>
      <input
        type="date"
        className={errors.dateOfBirth ? "error" : ""}
        {...register("dateOfBirth")}
      />
      <div className="error-message">{errors.dateOfBirth?.message}</div>

      <label>Country</label>
      <select
        className={errors.country ? "error" : ""}
        {...register("country")}
      >
        <option value="">-- Select Country --</option>
        <option>Vietnam</option>
        <option>USA</option>
        <option>UK</option>
      </select>
      <div className="error-message">{errors.country?.message}</div>

      <label>Hobbies</label>
      {["Reading", "Sports", "Music"].map((h) => (
        <div key={h} className="hobby-checkbox">
            {h}
          <input
            type="checkbox"
            
            value={h}
            {...register("hobbies")}
          />{" "}
          
        </div>
      ))}
      <div className="error-message">{errors.hobbies?.message}</div>

      <label>Profile Picture (optional)</label>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        {...register("profilePicture")}
        className={errors.profilePicture ? "error" : ""}
      />

      <label>About You</label>
      <textarea
        {...register("bio")}
        className={errors.bio ? "error" : ""}
      />

      <button type="submit" disabled={isSubmitting}>Register</button>
    </form>
  );
};

export default UserForm;

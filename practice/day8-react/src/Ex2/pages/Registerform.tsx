import styles from "./Registerform.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useNavigate } from "react-router";

interface FormValues {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    password: string;
    confirmPassword: string;
    termsAgreement: boolean;
    newsletterOptIn: boolean;
  }

export const registerSchema = yup.object({
    firstName: yup
      .string()
      .required("First Name is required")
      .min(2, "First Name must be at least 2 characters"),
  
    lastName: yup
      .string()
      .required("Last Name is required")
      .min(2, "Last Name must be at least 2 characters"),
  
    phoneNumber: yup
      .string()
      .required("Phone Number is required")
      .matches(/^[0-9]{10,15}$/, "Phone Number must be 10–15 digits"),
  
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid email"),
  
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least 1 lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least 1 uppercase letter")
      .matches(/[0-9]/, "Password must contain at least 1 number")
      .matches(/^\S+$/, "Password must not contain spaces"),
  
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  
    termsAgreement: yup
      .boolean()
      .oneOf([true], "You must agree to the terms")
      .required(),
  
    // newsletterOptIn: yup.boolean().notRequired(),
    newsletterOptIn: yup.boolean().required(),
  });

const Register: React.FC = () => {
    const [showPwd, setShowPwd] = useState(false);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({ resolver: yupResolver(registerSchema) });
    const currentEmail = watch("email", "");

    const onSubmit = (data: FormValues) => {
        console.log("Form hợp lệ:", data);
        // navigate("/home");
      }

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.logo}>🎫 Lottery Display</div>
        <h2>A few clicks away from creating your Lottery Display</h2>
        <div className={styles.imageBox}>
          <img src="images/image.png" alt="Display" />
        </div>
      </div>

      <div className={styles.right}>
        <h2>Register</h2>
        <p className={styles.subtitle}>Manage all your lottery efficiently</p>
        <p className={styles.desc}>
          Let’s get you all set up so you can verify your personal account and begin setting up your profile.
        </p>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.row}>
            <div className={styles.firtNameBox}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" placeholder="First Name" {...register("firstName")} />
              <span className={styles.error}>{errors.firstName?.message}</span>
            </div>
            <div className={styles.lastNameBox}>
              <label htmlFor="lastName">Last Name</label>
              <input type="text" placeholder="Last Name" {...register("lastName")} />
              <span className={styles.error}>{errors.lastName?.message}</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.phoneNumberBox}>
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" placeholder="Phone Number" {...register("phoneNumber")} />
              <span className={styles.error}>{errors.phoneNumber?.message}</span>
            </div>
            <div className={styles.emailBox}>
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Email" {...register("email")} />
              <span className={styles.error}>{errors.email?.message}</span>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.passwordBox}>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Password" {...register("password")} />
              <span className={styles.error}>{errors.password?.message}</span>
            </div>
            <div className={styles.confirmPasswordBox}>
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
              <span className={styles.error}>{errors.confirmPassword?.message}</span>
            </div>
          </div>

          <div className={styles.checkboxGroup}>
            <label>
              <input type="checkbox" /> Yes, I want to receive Lottery Display emails
              <span className={styles.error}>{errors.newsletterOptIn?.message}</span>
            </label>
            <label>
              <input type="checkbox" {...register("termsAgreement")} /> I agree to all the <a href="#">Term</a>, <a href="#">Privacy Policy</a> and <a href="#">Fees</a>
              <p className={styles.error}>{errors.termsAgreement?.message}</p>
            </label>
          </div>

          <button className={styles.submitBtn} disabled={isSubmitting}>Create Account</button>

          <p className={styles.loginLink}>
            Already have an account? <a href="#">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;

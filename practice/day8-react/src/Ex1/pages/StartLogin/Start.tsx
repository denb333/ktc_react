import  React from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Start.module.css";

interface FormValues {
  email: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
  })
  .required();

const StartScreen: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const currentEmail = watch("email", "");

  const onSubmit = (data: FormValues) => {
    console.log("Valid form:", data);
    navigate("/login");
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.backBtn}
        aria-label="Back"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft />
      </button>

      <div className={styles.hero} />

      <form
        className={styles.formWrapper}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <h1 className={styles.title}>Hi!</h1>

        <input
          type="email"
          placeholder="Enter your email"
          className={styles.input}
          {...register("email")}
        />
        {errors.email && (
          <span className={styles.error}>{errors.email.message}</span>
        )}

        
        <p className={styles.preview}>{currentEmail}</p>

        <button type="submit" className={styles.primaryBtn} disabled={isSubmitting}>
          Continue
        </button>

        <span className={styles.separator}>or</span>

        <button type="button" className={`${styles.socialBtn} ${styles.facebook}`}>
          <img src="images/fb.jpg" alt="facebook" className={styles.socialIcon} />
          Sign in with Facebook
        </button>
        <button type="button" className={`${styles.socialBtn} ${styles.google}`}>
          <img src="images/gg.jpg" alt="google" className={styles.socialIcon} />
          Sign in with Google
        </button>
        <button type="button" className={`${styles.socialBtn} ${styles.apple}`}>
          <img src="images/ap.jpg" alt="apple" className={styles.socialIcon} />
          Sign in with Apple
        </button>

        <div className={styles.links}>
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
          <Link to="/forgot-password" className={styles.forgot}>
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default StartScreen;
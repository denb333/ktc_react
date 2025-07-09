import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import styles from "./SignUp.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object({
  email: yup.string().email("Invalid email").required("Email is required"),
  password:  yup.string()
  .min(8, "Mật khẩu ít nhất 8 ký tự")
  .required("Mật khẩu bắt buộc"),
  confirmPassword: yup.string()
  .oneOf([yup.ref("password")], "Mật khẩu không khớp")
  .required("Xác nhận mật khẩu bắt buộc"),
});


const SignInScreen: React.FC = () => {
  const [showPwd, setShowPwd] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: yupResolver(schema) });
  const currentEmail = watch("email", "");

  const onSubmit = (data: FormValues) => {
    console.log("Form hợp lệ:", data);
    navigate("/home");
  }
  return (
    <div className={styles.container}>
      <button
        className={styles.backBtn}
        aria-label="Go back"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft size={20} />
      </button>

      <div className={styles.hero} />

      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <h1 className={styles.title}>Sign up</h1>

          <p className={styles.description}>
            Looks like you don't have an account. Let's create a new account for
            <br />
            <span className={styles.highlight}>jane.doe@gmail.com</span>
          </p>

          <input
            type="text"
            placeholder="Email"
            {...register("email")}
            className={styles.input}
            defaultValue=""
          />
          {errors.email && (
            <span className={styles.error}>{errors.email.message}</span>
          )}


          {/* <p className={styles.preview}>{currentEmail}</p> */}

          <div className={styles.passwordGroup}>
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              className={styles.input}
            />
            <button
              type="button"
              className={styles.togglePwd}

              onClick={() => setShowPwd((p) => !p)}
            >
              {showPwd ? "Hide" : "View"}
            </button>
          </div>
          {errors.password && (
            <span className={styles.error}>{errors.password.message}</span>
          )}
          <div className={styles.passwordGroup}>
            <input
              type={showPwd ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword")}
              className={styles.input}
            />
            <button
              type="button"
              className={styles.togglePwd}
              onClick={() => setShowPwd((p) => !p)}
            >
              {showPwd ? "Hide" : "View"}
            </button>
          </div>
          {errors.confirmPassword && (
            <span className={styles.error}>{errors.confirmPassword.message}</span>
          )}
          <p className={styles.agreement}>
            By selecting Agree and continue below, I agree to
            <Link to="#" className={styles.link}> Terms of Service </Link>
            and
            <Link to="#" className={styles.link}> Privacy Policy</Link>
          </p>

          <button className={styles.primaryBtn} disabled={isSubmitting} >Agree and continue</button>
        </form>
      </div>
    </div>
  );
};

export default SignInScreen;
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router";
import styles from "./Login.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useNavigate } from "react-router";


interface FormValues {
    password: string;
}

const schema = yup.object({
    password: yup.string()
        .min(8, "Mật khẩu ít nhất 8 ký tự")
        .required("Mật khẩu bắt buộc"),
});



const LoginScreen: React.FC = () => {
    const [showPwd, setShowPwd] = useState(false);
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<FormValues>({ resolver: yupResolver(schema) });
    const currentPassword = watch("password", "");

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
                <h1 className={styles.title}>Log in</h1>

                <div className={styles.profileBox}>
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="avatar"
                        className={styles.avatar}
                    />
                    <div className={styles.profileText}>
                        <p className={styles.profileName}>Jane Dow</p>
                        <p className={styles.profileEmail}>jane.doe@gmail.com</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.passwordGroup}>
                        <input
                            type={showPwd ? "text" : "password"}
                            placeholder="Password"
                            className={styles.input}
                            {...register("password")}
                        />
                        <button
                            type="button"
                            className={styles.togglePwd}
                            onClick={() => setShowPwd((prev) => !prev)}
                        >
                            {showPwd ? "Hide" : "View"}
                        </button>
                    </div>
                    {errors.password && (
                        <span className={styles.error}>{errors.password.message}</span>
                    )}

                    <button className={styles.primaryBtn} disabled={isSubmitting}>Continue</button>
                </form>

                <div className={styles.links}>
                    <Link to="/forgot-password" className={styles.forgot}>Forgot your password?</Link>
                </div>
            </div>
        </div>
    );
};
export default LoginScreen;
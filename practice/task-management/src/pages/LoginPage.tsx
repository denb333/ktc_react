import styles from '../assets/styles/LoginPage.module.css'
import { useContext } from 'react';
import AuthContext from '../coponents/context';
import * as yup from 'yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '../services';
// import type { User } from '../types/type';

interface IFormInput {
    email: string;
    password: string;
}
const loginSchema = yup.object().shape({
    email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
    password: yup.string().required("Mật khẩu là bắt buộc"),
})


export default function LoginPage() {
    const { user, setUser } = useContext(AuthContext);
    console.log(user);
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IFormInput>({

        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: 'tungnt@softech.vn',
            password: '123456789',
        },
        mode: "onChange",
    });
    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        // console.log('Form hợp lệ:', data);

        const result = await login(data.email, data.password);
        console.log(result);

        const authenticateUser = {
            id: result.loggedInUser.id,
            email: result.loggedInUser.email,
            access_token: result.access_token,
        };

        setUser(authenticateUser);
        // Lưu toàn bộ object user vào localStorage
        localStorage.setItem('user', JSON.stringify(authenticateUser));
        localStorage.setItem('access_token', result.access_token);

        window.location.href = '/ourtask';
    }


    return (
       <div className={styles.container}>
         <div className={styles.box}>
            <div className={styles.form}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Sign in</h2>
                    <div className={styles.inputBox}>
                        <input type="text" required={true} placeholder="Email" {...register("email")} />
                        <span>Email</span>
                        <i></i>
                    </div>
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    <div className={styles.inputBox}>
                        <input type="password" required={true} placeholder="Password" {...register("password")} />
                        <span>Password</span>
                        <i></i>
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                    <div className={styles.links}>
                        <a href="#">Forgot Password</a>
                        <a href="#">Sign up</a>
                    </div>

                    <input type="submit" value="Login" disabled={isSubmitting} />
                </form>
            </div>
        </div>
       </div>
    )
}
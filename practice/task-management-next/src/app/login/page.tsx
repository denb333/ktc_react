// "use client";
// import { useContext, useState } from 'react';
// import * as yup from 'yup';
// import { useForm, type SubmitHandler } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { AuthContext } from '../context';
// import { login } from '../services';
// import { useRouter } from 'next/navigation';

// interface IFormInput {
//   email: string;
//   password: string;
// }

// const loginSchema = yup.object().shape({
//   email: yup.string().email("Email không hợp lệ").required("Email là bắt buộc"),
//   password: yup.string().required("Mật khẩu là bắt buộc"),
// });

// export default function LoginPage() {
//   const { user, setUser } = useContext(AuthContext);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<IFormInput>({
//     resolver: yupResolver(loginSchema),
//     defaultValues: {
//       email: 'tungnt@softech.vn',
//       password: '123456789',
//     },
//     mode: "onChange",
//   });

//   const onSubmit: SubmitHandler<IFormInput> = async (data) => {
//     const result = await login(data.email, data.password);
//     if(result.error || !result.access_token){
//       setError("Sai tài khoản hoặc mật khẩu. Vui lòng thử lại.");
//       return;
//     }
//     setError(null);
    
//     const authenticateUser = {
//       id: result.loggedInUser.id,
//       email: result.loggedInUser.email,
//       access_token: result.access_token,
//     };

//     setUser(authenticateUser);
//     localStorage.setItem('user', JSON.stringify(authenticateUser));
//     localStorage.setItem('access_token', result.access_token);

//     router.push('/dashboard');
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign in</h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
//           <div>
//             <input
//               type="text"
//               {...register("email")}
//               placeholder="Email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//             {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
//           </div>

//           <div>
//             <input
//               type="password"
//               {...register("password")}
//               placeholder="Password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//             />
//             {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>}
//           </div>

//           <div className="flex justify-between text-sm text-blue-600">
//             <a href="#" className="hover:underline">Forgot Password?</a>
//             <a href="#" className="hover:underline">Sign up</a>
//           </div>

//           <button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-300"
//           >
//             {isSubmitting ? "Đang đăng nhập..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

import { LoginForm } from './LoginForm'

import type { Metadata } from 'next'
import { getCsrfToken } from "next-auth/react"

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login desc'
}


export default async function Page() {
  const csrfToken = await getCsrfToken()
    return (
      <div className='max-w-xs mx-auto'>
      <LoginForm csrfToken={csrfToken} />
      </div>
    )
  }

import React, { useEffect, useState } from 'react';
import styles from "../styles/Register.module.css"
import { toast } from 'react-toastify';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { signIn, useSession } from 'next-auth/react';
import { getError } from '../utils/error';
import Head from 'next/head';



const Register = () => {
  //const { data: session } = useSession();
  const [showPassword, setShowPassword] = useState(false)
  const router = useRouter();
  //const { redirect } = router.query;

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (err) {
        toast.error(getError(err));
    }
  };
/*
  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);
*/
    return (
      <div className={styles.container}>

        <Head>
          <title>Register Page</title>
        </Head>
        
        <div className={styles.registerSection}>

          <div className={styles.infoContainer}>
            <Link href="/login">
                <div className={styles.info} >
                    <p>Already an account ?</p>
                    <h3>LOGIN</h3>
                </div>
            </Link>
          </div>

          <form
            className={styles.registerForm}
            onSubmit={handleSubmit(submitHandler)}
          >
            <h1 className={styles.title}>Register</h1>
            <ul className={styles.list}>
              <li>
                <label htmlFor="name"></label><br/>
                <input
                  type="text"
                  className={styles.inputFields}
                  placeholder="Name" 
                  id="name2"
                  autoFocus
                  {...register('name', {
                      
                    minLength: { value: 6, message: 'password is more than 5 chars' },
                  })}
                />
                {errors.name && (
                <div className={styles.error}>{errors.name.message}</div>
                )}
              </li>
              <li>
                <label htmlFor="email" ></label><br/>
                <input
                  className={styles.inputFields}
                  id="email2"
                  placeholder="Email" 
                  type="email"
                  {...register('email', {
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter valid email',
                    },
                  })}
                ></input>
                {errors.email && (
                  <div className={styles.error}>{errors.email.message}</div>
                )}
              </li>
              <li>
                <label htmlFor="password"></label><br/>
                <input
                  className={styles.inputFields}
                  id="password2"
                  placeholder="Password" 
                  autoFocus
                  type={showPassword ? "text" : "password" }
                  {...register('password', {
                      
                      minLength: { value: 6, message: 'password is more than 5 chars' },
                  })}
                  ></input>
                  <div className={styles.eye} onClick={() => setShowPassword(!showPassword)}><Image src="https://res.cloudinary.com/dos8mey8r/image/upload/v1661934715/shoes/eye_nvwepz.png" alt="" width={20} height={20}/></div>
                  {errors.password && (
                  <div className={styles.error}>{errors.password.message}</div>
                  )}
              </li>
              <li>
                <label htmlFor="confirmPassword"></label><br/>
                <input
                  className={styles.inputFields}
                  type={showPassword ? "text" : "password" }
                  id="confirmPassword"
                  placeholder="Password Confirm" 
                  {...register('confirmPassword', {
                    
                      validate: (value) => value === getValues('password'),
                      minLength: {
                      value: 6,
                      message: 'confirm password is more than 5 chars',
                      },
                  })}
                />
                <div className={styles.eye} onClick={() => setShowPassword(!showPassword)}><Image src="https://res.cloudinary.com/dos8mey8r/image/upload/v1661934715/shoes/eye_nvwepz.png" alt="" width={20} height={20}/></div>
                {errors.confirmPassword && (
                <div className={styles.error}>
                    {errors.confirmPassword.message}
                </div>
                )}
                  {errors.confirmPassword &&
                  errors.confirmPassword.type === 'validate' && (
                      <div className={styles.error}>Password do not match</div>
                  )}
              </li>
              <li>
                <button className={styles.joinbtn}>Register</button>    
               </li>
            </ul>
          </form>

       </div>
     </div>
    );
};

export default Register;
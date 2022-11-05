import React, { useEffect, useState } from 'react';
import styles from "../styles//Login.module.css"
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { getError } from '../utils/error';
import Head from 'next/head';

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const { data: session } = useSession();
  const router = useRouter();
  const { redirect } = router.query;
    
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
    
  const submitHandler = async ({ email, password }) => {  
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    }catch (err) {
      toast.error(getError(err));
    }
  }

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);
  
  return (
      <div className={styles.container}>

        <Head>
          <title>Login Page</title>
        </Head>

        <div className={styles.signupSection}>

          <div className={styles.infoContainer}>
              <Link href="/register">
                  <div className={styles.info} >
                      <p>Not an account yet ?</p>
                      <h3>REGISTER</h3>
                  </div>
              </Link>
          </div>

          <form
            className={styles.signupForm}
            onSubmit={handleSubmit(submitHandler)}
          >
            <h1 className={styles.title}>Login</h1>
            <ul className={styles.list}>
              <li>
                <label htmlFor="email" ></label><br/>
                <input
                  type="email"
                  {...register('email', {
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                      message: 'Please enter valid email',
                    },
                  })}
                  className={styles.inputFields}
                  id="email"
                  placeholder="Email" 
                ></input>
                  {errors.email && (
                    <div className={styles.error}>{errors.email.message}</div>
                  )}
              </li>
              <li>
                <label htmlFor="password"></label><br/>
                <input
                type={showPassword ? "text" : "password" }
                {...register('password', {
                    minLength: { value: 6, message: 'password is more than 5 chars' },
                })}
                className={styles.inputFields}
                id="password2"
                placeholder="Password" 
                autoFocus
                ></input>
                <div className={styles.eye} onClick={() => setShowPassword(!showPassword)}><Image src="https://res.cloudinary.com/dos8mey8r/image/upload/v1661934715/shoes/eye_nvwepz.png" alt="" width={20} height={20} layout="fixed"/></div>
                  {errors.password && (
                  <div className={styles.error}>{errors.password.message}</div>
                  )}
              </li>
              <li>
                  <button className={styles.joinbtn}>Login</button>
              </li>    
            </ul>

            <div className={styles.or}>OR</div>

            <div className={styles.googleContainer}>
              <div className={styles.btnGoogle} onClick={() => signIn("google")}>
                <div className={styles.imgContainer}>
                  <Image className={styles.googleImg} src="https://res.cloudinary.com/dos8mey8r/image/upload/v1663403416/shoes/google-icon_rndctb.png" alt="google connexion" width={30} height={30} layout="fixed"/>
                </div>
                <div>Google</div>
              </div>
            </div>

            <div className={styles.googleContainer}>
              <div className={styles.btnGithub} onClick={() => signIn("github")}>
                <div className={styles.imgContainer}>
                  <Image className={styles.googleImg} src="https://res.cloudinary.com/dos8mey8r/image/upload/v1663405518/shoes/git-icon_wjjmym.png" alt="google connexion" width={30} height={30} layout="fixed"/>
                </div>
                <div>GitHub</div>
              </div>
            </div>
          </form>

        </div>
      </div>
    );
};

export default Login;
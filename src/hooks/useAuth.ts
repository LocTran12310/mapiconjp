import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DEV_ENV, USERS_DATA } from '../constants/base.constants';

const useAuth = (redirect: boolean = true) => {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const isTokenExist = USERS_DATA.find(x => x.token === token);
    const host = window.location.host;
    const isDevEnv = DEV_ENV.some(env => host.includes(env))
    if (isDevEnv && !isTokenExist) {
      const username = prompt("Please enter your username", "");
      if (username == null || username == "") {
        router.push('/401');
        return;
      }
      const password = prompt("Please enter your password", "");
      if (password == null || password == "") {
        router.push('/401');
        return;
      }
      const user = USERS_DATA.find(x => x.username === username && x.password === password);
      if (!user) {
        router.push('/401')
        return;
      }
      localStorage.setItem('token', user.token)
      router.push('/')
      return;
    }
  }, []);

  return { isLoggedIn };
};

export default useAuth;

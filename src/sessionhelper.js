// SessionHelper.js
export const getSession = () => {
    return {
      username: sessionStorage.getItem('username'),
      email: sessionStorage.getItem('email'),
    };
  };
  
  export const setSession = (username, email) => {
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
  };
  
  export const clearSession = () => {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
  };
  
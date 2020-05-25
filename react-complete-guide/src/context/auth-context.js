import React, { createContext } from 'react';

const authContext = createContext({
  authenticated: false,
  login: () => {},
});

export default authContext;
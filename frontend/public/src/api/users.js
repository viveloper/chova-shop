import { request } from './request.js';

export const login = async ({ email, password }) => {
  try {
    const result = await request(`/api/users/login`, 'POST', {
      email,
      password,
    });
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const register = async ({ name, email, password }) => {
  try {
    const result = await request(`/api/users`, 'POST', {
      name,
      email,
      password,
    });
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const updateUserProfile = async (token, { name, email, password }) => {
  try {
    const result = await request(
      `/api/users/profile`, 
      'PUT', 
      {
        name,
        email,
        password,
      },
      token
    );
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const fetchUsers = async (token) => {
  try {
    const result = await request(
      `/api/users`, 
      'GET', 
      null,
      token
    );
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const deleteUser = async (token, { id }) => {
  try {
    const result = await request(
      `/api/users/${id}`,
      'DELETE', 
      null,
      token
    );
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const updateUser = async (token, { id, name, email, isAdmin }) => {
  try {
    const result = await request(
      `/api/users/${id}`,
      'PUT', 
      { id, name, email, isAdmin },
      token
    );
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};

export const fetchUser = async (token, { id }) => {
  try {
    const result = await request(
      `/api/users/${id}`, 
      'GET', 
      null,
      token
    );
    return {
      isError: false,
      data: result,
    };
  } catch (e) {
    return {
      isError: true,
      data: e,
    };
  }
};
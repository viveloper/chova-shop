import { request } from './request.js';

export const createOrder = async (token, order) => {
  try {
    const result = await request(
      `/api/orders`, 
      'POST', 
      order,
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

export const fetchOrder = async (token, id) => {
  try {
    const result = await request(
      `/api/orders/${id}`, 
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

export const payOrder = async (token, payInfo) => {
  try {
    const result = await request(
      `/api/orders/${payInfo.id}/pay`, 
      'PUT', 
      payInfo,
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

export const markDeliveredOrder = async (token, id) => {
  try {
    const result = await request(
      `/api/orders/${id}/deliver`, 
      'PUT', 
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

export const fetchMyOrders = async (token) => {
  try {
    const result = await request(
      `/api/orders/myorders`, 
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

export const fetchOrders = async (token) => {
  try {
    const result = await request(
      `/api/orders`, 
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
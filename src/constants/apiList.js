const prefix = "/v1";
const apiList = {
  AUTH: {
    LOGIN: {
      method: "POST",
      url: `${prefix}/auth/login-admin`,
    },
    LOGOUT: {
      method: "POST",
      url: `${prefix}/auth/logout-admin`,
    },
    UPDATE_PROFILE: {
      method: "PUT",
      url: `${prefix}/auth/edit`,
    },
    FORGOT_PASSWORD: {
      method: "POST",
      url: `${prefix}/auth/forgot-password`,
    },
    RESET_PASSWORD: {
      method: "POST",
      url: `${prefix}/auth/reset-password`,
    },
  },
  USERS:{
    GET_ALL: {
      method: "POST",
      url: `${prefix}/user/getAllUsers`,
    },
    GET_BY_ID: {
      method: "GET",
      url: `${prefix}/user/:id`,
    },
  },
  APPOINTMENTS: {
    GET_ALL: {
      method: "POST",
      url: `${prefix}/appointment/getAllAppointments`,
    },
    GET_BY_ID: {
      method: "GET",
      url: `${prefix}/appointment/:id`,
    },
  },
  DASHBOARD: {
    GET_STATS: {
      method: "GET",
      url: `${prefix}/dashboard/stats`,
    },
  },
};

export default apiList;

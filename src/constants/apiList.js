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
  },
  APPOINTMENTS: {
    GET_ALL: {
      method: "POST",
      url: `${prefix}/appointment/getAllAppointments`,
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

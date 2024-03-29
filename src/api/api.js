import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "23ed3f25-bbb1-4929-8821-e3e0b0fc8c63",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  requestUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },

  follow(user) {
    return instance
      .post(`follow/${user.id}`, {})
      .then((response) => response.data);
  },

  unfollow(user) {
    return instance
      .delete(`follow/${user.id}`)
      .then((response) => response.data);
  },

  getProfile(userId) {
    return profileAPI.getProfile(userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },

  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },

  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },

  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, { email, password, rememberMe, captcha });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`);
  },
};

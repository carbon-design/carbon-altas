import { Axios } from "~/plugins/requester";

export const API = {
  login: "/carbon/mock/login.json",
  channel: "/carbon/mock/channel.json",
  assets: "/carbon/mock/assets.json",
  home: "/carbon/mock/home.json",
  address: "/carbon/mock/address.json",
  images: "/carbon/mock/images.json"
};

export const getCode = () =>
  Axios({
    method: "post",
    url: API.queryCode,
    data: {
      actionFlag: "0",
      areaCode: "00"
    }
  });

export const getLogin = () => {
  return Axios({
    method: "get",
    url: API.login
  });
};

export const getHome = () => {
  return Axios({
    method: "get",
    url: API.home
  });
};

export const getLessons = () => {
  return Axios({
    method: "get",
    url: API.channel
  });
};

export const getAssets = () => {
  return Axios({
    method: "get",
    url: API.assets
  });
};

export const getAddress = () => {
  return Axios({
    method: "get",
    url: API.address
  });
};

export const getImages = () => {
  return Axios({
    method: "get",
    url: API.images
  });
};

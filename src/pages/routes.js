import Index from "./index/";
import User from "./user/";
import films from "./films/routes";

// в каждой ноде: либо component, либо childs
// в каждой папке: либо текущая страница, либо все дети

export default {
  index: {
    route: "/",
    name: 'index',
    component: Index
  },
  films: {
    route: "/films",
    childs: films
  },
  user: {
    route: "/user",
    name: 'user',
    component: User
  }
};
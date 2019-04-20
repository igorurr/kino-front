import { createEnv } from "../../helpers/Environment";

import Actions from "./actions";
import Data from "./data";
import Api from "./api";

export const withFilms = createEnv( Data, Actions, Api, 'films' );
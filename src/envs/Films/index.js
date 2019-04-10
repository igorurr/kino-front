import { createEnv } from "../../helpers/Environment";

import Actions from "./actions";
import Data from "./data";

export const withFilms = createEnv( Data, Actions, 'films' );
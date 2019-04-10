import { createEnv } from "../../helpers/Environment";

import Actions from "./actions";
import Data from "./data";

export const withKino = createEnv( Data, Actions, 'kino' );
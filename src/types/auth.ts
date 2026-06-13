/** Authenticated user. reqres.in's login only returns a token, so the user is
 *  synthesized from the credentials entered at login time. */
export interface AuthUser {
  email: string;
  name: string;
  avatar?: string;
}

/** Request body for POST /api/login */
export interface LoginCredentials {
  email: string;
  password: string;
}

/** Diagnostic metadata reqres.in attaches to most responses. */
export interface ReqResMeta {
  powered_by: string;
  docs_url: string;
  upgrade_url: string;
  example_url: string;
  variant: string;
  message: string;
  cta: {
    label: string;
    url: string;
  };
  context: string;
}

/** Successful response from POST /api/login */
export interface LoginResponse {
  token: string;
  _meta?: ReqResMeta;
}

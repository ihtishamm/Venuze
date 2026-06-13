/**
 * User types for the reqres.in users API.


/** Raw user object as returned by reqres (snake_case). */
export interface ReqresUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

/** Normalised domain user used throughout the UI. */
export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
}

/** GET /api/users?page= */
export interface UsersListResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ReqresUser[];
}

/** GET /api/users/{id} */
export interface SingleUserResponse {
  data: ReqresUser;
}

/** Request body for POST /api/users and PUT /api/users/{id}. */
export interface UserMutationDto {
  name: string;
  job: string;
}

/** Response from POST /api/users. */
export interface CreateUserResponse {
  id: string;
  name: string;
  job: string;
  createdAt: string;
}

/** Response from PUT /api/users/{id}. */
export interface UpdateUserResponse {
  name: string;
  job: string;
  updatedAt: string;
}

/**
 * Form/mutation input shared by the Add and Edit flows. We collect the fields
 * the UI displays; the API layer maps these to the `{ name, job }` write DTO.
 */
export interface UserInput {
  firstName: string;
  lastName: string;
  email: string;
  job?: string;
}

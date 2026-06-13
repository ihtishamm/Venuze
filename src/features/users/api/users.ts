import api from '@/lib/axios';
import type {
  CreateUserResponse,
  ReqresUser,
  SingleUserResponse,
  UpdateUserResponse,
  User,
  UserMutationDto,
  UsersListResponse
} from '@/types/user';

/** Normalise a raw reqres user into our camelCase domain shape. */
export function mapUser(user: ReqresUser): User {
  return {
    id: user.id,
    email: user.email,
    firstName: user.first_name,
    lastName: user.last_name,
    avatar: user.avatar
  };
}

export async function getAllUsers(): Promise<User[]> {
  const { data: firstPage } = await api.get<UsersListResponse>('/users', {
    params: { page: 1 }
  });

  const remainingPages =
    firstPage.total_pages > 1
      ? await Promise.all(
          Array.from({ length: firstPage.total_pages - 1 }, (_, i) =>
            api
              .get<UsersListResponse>('/users', { params: { page: i + 2 } })
              .then((res) => res.data.data)
          )
        )
      : [];

  return [...firstPage.data, ...remainingPages.flat()].map(mapUser);
}

/** GET /api/users/{id} */
export async function getUser(id: number): Promise<User> {
  const { data } = await api.get<SingleUserResponse>(`/users/${id}`);
  return mapUser(data.data);
}

/** POST /api/users */
export async function createUser(
  dto: UserMutationDto
): Promise<CreateUserResponse> {
  const { data } = await api.post<CreateUserResponse>('/users', dto);
  return data;
}

/** PUT /api/users/{id} */
export async function updateUser(
  id: number,
  dto: UserMutationDto
): Promise<UpdateUserResponse> {
  const { data } = await api.put<UpdateUserResponse>(`/users/${id}`, dto);
  return data;
}

/** DELETE /api/users/{id} */
export async function deleteUser(id: number): Promise<void> {
  await api.delete(`/users/${id}`);
}

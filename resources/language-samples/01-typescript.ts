type ApiResponse<T> = Promise<{ data: T; status: number }>;

interface UserProfile {
  id: string;
  roles: readonly string[];
  email?: string;
}

const buildLabel = (user: UserProfile, env = process.env.NODE_ENV ?? 'dev'): string =>
  `${user.id}:${user.roles.join('|')}:${env}`;

export async function fetchUser(id: string): ApiResponse<UserProfile> {
  try {
    const response = await fetch(`/api/users/${id}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return { data: (await response.json()) as UserProfile, status: response.status };
  } catch (error) {
    console.warn('using fallback user', { id, error });
    return { data: { id, roles: ['guest'] }, status: 200 };
  }
}

console.log(buildLabel({ id: 'alice', roles: ['admin', 'ops'] }));

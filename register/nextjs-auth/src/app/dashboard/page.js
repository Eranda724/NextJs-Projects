import { cookies } from 'next/headers';

export default function Dashboard() {
  const userCookie = cookies().get('user');
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <p>This is your dashboard.</p>
    </div>
  );
}
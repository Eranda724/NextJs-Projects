import { cookies } from 'next/headers';

export default function Dashboard() {
  const userCookie = cookies().get('user');
  const user = userCookie ? JSON.parse(userCookie.value) : null;

  if (!user) {
    return <p>incorrect</p>;
  }

  return (
    <div>
      <h1>Welcome</h1>
      <p>Hi!, {user.username}</p>
    </div>
  );
}
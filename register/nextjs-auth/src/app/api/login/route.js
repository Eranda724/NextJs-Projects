import pool from '@/lib/db';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return Response.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return Response.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    cookies().set('user', JSON.stringify({ id: user.id, email: user.email }), { maxAge: 60 * 60 * 24 });
    return Response.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Error logging in' }, { status: 500 });
  }
}
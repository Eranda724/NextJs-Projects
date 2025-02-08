import pool from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function POST(request) {
  const { username, email, password } = await request.json();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await pool.query(
      'INSERT INTO users (username, email, password, details) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, '']
    );
    return Response.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return Response.json({ message: 'Error registering user' }, { status: 500 });
  }
}
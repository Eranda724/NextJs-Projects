import pool from '@/lib/db';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (rows.length === 0) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 400 });
    }

    const userCookies = await cookies();
    userCookies.set('user', JSON.stringify({ id: user.id, email: user.email }), { maxAge: 60 * 60 * 24 });
    return NextResponse.json({ message: 'Login successful' }, { status: 200 });
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json({ message: 'Error logging in' }, { status: 500 });
  }
}
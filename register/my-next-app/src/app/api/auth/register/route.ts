import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const connection = await pool.getConnection();
    const [rows] = await connection.query("SELECT * FROM users WHERE email = ?", [email]);
    connection.release();

    if ((rows as any[]).length > 0) {
      return NextResponse.json({ message: "Email already exists!" }, { status: 400 });
    }

    await pool.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword]);

    return NextResponse.json({ message: "User registered successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

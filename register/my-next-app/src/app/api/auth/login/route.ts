import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import pool from "@/lib/db";
import { RowDataPacket } from "mysql2";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const connection = await pool.getConnection();
    const [rows] = await connection.query<RowDataPacket[]>("SELECT * FROM users WHERE email = ?", [email]);
    connection.release();

    if (rows.length === 0) {
      return NextResponse.json({ message: "User not found!" }, { status: 404 });
    }

    const user = rows[0] as { email: string; password: string };
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: "Incorrect password!" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful!", user }, { status: 200 });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
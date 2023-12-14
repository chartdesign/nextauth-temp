import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
// import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(request) {
  const body = await request.json();
  const { name, email, password } = body.data;

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Please fill in all fields" },
      { status: 400 }
    );
  }

  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: { name, email, hashedPassword },
  });

  return NextResponse.json(user);

  //   const { name, email, password } = await request.json();

  //   const user = await prisma.user.findUnique({
  //     where: { email },
  //   });

  //   if (!user) {
  //     return NextResponse.json({ error: "User not found" }, { status: 400 });
  //   }

  //   const isPasswordValid = await bcrypt.compare(password, user.password);

  //   if (!isPasswordValid) {
  //     return NextResponse.json({ error: "Invalid password" }, { status: 400 });
  //   }

  //   const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
  //     expiresIn: "1h",
  //   });

  //   return NextResponse.json({ token });
}

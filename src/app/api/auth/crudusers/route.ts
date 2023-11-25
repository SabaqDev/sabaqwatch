import { NextResponse } from "next/server"
import bcrypt from "bcrypt"
import db from "@/libs/db"

export  function GET() {
  const data = "devolver todos los usuarios"
  return NextResponse.json(data)
}

export  async function POST(req) {
  try{
    const data = await req.json()
  const userFound = await db.users.findUnique({
    where: { name: data.name }
  })
  if (userFound) {
    return NextResponse.json(
      { message: "Usuario ya existe" },
      { status: 400}
    )
  }
    
  const passwordhash = await bcrypt.hash(data.password, 8) 
  const newUser = await db.users.create({data:{
    name: data.name,
    password: passwordhash
  }})
  return NextResponse.json(data.name)
  }
  catch (error) {
    return NextResponse.json(
      {message: error.message,},
      {status: 500,},
    )
  }
}

export  function DELETE() {
  const data = "Borrar usuario"
  return NextResponse.json(data)
}

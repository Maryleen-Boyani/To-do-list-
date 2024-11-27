// import fs from "fs";//it provides access to the file system
import {NextResponse} from "next/server";
import path from "path";
import prisma from "../../../../lib/prisma";


const filePath= path.resolve("src", "todos.json");
console.log(filePath);

async function readTodos(){
    const todos= await prisma.todo.findMany();
    return todos;
};
//writes the stringified todos to the filepath provided
export default async function writeTodos(todos){
  await prisma.todo.create({
    data:{
      title: todos.title,
    }
  })
  return writeTodos;
};

export async function GET() {
  const todos = await readTodos();
  return NextResponse.json(todos);
}
export async function POST(request) {
  const requestBody = await request.json();
  const { title } = requestBody;
  const newTodo = { id: Date.now(), title };
  writeTodos(newTodo);
  return NextResponse.json(newTodo);
}
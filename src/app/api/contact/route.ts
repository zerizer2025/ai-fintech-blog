import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const messagesFile = path.join(process.cwd(), 'messages.json');

export async function POST(req: NextRequest) {
  const data = await req.json();
  const { name, email, message } = data;

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const newMessage = {
    name,
    email,
    message,
    timestamp: new Date().toISOString(),
  };

  try {
    const existing = fs.existsSync(messagesFile)
      ? JSON.parse(fs.readFileSync(messagesFile, 'utf-8'))
      : [];

    existing.push(newMessage);
    fs.writeFileSync(messagesFile, JSON.stringify(existing, null, 2));

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}

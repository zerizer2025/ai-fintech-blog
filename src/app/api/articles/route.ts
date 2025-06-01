import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Article from '@/models/article';

// POST: إضافة مقال جديد
export async function POST(request: Request) {
  try {
    const { title, content } = await request.json();
    await connectToDatabase();
    const newArticle = await Article.create({ title, content });
    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    console.error('❌ Error creating article:', error);
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}

// GET: جلب جميع المقالات
export async function GET() {
  try {
    await connectToDatabase();
    const articles = await Article.find().sort({ createdAt: -1 });
    return NextResponse.json(articles);
  } catch (error) {
    console.error('❌ Error fetching articles:', error);
    return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
  }
}

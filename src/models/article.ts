import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IArticle extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const ArticleSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default models.Article || model<IArticle>('Article', ArticleSchema);

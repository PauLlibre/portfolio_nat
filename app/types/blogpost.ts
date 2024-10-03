export interface BlogPost {
    id: number;
    Title: string;
    Content: {
      type: string;
      children: Array<{ text: string }>;
    }[];
    Date: string;
    Excerpt: string;
    Slug: string;
    CoverImage: {
      formats: {
        thumbnail: {
          url: string;
        }
      },
      url: string;
    }
  }
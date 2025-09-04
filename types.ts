export interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  imageUrl: string;
  snippet: string;
  content: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}

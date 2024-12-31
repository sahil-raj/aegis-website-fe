// types/TeamMember.ts
export interface TeamMember {
  id: number;
  first_name: string;
  last_name: string;
  pet_name?: string;
  team: string;
  description: string;
  tags: string[];
  email: string;
  linkedin?: string;
  github?: string;
  image?: string;
  role: string;
  created_at: string;
}

export class Employee {
  id: number | undefined;
  first_tName: string | undefined;
  last_Name: string | undefined;
  emailId: string | undefined;
}


export class Comic {
  id: number | undefined;
  name: string | undefined;
  author: string | undefined;
  nation: string | undefined;
  category: string | undefined;
  date_created: string | undefined;
  cover_image: string | undefined;
  description: string | undefined;
  listChapter: Chapter[] | undefined;
  listComment: Comment[] | undefined;
  listLikes: Like[] | undefined;


}

export class Chapter{
  id: number | undefined;
  name: string | undefined;
  date_created: string | undefined;
  content: string | undefined;
  listComment: Comment[] | undefined;
}

export class Comment{
  id: number | undefined;
  content: string | undefined;
  date_created: string | undefined;
}
export class Like{
  id: number | undefined;
}

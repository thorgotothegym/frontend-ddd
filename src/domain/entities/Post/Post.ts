export type PostConstructorArgs = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default class Post {
  readonly userId: number;
  readonly id: number;
  readonly title: string;
  readonly completed: boolean;

  constructor({ completed, id, title, userId }: PostConstructorArgs) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

import {Chapter} from "./chapter";
export class Book {
  constructor(
    public title: string,
    public cover: string,
    public author: string,
    public description: string,
    public chapters: Chapter[]) {};
}

import Category from "./Category";
import ThreadItem from "./ThreadItem";

export default class Thread {
  constructor(
    id,
    views,
    title,
    body,
    userName,
    userId,
    points,
    createdOn,
    lastModifiedOn,
    threadItems,
    category
  ) {
    this.id = id;
    this.views = views;
    this.title = title;
    this.body = body;
    this.userName = userName;
    this.userId = userId;
    this.points = points;
    this.createdOn = createdOn;
    this.lastModifiedOn = lastModifiedOn;
    this.threadItems = threadItems;
    this.category = category;
  }
}

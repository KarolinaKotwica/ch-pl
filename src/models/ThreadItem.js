import Thread from "./Thread";

export default class ThreadItem {
  constructor(id, views, points, body, userName, userId, createdOn, threadId) {
    this.id = id;
    this.views = views;
    this.points = points;
    this.body = body;
    this.userName = userName;
    this.userId = userId;
    this.createdOn = createdOn;
    this.threadId = threadId;
  }
}

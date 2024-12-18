import Category from "../models/Category";
import CategoryThread from "../models/CategoryThread";
import Thread from "../models/Thread";

export async function getCategories() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      const categories = [];
      const Informacje = new Category("1", "Informacje");
      categories.push(Informacje);
      const Wydarzenia = new Category("2", "Wydarzenia");
      categories.push(Wydarzenia);
      const Nieruchomosci = new Category("3", "Nieruchomosci");
      categories.push(Nieruchomosci);
      const OfertyPracy = new Category("4", "Oferty Pracy");
      categories.push(OfertyPracy);
      const FirmyUslugi = new Category("5", "Firmy i uslugi");
      categories.push(FirmyUslugi);
      // const lekarze = new Category("5", "Lekarze");
      // categories.push(lekarze);
      const Przejazdy = new Category("5", "Przejazdy");
      categories.push(Przejazdy);
      const PytaniaPomoc = new Category("5", "Pytania i pomoc");
      categories.push(PytaniaPomoc);

      res(categories);
    }, 2000);
  });
  return promise;
}

export async function getThreadsByCategory(catId) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      const threads = [];
      threads.push({
        id: "1",
        views: 22,
        title: "Thread 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Informacje"),
      });
      threads.push({
        id: "2",
        views: 2,
        title: "Thread 2",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "tim",
        userId: "2",
        points: 55,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "2",
          },
        ],
        category: new Category("1", "Informacje"),
      });

      res(threads);
    }, 2000);
  });
  return promise;
}

export async function getTopCategories() {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      const topCategories = [];
      const js = new CategoryThread(
        "1",
        "Programming",
        "How can I learn JavaScript"
      );
      topCategories.push(js);
      const node = new CategoryThread(
        "2",
        "Programming",
        "How can I learn Node"
      );
      topCategories.push(node);
      const react = new CategoryThread(
        "3",
        "Programming",
        "How can I learn React"
      );
      topCategories.push(react);
      const french = new CategoryThread(
        "4",
        "Cooking",
        "How do I learn French cuisine?"
      );
      topCategories.push(french);
      const italian = new CategoryThread(
        "5",
        "Cooking",
        "How do I learn Italian cuisine?"
      );
      topCategories.push(italian);
      const soccer = new CategoryThread(
        "6",
        "Sports",
        "How can I learn to play Soccer"
      );
      topCategories.push(soccer);
      const basketball = new CategoryThread(
        "7",
        "Sports",
        "How can I learn to play Basketball"
      );
      topCategories.push(basketball);
      const baseball = new CategoryThread(
        "8",
        "Sports",
        "How can I learn to play Baseball"
      );
      topCategories.push(baseball);

      res(topCategories);
    }, 2000);
  });
  return promise;
}

export async function getThreadById(Id) {
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      const thread = {
        id: "1",
        views: 22,
        title: "Thread 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
          {
            id: "2",
            views: 11,
            points: 14,
            body: "ThreadItem 2",
            userName: "linda",
            userId: "4",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Informacje"),
      };

      res(thread);
    }, 2000);
  });
  return promise;
}

export async function getUserThreads(id) {
  const result = new Promise((res) => {
    setTimeout(() => {
      const threads = [];
      threads.push({
        id: "1",
        views: 22,
        title: "Thread 1",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "dave",
        userId: "1",
        points: 11,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "1",
          },
        ],
        category: new Category("1", "Informacje"),
      });
      threads.push({
        id: "2",
        views: 2,
        title: "Thread 2",
        body:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        userName: "tim",
        userId: "2",
        points: 55,
        createdOn: new Date(),
        lastModifiedOn: new Date(),
        threadItems: [
          {
            id: "1",
            views: 22,
            points: 2,
            body: "ThreadItem 1",
            userName: "jon",
            userId: "2",
            createdOn: new Date(),
            threadId: "2",
          },
        ],
        category: new Category("1", "Informacje"),
      });

      res(threads);
    }, 2000);
  });
  return result;
}

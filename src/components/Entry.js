import React, { useEffect, useState } from "react";
import MainHeader from "./MainHeader";
import { useParams } from "react-router-dom";
import ThreadCard from "./areas/main/ThreadCard";
import { getThreadsByCategory } from "../services/DataService";

const Entry = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState();
  const [threadCards, setThreadCards] = useState(null);

  useEffect(() => {
    console.log("main categoryId", categoryId);

    if (categoryId && categoryId > 0) {
      getThreadsByCategory(categoryId).then((threads) => {
        console.log("Fetched threads:", threads);
        const cards = threads.map((th) => {
          return <ThreadCard key={`thread-${th.id}`} thread={th} />;
        });
        if (!category) {
            console.log("Setting category to:", threads[0].category);
          setCategory(threads[0].category);
        }
        setThreadCards(cards);
      });
    }
  }, [categoryId]);

  return (
    <main className="content">
      <MainHeader category={category} />
      <div>{threadCards}</div>
    </main>
  );
};

export default Entry;

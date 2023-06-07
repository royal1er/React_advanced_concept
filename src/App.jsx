import { useState } from "react";
import s from "./App.module.css";
import { ImageList } from "./components/ImageList/ImageList";
import { useScrollPosition } from "./hooks/useScrollPosition";
import axios from "axios";
import { useEffect } from "react";

export function App() {
  const [imageList, setImageList] = useState([]);
  const { isBottom } = useScrollPosition();
  const [pagetoFetch, setPageToFetch] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImagesByPage(pagetoFetch);
  }, [pagetoFetch]);

  useEffect(() => {
    if (isBottom) {
      incrementPage();
    }
  }, [isBottom]);

  async function fetchImagesByPage(page) {
    setIsLoading(true);
    const { data } = await axios(
      `https://picsum.photos/v2/list?page=${page}&limit=5`
    );
    setImageList([...imageList, ...data]);
    setIsLoading(false);
  }

  function incrementPage() {
    setPageToFetch(pagetoFetch + 1);
  }

  return (
    <div className={s.root}>
      <h1>Rand'images</h1>
      <h2>Télécharge des images open sources aléatoires</h2>
      <ImageList imageList={imageList} />
      {isLoading && <div className="spinner-border" role="status" />}
    </div>
  );
}

/*
const DATA = [
  {
    id: "0",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/yC-Yzbqy7PY",
    download_url: "https://picsum.photos/id/0/5000/3333",
  },
  {
    id: "1",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/LNRyGwIJr5c",
    download_url: "https://picsum.photos/id/1/5000/3333",
  },
  {
    id: "2",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/N7XodRrbzS0",
    download_url: "https://picsum.photos/id/2/5000/3333",
  },
  {
    id: "3",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/Dl6jeyfihLk",
    download_url: "https://picsum.photos/id/3/5000/3333",
  },
  {
    id: "4",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/y83Je1OC6Wc",
    download_url: "https://picsum.photos/id/4/5000/3333",
  },
  {
    id: "5",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3334,
    url: "https://unsplash.com/photos/LF8gK8-HGSg",
    download_url: "https://picsum.photos/id/5/5000/3334",
  },
  {
    id: "6",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/tAKXap853rY",
    download_url: "https://picsum.photos/id/6/5000/3333",
  },
  {
    id: "7",
    author: "Alejandro Escamilla",
    width: 4728,
    height: 3168,
    url: "https://unsplash.com/photos/BbQLHCpVUqA",
    download_url: "https://picsum.photos/id/7/4728/3168",
  },
  {
    id: "8",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3333,
    url: "https://unsplash.com/photos/xII7efH1G6o",
    download_url: "https://picsum.photos/id/8/5000/3333",
  },
  {
    id: "9",
    author: "Alejandro Escamilla",
    width: 5000,
    height: 3269,
    url: "https://unsplash.com/photos/ABDTiLqDhJA",
    download_url: "https://picsum.photos/id/9/5000/3269",
  },
];
*/

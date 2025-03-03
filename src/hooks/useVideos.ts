import { useDataVideo } from "@/context/useDataVideo";
import { VideoData } from "@/Interface/video";
import { useState } from "react";

const UseDataVideo = () => {
  const { data, setData } = useDataVideo();
  const [search, setSearch] = useState<string>("");

  const searchVideo = (videoTitle: string) => {
    const searchLower = search.toLocaleLowerCase();
    if (searchLower === "") return true;
    const titleLower = videoTitle.toLocaleLowerCase();
    return titleLower.includes(searchLower);
  };

  const isSearching = () => {
    return search !== "";
  };

  const concatArray = (
    data1: VideoData[] | undefined,
    data2: VideoData[] | undefined
  ): VideoData[] | undefined => {
    if (data1 && data2) {
      const data = data1.concat(data2);

      return data.filter(
        (video, index, self) =>
          index === self.findIndex((v) => v.title === video.title)
      );
    } else if (data1) return data1;
    else if (data2) return data2;
    return undefined;
  };

  const getTrending = (): VideoData[] | undefined => {
    return data?.filter((x) => x.isTrending && searchVideo(x.title));
  };

  const getMovies = () => {
    return data?.filter((x) => x.category === "Movie" && searchVideo(x.title));
  };

  const getSeries = () => {
    return data?.filter(
      (x) => x.category === "TV Series" && searchVideo(x.title)
    );
  };

  const getBookMarkMovies = () => {
    return data?.filter(
      (x) => x.isBookmarked && x.category === "Movie" && searchVideo(x.title)
    );
  };

  const getBookMarkSeries = () => {
    return data?.filter(
      (x) =>
        x.isBookmarked && x.category === "TV Series" && searchVideo(x.title)
    );
  };

  const getRecommended = () => {
    if (!data) return;
    return [...data]
      .sort((a, b) => b.year - a.year)
      .filter((x) => searchVideo(x.title))
      .splice(0, 20);
  };

  const markBook = (title: string) => {
    if (!data) return;
    const newData = [...data];
    const index = newData.findIndex((x) => x.title === title);
    newData[index].isBookmarked = !newData[index].isBookmarked;
    setData(newData);
  };

  return {
    filter: {
      getTrending,
      getMovies,
      getSeries,
      getBookMarkMovies,
      getBookMarkSeries,
      getRecommended,
    },
    markBook,
    data,
    search: {
      search,
      setSearch,
      isSearching,
      concatArray,
    },
  };
};

export default UseDataVideo;

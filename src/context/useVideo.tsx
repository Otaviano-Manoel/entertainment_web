"use client";
import { VideoData } from "@/Interface/video";
import { createContext, useContext, useEffect, useState } from "react";

interface VideoContextType {
  data: VideoData[] | undefined;
  setData: (data: VideoData[]) => void;
}

const videoDataContext = createContext<VideoContextType | null>(null);

export const VideoDataProvider = ({ children }) => {
  const [data, setDataState] = useState<VideoData[] | undefined>();

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then((json) => {
        const data: VideoData[] = json as VideoData[];
        setDataState(data);
      })
      .catch((error) => {
        console.error("Unable to get catalog: ", error);
      });
  }, []);

  const setData = (data: VideoData[]) => setDataState(data);

  return (
    <videoDataContext.Provider value={{ data, setData }}>
      {children}
    </videoDataContext.Provider>
  );
};

export const useVideoData = () => {
  const context = useContext(videoDataContext);

  if (!context) {
    throw new Error("useVideoData must be used within an VideoDataProvider");
  }

  return context;
};

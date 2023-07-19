import axios from "axios";
import React, { useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useDispatch, useSelector } from 'react-redux';
import { getAllImages, searchedImage, pageNumber } from './redux/action/index';



export default function App() {
  const searchItem = useSelector((state) => state.reduce.seachedItem)
  const pageNo = useSelector((state) => state.reduce.pageNo)
  const dispatch = useDispatch()
  
  const handleScroll = () => {
    if (window.innerHeight + 
      document.documentElement.scrollTop >=
      document.documentElement.scrollHeight
    ) 
    {
      dispatch(pageNumber(1))
      console.log("reched to bottom")
    }
  };

  //Get All Images
  const getAllPhoto = async () => {
    try {
      const response = await axios.get(`https://api.unsplash.com/photos?page=${pageNo}`, {
        headers: {
          Authorization: 'Client-ID pSK3DDzu8sRjIJs-f7Q-1SV2m86n_uM6OZugsEpgc_8'
        },
      }
      )
      dispatch(getAllImages(response.data))
    }
    catch (error) {
      console.log(error)
    }
  }


  //get Searched Photo only
  const getSeachedImages = async () => {
    try {
      const response = await axios.get(`https://api.unsplash.com/search/photos?page=${pageNo}`, {
        headers: {
          Authorization: 'Client-ID pSK3DDzu8sRjIJs-f7Q-1SV2m86n_uM6OZugsEpgc_8'
        },
        params: {
          query: searchItem
        }
      }
      )
      dispatch(searchedImage(response.data.results))
    }
    catch (error) {
      console.log("Error", error)
    }
  }


  useEffect(() => {
    searchItem===''?getAllPhoto():getSeachedImages()
  }, [pageNo])


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  useEffect(() => {
    getSeachedImages()
  }, [searchItem])

  return (
    <div className="container">
      <div className="content">
        <SearchBar />
        <ImageList />
      </div>
    </div>
  );
}



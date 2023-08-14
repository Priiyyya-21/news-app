import axios from "axios";
import { createContext ,useState,useEffect} from "react";
import { getNewsAPI } from "./api";


export const NewsContext = createContext()

const Context = ({ children }) => {
    const [news, setNews] = useState([]);
    const [category, setCategory] = useState("general");
    const [index, setIndex] = useState(1);
  
    const fetchNews = async (reset = category) => {
        const { data } = await axios.get(getNewsAPI(reset));
        setNews(data);
        setIndex(1);
      };

      useEffect(() => {
        fetchNews();
      }, [category]);

    return (
        <NewsContext.Provider
        value={{
          news,
        //   setCategory,
          index,
          setIndex,
        //   setSource,
        //   darkTheme,
        //   setDarkTheme,
          fetchNews,
        }}
      >
        {children}
      </NewsContext.Provider>
    )
}
export default Context; 
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadReddits, selectReddits, selectSearchTerm, getRedditsSuccess, getRedditsPending, getRedditsFailure, selectSelectedSubreddit, selectSelectedCard } from "../Redux/redditSlice";
import Reddit from "./Reddit";
import Cards from "./Cards";
import { fetchSearchedReddits, fetchCardReddits, fetchSubredditReddits } from "../Api/api";
import { toggleVisibility } from "../Redux/commentsSlice";




const Reddits = () => {
    const dispatch = useDispatch();

    const searchTerm = useSelector(selectSearchTerm);
    const selectedSubreddit = useSelector(selectSelectedSubreddit);
    const card = useSelector(selectSelectedCard);

  useEffect(() => {
    dispatch(loadReddits());
  }, []);

    

    const getSearchResults = async() => {
      try {
        dispatch(getRedditsPending());
        const searchResults = await fetchSearchedReddits(searchTerm); 
        dispatch(getRedditsSuccess(searchResults));
      } catch (error) {
        dispatch(getRedditsFailure());
      }
      
    };


    const getCardReddits = async() => {
      try {
        dispatch(getRedditsPending());
        const searchResults = await fetchCardReddits(card);
        dispatch(getRedditsSuccess(searchResults));
      } catch (error) {
        dispatch(getRedditsFailure());
      }
    };
    
    const getSubredditReddits = async() => {
      try {
        dispatch(getRedditsPending());
        const newResults = await fetchSubredditReddits(selectedSubreddit);
        dispatch(getRedditsSuccess(newResults));
      } catch (error) {
        dispatch(getRedditsFailure());
      }
    };

    
    useEffect(() => {
      dispatch(toggleVisibility(false));
      getSearchResults(searchTerm);
    }, [searchTerm, dispatch]);

   useEffect(() => {
      dispatch(toggleVisibility(false))
      getCardReddits();  
    }, [card, dispatch]);

    useEffect(() => {
      dispatch(toggleVisibility(false))
      getSubredditReddits(selectedSubreddit);
    }, [selectedSubreddit, dispatch]);
    

  const reddits = useSelector(selectReddits);
  
    return (
        <div className="main">
          <div className="cardOption">
            <Cards />
          </div>
          <div className="reddits">
                <div className="reddits-container">
                  {
                  reddits.map((reddit, index) => 
                    <Reddit 
                    key={index} 
                    reddit={reddit}       
                    />
                  )
                }
                </div>         
            </div>
        </div>
            
      
      )
};

export default Reddits;



import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Feed from './Feed'
import { Api } from '../API/Api'




const ApiInstragram = ({token, ...props}) => {
    const [feeds, setFeedsData] = useState([])
    //use useRef to store the latest value of the prop without firing the effect
    const tokenProp = useRef(token);
    tokenProp.current = token;

    useEffect(() => {
        // Esto es para evitar pérdidas de memoria leaks
        const abortController = new AbortController();

        async function fetchInstagramPost () {
          try{
            axios
                .get(Api)
                .then((resp) => {
                    setFeedsData(resp.data.data)
                })
          } catch (err) {
              console.log('error', err)
          }
        }
        
        // manually call the fecth function 
        fetchInstagramPost();
  
        return () => {
            // cancel pending fetch request on component unmount
            abortController.abort(); 
        };
    }, [props.limit])

    return (
        <div className="containerApi">
            {feeds.map((feed) => (
                <Feed key={feed.id} feed={feed} />
            ))}
        </div>
    );
}

export default ApiInstragram;

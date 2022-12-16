import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import Feed from './Feed'



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
                .get(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=IGQVJYbDQ1VkU5UXlTSWhzb09YZAkZAvVkVqcndQOEQ1RVBJN1dCTTlPWkh5Sm9FVjh2VjZANQzhxMkt5UEpCSlBISC1PLUZAiUXNBT1NYMHVzMzRXV1RaS3VMbkUtcm1SME5hSkpiTUpEOXlOMlFxXzhDaQZDZD`)
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
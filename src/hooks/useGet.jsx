import React, { useEffect, useState } from 'react'

export const useGet = ({ url }) => {

const [data, setData] = useState();

    useEffect(()=>{
        const get = async () =>{
            const res = await fetch(url);
            const resp = res.json();
            setData(resp)
        }

        get()
    },[])

  return (
        data
    )
}

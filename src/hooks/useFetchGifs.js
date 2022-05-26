import { useEffect, useState } from "react";
import { getGift } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGift( category )
            .then( imgs => {
                console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                })
            });
    }, [ category ])

    return state;
}
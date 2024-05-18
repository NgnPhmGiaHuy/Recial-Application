"use client"

import { useState } from "react";
import { Grid} from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api"

const gf = new GiphyFetch(process.env.NEXT_PUBLIC_GIPHY_API_KEY);

const GifPicker = () => {
    const [selectedGif, setSelectedGif] = useState(null)

    const fetchGifs = (offset) => gf.trending({ offset, limit: 10 });

    const onGifClick = (gif, e) => {
        e.preventDefault();
        setSelectedGif(gif);
    };

    return (
        <>
            <Grid width={800} columns={3} fetchGifs={fetchGifs} onGifClick={onGifClick} />
        </>
    );
};

export default GifPicker;
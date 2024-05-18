"use client"

import { useState, useEffect } from "react";
import Image from "next/image";

const ImageWithMetadata = ({ src, alt, fill, sizes, className, parentWidth, parentHeight }) => {
    const [dimensions, setDimensions] = useState(null);

    useEffect(() => {
        const fetchMetadata = async () => {
            try {
                const response = await fetch(`/api/image-metadata/?url=${encodeURIComponent(src)}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();

                const aspectRatio = data.ExifImageWidth / data.ExifImageHeight;
                let newWidth = parentWidth;
                let newHeight = parentHeight;

                if (parentWidth / parentHeight > aspectRatio) {
                    newWidth = parentHeight * aspectRatio;
                } else {
                    newHeight = parentWidth / aspectRatio;
                }

                setDimensions({ width: newWidth, height: newHeight });
            } catch (error) {
                console.error("Failed to fetch image metadata:", error);
            }
        };

        fetchMetadata();
    }, [src, parentWidth, parentHeight]);

    if (!dimensions) {
        return null;
    }

    return (
        <div style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px`, position: "relative" }} className="flex items-center justify-center rounded-md border border-solid border-zinc-300 overflow-hidden relative">
            <Image
                src={src}
                alt={alt}
                fill={fill}
                sizes={sizes}
                className={className}
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
};

export default ImageWithMetadata;

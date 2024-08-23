import Image from "next/image";

const ImageIcon = ({ src, width = 40, height = 40, overflow = "hidden", borderRadius = 9999, outlineStyle = "none", outlineWidth = 1, outlineColor = "gray", objectFit = "cover", isBlur = false, blurColor = "black" }) => {
    return (
        <div className="relative group" style={{ width: `${width}px`, height: `${height}px`, borderRadius: `${borderRadius}px`, outlineStyle: outlineStyle, outlineWidth: `${outlineWidth}px`, outlineColor: outlineColor, overflow: overflow }}>
            <Image src={src} alt={`${src}-image`} fill={true} sizes="(max-width: 768px) 100vw" style={{ objectFit: objectFit }}/>
            { isBlur && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: blurColor }}></div>
            ) }
        </div>
    );
};

export default ImageIcon;
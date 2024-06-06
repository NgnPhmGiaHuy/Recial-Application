import { VideoUploadScaffoldListItem } from "@/components";

const VideoUploadScaffoldList = () => {
    const item = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"/>
                </svg>
            ),
            title: "Size and duration",
            subtitle: "Maximum size: 10 GB, video duration: 60 minutes.",
        }, {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path d="M13.172 3H9c-1.886 0-2.828 0-3.414.586C5 4.172 5 5.114 5 7v10c0 1.886 0 2.828.586 3.414C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17V8.828c0-.408 0-.613-.076-.796c-.076-.184-.22-.329-.51-.618l-3.828-3.828c-.29-.29-.434-.434-.617-.51C13.785 3 13.58 3 13.172 3Z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m13.855 14.08l-3.182-1.363A1.2 1.2 0 0 0 9 13.82v2.36a1.2 1.2 0 0 0 1.673 1.103l3.182-1.364c.808-.346.808-1.492 0-1.838"></path>
                    <path d="M13 3v4c0 .943 0 1.414.293 1.707C13.586 9 14.057 9 15 9h4"></path>
                </svg>
            ),
            title: "File formats",
            subtitle: "Recommended: “.mp4”. Other major formats are supported.",
        }, {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={1} stroke="currentColor" className="size-6">
                    <path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2ZM4 24V8h24v16Z"></path>
                    <path fill="currentColor" d="M22 11h-4v10h4a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3zm1 7a1 1 0 0 1-1 1h-2v-6h2a1 1 0 0 1 1 1zm-10-7v4h-3v-4H8v10h2v-4h3v4h2V11h-2z"></path>
                </svg>
            ),
            title: "Video resolutions",
            subtitle: "Minimum resolution: 720p. 2K and 4K are supported.",
        }, {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 472 480" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path fill="currentColor" d="M341 304V133H171V91h170q18 0 30.5 12.5T384 133v171h-43zm-213 43h341v42h-85v86h-43v-86H128q-18 0-30.5-12.5T85 347V133H0V91h85V5h43v342z"></path>
                </svg>
            ),
            title: "Aspect ratios",
            subtitle: "Recommended: 16:9 for landscape, 9:16 for vertical.",
        },
    ]

    return (
        <div>
            <div className="pt-[24px] flex relative">
                { item.map((item, index) => (
                    <VideoUploadScaffoldListItem key={index} icon={item.icon} title={item.title} subtitle={item.subtitle} />
                )) }
            </div>
        </div>
    );
};

export default VideoUploadScaffoldList;
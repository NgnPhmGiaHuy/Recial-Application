import Gif from "/public/images/Icon/gif.png"
import Image from "/public/images/Icon/image.png";
import Video from "/public/images/Icon/video.png";
import Location from "/public/images/Icon/location.png";
import Happiness from "/public/images/Icon/happiness.png";
import TagPeople from "/public/images/Icon/tag-people.png";

export const createPostOptionItemList = [
    {
        createPostItemImage: Video,
        createPostItemTitle: "Live video",
    }, {
        createPostItemImage: Image,
        createPostItemTitle: "Photo/video",
    }, {
        createPostItemImage: Happiness,
        createPostItemTitle: "Feeling/activity",
    },
]

export const createPostAudienceItemList = [
    {
        createPostAudienceIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"/>
            </svg>
        ),
        createPostAudienceOption: "Public",
        createPostAudienceOptionTitle: "Public",
        createPostAudienceExplain: "Anyone on or off Recial",
    }, {
        createPostAudienceIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
            </svg>
        ),
        createPostAudienceOption: "Friends",
        createPostAudienceOptionTitle: "Friends",
        createPostAudienceExplain: "Your friends on Recial",
    }, {
        createPostAudienceIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"/>
            </svg>
        ),
        createPostAudienceOption: "Specific_Friends",
        createPostAudienceOptionTitle: "Specific friends",
    }, {
        createPostAudienceIcon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"/>
            </svg>

        ),
        createPostAudienceOption: "Private",
        createPostAudienceOptionTitle: "Only me",
    },
]

export const createPostContentCustomizationItemList = [
    {
        postContentCustomizationIcon: Image,
    }, {
        postContentCustomizationIcon: Gif,
    }, {
        postContentCustomizationIcon: Happiness,
    }, {
        postContentCustomizationIcon: Location,
    }, {
        postContentCustomizationIcon: TagPeople,
    }, {
        postContentCustomizationIcon: Image,
    },
]

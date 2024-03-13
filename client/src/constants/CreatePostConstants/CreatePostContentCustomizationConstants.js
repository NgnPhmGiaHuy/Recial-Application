import { useDispatch } from "react-redux";

import { toggleCreatePostMediaInput } from "@/store/actions/toggle/toggleActions";

import Gif from "/public/images/Icon/gif.png";
import Image from "/public/images/Icon/image.png";
import Location from "/public/images/Icon/location.png";
import Happiness from "/public/images/Icon/happiness.png";
import TagPeople from "/public/images/Icon/tag-people.png";

const CREATE_POST_CONTENT_CUSTOMIZATION = () => {
    const dispatch = useDispatch();

    const toggleShowCreatePostMediaInput = () => {
        return dispatch(toggleCreatePostMediaInput());
    }

    return [
        {
            icon: Image,
            onClick: toggleShowCreatePostMediaInput,
        }, {
            icon: Gif,
        }, {
            icon: Happiness,
        }, {
            icon: Location,
        }, {
            icon: TagPeople,
        }, {
            icon: Image,
        },
    ]
};

export default CREATE_POST_CONTENT_CUSTOMIZATION
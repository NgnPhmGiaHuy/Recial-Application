import Gif from "/public/images/Icon/gif.png";
import Image from "/public/images/Icon/image.png";
import Location from "/public/images/Icon/location.png";
import Happiness from "/public/images/Icon/happiness.png";
import TagPeople from "/public/images/Icon/tag-people.png";

export const createPostContentCustomizationConstants = (handleState) => {
    return [
        {
            icon: Image,
            onClick: handleState.handleShowCreatePostMediaInput,
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
}
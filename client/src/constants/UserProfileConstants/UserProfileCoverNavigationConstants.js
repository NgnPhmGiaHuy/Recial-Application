const USER_PROFILE_COVER_NAVIGATION = (userProps) => {
    return [
        {
            link: `/${userProps?.user?._id}`,
            title: "Post"
        },
        {
            link: `/${userProps?.user?._id}/about`,
            title: "About"
        },
        {
            link: `/${userProps?.user?._id}/friends`,
            title: "Friends"
        },
        {
            link: `/${userProps?.user?._id}/photos`,
            title: "Photos"
        },
        {
            link: `/${userProps?.user?._id}/videos`,
            title: "Videos"
        },
        {
            link: `/${userProps?.user?._id}/groups`,
            title: "Groups"
        },
        {
            link: `/${userProps?.user?._id}/articles`,
            title: "Articles"
        },
    ]
}

export default USER_PROFILE_COVER_NAVIGATION;
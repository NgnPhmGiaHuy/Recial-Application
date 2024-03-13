export const GROUP_PAGE_NAVIGATION_BUTTON_OPTIONS = (groupProps) => {
    if (!groupProps?.currentUserRole && groupProps?.profile?.group_privacy === "Private") {
        return [
            { link: "", active: true, title: "About" },
            { link: "", active: false, title: "Discussion" }
        ];
    } else {
        return [
            { link: "", active: true, title: "Discussion" },
            { link: "", active: false, title: "Members" },
            { link: "", active: false, title: "Events" },
            { link: "", active: false, title: "Media" },
            { link: "", active: false, title: "Files" }
        ];
    }
};

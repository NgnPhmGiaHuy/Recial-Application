import UserIcon from "@/components/IconComponents/UserIcon";
import UsersIcon from "@/components/IconComponents/UsersIcon";
import GlobeAltIcon from "@/components/IconComponents/GlobeAltIcon";
import LockClosedIcon from "@/components/IconComponents/LockClosedIcon";

const CREATE_POST_AUDIENCE = [
    {
        icon: (
            <GlobeAltIcon fill="none" stroke="currentColor" width={32} height={32} />
        ),
        option: "Public",
        title: "Public",
        explain: "Anyone on or off Recial",
    }, {
        icon: (
            <UsersIcon fill="none" stroke="currentColor" width={32} height={32} />
        ),
        option: "Friends",
        title: "Friends",
        explain: "Your friends on Recial",
    }, {
        icon: (
            <UserIcon fill="none" stroke="currentColor" width={32} height={32} />
        ),
        option: "Specific_Friends",
        title: "Specific friends",
    }, {
        icon: (
            <LockClosedIcon fill="none" stroke="currentColor" width={32} height={32} />
        ),
        option: "Private",
        title: "Only me",
    },
]

export default CREATE_POST_AUDIENCE;
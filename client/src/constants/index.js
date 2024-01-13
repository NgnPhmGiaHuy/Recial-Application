import Avatar from "/public/images/Avatars/Avatar.png";
import Illustration01 from "/public/images/Illustration/illustration-of-a-man-and-a-woman-watering-a-plant.jpg";
import Illustration02 from "/public/images/Illustration/vecteezy-people-sorting-garbage-for-recycling-environment.jpg";
import Illustration03 from "/public/images/Illustration/test.svg";

import Video_01 from "/public/videos/Video-01.mp4";
import Video_02 from "/public/videos/Video-02.mp4";
import Video_03 from "/public/videos/Video-03.mp4";
import Video_04 from "/public/videos/Video-04.mp4";
import Video_05 from "/public/videos/Video-05.mp4";
import Video_06 from "/public/videos/Video-06.mp4";


export const fakeUserData = {
    user: {
        user_id: "HuyNguyen",
        username: "Huy Nguyen",
        email: "yuh.nguyenpham@gmail.com",
        firstname: "Nguyen",
        lastname: "Pham Gia Huy",
        phone_number: "0969122412",
        job_title: "Software Engineering",
        short_description: "Description of the event...",
        description: "Space exploration has captivated the human imagination for decades, pushing the boundaries of what we know and what's possible. It encompasses the discovery of celestial bodies, understanding the universe's mysteries, and potentially establishing human colonies beyond Earth.\n" +
            "\n" +
            "The journey began with the Space Race in the mid-20th century when the United States and the Soviet Union competed to reach milestones like the first satellite (Sputnik) and the first human in space (Yuri Gagarin). Since then, space agencies worldwide, like NASA, ESA, and private companies like SpaceX, Blue Origin, and others, have joined the quest for exploration and colonization.\n" +
            "\n" +
            "Exploration missions have unveiled wonders such as the Martian surface through rovers like Curiosity and Perseverance, revealing clues about the planet's past and the potential for sustaining life. Meanwhile, probes like Voyager have ventured beyond our solar system, sending back valuable data about interstellar space.\n" +
            "\n" +
            "The dream of colonizing other planets has gained traction. Mars, with its similarities to Earth and potential resources, stands as a primary target. However, challenges abound, from the harsh environment to the immense distances and technological hurdles. Concepts like terraforming Mars or establishing self-sustaining habitats show promise but also pose ethical and logistical questions.\n" +
            "\n" +
            "Space exploration isn't limited to Mars; plans for lunar bases, mining asteroids for resources, and even exploring moons of gas giants like Europa or Titan have sparked interest and debate.\n" +
            "\n" +
            "The benefits of space exploration are manifold. It drives technological advancements in various fields, from materials science to robotics and healthcare. Additionally, it inspires generations, fostering scientific curiosity and innovation.\n" +
            "\n" +
            "However, it's not without controversy. Critics argue that the vast resources spent on space exploration could be better utilized for solving issues on Earth, such as poverty, climate change, or healthcare.\n" +
            "\n" +
            "The future of space exploration and colonization holds both excitement and challenges. As technology advances and our understanding of the cosmos deepens, the possibility of humans becoming a multi-planetary species edges closer to reality. It's a narrative of human ambition, curiosity, and the relentless pursuit of the unknown.",
        followers_count: 200,
        following_count: 200,
        profile_picture_url: Avatar,
        profile_cover_photo_url: Illustration01,
        location: {
            city: "Vung Tau",
            country: "Viet Nam",
        },
    },
    photos_list: [
        {
            photo_id: "unique_id_2",
            photo_url: Illustration01,
            photo_title: "Photo 2",
            description: "Description for photo 2",
            tags: ["tag2", "tag4", "tag5"],
            location: {
                latitude: 34.0522,
                longitude: -118.2437,
                city: "Los Angeles",
                country: "USA"
            },
            uploaded_by: {
                user_id: "user456",
                username: "user456",
                profile_picture_url: Avatar,
            },
            created_at: "2023-11-27T10:00:00Z",
            updated_at: "2023-11-27T10:45:00Z"
        },
        {
            photo_id: "unique_id_2",
            photo_url: Illustration02,
            photo_title: "Photo 2",
            description: "Description for photo 2",
            tags: ["tag2", "tag4", "tag5"],
            location: {
                latitude: 34.0522,
                longitude: -118.2437,
                city: "Los Angeles",
                country: "USA"
            },
            uploaded_by: {
                user_id: "user456",
                username: "user456",
                profile_picture_url: Avatar,
            },
            created_at: "2023-11-27T10:00:00Z",
            updated_at: "2023-11-27T10:45:00Z"
        },
        {
            photo_id: "unique_id_2",
            photo_url: Illustration03,
            photo_title: "Photo 2",
            description: "Description for photo 2",
            tags: ["tag2", "tag4", "tag5"],
            location: {
                latitude: 34.0522,
                longitude: -118.2437,
                city: "Los Angeles",
                country: "USA"
            },
            uploaded_by: {
                user_id: "user456",
                username: "user456",
                profile_picture_url: Avatar,
            },
            created_at: "2023-11-27T10:00:00Z",
            updated_at: "2023-11-27T10:45:00Z"
        },
    ],
    videos_list: [
        {
            video_id: "unique_id_2",
            video_url: Video_01,
            video_title: "Big Buck Bunny 720p 2mb",
            description: "Description for photo 2",
            tags: ["tag2", "tag4", "tag5"],
            location: {
                latitude: 34.0522,
                longitude: -118.2437,
                city: "Los Angeles",
                country: "USA"
            },
            uploaded_by: {
                user_id: "user456",
                username: "user456",
                profile_picture_url: "Avatar"
            },
            created_at: "2023-11-27T10:00:00Z",
            updated_at: "2023-11-27T10:45:00Z",
            duration: "00:05:30",
            views_count: 10000,
            likes: 8500,
            dislikes: 500,
            comments: [
                {
                    comment_id: "comment_1",
                    user_id: "user123",
                    username: "user123",
                    comment_text: "Great video!"
                },
                {
                    comment_id: "comment_2",
                    user_id: "user789",
                    username: "user789",
                    comment_text: "I love this! Thanks!"
                }
            ],
            thumbnail: "thumbnail_url",
            video_resolution: "1280x720",
            file_size: "20MB",
            language: "English",
            category: "Animation",
            privacy_setting: "public"
        }
    ],
    post_audience: {
        public: {
            status: false,
            title: "Public",
        },
        friends: {
            status: false,
            title: "Friends",
        },
        specific_friends: {
            status: false,
            title: "Specific friends",
            friends_list: []
        },
        private: {
            status: true,
            title: "Only me",
        },
    },
    search_history: [
        {
            search_id: "",
            search_image: Avatar,
            tag_id: "",
            user_id: "",
            post_id: "",
            group_id: "",
            search_query: "John Doe",
            results_count: "",
            filters: [],
            created_at: "",
            updated_at: "",
        }, {
            search_id: "",
            search_image: null,
            tag_id: "",
            user_id: "",
            post_id: "",
            group_id: "",
            search_query: "Jane Smith",
            results_count: "",
            filters: [],
            created_at: "",
            updated_at: "",
        },
    ],
    messages: [
        {
            message_id: "",
            group_id: "",
            sender_id: "HuyNguyen",
            receiver_id: "",
            message_image: Avatar,
            content: "You: Hello nice to meet you hihhihihihihih",
            is_mute: true,
            is_read: true,
            attachments: [
                {
                    type: "",
                    url: "",
                },
            ],
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            created_at: "2 day",
            updated_at: "1 hours",
        },
        {
            message_id: "",
            group_id: "",
            sender_id: "HuyNguyen",
            receiver_id: "",
            message_image: Avatar,
            content: "You: Hello nice to meet you hihhihihihihih",
            is_mute: true,
            is_read: false,
            attachments: [
                {
                    type: "",
                    url: "",
                },
            ],
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            created_at: "2 day",
            updated_at: "1 hours",
        },
        {
            message_id: "",
            group_id: "",
            sender_id: "HuyNguyen",
            receiver_id: "",
            message_image: Avatar,
            content: "You: Hello nice to meet you hihhihihihihih",
            is_mute: false,
            is_read: true,
            attachments: [
                {
                    type: "",
                    url: "",
                },
            ],
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            created_at: "2 day",
            updated_at: "1 hours",
        },
    ],
    notifications: [
        {
            notification_id: "",
            user_id: "",
            source_id: "",
            notification_image: Avatar,
            type: "message",
            notification_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            is_read: true,
            created_at: "3 hours",
            updated_at: "2 hours",
        },
        {
            notification_id: "",
            user_id: "",
            source_id: "",
            type: "message",
            notification_image: Avatar,
            notification_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            is_read: false,
            action_url: "",
            created_at: "2 day",
            updated_at: "1 day",
        },        {
            notification_id: "",
            user_id: "",
            source_id: "",
            type: "message",
            notification_image: Avatar,
            notification_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            is_read: false,
            action_url: "",
            created_at: "2 day",
            updated_at: "1 day",
        },
    ],
    follows: [
        {
            follower_id: "", // user_id
            following_id: "Nguyen Pham Gia Huy",
            follow_request_id: "",
            follow_type: "",
            follow_image: Avatar,
            follow_message: "Jane Smith wants to follow you",
            is_approved: false,
            created_at: "",
            title: "Nguyen Pham Gia Huy",
        }, {
            follower_id: "", // user_id
            following_id: "Nguyen Pham Gia Huy",
            follow_request_id: "",
            follow_type: "",
            follow_image: Avatar,
            follow_message: "Jane Smith wants to follow you",
            is_approved: false,
            created_at: "",
            updated_at: "",
        }, {
            follower_id: "", // user_id
            following_id: "Nguyen Pham Gia Huy",
            follow_request_id: "",
            follow_type: "",
            follow_image: Avatar,
            follow_message: "Jane Smith wants to follow you",
            is_approved: false,
            created_at: "",
            updated_at: "",
        }, {
            follower_id: "", // user_id
            following_id: "Nguyen Pham Gia Huy",
            follow_request_id: "",
            follow_type: "",
            follow_image: Avatar,
            follow_message: "Jane Smith wants to follow you",
            is_approved: false,
            created_at: "",
            updated_at: "",
        },
    ],
    stories: [
        {
            story_id: "",
            user_id: "",
            media_url: Avatar,
            type: "",
            duration: "",
            view_count: "",
            location: {
                latitude: "",
                longitude: "",
                name: "",
            },
            tags: "",
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            storyItemUserImage: Avatar,
            storyItemUserName: "Huy Nguyen",
        }, {
            story_id: "",
            user_id: "",
            media_url: Avatar,
            type: "",
            duration: "",
            view_count: "",
            location: {
                latitude: "",
                longitude: "",
                name: "",
            },
            tags: "",
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            storyItemUserImage: Avatar,
            storyItemUserName: "Huy Nguyen",
        }, {
            story_id: "",
            user_id: "",
            media_url: Avatar,
            type: "",
            duration: "",
            view_count: "",
            location: {
                latitude: "",
                longitude: "",
                name: "",
            },
            tags: "",
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            storyItemUserImage: Avatar,
            storyItemUserName: "Huy Nguyen",
        }, {
            story_id: "",
            user_id: "",
            media_url: Avatar,
            type: "",
            duration: "",
            view_count: "",
            location: {
                latitude: "",
                longitude: "",
                name: "",
            },
            tags: "",
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            storyItemUserImage: Avatar,
            storyItemUserName: "Huy Nguyen",
        }, {
            story_id: "",
            user_id: "",
            media_url: Avatar,
            type: "",
            duration: "",
            view_count: "",
            location: {
                latitude: "",
                longitude: "",
                name: "",
            },
            tags: "",
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            storyItemUserImage: Avatar,
            storyItemUserName: "Huy Nguyen",
        }, {
            story_id: "",
            user_id: "",
            media_url: Avatar,
            type: "",
            duration: "",
            view_count: "",
            location: {
                latitude: "",
                longitude: "",
                name: "",
            },
            tags: "",
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            storyItemUserImage: Avatar,
            storyItemUserName: "Huy Nguyen",
        }, {
            story_id: "",
            user_id: "",
            media_url: Avatar,
            type: "",
            duration: "",
            view_count: "",
            location: {
                latitude: "",
                longitude: "",
                name: "",
            },
            tags: "",
            reactions: {
                like: "",
                love: "",
                sad: "",
                dislike: "",
            },
            storyItemUserImage: Avatar,
            storyItemUserName: "Huy Nguyen",
        },
    ],
    event: [
        {
            event_id: "unique_event_id_1",
            event_name: "Example Event 1",
            event_color: "red",
            description: "Description of the event...",
            location: "Event Location",
            start_datetime: "2023-12-01T18:00:00Z",
            end_datetime: "2023-12-01T22:00:00Z",
            cover_photo_url: "https://example.com/event_cover_photo.jpg",
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                }, {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                },
            ],
            tags: ["tag1", "tag2", "tag3"],
            created_by: {
                user_id: "creator_user_id",
                username: "creator_username"
            },
            created_at: "",
            updated_at: "",
        },
        {
            event_id: "unique_event_id_2",
            event_name: "Example Event 2",
            event_color: "blue",
            description: "Description of the event...",
            location: "Event Location 2",
            start_datetime: "2023-12-05T17:30:00Z",
            end_datetime: "2023-12-05T21:30:00Z",
            cover_photo_url: "https://example.com/event_cover_photo_2.jpg",
            participants: [
                {
                    user_id: "user_id_3",
                    username: "user3",
                    status: "going"
                }, {
                    user_id: "user_id_4",
                    username: "user4",
                    status: "interested"
                },
            ],
            tags: ["tag2", "tag4", "tag5"],
            created_by: {
                user_id: "creator_user_id_2",
                username: "creator_username_2"
            },
            created_at: "",
            updated_at: "",
        },
    ],
    friends_list: [
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_1",
            username: "Bio or description of Friend OneBio or description of Friend OneBio or description of Friend OneBio or description of Friend One",
            full_name: "Friend One",
            email: "friend1@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [],
            location: "Friend's Location",
            bio: "Bio or description of Friend One",
            birthdate: "1990-05-15",
            created_at: "2021-02-28T10:00:00Z",
            last_active: "2023-11-25T15:30:00Z",
            friendship_status: "connected"
        },
        {
            user_id: "friend_user_id_2",
            username: "friend2",
            full_name: "Friend Two",
            email: "friend2@example.com",
            profile_picture_url: Avatar,
            mutual_friends: [
                {
                    username: "MutualFriend1",
                    profile_picture_url: Avatar
                }, {
                    username: "MutualFriend2",
                    profile_picture_url: Avatar,
                }, {
                    username: "MutualFriend2",
                    profile_picture_url: Avatar,
                }, {
                    username: "MutualFriend2",
                    profile_picture_url: Avatar,
                }, {
                    username: "MutualFriend2",
                    profile_picture_url: Avatar,
                },
            ],
            location: "Friend's Location",
            bio: "Bio or description of Friend Two",
            birthdate: "1988-11-03",
            created_at: "2020-09-12T08:45:00Z",
            last_active: "2023-11-24T18:20:00Z",
            friendship_status: "connected"
        }
    ],
    group_list: [
        {
            group_id: "group_id_1",
            group_name: "Suggested Group",
            group_picture_url: Illustration01,
            group_privacy: "Public",
            tags: ["tag1", "tag2", "tag3"],
            category: "Interest",
            members: [
                {
                    user_id: "",
                    username: "",
                    profile_picture_url: Avatar,
                }, {
                    user_id: "",
                    username: "",
                    profile_picture_url: Avatar,
                }, {
                    user_id: "",
                    username: "",
                    profile_picture_url: Avatar,
                }, {
                    user_id: "",
                    username: "",
                    profile_picture_url: Avatar,
                }, {
                    user_id: "",
                    username: "",
                    profile_picture_url: Avatar,
                },
            ],
            description: "A suggested group for specific interests.",
            created_at: "2023-11-20T08:00:00Z",
            updated_at: "2023-11-20T08:00:00Z",
        },
    ],
    friend_requests: [
        {
            request_id: "",
            requester_id: "",
            requester_profile: {
                username: "HinhNhuLaHuy",
                profile_picture_url: Avatar,
                mutual_friends: [
                    {
                        username: "MutualFriend1",
                        profile_picture_url: Avatar
                    }, {
                        username: "MutualFriend2",
                        profile_picture_url: Avatar,
                    }, {
                        username: "MutualFriend2",
                        profile_picture_url: Avatar,
                    }, {
                        username: "MutualFriend2",
                        profile_picture_url: Avatar,
                    }, {
                        username: "MutualFriend2",
                        profile_picture_url: Avatar,
                    },
                ],
            },
            to_user_id: "",
            status: "",
            created_at: "2023-11-20T08:00:00Z",
            updated_at: "2023-11-20T08:00:00Z",
        }, {
            request_id: "",
            requester_id: "",
            requester_profile: {
                username: "HinhNhuLaHuy",
                profile_picture_url: Avatar,
                mutual_friends: [],
            },
            to_user_id: "",
            status: "",
            created_at: "2020-11-20T08:00:00Z",
            updated_at: "2020-11-20T08:00:00Z",
        },
    ],
    suggest_group: {
        group_id: "group_id_1",
        group_name: "Suggested Group",
        group_picture_url: Illustration01,
        tags: ["tag1", "tag2", "tag3"],
        category: "Interest",
        members: [
            {
                user_id: "",
                username: "",
                profile_picture_url: Avatar,
            }, {
                user_id: "",
                username: "",
                profile_picture_url: Avatar,
            }, {
                user_id: "",
                username: "",
                profile_picture_url: Avatar,
            }, {
                user_id: "",
                username: "",
                profile_picture_url: Avatar,
            }, {
                user_id: "",
                username: "",
                profile_picture_url: Avatar,
            },
        ],
        description: "A suggested group for specific interests.",
        created_at: "2023-11-20T08:00:00Z",
        updated_at: "2023-11-20T08:00:00Z",
    },
    suggest_pages: [
        {
            page_id: "12345",
            page_name: "Adventure Seekers",
            page_image: Illustration01,
            tags: ["adventure", "travel", "exploration"],
            category: "Travel & Adventure",
            description: "Join fellow explorers and share your thrilling adventures!",
            created_at: "2023-11-21T10:30:00Z",
            updated_at: "2023-11-22T14:45:00Z"
        },
        {
            page_id: "67890",
            page_name: "Culinary Delights",
            page_image: Illustration02,
            tags: ["food", "cooking", "recipes"],
            category: "Food & Cooking",
            description: "A community for foodies to exchange recipes and culinary tips.",
            created_at: "2023-11-19T15:20:00Z",
            updated_at: "2023-11-21T09:10:00Z"
        },
        {
            page_id: "24680",
            page_name: "Artistry Avenue",
            page_image: Illustration03,
            tags: ["art", "creativity", "painting"],
            category: "Art & Creativity",
            description: "Connect with fellow artists and showcase your creative masterpieces.",
            created_at: "2023-11-18T11:00:00Z",
            updated_at: "2023-11-20T16:30:00Z"
        },
        {
            page_id: "13579",
            page_name: "Fitness Fusion",
            page_image: Illustration02,
            tags: ["fitness", "health", "exercise"],
            category: "Health & Fitness",
            description: "Get motivated and share workout routines for a healthier lifestyle.",
            created_at: "2023-11-17T08:45:00Z",
            updated_at: "2023-11-19T12:20:00Z"
        },
        {
            page_id: "54321",
            page_name: "Tech Titans",
            page_image: Illustration02,
            tags: ["technology", "innovation", "gadgets"],
            category: "Technology & Innovation",
            description: "Discuss the latest tech trends and gadgets with tech enthusiasts.",
            created_at: "2023-11-16T12:10:00Z",
            updated_at: "2023-11-18T17:00:00Z"
        }
    ],
    suggest_friends: {
        suggested_friends_by_location: [
            {
                location: "New York, USA",
                user: [
                    {
                        id: 1,
                        username: "user123",
                        full_name: "John Doe",
                        profile_picture_url: Avatar,
                        profile_cover_photo_url: Illustration02,
                        mutual_friends: [
                            {
                                username: "MutualFriend1",
                                profile_picture_url: Avatar
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            },
                        ],
                        followers_count: 500,
                        following_count: 300,
                        bio: "A passionate individual interested in technology and photography.",
                        location: "New York, USA",
                        is_following: false,
                        is_friend: false,
                        is_requested: false
                    }, {
                        id: 1,
                        username: "user123",
                        full_name: "John Doe",
                        profile_picture_url: Avatar,
                        profile_cover_photo_url: Illustration03,
                        mutual_friends: [
                            {
                                username: "MutualFriend1",
                                profile_picture_url: Avatar
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            },
                        ],
                        followers_count: 500,
                        following_count: 300,
                        bio: "A passionate individual interested in technology and photography.",
                        location: "New York, USA",
                        is_following: false,
                        is_friend: false,
                        is_requested: false
                    },
                ],
            },
        ],
        suggested_friends_by_job: [
            {
                job_name: "Software Engineer",
                user: [
                    {
                        id: 1,
                        username: "user123",
                        full_name: "John Doe",
                        profile_picture_url: Avatar,
                        mutual_friends: [
                            {
                                username: "MutualFriend1",
                                profile_picture_url: Avatar
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            }, {
                                username: "MutualFriend2",
                                profile_picture_url: Avatar,
                            },
                        ],
                        followers_count: 500,
                        following_count: 300,
                        bio: "A passionate individual interested in technology and photography.",
                        location: "New York, USA",
                        is_following: false,
                        is_friend: false,
                        is_requested: false
                    },
                ]
            }, {
                job_name: "Photographer",
                user: [
                    {
                        id: 1,
                        username: "user123",
                        full_name: "John Doe",
                        profile_picture_url: Avatar,
                        mutual_friends: [],
                        followers_count: 500,
                        following_count: 300,
                        bio: "A passionate individual interested in technology and photography.",
                        location: "New York, USA",
                        is_following: false,
                        is_friend: false,
                        is_requested: false
                    }
                ],
            },
        ],
    },
    suggest_event: [
        {
            event_id: "suggested_event_id_1",
            event_name: "Suggested Event 1",
            description: "Description of the suggested event...",
            location: "Suggested Event Location",
            start_datetime: "2023-12-15T19:00:00Z",
            end_datetime: "2023-12-15T22:00:00Z",
            cover_photo_url: Illustration02,
            category: "Suggested Category",
            tags: ["suggested_tag1", "suggested_tag2"],
            created_by: {
                user_id: "suggesting_user_id",
                username: "suggesting_username"
            },
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                },
                {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                }
            ],
        },
        {
            event_id: "suggested_event_id_1",
            event_name: "Suggested Event 1",
            description: "Description of the suggested event...",
            location: "Suggested Event Location",
            start_datetime: "2023-12-15T19:00:00Z",
            end_datetime: "2023-12-15T22:00:00Z",
            cover_photo_url: Illustration02,
            category: "Suggested Category",
            tags: ["suggested_tag1", "suggested_tag2"],
            created_by: {
                user_id: "suggesting_user_id",
                username: "suggesting_username"
            },
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                },
                {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                }
            ],
        },
        {
            event_id: "suggested_event_id_1",
            event_name: "Suggested Event 1",
            description: "Description of the suggested event...",
            location: "Suggested Event Location",
            start_datetime: "2023-12-15T19:00:00Z",
            end_datetime: "2023-12-15T22:00:00Z",
            cover_photo_url: Illustration02,
            category: "Suggested Category",
            tags: ["suggested_tag1", "suggested_tag2"],
            created_by: {
                user_id: "suggesting_user_id",
                username: "suggesting_username"
            },
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                },
                {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                }
            ],
        },
        {
            event_id: "suggested_event_id_1",
            event_name: "Suggested Event 1",
            description: "Description of the suggested event...",
            location: "Suggested Event Location",
            start_datetime: "2023-12-15T19:00:00Z",
            end_datetime: "2023-12-15T22:00:00Z",
            cover_photo_url: Illustration02,
            category: "Suggested Category",
            tags: ["suggested_tag1", "suggested_tag2"],
            created_by: {
                user_id: "suggesting_user_id",
                username: "suggesting_username"
            },
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                },
                {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                }
            ],
        },
        {
            event_id: "suggested_event_id_1",
            event_name: "Suggested Event 1",
            description: "Description of the suggested event...",
            location: "Suggested Event Location",
            start_datetime: "2023-12-15T19:00:00Z",
            end_datetime: "2023-12-15T22:00:00Z",
            cover_photo_url: Illustration02,
            category: "Suggested Category",
            tags: ["suggested_tag1", "suggested_tag2"],
            created_by: {
                user_id: "suggesting_user_id",
                username: "suggesting_username"
            },
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                },
                {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                }
            ],
        },
        {
            event_id: "suggested_event_id_1",
            event_name: "Suggested Event 1",
            description: "Description of the suggested event...",
            location: "Suggested Event Location",
            start_datetime: "2023-12-15T19:00:00Z",
            end_datetime: "2023-12-15T22:00:00Z",
            cover_photo_url: Illustration02,
            category: "Suggested Category",
            tags: ["suggested_tag1", "suggested_tag2"],
            created_by: {
                user_id: "suggesting_user_id",
                username: "suggesting_username"
            },
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                },
                {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                }
            ],
        },
        {
            event_id: "suggested_event_id_1",
            event_name: "Suggested Event 1",
            description: "Description of the suggested event...",
            location: "Suggested Event Location",
            start_datetime: "2023-12-15T19:00:00Z",
            end_datetime: "2023-12-15T22:00:00Z",
            cover_photo_url: Illustration02,
            category: "Suggested Category",
            tags: ["suggested_tag1", "suggested_tag2"],
            created_by: {
                user_id: "suggesting_user_id",
                username: "suggesting_username"
            },
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                },
                {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                }
            ],
        },
        {
            event_id: "suggested_event_id_1",
            event_name: "Suggested Event 1",
            description: "Description of the suggested event...",
            location: "Suggested Event Location",
            start_datetime: "2023-12-15T19:00:00Z",
            end_datetime: "2023-12-15T22:00:00Z",
            cover_photo_url: Illustration02,
            category: "Suggested Category",
            tags: ["suggested_tag1", "suggested_tag2"],
            created_by: {
                user_id: "suggesting_user_id",
                username: "suggesting_username"
            },
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                },
                {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                }
            ],
        },
        {
            event_id: "suggested_event_id_1",
            event_name: "Suggested Event 1",
            description: "Description of the suggested event...",
            location: "Suggested Event Location",
            start_datetime: "2023-12-15T19:00:00Z",
            end_datetime: "2023-12-15T22:00:00Z",
            cover_photo_url: Illustration02,
            category: "Suggested Category",
            tags: ["suggested_tag1", "suggested_tag2"],
            created_by: {
                user_id: "suggesting_user_id",
                username: "suggesting_username"
            },
            participants: [
                {
                    user_id: "user_id_1",
                    username: "user1",
                    status: "going"
                },
                {
                    user_id: "user_id_2",
                    username: "user2",
                    status: "interested"
                }
            ],
        },

    ],
};

export const fakePostListData = [
    {
        postTitle: "Lorem Ipsum Title",
        postAuthor: {
            authorName: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.overflow-x-hidden overflow-y-auto text-ellipsis break-words relativeoverflow-x-hidden overflow-y-auto text-ellipsis break-words relativeoverflow-x-hidden overflow-y-auto text-ellipsis break-words relative",
            authorAvatar: Avatar,
        },
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        postViewNumber: 150,
        postShareNumber: 20,
        postReactions: {
            postLikesNumber: 10,
            postDislikesNumber: 25,
            postHappinessNumber: 20,
            postUnhappinessNumber: 35,
        },
        postTags: ["Technology", "Lorem"],
        postType: ["text"],
        comment: [
            {
                postCommentAuthor: "Gia Huy",
                postCommentAuthorImage: Avatar,
                postCommentContent: "Great post!",
            },
            {
                postCommentContent: "I love this!",
            },
        ],
        postCommentNumber: 200,
        postAttachments: [
            {
                attachmentId: "1",
                type: "image",
                picture: Illustration01,
                url: "https://example.com/image.jpg",
            },
        ],
        postLocations: {
            postLatitude: "40.7128",
            postLongitude: "-74.0060",
            postLocationName: "New York City",
        },
        postPrivacy: "public",
        postCreateAt: "2023-11-11T12:30:00Z",
        postUpdateAt: "2023-11-11T14:45:00Z",
    },
    {
        postTitle: "Lorem Ipsum Title",
        postAuthor: {
            authorName: "John Doe",
            authorAvatar: Avatar,
        },
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        postViewNumber: 150,
        postShareNumber: 20,
        postReactions: {
            postLikesNumber: 35,
            postDislikesNumber: 15,
            postHappinessNumber: 20,
            postUnhappinessNumber: 5,
        },
        postTags: ["Technology", "Lorem"],
        postType: ["text"],
        comment: [
            {
                postCommentContent: "Great post!",
            },
            {
                postCommentContent: "I love this!",
            },
        ],
        postCommentNumber: 200,
        postAttachments: [
            {
                attachmentId: "1",
                type: "image",
                picture: Illustration01,
                url: "https://example.com/image.jpg",
            },
        ],
        postLocations: {
            postLatitude: "40.7128",
            postLongitude: "-74.0060",
            postLocationName: "New York City",
        },
        postPrivacy: "public",
        postCreateAt: "2023-11-11T12:30:00Z",
        postUpdateAt: "2023-11-11T14:45:00Z",
    },
    {
        postTitle: "Lorem Ipsum Title",
        postAuthor: {
            authorName: "John Doe",
            authorAvatar: Avatar,
        },
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        postViewNumber: 150,
        postShareNumber: 20,
        postReactions: {
            postLikesNumber: 1200000000000000,
            postDislikesNumber: 5,
            postHappinessNumber: 500,
            postUnhappinessNumber: 5,
        },
        postTags: ["Technology", "Lorem"],
        postType: ["text"],
        comment: [
            {
                postCommentContent: "Great post!",
            },
            {
                postCommentContent: "I love this!",
            },
        ],
        postCommentNumber: 200,
        postAttachments: [
            {
                attachmentId: "1",
                type: "image",
                picture: Avatar,
                url: "https://example.com/image.jpg",
            },
        ],
        postLocations: {
            postLatitude: "40.7128",
            postLongitude: "-74.0060",
            postLocationName: "New York City",
        },
        postPrivacy: "public",
        postCreateAt: "2023-11-11T12:30:00Z",
        postUpdateAt: "2023-11-11T14:45:00Z",
    },
    {
        postTitle: "Lorem Ipsum Title",
        postAuthor: {
            authorName: "John Doe",
            authorAvatar: Avatar,
        },
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        postViewNumber: 150,
        postShareNumber: 20,
        postReactions: {
            postLikesNumber: 1200000000000000,
            postDislikesNumber: 5,
            postHappinessNumber: 500,
            postUnhappinessNumber: 5,
        },
        postTags: ["Technology", "Lorem"],
        postType: ["text"],
        comment: [
            {
                postCommentContent: "Great post!",
            },
            {
                postCommentContent: "I love this!",
            },
        ],
        postCommentNumber: 200,
        postAttachments: [
            {
                attachmentId: "1",
                type: "image",
                picture: Illustration02,
                url: "https://example.com/image.jpg",
            },
        ],
        postLocations: {
            postLatitude: "40.7128",
            postLongitude: "-74.0060",
            postLocationName: "New York City",
        },
        postPrivacy: "public",
        postCreateAt: "2023-11-11T12:30:00Z",
        postUpdateAt: "2023-11-11T14:45:00Z",
    },
    {
        postTitle: "Lorem Ipsum Title",
        postAuthor: {
            authorName: "John Doe",
            authorAvatar: Avatar,
        },
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        postViewNumber: 150,
        postShareNumber: 20,
        postReactions: {
            postLikesNumber: 1200000000000000,
            postDislikesNumber: 5,
            postHappinessNumber: 500,
            postUnhappinessNumber: 5,
        },
        postTags: ["Technology", "Lorem"],
        postType: ["text"],
        comment: [
            {
                postCommentContent: "Great post!",
            },
            {
                postCommentContent: "I love this!",
            },
        ],
        postCommentNumber: 200,
        postAttachments: [
            {
                attachmentId: "1",
                type: "image",
                picture: Illustration01,
                url: "https://example.com/image.jpg",
            },
        ],
        postLocations: {
            postLatitude: "40.7128",
            postLongitude: "-74.0060",
            postLocationName: "New York City",
        },
        postPrivacy: "public",
        postCreateAt: "2023-11-11T12:30:00Z",
        postUpdateAt: "2023-11-11T14:45:00Z",
    },
    {
        postTitle: "Lorem Ipsum Title",
        postAuthor: {
            authorName: "John Doe",
            authorAvatar: Avatar,
        },
        postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        postViewNumber: 150,
        postShareNumber: 20,
        postReactions: {
            postLikesNumber: 1200000000000000,
            postDislikesNumber: 5,
            postHappinessNumber: 500,
            postUnhappinessNumber: 5,
        },
        postTags: ["Technology", "Lorem"],
        postType: ["text"],
        comment: [
            {
                postCommentContent: "Great post!",
            },
            {
                postCommentContent: "I love this!",
            },
        ],
        postCommentNumber: 200,
        postAttachments: [
            {
                attachmentId: "1",
                type: "image",
                picture: Illustration03,
                url: "https://example.com/image.jpg",
            },
        ],
        postLocations: {
            postLatitude: "40.7128",
            postLongitude: "-74.0060",
            postLocationName: "New York City",
        },
        postPrivacy: "public",
        postCreateAt: "2023-11-11T12:30:00Z",
        postUpdateAt: "2023-11-11T14:45:00Z",
    },
];

export const fakeVideoListData = [
    {
        video_id: "1",
        video_title: "Awesome Video Title",
        video_description: "This is an amazing video showcasing...",
        video_url: Video_01,
        creator: {
            user_id: "user123",
            username: "awesome_creator",
            profile_picture_url: Avatar,
            followers_count: 10000,
            following_count: 500,
            verified: true
        },
        views_count: 100000,
        likes_count: 25000,
        comments: [
            {
                comment_id: "comment1",
                comment_text: "This video is awesome!",
                user: {
                    user_id: "user456",
                    username: "commenter1",
                    profile_picture_url: Avatar,
                    verified: false
                },
                likes_count: 50,
                replies: [
                    {
                        replies_id: "reply1",
                        replies_text: "Thank you! 😊",
                        user: {
                            user_id: "user123",
                            username: "awesome_creator",
                            profile_picture_url: Avatar,
                            verified: true
                        },
                        likes_count: 20
                    }
                ]
            },
        ],
        shares_count: 5000,
        tags: ["funny", "cool", "viral"],
        location: {
            name: "City, Country",
            latitude: 40.7128,
            longitude: -74.0060
        },
        duration: "0:30", // Format: minutes:seconds
        uploadedAt: "2023-11-30T08:00:00Z",
        isLive: false,
        isFavorited: false,
    },
    {
        video_id: "1",
        video_title: "Awesome Video Title",
        video_description: "This is an amazing video showcasing...",
        video_url: Video_02,
        creator: {
            user_id: "user123",
            username: "awesome_creator",
            profile_picture_url: Avatar,
            followers_count: 10000,
            following_count: 500,
            verified: true
        },
        views_count: 100000,
        likes_count: 25000,
        comments: [
            {
                comment_id: "comment1",
                comment_text: "This video is awesome!",
                user: {
                    user_id: "user456",
                    username: "commenter1",
                    profile_picture_url: Avatar,
                    verified: false
                },
                likes_count: 50,
                replies: [
                    {
                        replies_id: "reply1",
                        replies_text: "Thank you! 😊",
                        user: {
                            user_id: "user123",
                            username: "awesome_creator",
                            profile_picture_url: Avatar,
                            verified: true
                        },
                        likes_count: 20
                    }
                ]
            },
        ],
        shares_count: 5000,
        tags: ["funny", "cool", "viral"],
        location: {
            name: "City, Country",
            latitude: 40.7128,
            longitude: -74.0060
        },
        duration: "0:30", // Format: minutes:seconds
        uploadedAt: "2023-11-30T08:00:00Z",
        isLive: false,
        isFavorited: false,
    },
    {
        video_id: "1",
        video_title: "Awesome Video Title",
        video_description: "This is an amazing video showcasing...",
        video_url: Video_03,
        creator: {
            user_id: "user123",
            username: "awesome_creator",
            profile_picture_url: Avatar,
            followers_count: 10000,
            following_count: 500,
            verified: true
        },
        views_count: 100000,
        likes_count: 25000,
        comments: [
            {
                comment_id: "comment1",
                comment_text: "This video is awesome!",
                user: {
                    user_id: "user456",
                    username: "commenter1",
                    profile_picture_url: Avatar,
                    verified: false
                },
                likes_count: 50,
                replies: [
                    {
                        replies_id: "reply1",
                        replies_text: "Thank you! 😊",
                        user: {
                            user_id: "user123",
                            username: "awesome_creator",
                            profile_picture_url: Avatar,
                            verified: true
                        },
                        likes_count: 20
                    }
                ]
            },
        ],
        shares_count: 5000,
        tags: ["funny", "cool", "viral"],
        location: {
            name: "City, Country",
            latitude: 40.7128,
            longitude: -74.0060
        },
        duration: "0:30", // Format: minutes:seconds
        uploadedAt: "2023-11-30T08:00:00Z",
        isLive: false,
        isFavorited: false,
    },
    {
        video_id: "1",
        video_title: "Awesome Video Title",
        video_description: "This is an amazing video showcasing...",
        video_url: Video_04,
        creator: {
            user_id: "user123",
            username: "awesome_creator",
            profile_picture_url: Avatar,
            followers_count: 10000,
            following_count: 500,
            verified: true
        },
        views_count: 100000,
        likes_count: 25000,
        comments: [
            {
                comment_id: "comment1",
                comment_text: "This video is awesome!",
                user: {
                    user_id: "user456",
                    username: "commenter1",
                    profile_picture_url: Avatar,
                    verified: false
                },
                likes_count: 50,
                replies: [
                    {
                        replies_id: "reply1",
                        replies_text: "Thank you! 😊",
                        user: {
                            user_id: "user123",
                            username: "awesome_creator",
                            profile_picture_url: Avatar,
                            verified: true
                        },
                        likes_count: 20
                    }
                ]
            },
        ],
        shares_count: 5000,
        tags: ["funny", "cool", "viral"],
        location: {
            name: "City, Country",
            latitude: 40.7128,
            longitude: -74.0060
        },
        duration: "0:30", // Format: minutes:seconds
        uploadedAt: "2023-11-30T08:00:00Z",
        isLive: false,
        isFavorited: false,
    },
    {
        video_id: "1",
        video_title: "Awesome Video Title",
        video_description: "This is an amazing video showcasing...",
        video_url: Video_05,
        creator: {
            user_id: "user123",
            username: "awesome_creator",
            profile_picture_url: Avatar,
            followers_count: 10000,
            following_count: 500,
            verified: true
        },
        views_count: 100000,
        likes_count: 25000,
        comments: [
            {
                comment_id: "comment1",
                comment_text: "This video is awesome!",
                user: {
                    user_id: "user456",
                    username: "commenter1",
                    profile_picture_url: Avatar,
                    verified: false
                },
                likes_count: 50,
                replies: [
                    {
                        replies_id: "reply1",
                        replies_text: "Thank you! 😊",
                        user: {
                            user_id: "user123",
                            username: "awesome_creator",
                            profile_picture_url: Avatar,
                            verified: true
                        },
                        likes_count: 20
                    }
                ]
            },
        ],
        shares_count: 5000,
        tags: ["funny", "cool", "viral"],
        location: {
            name: "City, Country",
            latitude: 40.7128,
            longitude: -74.0060
        },
        duration: "0:30", // Format: minutes:seconds
        uploadedAt: "2023-11-30T08:00:00Z",
        isLive: false,
        isFavorited: false,
    },
    {
        video_id: "1",
        video_title: "Awesome Video Title",
        video_description: "This is an amazing video showcasing...",
        video_url: Video_06,
        creator: {
            user_id: "user123",
            username: "awesome_creator",
            profile_picture_url: Avatar,
            followers_count: 10000,
            following_count: 500,
            verified: true
        },
        views_count: 100000,
        likes_count: 25000,
        comments: [
            {
                comment_id: "comment1",
                comment_text: "This video is awesome!",
                user: {
                    user_id: "user456",
                    username: "commenter1",
                    profile_picture_url: Avatar,
                    verified: false
                },
                likes_count: 50,
                replies: [
                    {
                        replies_id: "reply1",
                        replies_text: "Thank you! 😊",
                        user: {
                            user_id: "user123",
                            username: "awesome_creator",
                            profile_picture_url: Avatar,
                            verified: true
                        },
                        likes_count: 20
                    }
                ]
            },
        ],
        shares_count: 5000,
        tags: ["funny", "cool", "viral"],
        location: {
            name: "City, Country",
            latitude: 40.7128,
            longitude: -74.0060
        },
        duration: "0:30", // Format: minutes:seconds
        uploadedAt: "2023-11-30T08:00:00Z",
        isLive: false,
        isFavorited: false,
    },
];

export const fakeVideoItemData =     {
    video_id: "1",
    video_title: "Awesome Video Title",
    video_description: "This is an amazing video showcasing, his is an amazing video showcasing..., his is an amazing video his is an amazing video This is an amazing video showcasing, his is an amazing video showcasing..., his is an amazing video his is an amazing videoThis is an amazing video showcasing, his is an amazing video showcasing..., his is an amazing video his is an amazing videoThis is an amazing video showcasing, his is an amazing video showcasing..., his is an amazing video his is an amazing videoThis is an amazing video showcasing, his is an amazing video showcasing..., his is an amazing video his is an amazing videoThis is an amazing video showcasing, his is an amazing video showcasing..., his is an amazing video his is an amazing videoThis is an amazing video showcasing, his is an amazing video showcasing..., his is an amazing video his is an amazing videoThis is an amazing video showcasing, his is an amazing video showcasing..., his is an amazing video his is an amazing video",
    video_url: Video_04,
    creator: {
        user_id: "user123",
        username: "awesome_creator",
        profile_picture_url: Avatar,
        followers_count: 10000,
        following_count: 500,
        verified: true
    },
    views_count: 100000,
    likes_count: 25000,
    comments: [
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                }
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
        {
            comment_id: "comment1",
            comment_text: "This video is awesome!",
            user: {
                user_id: "user456",
                username: "commenter1",
                profile_picture_url: Avatar,
                verified: false
            },
            likes_count: 50,
            replies: [
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
                {
                    replies_id: "reply1",
                    replies_text: "Thank you! 😊",
                    user: {
                        user_id: "user123",
                        username: "awesome_creator",
                        profile_picture_url: Avatar,
                        verified: true
                    },
                    likes_count: 20,
                    updated_at: "2023-11-30T08:00:00Z",
                },
            ],
            updated_at: "2023-11-30T08:00:00Z",
        },
    ],
    shares_count: 5000,
    tags: ["funny", "cool", "viral"],
    location: {
        name: "City, Country",
        latitude: 40.7128,
        longitude: -74.0060
    },
    duration: "0:30", // Format: minutes:seconds
    updated_at: "2023-11-30T08:00:00Z",
    isLive: false,
    isFavorited: false,
}

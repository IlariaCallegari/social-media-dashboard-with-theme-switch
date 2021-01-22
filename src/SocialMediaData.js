import iconFB from "./images/icon-facebook.svg";
import iconIG from "./images/icon-instagram.svg";
import iconTW from "./images/icon-twitter.svg";
import iconYT from "./images/icon-youtube.svg";

const socialMediaData = [
  {
    socialMedia: "Facebook",
    logo: iconFB,
    accountName: "@nathanf",
    totalFollowers: "1987",
    followerType: "followers",
    stats: "12",
    isUp: true,
    color: "hsl(208, 92%, 53%)",
  },
  {
    socialMedia: "Twitter",
    logo: iconTW,
    accountName: "@nathanf",
    totalFollowers: "1044",
    followerType: "followers",
    stats: "99",
    isUp: true,
    color: "hsl(203, 89%, 53%)",
  },
  {
    socialMedia: "Instagram",
    logo: iconIG,
    accountName: "@realnathanf",
    totalFollowers: "11k",
    followerType: "followers",
    stats: "1099",
    isUp: true,
    color: "linear-gradient(90deg, hsl(37, 97%, 70%), hsl(329, 70%, 58%))",
  },
  {
    socialMedia: "Youtube",
    logo: iconYT,
    accountName: "Nathan F.",
    totalFollowers: "8239",
    followerType: "subscribers",
    stats: "144",
    isUp: false,
    color: "hsl(348, 97%, 39%)",
  },
];

const overviewData = [
  {
    socialMedia: "Facebook",
    logo: iconFB,
    likes: {
        type: "Likes",
        totLikes: "52",
        likesStat: "2%",
        likeIsUp: false,
    },
    views: {
        type: "Page Views",
        totViews: "87",
        viewIsUp: true,
        viewsStat: "3%"
    },
  },
  {
    socialMedia: "Instagram",
    logo: iconIG,
    likes: {
        type: "Likes",
        totLikes: "5462",
        likesStat: "2257%",
        likeIsUp: true,
    },
    views: {
        type: "Page Views",
        totViews: "52K",
        viewIsUp: true,
        viewsStat: "1375%"
    },
  },
  {
    socialMedia: "Tweeter",
    logo: iconTW,
    likes: {
        type: "Likes",
        totLikes: "507",
        likesStat: "553%",
        likeIsUp: true,
    },
    views: {
        type: "Retweets",
        totViews: "117",
        viewIsUp: true,
        viewsStat: "303%"
    },
  },
  {
    socialMedia: "Youtube",
    logo: iconYT,
    likes: {
        type: "Likes",
        totLikes: "107",
        likesStat: "19%",
        likeIsUp: false,
    },
    views: {
        type: "Total Views",
        totViews: "1407",
        viewIsUp: false,
        viewsStat: "12%"
    },
  },
];
export { socialMediaData, overviewData};

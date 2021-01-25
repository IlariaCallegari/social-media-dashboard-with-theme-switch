import iconFB from "./images/icon-facebook.svg";
import iconIG from "./images/icon-instagram.svg";
import iconTW from "./images/icon-twitter.svg";
import iconYT from "./images/icon-youtube.svg";
import colors from "./styles/utils/variables"

const socialMediaData = [
  {
    socialMedia: "Facebook",
    logo: iconFB,
    accountName: "@nathanf",
    totalFollowers: "1987",
    followerType: "followers",
    stats: "12",
    isUp: true,
    color: colors.facebook
  },
  {
    socialMedia: "Twitter",
    logo: iconTW,
    accountName: "@nathanf",
    totalFollowers: "1044",
    followerType: "followers",
    stats: "99",
    isUp: true,
    color: colors.twitter,
  },
  {
    socialMedia: "Instagram",
    logo: iconIG,
    accountName: "@realnathanf",
    totalFollowers: "11k",
    followerType: "followers",
    stats: "1099",
    isUp: true,
    color: colors.instagram,
  },
  {
    socialMedia: "Youtube",
    logo: iconYT,
    accountName: "Nathan F.",
    totalFollowers: "8239",
    followerType: "subscribers",
    stats: "144",
    isUp: false,
    color: colors.youTube,
  },
];

const overviewData = [
  {
    socialMedia: "Facebook",
    logo: iconFB,
    likes: {
        type: "Likes",
        tot: "52",
        stat: "2%",
        isUp: false,
    },
    views: {
        type: "Page Views",
        tot: "87",
        isUp: true,
        stat: "3%"
    },
  },
  {
    socialMedia: "Instagram",
    logo: iconIG,
    likes: {
        type: "Likes",
        tot: "5462",
        stat: "2257%",
        isUp: true,
    },
    views: {
        type: "Page Views",
        tot: "52K",
        isUp: true,
        stat: "1375%"
    },
  },
  {
    socialMedia: "Tweeter",
    logo: iconTW,
    likes: {
        type: "Likes",
        tot: "507",
        stat: "553%",
        isUp: true,
    },
    views: {
        type: "Retweets",
        tot: "117",
        isUp: true,
        stat: "303%"
    },
  },
  {
    socialMedia: "Youtube",
    logo: iconYT,
    likes: {
        type: "Likes",
        tot: "107",
        stat: "19%",
        isUp: false,
    },
    views: {
        type: "Total Views",
        tot: "1407",
        isUp: false,
        stat: "12%"
    },
  },
];
export { socialMediaData, overviewData};

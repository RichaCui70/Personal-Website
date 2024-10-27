//These should always align.
export const TITLES = [
  {
    photo: "/photos/backgroundblurb/profile.jpg",
    title: "Richard Cui",
  },
  {
    photo: "/photos/backgroundblurb/adventure.jpg",
    title: "a thrill seeker",
  },
  {
    photo: "/photos/backgroundblurb/wingsforlife.jpg",
    title: "a wannabe runner",
  },
  {
    photo: "/photos/backgroundblurb/f1.jpg",
    title: "a big F1 fan",
  },
  {
    photo: "/photos/backgroundblurb/hockeyRattlers.jpg",
    title: "a goalie",
  },
  {
    photo: "/photos/backgroundblurb/vancouver.jpg",
    title: "a film camera fanatic",
  },
  {
    photo: "/photos/backgroundblurb/residenceAssistant.jpg",
    title: "a Residence Assistant",
  },
  {
    photo: "/photos/backgroundblurb/mapleleafs.jpg",
    title: "a Leafs loyalist",
  },
];

export const getTitles = () => {
  const titles = new Array<string>();
  TITLES.forEach((media) => titles.push(media.title));

  return titles;
};

export const getPhotos = () => {
  const photos = new Array<string>();
  TITLES.forEach((media) => photos.push(media.photo));

  return photos;
};

export const carouselPhotos = [
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
    caption: "May 5, 2024 - Wings for Life (22km @ 5:21min/km)"
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
    caption: "May 5, 2024 - Wings for Life (22km @ 5:21min/km)"
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
    caption: "May 5, 2024 - Wings for Life (22km @ 5:21min/km)"
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
    caption: "May 5, 2024 - Wings for Life (22km @ 5:21min/km)"
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
    caption: "May 5, 2024 - Wings for Life (22km @ 5:21min/km)"
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
    caption: "May 5, 2024 - Wings for Life (22km @ 5:21min/km)"
  },
];

export const filmPhotos = [
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
  },
  {
    photo: "/photos/blogs/16-9/1-wingsforlife.jpg",
  },
]

export const spotifyMetaData = {
  type: "Song",
  cover: "/photos/blogs/16-9/1-wingsforlife.jpg",
  title: "just stand there",
  credits: "Fred again.., SOAK"
}

export const stravaMetaData = {
  cover: "/photos/blogs/16-9/1-wingsforlife.jpg",
  distace: "",
  time: "",
  elevation: "",
  title: "",
  date: "",
}
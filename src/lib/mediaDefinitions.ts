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
    photo: "/photos/backgroundblurb/hockey.jpg",
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

//These should always align.
export const TITLES = [
  {
    photo: "/photos/profile.jpg",
    title: "Richard Cui",
  },
  {
    photo: "/photos/adventure.jpg",
    title: "a thrill seeker",
  },
  {
    photo: "/photos/wingsforlife.jpg",
    title: "a wannabe runner",
  },
  {
    photo: "/photos/f1.jpg",
    title: "a big F1 fan",
  },
  {
    photo: "/photos/hockey.jpg",
    title: "a goalie",
  },
  {
    photo: "/photos/vancouver.jpg",
    title: "a film camera fanatic",
  },
  {
    photo: "/photos/residenceAssistant.jpg",
    title: "a Residence Assistant",
  },
  {
    photo: "/photos/mapleleafs.jpg",
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

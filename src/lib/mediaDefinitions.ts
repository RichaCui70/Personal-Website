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
    photo: "/photos/carousel/1.jpg",
    caption: "May 1, 2024 - Garibaldi Lake"
  },
  {
    photo: "/photos/carousel/2.jpg",
    caption: "August 8, 2024 - Minute Maid Park"
  },
  {
    photo: "/photos/carousel/3.jpg",
    caption: "August 9, 2024 - NASA Johnston Space Center"
  },
  {
    photo: "/photos/carousel/4.jpg",
    caption: "August 9, 2024 - Waffle House"
  },
  {
    photo: "/photos/carousel/5.jpg",
    caption: "August 12, 2024 - The POST"
  },
  {
    photo: "/photos/carousel/6.jpg",
    caption: "August 28, 2024 - RLS Cup"
  },
];

export const filmPhotos = [
  {
    photo: "/photos/vsco/1.jpg",
  },
  {
    photo: "/photos/vsco/2.jpg",
  },
  {
    photo: "/photos/vsco/3.jpg",
  },
  {
    photo: "/photos/vsco/4.jpg",
  },
  {
    photo: "/photos/vsco/5.jpg",
  },
  {
    photo: "/photos/vsco/6.jpg",
  },
]

export const spotifyMetaData = {
  type: "Song",
  cover: "/photos/spotify/Ten.jpeg",
  title: "just stand there",
  credits: "Fred again.., SOAK"
}

export const stravaMetaData = {
  cover: "/photos/strava/CurrentStrava.jpeg",
  distance: "25.02",
  time: "2:33:03",
  pace: "6:07",
  title: "Big Bike Ride",
  date: "July 11th, 2024 at 9:00am",
  icon: "/icons/Run.svg"
}
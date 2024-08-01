
//These should always align. 
export const TITLES = [
    {
        photo: '/photos/profile.jpg',
        title: 'Richard Cui'
    },
    {
        photo: '/photos/vancouver.jpg',
        title: "a League of Legends Addict"
    },
    {
        photo: '/photos/campCanoe.jpg',
        title: "a Poor Rockclimber"
    },
    {
        photo: '/photos/cottage.jpg',
        title: "an Adventure Seeker"
    },
    {
        photo: '/photos/campWimbledon.jpg',
        title: "an Avid Runner"
    },
    {
        photo: '/photos/hockey.png',
        title: "a Sports Lover"
    },
    {
        photo: '/photos/residenceAssistant.jpg',
        title: "a Residence Assistant"
    },
]

export const getTitles = () => {
    const titles = new Array<string>
    TITLES.forEach((media) => titles.push(media.title))

    return titles
}

export const getPhotos = () => {
    const photos = new Array<string>
    TITLES.forEach((media) => photos.push(media.photo))

    return photos
}
const imageCollection = [
  {
    id: 1,
    media: "film",
    color: "false",
    location: "Chicago, IL",
    year: "2021",
    title: `Chicago Skyline`,
    description: "View of Chicago Skyline via Guaranteed Rate Field on the south side.",
    url: "images/bw1.jpg"
  },
  {
    id: 2,
    media: "film",
    color: "false",
    location: "Nashville, TN",
    year: "2018",
    title: `Megajoos Reunion`,
    description: "Drums setup for rehearsal in 2018 for Megajoos Reunion show at Keoghfest in.",
    url: "images/bw2.jpg"
  }
]

export const getImages = () => { 
  return imageCollection
}
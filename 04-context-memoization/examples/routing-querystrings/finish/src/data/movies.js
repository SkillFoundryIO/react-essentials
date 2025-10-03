export const movies = [
  {
    id: 1,
    title: "Star Wars: A New Hope",
    year: 1977,
    director: "George Lucas",
    cast: [
      { actor: "Mark Hamill", role: "Luke Skywalker" },
      { actor: "Harrison Ford", role: "Han Solo" },
      { actor: "Carrie Fisher", role: "Princess Leia" }
    ]
  },
  {
    id: 2,
    title: "Raiders of the Lost Ark",
    year: 1981,
    director: "Steven Spielberg",
    cast: [
      { actor: "Harrison Ford", role: "Indiana Jones" },
      { actor: "Karen Allen", role: "Marion Ravenwood" }
    ]
  },
  {
    id: 3,
    title: "Hackers",
    year: 1995,
    director: "Iain Softley",
    cast: [
      { actor: "Jonny Lee Miller", role: "Dade Murphy" },
      { actor: "Angelina Jolie", role: "Kate Libby" }
    ]
  },
  {
    id: 4,
    title: "Labyrinth",
    year: 1986,
    director: "Jim Henson",
    cast: [
      { actor: "David Bowie", role: "Jareth the Goblin King" },
      { actor: "Jennifer Connelly", role: "Sarah" }
    ]
  }
]

export function getMovieDirectors() {
  return [...new Set(movies.map(movie => movie.director))].sort();
}
let images = []

export const getImages = () => {
  return fetch("http://localhost:8088/images")
    .then(response => response.json())
    .then(parsedResponse => {
      images = parsedResponse
      return parsedResponse.sort(function(a, b){return 0.5 - Math.random()});
    })
}

export const useImages = () => {
  return [...images]
}
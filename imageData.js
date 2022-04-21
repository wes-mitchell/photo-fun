
export const getImages = () => {
  return fetch(`https://wes-mitchell.github.io/photoapi/database.json`)
    .then(response => response.json())
    .then(parsedResponse => {
      return parsedResponse
    })
}


// ====== Finds image by id and shows raw image =====

export const showRaw = (imageId) => {
  return getImages()
    .then(allImages => {
      const imageEl = document.querySelector(".content-container")
      const foundImage = allImages.images.find(image => image.id === imageId)
      imageEl.innerHTML = `<img src="${foundImage.raw}" alt="selected image" class="rawImage">`
    })
}




// export const getImages = () => {
//     return fetch("http://localhost:8088/images")
//       .then(response => response.json())
//       .then(parsedResponse => {
//           images = parsedResponse
//           return parsedResponse.sort(function(a, b){return 0.5 - Math.random()});
//         })
//       }




window.onload = function() {
  var imagesToFlip = [
    {
      imageId: "bio",
      image: "bone.png",
      imageFlipped: "boneFlipped.png"
    },
    {
      imageId: "treats",
      image: "bone.png",
      imageFlipped: "boneFlipped.png"
    },
    {
      imageId: "walks",
      image: "boneFlipped.png",
      imageFlipped: "bone.png"
    },
    {
      imageId: "puppy1",
      image: "puppy.jpg",
      imageFlipped: "puppyFlipped.jpg"
    },
    {
      imageId: "puppy2",
      image: "puppyFlipped.jpg",
      imageFlipped: "puppy.jpg"
    },
    {
      imageId: "puppy3",
      image: "puppy.jpg",
      imageFlipped: "puppyFlipped.jpg"
    }
  ]
  
  imagesToFlip.forEach(data => {
    setInterval(function() {
      var element = document.getElementById(data.imageId);

      var current = element.style.backgroundImage;

      element.style.backgroundImage = current.includes(data.imageFlipped) ? `url('images/${data.image}')` : `url('images/${data.imageFlipped}')`;
    }, 500);
  });
}

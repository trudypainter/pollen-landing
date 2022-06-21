window.onload = function () {
  // Index of current image
  // which is on display
  var imageIndex = 0;
  var imageLen = 14;
  var total = 0;

  // Object array of all the
  // images of class test
  var images = document.getElementsByClassName("test");

  // This tells us if mouse if over
  // image or not, We only change
  // image if mouse if over it
  var isMouseOverImage = false;

  // Object of parent element
  // containing all images
  var scrollImages = document.getElementById("scroll-image");

  // Stores the current scroll co-ordinates
  // so that the window don't scroll down
  // while scrolling the images
  var x, y;

  // This function sets the scroll to x, y
  function noScroll() {
    window.scrollTo(x, y);
  }

  // The following event id fired once when
  // We hover mouse over the images
  scrollImages.addEventListener("mouseenter", function () {
    // We store the current page
    // offset to x,y
    x = window.pageXOffset;
    y = window.pageYOffset;

    // We add the following event to
    // window object, so if we scroll
    // down after mouse is over the
    // image we can avoid scrolling
    // the window
    window.addEventListener("scroll", noScroll);

    // We set isMouseOverImage to
    // true, this means Mouse is
    // now over the image
    isMouseOverImage = true;
    console.log("mouseover");
  });

  // The following function is fired
  // when mouse is no longer over
  // the images
  scrollImages.addEventListener("mouseleave", function () {
    // We set isMouseOverImage to
    // false, this means mouse is
    // not over the image
    isMouseOverImage = false;

    // We remove the event we previously
    // added because we are no longer
    // over the image, the scroll will
    // now scroll the window
    window.removeEventListener("scroll", noScroll);
  });

  // The following function is called
  // when we move mouse wheel over
  // the images
  scrollImages.addEventListener("wheel", function (e) {
    // We check if we are over
    // image or not
    if (isMouseOverImage) {
      // The following condition
      // finds the next image
      // index depending if we
      // scroll up or scroll down

      total += e.deltaY;
      console.log("TOTAL: ", total);
      console.log(Math.floor(total / 40));
      imageIndex = Math.floor(total / 40) % imageLen;
      console.log(imageIndex);
      scrollImages.style.backgroundImage =
        "url('images/" + String(imageIndex) + ".jpeg')";
    }
  });
};

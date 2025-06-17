function upDate(previewPic) {
    // Log to confirm the event triggers
    console.log("Mouse over image triggered");
    console.log("Image source: " + previewPic.src);
    console.log("Image alt text: " + previewPic.alt);

    // Get the element with id 'image'
    let displayArea = document.getElementById("image");

    // Change background image to the image being hovered
    displayArea.style.backgroundImage = "url('" + previewPic.src + "')";

    // Change text to the alt text of the image
    displayArea.innerHTML = previewPic.alt;
}

function unDo() {
    // Get the element with id 'image'
    let displayArea = document.getElementById("image");

    // Reset background image
    displayArea.style.backgroundImage = "url('')";

    // Reset text
    displayArea.innerHTML = "Hover over an image below to display here.";
}

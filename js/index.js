let step = 0;

function next() {
    step++;
    if (step > 5)
        step = 0;
    document.getElementById("step").innerHTML = step;
    let photo = document.getElementById("photo");
    photo.src = "assets/" + step + ".png";

}
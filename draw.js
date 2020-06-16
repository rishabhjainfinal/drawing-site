// fullscreenelements
let full_screen = document.getElementById('full_screen')
let clo = document.getElementById('close')
let fullimage = document.getElementById("fullimge")
let like = document.querySelector('div#full_screen .likesanddislikes span:nth-child(1)')
let dislike = document.querySelector('div#full_screen .likesanddislikes span:nth-child(2)')
let discription = document.getElementById("discription")

let closed = document.getElementsByClassName('socialclose')[0]
let socialbox = document.getElementById("social")
let social = document.getElementsByClassName("socialmedialink")[0]
let contact = document.getElementsByClassName("socialmedialink")[1]
let home = document.getElementsByClassName("home")[0]

clo.onclick = function() {
    console.log("close_button_pressed")
    full_screen.style.display = 'none';
    like.style.color = 'white'
    dislike.style.color = 'white'
    like.style.transform = 'scale(1)'
    dislike.style.transform = 'scale(1)'
}
like.addEventListener('click', function() {
    console.log("like_button_pressed")
    like.style.color = 'rgba(98, 98, 230, 0.747)'
    like.style.transform = 'scale(1.39)'
    dislike.style.transform = 'scale(0.9)'
    dislike.style.color = 'rgb(0,0,0)'
})
dislike.addEventListener('click', function() {
        console.log("dislike_button_pressed")
        dislike.style.color = 'rgba(98, 98, 230, 0.747)'
        dislike.style.transform = 'scale(1.39)'
        like.style.transform = 'scale(0.9)'
        like.style.color = 'rgb(0,0,0)'
    })
    // toactivateonclickingimage
function fun(tag_id) {
    let im = document.getElementById(tag_id)
    console.log('photo_clicked_from_front_page')
    full_screen.style.display = "block";
    fullimage.src = im.src;
    let dis = document.querySelector(`#${tag_id}+h3`)
    discription.innerHTML = dis.innerHTML
};
social.onclick = function() {
    socialbox.style.display = 'flex';
}
contact.onclick = function() {
    socialbox.style.display = 'flex';
}
closed.onclick = function() {
    socialbox.style.display = 'none';
}

// home.onclick = function() {
//     alert("currently not linked")
// }
const galleryItems = document.querySelectorAll('.section-gallery-item'),
    closeBtns = document.querySelectorAll('close');

// galleryItems.forEach(showFullScreenMode);

// function showFullScreenMode(galleryItem) {
//     galleryItem.addEventListener('click', function(){
//         galleryItem.classList.add('full-screen');
        
//         let closeBtn = galleryItem.childNodes[3];
//         closeBtn.classList.remove('hidden');
//         closeBtn.addEventListener('click', closeFullScreenMode(galleryItem));
//     });    
// }

function closeFullScreenMode(galleryItem) {
    galleryItem.addEventListener('click', function(){
        galleryItem.classList.remove('full-screen');
        galleryItem.childNodes[3].classList.add('hidden');
    });
}

galleryItems.forEach(function(galleryItem) {
    galleryItem.addEventListener('click', function(e) {
        galleryItem.classList.add('full-screen');
        
        let closeBtn = galleryItem.childNodes[3];
        closeBtn.classList.remove('hidden');
        closeBtn.addEventListener('click', closeFullScreenMode(galleryItem));
    });
});

// function showFullScreenMode(galleryItem) {
//     galleryItem.classList.add('full-screen');
        
//     let closeBtn = galleryItem.childNodes[3];
//     closeBtn.classList.remove('hidden');
//     closeBtn.addEventListener('click', closeFullScreenMode(galleryItem));
// }

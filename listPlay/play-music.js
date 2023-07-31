document.addEventListener('DOMContentLoaded', function() {

    var playButtons = document.querySelectorAll('.playButtons');
    var audioElements = [];

    var currentAudio = null;

    playButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var audio = audioElements[index];
            if (button.classList.contains('fa-play')) {
                if (currentAudio !== null) {
                    currentAudio.pause();
                    if (currentAudio !== audio) {
                        currentAudio.currentTime = 0;
                    }
                }
                currentAudio = audio;
                audio.play();
                playButtons.forEach(function(btn) {
                    btn.classList.remove('fa-pause');
                    btn.classList.add('fa-play');
                });
                button.classList.remove('fa-play');
                button.classList.add('fa-pause');
            } else {
                audio.pause();
                button.classList.remove('fa-pause');
                button.classList.add('fa-play');
            }
        });
    });

    var rectangles = document.querySelectorAll('.rectangle');
    rectangles.forEach(function(rectangle) {

        var src = rectangle.dataset.src;
        var audio = new Audio(src);
        audioElements.push(audio);

        audio.addEventListener('ended', function() {
            playButtons.forEach(function (btn) {
                btn.classList.remove('fa-pause');
                btn.classList.add('fa-play');
            });
            
            var randomIdex = Math.floor(Math.random() * audioElements.length);
            currentAudio = audioElements[randomIdex];
            currentAudio.play();
            playButtons[randomIdex].classList.remove('fa-play');
            playButtons[randomIdex].classList.add('fa-pause');
        });
    });
});
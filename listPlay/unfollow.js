var followButtons = document.querySelectorAll('.followBtn');

followButtons.forEach(function(unfollow) {
    unfollow.addEventListener('click', function() {
        if (unfollow.classList.contains('Follow')) {
            unfollow.innerText = 'Follow';
            unfollow.classList.remove('Follow');
        } else {
            unfollow.innerText = 'Unfollow';
            unfollow.classList.add('Follow');
        }
    });
});
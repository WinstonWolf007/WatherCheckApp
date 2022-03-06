function openPage(name) {
    let page1 = document.getElementById('alert-page');
    let page2 = document.getElementById('settings-page');
    let page3 = document.getElementById('leaderboard-page');

    let title = document.querySelector('.displayNav');

    page1.style.display = 'none';
    page2.style.display = 'none';
    page3.style.display = 'none';
   
    title.innerHTML = name.toUpperCase();

    document.getElementById(name+'-page').style.display = 'block';
    document.getElementById(name+'-page').style.animation = 'sympa 1s';
}



let theme_3d_change = false;
let nav = document.querySelector('#settings-page #el3 input');
let el1 = document.querySelector('.nav .btn-nav');
nav.addEventListener('click', function() {
    alert('click')
    if (theme_3d_change) {
        nav2.classList.add('logo');
        nav2.classList.add('logo');
        nav2.classList.add('logo');
        theme_3d_change = false;
        // window.location.reload();
    }
    else {
        nav2.classList.remove('logo');
        nav2.classList.remove('logo');
        nav2.classList.remove('logo');
        theme_3d_change = true;
        // window.location.reload();
    }
})

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
document.addEventListener('DOMContentLoaded', () => {
    const redeemButton1 = document.getElementById('redeem-points-1');
    const redeemButton2 = document.getElementById('redeem-points-2');
    const pointsDisplay = document.getElementById('points');

    function redeemPoints(creditAmount) {
        let points = parseInt(pointsDisplay.textContent, 10);
        pointsDisplay.textContent = 0;
        alert(`You have redeemed 150 points and have been credited with ${creditAmount} points!`);
        
        setTimeout(() => {
            pointsDisplay.textContent = creditAmount;
        }, 10);
    }

    redeemButton1.addEventListener('click', () => redeemPoints(150));
    redeemButton2.addEventListener('click', () => redeemPoints(150));

    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        alert(`Profile updated!\nUsername: ${username}\nEmail: ${email}\nPhone: ${phone}`);
    });
});

function openScreen(evt, screenName) {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(screenName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

document.getElementsByClassName('tablink')[1].click();

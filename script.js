document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name-input');
    const nextBtn = document.getElementById('next-btn');
    const errorMsg = document.getElementById('error-msg');
    const firstDashboard = document.getElementById('first-dashboard');
    const secondDashboard = document.getElementById('second-dashboard');
    const greetingPart1 = document.getElementById('greeting-part1');
    const greetingPart2 = document.getElementById('greeting-part2');
    const clickNextBtn = document.getElementById('click-next-btn');
    const thirdDashboard = document.getElementById('third-dashboard');
    const thirdGreeting = document.getElementById('third-greeting');
    const yesBtn = document.getElementById('yes-btn');
    const noBtn = document.getElementById('no-btn');
    const fourthDashboard = document.getElementById('fourth-dashboard');
    const fourthGreeting = document.getElementById('fourth-greeting');
    const fourthNextBtn = document.getElementById('fourth-next-btn');
    const fifthDashboard = document.getElementById('fifth-dashboard');
    const fifthGreeting = document.getElementById('fifth-greeting');
    const giftYesBtn = document.getElementById('gift-yes-btn');
    const giftNoBtn = document.getElementById('gift-no-btn');
    const sixthDashboard = document.getElementById('sixth-dashboard');
    const giftBox1 = document.getElementById('gift-box1');
    const giftBox2 = document.getElementById('gift-box2');
    const resultText = document.getElementById('result-text');
    const seventhDashboard = document.getElementById('seventh-dashboard');
    const seventhGreeting = document.getElementById('seventh-greeting');
    const seventhNextBtn = document.getElementById('seventh-next-btn');
    const eighthDashboard = document.getElementById('eighth-dashboard');
    const eighthGreeting = document.getElementById('eighth-greeting');
    const dateYesBtn = document.getElementById('date-yes-btn');
    const dateNoBtn = document.getElementById('date-no-btn');
    const ninthDashboard = document.getElementById('ninth-dashboard');
    const ninthGreeting = document.getElementById('ninth-greeting');

    // Valid names (case-insensitive)
    const validNames = ['nisha', 'nisha sarkar'];

    // Function to validate input
    const validateInput = () => {
        const inputName = nameInput.value.trim().toLowerCase();
        if (validNames.includes(inputName)) {
            nextBtn.disabled = false;
            errorMsg.textContent = '';
        } else {
            nextBtn.disabled = true;
            errorMsg.textContent = '';
        }
    };

    // Input event for real-time validation
    nameInput.addEventListener('input', validateInput);

    // Focus event to ensure input is clickable
    nameInput.addEventListener('focus', () => {
        console.log('Input field focused'); // Debugging
        nameInput.select();
    });

    // First to Second Dashboard
    nextBtn.addEventListener('click', () => {
        const inputName = nameInput.value.trim().toLowerCase();
        if (validNames.includes(inputName)) {
            firstDashboard.style.opacity = '0';
            setTimeout(() => {
                firstDashboard.style.display = 'none';
                secondDashboard.style.display = 'flex';
                secondDashboard.style.opacity = '1';
                greetingPart1.textContent = 'Oh Madam ji?';
                setTimeout(() => {
                    greetingPart2.style.display = 'block';
                    greetingPart2.textContent = "I'm soo grateful you finally decided to visit my site🤭";
                }, 3000);
            }, 1000);
        } else {
            errorMsg.textContent = 'Abe tum kon ha?....this website is not for you!';
        }
    });

    // Second to Third Dashboard
    clickNextBtn.addEventListener('click', () => {
        secondDashboard.style.opacity = '0';
        setTimeout(() => {
            secondDashboard.style.display = 'none';
            thirdDashboard.style.display = 'flex';
            thirdDashboard.style.opacity = '1';
            thirdGreeting.textContent = 'Madam ji ek baat bolna tha';
        }, 1000);
    });

    // Third to Fourth Dashboard
    yesBtn.addEventListener('click', () => {
        thirdDashboard.style.opacity = '0';
        setTimeout(() => {
            thirdDashboard.style.display = 'none';
            fourthDashboard.style.display = 'flex';
            fourthDashboard.style.opacity = '1';
            fourthGreeting.textContent = 'madam ji aap bahut cute ho...hehe~';
        }, 1000);
    });

    // Third Dashboard: No button with loop
    noBtn.addEventListener('click', () => {
        noBtn.style.animation = 'disappear 0.5s forwards';
        setTimeout(() => {
            noBtn.textContent = 'Are man v jao ji🤧!';
            noBtn.style.animation = 'reappear 0.5s forwards';
        }, 500);
    });

    // Fourth to Fifth Dashboard
    fourthNextBtn.addEventListener('click', () => {
        fourthDashboard.style.opacity = '0';
        setTimeout(() => {
            fourthDashboard.style.display = 'none';
            fifthDashboard.style.display = 'flex';
            fifthDashboard.style.opacity = '1';
            fifthGreeting.textContent = 'Madam ji, ek gift ha aapke liya!';
        }, 1000);
    });

    // Fifth Dashboard: Gift Yes button
    giftYesBtn.addEventListener('click', () => {
        fifthDashboard.style.opacity = '0';
        setTimeout(() => {
            fifthDashboard.style.display = 'none';
            sixthDashboard.style.display = 'flex';
            sixthDashboard.style.opacity = '1';
        }, 1000);
    });

    // Fifth Dashboard: Gift No button with loop
    giftNoBtn.addEventListener('click', () => {
        giftNoBtn.style.animation = 'disappear 0.5s forwards';
        setTimeout(() => {
            giftNoBtn.textContent = 'please dek lo na!';
            giftNoBtn.style.animation = 'reappear 0.5s forwards';
        }, 500);
    });

    // Sixth Dashboard: Gift box selection
    const selectGift = (box) => {
        box.style.animation = 'flip-forward 0.5s forwards';
        setTimeout(() => {
            box.textContent = '💍';
            resultText.style.display = 'block';
            resultText.textContent = 'aww... you pick a ring!';
            // Disable other box
            giftBox1.style.pointerEvents = 'none';
            giftBox2.style.pointerEvents = 'none';
            // Transition to seventh dashboard after 2 seconds
            setTimeout(() => {
                sixthDashboard.style.opacity = '0';
                setTimeout(() => {
                    sixthDashboard.style.display = 'none';
                    seventhDashboard.style.display = 'flex';
                    seventhDashboard.style.opacity = '1';
                    seventhGreeting.textContent = 'ek aur bat puchna ha🤭';
                }, 1000);
            }, 2000);
        }, 500);
    };

    giftBox1.addEventListener('click', () => selectGift(giftBox1));
    giftBox2.addEventListener('click', () => selectGift(giftBox2));

    // Seventh to Eighth Dashboard
    seventhNextBtn.addEventListener('click', () => {
        seventhDashboard.style.opacity = '0';
        setTimeout(() => {
            seventhDashboard.style.display = 'none';
            eighthDashboard.style.display = 'flex';
            eighthDashboard.style.opacity = '1';
            eighthGreeting.textContent = 'Madam ji, Date ma chalogi mera sath?🎀';
        }, 1000);
    });

    // Eighth Dashboard: Date Yes button
    dateYesBtn.addEventListener('click', () => {
        eighthDashboard.style.opacity = '0';
        setTimeout(() => {
            eighthDashboard.style.display = 'none';
            ninthDashboard.style.display = 'flex';
            ninthDashboard.style.opacity = '1';
            ninthGreeting.textContent = 'aap mera, pasandita Aurat ho 🤭';
        }, 1000);
    });

    // Eighth Dashboard: Date No button with loop
    dateNoBtn.addEventListener('click', () => {
        dateNoBtn.style.animation = 'disappear 0.5s forwards';
        setTimeout(() => {
            dateNoBtn.textContent = 'please chalo na🤧!';
            dateNoBtn.style.animation = 'reappear 0.5s forwards';
        }, 500);
    });

    // Ensure input is focused on page load
    nameInput.focus();
});

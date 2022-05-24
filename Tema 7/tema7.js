document.addEventListener('keydown', e => {
    const ball = document.getElementById('ball');
    const ballStyles = window.getComputedStyle(ball);
    const ballTop = parseInt(ballStyles.getPropertyValue('top'));
    const ballLeft = parseInt(ballStyles.getPropertyValue('left'));

    switch (e.code) {
        case 'KeyW':
            ball.style.top = String(ballTop - 10) + 'px';
            break;
        case 'KeyA':
            ball.style.left = String(ballLeft - 10) + 'px';
            break;
        case 'KeyS':
            ball.style.top = String(ballTop + 10) + 'px';
            break;
        case 'KeyD':
            ball.style.left = String(ballLeft + 10) + 'px';
            break;
    }
});


document.addEventListener('click', (e) => {
    if (e.pageX > 100) {
        const squareNode = document.createElement('div');

        squareNode.classList.add('square');
        squareNode.style.top = e.pageY + 'px';
        squareNode.style.left = e.pageX + 'px';

        document.getElementsByTagName('body')[0].appendChild(squareNode);
    }
});


const resetBtn = document.getElementsByTagName('button')[0];

resetBtn.addEventListener('click', () => {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++)
        squares[i].style.display = 'None';
});
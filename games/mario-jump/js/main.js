let score = +document.querySelector('.score span').innerText;
const mario = document.querySelector('.mario');
const pipe  = document.querySelector('.pipe');
const jump = () => {
    mario.classList.add('jump');
    score++;
    document.querySelector('.score span').innerText = score;
    setTimeout(()=>{
        mario.classList.remove('jump');
    }, 500)
}
const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    if (
            pipePosition <= 125 && 
            marioPosition <= 110            
        ) {
        pipe.style.animation  = 'none';
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './images/game-over.png';
        clearInterval(loop);
    }
},10);
document.addEventListener('keydown', jump);
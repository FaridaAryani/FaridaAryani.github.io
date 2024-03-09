const $next = document.querySelector('.next');
const $prev = document.querySelector('.prev');

$next.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slider').appendChild(items[0]);
    },
);
$prev.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');
        document.querySelector('.slider').appendChild(items[items.length-1]);
    },
);
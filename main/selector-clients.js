document.querySelectorAll('.container-selector').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.container-selector').forEach(el => {
            el.classList.remove('selected');
            el.classList.add('unselected');
        });
        item.classList.remove('unselected');
        item.classList.add('selected');
    });
});

document.querySelectorAll('.container-team-selector').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.container-team-selector').forEach(el => {
            el.classList.remove('selected');
            el.classList.add('unselected');
        });
        item.classList.remove('unselected');
        item.classList.add('selected');
    });
});
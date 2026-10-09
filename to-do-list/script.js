// Single-select groups: only one active at a time
function singleSelect(itemSelector) {
    document.querySelectorAll(itemSelector).forEach(item => {
        item.addEventListener('click', () => {
            item.parentElement
                .querySelectorAll(itemSelector)
                .forEach(el => el.classList.remove('active'));
            item.classList.add('active');
        });
    });
}

singleSelect('.tab');
singleSelect('.seg button');

// Toggles: on/off
document.querySelectorAll('.switch').forEach(sw => {
    sw.addEventListener('click', () => sw.classList.toggle('on'));
});

// Schedule check circles
document.querySelectorAll('.check').forEach(c => {
    c.addEventListener('click', () => {
        c.classList.toggle('done');
        c.textContent = c.classList.contains('done') ? '✓' : '';
    });
});
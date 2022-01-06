const execute = () => {
    const h = React.createElement;
    const $app = document.querySelector('#app');

    const Avatar = params => {
        const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
        return h('img', {src});
    };

    ReactDOM.render(
        h('div', null, [h(Avatar, {id: 1}), h(Avatar, {id: 2})]),
        $app);

    /*const Avatar = params => {
        const src = `https://randomuser.me/api/portraits/women/${params.id}.jpg`
        return `
            <picture>
                <img src="${src}" alt="Avatar">
                <em>${params.name}</em>
            </picture>
                `
    }
    $app.innerHTML += Avatar({id: 1, name: 'Lisa'});
    $app.innerHTML += Avatar({id: 3, name: 'Anto'});

    $app.querySelectorAll('img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('disabled');
        });
    });*/
}
window.addEventListener("DOMContentLoaded", execute);
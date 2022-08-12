const files = [
    "/assets/start-13691.mp3",
    "/assets/plasmablaster-37114.mp3",
];

const players = {
    hover:null,
    click:null
}
Object.keys(players).forEach((key, i)=>{
    players[key] = document.createElement('audio');
    const source = document.createElement('source')
    source.src=files[i];
    source.type="audio/mpeg";
    players[key].append(source);
    document.body.append(players[key])
})



document.querySelectorAll('[play-on-hover]').forEach(ele => {
    ele.addEventListener('mouseover', () => players.hover.play())
})
document.querySelectorAll('[play-on-click]').forEach(ele => {
    ele.addEventListener('click', () => players.click.play())
})
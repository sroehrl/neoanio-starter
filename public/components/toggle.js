
const toggles = document.querySelectorAll('[data-toggle]');
toggles.forEach(toggle => {
    const sourceElements = document.getElementById(toggle.dataset.source).childNodes;
    // hide target
    const target = document.getElementById(toggle.dataset.target);
    target.classList.add('hidden');
    // attach listener
    toggle.addEventListener('click', ev => {
        target.querySelector('section').innerText = '';
        if(target.classList.contains('hidden')){
            target.classList.remove('hidden')
            let counter = -300;
            for(let i = 0; i < sourceElements.length; i++){
                if(sourceElements[i].nodeType === 1){
                    counter += 300;
                    const cloned = sourceElements[i].cloneNode(true);
                    cloned.classList.add('m-y-4');
                    cloned.classList.add('hidden');
                    target.querySelector('section').appendChild(cloned)
                    // dropdown?
                    let ul = null;
                    if(cloned.classList.contains('dropdown')){
                        ul = cloned.querySelector('ul')
                        ul.style.display = 'block';
                        ul.style.position = 'relative';

                        ul.classList.add('b-rounded')
                    }
                    setTimeout(()=>{
                        cloned.classList.add('appear')
                        if(ul){
                            setTimeout(()=> ul.classList.add('appear'), 300)

                        }
                    }, counter)



                }
            }
        } else {
            target.classList.add('hidden')
        }
    })
})

// dropdowns
const dropdowns = document.querySelectorAll('.menu-link.dropdown');
if(dropdowns){
    dropdowns.forEach(ele => {
        ele.addEventListener('click', ev => {
            const ul = ele.querySelector('ul');
            const visible = ul.style.display === 'block';
            ul.style.display = visible ? 'none' : 'block';
            setTimeout(()=>{
                ul.classList[visible?'remove':'add']('appear')
            },50)

        })
    })
}

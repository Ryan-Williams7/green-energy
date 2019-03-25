function preloader() {
        const imagesPaths = [
           "./img/leaf1.jpg",
           "./img/leaf2.jpg",
           "./img/leaf3.jpg"
        ];
        const images = [];
        for (let i = 0; i < imagesPaths.length; i++) {
            images[i] = new Image();
            images[i].src = imagesPaths[i];
        }

        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };    
    window.addEventListener("load", preloader);

 
const btns = document.querySelectorAll("button");


const resources = [
    {
        headingContent: "Here's how we get energy to everyone", 
        imgUrl: "./img/leaf1.jpg",
        imgAlt: "a leaf",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet pellentesque odio. Vivamus consectetur tortor nec massa hendrerit pharetra. In non aliquam metus. Aliquam rutrum libero eget dui pulvinar bibendum. Proin ut nibh bibendum nibh ultricies dictum convallis in enim. Sed sollicitudin feugiat felis, ac facilisis eros tincidunt a. Suspendisse finibus, ex nec iaculis sollicitudin, massa libero bibendum odio, tempor suscipit justo ipsum eu nibh. Vivamus a purus ornare, vulputate ipsum eu, pellentesque massa. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus imperdiet lacus vitae fermentum finibus. Proin accumsan rutrum euismod. Integer egestas venenatis nisi sit amet elementum. Suspendisse porta elit diam. Vestibulum vehicula risus sit amet ante bibendum suscipit. Nunc vitae quam arcu."
    },
    {
        headingContent: "Here's another way we can get energy to everyone",
        imgUrl: "./img/leaf2.jpg",
        imgAlt: "a leaf",
        bodyText: "Integer ut aliquet sapien. Donec sit amet porta purus, ut egestas sem. Fusce tellus elit, placerat non diam quis, egestas efficitur tortor. Duis posuere tincidunt nunc, eu dictum nibh finibus eget. Fusce quis venenatis eros, a efficitur odio. Quisque at rhoncus justo. Sed eget mi sed nisl ultrices suscipit non vitae velit. Donec sollicitudin nulla quis dolor gravida, ut accumsan lorem imperdiet. Quisque vestibulum est eget elit cursus, vulputate molestie quam maximus. Donec a magna augue."
    },
    {
        headingContent: "This is our best idea for energy!",
        imgUrl: "./img/leaf3.jpg",
        imgAlt: "a leaf",
        bodyText: "Vivamus at ligula at nisl efficitur porta. Nullam dolor nunc, faucibus at venenatis dictum, tempor at sem. Sed ut lectus rutrum ipsum vestibulum egestas sit amet nec arcu. Etiam purus mauris, consequat quis pharetra et, commodo vel metus. Nam lorem massa, efficitur quis nibh posuere, luctus faucibus velit. Maecenas quis neque et velit mollis condimentum a in mi. Pellentesque suscipit laoreet ex nec dignissim."
    }
];


const currentContent = document.querySelector(".current-content");

currentContent.innerHTML = `<article>
                                    <h2>${resources[0].headingContent}</h2>
                                    <img src="${resources[0].imgUrl}" alt="${resources[0].imgAlt}">
                                    <p>${resources[0].bodyText}</p>
                                    </article>` ;


function contentLoader(ev) {
    let eventTarget = ev.target.textContent;
    console.log(eventTarget.textContent);

    if (eventTarget === "Energy Concept 1") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[0].headingContent}</h2>
                                    <img src="${resources[0].imgUrl}" alt="${resources[0].imgAlt}">
                                    <p>${resources[0].bodyText}</p>
                                    </article>` ;
    } else if (eventTarget === "Energy Concept 2") {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[1].headingContent}</h2>
                                    <img src="${resources[1].imgUrl}" alt="${resources[1].imgAlt}">
                                    <p>${resources[1].bodyText}</p>
                                    </article>` ;
    } else {
        currentContent.innerHTML = `<article>
                                    <h2>${resources[2].headingContent}</h2>
                                    <img src="${resources[2].imgUrl}" alt="${resources[2].imgAlt}">
                                    <p>${resources[2].bodyText}</p>
                                    </article>` ;
    }
    
    for(let btn of btns) {
        if (btn.id){       
            btn.removeAttribute("id");          
        }
    ev.currentTarget.id = "active";
    }
}


btns[0].addEventListener("click", contentLoader);
btns[1].addEventListener("click", contentLoader);
btns[2].addEventListener("click", contentLoader);

const testimonials = [
    {
        name: "Alice",
        photo: "./pics/alice.webp",
        text:  `Laurent s'adapte au profil et à la demande qui lui est faite. Sa connaissance de l'informatique, d'un bon nombre de langages de programmation et des pratiques permettant d'évoluer, font de lui un excellent professeur pour qui veut progresser dans ces domaines.`
    },
    {
        name: "Ariss",
        photo: "./pics/ariss.webp",
        text: `<strong>Parfait !</strong>
        Très pédagogue, explications très claire.Merci encore`
    },
    {
        name: "Coralie",
        photo: "./pics/coralie.webp",
        text:  `Très bonne communication !`
    },
    {
        name: "Cornélia",
        photo: "./pics/cornelia.webp",
        text:  `<strong>Parfait !</strong>
        Des cours très utiles pour mieux comprendre comment réaliser un site Web. Je recommande Monsieur Laurent qui connait très bien son travail, bon pédagogue et toujours à l'écoute.`
    },
    {
        name: "Laurent",
        photo: "./pics/laurent.webp",
        text:  `<strong>Parfait !</strong> professeur sérieux et compétant il m a aide a finir mon projet rapidement. encore merci`
    },
    {
        name: "Quentin",
        photo: "./pics/quentin.webp",
        text: `<strong>Parfait !</strong>
        Très bon professeur. Il me permet de revoir et de découvrir de nouvelle chose sur Ruby et Ruby on Rails`
    }
]


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photo, text } = testimonials[idx];
    imgEl.src = photo;
    textEl.innerHTML = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) idx = 0;
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}
//Pluie
const header = document.querySelector('.header');

function createDrop() {
	if (!header) return;
    
    const drop = document.createElement('div');
	drop.className = 'drop';

	drop.style.left = Math.random() * header.offsetWidth + 'px';
	drop.style.animationDuration = 3 + Math.random() * 3 + 's';

	header.appendChild(drop);

	setTimeout(() => drop.remove(), 6000);
}

setInterval(() => {
	if (window.scrollY < header.offsetHeight) {
		createDrop();
	}
}, 600);


//Cursor
const cursor = document.querySelector('.cursor');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

const speed = 0.12;

document.addEventListener('mousemove', e => {
	mouseX = e.clientX;
	mouseY = e.clientY;
});

function animateCursor() {
	cursorX += (mouseX - cursorX) * speed;
	cursorY += (mouseY - cursorY) * speed;

	cursor.style.left = cursorX + 'px';
	cursor.style.top = cursorY + 'px';

	requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll('a, button').forEach(el => {
	el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
	el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});


document.addEventListener('mousedown', () => {
	cursor.classList.add('click');
});

document.addEventListener('mouseup', () => {
	cursor.classList.remove('click');
});



// Premier roulement de la molette uniquement sur la page d'accueil
if (document.body.classList.contains('home')) {
    window.addEventListener("load", () => {
        const hero = document.querySelector('.logo');
        const firstSection = document.querySelector('.container');

        if (!hero || !firstSection) {
            console.error("fond-logo ou container introuvable");
            return;
        }

        let hasScrolledOnce = false;

        function scrollHandler(e) {
            if (hasScrolledOnce) return;       // déjà déclenché
            if (e.deltaY <= 0) return;         // uniquement scroll vers le bas

            const heroRect = hero.getBoundingClientRect();
            if (heroRect.bottom <= 0) return;  // hero déjà sorti → rien

            e.preventDefault();
            hasScrolledOnce = true;

            // Calcul de la position finale avec offset
            const offset = 90; // 50px au-dessus
            const sectionTop = firstSection.getBoundingClientRect().top + window.scrollY - offset;

            window.scrollTo({
                top: sectionTop,
                behavior: "smooth"
            });
        }

        // Écouteurs pour souris et tactile
        window.addEventListener("wheel", scrollHandler, { passive: false });
        window.addEventListener("touchmove", scrollHandler, { passive: false });
    });
}



//Animation projet portfolio
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.25
    });

    cards.forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener("DOMContentLoaded", () => {

    const projectCards = document.querySelectorAll(".project-card");
    const modal = document.getElementById("projectModal");

    if (!modal || projectCards.length === 0) return;

    const modalTitle = document.getElementById("modalTitle");
    const modalCategory = document.getElementById("modalCategory");
    const modalDescription = document.getElementById("modalDescription");
    const closeBtn = modal.querySelector(".modal-close");
    const overlay = modal.querySelector(".modal-overlay");
    const modalLink = document.getElementById("modalLink");

    //Données projets
    const projectsData = [
        {
            title: "R&Business",
            category: "Gestion de projet digital et innovation de service",
            link: "https://www.figma.com/proto/XLSbY9z3oOalF7anJqD1Um/App?node-id=0-1&t=KxOEXNqh1zxEWlf0-1",
            description: `
        <h4>Contexte</h4>
        <p>
        Dans le cadre d’un projet mené avec Keolis, j’ai participé à la conception
        et au pilotage d’une solution de service innovante visant à répondre aux
        problématiques de mobilité, d’accessibilité et de continuité de travail
        des collaborateurs lors des Jeux Olympiques de Paris 2024.
        </p>

        <h4>Problématique</h4>
        <p>
        Comment garantir des conditions de travail viables et continues pour
        les collaborateurs d’une grande entreprise de transport dans un
        contexte de perturbation majeure ?
        </p>

        <h4>Approche & rôle</h4>
        <p>
        Contribution au cadrage du projet et à la structuration globale :
        </p>
        <ul>
            <li>Recherche utilisateur (quantitative et qualitative)</li>
            <li>Analyse d’écosystème et parties prenantes</li>
            <li>Coordination des livrables</li>
            <li>Traduction des besoins en service concret</li>
        </ul>

        <h4>Réalisations clés</h4>
        <ul>
            <li>Étude utilisateur (questionnaire + entretiens)</li>
            <li>Personas & proposition de valeur</li>
            <li>Service de coworking mobile et digitalisé</li>
            <li>Livrables structurants pour un client corporate</li>
        </ul>

        <h4>Résultat</h4>
        <p>
        Une solution activable lors de crises de mobilité, combinant espace
        de travail mobile, flexibilité d’usage et coordination digitale.
        </p>

        <h4>Compétences mobilisées</h4>
        <p>
        Gestion de projet digital · Recherche utilisateur · Innovation de service ·
        Coordination · Relation client · Vision produit
        </p>`
        },
        {
            title: "Earth up",
            category: "Conception d’une plateforme web communautaire",
            link: "https://aurelie-gregoratto.github.io/quiz_earth_up/index.html", // pas de lien → pas affiché
            description: `
        <h4>Contexte</h4>
<p>
Dans le cadre du projet Earth Up, j’ai participé à la conception et au pilotage
d’une plateforme web communautaire visant à sensibiliser les utilisateurs aux
enjeux écologiques à travers des mécanismes de gamification et d’engagement digital.
L’objectif était de créer un service interactif capable de transformer des intentions
éco-responsables en actions concrètes.
</p>

<h4>Problématique</h4>
<p>
Comment concevoir une plateforme digitale capable d’engager durablement les
utilisateurs autour de pratiques écologiques, tout en combinant expérience
utilisateur, dimension communautaire et cohérence stratégique ?
</p>

<h4>Approche & rôle</h4>
<p>
Contribution au pilotage du projet et à la structuration des différentes phases :
</p>
<ul>
    <li>Définition du concept et des fonctionnalités clés</li>
    <li>Coordination des pôles développement, design et communication</li>
    <li>Structuration des parcours utilisateurs et de l’expérience UX</li>
    <li>Planification des livrables et suivi de l’avancement</li>
</ul>

<h4>Réalisations clés</h4>
<ul>
    <li>Conception d’une plateforme web avec profils utilisateurs et système de défis</li>
    <li>Mise en place d’un système de gamification (classements, quiz, progression)</li>
    <li>Structuration d’une base de données pour le suivi de l’engagement</li>
    <li>Déploiement d’une stratégie de communication digitale multi-plateforme</li>
</ul>

<h4>Résultat</h4>
<p>
Une plateforme web interactive combinant engagement communautaire,
mécaniques ludiques et sensibilisation écologique, pensée comme un
outil digital favorisant l’adoption de comportements responsables.
</p>

<h4>Compétences mobilisées</h4>
<p>
Gestion de projet digital · Coordination d’équipe · Conception de produit web ·
UX · Gamification · Stratégie digitale · Pilotage de livrables
</p>`
        },
        {
            title: "Edigenious",
            category: "Conception d'une plateforme digitale",
            link: "https://www.figma.com/proto/6OcxV1jmtRc659clzYZeS2/Maquette-Edigenious?node-id=1-725&starting-point-node-id=1%3A18&t=JIaVBgEACRfngMdU-1",
            description: `
        <h4>Contexte</h4>
<p>
EDIGENIOUS est une plateforme digitale de mise en relation entre apprenants et professeurs, visant à proposer une expérience d’apprentissage personnalisée et flexible.
Le projet s’inscrit dans une problématique clé du marché de l’éducation en ligne : faciliter l’accès à des compétences variées en connectant efficacement l’offre (enseignants) et la demande (apprenants).
</p>

<h4>Objectifs</h4>
<ul>
    <li>Centraliser l’accès à des cours dans divers domaines</li>
    <li>Offrir une expérience personnalisée via un système de matching</li>
    <li>Simplifier la planification et la gestion des sessions d’apprentissage</li>
</ul>

<h4>Gestion de projet</h4>
<ul>
    <li>Analyse du marché et benchmark concurrentiel</li>
    <li>Définition des besoins fonctionnels et rédaction des user stories</li>
    <li>Structuration du backlog (JIRA, priorisation, sprints)</li>
    <li>Mise en place des cadres agiles (DOR / DOD)</li>
</ul>

<h4>Enjeux</h4>
<ul>
    <li>Atteindre une masse critique d’utilisateurs</li>
    <li>Se différencier dans un marché concurrentiel</li>
</ul>

<h4>Résultat</h4>
<p>
Le projet a permis de concevoir une marketplace éducative structurée, avec une vision produit claire et un backlog priorisé en méthodologie Agile. Il a intégré une analyse stratégique du marché ainsi que les contraintes techniques et réglementaires, posant une base solide pour le développement et l’évolution de la plateforme.
</p>

<h4>Compétences mobilisées</h4>
<p>
Pilotage de projet en méthodologie Agile (Scrum) · Conception de produit web · UX · Stratégie digitale · Pilotage de livrables
</p>`
        },
    ];

    function openModal(index) {
    const project = projectsData[index];

    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category;
    modalDescription.innerHTML = project.description;

    // Gestion du lien externe
    if (project.link) {
        modalLink.href = project.link;
        modalLink.style.display = "inline-block";
    } else {
        modalLink.style.display = "none";
    }

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}
    
    function closeModal() {
    modal.classList.add("closing");

    setTimeout(() => {
        modal.classList.remove("active", "closing");
        document.body.style.overflow = "";
    }, 200); // durée = animation CSS
    }

    //Ouverture pop-up
    projectCards.forEach((card, index) => {
        card.addEventListener("click", () => {
            openModal(index);
        });
    });

    //Fermeture pop-up
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("active")) {
            closeModal();
        }
    });

});



//Contact
emailjs.init("M7svTtW2eNmlGwKO8");

const contactForm = document.getElementById("contactForm");

if (contactForm) {
	contactForm.addEventListener("submit", function(e) {
		e.preventDefault();

		if (document.getElementById("company")?.value !== "") {
			return;
		}

		emailjs.send("service_gyliflp", "template_uf3dd4m", {
			name: document.getElementById("name")?.value,
			email: document.getElementById("email")?.value,
			subject: document.getElementById("subject")?.value,
			message: document.getElementById("message")?.value
		}).then(function() {
			const success = document.getElementById("formSuccess");
			if (success) success.style.display = "block";

			contactForm.reset();
		}, function(error) {
			alert("Une erreur est survenue. Merci de réessayer.");
		});
	});
}


//loader
$(window).on("load", function(){
	$(".loader").fadeOut(1000);
});


//Animation bar nav
if (document.body.classList.contains('home')) {
    const navigation = document.querySelector('.header-container');

    if (navigation) {
        window.addEventListener('scroll', () => {
            if (window.innerWidth >= 768) {
                if (window.scrollY > 900) {
                    navigation.classList.add('anim-nav');
                } else {
                    navigation.classList.remove('anim-nav');
                }
            } else {
                if (window.scrollY > 200) {
                    navigation.classList.add('anim-nav');
                } else {
                    navigation.classList.remove('anim-nav');
                }
            }
        });
    }
}


//Flèche scroll haut de page
document.addEventListener("DOMContentLoaded", () => {

	const scrollBtn = document.querySelector(".scroll-top");

	if (!scrollBtn) return;

	window.addEventListener("scroll", () => {
		if (window.scrollY > 600) {
			scrollBtn.classList.add("show");
		} else {
			scrollBtn.classList.remove("show");
		}
	});

});
/* ===== NAVBAR ACTIVE ===== */
window.addEventListener('scroll',()=>{
  const home=document.getElementById('home');
  const navHome=document.querySelector('.navbar a');
  if(window.scrollY < home.offsetHeight-100)
    navHome.classList.add('active');
  else navHome.classList.remove('active');
});

/* ===== ABOUT CARDS ===== */
const featureCards=document.querySelectorAll('.feature-card');
function revealCards(){
  featureCards.forEach(card=>{
    if(card.getBoundingClientRect().top < window.innerHeight-100)
      card.classList.add('visible');
  });
}
window.addEventListener('scroll',revealCards);
window.addEventListener('load',revealCards);
featureCards.forEach(card=>{
  card.addEventListener('click',()=>card.classList.toggle('active'));
});

/* ===== SKILLS ===== */
const skillsCards=document.querySelectorAll('.skills-card');
const progressSpans=document.querySelectorAll('.progress-bar span');
let skillsAnimated=false;

skillsCards.forEach(card=>{
  card.addEventListener('click',()=>{
    skillsCards.forEach(c=>c.classList.remove('active'));
    card.classList.toggle('active');
  });
});

function animateSkills(){
  if(skillsAnimated) return;
  const sec=document.getElementById('skills');
  if(sec.getBoundingClientRect().top < window.innerHeight-100){
    skillsAnimated=true;
    skillsCards.forEach((c,i)=>{
      setTimeout(()=>{
        c.style.opacity='1';
        c.style.transform='translateY(0)';
      },i*200);
    });
    progressSpans.forEach((s,i)=>{
      setTimeout(()=>{
        s.style.width=s.dataset.width;
      },i*300+500);
    });
  }
}
window.addEventListener('scroll',animateSkills);
window.addEventListener('load',animateSkills);

/* ===== CONTACT ===== */
const cards=document.querySelectorAll('.info-card');
const form=document.querySelector('.contact-form');
function reveal(){
  cards.forEach(card=>{
    if(card.getBoundingClientRect().top < window.innerHeight-100)
      card.classList.add('show');
  });
  if(form.getBoundingClientRect().top < window.innerHeight-100)
    form.classList.add('show');
}
window.addEventListener('scroll',reveal);
window.addEventListener('load',reveal);

/* Location popup */
const locationCard=document.getElementById("locationCard");
const locationBox=document.getElementById("locationBox");
const closeLocation=document.getElementById("closeLocation");
locationCard.addEventListener("click",()=>locationBox.classList.add("show"));
closeLocation.addEventListener("click",()=>locationBox.classList.remove("show"));

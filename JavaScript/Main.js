function ControleLogo() {
    const Logotipo = document.getElementById
    ('Icon');
    const WindowLinks = document.getElementById('PanelLinks');
    const LinkClosed = document.getElementById('LinkClosed');
    const Pag = document.querySelector('body');


    Logotipo.addEventListener("mouseenter",()=>{
        Logotipo.innerHTML = (`<i class="bi bi-list"></i>`);
    })
    Logotipo.addEventListener("mouseout",()=>{
        Logotipo.innerHTML = (``);
    })
    Logotipo.addEventListener("click",()=>{
        WindowLinks.style.display = "flex";
        Pag.style.overflow = "hidden";
    })
    LinkClosed.addEventListener("click",()=>{
        WindowLinks.style.display = "none";
        Pag.style.overflow = "scroll";
    })
}

ControleLogo()

function ButtonBlock(){
    const ButtonsBlocked = [...document.getElementsByClassName('Blocked')];


    ButtonsBlocked.map((BB) => {
        BB.children[0].innerHTML = (`<i class="bi bi-lock"></i>`);
        BB.children[1].innerHTML = (`Bloqueado`);
    })
}
ButtonBlock()

const ButtonX = [...document.getElementsByClassName('ButtonX')];
const Frame = [...document.getElementsByClassName('Frame')];

ButtonX.map((BX) => {
    BX.addEventListener("click",()=>{
        Frame.map((FM)=>{
            FM.style.display = "none";
        })
    })
})

const ButtonWindow = [...document.getElementsByClassName('BunActive')];
ButtonWindow.map((WB, Wix) => {
    WB.addEventListener("click",()=>{
        Frame[Wix].style.display = ("flex");
    })
});
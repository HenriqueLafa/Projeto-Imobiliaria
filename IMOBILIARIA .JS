// Mensagem de boas-vindas
document.addEventListener('DOMContentLoaded', () => {
    const msg = document.createElement('div');
    msg.textContent = '🎉 Bem-vindo à JK Imobiliária!';
    msg.style.cssText = `
        position: fixed;
        top: 0;
        width: 100%;
        padding: 15px;
        background-color: #00b894;
        color: white;
        font-weight: bold;
        text-align: center;
        z-index: 9999;
        animation: slideIn 0.6s ease;
    `;
    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 5000);
});

// Botão flutuante para voltar ao topo
const botaoTopo = document.createElement('button');
botaoTopo.innerHTML = '⬆️';
botaoTopo.title = "Voltar ao topo";
botaoTopo.style.cssText = `
    position: fixed;
    bottom: 25px;
    right: 25px;
    padding: 12px 16px;
    font-size: 20px;
    background-color: #0984e3;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 999;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
`;
document.body.appendChild(botaoTopo);

botaoTopo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    botaoTopo.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Animação de entrada nas seções
const sections = document.querySelectorAll('section');
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = 'translateY(40px)';
    sec.style.transition = 'all 0.6s ease';
});

const animateOnScroll = () => {
    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = 'translateY(0)';
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Efeito nos links do menu
const menuLinks = document.querySelectorAll('header a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        link.style.color = '#d63031';
        setTimeout(() => {
            link.style.color = '';
        }, 1000);
    });
});
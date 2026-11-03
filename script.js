/* ===============================================================
   CLEMENTINO SERRALHERIA — JavaScript
   Telefone usado no formulário (somente números, com DDI e DDD).
   Se mudar o número, atualize também os links wa.me e o texto
   visível em index.html (pesquise por 558796239973).
   =============================================================== */
const WHATSAPP_NUMBER = '558796239973';

// MENU RESPONSIVO
const toggle = document.getElementById('menu-toggle');
const nav = document.getElementById('site-nav');
function closeMenu() {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menu');
}
toggle.addEventListener('click', () => {
  const opened = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(opened));
  toggle.setAttribute('aria-label', opened ? 'Fechar menu' : 'Abrir menu');
});
document.querySelectorAll('.site-nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMenu();
});

// BOTÃO VOLTAR AO TOPO
const backTop = document.getElementById('back-top');
function updateBackTop() { backTop.classList.toggle('is-visible', window.scrollY > 550); }
window.addEventListener('scroll', updateBackTop, {passive:true});
updateBackTop();
backTop.addEventListener('click', () => window.scrollTo({ top:0, behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' }));

// FORMULÁRIO: envia texto pronto para o WhatsApp, sem backend
const form = document.getElementById('budget-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const nome = document.getElementById('nome').value.trim();
  const regiao = document.getElementById('regiao').value.trim();
  const servico = document.getElementById('servico').value;
  const mensagem = document.getElementById('mensagem').value.trim();
  if (!nome || !servico || !mensagem) return;
  const texto = [
    'Olá, Clementino! Gostaria de solicitar um orçamento.',
    '',
    `*Nome:* ${nome}`,
    `*Serviço:* ${servico}`,
    ...(regiao ? [`*Cidade / bairro:* ${regiao}`] : []),
    `*Detalhes:* ${mensagem}`,
    '',
    'Aguardo seu retorno. Obrigado!'
  ].join('\n');
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
  // Abre em nova guia sem sair do site.
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.click();
});

// GALERIA AMPLIADA COM AVANÇAR / VOLTAR
const galleryItems = [...document.querySelectorAll('.gallery-item')];
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxCount = document.getElementById('lightbox-count');
let currentImage = 0;
function showGalleryImage(index) {
  currentImage = (index + galleryItems.length) % galleryItems.length;
  const item = galleryItems[currentImage];
  lightboxImage.src = item.dataset.gallerySrc;
  lightboxImage.alt = item.dataset.galleryTitle;
  lightboxTitle.textContent = item.dataset.galleryTitle;
  lightboxCount.textContent = `${currentImage + 1} / ${galleryItems.length}`;
}
galleryItems.forEach((item, index) => item.addEventListener('click', () => {
  showGalleryImage(index);
  if (typeof lightbox.showModal === 'function') lightbox.showModal();
}));
document.getElementById('lightbox-close').addEventListener('click', () => lightbox.close());
document.getElementById('lightbox-prev').addEventListener('click', () => showGalleryImage(currentImage - 1));
document.getElementById('lightbox-next').addEventListener('click', () => showGalleryImage(currentImage + 1));
lightbox.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });
lightbox.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') showGalleryImage(currentImage + 1);
  if (event.key === 'ArrowLeft') showGalleryImage(currentImage - 1);
});

// ANO AUTOMÁTICO DO RODAPÉ
document.getElementById('year').textContent = new Date().getFullYear();

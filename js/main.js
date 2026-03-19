/* ============================================================
   Summit Industrial Group — Main JavaScript
   ============================================================ */

'use strict';

/* ── Language System ── */
let lang = 'en';

function setLang(l) {
  lang = l;

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  const activeBtn = document.querySelector(`.lang-btn[data-lang="${l}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  // Update all data-en / data-zh elements
  document.querySelectorAll('[data-en]').forEach(el => {
    const val = el.getAttribute('data-' + l);
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
    if (val.includes('<')) el.innerHTML = val;
    else el.textContent = val;
  });

  // Update select options
  document.querySelectorAll('select option[data-en]').forEach(o => {
    o.textContent = o.getAttribute('data-' + l) || o.getAttribute('data-en');
  });

  // Update textarea placeholder
  const details = document.getElementById('details');
  if (details) {
    details.placeholder = l === 'zh'
      ? '请描述您的仓库情况、现有设施以及希望达到的目标...'
      : 'Tell us about your warehouse and what you want to achieve...';
  }

  // Persist preference
  try { localStorage.setItem('sig-lang', l); } catch(e) {}
}

/* ── Form Validation & Submit ── */
function submitForm() {
  const required = ['fname', 'lname', 'email', 'company', 'service'];
  let valid = true;

  required.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) {
      el.style.borderColor = '#c0392b';
      valid = false;
    } else {
      el.style.borderColor = '';
    }
  });

  if (!valid) return;

  // Success state
  const formFields = document.getElementById('form-fields');
  const formOk     = document.getElementById('form-ok');
  if (formFields) formFields.style.display = 'none';
  if (formOk) formOk.classList.add('show');
}

/* ── Smooth Scroll (offset for fixed nav) ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      const navHeight = document.querySelector('nav')?.offsetHeight || 76;
      window.scrollTo({ top: target.offsetTop - navHeight, behavior: 'smooth' });
    });
  });
}

/* ── Nav scroll effect ── */
function initNavScroll() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.background = window.scrollY > 40
      ? 'rgba(15,37,64,0.99)'
      : 'rgba(15,37,64,0.97)';
  }, { passive: true });
}

/* ── Scroll-triggered fade-up ── */
function initScrollAnimations() {
  const items = document.querySelectorAll('.service-card, .step, .why-pt');
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  items.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity .5s ease ${i * 0.07}s, transform .5s ease ${i * 0.07}s`;
    observer.observe(el);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  // Restore saved language preference
  try {
    const saved = localStorage.getItem('sig-lang');
    if (saved && saved !== 'en') setLang(saved);
  } catch(e) {}

  // Wire up lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });

  initSmoothScroll();
  initNavScroll();
  initScrollAnimations();
});

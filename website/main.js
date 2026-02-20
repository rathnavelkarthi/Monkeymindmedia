/* ============================================================
   main.js — Monkey Mind Media | Interactions & Animations
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Cursor Glow ──────────────────────────────────── */
  const glow = document.getElementById('cursor-glow');
  if (glow) {
    let mx = 0, my = 0, cx = 0, cy = 0;
    window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
    const followCursor = () => {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      glow.style.left = cx + 'px';
      glow.style.top  = cy + 'px';
      requestAnimationFrame(followCursor);
    };
    requestAnimationFrame(followCursor);
  }

  /* ── Navigation Scroll ────────────────────────────── */
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── Hamburger Menu ───────────────────────────────── */
  const burger = document.querySelector('.nav__burger');
  const navLinks = document.querySelector('.nav__links');
  if (burger && navLinks) {
    burger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  /* ── Scroll Reveal ────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  }

  /* ── Animated Counter ─────────────────────────────── */
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count, 10);
          const suffix = el.dataset.suffix || '';
          const duration = 1800;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current = Math.min(current + step, target);
            el.textContent = Math.round(current) + suffix;
            if (current >= target) clearInterval(timer);
          }, 16);
          countObserver.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(el => countObserver.observe(el));
  }

  /* ── Parallax Hero Orb ────────────────────────────── */
  const orbs = document.querySelectorAll('.hero__orb');
  if (orbs.length) {
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbs.forEach((orb, i) => {
        const factor = i === 0 ? 1 : -0.6;
        orb.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    });
  }

  /* ── Work Item Hover Labels ───────────────────────── */
  const workItems = document.querySelectorAll('.work-item');
  workItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.querySelector('.work-item__overlay')?.style && null;
    });
  });

  /* ── Contact Form Validation ──────────────────────── */
  const form = document.getElementById('contact-form');
  if (form) {
    // Real-time validation
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value.trim()) {
          if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
            input.classList.add('invalid');
            input.classList.remove('valid');
          } else {
            input.classList.add('valid');
            input.classList.remove('invalid');
          }
        } else {
          input.classList.add('invalid');
          input.classList.remove('valid');
        }
      });

      input.addEventListener('input', () => {
        if (input.classList.contains('invalid') && input.value.trim()) {
          input.classList.remove('invalid');
        }
      });
    });

    // Form submit
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('.form__submit');
      const formContent = form.querySelector('.form__fields');
      const successMsg  = form.querySelector('.form__success');

      // Validate all fields
      let isValid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('invalid');
          isValid = false;
        }
      });

      if (!isValid) return;

      // Loading state
      btn.classList.add('loading');
      btn.textContent = 'Sending…';

      // Simulate async send
      await new Promise(r => setTimeout(r, 1600));

      // Show success
      if (formContent) formContent.style.display = 'none';
      btn.style.display = 'none';
      if (successMsg) successMsg.style.display = 'block';
    });
  }

  /* ── Smooth Scroll for Anchor Links ──────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});

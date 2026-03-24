/* ── MVP Main JS ─────────────────────────────── */

/* Navbar scroll effect */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

/* Mobile menu toggle */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
}

/* Active nav link */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

/* Scroll-to-top on page load */
window.scrollTo(0, 0);

/* Fade-up on scroll */
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length > 0) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  fadeEls.forEach(el => io.observe(el));
}

/* ── Gallery Filter (projects page) ─────────── */
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      galleryItems.forEach(item => {
        item.style.display = (cat === 'all' || item.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
}

/* ── Multi-step Quote Form ──────────────────── */
const form = document.getElementById('quote-form');
if (form) {
  let selectedServices = [];
  let selectedBudget = '';
  let selectedTimeline = '';

  const steps = form.querySelectorAll('.form-step');
  const progressFill = form.querySelector('.progress-fill');
  const stepLabel = form.querySelector('.form-step-label');
  let currentStep = 1;
  const totalSteps = 3;

  function showStep(n) {
    steps.forEach(s => s.classList.remove('active'));
    const target = form.querySelector('.form-step[data-step="' + n + '"]');
    if (target) target.classList.add('active');
    if (progressFill) progressFill.style.width = ((n / totalSteps) * 100) + '%';
    if (stepLabel) stepLabel.textContent = 'Step ' + n + ' of ' + totalSteps;
    currentStep = n;
  }

  /* Service selection */
  form.querySelectorAll('.service-opt').forEach(opt => {
    opt.addEventListener('click', () => {
      const val = opt.dataset.val;
      if (opt.classList.contains('selected')) {
        opt.classList.remove('selected');
        selectedServices = selectedServices.filter(s => s !== val);
      } else {
        opt.classList.add('selected');
        selectedServices.push(val);
      }
    });
  });

  /* Budget & Timeline chips */
  form.querySelectorAll('.chip[data-type="budget"]').forEach(c => {
    c.addEventListener('click', () => {
      form.querySelectorAll('.chip[data-type="budget"]').forEach(x => x.classList.remove('selected'));
      c.classList.add('selected');
      selectedBudget = c.dataset.val;
    });
  });
  form.querySelectorAll('.chip[data-type="timeline"]').forEach(c => {
    c.addEventListener('click', () => {
      form.querySelectorAll('.chip[data-type="timeline"]').forEach(x => x.classList.remove('selected'));
      c.classList.add('selected');
      selectedTimeline = c.dataset.val;
    });
  });

  /* Next/Back buttons */
  form.querySelectorAll('.btn-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const next = parseInt(btn.dataset.next);
      if (next === 2 && selectedServices.length === 0) {
        alert('Please select at least one service.');
        return;
      }
      if (next === 3) {
        const name = form.querySelector('#f-name').value.trim();
        const phone = form.querySelector('#f-phone').value.trim();
        if (!name || !phone) {
          alert('Please enter your name and phone number.');
          return;
        }
        /* Build summary */
        const city = form.querySelector('#f-city').value.trim() || 'Not specified';
        const summaryEl = form.querySelector('.form-summary-text');
        if (summaryEl) {
          summaryEl.innerHTML =
            '<strong style="color:var(--primary)">' + selectedServices.join(', ') + '</strong>' +
            (city !== 'Not specified' ? ' in <strong style="color:var(--primary)">' + city + '</strong>' : '') +
            (selectedBudget ? ' &middot; Budget: ' + selectedBudget : '') +
            (selectedTimeline ? ' &middot; Timeline: ' + selectedTimeline : '');
        }
      }
      showStep(next);
    });
  });

  form.querySelectorAll('.btn-back').forEach(btn => {
    btn.addEventListener('click', () => showStep(parseInt(btn.dataset.back)));
  });

  /* Submit */
  const submitBtn = form.querySelector('.btn-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', () => {
      const name = form.querySelector('#f-name').value.trim();
      const phone = form.querySelector('#f-phone').value.trim();
      const email = form.querySelector('#f-email').value.trim();
      const city = form.querySelector('#f-city').value.trim() || 'Not specified';
      const projectType = form.querySelector('#f-project-type').value.trim() || 'Not specified';
      const description = form.querySelector('#f-description').value.trim() || 'No additional details.';

      const serviceList = selectedServices.join(', ') || 'General Inquiry';

      const subject = 'New Project Inquiry: ' + serviceList + ' – ' + city;
      const body =
        'Hello MVP Team,\n\n' +
        'I am reaching out to request a quote for a home project.\n\n' +
        '--- PROJECT DETAILS ---\n\n' +
        'Name: ' + name + '\n' +
        'Phone: ' + phone + '\n' +
        'Email: ' + (email || 'Not provided') + '\n' +
        'City: ' + city + '\n\n' +
        'Services Needed: ' + serviceList + '\n' +
        'Project Type: ' + projectType + '\n' +
        'Budget Range: ' + (selectedBudget || 'Not specified') + '\n' +
        'Preferred Timeline: ' + (selectedTimeline || 'Not specified') + '\n\n' +
        'Project Description:\n' + description + '\n\n' +
        '--- END ---\n\n' +
        'Please feel free to call or text me at ' + phone + ' for the fastest response.\n\n' +
        'Thank you,\n' + name;

      window.location.href = 'mailto:sales@mvphomeconstruction.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      /* Show thank-you */
      const formInner = form.querySelector('.form-inner');
      const thankYou = form.querySelector('.thank-you');
      if (formInner) formInner.style.display = 'none';
      if (thankYou) thankYou.classList.add('show');
    });
  }

  showStep(1);
}
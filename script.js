// Debounce function to improve scroll performance
function debounce(func, wait = 15, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// Scroll Animation
function scrollAnimate() {
  document.querySelectorAll('section').forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('visible');
    }
  });

  document.querySelectorAll('.card').forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (cardTop < windowHeight - 100) {
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', debounce(scrollAnimate));

// Chart.js: Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Australia', 'India', 'England', 'Canada', 'South Africa'],
    datasets: [{
      label: 'Total Medals',
      data: [1000, 700, 900, 400, 350],
      backgroundColor: '#007BFF'
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// Chart.js: Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['Gold', 'Silver', 'Bronze'],
    datasets: [{
      label: 'Medal Breakdown',
      data: [40, 35, 25],
      backgroundColor: ['#FFD700', '#C0C0C0', '#CD7F32']
    }]
  },
  options: {
    responsive: true,
    animation: {
      duration: 1500
    }
  }
});

// Simulated Framer Motion-like effect
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.motion');
  animatedElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, index * 200);
  });
});

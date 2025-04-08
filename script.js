// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    // Initialize theme
    initTheme();
    
    // Navbar scroll effect
    handleNavbarScroll();
    
    // Mobile menu toggle
    setupMobileMenu();
    
    // Current year for footer
    setCurrentYear();
    
    // Initialize skills
    populateSkills();
    
    // Initialize filter buttons
    setupSkillFilters();
    
    // Snake game initialization
    initSnakeGame();
    
    // Form submission handling
    setupContactForm();
    
    // Newsletter form handling
    setupNewsletterForm();
    
    // Activate animation
    activateInitialAnimations();
    
    // Scroll animations
    window.addEventListener('scroll', handleScrollAnimations);
  });
  
  // Theme Management
  function initTheme() {
    const storedTheme = localStorage.getItem('theme') || 'light';
    
    if (storedTheme === 'dark') {
      document.body.classList.add('dark-mode');
    }
    
    // Theme toggle buttons
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('themeToggleMobile').addEventListener('click', toggleTheme);
  }
  
  function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
  }
  
  // Navbar Scroll Effect
  function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    
    // Check on initial load
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    }
  }
  
  // Mobile Menu Toggle
  function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');
    
    menuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('visible');
      menuToggle.classList.toggle('menu-open');
    });
    
    // Close menu when clicking on a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('visible');
        menuToggle.classList.remove('menu-open');
      });
    });
  }
  
  // Update footer year
  function setCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  }
  
  // Skills
  function populateSkills() {
    const skills = [
      { name: "Python", level: 90, category: "Programming" },
      { name: "Java", level: 85, category: "Programming" },
      { name: "HTML", level: 95, category: "Web" },
      { name: "CSS", level: 90, category: "Web" },
      { name: "JavaScript", level: 92, category: "Web" },
      { name: "React", level: 88, category: "Web" },
      { name: "Photoshop", level: 80, category: "Design" },
      { name: "Canva", level: 95, category: "Design" }
    ];
    
    const skillsGrid = document.querySelector('.skills-grid');
    
    // Initial population of all skills
    populateSkillsGrid(skillsGrid, skills);
  }
  
  function populateSkillsGrid(container, skills) {
    // Clear the container
    container.innerHTML = '';
    
    // Create and append skill cards
    skills.forEach((skill) => {
      const skillCard = document.createElement('div');
      skillCard.className = 'skill-card';
      
      skillCard.innerHTML = `
        <div class="skill-header">
          <h3 class="skill-name">${skill.name}</h3>
          <span class="skill-level">${skill.level}%</span>
        </div>
        
        <div class="skill-bar">
          <div class="skill-progress" style="width: ${skill.level}%">
            <span class="skill-ping"></span>
          </div>
        </div>
        
        <span class="skill-category">${skill.category}</span>
      `;
      
      container.appendChild(skillCard);
    });
  }
  
  function setupSkillFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillsGrid = document.querySelector('.skills-grid');
    
    const skills = [
      { name: "Python", level: 90, category: "Programming" },
      { name: "Java", level: 85, category: "Programming" },
      { name: "HTML", level: 95, category: "Web" },
      { name: "CSS", level: 90, category: "Web" },
      { name: "JavaScript", level: 92, category: "Web" },
      { name: "React", level: 88, category: "Web" },
      { name: "Photoshop", level: 80, category: "Design" },
      { name: "Canva", level: 95, category: "Design" }
    ];
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(b => b.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        // Filter skills based on category
        const filteredSkills = category === 'All' 
          ? skills 
          : skills.filter(skill => skill.category === category);
        
        // Update the grid with filtered skills
        populateSkillsGrid(skillsGrid, filteredSkills);
      });
    });
  }
  
  // Contact Form
  function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
          // Show success message
          alert('Message sent successfully! Thank you for contacting me.');
          
          // Reset form
          contactForm.reset();
          
          // Restore button
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 1500);
      });
    }
  }
  
  // Newsletter Form
  function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        const emailInput = this.querySelector('input[type="email"]');
        
        submitBtn.innerHTML = 'Subscribing...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
          // Show success message
          alert('Thank you for subscribing to my newsletter!');
          
          // Reset form
          emailInput.value = '';
          
          // Restore button
          submitBtn.innerHTML = originalText;
          submitBtn.disabled = false;
        }, 1500);
      });
    }
  }
  
  // Initial animations
  function activateInitialAnimations() {
    // Elements are already set up with animation classes in HTML
    // This function could be used to trigger additional animations
    setTimeout(() => {
      document.querySelector('.hero-content').classList.add('animate-fade-in');
      document.querySelector('.hero-image').classList.add('animate-fade-in-delay');
    }, 100);
  }
  
  // Scroll animations
  function handleScrollAnimations() {
    const aboutSection = document.getElementById('about');
    if (aboutSection && isElementInViewport(aboutSection, 0.75)) {
      document.querySelector('.about-image').classList.add('animate-slide-in');
      document.querySelector('.about-content').classList.add('animate-slide-in-delay');
    }
  }
  
  function isElementInViewport(el, threshold = 1) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight * threshold)
    );
  }
  
  // Snake Game
  function initSnakeGame() {
    const canvas = document.getElementById('snakeCanvas');
    const startButton = document.getElementById('startGame');
    const scoreValue = document.getElementById('scoreValue');
    
    if (!canvas || !startButton || !scoreValue) return;
    
    const ctx = canvas.getContext('2d');
    const gridSize = 20;
    const tileCount = canvas.width / gridSize;
    
    let snake = [
      { x: 10, y: 10 }
    ];
    
    let food = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount)
    };
    
    let xVelocity = 0;
    let yVelocity = 0;
    let score = 0;
    let gameRunning = false;
    let gameInterval;
    
    function drawGame() {
      clearCanvas();
      drawSnake();
      drawFood();
      moveSnake();
      checkCollision();
      updateScore();
    }
    
    function clearCanvas() {
      ctx.fillStyle = document.body.classList.contains('dark-mode') ? '#1e1b33' : '#f9f8fd';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    function drawSnake() {
      ctx.fillStyle = '#8B5CF6';
      
      snake.forEach((part, index) => {
        if (index === 0) {
          // Head color
          ctx.fillStyle = '#D946EF';
        } else {
          // Body gradient
          const gradientPosition = index / snake.length;
          const r = Math.floor(139 + (217-139) * gradientPosition);
          const g = Math.floor(92 + (70-92) * gradientPosition);
          const b = Math.floor(246 + (239-246) * gradientPosition);
          ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
        }
        
        ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
        ctx.strokeStyle = document.body.classList.contains('dark-mode') ? '#1e1b33' : '#f9f8fd';
        ctx.strokeRect(part.x * gridSize, part.y * gridSize, gridSize - 2, gridSize - 2);
      });
    }
    
    function drawFood() {
      ctx.fillStyle = '#D946EF';
      ctx.beginPath();
      ctx.arc(
        food.x * gridSize + gridSize / 2,
        food.y * gridSize + gridSize / 2,
        gridSize / 2 - 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    
    function moveSnake() {
      // Create new head based on direction
      const head = {
        x: snake[0].x + xVelocity,
        y: snake[0].y + yVelocity
      };
      
      // Add new head to beginning of snake
      snake.unshift(head);
      
      // Check if snake ate food
      if (head.x === food.x && head.y === food.y) {
        // Generate new food
        food = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount)
        };
        
        // Increase score
        score += 10;
      } else {
        // Remove tail if no food was eaten
        snake.pop();
      }
    }
    
    function checkCollision() {
      const head = snake[0];
      
      // Check if snake hit the wall
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        gameOver();
      }
      
      // Check if snake hit itself
      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          gameOver();
        }
      }
    }
    
    function updateScore() {
      scoreValue.textContent = score;
    }
    
    function gameOver() {
      gameRunning = false;
      clearInterval(gameInterval);
      startButton.textContent = 'Restart Game';
      startButton.disabled = false;
      
      // Flash the canvas to indicate game over
      ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Show game over text
      ctx.fillStyle = document.body.classList.contains('dark-mode') ? 'white' : 'black';
      ctx.font = '30px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Game Over!', canvas.width / 2, canvas.height / 2);
    }
    
    function startGame() {
      if (gameRunning) return;
      
      snake = [{ x: 10, y: 10 }];
      xVelocity = 0;
      yVelocity = 0;
      score = 0;
      food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
      };
      
      gameRunning = true;
      startButton.textContent = 'Game Running';
      startButton.disabled = true;
      
      gameInterval = setInterval(drawGame, 100);
    }
    
    // Event listeners for keyboard
    document.addEventListener('keydown', function(e) {
      if (!gameRunning) return;
      
      // Arrow keys or WASD
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (yVelocity !== 1) {
            xVelocity = 0;
            yVelocity = -1;
          }
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (yVelocity !== -1) {
            xVelocity = 0;
            yVelocity = 1;
          }
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (xVelocity !== 1) {
            xVelocity = -1;
            yVelocity = 0;
          }
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (xVelocity !== -1) {
            xVelocity = 1;
            yVelocity = 0;
          }
          break;
      }
    });
    
    // Start game button
    startButton.addEventListener('click', startGame);
    
    // Initial canvas setup
    clearCanvas();
    ctx.fillStyle = document.body.classList.contains('dark-mode') ? 'white' : 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Press Start to Play', canvas.width / 2, canvas.height / 2);
  }
  
  
function renderLoginPage() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="login-container">
      <div class="logo">
        <img src="src/assets/sdu_logo.png" alt="SDU Logo" class="logo-img">
        <span>SDU Dorm Service</span>
      </div>
      <div class="login-header">Log In</div>
      <form class="login-form" onsubmit="handleLogin(event)">
        <div class="input-group">
          <input type="email" placeholder="E-mail" required>
          <img src="src/assets/email_icon.png" alt="email icon" class="input-icon">
        </div>
        <div class="input-group">
          <input type="password" placeholder="Password" required>
          <img src="/src/assets/Lock.png" alt="lock icon" class="input-icon">
        </div>
        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox">
            <span>Remember me</span>
          </label>
          <a href="#" class="forgot-password">Forgot password?</a>
        </div>
        <button type="submit" class="primary-button">Log In</button>
      </form>
      <div class="divider">
        <span>or</span>
      </div>
      <button class="secondary-button" onclick="navigateToSignup()">Sign Up</button>
    </div>
  `;
}

function renderSignupPage() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="login-container signup-container">
      <div class="logo">
        <img src="src/assets/sdu_logo.png" alt="SDU Logo" class="logo-img">
        <span>SDU Dorm Service</span>
      </div>
      <div class="login-header">Sign Up</div>
      <form class="login-form" onsubmit="handleSignup(event)">
        <div class="input-group">
          <input type="text" placeholder="Name" required>
          <img src="src/assets/user_icon.png" alt="user icon" class="input-icon">
        </div>
        <div class="input-group">
          <input type="email" placeholder="E-mail" required>
          <img src="src/assets/email_icon.png" alt="email icon" class="input-icon">
        </div>
        <div class="input-group">
          <input type="password" placeholder="Password" required>
          <img src="src/assets/Lock.png" alt="lock icon" class="input-icon">
        </div>
        <div class="form-options">
          <label class="remember-me terms">
            <input type="checkbox" required>
            <span>I agree to the terms & conditions</span>
          </label>
        </div>
        <button type="submit" class="primary-button">Sign Up</button>
      </form>
      <div class="login-link">
        Already have an account? <a href="#" onclick="navigateToLogin()">Back to Log In</a>
      </div>
    </div>
  `;
}
function renderDashboard() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="dashboard">
      <nav class="sidebar">
        <div class="logo-container">
          <img src="src/assets/logo_sdy_dash.png" alt="SDU Logo" class="logo-img">
        </div>
        <div class="nav-items">
          <a href="#" class="nav-item ">
            <span class="nav-icon"> <img src="src/assets/home_icon.png" alt="home_icon" class="home_icon"></span>
          </a>
          <a href="#" class="nav-item">
            <span class="nav-icon"><img src="src/assets/coffee_icon.png" alt="coffee_icon" class="coffee_icon"></span>
          </a>
        </div>
      </nav>
      <main class="main-content">
        <header class="dashboard-header">
          <div class="user-profile">
            <div class="profile-icon"><img src="src/assets/person_icon.png" alt="person_icon" class="person_icon"></div>
          </div>
          <button onclick="handleLogout()" class="exit-button">Exit</button>
        </header>
        <div class="info-container">
          <h1>Information about student</h1>
          <div class="student-info">
            <div class="info-row">
              <span class="info-label">Balance:</span>
              <span class="info-value">999 $</span>
              <span class="info-icon"> <img src="src/assets/circle_plus.png" alt="circle_plus" class="plus_circle"></span>
            </div>
            <div class="info-row">
              <span class="info-label">Name:</span>
              <span class="info-value">Baidaulet</span>
              <span class="info-icon"><img src="src/assets/Smile.png" alt="smile" class="plus_circle"></span>
            </div>
            <div class="info-row">
              <span class="info-label">Surname:</span>
              <span class="info-value">Sabit</span>
              <span class="info-icon"><img src="src/assets/Smile.png" alt="smile2" class="plus_circle"></span>
            </div>
            <div class="info-row">
              <span class="info-label">Email:</span>
              <span class="info-value">220103179@stu.sdu.edu.kz</span>
              <span class="info-icon"><img src="src/assets/email_icon.png" class="plus_circle"></span>
            </div>
            <div class="info-row">
              <span class="info-label">Graduation date:</span>
              <span class="info-value">2026</span>
              <span class="info-icon"><img src="src/assets/Calendar.png" class="plus_circle"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  `;
}

function handleLogin(event) {
  event.preventDefault();
  renderDashboard();
}

function handleSignup(event) {
  event.preventDefault();
  renderDashboard();
}

function handleLogout() {
  renderLoginPage();
}

function navigateToSignup() {
  renderSignupPage();
}

function navigateToLogin() {
  renderLoginPage();
}

// Initial render
renderLoginPage();
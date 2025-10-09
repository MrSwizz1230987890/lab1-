<template>
  <div class="home-page">
    <div class="container">
      <div class="hero">
        <h1>Ласкаво просимо до Моє SPA Додаток</h1>
        <p class="subtitle">Односторінковий додаток на Vue 3 з маршрутизацією</p>
      </div>
      
      <div class="features">
        <h2>Особливості додатку:</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>🏠 Головна сторінка</h3>
            <p>Опис функціональності додатку та його можливостей</p>
          </div>
          <div class="feature-card">
            <h3>📋 Каталог елементів</h3>
            <p>Перегляд списку статей, заміток та проектів</p>
          </div>
          <div class="feature-card">
            <h3>🔍 Детальний перегляд</h3>
            <p>Повна інформація про кожен елемент каталогу</p>
          </div>
        </div>
      </div>

      <div class="cta">
        <router-link to="/items" class="cta-button">
          Перейти до каталогу
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.home-page {
  padding: 2rem 0;
}

.hero {
  text-align: center;
  margin-bottom: 3rem;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
}

.features {
  margin-bottom: 3rem;
}

.features h2 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  text-align: center;
}

.feature-card h3 {
  margin-bottom: 1rem;
  color: #2c3e50;
}

.cta {
  text-align: center;
}

.cta-button {
  display: inline-block;
  background-color: #3498db;
  color: white;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #2980b9;
}
</style>
<template>
  <div class="items-list-page">
    <div class="container">
      <h1>Каталог елементів</h1>
      <div class="items-grid">
        <div 
          v-for="item in items" 
          :key="item.id" 
          class="item-card"
        >
          <router-link :to="`/items/${item.id}`" class="item-link">
            <h3>{{ item.title }}</h3>
            <p class="item-meta">Автор: {{ item.author }} | {{ item.date }}</p>
            <p class="item-preview">{{ item.content.substring(0, 100) }}...</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items = ref([])

onMounted(async () => {
  try {
    const response = await fetch('/data.json')
    const data = await response.json()
    items.value = data.items
  } catch (error) {
    console.error('Помилка завантаження даних:', error)
    // Резервні дані
    items.value = [
      {
        id: 1,
        title: "Резервна стаття",
        content: "Це резервний контент у разі помилки завантаження.",
        author: "Система",
        date: "2025-01-01"
      }
    ]
  }
})
</script>

<style scoped>
.items-list-page {
  padding: 2rem 0;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.items-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.item-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.item-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.item-link {
  display: block;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.item-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.item-meta {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.item-preview {
  color: #555;
  line-height: 1.5;
}
</style>
<template>
  <div class="item-details-page">
    <div class="container">
      <div v-if="loading" class="loading">Завантаження...</div>
      <div v-else-if="item" class="item-details">
        <router-link to="/items" class="back-link">← Назад до каталогу</router-link>
        <article class="item-content">
          <header class="item-header">
            <h1>{{ item.title }}</h1>
            <div class="item-meta">
              <span class="author">Автор: {{ item.author }}</span>
              <span class="date">Дата: {{ item.date }}</span>
            </div>
          </header>
          <div class="item-body">
            <p>{{ item.content }}</p>
          </div>
        </article>
      </div>
      <div v-else class="error">Елемент не знайдено</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const item = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const response = await fetch('/data.json')
    const data = await response.json()
    item.value = data.items.find(item => item.id === parseInt(route.params.id))
  } catch (error) {
    console.error('Помилка завантаження даних:', error)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.item-details-page {
  padding: 2rem 0;
}

.loading, .error {
  text-align: center;
  font-size: 1.2rem;
  padding: 2rem;
}

.back-link {
  display: inline-block;
  color: #3498db;
  text-decoration: none;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border: 1px solid #3498db;
  border-radius: 4px;
  transition: all 0.3s;
}

.back-link:hover {
  background-color: #3498db;
  color: white;
}

.item-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.item-header {
  border-bottom: 1px solid #ecf0f1;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}

.item-header h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.item-meta {
  display: flex;
  gap: 2rem;
  color: #7f8c8d;
  font-size: 0.9rem;
}

.item-body {
  line-height: 1.6;
  color: #555;
}

.item-body p {
  margin-bottom: 1rem;
}
</style>
<template>
  <div class="row">
    <div class="col-md-8 offset-md-2" v-for="article in articles.data.data" :key="article.id">
      <Article  :article="article"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import config from '@/config'
import Article from '@/components/Article.vue';

export default {
  components: {
    Article
  },
  data() {
    return {
      articles: {}
    }
  },
  mounted() {
     this.getArticles();
  },

  methods: {
    getArticles() {
      axios.get(`${config.apiUrl}/articles`).then(response => {
        this.articles = response.data;
      })
    }
  }
 
}
</script>

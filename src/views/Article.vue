<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="card" v-if="!loading">
                    <img height="420px" :src="article.imageUrl" alt="" class="card-img-top">
                    <div class="card-body">
                        <h1 class="card-title text-center my-3">{{ article.title}}</h1>
                        <div class="article-content" v-html="article.content"></div>
                    </div>
                </div>
                <div class="loader text-center" v-else>
                    <i class="fas  fa-5x fa-spin fa-spinner"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import config from '@/config'

export default {
    data() {
        return {
            article: {},
            loading: true
        }
    },
    mounted() {
        this.getArticle();
    },

    methods: {
        getArticle() {
            axios.get(`${config.apiUrl}/article/${this.$route.params.id}`).then(response => {
            this.loading = false;    
           this.article = response.data.data;
      
      })
        }
    }
}
</script>
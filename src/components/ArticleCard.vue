<template>
    <div class="article-container" v-for="article in articles" :key="article.id">
        <div>
          <img class="article-img" :src="'./img/' + article.gambar" />
        </div>
        <div div class="text" style="margin-left: 2vw">
            <h6 style="font-weight: bold;">{{article.judul}}</h6>
            <p>{{article.content}}</p>
            <p><i>Source: {{article.sumber}}</i></p>
            <a :href="article.url" target="_blank"><span class="badge rounded-pill text-bg-dark" id="read-more-btn">Read More</span></a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ArticleCard",

  data() {
        return {
            articles: []
        }
    },

    async mounted() {
        const response = await axios.get('http://localhost:3000/articles')
        this.articles = response.data
        // console.log("berhasil", response)
    }
};
</script>

<style scoped>
.article-container {
    display: flex;
    position: relative;
    font-size: 80%;
    margin-bottom: 30px;
  }

  .article-img {
    max-width: 8vw;
  }

  #read-more-btn {
    position: absolute;
    bottom: 0%;
    right: 0%;
  }
</style>

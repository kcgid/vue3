<template>
  <div>
      <ul class="news-list">
        <li v-for="(item, i) in listItems" :key='i' class="post">
          <div class="points">
            {{item.points || 0 }}
          </div>
          <div>
            <p class="news-title">
              <template v-if="item.domain">
                <a :href="item.url">
                  {{item.title}}
                </a>
              </template>
              <template v-else>
                <router-link :to="`/item/${item.id}`">
                  {{item.title}}
                </router-link>
              </template>
            </p>
            <small class="link-text">
              {{item.time_ago}} by
              <router-link :to="`/user/${item.user}`" v-if="item.user">{{item.user}}</router-link>
              <a :href="item.url" v-else> {{item.domain}}</a>
            </small>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>

export default {
  computed: {
    listItems() {
      const name = this.$route.name;
      if (name === 'news') {
        return this.$store.state.news;
      } else if (name === 'ask') {
        return this.$store.state.asks;
      } else {
        return this.$store.state.jobs;
      }
    }
  },
  created() {
    const name = this.$route.name;
    if (name === 'news') {
      this.$store.dispatch("FETCH_NEWS");
    } else if (name === 'ask') {
      this.$store.dispatch("FETCH_ASKS");
    } else if (name === 'jobs') {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
}
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}

a:hover {
  color: #42b883;
}
a.router-link-exact-active {
  text-decoration: underline;
}


</style>


<style scoped>
.news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;

}
.link-text {
  color: #828282;
}

</style>
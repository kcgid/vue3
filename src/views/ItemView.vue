<template>
    <div>
      <section>
        <div class="user-container">
          <div>
            <i class="fas fa-user"></i>
          </div>
          <div class="user-description">
            <router-link :to="`/user/${itemInfo.user}`">
              {{itemInfo.user}}
            </router-link>
            <div class="time">
              {{itemInfo.time_ago}}
            </div>
          </div>
          <div>
            <h2>{{itemInfo.title}}</h2>
          </div>
        </div>
      </section>

      <section>
        <div v-html="itemInfo.content"/>
      </section>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  computed: {
    // itemInfo() {
    //   return this.$store.state.item;
    // }
    ...mapGetters({
      itemInfo : 'fetchedItem'
    })
  },
  created() {
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", id);
  }
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;

}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}

</style>

<template>
  <li>
    <span :class="{ finished: finishedAt }">
      <strong>{{ text }}</strong>
      <small>{{ createdAt.toLocaleString() }}</small>
    </span>
    <span v-if="finishedAt">Finished at: {{ finishedAt.toLocaleString() }}</span>
    <button
      v-if="!finishedAt"
      @click="finish">
      Finish
    </button>
  </li>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      finishedAt: null,
      createdAt: new Date()
    }
  },
  methods: {
    finish: function () {
      if (!this.finishedAt) {
        this.finishedAt = new Date()
        this.$emit('finish')
      }
    }
  }
}
</script>

<style scoped>
.finished {
  text-decoration: line-through;
  color: gray;
}
</style>

<template>
  <li class="list-group-item border-top-0">
    <div class="media">
      <div
        class="mr-3 rounded"
        :style="style">
      </div>

      <div class="media-body border-bottom border-gray lh-125">
        <strong class="d-block">
          <b-link
            :to="{ name: 'todo', params: { id: 0 }}"
            :class="{ finished: finishedAt, 'text-muted': finishedAt }">
            {{ text + ' ' }}
          </b-link>
          <small class="text-muted font-italic">Created at: {{ createdAt.toLocaleString() }}</small>
        </strong>

        <b-button
          v-if="!finishedAt"
          variant="outline-primary"
          class="float-right my-1"
          @click="finish">
          Finish
        </b-button>

        <small
          v-if="finishedAt"
          class="text-info">
          Finished at: {{ finishedAt.toLocaleString() }}
        </small>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      finishedAt: null,
      createdAt: new Date(),
      style: 'width: 40px; height:40px; background-color: #' + Math.floor(Math.random() * 16777215).toString(16)
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
}
</style>

<template>
  <div>
    <div class="beep-label">
      {{ item.trans[locale] || item.name
      }}{{ item.unit !== null ? ' (' + item.unit + ')' : '' }}
      {{ item.required === 1 ? '*' : '' }}
      <a v-if="item.description !== null || item.source !== null"
        ><v-icon
          class="mdi mdi-information ml-1 icon-info"
          dark
          small
          color="accent"
          @click="showDescription = !showDescription"
        ></v-icon
      ></a>
    </div>

    <p v-if="showDescription" class="info-text">
      <em v-if="item.description !== null">{{ item.description }}<br /></em>
      <a v-if="item.source !== null" :href="item.source" target="_blank">{{
        item.source
      }}</a>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    locale: {
      type: String,
      default: 'en',
      required: false,
    },
  },
  data: function() {
    return {
      showDescription: false,
    }
  },
}
</script>

<style lang="scss" scoped></style>

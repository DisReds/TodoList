<template>
  <v-container pt-0 pr-0 pb-0 pl-0>
    <v-form ref="form" @submit.prevent="submit()">
      <v-text-field
        @blur="closeForm()"
        append-icon="mdi-plus"
        solo
        ref="input"
        v-model="title"
        placeholder="Title"
        :rules="[rules.required]"
      ></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "",
    rules: {
      required: value => !!value || "Required"
    }
  }),
  methods: {
    submit() {
      console.log("submitted");
    },
    closeForm () {
        this.$store.commit("SET_NEW_LIST_FORM", false);
    }
  },
  mounted () {
      this.$refs.input.focuse();
  }
};
</script>

<style>
</style>
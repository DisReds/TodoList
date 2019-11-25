<template>
  <v-layout>
    <v-navigation-drawer v-model="open" absolute right>
      <v-list>
        <v-list-item>
          <v-avatar size="62" color="teal">
            <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="User avatar" />
          </v-avatar>

          <v-list-item-content>
            <v-list-item-title>Peter Parker</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-form>
        <v-container fluid>
          <v-flex xs12>
            <img :src="imageUrl" alt height="150px" />

            <v-text-field
              label="Select an image"
              v-model="imageName"
              prepend-icon="mdi-attachment"
              @click="pickFile"
            ></v-text-field>
            <input
              type="file"
              style="display: none"
              ref="image"
              accept="image/*"
              @change="onFilePicked"
            />
          </v-flex>

          <v-btn :loading="loading" :disabled="imageFile" @click="uploadFile()">
            Set as background
            <v-icon right dark>mdi-cloud-upload</v-icon>
          </v-btn>
        </v-container>
      </v-form>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
// import { get } from 'http';
export default {
  name: "moreOptions",
  data: () => ({
    loading: false,
    imageName: "",
    imageUrl: "",
    imageFile: ""
  }),
  computed: {
    open: {
      get () {
        return this.$store.getters.DRAWER;
      }, 
      set (value) {
        this.$store.commit ("SET_DRAWER", value);
      }
    } 
  },
  methods: {
    pickFile() {
      this.$refs.image.click();
    },
    onFilePicked(e) {
      const files = e.target.files;

      if (files[0] !== undefined) {
        this.imageName = files[0].name;
        if (this.imageName.lastIndexOf(".") <= 0) {
          return;
        }

        const fr = FileReader();
        fr.readAsDataURL(files[0]);
        fr.addEventListener("load", () => {
          this.imageUrl = fr.result;
          this.imageFile = files[0];
        });
      } else {
        this.imageName = "";
        this.imageFile = "";
        this.imageUrl = "";
      }
    },
    uploadFile() {}
  }
};
</script>

<style>
</style>
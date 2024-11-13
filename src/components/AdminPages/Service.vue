<template>
  <div style="margin: 2.5%">
    <div class="card">
      <div class="card-header">
        <h4>{{ service.name }}</h4>
      </div>
      <div class="card-body" style="text-align: left">
        <div v-for="item in service.variables">
          <label for="">{{ item[0] }}</label
          ><br />
          <textarea
            class="form-control"
            :id="item[0]"
            v-if="item[1] == 'textarea'"
            id=""
          ></textarea>
          <input :id="item[0]" v-else class="form-control" :type="item[1]" /><br />
        </div>
        <button @click="submit()" class="btn btn-dark">Submit</button>
      </div>
    </div>
    <br />
    <div v-if="result" class="alert alert-success">
      {{ result }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import "vue3-loading-overlay/dist/vue3-loading-overlay.css";
import navbar from "@/components/Layouts/navbar.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    navbar,
  },
  mounted() {
    this.get_service();
  },
  data() {
    return {
      service: [],
      datas: {},
      result: "",
    };
  },
  methods: {
    async get_service() {
      var slug = this.$route.params.slug;
      await axios
        .get(`services/${slug}`)
        .then((response) => response.data)
        .then((response) => {
          this.service = response;
        });
    },
    async submit() {
      var aaa = {};
      for (var item of this.service.variables) {
        aaa[item[0]] = document.getElementById(item[0]).value;
      }
      var slug = this.$route.params.slug;
      await axios
        .post(`gbuilder/${slug}`, { data: aaa })
        .then((response) => response.data)
        .then((response) => {
          this.result = response;
        });
    },
  },
};
</script>

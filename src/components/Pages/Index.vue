<template></template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    navbar,
  },
  mounted() {
    if (!this.$store.state.isAuthenticated) {
      this.$router.push(this.$route.go || "/login");
    } else {
      this.$router.push(this.$route.go || "/services");
    }
  },
  data() {
    return {
      services: [],
      categories: [],
    };
  },
  methods: {
    async get_services() {
      await axios
        .get("services")
        .then((response) => response.data)
        .then((response) => {
          this.services = response;
        });
    },
  },
};
</script>

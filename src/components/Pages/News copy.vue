<template>
  <div style="
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      text-align: right;
      margin-top: 10px;
    ">
    <div style="clear: both; color: white; border-color: white"></div>
    <div v-if="!category">
      <div v-for="(cat, catidx) in categories">
        <br />
        <h4 style="
            font-family: 'vazir';
            margin-right: 10%;
            font-size: 18px;
            border-radius: 16px;
              line-height: 30px;
              margin-bottom: 0
          ">
          {{ cat.name }}
        </h4>
        <div v-if="cat.template === 1" style="
            text-align: right;
            max-width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            font-family: 'vazir';
            direction: rtl;
            padding-right: 7.5%;
          ">
          <a v-for="(item, idx) in cat.services" class="mycard"
            :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #fff;  padding: 8px; margin-top: 0px;border-radius: 20px; cursor: pointer; margin:2.5%; padding: 1.5% ;box-sizing: border-box;`"
            @click="get(item.id)">
            <i v-bind:key="item" style="padding: 10px">
              <i style="
                  display: block;
                  width: 44%;
                  margin: auto;
                  margin-bottom: 10px;
                  aspect-ratio: 1/1;
                  border-radius: 0;
                  
                  text-align: center;
                "><img style="width: 100%; aspect-ratio: 1/1; border-radius: 0" :src="item.get_image" alt="" /></i>
              <div style="clear: both"></div>
              <h6 style="
                  margin: 0;
                  height: 30px;
                  color: black;
                  font-size: 14px;
                  border-radius: 16px;
              line-height: 30px;
                  white-space: break-spaces;
                  text-align: center;
                  font-family: 'vazir';
                  width: 90%;
                  margin-right: 5%;
                " v-html="item.name"></h6>
              <p style="
                  margin: 5px;
                  text-align: justify;
                  font-size: 12px;
                  line-height: 25px;
                  text-decoration: none;
                  margin-top: 10px;
                  white-space: break-spaces;
                  width: 98%;
                  margin: auto;
                  text-align: center;
                  height: 40px;
                  width: 80%;
                  margin-right: 10%;
                  
                ">
                {{ item.description }}
              </p>
              <!-- <a
              :href="'services/' + item.slug"
              style="text-decoration: none; font-size: 12px; margin-right: 10px"
              >{{ item.button_name }}</a
            > -->
            </i>
          </a>

          <div style="clear: both"></div>
        </div>
        <div v-if="cat.template === 2" :style="`
            text-align: right;
            max-width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            font-family: 'vazir';
            direction: rtl;
            background: ${colors[parseInt(catidx / 2)]};
            padding-top: 20px;
            padding-right: 7.5%
          `">
          <a v-for="(item, idx) in cat.services" class="mycard2"
            :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #fff;  padding: 8px; margin-top: 0px;border-radius: 20px; cursor: pointer; margin:2.5%; padding: 1.5% ;box-sizing: border-box;`"
            @click="get(item.id)">
            <i v-bind:key="item" style="padding: 10px; margin-top: 20px!important;">
              <i style="
                  display: block;
                  width: 28%;
                  margin-left: 6%;
                  
                  aspect-ratio: 1/1;
                  border-radius: 0;
                  
                  float: left;
                  margin-top: 20px;
                "><img style="width: 100%; aspect-ratio: 1/1" :src="item.get_image" alt="" /></i>
              <p style="
                  margin: 2.5%;
                  text-align: justify;
                  font-size: 12px;
                  text-decoration: none;
                  margin-top: -15px;
                  white-space: break-spaces;
                  width: 60%;
                  text-align: center;
                  font-family: 'vazir';
                  height: 40px;
                  float: right;
                ">
              <h6 style="
              font-size: 15px;
              font-weight: normal;
                margin-top: 10px;
                height: 30px;
                color: black;
                margin-right: 10px;
                border-radius: 16px;
              line-height: 30px;
                white-space: break-spaces;
                text-align: center;
                font-family: 'vazir';
              " v-html="item.name"></h6>
              {{ item.description }}
              </p>
              <!-- <a
              :href="'services/' + item.slug"
              style="text-decoration: none; font-size: 12px; margin-right: 10px"
              >{{ item.button_name }}</a
            > -->
            </i>
          </a>

          <div style="clear: both"></div>
          <br />
        </div>
      </div>
    </div>
    <div v-else>
      <div style="
          text-align: right;
          max-width: 100%;
          overflow-x: auto;
          font-family: 'vazir';
          direction: rtl;
        ">
        <br /><br />
        <h3 style="font-family: 'vazir'">{{ category.name }}</h3>
        <a v-for="item in category.services" class="mycard"
          :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #fff;  padding: 8px; margin-top: 0px;border-radius: 5px; cursor: pointer; margin:5%; padding: 1.5% ;box-sizing: border-box;`"
          @click="get(item.id)">
          <i v-bind:key="item" style="padding: 10px">
            <i style="
                display: block;
                width: 60%;
                margin: auto;
                margin-bottom: 10px;
                aspect-ratio: 1/1;
                border-radius: 0;
                
                text-align: center;
              "><img style="width: 60%; aspect-ratio: 1/1; margin: 20%" :src="item.get_image" alt="" /></i>
            <div style="clear: both"></div>
            <h6 v-if="item.highlight" style="
                margin: 0;
                height: 30px;
                margin-right: 10px;
                font-size: 14px;
                white-space: break-spaces;
                text-align: center;
                font-family: 'vazir';
              " v-html="item.name.replace(
                item.highlight,
                `<a style='font-weight:bold; color:black'>` + item.highlight + `</a>`
              )
                "></h6>
            <h6 v-else style="
                margin: 0;
                height: 30px;
                font-weight: bold;
                color: black;
                margin-right: 10px;
                font-size: 14px;
                white-space: break-spaces;
                text-align: center;
                font-family: 'vazir';
              " v-html="item.name"></h6>
            <br />
            <p style="
                margin: 5px;
                text-align: justify;
                font-size: 12px;
                text-decoration: none;
                margin-top: 10px;
                white-space: break-spaces;
                width: 98%;
                margin: auto;
                text-align: center;
                font-family: 'vazir';
                height: 40px;
              ">
              {{ item.description }}
            </p>
          </i>
        </a>

        <div style="clear: both"></div>
        <br />
      </div>
    </div>
  </div>
  <div style="height: 200px"></div>
</template>

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
    this.get_categories();
  },
  data() {
    return {
      services: [],
      categories: [],
      occasions: "",
      category: "",
      olength: false,
      colors: ["#82ccfb", "#9958b8", "#b3dcf3", "#ecd6f6"],
    };
  },
  methods: {
    async get(id) {
      this.$store.state.isLoading = true;
      await axios
        .get(`news-services/${id}`)
        .then((response) => response.data)
        .then((response) => {
          this.result = response;
          this.$router.push(this.$route.go || `/result/${response}`);
        }).catch(() => {
          setTimeout(() => {
            this.get()
          }, 1000);
        });
    },
    async get_occasions() {
      await axios
        .get("occasions")
        .then((response) => response.data)
        .then((response) => {
          this.occasions = response;
        });
    },
    async get_services() {
      await axios
        .get("services")
        .then((response) => response.data)
        .then((response) => {
          this.services = response;
        });
    },
    async get_categories() {
      await axios
        .get("news-categories")
        .then((response) => response.data)
        .then((response) => {
          this.categories = response;
        });
    },
  },
};
</script>
<style>
.mycard {
  box-sizing: border-box;
  width: 175px;
  height: 235px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;

  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
}

.mycard:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.mycard:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.mycard2 {
  box-sizing: border-box;
  width: 260px;
  height: 128px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;

  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
}

.mycard2:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.mycard2:active {
  transform: scale(0.95) rotateZ(1.7deg);
}

.mycard3 {
  box-sizing: border-box;
  height: 80px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;

  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  font-weight: bolder;
  color: black;
  margin-left: 10%;
}

.mycard3:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.mycard3:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
</style>

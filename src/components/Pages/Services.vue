<template>
  <div class="card-body topper" style="

      
      background: white;
      text-align: right;
      position: relative;
      text-align: center
    ">
    <div class="spacer"></div>
    <a href="/writer" class="btn"
      style="width: 55%;margin: auto;margin-top: 10px; background: #f2f3f5; font-size: 12px; color: #666666; text-align: center; border-radius: 8px!important">
      نقطه شروع تولید محتوای حرفه‌ای
    </a>

  </div>
  <div style="
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      text-align: right;
      margin-top: 10px;
    ">
    <div style="
        text-align: right;
        max-width: 100%;
        overflow-x: auto;
        white-space: nowrap;
        font-family: 'vazir';
        height: 70px;
        direction: rtl;
        overflow-y: hidden;
      ">
      <div style="margin-right: 8%">
        <div @click="category = false" style="
            font-size: 12px;
            text-align: right;
            max-width: 100%;
            display: inline-block;
            direction: rtl;
            margin-top: 18px;
            margin-bottom: 10px;
            font-family: 'vazir';
          ">
          <i style="
              font-size: 12px;
              color: #000;
              background-color: white;
              border: solid white 2px;
              padding: 5px 10px ;
              margin-top: -8px;
              border-radius: 10px;
              cursor: pointer;
              margin-right: 10px;
              text-align: right;
              font-family: 'vazir';
            " :style="[
              category !== false
                ? { color: 'black', background: 'white' }
                : { background: '#64cdc3', color: 'white' },
            ]">
            <!-- <i class="fa-solid fa-pencil"></i> -->
            همه</i>
        </div>
        <div v-for="item in categories" @click="category = item" style="
            text-align: right;
            max-width: 100%;
            display: inline-block;
            direction: rtl;
            margin-top: 18px;
            font-family: 'vazir';
          ">
          <i v-if="item.template !== 3" style="
              font-size: 12px;
              color: #000;
              background-color: white;
              border: solid white 2px;
              padding: 5px 10px;
              margin-top: -8px;
              border-radius: 10px;
              cursor: pointer;
              margin-right: 5px;
              text-align: right;
              font-family: 'vazir';
            " :style="[
              category !== item
                ? { color: 'black', background: 'white' }
                : { background: '#64cdc3', color: 'white' },
            ]">
            <!-- <i class="fa-solid fa-pencil"></i> -->
            {{ item.name }}</i>
        </div>
      </div>
    </div>

    <div style="clear: both; color: white; border-color: white"></div>
    <div v-if="!category">
      <div v-for="(cat, catidx) in category3">
        <br />
        <h4 style="
            font-family: 'vazir';
            margin-right: 10%;
            font-size: 18px;
            border-radius: 16px;
              line-height: 30px;
          ">
          {{ cat.name }}
        </h4>
        <div style="
            text-align: right;
            max-width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            font-family: 'vazir';
            direction: rtl;
            padding-right: 7.5%;
          ">
          <a v-for="(item, idx) in cat.services" class="mycard4"
            :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color}; margin-top: 0px;border-radius: 18px; cursor: pointer; margin:10px ;box-sizing: border-box;`"
            :href="'services/' + item.slug">
            <div v-bind:key="item">
              <div style="
                  display: block;
                  width: 100%;
                  margin: auto;
                  margin-bottom: 10px;
                  border-radius: 0;
                  background: white;
                  text-align: center;
                  border-radius: 18px 18px 0 0
                "><img style="width: 100%; border-radius: 18px 18px 0 0" :src="item.get_image" alt="" /></div>
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
                  width: 84%;
                  margin-right: 8%;
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
                  width: 90%;
                  margin-right: 5%;
                  
                ">
                {{ item.description }}
              </p>
              <!-- <a
              :href="'services/' + item.slug"
              style="text-decoration: none; font-size: 12px; margin-right: 10px"
              >{{ item.button_name }}</a
            > -->
            </div>
          </a>

          <div style="clear: both"></div><br>
        </div>

      </div>
      <div v-for="(cat, catidx) in categories">
        <br />
        <h4 v-if="cat.template < 3" style="
            font-family: 'vazir';
            margin-right: 10%;
            font-size: 18px;
            border-radius: 16px;
              line-height: 30px;
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
            :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 4px; margin-top: 0px;border-radius: 18px; cursor: pointer; margin:10px;  ;box-sizing: border-box;`"
            :href="'services/' + item.slug">

            <div v-bind:key="item" style="padding: 10px">
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
                  width: 100%;
                  margin-right: 0%;
                " v-html="item.name"></h6>
              <br>
              <i style="
                  display: block;
                  width: 60%;
                  margin: auto;
                  margin-bottom: 10px;
                  aspect-ratio: 1/1;
                  border-radius: 0;
                  background: white;
                  text-align: center;
                "><img style="width: 100%; aspect-ratio: 1/1; border-radius: 0" :src="item.get_image" alt="" /></i>
              <div style="clear: both"></div>


              <!-- <a
              :href="'services/' + item.slug"
              style="text-decoration: none; font-size: 12px; margin-right: 10px"
              >{{ item.button_name }}</a
            > -->
            </div>
          </a>

          <div style="clear: both"></div><br>
        </div>
        <div v-if="cat.template === 2" :style="`
            text-align: right;
            max-width: 100%;
            overflow-x: auto;
            white-space: nowrap;
            font-family: 'vazir';
            direction: rtl;
            background: ${colors[parseInt(catidx / 2)]};
            padding-top: 18px;
            padding-right: 7.5%
          `">
          <a v-for="(item, idx) in cat.services" class="mycard2"
            :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 4px; margin-top: 0px;border-radius: 18px; cursor: pointer; margin:10px;  ;box-sizing: border-box;`"
            :href="'services/' + item.slug">


            <i v-bind:key="item" style="padding: 10px; margin-top: 20px!important;">
              <i style="
                  display: block;
                  width: 35%;
                  margin-left: 6%;
                  
                  aspect-ratio: 1/1;
                  border-radius: 0;
                  background: white;
                  float: left;
                  margin-top: 12px;
                "><img style="width: 100%; aspect-ratio: 1/1" :src="item.get_image" alt="" /></i>
              <p style="
                  margin: 0 10px;
                  text-align: justify;
                  font-size: 12px;
                  text-decoration: none;
                  margin-top: -15px;
                  white-space: break-spaces;
                  width: 47%;
                  text-align: center;
                  font-family: 'vazir';
                  height: 40px;
                  float: right;
                ">
              <h6 style="
              font-size: 14px;
              font-weight: normal;
                margin-top: 5px;
                height: 30px;
                color: black;
                margin-right: 10px;
                border-radius: 16px;
              line-height: 30px;
                white-space: break-spaces;
                text-align: center;
                font-family: 'vazir';
              " v-html="item.name"></h6>
              </p>
              <!-- <a
              :href="'services/' + item.slug"
              style="text-decoration: none; font-size: 12px; margin-right: 10px"
              >{{ item.button_name }}</a
            > -->
            </i>
          </a>

          <div style="clear: both"></div><br>
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
          margin-right: 7.5%
        ">
        <br />
        <h4 style="
            font-family: 'vazir';
            margin-right: 3%;
            font-size: 18px;
            border-radius: 16px;
              line-height: 30px;
          ">
          {{ category.name }}
        </h4>
        <a v-for="(item, idx) in category.services" class="mycard"
          :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 4px; margin-top: 0px;border-radius: 18px; cursor: pointer; margin:10px;  ;box-sizing: border-box;`"
          :href="'services/' + item.slug">

          <div v-bind:key="item" style="padding: 10px">
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
                  width: 100%;
                  margin-right: 0%;
                " v-html="item.name"></h6>
            <br>
            <i style="
                  display: block;
                  width: 60%;
                  margin: auto;
                  margin-bottom: 10px;
                  aspect-ratio: 1/1;
                  border-radius: 0;
                  background: white;
                  text-align: center;
                "><img style="width: 100%; aspect-ratio: 1/1; border-radius: 0" :src="item.get_image" alt="" /></i>
            <div style="clear: both"></div>


            <!-- <a
              :href="'services/' + item.slug"
              style="text-decoration: none; font-size: 12px; margin-right: 10px"
              >{{ item.button_name }}</a
            > -->
          </div>
        </a>

        <div style="clear: both"></div><br>
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
    this.get_services();
    this.get_categories();
    this.get_categories3();
  },
  data() {
    return {
      services: [],
      categories: [],
      occasions: "",
      category: false,
      category3: "",
      olength: false,
      colors: ["#82ccfb", "#9958b8", "#b3dcf3", "#ecd6f6"],
    };
  },
  methods: {
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
        .get("categories")
        .then((response) => response.data)
        .then((response) => {
          this.categories = response;
        });
    },
    async get_categories3() {
      await axios
        .post("categories/3")
        .then((response) => response.data)
        .then((response) => {
          this.category3 = response;
        });
    },
  },
};
</script>
<style>
.mycard {
  box-sizing: border-box;
  width: 140px;
  height: 160px;
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
  width: 200px;
  height: 100px;
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


.mycard4 {
  box-sizing: border-box;
  height: 200px;
  width: 260px;
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

.mycard4:hover {
  border: 1px solid black;
  transform: scale(1.05);
}

.mycard4:active {
  transform: scale(0.95) rotateZ(1.7deg);
}
</style>

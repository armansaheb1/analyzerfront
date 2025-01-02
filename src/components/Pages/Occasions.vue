<template>
  <div class="topright" style="padding: 20px 7%">
    <div class="jalali-calendar">
      <PersianDatePicker :props="{ autoSubmit: true, }" v-model="selectedDate" format="jYYYY/jMM/jDD"
        @update="fetchOccasions"></PersianDatePicker><br>

    </div>
    <div style="width: 100%; padding: 10%; background: white">
      <h5 style="font-weight: bold; font-size: 16px">تقویم مناسبتی تولید محتوا</h5>
      <h6 v-if="!occasions" style="color: red; font-size: 12px">در این روز مناسبتی وجود ندارد</h6>
      <button v-for="item in occasions" @click="selected = item"
        :style="[selected == item ? { 'background': '#64cdc3', 'color': 'white' } : { 'border': 'solid #64cdc3', 'color': '#64cdc3' }]"
        class="btn">{{
          item
        }}</button>
      <div style="clear:both"></div>
    </div>
  </div>
  <div class="bottomleft" style="padding: 35px 5%">

    <div v-if="selected">

      <a v-for="(item, idx) in occasions_sevices" class="mycard2"
        :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 8px; margin-top: 0px;border-radius: 10px; cursor: pointer;margin: 2%; padding: 1.5% ;box-sizing: border-box;padding-top: 0; margin-top: 0`"
        @click="submit(item.id)">

        <h6 style="
              font-size: 12px;
              font-weight: normal;
                margin-top: 5px;
                height: 20px;
                color: black;
                border-radius: 16px;
              line-height: 30px;
                white-space: break-spaces;
                text-align: center;
                font-family: 'vazir';
              " v-html="item.name"></h6>
        <i v-bind:key="item" style="padding: 10px; margin-top: 20px!important;">

          <i style="
                  display: block;
                  width: 25%;
                  margin-left: 6%;
                  
                  aspect-ratio: 1/1;
                  border-radius: 0;
                  background: white;
                  float: left;
                  margin-top: 0px;
                "><img style="width: 100%; aspect-ratio: 1/1" :src="item.get_image" alt="" /></i>
          <p style="
                  margin: 2.5%;
                  text-align: justify;
                  font-size: 8px;
                  text-decoration: none;
                  margin-top: -20px;
                  white-space: break-spaces;
                  width: 60%;
                  text-align: center;
                  font-family: 'vazir';
                  height: 40px;
                  float: right;
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
      <div style="clear:both"></div>
      <br>
      <p style="text-align: center">محتوای مناسبتی فردا را اینجا برنامه ریزی و تولید کنید</p>
      <br><br><br><br>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import axios from "axios";
import PersianDatePicker from 'vue3-persian-datetime-picker';
import persianDate from 'persian-date';
export default {
  name: "HomeView",
  components: {
    navbar,
    PersianDatePicker
  },

  data() {
    return {
      occasions: [],
      occasion: [],
      occasions_sevices: [],
      selected: '',
      selectedDate: (new persianDate().format('YYYY/MM/DD').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)))
    };
  },
  mounted() {
    this.get_occasion_services();
    this.fetchOccasions()

  },
  methods: {
    settime() {
      var date = new persianDate().format('YYYY/MM/DD').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
      console.log(date)
      this.selectedDate = date
    },
    async fetchOccasions() {
      await axios
        .post("occasions", { date: this.selectedDate })
        .then((response) => response.data)
        .then((response) => {
          console.log(response)
          this.occasions = response.events;

          if (response.events) {
            this.selected = response.events[0]
          }
        });
    },

    async submit(id) {
      this.$store.state.isLoading = true;
      await axios
        .post(`occasions-builder/${id}`, { text: this.selected })
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
         window.scrollTo(0, 0);
          this.$router.push(this.$route.go || `/result/${response}`);
        });
    },
    async get_occasion_services() {
      await axios
        .get("occasion-services")
        .then((response) => response.data)
        .then((response) => {
          this.occasions_sevices = response;
        });
    },

  },
  watch: { selectedDate(newDate) { console.log('Selected date updated:', newDate); this.fetchOccasions(); } }
};
</script>
<style>
.mycard2 {
  box-sizing: border-box;
  width: 46%;
  margin: 2%;
  height: 80px;
  float: right;
  background: white;
  border: 1px solid white;

  backdrop-filter: blur(6px);
  border-radius: 5px;
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
</style>
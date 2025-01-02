<template>
    <div class="modal-backdrop">
        <div class="modal">
            <header class="modal-header">
                <slot name="header">
                    <h5 style="font-size: 14px">{{ text.title }}</h5>
                    <br>
                    <h6 style="color: rgb(119, 119, 119); font-size: 12px">{{ text.text }}</h6>
                </slot>
                <button type="button" class="btn-close" @click="close">
                    x
                </button>
            </header>

            <section class="modal-body" style="overflow-y:auto">

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
              color: #8479b1;
              background-color: white;
              border: solid white 2px;
              padding: 5px 10px ;
              margin-top: -8px;
              border-radius: 10px;
              cursor: pointer;
              margin-right: 10px;
              font-weight: bold;
              text-align: right;
              font-family: 'vazir';
            ">
                                    همه</i>
                            </div>
                            <div v-for="item in categories" v-bind:key="item" @click="category = item" style="
            text-align: right;
            max-width: 100%;
            display: inline-block;
            direction: rtl;
            margin-top: 18px;
            font-family: 'vazir';
          ">
                                <i v-if="item.template !== 3" style="
              font-size: 12px;
              color: #8479b1;
              background-color: white;
              border: solid white 2px;
              padding: 5px 10px;
              margin-top: -8px;
              border-radius: 10px;
              cursor: pointer;
              margin-right: 5px;
              font-weight: bold;
              text-align: right;
              font-family: 'vazir';
            ">
                                    <!-- <i class="fa-solid fa-pencil"></i> -->
                                    {{ item.name }}</i>
                            </div>
                        </div>
                    </div>

                    <div style="clear: both; color: white; border-color: white"></div>
                    <div v-if="!category">
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
                                    :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 8px; margin-top: 0px;border-radius: 18px; cursor: pointer; margin:2.5%; padding: 1.5% ;box-sizing: border-box;`"
                                    :href="'/services/' + resid + '/' + nid + '/' + item.slug">
                                    <i v-bind:key="item" style="padding: 10px">
                                        <i style="
                  display: block;
                  width: 44%;
                  margin: auto;
                  margin-bottom: 10px;
                  aspect-ratio: 1/1;
                  border-radius: 0;
                  background: white;
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
            padding-top: 18px;
            padding-right: 7.5%
          `">
                                <a v-for="(item, idx) in cat.services" class="mycard2"
                                    :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 8px; margin-top: 0px;border-radius: 18px; cursor: pointer; margin:2.5%; padding: 1.5% ;box-sizing: border-box;`"
                                    :href="'/services/' + resid + '/' + nid + '/' + item.slug">


                                    <i v-bind:key="item" style="padding: 10px; margin-top: 20px!important;">
                                        <i style="
                  display: block;
                  width: 28%;
                  margin-left: 6%;
                  
                  aspect-ratio: 1/1;
                  border-radius: 0;
                  background: white;
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
                                :style="`text-decoration:none;display: inline-block;font-size: 16px; color: #777777; background-color: #${item.color};  padding: 8px; margin-top: 0px;border-radius: 18px; cursor: pointer; margin:2.5%; padding: 1.5% ;box-sizing: border-box;`"
                                :href="'/services/' + resid + '/' + idx + '/' + item.slug">
                                <i v-bind:key="item" style="padding: 10px">
                                    <i style="
                  display: block;
                  width: 44%;
                  margin: auto;
                  margin-bottom: 10px;
                  aspect-ratio: 1/1;
                  border-radius: 0;
                  background: white;
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
                  width: 70%;
                  margin-right: 15%;
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
                                </i>
                            </a>

                            <div style="clear: both"></div>
                            <br />
                        </div>
                    </div>
                </div>
                <div style="height: 200px"></div>
            </section>

            <footer class="modal-footer">
                <slot name="footer">
                    با زدن دکمه خروج به صفحه خبر برمیگردید
                </slot>
                <button type="button" class="btn-green" @click="close">
                    خروج
                </button>
            </footer>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        text: String,
        resid: Number,
        nid: Number
    },
    data() {
        return {
            categories: [],
            category: false,
            colors: ["#82ccfb", "#9958b8", "#b3dcf3", "#ecd6f6"],
        }
    },
    name: 'Modal',
    mounted() {
        this.get_services()
    },
    methods: {
        close() {
            this.$emit('close');
        },
        async get_services() {
            await axios
                .get("categories")
                .then((response) => response.data)
                .then((response) => {
                    this.categories = response;
                });
        },
    },
};
</script>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    text-align: center;
    display: block
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
}

.btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
}
</style>
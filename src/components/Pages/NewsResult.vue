
ate>
  <div v-if="result">
    <div class="topright" style="padding-top: 110px">
      <div>
        <div
          style="
            margin-top: 0px;
            width: 24%;
            margin-left: 38%;
            aspect-ratio: 1/1;
            background: white;
            border-radius: 50%;
          "
        >
          <img style="width: 100%; height: 100%" src="/img/myicons/page-19.png" alt="" />
        </div>
        <br />
        <h5>نتیجه تحلیل خبر شما</h5>
      </div>
    </div>
    <div class="bottomleft card-body">
      <ckeditor
        style="
          text-align: right;
          width: 90%;
          margin-left: 5%;
          margin-right: 5%;
          direction: rtl;
          margin-top: 15px;
        "
        v-if="result"
        v-model="result"
        :editor="editor"
        :config="editorConfig"
      />
    </div>
  </div>
  <div style="height: 200px"></div>
</template>

<script>
// @ is an alias to /src
import navbar from "@/components/Layouts/navbar.vue";
import axios from "axios";
import "ckeditor5/ckeditor5.css";

import {
  ClassicEditor,
  Bold,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";

export default {
  name: "HomeView",
  components: {
    navbar,
  },
  mounted() {
    this.get();
  },
  data() {
    return {
      editor: ClassicEditor,
      editorConfig: {
        plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
        toolbar: ["undo", "redo", "|", "bold", "italic"],
        contentsLangDirection: "rtl",
        language: "fa",
      },
      services: [],
      categories: [],
      occasions: "",
      category: "",
      olength: false,
      result: '',
      colors: ["#82ccfb", "#9958b8", "#b3dcf3", "#ecd6f6"],
    };
  },
  methods: {
    async get() {
      this.$store.state.isLoading = true;
      var id = this.$route.params.id;
      await axios
        .post(`news-services/${id}`)
        .then((response) => response.data)
        .then((response) => {
          this.$store.state.isLoading = false;
          this.result = response;
        }).catch(()=>{
          setTimeout(() => {
            this.get()
          }, 10000);
        });
    },
  },
};
</script>
<style>
.mycard {
  box-sizing: border-box;
  width: 190px;
  height: 330px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 7px 10px 30px rgba(0, 0, 0, 0.22);
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
  height: 120px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 7px 10px 30px rgba(0, 0, 0, 0.22);
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
  box-shadow: 7px 10px 30px rgba(0, 0, 0, 0.22);
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

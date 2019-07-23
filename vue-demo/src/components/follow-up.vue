<template>
  <el-container>
    <el-header>跟 进 信 息</el-header>
    <el-main>
      <div class="box" v-for="(item,index) in follow_up_data" :key="index">
        <div class="title">
          <span>{{follow_up_data[index].creator_name}}</span>
        </div>
      <div class="time">{{follow_up_data[index].create_time}}</div>
        <div class="content">
          <!-- <p>{{follow_up_data[index].follow_up_content}}</p> -->
          <p v-html='follow_up_data[index].follow_up_content'></p>
        </div>
      </div>
    </el-main>
  </el-container>
</template>


<style>
html {
margin: 0 10%;
}
.el-header,
.el-footer {
font-size: 20px;
font-weight: bold;
background-color:#3072F6;
color: #fff;
text-align: center;
line-height: 60px;
}

.el-main {
background-color: rgba(131, 168, 238, 0.3);
color: #333;
text-align: left;
/* line-height: 160px; */
padding: 0;
}

body > .el-container {
margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
line-height: 320px;
}
.box {
border-bottom: 5px solid #fff;
box-sizing: border-box;
padding: 10px 20px;
/* margin-bottom: 5px; */
/* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04); */
}
/* .title {
/* color: red; */
/* border-bottom: 1px solid #d3d3d3; */

.title span {
/* border: 1px solid black; */
display: inline-block;
/* width: 300px; */
/* height: 100px; */
/* line-height: 100px; */
text-align: left;
}
.title span:first-child {
font-weight: bold;
line-height: 1.5;
color: #000;
}
/* .title span:nth-child(2) {
color: rgba(56, 51, 51, .6);
} */

.time {
color: rgba(56, 51, 51, .6);
font-size: 14px;
}
.content ul li {
/* height: 50px; */
text-decoration: none;
list-style: none;
margin-top: 5px;
}
</style>

<script>
// 101103185500
export default {
  mounted() {
    console.log(this.$router.history);
    this.$axios
      .get(`http://10.26.28.122:10018/lushiying/followup/?house_code=${this.$router.history.current.query.houseCode}`)
      .then(response => {
        this.follow_up_data = response.data.data;
        console.log(response);
      })
      .catch(function(error) {
        // 请求失败处理
        console.log(error);
      });
  },
  data() {
    return {
      follow_up_data: null
    };
  },
  methods: {
    open() {
      window.location.href = "https://www.baidu.com";
    }
  }
};
</script>

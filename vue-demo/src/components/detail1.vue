<template>
  <div id="detail">
    <section>
      <h3>维护信息</h3>
      <p class="process">
        <span>完成度:</span>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="70"></el-progress>
      </p>
      <h4>价格信息</h4>
      <el-form ref="form" :model="form">
        <el-form-item label="原购价格：">
          <el-input v-model="form.price" :disabled=false :id="border"></el-input>
        </el-form-item>
      </el-form>
      <!-- <p> 原购价格：{{ price }} </p> -->
      <h4>特色信息</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="有无车位：">
          <el-input v-model="form.name" :id="border"></el-input>
        </el-form-item>
        <el-form-item label="交房日期：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="装修日期：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="装修成本：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </section>
    <section>
      <h3>基础信息</h3>
      <h4>小区信息</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="所在城区：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="所在商圈：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="物业费：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <h4>生活信息</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="供暖类型：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="用电类型：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="车位比例：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="停车服务费：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="供暖费用：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="用水类型：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <h3>角色人信息</h3>
      <h4>录入人</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="门店：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <h4>维护人</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="门店：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <h4>实勘人</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="门店：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
      <h4>钥匙人</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="姓名：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="门店：">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
      </el-form>
    </section>

    <el-row>
      <el-button @click="onChange">修改</el-button>
      <el-button @click="onSubmit">保存</el-button>
    </el-row>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <span>这是一段信息</span>
      <div>
        <el-checkbox
          id="a"
          v-for="(item ,index) in list"
          v-model="item.ischeck"
          @change="click(item)"
          :key="index"
        >{{list[index].labelKey}}:{{list[index].labelValue}}</el-checkbox>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false;textarea=''">取 消</el-button>
        <el-button type="primary" @click="button_click">
          <!-- <router-link to="/follow_up">确 定</router-link> -->
          确定
        </el-button>
      </span>
      <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
    </el-dialog>
  </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$router.history.current.query);
    },
  data() {
    return {
     follow_list:[],
      form: [],
      centerDialogVisible: false,
      time: 10,
      dialogVisible: false,
      textarea: "",
      list: [
        {
          labelKey: "看房时间",
          labelValue: "20190721",
          ischeck: true
        },
        {
          labelKey: "是否唯一",
          labelValue: "是",
          ischeck: true
        },
        {
          labelKey: "看房时间",
          labelValue: "20190721",
          ischeck: true
        },
        {
          labelKey: "是否唯一",
          labelValue: "是",
          ischeck: true
        }
      ],
      parma: {
        list: [
          {
            labelValue: "20190721",
            ischeck: true
          },
          {
            labelValue: "是",
            ischeck: true
          },
          {
            labelKey: "看房时间",
            labelValue: "20190721",
            ischeck: true
          },
          {
            labelKey: "是否唯一",
            labelValue: "是",
            ischeck: true
          }
        ],
        content: "12345",
        housecode: 123456
      }
    };
  },

  methods: {
    onSubmit() {
      this.dialogVisible = true;
    },
    onChange() {},
    button_click() {
      this.dialogVisible = false;
      this.list.forEach(element => {
        if (element.ischeck) {
          this.follow_list.push(element);
        }
      });
      console.log(this.follow_list);
      // this.$router.push({
      // path: "/",
      // query: {
      // //路由传参时push和query搭配使用 ，作用时传递参数
      // textarea: this.textarea,
      // follow_list: this.follow_list
      // }
      // });
      this.$axios
        .post(
          "http://10.26.28.122:10018/lushiying/Savefollowupinfo",
          JSON.stringify({
              list:this.follow_list,
              content:this.content
          })
        )
        .then(response => {
          this.info = response;
          this.content='';
          console.log(response);
          this.$router.push('/follow_up');
        })
        .catch(function(error) {
          // 请求失败处理
          this.content='';
          console.log(error);
        });
    },
    cancle() {
      console.log("12345");
    },
    confrim() {
      console.log("asdfgh");
    },
    handleClose() {
      this.dialogVisible = false;
      this.textarea = "";
    },
    click(item) {}
  },

  created() {
    this.$axios
      // .get('http://10.26.28.122:10018/Package/getdownloadurl/?project_key=alliance')
      // .get('http://10.26.28.122:10018/lushiying/followup/?house_code= 101103185500')
      .get("../../static/sample.json")
      .then(response => {
        console.log(response);
        this.form = response.data.list[0];
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style>
html {
  /* margin: 0 12%; */
  padding: 0;
}
#detail {
  margin: 0 auto;
  text-align: left;
}
h3,
h4 {
  text-align: left;
}
h4 {
  color: #f00;
}
.el-item-form {
  text-align: left;
  padding-left: 0;
}
.el-input {
  /* outline-style: none; */
  border: 0;
  width: 100px;
  height: 22px;
}
.el-input__inner {
  outline-style: none;
  
  background-color: #fff;
}
.el-input__inner.edit {
  border: 1px solid gray;
}
.el-input.is-disabled .el-input__inner {
  background-color: #fff;
  color: #000;
}
.process {
  width: 300px;
  position: absolute;
  top: 25px;
  left: 800px;
  border: 1px solid #dcdfe6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  padding: 20px;
  border-radius: 15px;
}
.process span {
  margin: 20px;
}
.el-progress {
  display: inline-block;
  width: 50%;
}
</style>

<template>
  <div id="detail">
    <section>
      <h3>维护信息</h3>
      <p class="process">
        <span>信息完备率:</span>
        <el-progress :text-inside="true" :stroke-width="20" :percentage="InfoCompleteness"></el-progress>
      </p>
      <h4>价格信息</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="原购价格：">
          <el-input v-model="form.maintainInfo.oldPrice" :disabled="disval" class="hideborder" :id="border">
            <template slot="append">元</template>
          </el-input>
        </el-form-item>
      </el-form>
      <!-- <p> 原购价格：{{ price }} </p> -->
      <h4>特色信息</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="有无车位：">
          <el-input v-model="form.maintainInfo.isParkingPlace" :disabled="disval" :id="border"></el-input>
        </el-form-item>
        <el-form-item label="装修时间：">
          <el-input v-model="form.maintainInfo.fitmentTime" :disabled="disval" :id="border"></el-input>
        </el-form-item>
        <el-form-item label="装修成本：">
          <el-input v-model="form.maintainInfo.fitmentCost" :disabled="disval" :id="border"></el-input>
        </el-form-item>
      </el-form>
    </section>
    <section>
      <h3>基础信息</h3>
      <h4>小区信息</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="所在城区：">
          <el-input v-model="form.basicInfo.districtName" :disabled="disval" :id="border"></el-input>
        </el-form-item>
        <el-form-item label="所在商圈：">
          <el-input v-model="form.basicInfo.bizcircleName" :disabled="disval" :id="border"></el-input>
        </el-form-item>
        <el-form-item label="小区名：">
          <el-input v-model="form.basicInfo.resblockName" :disabled="disval" :id="border"></el-input>
        </el-form-item>
      </el-form>
      <h4>生活信息</h4>
      <!-- <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="取暖费：">
          <el-input v-model="form.basicInfo.heatingFee" :disabled="disval"></el-input>
          <span>
            元/采暖季/m
            <sup>2</sup>
          </span>
        </el-form-item>
        <el-form-item label="燃气费：">
          <el-input v-model="form.basicInfo.gasFee" :disabled="disval"></el-input>
          <span>
            元/m
            <sup>3</sup>
          </span>
        </el-form-item>
        <el-form-item label="建成年限：">
          <el-input v-model="form.basicInfo.buildYear" :disabled="disval"></el-input>
          <span>年</span>
        </el-form-item>
        <el-form-item label="标签：">
          <el-input v-model="form.basicInfo.label" :disabled="disval"></el-input>
        </el-form-item>
      </el-form> -->
      <el-form :inline="true" ref="form" :model="form">
<el-form-item label="取暖费：">
<!-- <el-input v-model="form.basicInfo.heatingFee" :disabled="disval"></el-input> -->
<!-- <span>元/采暖季/m<sup>2</sup></span> -->
<div style="width: 200px">
<el-input v-model="form.basicInfo.heatingFee" :disabled="disval" :id="border">
<template slot="append">
元/采暖季/m
<sup>2</sup>
</template>
</el-input>
</div>
</el-form-item>

<el-form-item label="燃气费：">
<div style="width: 200px">
<el-input v-model="form.basicInfo.gasFee" :disabled="disval" :id="border">
<template slot="append">
元/m
<sup>3</sup>
</template>
</el-input>
</div>
</el-form-item>
<el-form-item label="建成年限：">
<div style="width: 200px">
<el-input v-model="form.basicInfo.buildYear" :disabled="disval" :id="border">
<template slot="append">
年
</template>
</el-input>
</div>
</el-form-item>
<el-form-item label="标签：">
<el-input v-model="form.basicInfo.label" disabled="disval" :id="border"></el-input>
</el-form-item>
</el-form>
      <h3>角色人信息</h3>
      <h4>录入人</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="姓名：">
          <el-input v-model="form.roleInfo.creator.name" :disabled="disval" :id="border"></el-input>
        </el-form-item>
        <el-form-item label="门店：">
          <el-input v-model="form.roleInfo.creator.org_name" :disabled="disval" :id="border"></el-input>
        </el-form-item>
      </el-form>
      <h4>维护人</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="姓名：">
          <el-input v-model="form.roleInfo.holder.name" :disabled="disval" :id="border"></el-input>
        </el-form-item>
        <el-form-item label="门店：">
          <el-input v-model="form.roleInfo.holder.org_name" :disabled="disval" :id="border"></el-input>
        </el-form-item>
      </el-form>
      <h4>实勘人</h4>
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="姓名：">
          <el-input v-model="form.roleInfo.APPRO.name" :disabled="disval" :id="border"></el-input>
        </el-form-item>
        <el-form-item label="门店：">
          <el-input v-model="form.roleInfo.APPRO.org_name" :disabled="disval" :id="border"></el-input>
        </el-form-item>
      </el-form>
      <!-- <h4> 钥匙人 </h4>
            <el-form :inline="true" ref="form" :model="form">
                <el-form-item label="姓名：">
                    <el-input v-model="form.roleInfo.key.name" disabled=true></el-input>
                </el-form-item>
                <el-form-item label="门店：">
                    <el-input v-model="form.roleInfo.key.org_name" disabled=true></el-input>
                </el-form-item>
      </el-form>-->
    </section>

    <el-row>
      <el-button @click="onChange" class="onchange" type="primary">修改</el-button>
      <el-button @click="onSave" class="onsave onhidden" type="primary">保存</el-button>
    </el-row>
    <!-- 111111111111111111 -->
    <el-dialog title="同步跟进信息" :visible.sync="dialogVisible" width="30%" :before-close="cancle">
      <!-- <span>同步跟进信息</span> -->
      <div>
        <el-checkbox
          id="a"
          v-for="(item ,index) in follow"
          v-model="item.ischeck"
          @change="click(item)"
          :key="index"
        >{{follow[index].labelKey}}:{{follow[index].labelValue}}</el-checkbox>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="cancle">取消</el-button>
        <el-button type="primary" @click="button_click">确定</el-button>
      </span>
      <el-input style='margin-top:30px; ' type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
    </el-dialog>
    <!-- 11111111111111111 -->
  </div>
</template>

<script>



export default {
  data() {
    return {
      InfoCompleteness:1,
      border: '',
      follow_list:[],
      follow:[],
      form: [],
      disval: true,
      centerDialogVisible: false,
      time: 10,
      textarea: "",
      dialogVisible: false,
      list: [
        {
          "labelKey": "看房时间",
          "labelValue": "20190721",
          "ischeck": true
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
        housecode: 123456,
        agent:'asdas',
      }
    };
  },
  mounted() {
    console.log(this.$router.history.current.query);
  },
  created() {
    console.log(this.$router.history.current.query);
    this.$axios
      // .get('http://10.26.28.122:10018/Package/getdownloadurl/?project_key=alliance')
      // .get('http://10.26.28.122:10018/lushiying/followup/?house_code= 101103185500')
      //   .get('../../static/sample.json')
      //   .get('http://192.168.43.209:8080/lushiying/housedetail/?house_code=101100861427')
      .get(
        `http://10.26.28.122:10018/lushiying/housedetail/?house_code=${this.$router.history.current.query.houseCode}`
      )
      .then(response => {
        console.log(response);
        this.form = response.data.data;
        this.InfoCompleteness=response.data.data.InfoCompleteness*100;
      
      })
      .catch(error => {
        console.log(error);
      });

    this.saveData();
  },
  methods: {
    onChange() {
      console.log("===");
      var inputEle = document.querySelectorAll(".el-input__inner");
      var len = inputEle.length;
      for (var i = 0; i < len; i++) {
        inputEle[i].disabled = false;
        inputEle[i].classList.add("el-input-show");
      }
      document.querySelector(".onchange").classList.add("onhidden");
      document.querySelector(".onsave").classList.remove("onhidden");
      // document.querySelectorAll('.el-input').classList.add('input-show');
      this.disval = false;
      // elButton.style.display = "block";
      //修改边框
      this.border = 'border';
      //点击修改 跳转到顶部
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    onSave() {
      var inputEle = document.querySelectorAll(".el-input__inner");
      var len = inputEle.length;
      for (var i = 0; i < len; i++) {
        inputEle[i].disabled = true;
        inputEle[i].classList.remove("el-input-show");
      }
      
      this.dialogVisible = true;
      var data={
          form:this.form
      };
       this.$axios
        .post(
          "http://10.26.28.122:10018/lushiying/Savedetailinfo",
            this.$qs.stringify({data})
          )
        .then(response => {
            console.log(response);
            var obj=response.data.data;
            for(let index in obj){
              //console.log(obj[index]);
              obj[index].ischeck=true;
              this.follow.push(obj[index]);
            }
            console.log(this.follow);
            this.disval = true;
        })
        .catch(function(error) {
          // 请求失败处理
          console.log(error);
        });
      //   this.$axios
      //     .post(
      //       "http://10.26.28.122:10018/lushiying/Savefollowupinfo",
      //       JSON.stringify({
      //         list: this.follow_list,
      //         content: this.content
      //       })
      //     )
      //     .then(response => {
      //       this.info = response;
      //       this.content = "";
      //       console.log(response);
      //       this.$router.push("/follow_up");
      //     })
      //     .catch(function(error) {
      //       // 请求失败处理
      //       this.content = "";
      //       console.log(error);
      //     });
    },
    onSubmit() {
      this.dialogVisible = true;
    },
    button_click() {
      this.dialogVisible = false;
      this.follow.forEach(element => {
        if (element.ischeck) {
          this.follow_list.push(element);
        }
      });
      // this.$router.push("/follow_up");
      console.log(this.follow_list);
      // this.$router.push({
      // path: "/",
      // query: {
      // //路由传参时push和query搭配使用 ，作用时传递参数
      // textarea: this.textarea,
      // follow_list: this.follow_list
      // }
      // });
      var data= {
            "list": this.follow_list,
            "content": this.textarea,  
            "housecode": this.$router.history.current.query.houseCode,
            "agent":this.$router.history.current.query.owner,
          }
      this.$axios
        .post(
          "http://10.26.28.122:10018/lushiying/Savefollowupinfo",
          // '192.168.43.209:8080/lushiying/Savefollowupinfo/',
            this.$qs.stringify({data})
            )
          
        .then(response => {
          this.info = response;
          this.content = "";
          console.log(response);
          this.follow_list.length=0;
        this.$router.push({
            path: "/follow_up",
            query: {
              owner:this.$router.history.current.query.owner,
              houseCode:this.$router.history.current.query.houseCode
            }
          });
        })
        .catch(function(error) {
           
          // 请求失败处理
          console.log('================');
          this.content="";
          console.log(error);
         
        });
    },
    cancle() {
      this.dialogVisible = false;
      this.textarea = "";
      this.disval = true;
      this.follow.length=0;
      document.querySelector(".onchange").classList.remove("onhidden");
      document.querySelector(".onsave").classList.add("onhidden");
      this.$forceUpdate();
      //修改边框
      this.border = '';
      //点击修改 跳转到顶部
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    confrim() {
      console.log("asdfgh");
    },
    handleClose() {
      this.dialogVisible = false;
      this.textarea = "";
    },
    saveData: function() {}
  },

  mounted: {
    //   var url = 'http://'
  }
};
</script>

<style>
html {
  margin: 0 12%;
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
h3 {
  border-bottom: #333;
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
  /* width: 125px; */
  height: 22px;
}
.onhidden {
  display: none;
}
/* .el-input__inner {
    outline-style: none;
    border: 0;
    background-color: #fff;
} */
.el-input.is-disabled .el-input__inner {
  outline-style: none;
  border: 0;
  background-color: #fff;
  color: #000;
}
/* .hideborder input{
    outline-style: none;
    border: 0;
    background-color: #fff;
    color: #000;
} */
.el-input-show {
  outline-style: auto;
  border: 1px;
}
.el-select .el-input {
width: 50px;
}
.input-with-select .el-input-group__prepend {
background-color: #fff;
}
#border {
  border: 1px solid #DCDFE6
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
.el-textarea__inner{
  min-height: 100px;
}
.el-input-group__append, .el-input-group__prepend{
  background-color: #fff;
  border: none;
  color: #000;
}
/* .el-button {
  border: 2px solid gray;
} */
</style>


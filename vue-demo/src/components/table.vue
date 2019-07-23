<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="楼盘名称" width="280"></el-table-column>
    <!-- <el-table-column prop="model" label="户型" width="100"></el-table-column> -->
    <el-table-column prop="area" label="面积"></el-table-column>
    <el-table-column prop="price" label="总价"></el-table-column>
    <el-table-column prop="unitPrice" label="单价"></el-table-column>
    <el-table-column prop="floor" label="楼层"></el-table-column>
    <el-table-column prop="direction" label="朝向"></el-table-column>
    <!-- <el-table-column prop="look" label="近30天带看"></el-table-column> -->
    <el-table-column prop="submit" label="挂牌"></el-table-column>
    <el-table-column prop="owner" label="维护人"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <!-- <router-link to="/follow_up">跟进</router-link> -->
      </template>
    </el-table-column>
  </el-table>
</template>


<style>
  html {
  margin: 0 10%;
  }
  .el-table th>.cell, .el-table .cell {
  text-align: center;
  }
  .el-table th {
  background-color: #3072F6;
  color: #fff;
  }
  .el-table td {
  background-color: hsla(5, 30%,90%,.1);
  }
  .el-table_1_column_1 {
  font-size: 16px;
  /* font-weight: bold; */
  }
  /* .el-table_1_column_1 .is-leaf > .cell {
  font-size: 14px;
  } */
  .el-table_1_column_5 {
  color: #3072F6;
  }
</style>


  <script>
export default {
  mounted() {
    this.$axios
      .get("http://10.26.28.122:10018/lushiying/houselist/?count=20")
        // .get("http://192.168.43.209:8080/lushiying/houselist/?count=5")
      .then(response => {
        this.tableData = response.data.data;
        console.log(response);
      })
      .catch(function(error) {
        // 请求失败处理
        console.log(error);
      });
  },
  data() {
    return {
      tableData: null,
      houseCode: {}
    };
  },
  methods: {
    handleClick(item) {
      console.log(item.owner);
      this.$router.push({
        path: "/detail",
        query: {
          owner:item.owner,
          houseCode:item.houseCode
        }
      });
    }
  }
};
</script>
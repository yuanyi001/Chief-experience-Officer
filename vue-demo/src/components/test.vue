<template>
    <div @click='ff'>aaaaa</div>
</template>

<script>
export default {
  methods: {
    ff() {
      var data = {
        content: "asdasd",
        housecode: 666,
        agent: "asdas"
      };
      this.$axios
        .post(
        //   "http://10.26.28.122:10018/lushiying/Savefollowupinfo",
          '192.168.43.209:8080/lushiying/Savefollowupinfo/',
          JSON.stringify(data),
          {
            headers: {
              "Content-Type": "application/json"
            }
          }
        )
        .then(response => {
          this.info = response;
       
          console.log(response);
          this.$router.push("/follow_up");
        })
        .catch(function(error) {
          // 请求失败处理
          console.log("================");
      
          console.log(error);
        });
    }
  }
};
</script>
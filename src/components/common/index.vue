<style scoped>
calculate form input {
  width: 220px;
  height: 40px;
  line-height: 40px;
  outline: none;
  border: none;
  vertical-align: middle;
}
.calculate form ul label {
  font-size: 22px;
  vertical-align: middle;
}
</style>
<template>
  <div>
    <template>
      <div style="width: 600px; line-height: 100px; height: 100px">
        <template>

          <label type="left">姓名：</label>
          <Input v-model="name"
                 :value="name+''"
                 placeholder="请输入"
                 style="width: 200px" />
        </template>
        <template>
          <label style="left;width: 200px;">性别：</label>
          <Input v-model="age"
                 :value="age+''"
                 placeholder="请输入"
                 style="width: 200px" />
        </template>
        <template>
          <Button type="primary"
                  style="width: 60px"
                  click="search">搜索</Button>
        </template>
      </div>
    </template>
    <template>
      <Table :columns="columns1"
             :data="data1"></Table>
    </template>
  </div>
</template>
<script>
import http from "../../lib/http.js"
import ApiSetting from "../../lib/ApiSetting.js"
export default {
  data () {
    return {
      name: '',
      age: '',
      // buttonSize: 12,
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: 'Date',
          key: 'date'
        }
      ],
      data1: []
    }
  },
  components: {},
  computed: {
  },
  methods: {
    searh (data) {
      debugger
      let param = {
        name: this.name,
        age: this.age      }
      http(ApiSetting.getLocation, { param })
        .then((res) => {
          console.log(res)
        }, (error) => {
          console.log(error)
        })
    }
  },
  created () {
  },
  mounted () {

  }
}
</script>

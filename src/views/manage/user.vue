style scoped>

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
    <!-- ,float:'left' -->
    <div :style="{padding: '30px 24px 60px'}">
      <div :style="{float:'left'}">
        <label>姓名：</label>
        <Input v-model="name"
               value="name"
               placeholder="请输入"
               style="width: 200px"
               @on-change="onClickName(name)" />
      </div>
      &#12288;
      <div :style="{float:'left'}">&#12288;
        <label>年龄：</label>
        <Input v-model="age"
               value="age"
               placeholder="请输入"
               style="width: 200px"
               @on-change="onClickAge(age)" />
      </div>
      &#12288;
      <div :style="{float:'left'}">&#12288;
        <Button type="primary"
                icon="ios-search"
                @click="onClick">搜索</Button>
      </div>
    </div>
    <div :style="{padding: '0px 24px 60px'}">
      <div :style="{float:'left'}">
        <Button type="primary"
                @click="add">添加用户</Button>&#12288;&#12288;
      </div>
      <div :style="{float:'left'}">
        <Button type="primary"
                @click="edit">修改用户</Button>
      </div>
    </div>
    <div>
      <div :style="{padding: '0 24px 24px',minHeight: '80px'}">
        <Table stripe
               size="large"
               :columns="columns"
               :data="dataList">
        </Table>
      </div>
    </div>
    <div>
      <add-user :modal="this.addModle"></add-user>
    </div>
    <div>
      <edit-user :modal="this.addModle"></edit-user>
    </div>
  </div>
</template>
<script>
import addUser from '@/components/user/addUser.vue'
import editUser from '@/components/user/editUser.vue'
export default {
  data () {
    return {
      modal1: false,
      addModle: true,
      editModle: true,
      value: '',
      name: '小红',
      age: '',
      columns: [
        {
          title: '姓名',
          key: 'empName'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '身份证号码',
          key: 'identityCard'
        },
        {
          title: '家庭住址',
          key: 'familyAddress'
        },
        {
          title: '电话',
          key: 'phone'
        },
        {
          title: '邮箱',
          key: 'email'
        }
      ],
      dataList: []
    }
  },
  components: {
    addUser, editUser
  },
  computed: {
  },
  methods: {
    onClickName (value) {
      debugger
      console.log(value)
      this.name = value
    },
    onClickAge (value) {
      debugger
      console.log(value)
      this.age = value
    },
    add () {
      debugger
      this.addModle = true
    },
    edit () {
      debugger
      this.editModle = true
    },
    onClick (name) {
      let param = {
        name: this.name,
        age: this.age
      }
      this.http.get(this.ports.employee.queryEmployeeByName, { param }, res => {
        if (res.success) {
          let result = []
          result = res.data
          this.dataList = result
          if (result === null || result.length === 0) {
            this.$Notice.success({
              title: '未查询出数据',
              duration: 3 // n秒后消失
            })
          } else {
            this.$Notice.success({
              title: '查询数据成功',
              duration: 3 // n秒后消失
            })
          }
        } else {
          this.$Notice.error({
            title: '查询数据失败',
            duration: 3 // n秒后消失
          })
        }
      })
    }
  },
  created () {
    // this.activiName()
  }
}
</script>

<style scoped>
calculate form input{
width:220px;
height:40px;
line-height:40px;
outline:none;
border:none;
vertical-align:middle;
}
.calculate form ul label{
font-size:22px;
vertical-align:middle;
}
</style>
<template>
  <div>
    <!-- <div> -->
      <label type="left">机构1名称：</label>
      <Input v-model="value"
             placeholder="请输入1"
             style="width: 200px" />
      <label>学校2名称：</label>
      <Input v-model="value"
             placeholder="请输入1"
             style="width: 200px" />
    <!-- </div> -->
    <br>
    <br>
    <br>
    <template>
      <Table :columns="columns1"
             :data="data1"></Table>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value: '',
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
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  }
}
</script>

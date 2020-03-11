<template>
  <div>
    <Modal v-model="modal"
           title="添加用户">
      122333

      <div slot="footer"
           :style="{padding: '0px 24px 60px'}">
        <Button type="primary"
                @click="ok">确认</Button>
        <Button type="primary"
                @click="cancel">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: 'edit-user',
  data () {
    return {
      modal1: false
    }
  },
  methods: {
    ok () {
      debugger
      this.modal = true
    },
    cancel () {
      debugger
      this.modal = false
    }
  }
}
</script>

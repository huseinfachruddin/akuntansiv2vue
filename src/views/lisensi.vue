

<template>
  <div class="app-container">

   <div class="filter-container">

    <el-button v-if="list.length == 0" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
      Tambah
    </el-button>

  </div>
    <el-table
    v-loading="listLoading"
    :data="list"
    border
    fit
    highlight-current-row
    style="width: 100%;"
    >
    <el-table-column label="ID" prop="id" align="center" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
      </template>
  </el-table-column>
  <el-table-column label="Lisensi" min-width="150px">
    <template slot-scope="{row}">
      <span>{{ row.licence }}</span>
  </template>
</el-table-column>
<el-table-column label="Kode Produk" width="150px" align="center" sortable prop="cashin">
    <template slot-scope="{row}">
      <span>{{ row.product_code}}</span>
  </template>
</el-table-column>
<el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
    <template slot-scope="{row,$index}">
     <el-button type="primary" size="mini" @click="handleUpdate(row)">
        Edit
    </el-button>
    <el-button type="danger" size="mini" @click="handleDelete(row)">
        Delete
    </el-button>
</template>
</el-table-column>
</el-table>

<el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
  <el-form ref="dataForm" label-position="left" label-width="150px" style="width: 520px; margin-left:50px;">
    <el-form-item label="Lisensi">
      <el-input v-model="licence" placeholder="Lisensi" />
  </el-form-item>
  <el-form-item label="Kode Produk">
      <el-input v-model="product_code" placeholder="Produk Kode" />
  </el-form-item>
</el-form>
<div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">
      Cancel
  </el-button>
  <el-button type="primary" @click="dialogStatus==='create'?createData():updateData()">
      Confirm
  </el-button>
</div>
</el-dialog>
</div>
</template>

<script>

export default {
  name: 'ComplexTable',
  data() {
    return {
        licence : '',
        product_code :'',
        dialogStatus : '',
        dialogFormVisible : false,
        list : '',
        listLoading : '',
        total : '',
        textMap: {
            update: 'Edit',
            create: 'Buat '
        },

  }
},
created() {
    this.getList()
},

methods: {
    getList() {
        this.listLoading = true
        console.log(localStorage.getItem('licence') )
        if(localStorage.getItem('licence')  != null){
        this.list = [{licence:localStorage.getItem('licence'), product_code:localStorage.getItem('product_code')} ];
        } else {
            this.list = []
        }
        this.total = []
        this.listLoading = false


},

handleCreate() {
    this.dialogStatus = 'create'
    this.dialogFormVisible = true
},
createData() {

    const data = {
        licence : this.licence,
        product_code : this.product_code
    }
    localStorage.setItem('licence', data.licence)
    localStorage.setItem('product_code', data.product_code)
    this.dialogFormVisible = false
    this.$notify({
        title: 'Success',
        message: 'Created Successfully',
        type: 'success',
        duration: 2000
    })
    this.getList()
  },
handleUpdate(row) {
    this.licence = row.licence
    this.product_code = row.product_code
    this.dialogStatus = 'update'
    this.dialogFormVisible = true
    this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
    })
},
  updateData() {
    const data = {
        licence : this.licence,
        product_code : this.product_code
    }
    localStorage.setItem('licence', data.licence)
    localStorage.setItem('product_code', data.product_code)
    this.dialogFormVisible = false
    this.$notify({
        title: 'Success',
        message: 'Created Successfully',
        type: 'success',
        duration: 2000
    })
    this.getList()
},
handleDelete(row, index) {

    localStorage.removeItem('licence')
    localStorage.removeItem('product_code')
    this.$notify({
        title: 'Success',
        message: 'Created Successfully',
        type: 'success',
        duration: 2000
    })

    this.getList()
},
}
}
</script>

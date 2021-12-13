
<template>
  <div class="app-container">

    <div class="filter-container">

      <!-- <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="dialogFormVisible=true,dialogStatus='create'">
        Tambah
      </el-button> -->
      <el-button class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="dialogFormVisible=true,dialogStatus='create',
          name='',
          iscashout=false,
          iscashin=false,
          roles=[]">
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
      <el-table-column label="Nama Kas">
        <template slot-scope="{row}">
          <span>{{ row.name }} </span>
        </template>
      </el-table-column>
      <el-table-column label="Sebagai Kas Masuk">
        <template slot-scope="{row}">
          <span>{{ row.iscashin ==1 ? 'iya' : 'tidak' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Sebagai Kas Keluar">
        <template slot-scope="{row}">
          <span>{{ row.iscashout ==1 ? 'iya' : 'tidak'}}</span>
        </template>
      </el-table-column>    
      <el-table-column label="Role">
        <template slot-scope="{row}">
          <span v-for="role in row.role" :key="role">{{ [role.name] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <el-button type="primary" size="mini" 
          @click="dialogFormVisible=true,
          dialogStatus='update'
          ,name=row.name,
          id=row.id,
          iscashout=row.iscashout == 1 ? true : false,
          iscashin=row.iscashin == 1 ? true : false,
          roles=row.roles">
            Edit
          </el-button>
          <el-button type="danger" size="mini" @click="deleteList(row)">
            Delete
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form ref="dataForm" label-position="left" label-width="150px" style="width: 520px; margin-left:50px;">
        <el-form-item label="Nama Kas/Bank">
          <el-input v-model="name" placeholder="Nama Kas/Bank..." />
        </el-form-item>
        <el-form-item label="Kas keluar">
          <el-checkbox v-model="iscashout">Kas Keluar</el-checkbox>
        </el-form-item>
        <el-form-item label="Kas masuk">
          <el-checkbox v-model="iscashin">Kas Masuk</el-checkbox>
        </el-form-item>
        <el-form-item label="Role akses">
          <el-select v-model="roles"  multiple placeholder="Pilih Role">
            <el-option
              v-for="item in role"
              :key="item" 
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          Cancel
        </el-button>
        <el-button type="primary" @click="dialogStatus==='create'?createList():editList()">
          Confirm
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import axios from '@/api/axios'

export default {
  name: 'ComplexTable',
  data() {
    return {
      id:'',
      name:'',
      iscashout:false,
      iscashin:false,
      roles:[],
      dialogStatus:{},
      dialogFormVisible:false,
      list: '',
      role:'',
      listLoading: '',
      total: '',
      textMap: {
        update: 'Edit',
        create: 'Buat '
      }

    }
  },
  created() {
    this.getList()
    this.getRole()
  },

  methods: {
    getList() {
      axios.get('/cashuser',{headers: { Authorization: 'Bearer '+Cookies.get('Admin-Token')}}).then(response => {
        if (response.data.cashuser != null) {
          console.log(response.data.cashuser)
          this.list = response.data.cashuser
        } else {
          this.list = []
        }
        this.dialogFormVisible=false
      }).catch(err => {
        if (!err.response.data.success) {
          this.$notify({
            title: 'Error',
            message: 'Data Belum Lengkap',
            type: 'danger',
            duration: 2000
          })
        } else {
        }
      })

      this.total = []
      this.listLoading = false
    },
    getRole() {
      axios.get('/role',{headers: { Authorization: 'Bearer '+Cookies.get('Admin-Token')}}).then(response => {
        if (response.data.role != null) {
          this.role = response.data.role
        } else {
          this.role = []
        }
      }).catch(err => {
        if (!err.response.data.success) {
          this.$notify({
            title: 'Error',
            message: 'Data Belum Lengkap',
            type: 'danger',
            duration: 2000
          })
        } else {
        }
      })

      this.total = []
      this.listLoading = false
    },
    deleteList(data) {
      axios.delete('/cashuser/'+data.id,{headers: { Authorization: 'Bearer '+Cookies.get('Admin-Token')}}).then(response => {
        if (response.data.success) {
          this.$notify({
            title: 'Success',
            message: 'Data berhasil dihapus',
            type: 'success',
            duration: 2000
          })
        }
        this.dialogFormVisible=false
      }).catch(err => {
        if (!err.response.data.success) {
          this.$notify({
            title: 'Error',
            message: 'Data gagal di hapus',
            type: 'danger',
            duration: 2000
          })
        }
      })
      this.getList()
      this.total = []
      this.listLoading = false
    },
    createList() {
      const data={
        name:this.name,
        iscashin:this.iscashin,
        iscashout:this.iscashout,
        role:this.roles,
      }
      axios.post('/cashuser',data,{headers: { Authorization: 'Bearer '+Cookies.get('Admin-Token')}}).then(response => {
        if (response.data.success) {
          this.$notify({
            title: 'Success',
            message: 'Data berhasil ditambah',
            type: 'success',
            duration: 2000
          })
        }
        this.dialogFormVisible=false
        this.form={}
      }).catch(err => {
        if (!err.response.data.success) {
          this.$notify({
            title: 'Error',
            message: 'Data gagal di ditambah',
            type: 'danger',
            duration: 2000
          })
        }
      })
      this.getList()
      this.total = []
      this.listLoading = false
    },
    editList(){
      const data={
        id:this.id,
        name:this.name,
        iscashin:this.iscashin,
        iscashout:this.iscashout,
        role:this.roles,
      }
      console.log(data)
      axios.put('/cashuser/'+data.id,data,{headers: { Authorization: 'Bearer '+Cookies.get('Admin-Token')}}).then(response => {
        if (response.data.success) {
          this.$notify({
            title: 'Success',
            message: 'Data berhasil diubah',
            type: 'success',
            duration: 2000
          })
        }
        this.dialogFormVisible=false
        this.form={}
      }).catch(err => {
        if (!err.response.data.success) {
          this.$notify({
            title: 'Error',
            message: 'Data gagal di diubah',
            type: 'danger',
            duration: 2000
          })
        }
      })
      this.getList()
      this.total = []
      this.listLoading = false
    },
  }
}
</script>

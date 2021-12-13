
<template>
  <div class="app-container">

    <div class="filter-container">

      <el-button v-if="list.length == 0" class="filter-item" style="margin-left: 10px;" type="primary" icon="el-icon-edit" @click="handleCreate">
        Input Kode Lisensi
      </el-button>
        <br>
    <el-button type="primary" plain size="mini" round href="https://produk.ruasdigital.id/" target="_blank">kode lisensi dapat ditemukan di sini</el-button>
    </div>
    <br>
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
      <el-table-column label="Lisensi">
        <template slot-scope="{row}">
          <span>{{ row.licence }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Kode Produk">
        <template slot-scope="{row}">
          <span>{{ row.code }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Nama Perusahaan" align="center" sortable prop="cashin">
        <template slot-scope="{row}">
          <span>{{ row.company }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Alamat/Kontak" align="center" sortable prop="cashin">
        <template slot-scope="{row}">
          <span>{{ row.address }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
        <template slot-scope="{row}">
          <!-- <el-button type="primary" size="mini" @click="handleUpdate(row)">
        Edit
    </el-button> -->
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
        <el-form-item label="Nama Perusahaan">
          <el-input v-model="company" placeholder="Nama Perusahaan" />
        </el-form-item>
        <el-form-item label="Alamat/Contact">
          <el-input v-model="address" placeholder="Alamat/Contact" />
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
import axios from '@/api/axios'

export default {
  name: 'ComplexTable',
  data() {
    return {
      licence: '',
      product_code: '',
      company: '',
      address: '',
      dialogStatus: '',
      dialogFormVisible: false,
      list: '',
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
  },

  methods: {
    getList() {
      axios.get(`/licence`).then(response => {
        console.log(response.data)
        if (response.data.licence != null) {
          this.list = [response.data.licence]
        } else {
          this.list = []
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
      this.listLoading = true
      console.log(localStorage.getItem('licence'))

      this.total = []
      this.listLoading = false
    },

    handleCreate() {
      this.dialogStatus = 'create'
      this.dialogFormVisible = true
    },
    async createData() {
      const data = {
        licence: this.licence,
        product_code: this.product_code,
        company: this.company,
        address: this.address
      }
      await axios.get(`https://lisensi.ruasdigital.id/api/setting?product_code=${data.product_code}&licence=${data.licence}&domain=${window.location.hostname}`).then(response => {
        console.log(response)
        axios.post(`/licence/create`, data).then(response => {
          console.log('berhasil')
          this.getList()
        }).catch(err => {
          if (!err.response.data.success) {
            this.$notify({
              title: 'Error',
              message: 'Data Belum Lengkap',
              type: 'danger',
              duration: 2000
            })
          } else {
            console.log('berhasil')
            this.getList()
          }
        })
      }).catch(err => {
        if (!err.response.data.success) {
          alert('Lisensi ini sudah diaktivasi dengan domain lain.')
        } else {
          console.log('berhasil')
          this.$notify({
            title: 'Success',
            message: 'Created Successfully',
            type: 'success',
            duration: 2000
          })
        }
      })
      this.dialogFormVisible = false
      this.getList()
    },
    handleUpdate(row) {
      this.licence = row.licence
      this.product_code = row.code
      this.company = row.company
      this.address = row.address

      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      const data = {
        licence: this.licence,
        product_code: this.product_code
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
    async handleDelete(row, index) {
      await axios.delete(`/licence/delete`).then(response => {
        this.$notify({
          title: 'Success',
          message: 'Created Successfully',
          type: 'success',
          duration: 2000
        })
      })
      this.getList()
    }
  }
}
</script>

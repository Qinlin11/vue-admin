<template>
  <BasicContent :isPermission="true">
    <div style="display: flex; align-items: center; margin: 5px 0">
      <FilenameOption v-model="filename" />
      <AutoWidthOption v-model="autoWidth" />
      <BookTypeOption v-model="bookType" />
      <a-button style="margin: 0 20px" @click="handleDownload">
        导出 Excel
      </a-button>
    </div>

    <a-table :dataSource="articleList" bordered  :pagination="{ pageSize: 10 }">
      <a-table-column title="Id" dataIndex="id" width="95" align="center">
        <template #customRender="{ index }">{{ index }}</template>
      </a-table-column>
      <a-table-column title="Title" dataIndex="title"></a-table-column>
      <a-table-column title="Author" dataIndex="author" width="180" align="center">
        <template #customRender="{ text }"><a-tag>{{ text }}</a-tag></template>
      </a-table-column>
      <a-table-column title="Readings" dataIndex="pageviews" width="115" align="center"></a-table-column>
      <a-table-column title="Date" dataIndex="timestamp" width="220" align="center">
        <template #customRender="{ text }">
          <span>{{ text }}</span>
        </template>
      </a-table-column>
    </a-table>
  </BasicContent>
</template>

<script setup lang="ts">
import { faker } from '@faker-js/faker'
import type { Article } from '@/types/public'
import FilenameOption from '@/views/demo/excel/components/FilenameOption.vue'
import BookTypeOption from '@/views/demo/excel/components/BookTypeOption.vue'
import AutoWidthOption from '@/views/demo/excel/components/AutoWidthOption.vue'
import { ref } from 'vue'
import { exportJson2Excel } from '@/utils/excel'
import { formatJson } from '@/utils'

const articleCount = 20
const articleList = ref<Article[]>([])

for (let i = 0; i < articleCount; i++) {
  const mockFullContent = faker.lorem.paragraphs(5)
  articleList.value?.push({
    id: i,
    status: faker.helpers.arrayElement(['published', 'draft']),
    title: faker.lorem.sentence(),
    abstractContent: faker.lorem.sentences(2),
    fullContent: mockFullContent,
    sourceURL: faker.internet.url(),
    imageURL: faker.image.url(),
    timestamp: faker.date.past().getTime(),
    platforms: [faker.helpers.arrayElement(['a-platform', 'b-platform', 'c-platform'])],
    disableComment: faker.datatype.boolean(),
    importance: faker.number.int({ min: 1, max: 3 }),
    author: faker.person.fullName(),
    reviewer: faker.person.fullName(),
    type: faker.helpers.arrayElement(['CN', 'US', 'JP', 'EU']),
    pageviews: faker.number.int({ min: 300, max: 500 }),
  })
}
//文件名
const filename = ref('')
//是否自动宽距
const autoWidth = ref(false)
//文件格式
const bookType = ref('xlsx')

const handleDownload = () => {
  const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date']
  const filterVal = ['id', 'title', 'author', 'pageviews', 'timestamp']
  const data = formatJson(filterVal, articleList.value)
  exportJson2Excel(
    tHeader,
    data,
    filename.value !== '' ? filename.value : undefined,
    undefined,
    undefined,
    autoWidth.value,
    bookType.value,
  )
}
</script>

<style scoped>
</style>



<route>
  {
        "meta": {
        "title": "Excel",
        }
  }
  </route>
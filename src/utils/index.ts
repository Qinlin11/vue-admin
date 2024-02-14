export const parseTime = (
    time?: object | string | number | null, // 定义函数 parseTime，接受一个时间对象、字符串、数字或空值参数
    cFormat?: string, // 可选的时间格式化字符串参数
  ): string | null => {
    // 函数返回一个字符串或空值
    if (time === undefined || !time) {
      // 如果时间是未定义或为空
      return null // 返回空值
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}' // 定义时间格式，默认为年-月-日 时:分:秒
    let date: Date // 声明一个 Date 类型的变量
    if (typeof time === 'object') {
      // 如果时间是对象类型
      date = time as Date // 直接赋值给 date
    } else {
      // 否则
      if (typeof time === 'string') {
        // 如果时间是字符串类型
        if (/^[0-9]+$/.test(time)) {
          // 如果时间是纯数字
          time = parseInt(time) // 将字符串转换为数字
        } else {
          // 否则
          time = time.replace(new RegExp(/-/gm), '/') // 替换字符串中的 "-" 为 "/"
        }
      }
      if (typeof time === 'number' && time.toString().length === 10) {
        // 如果时间是数字且长度为 10
        time = time * 1000 // 将时间乘以 1000
      }
      date = new Date(time) // 创建一个 Date 对象
    }
    const formatObj: { [key: string]: number } = {
      // 定义一个对象，用于存储格式化后的时间信息
      y: date.getFullYear(), // 年份
      m: date.getMonth() + 1, // 月份
      d: date.getDate(), // 日
      h: date.getHours(), // 时
      i: date.getMinutes(), // 分
      s: date.getSeconds(), // 秒
      a: date.getDay(), // 星期几
    }
    const timeStr = format.replace(/{([ymdhisa])+}/g, (result, key) => {
      // 格式化时间字符串
      const value = formatObj[key] // 获取对应键的值
      // 注意：getDay() 返回的星期天是 0
      if (key === 'a') {
        // 如果是星期几
        return ['日', '一', '二', '三', '四', '五', '六'][value] // 返回中文表示的星期几
      }
      return value.toString().padStart(2, '0') // 将值转换为字符串，并补齐两位
    })
    return timeStr // 返回格式化后的时间字符串
  }
  
  // 格式化并过滤 JSON 数据，使用 filterKeys 数组
  export const formatJson = (
    filterKeys: any,
    jsonData: any, // 定义函数 formatJson，接受 filterKeys 数组和 jsonData 对象
  ) =>
    jsonData.map((data: any) =>
      filterKeys.map((key: string) => {
        // 对 jsonData 中的数据进行映射处理
        if (key === 'timestamp') {
          // 如果键是 'timestamp'
          return parseTime(data[key]) // 调用 parseTime 函数格式化时间
        } else {
          // 否则
          return data[key] // 返回原始数据中对应键的数值
        }
      }),
    )
  
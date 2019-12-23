import axios from 'axios'

const TIME_OUT_MS = 60 * 1000 // 默认请求超时时间

/*
 * @param response 返回数据列表
 */
function handleResults (response) {
  debugger
  let remoteResponse = response.data
  var result = {
    success: false,
    message: '',
    errorCode: ''
  }
  let status = response.status
  if (status === 200) {
    if (remoteResponse.data === null
      || remoteResponse.data === 'null'
      || remoteResponse.data === '' 
      || remoteResponse.data.length === 0) {
      result.data = null
    } else {
      result.data = remoteResponse.data
    }
    result.success = remoteResponse.success
  } else {
    this.$Notice.error({
      title: '系统异常',
      duration: 3 // n秒后消失
    })
    console.log('传参错误')
    return
  }
  // if (!result.success) {
  //   if (code === 400) {
  //     console.log('传参错误')
  //   }
  // }
  result.errorCode = remoteResponse.code
  result.message = remoteResponse.message
  return result
}

function handleUrl (url) {
  let BASE_URL = 'http://localhost:8783'
  url = BASE_URL + url
  // BASE_URL是接口的ip前缀，比如http:10.100.1.1:8989/
  return url
}

/*
 * @param data 参数列表
 * @return
 */
function handleParams (data) {
  return data
}

export default {
  /*
   * @param url
   * @param data
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  post (url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        this.$Notice.error({
          title: '系统异常',
          duration: 3 // n秒后消失
        })
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },
  /*
   * get 请求
   * @param url
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  get (url, data, response, exception) {
    debugger
    let arr = []
    let str = ''
    arr = Object.entries(data.param)
    arr.forEach((value, index) => {
      if (index === 0) {
        str = '?'
      }
      arr = Object.entries(data.param)
      let a = ''
      value.forEach((v, index) => {
        if (index === 0) {
          a = v
        } else {
          a = a + '=' + v
        }
      })
      str += a
      if (index < arr.length - 1) {
        str += '&'
      }
    })
    url = url + str
    axios({
      method: 'get',
      url: handleUrl(url),
      timeout: TIME_OUT_MS,
      dataType: 'jsonp',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },
  /*
   * 导入文件
   * @param url
   * @param data
   * @param response 请求成功时的回调函数
   * @param exception 异常的回调函数
   */
  uploadFile (url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      dataType: 'json',
      processData: false,
      contentType: false
    }).then(
      (result) => {
        response(handleResults(result, data))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },
  /*
   * 下载文件用，导出 Excel 表格可以用这个方法
   * @param url
   * @param param
   * @param fileName 如果是导出 Excel 表格文件名后缀最好用.xls 而不是.xlsx，否则文件可能会因为格式错误导致无法打开
   * @param exception 异常的回调函数
   */
  downloadFile (url, data, fileName, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: handleParams(data),
      responseType: 'blob'
    }).then(
      (result) => {
        const excelBlob = result.data
        if ('msSaveOrOpenBlob' in navigator) {
          // Microsoft Edge and Microsoft Internet Explorer 10-11
          window.navigator.msSaveOrOpenBlob(excelBlob, fileName)
        } else {
          const elink = document.createElement('a')
          elink.download = fileName
          elink.style.display = 'none'
          const blob = new Blob([excelBlob])
          elink.href = URL.createObjectURL(blob)
          document.body.appendChild(elink)
          elink.click()
          document.body.removeChild(elink)
        }
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  },
  uploadFileFormData (url, data, response, exception) {
    axios({
      method: 'post',
      url: handleUrl(url),
      data: data,
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(
      (result) => {
        response(handleResults(result))
      }
    ).catch(
      (error) => {
        if (exception) {
          exception(error)
        } else {
          console.log(error)
        }
      }
    )
  }
}

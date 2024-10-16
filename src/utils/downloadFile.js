import axios from "axios";

const downloadFile = async (file_url) => {
    try {
      const response = await axios.get(file_url, {
        responseType: 'arraybuffer' // 设置响应类型为数组缓冲区
      });

      // 创建一个 Blob 对象并保存图片数据
      const blob = new Blob([response.data]);
      const url = window.URL.createObjectURL(blob);

      // 创建一个 <a> 标签并模拟点击下载图片
      const link = document.createElement('a');
      link.href = url;
      link.download = '2024年福州八中第55届运动会秩序册.pdf'; // 设置下载的文件名
      document.body.appendChild(link);
      link.click();

      // 清理资源
      window.URL.revokeObjectURL(url);
      document.body.removeChild(link);

      console.log('Image downloaded successfully!');
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

export default downloadFile

### Nodejs 下载文件时文件名乱码

我发现使用 nodejs 写的下载文件（文件是中文名称）时，在 safair 上下载时文件乱码了

解决方案：

```
const url = `${host}/api/qr_code/fission_activity`;
const {data} = await axios.post(url, param, {
	headers: {'Content-Type': 'application/json'}
});
const {data: stream} = await axios({
	method: 'get',
	url: data.data.qr_code_url,
	responseType: 'stream'
});

const file_name = `${store}-${title}.jpg`;
ctx.set('Content-Type', 'application/octet-stream');
const userAgent = (ctx.req.headers['user-agent']||'').toLowerCase();
if(userAgent.indexOf('msie') >= 0 || userAgent.indexOf('chrome') >= 0) {
	ctx.set('Content-Disposition', `attachment; filename=${encodeURIComponent(file_name)}`);
} else if(userAgent.indexOf('firefox') >= 0) {
	ctx.set('Content-Disposition', `attachment; filename*="utf8 ${encodeURIComponent(file_name)}`);
} else {
	/*safari等其他非主流浏览器*/
	ctx.set('Content-Disposition', 'attachment; filename=' + new Buffer(file_name).toString('binary'));
}

```
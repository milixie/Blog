### HTTP是什么
HTTP是超文本传输协议（简单的请求/响应模式），属于OSI七层模型里的应用层协议
### HTTP1.0 vs HTTP1.1
1. HTTP1.0 默认是短连接的方式，也就是一个TCP连接只能发送一个请求；HTTP1.1 默认是长连接的方式，建立一个TCP连接后可以发送多个请求；
2. HTTP1.1 相对于 HTTP1.0里，新增加了多个缓存的配置项
3. HTTP1.0 里存在资源浪费的情况，比如客户端只需要某个资源，但是服务端会把数据全部传输过来；HTTP1.1 里可以在头部设置 range 头域，指定需要的数据范围；
4. HTTP1.1 里新增加了多个请求方法，比如 options、put 方法
### HTTP1.1 vs HTTP2.0
1. HTTP1.1 里建立长连接后，请求必须是串行的，也就是一个请求发送出去，结果返回后再次发送第二个请求，会造成头部请求阻塞问题；HTTP2.0 是可以并行去同时发送多个请求的
2. HTTP2.0 里是二进制协议，也就是说HTTP2.0里发送的报文头和返回的数据体必须是二进制的；HTTP1.1 里报文头是文本，返回的数据体可以是文本也可以是二进制；
3. HTTP2.0 里有个数据流的概念，因为它是可以并发去发送请求的，每个发送出去的数据都有个数据ID去表示，也可以称为数据流
4. HTTP2.0 允许服务端推送，也就是在客户端没有发送请求的情况下，服务器自动推送，推送的是静态资源
5. HTTP2.0 允许头部信息压缩，HTTP1.1协议不带状态，每次请求都会把数据cookie等都带在头部上，造成资源浪费，HTTP2.0 可以把头部信息压缩后再发送
### HTTP vs HTTPS
1. HTTP是超文本传输协议，是明文传输，存在安全性问题；HTTPS是基于HTTP和TLS/SSL 加密后的传输协议，是更安全的，也就是说HTTPS里传输的报文头和返回的数据体都是加密的
2. HTTP是无状态协议，也就是没有任何记忆，每次建立TCP连接后，如果需要之前请求过的内容的话，只能重新请求；HTTPS是可以进行加密传输、身份认证的网络协议，比HTTP更加安全
3. HTTPS是需要CA证书的，费用也会更高一些
4. HTTPS和HTTP的连接方式也不太一样，HTTPS的默认端口号是443，HTTP的默认端口号是80
### TCP是什么
TCP是传输控制协议，属于OSI模型的第四层「传输层」
### UDP 是什么
UDP是用户数据报协议
### TCP和UDP区别
1. TCP必须在两端之间建立连接后开始发送数据（三次握手过程）；UDP想发送就直接发送了，无需建立任何连接
2. TCP是点对点单播传输；UDP支持一对一、一对多、多对一、多对多的传输方式
3. TCP使用字节流的方式传输；UDP面向报文传输，不会做传输过来的报文做拆分、合并处理，只会增加一个UDP首部后就传输到下一层了
4. TCP 传输可靠，需要确定建立连接后传输，而且每次传输都有一个确认过程，如果超过一定时间没有确认，就认为是丢包了，会重传；UDP无连接，且收到什么就传输什么，不会检验安全性，而且网络不好的情况下，还是保持恒定速度传输，可能会导致丢包
5. TCP使用文件传输、请求页面之类的；UDP适用于实时应用，比如IP电话、视频会议、直播等
[图片]

### TCP三次握手
1. 客户端向服务器发送一个TCP报文；标记SYN「我想和你建立连接请求」
2. 服务器收到该报文后，向客户端返回报文，标记SYN和ASK「我能收到你的请求，我同意和你建立连接」
3. 客户端收到该请求后，向服务端发送TCP报名，标记ASK应答「我也收到你的请求啦，连接成功建立」
[图片]
### TCP四次挥手
1. 客户端向服务器发送释放请求报文，标记FIN「我想和你断开连接了」
2. 服务器收到后，返回报文表示同意，标记ASK「已收到断开连接的请求，但等我发送文件完成后」
3. 服务器这时候还可以继续传输文件，在文件传输都结束后，标记FIN、ASK「我发送文件完毕了，同意断开连接」
4. 客户端收到报文后，标记ASK「已收到连接断开」，服务器收到后会立马断开，客户端会在发送报文等待两分钟后关闭
[图片]
### HTTPS通信过程-四次握手
1. 客户端向服务端发起client hello，请求中携带TLS版本信息、加密候选列表、压缩算法候选列表和随机数
2. 服务端向客户端发送server hello、选择的加密算法、压缩算法、它的一个随机数
3. 服务端向客户端发送server certificate ，里面包含了数字证书，供客户端校验
4. 服务器向客户端发送 server hello done，告诉客户端要发送的信息已发送完毕
5. 客户端校验证书，获取服务端的公钥
6. 客户端发送自己的证书给服务端
7. 客户端计算出一个随机数，使用公钥加密后发送给服务端
8. 客户端和服务端都根据对方的随机数计算出对称密钥，根据密钥进行通信
[图片]
### OSI七层模型
1. 物理层「底层网络定义协议」
2. 数据链路层「底层网络定义协议」
3. 网络层「IPv4 IPv6」
4. 传输层「TCP、UDP」
5. 会话层「本地主机和远程主机进行会话」
6. 表示层「数据安全、压缩」
7. 应用层「HTTP、FTP、DNS、HTTPS」
### TCP/IP四层模型
1. 网络接口层
2. IP层
3. 传输层
4. 应用层
[图片]
### HTTP状态码
1. 1xx -  接受的请求正在处理
2. 2xx - 成功状态
3. 3xx - 重定向
4. 4xx - 服务器无法处理请求错误
5. 5xx - 服务器内部错误
常见状态码
1. 200 - 服务器成功处理了请求已返回
2. 201 - 请求成功并且服务器创建了资源
3. 204 - 服务器成功处理了内容，但是没有任何返回
4. 206 - 服务器成功处理了部分get请求
5. 301 - 永久移动，请求的网页已经永久移动到新位置
6. 302 - 临时移动，资源原本存在但被临时改了位置
7. 304 - 未修改，上次请求的内容未被修改
8. 400 - 错误请求 服务器不理解请求的语法
9. 401 - 没权限，要求身份认证
10. 404 - 找不到请求的网页
11. 500 - 服务器内部错误
12. 502 - 错误网关，上游服务器收到无效响应
13. 503 - 服务不可用
14. 504 - 网关超时
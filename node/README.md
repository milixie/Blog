## Node

### node 和 npm 是如何安装呢

#### 方案一：使用node 的版本管理工具 nvm 去安装

1.首先安装 nvm ： node 的版本管理工具

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

2. 安装好 nvm 后，使用 nvm 安装 node 和 npm

nvm install v8.4.0

3. 这样既可安装 node 和相应的 npm 了


#### 删除 npm

```
where npm 

/usr/local/bin/npm

rm -rf /usr/local/bin/npm

```


这样就可以把 npm 删除了

#### node 的版本管理工具 n

[点击查看](http://www.jianshu.com/p/a927bcecdbc0)

#### 方案二：直接安装 npm

`curl -L https://npmjs.org/install.sh | sh`

#### 方案三：

去node 官网下载 node，安装完成即可

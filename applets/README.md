# 小程序开发过程问题总结

>- `button` 默认边框样式如何去除？
>- 使用`swiper`组件的时候，如果使用了`flex`布局，那么在iOS中默认`swiper`的高度是`150px`，该如何解决呢？

- `button` 默认边框样式如何去除？

我们知道，在h5开发时，去除默认`button`的样式，只需要将`border:none;`即可，但是在小程序里面却不行

解决方案：

```
button:after {
	border: none;
}
```

这样就可以啦


-  使用`swiper`组件的时候，如果使用了`flex`布局，那么在iOS中默认`swiper`的高度是`150px`，该如何解决呢？

需要在`swiper`外层包一层`view`并且设置`flex: 1`，那么 `swiper` 上面需要设置 `height: 100%` ，但是有一个问题，就是整个flex中，如果其他的块儿内容的高度是自适应的，那么在手机上是有问题的，也就是必须得给其他块儿内容设置固定的高度或者最小的高度值，这样swiper才不会有问题




小程序
`wx.navigateTo` 与 `wx.redirectTo` 与 `wx.reLaunch` 的区别

他们都可以导向到一个新的页面，不同的是

1. `wx.navigateTo` 是打开一个新的页面，可以返回

2. `wx.redirectTo` 是关闭当前页面，打开一个新的页面，可以返回，但是刚刚打开的页面已经被关闭了

3. `wx.reLaunch` 是关闭所有其他页面，打开一个新的页面

4. 还有一个重要的区别：在`app.js`中 `wx.navigateTo` 与 `wx.redirectTo` 不起作用， 在普通非入口文件中，  `wx.reLaunch`不起作用（经测试，苹果手机上是可以的，但是安卓机上面不行）



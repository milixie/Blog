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










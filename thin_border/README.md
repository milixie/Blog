### thin border

在移动端，如果是1px 的 border，看上去会非常的粗，所以我们需要一个 thin-border


html
```
<div class="wrap-border thin-border">
	这是一条新闻
</div>
```

css
```
.wrap-border {
	width: 200px;
	padding: 20px;
}
.thin-border {
	position: relative;
}
.thin-border:after {
	position: absolute;
	content: ' ';
	display: block;
	border: 1px solid #ddd;
	width: 200%;
	height: 200%;
	transform: scale(0.5);
	left: -50%;
	top: -50%;
	border-radius: 4px;
}
```
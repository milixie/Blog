class StarrySky {
  paint (ctx, paintSize, poperties) {
    let xMax= paintSize.width;
    let yMax = paintSize.height;

    // 黑色夜空
    ctx.fillRect(0, 0, xMax, yMax);

    // 星星的数量
    let hmTimes = xMax + yMax;
    for (let i = 0; i <= hmTimes; i++) {
      // 星星的xy坐标，随机
      let x = Math.floor((Math.random() * xMax) + 1);
      let y = Math.floor((Math.random() * yMax) + 1);
      // 星星的大小
      let size = Math.floor((Math.random() * 2) + 1);
      // 星星的亮暗
      let opacityOne = Math.floor((Math.random() * 9) + 1);
      let opacityTwo = Math.floor((Math.random() * 9) + 1);
      let hue = Math.floor((Math.random() * 360) + 1);
      ctx.fillStyle = `hsla(${hue}, 30%, 80%, .${opacityOne + opacityTwo})`; ctx.fillRect(x, y, size, size); } }
}
// 注册这个属性
registerPaint('starry-sky', StarrySky);

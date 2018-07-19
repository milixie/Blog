const Model = require('../../mocks/article/list');
const axios = require('axios')
module.exports = app => {
  return class AppController extends app.Controller {
    async index() {
      const { ctx } = this;
      let renderData = {}
      try {
        const { data: result } = await axios.get('https://www.carbrand.club/carbrands/?format=json')
        console.log(result.code)
        if (Number(result.code) === 0) {
          renderData = {
            code: '0',
            msg: '',
            data: result.data && result.data.carList
          }
        }
      } catch(err) {
        renderData = {
          code: '100007',
          msg: '系统异常',
          data: ''
        }
      }
      await ctx.render('home/home.js', renderData);
    }

    async client() {
      const { ctx } = this;
      await ctx.renderClient('home/home.js', Model.getPage(1, 10));
    }

    async element() {
      const { ctx } = this;
      ctx.render('element/element.js', Model.getPage(1, 10));
    }

    async pager() {
      const { ctx } = this;
      const pageIndex = ctx.query.pageIndex;
      const pageSize = ctx.query.pageSize;
      ctx.body = Model.getPage(pageIndex, pageSize);
    }
  };
};

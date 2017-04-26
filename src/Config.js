// const serviceUrl = 'http://wind.zicp.net/v1/'

// export default {
//   initTab:'Home',
//   loginUrl:serviceUrl,
//   registerUrl: serviceUrl + 'register',
//   accountUrl: serviceUrl + 'account',
//   accountUrl2: serviceUrl + 'account/user',
//   accountSignUrl: serviceUrl + 'account/sign',
//   fileUpload: serviceUrl + 'file/save',
//   fileUrl: serviceUrl + 'file/',
//   postsUrl: serviceUrl + 'article/posts',
//   postUrl: serviceUrl + 'article/post/',

//   pageSize:10,

//   postListApi: serviceUrl + 'post/list/',
//   postApi: serviceUrl + 'post/add/',

//   postApiTest: serviceUrl + 'file/singleSave/',

//   postApi2: serviceUrl + 'post/post/',

//   postAll: serviceUrl +  'post/lists',

//   thumbnailApi: serviceUrl + 'file/thumbnail/',//缩略图


//   word:'WORD',
//   picture:'PICTURE'

// };


const serviceUrl = 'http://127.0.0.1:1026/' 

let Config = {}

if (process.env.NODE_ENV === 'production') {
  Config = {
     initTab:'Home',
    loginUrl:'/api/uaa/oauth/token',
    bannerAPI:'http://ads.service.kugou.com/v1/mobile_fmbanner?&appid=1&clientver=1&clienttime=1&key=1',
    test:'/api/resource/test',
    homeAPI:'https://gist.githubusercontent.com/ScorpionJay/de11dc5bacefea9cee5394b73f456688/raw/e86fd421e4bce5c85dd87d29ddc7315ec1d33eed/list.json',
    musicListAPI:'http://m.kugou.com/plist/index',
    playListAPI:'http://m.kugou.com/plist/list/id?json=true',
    musicAPI:'http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=HASH&from=mkugou',
    krcAPI: 'http://m.kugou.com/app/i/krc.php?cmd=100&hash=HASH&timelength=TIMELENGTH',
  }
}else{
  Config = {
    initTab:'Home',
    loginUrl:'/api/uaa/oauth/token',
    bannerAPI:'http://ads.service.kugou.com/v1/mobile_fmbanner?&appid=1&clientver=1&clienttime=1&key=1',
    test:'/api/resource/test',
    homeAPI:'https://gist.githubusercontent.com/ScorpionJay/de11dc5bacefea9cee5394b73f456688/raw/e86fd421e4bce5c85dd87d29ddc7315ec1d33eed/list.json',
    musicListAPI:'http://m.kugou.com/plist/index',
    playListAPI:'http://m.kugou.com/plist/list/id?json=true',
    musicAPI:'http://m.kugou.com/app/i/getSongInfo.php?cmd=playInfo&hash=HASH&from=mkugou',
    krcAPI: 'http://m.kugou.com/app/i/krc.php?cmd=100&hash=HASH&timelength=TIMELENGTH',
  }
}

export default Config
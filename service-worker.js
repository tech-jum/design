/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "31d60f0b1dd9060d6c50decee5b92c90"
  },
  {
    "url": "architecture/index.html",
    "revision": "b093cb25294eef37bbd5c11ec0d5ccc1"
  },
  {
    "url": "architecture/Oauth2.html",
    "revision": "c0a1fff9ac25658cb4975b4499d5a67f"
  },
  {
    "url": "architecture/大型系统核心技术.html",
    "revision": "aa34c582e543907bdbc2bd83076d8539"
  },
  {
    "url": "architecture/系统伸缩性架构.html",
    "revision": "6216c1bfbd769c624cbb462f84ece905"
  },
  {
    "url": "architecture/系统安全性架构.html",
    "revision": "58293f453f5f20aee282479ddf058b50"
  },
  {
    "url": "architecture/系统扩展性架构.html",
    "revision": "a5a97c6140ecff278e9006f0d23d199c"
  },
  {
    "url": "architecture/系统架构概述.html",
    "revision": "df5159314ecb0f77729e44d29f497346"
  },
  {
    "url": "architecture/系统架构面试.html",
    "revision": "0146fc352356b9faec60b54b148b43d5"
  },
  {
    "url": "architecture/系统测试架构.html",
    "revision": "2a97a348c3b7ca054c5a215bbac6040c"
  },
  {
    "url": "architecture/系统高可用架构.html",
    "revision": "f4383a3b8fde9624870452f4036c6a99"
  },
  {
    "url": "architecture/系统高性能架构.html",
    "revision": "80c779d90ee5432a04f000362786f80d"
  },
  {
    "url": "architecture/领域驱动设计.html",
    "revision": "550764fe824b2ffa04b8add98f9a8698"
  },
  {
    "url": "assets/css/0.styles.3c2ef156.css",
    "revision": "24913b2549e199ab01761f64a10471cc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.07f2584d.js",
    "revision": "1811d49d37ba347239f3ccb149cd8b3d"
  },
  {
    "url": "assets/js/11.df166aa0.js",
    "revision": "1ef77372dd87066a57461b8ed46d3ea1"
  },
  {
    "url": "assets/js/12.b7ade635.js",
    "revision": "d07ecfb5fe913f6d42f254deef09e4fc"
  },
  {
    "url": "assets/js/13.151414b4.js",
    "revision": "6490638644b147a82a3e1bb0f8582deb"
  },
  {
    "url": "assets/js/14.5dd04c5d.js",
    "revision": "7958e9d690146d09a413e901c3c83ded"
  },
  {
    "url": "assets/js/15.14e9a635.js",
    "revision": "1b4586b556fb3f7b0bdbbe73495522b2"
  },
  {
    "url": "assets/js/16.8728dd67.js",
    "revision": "63fbe2ce74c91b14cca754cd1fb901cf"
  },
  {
    "url": "assets/js/17.1686b754.js",
    "revision": "bcb595181e55e0a034c3d56d1c64eff8"
  },
  {
    "url": "assets/js/18.d815545e.js",
    "revision": "1d88a25571948136df29370edad7a1b6"
  },
  {
    "url": "assets/js/19.d846ce2f.js",
    "revision": "1c0c47ed2cc2df1f4e4cb2cd599debe3"
  },
  {
    "url": "assets/js/20.1dd8edb9.js",
    "revision": "aaf99e40944d0f58ea386ec2ca16b930"
  },
  {
    "url": "assets/js/21.38ae8c29.js",
    "revision": "0d1a032221fec613977b5a421445b93a"
  },
  {
    "url": "assets/js/22.26dcb0f5.js",
    "revision": "a6ae92f3f06ab84583d654e463cebbb5"
  },
  {
    "url": "assets/js/23.d996c1df.js",
    "revision": "5bdbfa47e2a16aae9f929ba9ffc0752d"
  },
  {
    "url": "assets/js/24.84573b57.js",
    "revision": "cd2da5e0c07c758b6e824acbc0f321d3"
  },
  {
    "url": "assets/js/25.362291b4.js",
    "revision": "b292068cf223af0be0ff4194ec49249c"
  },
  {
    "url": "assets/js/26.287f6746.js",
    "revision": "fe813152a040a47cc64c0889abffd64e"
  },
  {
    "url": "assets/js/27.665cd644.js",
    "revision": "11d88e71825cf09de08a4c48e1b06b73"
  },
  {
    "url": "assets/js/28.2d373aaa.js",
    "revision": "c6a4dd5744367ca512a6fa0096f43c1e"
  },
  {
    "url": "assets/js/29.18195cfe.js",
    "revision": "6c8951b45dbbebb439d67a42dc9a160d"
  },
  {
    "url": "assets/js/30.b8a39bf2.js",
    "revision": "96e476c39ffc73bb5f496689984c12d4"
  },
  {
    "url": "assets/js/31.e6497a3e.js",
    "revision": "b3eff8e43846294da1cae22cc234f808"
  },
  {
    "url": "assets/js/32.7c78886f.js",
    "revision": "34c9677ffea63750736bdd06d4ccc807"
  },
  {
    "url": "assets/js/33.3a07575c.js",
    "revision": "9b875489985fb838260e3fdf5c6e4e5d"
  },
  {
    "url": "assets/js/34.53801173.js",
    "revision": "83a30e606e970ce9816cbc961133d53b"
  },
  {
    "url": "assets/js/35.fe943393.js",
    "revision": "a1f1c16ce7990ccd94e37ad41c2c243d"
  },
  {
    "url": "assets/js/36.e9ecc031.js",
    "revision": "91da65d63514bb2100fe015fbde77fb5"
  },
  {
    "url": "assets/js/37.48dcf161.js",
    "revision": "84e3b0f04092cadc21dc6936b7f0f9bf"
  },
  {
    "url": "assets/js/38.bc65c12c.js",
    "revision": "8f057a8c692a06ea4b058e90c5bf9c54"
  },
  {
    "url": "assets/js/39.76a7947c.js",
    "revision": "14b07c5b4da13ddc505923c21457d652"
  },
  {
    "url": "assets/js/4.843d76c1.js",
    "revision": "c4d2f082fad1feb786111cc06d94791f"
  },
  {
    "url": "assets/js/40.57c60fe7.js",
    "revision": "e23589ca2124bb98f2c19ce39827179b"
  },
  {
    "url": "assets/js/41.64d1acff.js",
    "revision": "d7c535f6318814ad00aa92e8fef93706"
  },
  {
    "url": "assets/js/42.2b13267e.js",
    "revision": "9bc75b258c34f8ac90aa2fe8544d1ca7"
  },
  {
    "url": "assets/js/43.bc12e4a9.js",
    "revision": "d1dac7c1648246f18bec335dce354bec"
  },
  {
    "url": "assets/js/44.05348389.js",
    "revision": "dc5b6aa5d1f3a3b9c30c963d980d5a46"
  },
  {
    "url": "assets/js/45.a821f14b.js",
    "revision": "795d50ed42ff5b0bd5c4b3018b965378"
  },
  {
    "url": "assets/js/46.4f6121ee.js",
    "revision": "223c8de2d25182aafda459d56be9e77f"
  },
  {
    "url": "assets/js/47.2331491d.js",
    "revision": "a0f61edc406d34572ae71c34da54b2f5"
  },
  {
    "url": "assets/js/48.e99e2990.js",
    "revision": "02b5bd083374c433774b93c910f16f9b"
  },
  {
    "url": "assets/js/49.97ac4425.js",
    "revision": "59d6c5fb9cc2a5c92f64548429d7d06e"
  },
  {
    "url": "assets/js/5.eb6f8f38.js",
    "revision": "45aaacc183f1cfb2c134932c74fb1e1f"
  },
  {
    "url": "assets/js/50.9561222b.js",
    "revision": "4b861eb8fb427b724b4a2172cee9776f"
  },
  {
    "url": "assets/js/51.5a3682fc.js",
    "revision": "f695d089e0dda13cffee42f7b4bee355"
  },
  {
    "url": "assets/js/52.41f6da09.js",
    "revision": "84cf4e8847bf2205ba1c21b0dd7946cc"
  },
  {
    "url": "assets/js/53.f3cbdb44.js",
    "revision": "9738c65f72d137aed4bd14d325c73eed"
  },
  {
    "url": "assets/js/54.b64ed791.js",
    "revision": "57fc24ffc440242f7eab79ec1c716f61"
  },
  {
    "url": "assets/js/55.0b2515c6.js",
    "revision": "c3ea819da30b27416fb409fc81d9fe18"
  },
  {
    "url": "assets/js/56.f87ff124.js",
    "revision": "b5fd73e12398bbbd3a2fbed5d6b2af26"
  },
  {
    "url": "assets/js/57.c351d3a3.js",
    "revision": "9ceee2d8475f71b0c3d800050167680e"
  },
  {
    "url": "assets/js/58.68c1d0ee.js",
    "revision": "9ed569e10ad65348ac11e28f5a3016c3"
  },
  {
    "url": "assets/js/59.8cc7450d.js",
    "revision": "b4c9018bd0a949c73f3c5791d1ef238c"
  },
  {
    "url": "assets/js/6.cbcf7f30.js",
    "revision": "38631b798a14ce95f0053368cb34cff3"
  },
  {
    "url": "assets/js/60.f2f8871f.js",
    "revision": "e23eccf361897e589529679f1acb81c6"
  },
  {
    "url": "assets/js/61.8922cbcd.js",
    "revision": "6683b8937615b807f79dd11ddae28081"
  },
  {
    "url": "assets/js/62.ccb7c5ee.js",
    "revision": "8991e1184101e4d76021b2786547ebfa"
  },
  {
    "url": "assets/js/63.8191a330.js",
    "revision": "979fb50308e0721d1b1354cb5c90599d"
  },
  {
    "url": "assets/js/64.1d881bbb.js",
    "revision": "a185ac41f1a3ee51b207205a7434f5ce"
  },
  {
    "url": "assets/js/65.f4089278.js",
    "revision": "2d274c96574742c57ba808e06bf86614"
  },
  {
    "url": "assets/js/66.66cf1b40.js",
    "revision": "118dda5f84be7e9255f4aa4fd22f738e"
  },
  {
    "url": "assets/js/67.27e2cf6f.js",
    "revision": "b916547ab518cae4d49d4857bef4ea28"
  },
  {
    "url": "assets/js/68.6a688bec.js",
    "revision": "6926a7bbfcf2d67bd2f16daf312aa9ff"
  },
  {
    "url": "assets/js/69.f59b5cd7.js",
    "revision": "4fad99045048b91614c97aa192b3453f"
  },
  {
    "url": "assets/js/7.159ffade.js",
    "revision": "0f56495e802d3156ba680eec3bca1442"
  },
  {
    "url": "assets/js/70.aa52fe1c.js",
    "revision": "69e111e5fb05af4125b4ace0e1c20b08"
  },
  {
    "url": "assets/js/71.f7f17e5c.js",
    "revision": "7bda9bd24f48c0bbba6cf6f6d38a7054"
  },
  {
    "url": "assets/js/72.f0a76070.js",
    "revision": "c8028309cdccd143c9395d4999dfc75f"
  },
  {
    "url": "assets/js/73.b454f9b3.js",
    "revision": "4e2addcbc26c7c48e8952b12dea9e7ef"
  },
  {
    "url": "assets/js/74.748903ca.js",
    "revision": "7ccf55a9dc7e245d44f9f75f439ec185"
  },
  {
    "url": "assets/js/75.1abb30fc.js",
    "revision": "347ea8d552e397d70f13cb63bf29935a"
  },
  {
    "url": "assets/js/76.38081e86.js",
    "revision": "498825b46a920596ed2a586765b0ce0a"
  },
  {
    "url": "assets/js/77.631fd31e.js",
    "revision": "582b75b3c5d5d98d16b8086d54baea26"
  },
  {
    "url": "assets/js/78.b642c4ea.js",
    "revision": "cd3b8ca089fb20dd201be3ca80bae55f"
  },
  {
    "url": "assets/js/79.09f8c9ad.js",
    "revision": "12296553d8929c3980c387688692ad54"
  },
  {
    "url": "assets/js/8.bbc07c86.js",
    "revision": "56b8b08578a87520e82132647bf6f10f"
  },
  {
    "url": "assets/js/80.15162b19.js",
    "revision": "b4b23b7993b65e2fc0f7ebd590ef2ba8"
  },
  {
    "url": "assets/js/81.0a02424d.js",
    "revision": "7f85c9e5d10a7ab6073467654896e2ce"
  },
  {
    "url": "assets/js/82.0a6de1bd.js",
    "revision": "681c2a05c515f2f38bfca46d0fdffc7f"
  },
  {
    "url": "assets/js/83.8bd118c7.js",
    "revision": "fc5bab4202dc92b4302f8393e6fb3ea4"
  },
  {
    "url": "assets/js/84.c9db97ea.js",
    "revision": "3475d1a9fc8ee0911f6801f7990e9e77"
  },
  {
    "url": "assets/js/85.ea23932a.js",
    "revision": "0e1ff685afd1f3d6fde256aa2fccf1e7"
  },
  {
    "url": "assets/js/86.a70e5ac7.js",
    "revision": "031e6f4eea89175f349e8848638acefb"
  },
  {
    "url": "assets/js/9.c3d97cd4.js",
    "revision": "2664f3b31bb7020997850b8781f3385b"
  },
  {
    "url": "assets/js/app.31535b90.js",
    "revision": "573a069b7d83f0c513bb9941b9a3e76d"
  },
  {
    "url": "assets/js/vendors~flowchart.5fa23d41.js",
    "revision": "c44148bd18ffec94f60135d3d6768f46"
  },
  {
    "url": "assets/js/vendors~notification.4b668bb8.js",
    "revision": "e112714d20382a027c429ba916ed9228"
  },
  {
    "url": "distributed/index.html",
    "revision": "94d58eac61f25263fc22a23f73b9fd44"
  },
  {
    "url": "distributed/分布式ID.html",
    "revision": "b1d44870286c0c1e9af130172b0a6f07"
  },
  {
    "url": "distributed/分布式事务.html",
    "revision": "d04b6488e1702a4ab2be389bed0cdb69"
  },
  {
    "url": "distributed/分布式会话.html",
    "revision": "fd04ea4c63c5cc4dc216c36745bc0840"
  },
  {
    "url": "distributed/分布式存储.html",
    "revision": "9af56cc506bce401e6e621c74f1f68dd"
  },
  {
    "url": "distributed/分布式简介.html",
    "revision": "d0a773bae67098cc8edfba3ab0c96e07"
  },
  {
    "url": "distributed/分布式算法Gossip.html",
    "revision": "af2db64fbe09a64bf5a69c090ec8aea4"
  },
  {
    "url": "distributed/分布式算法Paxos.html",
    "revision": "52a1a027b9ccc08dc40c7f99c028dd73"
  },
  {
    "url": "distributed/分布式算法Raft.html",
    "revision": "4e2c3ebe5d95f16a45467d7cbe43a606"
  },
  {
    "url": "distributed/分布式缓存.html",
    "revision": "7c84f2502e614f52143412a2cea33301"
  },
  {
    "url": "distributed/分布式锁.html",
    "revision": "10b26e850b7dd25762de51f7480c514b"
  },
  {
    "url": "distributed/分布式面试.html",
    "revision": "0bd0964bafa48eb42950bbf876a1c240"
  },
  {
    "url": "distributed/流量控制.html",
    "revision": "90115ef4374b6af0737ad43959694af4"
  },
  {
    "url": "distributed/消息队列.html",
    "revision": "68e92a47e14381f76e659aaa534118c1"
  },
  {
    "url": "distributed/负载均衡.html",
    "revision": "5b2e517252621d1b01cf29073119d4bc"
  },
  {
    "url": "index.html",
    "revision": "4053f5f1b6d01e8a5d37ad78fb4cce6d"
  },
  {
    "url": "microservices/index.html",
    "revision": "3f9e6184fbed136e26d9ae514251c3d0"
  },
  {
    "url": "microservices/kong.html",
    "revision": "0263c54517d114d75af63118720c0a50"
  },
  {
    "url": "microservices/rpc.html",
    "revision": "a67b57d02d5b6926f32ab8f9bd78d950"
  },
  {
    "url": "microservices/微服务原理.html",
    "revision": "b8bf66088686504c1b68582592cdd607"
  },
  {
    "url": "paradigm/index.html",
    "revision": "65be70e88b32386313980d06ddac3eca"
  },
  {
    "url": "paradigm/错误处理.html",
    "revision": "de234d7593cf118f19773cf9e51c8651"
  },
  {
    "url": "pattern/index.html",
    "revision": "8075cdbd57216180ebdb3e0bcc8cc1fd"
  },
  {
    "url": "pattern/中介者模式.html",
    "revision": "ec1e398921cab2b7b2e7e632229a7877"
  },
  {
    "url": "pattern/享元模式.html",
    "revision": "ed261bef040828743be022e768b21bfa"
  },
  {
    "url": "pattern/代理模式.html",
    "revision": "c5444db55a3a0915a8fede642b278aee"
  },
  {
    "url": "pattern/单例模式.html",
    "revision": "843d8c9b8b581c7b86124ec7ffbc8985"
  },
  {
    "url": "pattern/原型模式.html",
    "revision": "ac86c346f26e420e58132636d9373274"
  },
  {
    "url": "pattern/命令模式.html",
    "revision": "10d1a3f6fa0d0ce97ca85ba346e888d7"
  },
  {
    "url": "pattern/备忘录模式.html",
    "revision": "149290358cb9575a7fe178696454c3ae"
  },
  {
    "url": "pattern/外观模式.html",
    "revision": "8c79d79810e22f4514e59f940b8e0ce2"
  },
  {
    "url": "pattern/工厂方法模式.html",
    "revision": "2109cd4aa39e17752a092555a0052690"
  },
  {
    "url": "pattern/建造者模式.html",
    "revision": "7161f1813b288b4c8ecbb97346338561"
  },
  {
    "url": "pattern/抽象工厂模式.html",
    "revision": "9064f644ff0f2199322eb473c46f5750"
  },
  {
    "url": "pattern/桥接模式.html",
    "revision": "32b24155bf89b9cc80dea87a520f1972"
  },
  {
    "url": "pattern/模板方法模式.html",
    "revision": "6feaedc8dfba93949b9124149224ec0f"
  },
  {
    "url": "pattern/状态模式.html",
    "revision": "bcc568fd7e7c64ef47443fdb381e6b34"
  },
  {
    "url": "pattern/策略模式.html",
    "revision": "b55cac6c4fd43f998f56ad624a60df6f"
  },
  {
    "url": "pattern/简单工厂模式.html",
    "revision": "110d9c83f00d9c19fa3eaeb622e1bdb1"
  },
  {
    "url": "pattern/组合模式.html",
    "revision": "8e5fe2e1bb73e56516befbe49b11f10b"
  },
  {
    "url": "pattern/职责链模式.html",
    "revision": "dd856eb3714903cf1f2d41b1d562e714"
  },
  {
    "url": "pattern/装饰模式.html",
    "revision": "54199c7bed117cd2aebd824df2b083b7"
  },
  {
    "url": "pattern/观察者模式.html",
    "revision": "82bb3e243ef3c656521faff6cd648511"
  },
  {
    "url": "pattern/解释器模式.html",
    "revision": "d427d71d5b7d30ca643b58d504491f62"
  },
  {
    "url": "pattern/设计模式概述.html",
    "revision": "3788870f1c4e14beec3f5a6dda118a05"
  },
  {
    "url": "pattern/访问者模式.html",
    "revision": "da81ac87f9d7672a5c51f2b3823b092b"
  },
  {
    "url": "pattern/迭代器模式.html",
    "revision": "c8e857df6b816f88614e5d00b8d17c12"
  },
  {
    "url": "pattern/适配器模式.html",
    "revision": "0d808335fd3d80503b27991ff1e181d5"
  },
  {
    "url": "pattern/面向对象原则.html",
    "revision": "31f6b61803af9ab2331c8908e1348082"
  },
  {
    "url": "refactor/index.html",
    "revision": "6e7c8b3f2d5b39d5c0cd829cb7db50b7"
  },
  {
    "url": "refactor/代码坏味道之代码臃肿.html",
    "revision": "48444ed021dfad600aad6ea8f7a0b9bd"
  },
  {
    "url": "refactor/代码坏味道之变革的障碍.html",
    "revision": "ec7de0ff9f68991a401ec4c6eb06e96c"
  },
  {
    "url": "refactor/代码坏味道之滥用面向对象.html",
    "revision": "8acbcb23f3cee56202294a766446d767"
  },
  {
    "url": "refactor/代码坏味道之耦合.html",
    "revision": "28418d1f91fbad6b4d990706e28dbc67"
  },
  {
    "url": "refactor/代码坏味道之非必要的.html",
    "revision": "f643791087e23021b23912258948f014"
  },
  {
    "url": "refactor/代码的坏味道和重构.html",
    "revision": "abf81344857dfb11f5bc022f72592743"
  },
  {
    "url": "solutions/低代码平台.html",
    "revision": "d67334ada94ff0026c3f559e3f25fbe2"
  },
  {
    "url": "solutions/海量数据处理.html",
    "revision": "87698da83ac49b79e11c38cfd54afb30"
  },
  {
    "url": "solutions/电商.html",
    "revision": "1711055119929d533798f9b0fd898ed3"
  },
  {
    "url": "solutions/秒杀系统设计.html",
    "revision": "22adb55ae1f9f003299c272b30251b6b"
  },
  {
    "url": "uml/index.html",
    "revision": "ae9d6a486f71cb0d8b298634f9d299a3"
  },
  {
    "url": "uml/uml-quickstart.html",
    "revision": "49e231feddd3cef0c07f065ff9112ed6"
  },
  {
    "url": "uml/UML结构建模图.html",
    "revision": "5f80ad7a2eff14c29b0050ac5a4bd9c5"
  },
  {
    "url": "uml/UML行为建模图.html",
    "revision": "1f0c389936d66813aa5ac652b27a3982"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{472:function(r,t,E){"use strict";E.r(t);var e=E(15),o=Object(e.a)({},(function(){var r=this,t=r.$createElement,E=r._self._c||t;return E("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[E("p",[r._v("第一次读《重构:改善既有代码的设计》时，我曾整理过一个简单的笔记。最近，因为参与一个重构项目，再一次温习了《重构:改善既有代码的设计》。过程中，萌发了认真总结、整理重构方法的冲动，于是有了这系列文字。")]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"#%E7%97%87%E4%B8%8E%E8%8D%AF"}},[r._v("症与药")]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"#%E5%AF%B9%E4%BB%A3%E7%A0%81%E7%9A%84%E5%9D%8F%E5%91%B3%E9%81%93%E7%9A%84%E6%80%9D%E8%80%83"}},[r._v("对代码的坏味道的思考")])]),r._v(" "),E("li",[E("a",{attrs:{href:"#%E9%87%8D%E6%9E%84%E7%9A%84%E5%8E%9F%E5%88%99"}},[r._v("重构的原则")])])])]),r._v(" "),E("li",[E("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E7%9A%84%E5%9D%8F%E5%91%B3%E9%81%93"}},[r._v("代码的坏味道")]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF"}},[r._v("代码坏味道之代码臃肿")])]),r._v(" "),E("li",[E("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1"}},[r._v("代码坏味道之滥用面向对象")])]),r._v(" "),E("li",[E("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E5%8F%98%E9%9D%A9%E7%9A%84%E9%9A%9C%E7%A2%8D"}},[r._v("代码坏味道之变革的障碍")])]),r._v(" "),E("li",[E("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84"}},[r._v("代码坏味道之非必要的")])]),r._v(" "),E("li",[E("a",{attrs:{href:"#%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88"}},[r._v("代码坏味道之耦合")])])])]),r._v(" "),E("li",[E("a",{attrs:{href:"#%E6%89%A9%E5%B1%95%E9%98%85%E8%AF%BB"}},[r._v("扩展阅读")])]),r._v(" "),E("li",[E("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[r._v("参考资料")])])]),r._v(" "),E("h2",{attrs:{id:"症与药"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#症与药"}},[r._v("#")]),r._v(" 症与药")]),r._v(" "),E("h3",{attrs:{id:"对代码的坏味道的思考"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#对代码的坏味道的思考"}},[r._v("#")]),r._v(" 对代码的坏味道的思考")]),r._v(" "),E("p",[r._v("“有病要早治，不要放弃治疗”。多么朴素的道理 ，人人都懂。")]),r._v(" "),E("p",[r._v("病，就是不健康。")]),r._v(" "),E("p",[r._v("人有病，可以通过打针、吃药、做手术来进行治疗。")]),r._v(" "),E("p",[E("strong",[r._v("如果把代码的坏味道（代码质量问题）比作病症，那么重构就是治疗代码的坏味道的药。")])]),r._v(" "),E("p",[r._v("个人认为，在重构这件事上，也可以应用治病的道理：")]),r._v(" "),E("ul",[E("li",[E("p",[E("strong",[r._v("防患于未然。")]),r._v("\n—— 春秋战国时期的一代名医扁鹊，曾经有个很著名的医学主张："),E("strong",[r._v("防患于未然")]),r._v("。 我觉得这个道理应用于软件代码的重构亦然。编程前要有合理的设计、编程时要有良好的编程风格，尽量减少问题。从这个层面上说，了解代码的坏味道，不仅仅是为了发现问题、解决问题。更重要的作用是：指导我们在编程过程中有意识的去规避这些问题。")])]),r._v(" "),E("li",[E("p",[E("strong",[r._v("小病不医，易得大病。")]),r._v("\n—— 刘备说过：“勿以善小而不为，勿以恶小而为之”。发现问题就及时修改，代码质量自然容易进入良性循环；反之，亦然。要重视积累的力量，别总以为代码出现点小问题，那都不是事儿。")])]),r._v(" "),E("li",[E("p",[E("strong",[r._v("对症下药。")]),r._v("\n—— 程序出现了问题，要分析出问题的根本，有针对性的制定合理的重构方案。大家都知道吃错药的后果，同样的，"),E("strong",[r._v("瞎改还不如不改")]),r._v("。")])]),r._v(" "),E("li",[E("p",[E("strong",[r._v("忌猛药")]),r._v("\n—— 医病用猛药容易产生副作用。换一句俗语：步子大了容易扯着蛋。重构如果大刀阔斧的干，那你就要有随时可能扑街的心理准备。推倒重来不是重构，而是重写。重构应该是循序渐进，步步为营的过程。当你发现重写代码比重构代码更简单，往往说明你早就该重构了。")])])]),r._v(" "),E("h3",{attrs:{id:"重构的原则"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#重构的原则"}},[r._v("#")]),r._v(" 重构的原则")]),r._v(" "),E("p",[r._v("前面把代码质量问题比作病症，而把重构比作药。这里，我们再进一步讨论一下重构的原则。")]),r._v(" "),E("h4",{attrs:{id:"何谓重构-what"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#何谓重构-what"}},[r._v("#")]),r._v(" 何谓重构(What)")]),r._v(" "),E("p",[E("code",[r._v("重构（Refactoring）")]),r._v(" 的常见定义是：不改变软件系统外部行为的前提下，改善它的内部结构。")]),r._v(" "),E("p",[r._v("个人觉得这个定义有点生涩。不妨理解为：重构是给代码治病的行为。而代码有病是指代码的质量（可靠性、安全性、可复用性、可维护性）和性能有问题。")]),r._v(" "),E("p",[E("strong",[r._v("重构的目的是为了提高代码的质量和性能")]),r._v("。")]),r._v(" "),E("p",[E("em",[r._v("注：功能不全或者不正确，那是残疾代码。就像治病治不了残疾，重构也解决不了功能问题。")])]),r._v(" "),E("h4",{attrs:{id:"为何重构-why"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#为何重构-why"}},[r._v("#")]),r._v(" 为何重构(Why)")]),r._v(" "),E("p",[r._v("翻翻书，上网搜一下，谈到重构的理由大体相同：")]),r._v(" "),E("ul",[E("li",[r._v("重构改进软件设计")]),r._v(" "),E("li",[r._v("重构使软件更容易理解")]),r._v(" "),E("li",[r._v("重构帮助找到 bug")]),r._v(" "),E("li",[r._v("重构提高编程速度")])]),r._v(" "),E("p",[r._v("总之就是，"),E("strong",[r._v("重构可以提高代码质量")]),r._v("。")]),r._v(" "),E("h4",{attrs:{id:"何时重构-when"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#何时重构-when"}},[r._v("#")]),r._v(" 何时重构(When)")]),r._v(" "),E("p",[r._v("关于何时重构，我先引用一下 "),E("a",{attrs:{href:"http://mt.sohu.com/20160812/n463980993.shtml",target:"_blank",rel:"noopener noreferrer"}},[E("u",[r._v("重构并非难在如何做，而是难在何时开始做")]),E("OutboundLink")],1),r._v(" 一文的观点。")]),r._v(" "),E("blockquote",[E("p",[r._v("对于一个高速发展的公司来说，停止业务开发，专门来做重构项目，"),E("strong",[r._v("从来就不是一个可接受的选项")]),r._v("，“边开飞机边换引擎”才是这种公司想要的。")])]),r._v(" "),E("p",[r._v("我们不妨来衡量一下重构的成本和收益。")]),r._v(" "),E("ul",[E("li",[E("p",[E("strong",[r._v("重构的成本")])]),r._v(" "),E("p",[r._v("重构是有成本的，费时费力（时间、人力）不说，还有可能会使本来正常运行的程序出错。所以，很多人都抱着“不求有功，但求无过”的心理得过且过。")]),r._v(" "),E("p",[r._v("还有一种成本：重构使用较新且较为复杂的技术，学习曲线不平滑，团队成员技术切换困难，短期内开发效率可能不升反降。")]),r._v(" "),E("p",[r._v("但是，如果一直放任代码腐朽下去，技术债务会越来越沉重。当代码最终快要跑不动时，架构师们往往还是不得不使用激进的手段来治疗代码的顽疾。但是，这个过程通常都是非常痛苦的，而且有着很高的失败风险。")])]),r._v(" "),E("li",[E("p",[E("strong",[r._v("重构的收益")])]),r._v(" "),E("p",[r._v("重构的收益是提高代码的质量和性能，并提高未来的开发效率。但是，应当看到，重构往往并不能在短期内带来实际的效益，或者很难直观看出效益。而对于一个企业来说，没有什么比效益更重要。换句话说，没有实际效益的事，通常也没有价值。很多领导，尤其是非技术方向的领导，并不关心你应用了什么新技术，让代码变得多么优雅等等。")])]),r._v(" "),E("li",[E("p",[E("strong",[r._v("重构的合适时机")])]),r._v(" "),E("p",[r._v("从以上来看，重构实在是个吃力不讨好的事情。")]),r._v(" "),E("p",[r._v("于是，很多人屈服于万恶的 KPI 和要命的 deadline，一边吐槽着以前的代码是垃圾，一边自己也在造垃圾。")]),r._v(" "),E("p",[r._v("但是，"),E("strong",[r._v("重构本应该是个渐进式的过程，不是只有伤筋动骨的改造才叫重构")]),r._v("。如果非要等到代码已经烂到病入膏肓，再使用激进方式来重构，那必然是困难重重，风险极高。")]),r._v(" "),E("p",[r._v("《重构》书中提到的重构时机应该在添加功能、修复功能、审查代码时，不建议专门抽出时间专门做重构项目。")]),r._v(" "),E("p",[r._v("我认为，其思想就是指："),E("strong",[r._v("重构应该是在开发过程中实时的、渐进的演化过程。")])])]),r._v(" "),E("li",[E("p",[E("strong",[r._v("重构的不恰当时机")])]),r._v(" "),E("p",[r._v("但是，这里我也要强调一下："),E("strong",[r._v("不是所有软件开发过程都一定要重构。")])]),r._v(" "),E("p",[r._v("较能"),E("strong",[r._v("凸显重构价值的场景")]),r._v("是：代码规模较大、生命周期还较长、承担了较多责任、有一个较大（且较不稳定，人员流动频繁）团队在其上工作的单一代码库。")]),r._v(" "),E("p",[r._v("与之相反，有一些场景的重构价值就很小：")]),r._v(" "),E("ul",[E("li",[r._v("代码库生命周期快要走到尾声，开发逐渐减少，以维护为主。")]),r._v(" "),E("li",[r._v("代码库当前版本马上要发布了，这时重构无疑是给自己找麻烦。")]),r._v(" "),E("li",[r._v("重构代价过于沉重：重构后功能的正确性、稳定性难以保障；技术过于超前，团队成员技术迁移难度太大。")])])])]),r._v(" "),E("h4",{attrs:{id:"如何重构-how"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#如何重构-how"}},[r._v("#")]),r._v(" 如何重构(How)")]),r._v(" "),E("p",[r._v("重构行为在我看来，也是可以分层级的。由高到低，越高层级难度越大：")]),r._v(" "),E("ul",[E("li",[r._v("系统架构、集群架构、框架、服务、数据库：这个层面的重构属于战略级重构。现代软件往往业务复杂、庞大。使用微服务、数据迁移来拆分业务，降低业务复杂度成为了主流。但是，这些技术的测试、部署复杂，技术难度很高。")]),r._v(" "),E("li",[r._v("组件、模块、接口：这个层面的重构属于战术级重构。组件、模块、框架的重构，主要是针对代码的设计问题。解决的是代码的整体结构问题。需要对框架、设计模式、分布式、并发等等有足够的了解。")]),r._v(" "),E("li",[r._v("类、接口、函数、字段等：这个层面的重构属于战法级重构。《重构》一书提到了 "),E("strong",[r._v("代码的坏味道")]),r._v(" 以及相关的重构方法。这些都是对类、接口、函数、字段级别代码的重构手段。由于这一级别的重构方法较为简单，所以可操作性较强。具体细节可以阅读《代码的坏味道》篇章。")])]),r._v(" "),E("p",[r._v("前两种层级的重构已经涉及到架构层面，影响较大，难度较高，如果功力不够不要轻易变动。由于这两个层级涉及领域较广，这里不做论述。")]),r._v(" "),E("p",[E("u",[E("strong",[E("em",[r._v("此处为分割线。下面是代码的坏味道系列。。。")])])])]),r._v(" "),E("h2",{attrs:{id:"代码的坏味道"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#代码的坏味道"}},[r._v("#")]),r._v(" 代码的坏味道")]),r._v(" "),E("p",[r._v("《重构:改善既有代码的设计》中介绍了 22 种代码的坏味道以及重构手法。这些坏味道可以进一步归类。我总觉得将事物分类有助于理解和记忆。所以本系列将坏味道按照特性分类，然后逐一讲解。")]),r._v(" "),E("p",[E("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430112053.png",alt:""}})]),r._v(" "),E("h3",{attrs:{id:"代码坏味道之代码臃肿"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#代码坏味道之代码臃肿"}},[r._v("#")]),r._v(" 代码坏味道之代码臃肿")]),r._v(" "),E("blockquote",[E("p",[E("strong",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("代码臃肿(Bloated)"),E("OutboundLink")],1),r._v("这组坏味道意味着：代码中的类、函数、字段没有经过合理的组织，只是简单的堆砌起来。这一类型的问题通常在代码的初期并不明显，但是随着代码规模的增长而逐渐积累（特别是当没有人努力去根除它们时）。")])])]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md#%E8%BF%87%E9%95%BF%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[r._v("过长函数"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md#%E8%BF%87%E5%A4%A7%E7%9A%84%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"}},[r._v("过大的类"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md#%E5%9F%BA%E6%9C%AC%E7%B1%BB%E5%9E%8B%E5%81%8F%E6%89%A7",target:"_blank",rel:"noopener noreferrer"}},[r._v("基本类型偏执"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md#%E8%BF%87%E9%95%BF%E5%8F%82%E6%95%B0%E5%88%97",target:"_blank",rel:"noopener noreferrer"}},[r._v("过长参数列"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md#%E6%95%B0%E6%8D%AE%E6%B3%A5%E5%9B%A2",target:"_blank",rel:"noopener noreferrer"}},[r._v("数据泥团"),E("OutboundLink")],1)])]),r._v(" "),E("h3",{attrs:{id:"代码坏味道之滥用面向对象"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#代码坏味道之滥用面向对象"}},[r._v("#")]),r._v(" 代码坏味道之滥用面向对象")]),r._v(" "),E("blockquote",[E("p",[E("strong",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("滥用面向对象(Object-Orientation Abusers)"),E("OutboundLink")],1),r._v("这组坏味道意味着：代码部分或完全地违背了面向对象编程原则。")])])]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md#switch-%E5%A3%B0%E6%98%8E",target:"_blank",rel:"noopener noreferrer"}},[r._v("switch 声明"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md#%E4%B8%B4%E6%97%B6%E5%AD%97%E6%AE%B5",target:"_blank",rel:"noopener noreferrer"}},[r._v("临时字段"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md#%E8%A2%AB%E6%8B%92%E7%BB%9D%E7%9A%84%E9%A6%88%E8%B5%A0",target:"_blank",rel:"noopener noreferrer"}},[r._v("被拒绝的馈赠"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md#%E5%BC%82%E6%9B%B2%E5%90%8C%E5%B7%A5%E7%9A%84%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"}},[r._v("异曲同工的类"),E("OutboundLink")],1)])]),r._v(" "),E("h3",{attrs:{id:"代码坏味道之变革的障碍"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#代码坏味道之变革的障碍"}},[r._v("#")]),r._v(" 代码坏味道之变革的障碍")]),r._v(" "),E("blockquote",[E("p",[E("strong",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E5%8F%98%E9%9D%A9%E7%9A%84%E9%9A%9C%E7%A2%8D.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("变革的障碍(Change Preventers)"),E("OutboundLink")],1),r._v("这组坏味道意味着：当你需要改变一处代码时，却发现不得不改变其他的地方。这使得程序开发变得复杂、代价高昂。")])])]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E5%8F%98%E9%9D%A9%E7%9A%84%E9%9A%9C%E7%A2%8D.md#%E5%8F%91%E6%95%A3%E5%BC%8F%E5%8F%98%E5%8C%96",target:"_blank",rel:"noopener noreferrer"}},[r._v("发散式变化"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E5%8F%98%E9%9D%A9%E7%9A%84%E9%9A%9C%E7%A2%8D.md#%E9%9C%B0%E5%BC%B9%E5%BC%8F%E4%BF%AE%E6%94%B9",target:"_blank",rel:"noopener noreferrer"}},[r._v("霰弹式修改"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E5%8F%98%E9%9D%A9%E7%9A%84%E9%9A%9C%E7%A2%8D.md#%E5%B9%B3%E8%A1%8C%E7%BB%A7%E6%89%BF%E4%BD%93%E7%B3%BB",target:"_blank",rel:"noopener noreferrer"}},[r._v("平行继承体系"),E("OutboundLink")],1)])]),r._v(" "),E("h3",{attrs:{id:"代码坏味道之非必要的"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#代码坏味道之非必要的"}},[r._v("#")]),r._v(" 代码坏味道之非必要的")]),r._v(" "),E("blockquote",[E("p",[E("strong",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("非必要的(Dispensables)"),E("OutboundLink")],1),r._v("这组坏味道意味着：这样的代码可有可无，它的存在反而影响整体代码的整洁和可读性。")])])]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md#%E8%BF%87%E5%A4%9A%E7%9A%84%E6%B3%A8%E9%87%8A",target:"_blank",rel:"noopener noreferrer"}},[r._v("过多的注释"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md#%E9%87%8D%E5%A4%8D%E4%BB%A3%E7%A0%81",target:"_blank",rel:"noopener noreferrer"}},[r._v("重复代码"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md#%E5%86%97%E4%BD%99%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"}},[r._v("冗余类"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md#%E7%BA%AF%E7%A8%9A%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"}},[r._v("纯稚的数据类"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md#%E5%A4%B8%E5%A4%B8%E5%85%B6%E8%B0%88%E6%9C%AA%E6%9D%A5%E6%80%A7",target:"_blank",rel:"noopener noreferrer"}},[r._v("夸夸其谈未来性"),E("OutboundLink")],1)])]),r._v(" "),E("h3",{attrs:{id:"代码坏味道之耦合"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#代码坏味道之耦合"}},[r._v("#")]),r._v(" 代码坏味道之耦合")]),r._v(" "),E("blockquote",[E("p",[E("strong",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("耦合(Couplers)"),E("OutboundLink")],1),r._v("这组坏味道意味着：不同类之间过度耦合。")])])]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md#%E4%BE%9D%E6%81%8B%E6%83%85%E7%BB%93",target:"_blank",rel:"noopener noreferrer"}},[r._v("依恋情结"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md#%E7%8B%8E%E6%98%B5%E5%85%B3%E7%B3%BB",target:"_blank",rel:"noopener noreferrer"}},[r._v("狎昵关系"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md#%E8%BF%87%E5%BA%A6%E8%80%A6%E5%90%88%E7%9A%84%E6%B6%88%E6%81%AF%E9%93%BE",target:"_blank",rel:"noopener noreferrer"}},[r._v("过度耦合的消息链"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md#%E4%B8%AD%E9%97%B4%E4%BA%BA",target:"_blank",rel:"noopener noreferrer"}},[r._v("中间人"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md#%E4%B8%8D%E5%AE%8C%E7%BE%8E%E7%9A%84%E5%BA%93%E7%B1%BB",target:"_blank",rel:"noopener noreferrer"}},[r._v("不完美的库类"),E("OutboundLink")],1)])]),r._v(" "),E("h2",{attrs:{id:"扩展阅读"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[r._v("#")]),r._v(" 扩展阅读")]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/",target:"_blank",rel:"noopener noreferrer"}},[r._v("代码的坏味道和重构"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E4%BB%A3%E7%A0%81%E8%87%83%E8%82%BF.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("代码坏味道之代码臃肿"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E6%BB%A5%E7%94%A8%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("代码坏味道之滥用面向对象"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E5%8F%98%E9%9D%A9%E7%9A%84%E9%9A%9C%E7%A2%8D.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("代码坏味道之变革的障碍"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E9%9D%9E%E5%BF%85%E8%A6%81%E7%9A%84.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("代码坏味道之非必要的"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://github.com/dunwu/design/blob/master/docs/refactor/%E4%BB%A3%E7%A0%81%E5%9D%8F%E5%91%B3%E9%81%93%E4%B9%8B%E8%80%A6%E5%90%88.md",target:"_blank",rel:"noopener noreferrer"}},[r._v("代码坏味道之耦合"),E("OutboundLink")],1)])]),r._v(" "),E("h2",{attrs:{id:"参考资料"}},[E("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[r._v("#")]),r._v(" 参考资料")]),r._v(" "),E("ul",[E("li",[E("a",{attrs:{href:"https://book.douban.com/subject/4199741/",target:"_blank",rel:"noopener noreferrer"}},[r._v("《代码整洁之道》"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://book.douban.com/subject/4262627/",target:"_blank",rel:"noopener noreferrer"}},[r._v("《重构 - 改善既有代码的设计》"),E("OutboundLink")],1)]),r._v(" "),E("li",[E("a",{attrs:{href:"https://book.douban.com/subject/1477390/",target:"_blank",rel:"noopener noreferrer"}},[r._v("《代码大全》"),E("OutboundLink")],1)]),r._v(" "),E("li",[r._v("https://sourcemaking.com/refactoring")])])])}),[],!1,null,null,null);t.default=o.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{422:function(t,a,s){"use strict";s.r(a);var r=s(15),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"分布式-id-基本原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分布式-id-基本原理"}},[t._v("#")]),t._v(" 分布式 ID 基本原理")]),t._v(" "),s("blockquote",[s("p",[t._v("📦 本文已归档到：「"),s("a",{attrs:{href:"https://github.com/dunwu/blog",target:"_blank",rel:"noopener noreferrer"}},[t._v("blog"),s("OutboundLink")],1),t._v("」")]),t._v(" "),s("p",[t._v("传统数据库软件开发中，主键自动生成技术是基本需求。而各个数据库对于该需求也提供了相应的支持，比如 MySQL 的自增键，Oracle 的自增序列等。")]),t._v(" "),s("p",[t._v("数据分片后，不同数据节点生成全局唯一主键是非常棘手的问题。同一个逻辑表内的不同实际表之间的自增键由于无法互相感知而产生重复主键。 虽然可通过约束自增主键初始值和步长的方式避免碰撞，但需引入额外的运维规则，使解决方案缺乏完整性和可扩展性。")]),t._v(" "),s("p",[t._v("为此，需要使用分布式 ID 来解决此问题。本文总结业界常用的分布式 ID 解决方案。")])]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%B8%80%E5%88%86%E5%B8%83%E5%BC%8F-id-%E7%AE%80%E4%BB%8B"}},[t._v("一、分布式 ID 简介")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%8Cuuid"}},[t._v("二、UUID")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#uuid-%E7%9A%84%E4%BC%98%E7%82%B9"}},[t._v("UUID 的优点")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#uuid-%E7%9A%84%E7%BC%BA%E7%82%B9"}},[t._v("UUID 的缺点")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF"}},[t._v("适用场景")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%B8%89%E5%88%A9%E7%94%A8%E7%AC%AC%E4%B8%89%E6%96%B9%E5%AD%98%E5%82%A8%E7%94%9F%E6%88%90%E9%94%AE"}},[t._v("三、利用第三方存储生成键")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E4%BC%98%E7%82%B9"}},[t._v("优点")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E7%BC%BA%E7%82%B9"}},[t._v("缺点")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%9B%9B%E9%9B%AA%E8%8A%B1%E7%AE%97%E6%B3%95snowflake"}},[t._v("四、雪花算法（Snowflake）")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86"}},[t._v("基本原理")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BC%98%E7%82%B9-1"}},[t._v("优点")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E7%BC%BA%E7%82%B9-1"}},[t._v("缺点")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF-1"}},[t._v("适用场景")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%98%B2%E6%AD%A2%E6%97%B6%E9%92%9F%E5%9B%9E%E6%8B%A8"}},[t._v("防止时钟回拨")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BA%94leaf"}},[t._v("五、Leaf")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"#%E5%9F%BA%E6%9C%AC%E5%8E%9F%E7%90%86-1"}},[t._v("基本原理")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E4%BC%98%E7%82%B9-2"}},[t._v("优点")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E7%BC%BA%E7%82%B9-2"}},[t._v("缺点")])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF-2"}},[t._v("适用场景")])])])]),t._v(" "),s("li",[s("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("参考资料")])])]),t._v(" "),s("h2",{attrs:{id:"一、分布式-id-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一、分布式-id-简介"}},[t._v("#")]),t._v(" 一、分布式 ID 简介")]),t._v(" "),s("p",[t._v("首先，分布式 ID 应该具备哪些特性呢？")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("全局唯一性")]),t._v(" - 不能出现重复的 ID 号，既然是唯一标识，这是最基本的要求。")]),t._v(" "),s("li",[s("strong",[t._v("趋势递增")]),t._v(" - 在 MySQL InnoDB 引擎中使用的是聚集索引，由于多数 RDBMS 使用 B-tree 的数据结构来存储索引数据，在主键的选择上面我们应该尽量使用有序的主键保证写入性能。")]),t._v(" "),s("li",[s("strong",[t._v("单调递增")]),t._v(" - 保证下一个 ID 一定大于上一个 ID，例如事务版本号、IM 增量消息、排序等特殊需求。")]),t._v(" "),s("li",[s("strong",[t._v("信息安全")]),t._v(" - 如果 ID 是连续的，恶意用户的扒取工作就非常容易做了，直接按照顺序下载指定 URL 即可；如果是订单号就更危险了，竞对可以直接知道我们一天的单量。所以在一些应用场景下，会需要 ID 无规则、不规则。")])]),t._v(" "),s("h2",{attrs:{id:"二、uuid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二、uuid"}},[t._v("#")]),t._v(" 二、UUID")]),t._v(" "),s("p",[t._v("UUID 是最简单的分布式 ID 方案。")]),t._v(" "),s("p",[t._v("UUID 是通用唯一识别码（Universally Unique Identifier)的缩写，开放软件基金会(OSF)规范定义了包括网卡 MAC 地址、时间戳、名字空间（Namespace）、随机或伪随机数、时序等元素。利用这些元素来生成 UUID。")]),t._v(" "),s("p",[t._v("UUID 是由 128 位二进制组成，一般转换成十六进制，然后用 String 表示。在 java 中有个 UUID 类,在他的注释中我们看见这里有 4 种不同的 UUID 的生成策略:")]),t._v(" "),s("ul",[s("li",[t._v("random - 基于随机数生成 UUID，由于 Java 中的随机数是伪随机数，其重复的概率是可以被计算出来的。这个一般我们用下面的代码获取基于随机数的 UUID:")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" UUID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomUUID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("time-based - 基于时间的 UUID,这个一般是通过当前时间，随机数，和本地 Mac 地址来计算出来，自带的 JDK 包并没有这个算法的我们在一些 UUIDUtil 中，比如我们的 log4j.core.util，会重新定义 UUID 的高位和低位。")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UUID")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTimeBasedUuid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("currentTimeMillis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000L")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("122192928000000000L")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COUNT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("incrementAndGet")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" timeLow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4294967295L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" timeMid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("281470681743360L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" timeHi "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1152640029630136320L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("48")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" most "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" timeLow "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" timeMid "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096L")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" timeHi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("UUID")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("most"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LEAST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("DCE security - DCE 安全的 UUID。")])]),t._v(" "),s("li",[s("p",[t._v("name-based - 基于名字的 UUID，通过计算名字和名字空间的 MD5 来计算 UUID。")])])]),t._v(" "),s("h3",{attrs:{id:"uuid-的优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uuid-的优点"}},[t._v("#")]),t._v(" UUID 的优点")]),t._v(" "),s("ul",[s("li",[t._v("通过本地生成，没有经过网络 I/O，性能较快。")])]),t._v(" "),s("h3",{attrs:{id:"uuid-的缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#uuid-的缺点"}},[t._v("#")]),t._v(" UUID 的缺点")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("长度过长")]),t._v(" - UUID 太长，16 字节 128 位，通常以 36 长度的字符串表示，很多场景不适用。例如：Mysql 官方明确建议主键越短越好，36 个字符长度的 UUID 不符合要求。")]),t._v(" "),s("li",[s("strong",[t._v("信息不安全")]),t._v(" - 基于 MAC 地址生成 UUID 的算法可能会造成 MAC 地址泄露，这个漏洞曾被用于寻找梅丽莎病毒的制作者位置。")]),t._v(" "),s("li",[s("strong",[t._v("无序性")]),t._v(" - 不能生成递增有序的数字。这对于一些特定场景不利。例如：MySQL InnoDB 存储引擎使用 B+ 树存储索引数据，而主键也是一种索引。索引数据在 B+ 树中是有序排列的。UUID 的无序性可能会引起数据位置频繁变动，严重影响性能。")])]),t._v(" "),s("h3",{attrs:{id:"适用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用场景"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),s("p",[t._v("UUID 的适用场景可以为不需要担心过多的空间占用，以及不需要生成有递增趋势的数字。在 Log4j 里 "),s("code",[t._v("UuidPatternConverter")]),t._v(" 中加入了 UUID 来标识每一条日志。")]),t._v(" "),s("h2",{attrs:{id:"三、利用第三方存储生成键"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三、利用第三方存储生成键"}},[t._v("#")]),t._v(" 三、利用第三方存储生成键")]),t._v(" "),s("p",[t._v("提到自增键，最先想到的肯定是直接使用数据库自增键。"),s("em",[t._v("各数据库对于该需求也提供了相应的支持，比如 MySQL 的自增键，Oracle 的自增序列等")]),t._v("。")]),t._v(" "),s("p",[t._v("当然，也可以考虑是用 Redis 这样的 Nosql，甚至 ZooKeeper 去生成键")]),t._v(" "),s("h3",{attrs:{id:"优点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("非常简单，利用现有的功能实现，成本小")]),t._v(" "),s("li",[t._v("有序递增")]),t._v(" "),s("li",[t._v("方便排序和分页")])]),t._v(" "),s("h3",{attrs:{id:"缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("强依赖第三方存储，如果第三方存储非高可用系统，若出现丢失数据的情况，就可能出现重复生成 ID 的问题。")]),t._v(" "),s("li",[t._v("生成 ID 性能瓶颈依赖于第三方存储的性能。")]),t._v(" "),s("li",[t._v("增加了对第三方存储运维的成本。")])]),t._v(" "),s("h2",{attrs:{id:"四、雪花算法-snowflake"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四、雪花算法-snowflake"}},[t._v("#")]),t._v(" 四、雪花算法（Snowflake）")]),t._v(" "),s("p",[t._v("雪花算法（Snowflake）是由 Twitter 公布的分布式主键生成算法，"),s("strong",[t._v("它会生成一个 "),s("code",[t._v("64 bit")]),t._v(" 的整数")]),t._v("，可以保证不同进程主键的不重复性，以及相同进程主键的有序性。")]),t._v(" "),s("p",[t._v("在同一个进程中，它首先是通过时间位保证不重复，如果时间相同则是通过序列位保证。 同时由于时间位是单调递增的，且各个服务器如果大体做了时间同步，那么生成的主键在分布式环境可以认为是总体有序的，这就保证了对索引字段的插入的高效性。")]),t._v(" "),s("h3",{attrs:{id:"基本原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[t._v("#")]),t._v(" 基本原理")]),t._v(" "),s("h4",{attrs:{id:"键的组成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#键的组成"}},[t._v("#")]),t._v(" 键的组成")]),t._v(" "),s("p",[t._v("使用"),s("strong",[t._v("雪花算法生成的主键，二进制表示形式包含 4 部分")]),t._v("，从高位到低位分表为：1bit 符号位、41bit 时间戳位、10bit 工作进程位以及 12bit 序列号位。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("符号位(1bit)")])])]),t._v(" "),s("p",[t._v("预留的符号位，恒为零。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("时间戳位(41bit)")])])]),t._v(" "),s("p",[t._v("41 位的时间戳可以容纳的毫秒数是 2 的 41 次幂，一年所使用的毫秒数是："),s("code",[t._v("365 * 24 * 60 * 60 * 1000")]),t._v("。通过计算可知：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Math")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("41")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("365")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("结果约等于 69.73 年。ShardingSphere 的雪花算法的时间纪元从 2016 年 11 月 1 日零点开始，可以使用到 2086 年，相信能满足绝大部分系统的要求。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("工作进程位(10bit)")])])]),t._v(" "),s("p",[t._v("该标志在 Java 进程内是唯一的，如果是分布式应用部署应保证每个工作进程的 id 是不同的。该值默认为 0，可通过属性设置。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("序列号位(12bit)")])])]),t._v(" "),s("p",[t._v("该序列是用来在同一个毫秒内生成不同的 ID。如果在这个毫秒内生成的数量超过 4096(2 的 12 次幂)，那么生成器会等待到下个毫秒继续生成。")]),t._v(" "),s("p",[t._v("雪花算法主键的详细结构见下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://shardingsphere.apache.org/document/current/img/sharding/snowflake_cn_v2.png",alt:"雪花算法"}})]),t._v(" "),s("h4",{attrs:{id:"时钟回拨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#时钟回拨"}},[t._v("#")]),t._v(" 时钟回拨")]),t._v(" "),s("p",[t._v("服务器时钟回拨会导致产生重复序列，因此默认分布式主键生成器提供了一个最大容忍的时钟回拨毫秒数。 如果时钟回拨的时间超过最大容忍的毫秒数阈值，则程序报错；如果在可容忍的范围内，默认分布式主键生成器会等待时钟同步到最后一次主键生成的时间后再继续工作。 最大容忍的时钟回拨毫秒数的默认值为 0，可通过属性设置。")]),t._v(" "),s("h4",{attrs:{id:"灵活定制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#灵活定制"}},[t._v("#")]),t._v(" 灵活定制")]),t._v(" "),s("p",[t._v("上面只是一个将 "),s("code",[t._v("64bit")]),t._v(" 划分的标准，当然也不一定这么做，可以根据不同业务的具体场景来划分，比如下面给出一个业务场景：")]),t._v(" "),s("ul",[s("li",[t._v("服务目前 QPS10 万，预计几年之内会发展到百万。")]),t._v(" "),s("li",[t._v("当前机器三地部署，上海，北京，深圳都有。")]),t._v(" "),s("li",[t._v("当前机器 10 台左右，预计未来会增加至百台。")])]),t._v(" "),s("p",[t._v("这个时候我们根据上面的场景可以再次合理的划分 62bit，QPS 几年之内会发展到百万，那么每毫秒就是千级的请求，目前 10 台机器那么每台机器承担百级的请求，为了保证扩展，后面的循环位可以限制到 1024，也就是 2^10，那么循环位 10 位就足够了。")]),t._v(" "),s("p",[t._v("机器三地部署我们可以用 3bit 总共 8 来表示机房位置，当前的机器 10 台，为了保证扩展到百台那么可以用 7bit 128 来表示，时间位依然是 41bit，那么还剩下 64-10-3-7-41-1 = 2bit，还剩下 2bit 可以用来进行扩展。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/9/29/16624909d2007c22?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),s("h3",{attrs:{id:"优点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("生成的 ID 都是趋势递增的。")]),t._v(" "),s("li",[t._v("不依赖数据库等第三方系统，以服务的方式部署，稳定性更高，生成 ID 的性能也是非常高的。")]),t._v(" "),s("li",[t._v("可以根据自身业务特性分配 bit 位，非常灵活。")])]),t._v(" "),s("h3",{attrs:{id:"缺点-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("强依赖机器时钟，如果机器上时钟回拨，会导致发号重复或者服务会处于不可用状态。")])]),t._v(" "),s("h3",{attrs:{id:"适用场景-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用场景-2"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),s("p",[t._v("当我们需要无序不能被猜测的 ID，并且需要一定高性能，且需要 long 型，那么就可以使用我们雪花算法。比如常见的订单 ID，用雪花算法别人就无法猜测你每天的订单量是多少。")]),t._v(" "),s("h3",{attrs:{id:"防止时钟回拨"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#防止时钟回拨"}},[t._v("#")]),t._v(" 防止时钟回拨")]),t._v(" "),s("p",[t._v("雪花算法是强依赖于时间的，而如果机器时间发生回拨，有可能会生成重复的 ID。")]),t._v(" "),s("p",[t._v("我们可以针对算法做一些优化，来防止时钟回拨生成重复 ID。")]),t._v(" "),s("p",[t._v("用当前时间和上一次的时间进行判断，如果当前时间小于上一次的时间那么肯定是发生了回拨。普通的算法会直接抛出异常，这里我们可以对其进行优化，一般分为两个情况:")]),t._v(" "),s("ul",[s("li",[t._v("如果时间回拨时间较短，比如配置 "),s("code",[t._v("5ms")]),t._v(" 以内，那么可以直接等待一定的时间，让机器的时间追上来。")]),t._v(" "),s("li",[t._v("如果时间的回拨时间较长，我们不能接受这么长的阻塞等待，那么又有两个策略:\n"),s("ul",[s("li",[t._v("直接拒绝，抛出异常。打日志，通知 RD 时钟回滚。")]),t._v(" "),s("li",[t._v("利用扩展位。上面我们讨论过，不同业务场景位数可能用不到那么多比特位，那么我们可以把扩展位数利用起来。比如：当这个时间回拨比较长的时候，我们可以不需要等待，直接在扩展位加 1。两位的扩展位允许我们有三次大的时钟回拨，一般来说就够了，如果其超过三次我们还是选择抛出异常，打日志。")])])])]),t._v(" "),s("h2",{attrs:{id:"五、leaf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#五、leaf"}},[t._v("#")]),t._v(" 五、Leaf")]),t._v(" "),s("blockquote",[s("p",[t._v("美团提供了一种分布式 ID 解决方案 Leaf，其本质可以视为数据库分段+服务缓存 ID。")]),t._v(" "),s("p",[t._v("详情可以参考 "),s("a",{attrs:{href:"https://tech.meituan.com/2017/04/21/mt-leaf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leaf——美团点评分布式 ID 生成系统"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"基本原理-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本原理-2"}},[t._v("#")]),t._v(" 基本原理")]),t._v(" "),s("p",[t._v("使用数据库生成 ID，但是做了如下改进：")]),t._v(" "),s("p",[t._v("原方案每次获取 ID 都得读写一次数据库，造成数据库压力大。改为利用 proxy server 批量获取，每次获取一个 segment(step 决定大小)号段的值。用完之后再去数据库获取新的号段，可以大大的减轻数据库的压力。 - 各个业务不同的发号需求用 biz_tag 字段来区分，每个 biz-tag 的 ID 获取相互隔离，互不影响。如果以后有性能需求需要对数据库扩容，不需要上述描述的复杂的扩容操作，只需要对 biz_tag 分库分表就行。")]),t._v(" "),s("p",[t._v("数据库表设计如下：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-------------+--------------+------+-----+-------------------+-----------------------------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Field       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Type")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("Null")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Key")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Default")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" Extra                       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-------------+--------------+------+-----+-------------------+-----------------------------+")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" biz_tag     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("128")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" PRI "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" max_id      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("bigint")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" step        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("256")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" YES  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                             "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" update_time "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("NO")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-------------+--------------+------+-----+-------------------+-----------------------------+")]),t._v("\n")])])]),s("p",[t._v("重要字段说明：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("biz_tag")]),t._v(" 用来区分业务")]),t._v(" "),s("li",[s("code",[t._v("max_id")]),t._v(" 表示该 "),s("code",[t._v("biz_tag")]),t._v(" 目前所被分配的 ID 号段的最大值")]),t._v(" "),s("li",[s("code",[t._v("step")]),t._v(" 表示每次分配的号段长度。原来获取 ID 每次都需要写数据库，现在只需要把 "),s("code",[t._v("step")]),t._v(" 设置得足够大，比如 1000。那么只有当 1000 个号被消耗完了之后才会去重新读写一次数据库。读写数据库的频率从 1 减小到了 1/step。")])]),t._v(" "),s("p",[t._v("大致架构如下图所示：")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://awps-assets.meituan.net/mit-x/blog-images-bundle-2017/5e4ff128.png",alt:"image"}})]),t._v(" "),s("p",[t._v("test_tag 在第一台 Leaf 机器上是 "),s("code",[t._v("1~1000")]),t._v(" 的号段，当这个号段用完时，会去加载另一个长度为 step=1000 的号段，假设另外两台号段都没有更新，这个时候第一台机器新加载的号段就应该是 "),s("code",[t._v("3001~4000")]),t._v("。同时数据库对应的 biz_tag 这条数据的 max_id 会从 3000 被更新成 4000，更新号段的 SQL 语句如下：")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Begin")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" max_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("max_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("step "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" biz_tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" tag"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" max_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" step "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" biz_tag"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("xxx\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Commit")]),t._v("\n")])])]),s("h3",{attrs:{id:"优点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),s("ul",[s("li",[t._v("比数据库自增键性能高")]),t._v(" "),s("li",[t._v("能保证键趋势递增。")]),t._v(" "),s("li",[t._v("如果数据库宕机，由于 proxServer 有缓存，依然可以坚持一段时间。")])]),t._v(" "),s("h3",{attrs:{id:"缺点-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),s("ul",[s("li",[t._v("和主键递增一样，容易被人猜测。")]),t._v(" "),s("li",[t._v("数据库宕机后，虽然能支撑一段时间，但是仍然会造成系统不可用。")])]),t._v(" "),s("h3",{attrs:{id:"适用场景-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#适用场景-3"}},[t._v("#")]),t._v(" 适用场景")]),t._v(" "),s("p",[t._v("需要趋势递增，并且 ID 大小可控制的，可以使用这套方案。")]),t._v(" "),s("p",[t._v("当然这个方案也可以通过一些手段避免被人猜测，把 ID 变成是无序的，比如把我们生成的数据是一个递增的 long 型，把这个 Long 分成几个部分，比如可以分成几组三位数，几组四位数，然后在建立一个映射表，将我们的数据变成无序。")]),t._v(" "),s("h2",{attrs:{id:"参考资料"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/baidu/uid-generator/blob/master/README.zh_cn.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("百度分布式 ID"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://juejin.im/post/5bb0217ef265da0ac2567b42",target:"_blank",rel:"noopener noreferrer"}},[t._v("如果再有人问你分布式 ID，这篇文章丢给他"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://segmentfault.com/a/1190000011282426",target:"_blank",rel:"noopener noreferrer"}},[t._v("理解分布式 id 生成算法 SnowFlake"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://tech.meituan.com/2017/04/21/mt-leaf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Leaf——美团点评分布式 ID 生成系统"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.ietf.org/rfc/rfc4122.txt",target:"_blank",rel:"noopener noreferrer"}},[t._v("UUID 规范"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://shardingsphere.apache.org/document/current/cn/features/sharding/other-features/key-generator/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ShardingSphere 分布式主键"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);
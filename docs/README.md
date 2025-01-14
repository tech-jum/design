---
home: true
heroImage: https://raw.githubusercontent.com/dunwu/images/dev/common/dunwu-logo-200.png
heroText: Design
tagline: ☕ DESIGN 是个人对于架构的心得和总结。
actionLink: /
footer: CC-BY-SA-4.0 Licensed | Copyright © 2018-Now Dunwu
---

![license](https://badgen.net/github/license/dunwu/design)
![build](https://api.travis-ci.com/dunwu/design.svg?branch=master)

> ☕ **DESIGN** 是个人对于架构的心得和总结。
>
> - 🔁 项目同步维护：[Github](https://github.com/dunwu/design/) | [Gitee](https://gitee.com/turnon/design/)
> - 📖 电子书阅读：[Github Pages](https://dunwu.github.io/design/) | [Gitee Pages](http://turnon.gitee.io/design/)

## 📖 内容

### 解决方案

解决方案（Solution），就是针对某些已经体现出的，或者可以预期的问题、不足、缺陷、需求等等，所提出的一个解决整体问题的可行性方案。就软件系统而言，解决方案就是一个可以解决具体业务问题，并且可以落地的软件系统。

解决方案，毫无疑问是顶层系统设计，这需要设计者既懂技术，也懂业务。

#### 第一步：业务分析

把所有需要的东西聚集在一起，审视问题。不停的提问，以至于我们可以明确使用场景和约束。讨论假设。

- **What**：系统的作用是什么？系统的目标是什么？
- **Who**：系统的用户是谁？用户群体如何定位？
- **How**：用户希望怎样使用系统？系统如何为用户提供服务？
- **How many**：有多少用户？日活/月活有多少？——用户体量会极大的影响系统的性能要求，从而影响系统的规模和复杂度。
- **How much**：系统的预算是多少（包括物料、人力成本等）？
- **输入输出**：系统的输入输出分别是什么？
- **容量**：系统需要处理多少数据？
- **并发量、吞吐量**：系统需要每秒钟处理多少请求？
- **读写比率**：系统的读写比率是多少？——读多写少或写多读少决定了不同的架构方案。

#### 第二步：顶层设计

使用所有重要的组件来描绘出一个高层级的设计。

- 画出主要的组件和连接
- 证明你的想法

#### 第三步：组件设计

对每一个核心组件进行详细深入的分析。

#### 第四步：扩展设计

确认和处理瓶颈以及一些限制。举例来说就是你需要下面的这些来完成扩展性的议题吗？

- 负载均衡
- 水平扩展
- 缓存
- 数据库分片

#### 实际业务方案

- 设计一个秒杀系统
- 设计一个权限系统
- 设计一个微博
- 设计一个聊天系统
- 设计一个搜索引擎
- 设计一个电商系统
- 设计一个供应链系统
- [设计一个低代码平台](solutions/低代码平台.md)
- [设计一个短地址服务](solutions/短地址服务.md)

### [架构设计](architecture)

> 如果把软件开发工作比作是一场战争，那么系统架构无疑是战略层面的工作。众所周知，万丈高楼平地起，系统架构就像是软件的地基，如果一开始就歪了，那么代码写得再漂亮，软件也难以成功。
>
> 软件整体结构与组件的抽象描述，用于指导大型软件系统各个方面的设计。重点是分而治之，先将大型系统抽象为各个组件或模块；然后逐一解决各组件、各模块的功能、性能问题；最后将这些组件、模块整合成对外服务的一个整体。

- [系统架构面试题](architecture/系统架构面试.md)
- [系统架构概述](architecture/系统架构概述.md)
- [系统高性能架构](architecture/系统高性能架构.md)
- [系统高可用架构](architecture/系统高可用架构.md)
- [系统伸缩性架构](architecture/系统伸缩性架构.md)
- [系统扩展性架构](architecture/系统扩展性架构.md)
- [系统安全性架构](architecture/security/系统安全性架构.md)
- [大型系统核心技术](architecture/大型系统核心技术.md)
- [领域驱动设计](architecture/领域驱动设计.md)

### [分布式系统](distributed)

- [系统原理面试题](distributed/分布式面试.md)
- **基础理论**
  - [分布式理论](distributed/分布式理论.md) - 关键词：`拜占庭将军`、`CAP`、`BASE`
  - [分布式算法 Paxos](distributed/分布式算法Paxos.md) - 关键词：`共识性算法`
  - [分布式算法 Raft](distributed/分布式算法Raft.md) - 关键词：`共识性算法`
  - [分布式算法 Gossip](distributed/分布式算法Gossip.md) - 关键词：`数据传播`
- **核心技术**
  - [负载均衡](distributed/负载均衡.md) - 关键词：`轮询`、`随机`、`最少连接`、`源地址哈希`、`一致性哈希`、`虚拟 hash 槽`
  - [消息队列](distributed/消息队列.md) - 关键词：`重复消费`、`消息丢失`、`消息顺序性`、`消息积压`
  - [分布式存储](distributed/分布式存储.md) - 关键词：`读写分离`、`分库分表`、`迁移`、`扩容`
  - [分布式缓存](distributed/分布式缓存.md) - 关键词：`进程内缓存`、`分布式缓存`、`缓存雪崩`、`缓存穿透`、`缓存击穿`、`缓存更新`、`缓存预热`、`缓存降级`
  - [分布式锁](distributed/分布式锁.md) - 关键词：`数据库`、`Redis`、`ZooKeeper`、`互斥`、`可重入`、`死锁`、`容错`、`自旋尝试`
  - [分布式 ID](distributed/分布式ID.md) - 关键词：`UUID`、`自增序列`、`雪花算法`、`Leaf`
  - [分布式事务](distributed/分布式事务.md) - 关键词：`2PC`、`3PC`、`TCC`、`本地消息表`、`MQ 消息`、`SAGA`
  - [分布式会话](distributed/分布式会话.md) - 关键词：`粘性 Session`、`Session 复制共享`、`基于缓存的 session 共享`
  - [流量控制](distributed/流量控制.md) - 关键词：`计数器法`、`时间窗口法`、`令牌桶法`、`漏桶法`

### [设计模式](pattern)

> 设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

#### 创建型模式

- [简单工厂模式 (Simple Factory)](pattern/简单工厂模式.md)
- [工厂方法模式 (Factory Method)](pattern/工厂方法模式.md)
- [抽象工厂模式 (Abstract Factory)](pattern/抽象工厂模式.md)
- [建造者模式 (Builder)](pattern/建造者模式.md)
- [原型模式 (Prototype)](pattern/原型模式.md)
- [单例模式 (Singleton)](pattern/单例模式.md)

#### 结构型模式

- [适配器模式 (Adapter)](pattern/适配器模式.md)
- [桥接模式 (Bridge)](pattern/桥接模式.md)
- [组合模式 (Composite)](pattern/组合模式.md)
- [装饰模式 (Decorator)](pattern/装饰模式.md)
- [外观模式 (Facade)](pattern/外观模式.md)
- [享元模式 (Flyweight)](pattern/享元模式.md)
- [代理模式 (Proxy)](pattern/代理模式.md)

#### 行为型模式

- [模板方法模式 (Template Method)](pattern/模板方法模式.md)
- [命令模式 (Command)](pattern/命令模式.md)
- [迭代器模式 (Iterator)](pattern/迭代器模式.md)
- [观察者模式 (Observer)](pattern/观察者模式.md)
- [解释器模式 (Interpreter)](pattern/解释器模式.md)
- [中介者模式 (Mediator)](pattern/中介者模式.md)
- [职责链模式 (Chain of Responsibility)](pattern/职责链模式.md)
- [备忘录模式 (Memento)](pattern/备忘录模式.md)
- [策略模式 (Strategy)](pattern/策略模式.md)
- [访问者模式 (Visitor)](pattern/访问者模式.md)
- [状态模式 (State)](pattern/状态模式.md)

### [重构](refactor)

> **改善既有代码的设计**。
>
> 关键词：过长函数、过大的类、基本类型偏执、过长参数列、数据泥团、switch 声明、临时字段、被拒绝的馈赠、异曲同工的类、发散式变化、霰弹式修改、平行继承体系、过多的注释、重复代码、冗余类、纯稚的数据类、夸夸其谈未来性、依恋情结、狎昵关系、过度耦合的消息链、中间人、不完美的库类

- [代码的坏味道和重构](refactor/代码的坏味道和重构.md)
- [代码坏味道之代码臃肿](refactor/代码坏味道之代码臃肿.md)
- [代码坏味道之滥用面向对象](refactor/代码坏味道之滥用面向对象.md)
- [代码坏味道之变革的障碍](refactor/代码坏味道之变革的障碍.md)
- [代码坏味道之非必要的](refactor/代码坏味道之非必要的.md)
- [代码坏味道之耦合](refactor/代码坏味道之耦合.md)

### [UML](uml)

> 统一建模语言（英语 - Unified Modeling Language，缩写 UML）是非专利的第三代建模和规约语言。UML 是一种开放的方法，用于说明、可视化、构建和编写一个正在开发的、面向对象的、软件密集系统的制品的开放方法。UML 展现了一系列最佳工程实践，这些最佳实践在对大规模，复杂系统进行建模方面，特别是在软件架构层次已经被验证有效。

- [UML 快速入门](uml/uml-quickstart.md)
- [UML 结构建模图](uml/UML结构建模图.md)
- [UML 行为建模图](uml/UML行为建模图.md)

## 📚 资料

- **书籍**
  - [《大型网站技术架构：核心原理与案例分析》](https://item.jd.com/11322972.html) - 浅显易懂的将解大型网站架构演进之路；简介了大型系统所面临的挑战以及核心技术点。
  - [《亿级流量网站架构核心技术：跟开涛学搭建高可用高并发系统》](https://item.jd.com/12153914.html)
  - [大型网站系统与 Java 中间件实践](https://item.jd.com/11449803.html)
  - [企业 IT 架构转型之道：阿里巴巴中台战略思想与架构实战](https://item.jd.com/12176278.html) - 阐述阿里巴巴中台系统发展，更多的是讲解应用场景和能力，没有讲解技术细节。
  - [逆流而上：阿里巴巴技术成长之路](https://item.jd.com/12238227.html) - 主要以运维的视角阐述系统运维中遇到的困难，定位思路以及解决方法。
  - [《Head First 设计模式》](https://book.douban.com/subject/2243615/)
  - [《大话设计模式》](https://book.douban.com/subject/2334288/)
  - [《重构——改善既有代码的设计》](https://book.douban.com/subject/4262627/)
- **教程**
  - [system-design-primer](https://github.com/donnemartin/system-design-primer/blob/master/README-zh-Hans.md)
  - [从 0 开始学架构](https://time.geekbang.org/column/intro/100006601)
  - [从 0 开始学微服务](https://time.geekbang.org/column/intro/100014401)
  - [RPC 实战与核心原理](https://time.geekbang.org/column/intro/100046201)
  - [微服务架构核心 20 讲](https://time.geekbang.org/course/intro/100003901)
  - [DDD 实战课](https://time.geekbang.org/column/intro/100037301)
  - [Sparx UML 教程](https://sparxsystems.cn/resources/uml2_tutorial/index.html)
  - [UML Tutorial](https://www.tutorialspoint.com/uml/index.htm)
  - [W3Cschool UML 教程](https://www.w3cschool.cn/uml_tutorial/)
  - https://sourcemaking.com/refactoring

## 🚪 传送

◾ 🏠 [DESIGN 首页](https://github.com/dunwu/design) ◾ 🎯 [我的博客](https://github.com/dunwu/blog) ◾

> 你可能会感兴趣：

- [Java 教程](https://github.com/dunwu/java-tutorial) 📚
- [JavaCore 教程](https://dunwu.github.io/javacore/) 📚
- [JavaTech 教程](https://dunwu.github.io/javatech/) 📚
- [Spring 教程](https://dunwu.github.io/spring-tutorial/) 📚
- [Spring Boot 教程](https://dunwu.github.io/spring-boot-tutorial/) 📚
- [数据库教程](https://dunwu.github.io/db-tutorial/) 📚
- [数据结构和算法教程](https://dunwu.github.io/algorithm-tutorial/) 📚
- [Linux 教程](https://dunwu.github.io/linux-tutorial/) 📚
- [Nginx 教程](https://github.com/dunwu/nginx-tutorial/) 📚

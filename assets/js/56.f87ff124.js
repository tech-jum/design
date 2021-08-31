(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{453:function(t,s,a){"use strict";a.r(s);var n=a(15),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"设计模式之桥接模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计模式之桥接模式"}},[t._v("#")]),t._v(" 设计模式之桥接模式")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#1-%E6%84%8F%E5%9B%BE"}},[t._v("1. 意图")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#2-%E9%80%82%E7%94%A8%E5%9C%BA%E6%99%AF"}},[t._v("2. 适用场景")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#3-%E7%BB%93%E6%9E%84"}},[t._v("3. 结构")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#31-%E7%BB%93%E6%9E%84%E8%AF%B4%E6%98%8E"}},[t._v("3.1. 结构说明")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#32-%E7%BB%93%E6%9E%84%E4%BB%A3%E7%A0%81%E8%8C%83%E5%BC%8F"}},[t._v("3.2. 结构代码范式")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#4-%E4%BC%AA%E4%BB%A3%E7%A0%81"}},[t._v("4. 伪代码")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#5-%E6%A1%88%E4%BE%8B"}},[t._v("5. 案例")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#6-%E4%B8%8E%E5%85%B6%E4%BB%96%E6%A8%A1%E5%BC%8F%E7%9A%84%E5%85%B3%E7%B3%BB"}},[t._v("6. 与其他模式的关系")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#7-%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("7. 参考资料")])])]),t._v(" "),a("h2",{attrs:{id:"_1-意图"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-意图"}},[t._v("#")]),t._v(" 1. 意图")]),t._v(" "),a("p",[a("strong",[t._v("桥接模式")]),t._v(" (Bridge) 是一种结构型设计模式， 可将"),a("strong",[t._v("抽象")]),t._v("部分与"),a("strong",[t._v("实现")]),t._v("部分"),a("strong",[t._v("分离")]),t._v("，使它们都可以独立的变化。")]),t._v(" "),a("p",[t._v("如果一个系统需要在构件的抽象化角色和具体化角色之间增加更多的灵活性，避免在两个层次之间建立静态的联系。抽象化角色和具体化角色都应该可以被子类扩展。在这种情况下，桥接模式可以灵活地组合不同的抽象化角色和具体化角色，并独立化地扩展。")]),t._v(" "),a("p",[t._v("设计要求实现化角色的任何改变不应当影响客户端，或者说实现化角色的改变对客户端是完全透明的。")]),t._v(" "),a("h2",{attrs:{id:"_2-适用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-适用场景"}},[t._v("#")]),t._v(" 2. 适用场景")]),t._v(" "),a("ul",[a("li",[t._v("如果你想要拆分或重组一个具有多重功能的庞杂类（例如能与多个数据库服务器进行交互的类），可以使用桥接模式。")]),t._v(" "),a("li",[t._v("如果你希望在几个独立维度上扩展一个类， 可使用该模式。")]),t._v(" "),a("li",[t._v("如果你需要在运行时切换不同实现方法， 可使用桥接模式。")])]),t._v(" "),a("h2",{attrs:{id:"_3-结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-结构"}},[t._v("#")]),t._v(" 3. 结构")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430154630.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_3-1-结构说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-结构说明"}},[t._v("#")]),t._v(" 3.1. 结构说明")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("抽象部分")]),t._v(" （Abstraction） 提供高层控制逻辑， 依赖于完成底层实际工作的实现对象。")]),t._v(" "),a("li",[a("strong",[t._v("实现部分")]),t._v(" （Implementation） 为所有具体实现声明通用接口。 抽象部分仅能通过在这里声明的方法与实现对象交互。\n"),a("ul",[a("li",[t._v("抽象部分可以列出和实现部分一样的方法， 但是抽象部分通常声明一些复杂行为， 这些行为依赖于多种由实现部分声明的原语操作。")])])]),t._v(" "),a("li",[a("strong",[t._v("具体实现")]),t._v(" （Concrete Implementations） 中包括特定于平台的代码。")]),t._v(" "),a("li",[a("strong",[t._v("精确抽象")]),t._v(" （Refined Abstraction） 提供控制逻辑的变体。 与其父类一样， 它们通过通用实现接口与不同的实现进行交互。")]),t._v(" "),a("li",[t._v("通常情况下， "),a("strong",[t._v("客户端")]),t._v(" （Client） 仅关心如何与抽象部分合作。 但是， 客户端需要将抽象对象与一个实现对象连接起来。")])]),t._v(" "),a("h3",{attrs:{id:"_3-2-结构代码范式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-结构代码范式"}},[t._v("#")]),t._v(" 3.2. 结构代码范式")]),t._v(" "),a("p",[t._v("【Implementor】定义"),a("strong",[t._v("实现接口")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现抽象部分需要的某些具体功能")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operationImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("【Abstraction】定义"),a("strong",[t._v("抽象接口")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("abstract")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Abstraction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 持有一个 Implementor 对象，形成聚合关系")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" implementor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Abstraction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" implementor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("implementor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" implementor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可能需要转调实现部分的具体实现")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        implementor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operationImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("【ConcreteImplementor】实现 "),a("strong",[t._v("Implementor")]),t._v(" 中定义的接口。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteImplementorA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operationImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 真正的实现")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"具体实现A"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteImplementorB")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operationImpl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 真正的实现")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"具体实现B"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("【RefinedAbstraction】扩展 "),a("strong",[t._v("Abstraction")]),t._v(" 类。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefinedAbstraction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Abstraction")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefinedAbstraction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" implementor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("implementor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("otherOperation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 实现一定的功能，可能会使用具体实现部分的实现方法,")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 但是本方法更大的可能是使用 Abstraction 中定义的方法，")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过组合使用 Abstraction 中定义的方法来完成更多的功能。")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("【客户端】")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BridgePattern")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Implementor")]),t._v(" implementor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ConcreteImplementorA")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefinedAbstraction")]),t._v(" abstraction "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RefinedAbstraction")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("implementor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        abstraction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("operation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        abstraction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("otherOperation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("【输出】")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("具体实现A\n其他操作\n")])])]),a("h2",{attrs:{id:"_4-伪代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-伪代码"}},[t._v("#")]),t._v(" 4. 伪代码")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/snap/20210430170020.png",alt:""}})]),t._v(" "),a("p",[t._v("遥控器基类声明了一个指向设备对象的引用成员变量。 所有遥控器通过通用设备接口与设备进行交互， 使得同一个遥控器可以支持不同类型的设备。")]),t._v(" "),a("p",[t._v("你可以开发独立于设备类的遥控器类， 只需新建一个遥控器子类即可。 例如， 基础遥控器可能只有两个按钮， 但你可在其基础上扩展新功能， 比如额外的一节电池或一块触摸屏。")]),t._v(" "),a("p",[t._v("客户端代码通过遥控器构造函数将特定种类的遥控器与设备对象连接起来。")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// “抽象部分”定义了两个类层次结构中“控制”部分的接口。它管理着一个指向“实")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 现部分”层次结构中对象的引用，并会将所有真实工作委派给该对象。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoteControl")]),t._v(" is\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("protected")]),t._v(" field device"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),t._v("\n    constructor "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoteControl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" device\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("togglePower")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" then\n            device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n            device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("volumeDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVolume")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVolume")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("volumeUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVolume")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVolume")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("channelDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("channelUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 你可以独立于设备类的方式从抽象层中扩展类。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AdvancedRemoteControl")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoteControl")]),t._v(" is\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mute")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" is\n        device"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVolume")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// “实现部分”接口声明了在所有具体实现类中通用的方法。它不需要与抽象接口相")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配。实际上，这两个接口可以完全不一样。通常实现接口只提供原语操作，而")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 抽象接口则会基于这些操作定义较高层次的操作。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),t._v(" is\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isEnabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("disable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVolume")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setVolume")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("percent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    method "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setChannel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 所有设备都遵循相同的接口。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tv")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),t._v(" is\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Radio")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Device")]),t._v(" is\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 客户端代码中的某个位置。")]),t._v("\ntv "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nremote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RemoteControl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nremote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("togglePower")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nradio "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Radio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nremote "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AdvancedRemoteControl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("radio"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"_5-案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-案例"}},[t._v("#")]),t._v(" 5. 案例")]),t._v(" "),a("p",[a("strong",[t._v("使用示例：")]),t._v(" 桥接模式在处理跨平台应用、 支持多种类型的数据库服务器或与多个特定种类 （例如云平台和社交网络等） 的 API 供应商协作时会特别有用。")]),t._v(" "),a("p",[a("strong",[t._v("识别方法")]),t._v("： 桥接可以通过一些控制实体及其所依赖的多个不同平台之间的明确区别来进行识别。")]),t._v(" "),a("p",[t._v("Java 中桥接模式应用最经典的代表无疑是日志组件 slf4j 的桥接 jar 包。")]),t._v(" "),a("p",[t._v("假如，你正在开发应用程序所调用的组件当中已经使用了 common-logging，这时你需要 jcl-over-slf4j.jar 把日志信息输出重定向到 slf4j-api，slf4j-api 再去调用 slf4j 实际依赖的日志组件。这个过程称为桥接。下图是官方的 slf4j 桥接策略图：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://raw.githubusercontent.com/dunwu/images/dev/cs/java/javalib/log/slf4j-bind-strategy.png",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"_6-与其他模式的关系"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-与其他模式的关系"}},[t._v("#")]),t._v(" 6. 与其他模式的关系")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("桥接模式"),a("OutboundLink")],1),t._v("通常会于开发前期进行设计， 使你能够将程序的各个部分独立开来以便开发。 另一方面， "),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("适配器模式"),a("OutboundLink")],1),t._v("通常在已有程序中使用， 让相互不兼容的类能很好地合作。")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("桥接"),a("OutboundLink")],1),t._v("、 "),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/state",target:"_blank",rel:"noopener noreferrer"}},[t._v("状态模式"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/strategy",target:"_blank",rel:"noopener noreferrer"}},[t._v("策略模式"),a("OutboundLink")],1),t._v(" （在某种程度上包括"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/adapter",target:"_blank",rel:"noopener noreferrer"}},[t._v("适配器"),a("OutboundLink")],1),t._v("） 模式的接口非常相似。 实际上， 它们都基于"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/composite",target:"_blank",rel:"noopener noreferrer"}},[t._v("组合模式"),a("OutboundLink")],1),t._v("——即将工作委派给其他对象， 不过也各自解决了不同的问题。 模式并不只是以特定方式组织代码的配方， 你还可以使用它们来和其他开发者讨论模式所解决的问题。")]),t._v(" "),a("li",[t._v("你可以将"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/abstract-factory",target:"_blank",rel:"noopener noreferrer"}},[t._v("抽象工厂模式"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("桥接"),a("OutboundLink")],1),t._v("搭配使用。 如果由"),a("em",[t._v("桥接")]),t._v("定义的抽象只能与特定实现合作， 这一模式搭配就非常有用。 在这种情况下， "),a("em",[t._v("抽象工厂")]),t._v("可以对这些关系进行封装， 并且对客户端代码隐藏其复杂性。")]),t._v(" "),a("li",[t._v("你可以结合使用"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/builder",target:"_blank",rel:"noopener noreferrer"}},[t._v("生成器模式"),a("OutboundLink")],1),t._v("和"),a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/bridge",target:"_blank",rel:"noopener noreferrer"}},[t._v("桥接模式"),a("OutboundLink")],1),t._v("： "),a("em",[t._v("主管")]),t._v("类负责抽象工作， 各种不同的"),a("em",[t._v("生成器")]),t._v("负责"),a("em",[t._v("实现")]),t._v("工作。")])]),t._v(" "),a("h2",{attrs:{id:"_7-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-参考资料"}},[t._v("#")]),t._v(" 7. 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/2243615/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Head First 设计模式》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/2334288/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《大话设计模式》"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://refactoringguru.cn/design-patterns/catalog",target:"_blank",rel:"noopener noreferrer"}},[t._v("设计模式教程"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
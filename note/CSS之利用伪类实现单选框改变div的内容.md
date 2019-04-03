最近遇到一个需求——利用伪类和单选框改变div的内容（不能使用JavaScript）。刚刚接到这个需求的时候一脸懵逼，但是还是要做呀！

下面我们来讲一讲实现的步骤，如果想直接看代码请拉到文章最后。

首先我们来谈谈单选框。单选框是表单中的基本类型，我们用`<input type="radio"> `定义单选按钮。其有一个`checked`属性来指定初始选中项。当我们要创建一个具有多个选项的单选框是，我们需要在每个选项中加上相同的`name`属性以表示其为同一类型的选项。如下图代码所示。

![](https://upload-images.jianshu.io/upload_images/13112949-7da17da1130d7aba.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

运行结果如下图所示。

![](https://upload-images.jianshu.io/upload_images/13112949-5b8cffaf5e6d2ef3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后我们来谈谈伪类。我理解的伪类是其给了当前元素第二种表现形式，当该元素满足特定条件时执行伪类中的样式。

那么问题来了，伪类不是只能给当前元素添加新样式吗？为什么还能改变其他`div`呢？下面我们隆重介绍一下兄弟选择器（`+`选择器、`~`选择器）。

兄弟元素：具有相同父元素的同级元素。

`+`选择器（相邻兄弟选择器）：选择紧接在指定元素后的兄弟元素。

`~`选择器（兄弟选择器）:选择指定元素的后面的所有兄弟元素。

为了更好的使用+选择器和~选择器，我们看一下下图这个例子。

![](https://upload-images.jianshu.io/upload_images/13112949-4deaec33cf235631.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

运行结果如下图所示

![](https://upload-images.jianshu.io/upload_images/13112949-1e9fc1ed8045557d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

准备好了以上的只是我们就可以开始我们的工作啦，废话少说，上代码

![](https://upload-images.jianshu.io/upload_images/13112949-fa1a899389d3940e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

结果如下

![](https://upload-images.jianshu.io/upload_images/13112949-ea44bb136aeef626.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

当然，也可以用 `~`选择器实现上述的功能，大家可以自己尝试一下~

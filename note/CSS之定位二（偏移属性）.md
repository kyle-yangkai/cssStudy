本文我们接着之前的定位话题来展开讨论偏移属性。偏移属性理解起来其实很简单，就是负责告诉浏览器元素相对于父元素的偏移位置。这里要说明两点：1、偏移属性只对定位元素（即`position`值不是`static`的元素）有效；2、这里的父元素是上篇文章[css之定位一（position属性）](https://www.jianshu.com/p/a6913eb23b3d)中谈论的父元素。
偏移属性有`top`、`bottom`、`lef`、`right`四个属性，其属性值各自对应`length`、`percentage`、`auto`、`inherit`四种（即长度值、百分比、自动、继承）。
定位元素可以包含在父元素里面，也可以在父元素外面（偏移属性值为负）；偏移属性能确定定位元素宽高。这些大家可以自己尝试写下代码测试，在此不做过多的叙述。本文想要讨论两个容易忽略的点：1、当定位元素`position`值为`relative`，父元素`position`值也为`relative`且定位元素宽高大于父元素宽高是，定位元素对文档布局是否有影响？2、当定位元素设置的宽高与偏移属性所确定的宽高发生冲突时，定位元素的宽高以哪个属性为准？
首先解决第一个问题。由图1我们可以看出：定位元素只是在父元素内部位置发生偏移，对父元素所在的文档流没有造成影响。

 ![图1：定位元素对父元素文档流的影响](https://upload-images.jianshu.io/upload_images/13112949-42089da4491d75f3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

然后我们来解决第二个问题。通常我们取定位元素的`position`值为`absolut`，这样能较为简单展示偏移属性的工作机制。由图2的三组对照我们可以看出当定位元素未设置宽高或者宽高为`auto`时，偏移属性确定定位元素的宽高，当其有设置具体的宽高值时，偏移属性对定位元素的宽高无影响。 

![图2：三组对照](https://upload-images.jianshu.io/upload_images/13112949-bee595668d9bf04f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

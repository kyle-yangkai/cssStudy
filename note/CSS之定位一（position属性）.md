本文我们讨论涉及定位的`position`属性。首先我们来看一下`position`对应的值及其含义（表1）。

 ![表1：position对应值](https://upload-images.jianshu.io/upload_images/13112949-a3e694db874c198d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

其中`static`是默认值，当元素未定义`position`或定义`position`值为`static`时，该元素内定义的`top`, `bottom`, `left`, `righ` 和 `z-index`无效。

`relative`表示相对定位，在文档流中仍然占有空间，其参考对象是离该元素最近的父元素。图1表示父元素的`position`值变化时，子元素（`position=relative`）与父元素的相对位置，由图可以看出其相对位置不随父元素的`position`值变化而变化。

![图1：父元素position变化时对子元素（position=relative）位置的影响g](https://upload-images.jianshu.io/upload_images/13112949-6c176758d7950758.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

图1中外框和除`position`属性值不一样外，其他`css`属性均一致，其内外框`htm`l和相同部分`css`见图2。

![图2：内外框html和相同部分css](https://upload-images.jianshu.io/upload_images/13112949-53caa19193671d22.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

`absolute`表示绝对位置，其在文档流中不占空间，其参考对象是离该元素最近的position值不是static的父元素。由图3可以看出。

![图3：父元素position变化时对子元素（position=absolute）位置的影响](https://upload-images.jianshu.io/upload_images/13112949-dc51e7cc46fa449d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

图3中外框和除`position`属性值不一样外，其他css属性均一致。其内外框html和相同部分css见图4。

![图4：内外框html和相同部分css](https://upload-images.jianshu.io/upload_images/13112949-facef80a492d7869.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

值得注意的是，当其父元素`position`值均为`static`或者未定义时，其参考对象应该是`document`（浏览器视窗大小的矩形）而不是网上所说的`body`元素或者`html`元素。为验证以上说法 我们设置下面三组对照，代码如图5所示，其中`.fixed`和`.absolute`的`css`样式如图6所示。`.absolute`始终完全覆盖在`.fixed`上，由此可见`.absolute`的位置没有随`html`元素和`body`元素的变化而变化，因此其参考对象不是`body`元素或者`html`元素。

![图5：三组对照](https://upload-images.jianshu.io/upload_images/13112949-7133bce3ce486abc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![图6：.fixed和.absolute的css样式](https://upload-images.jianshu.io/upload_images/13112949-93de28d55da61d0f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

`fixed`表示固定定位，类似于`absolute`，但是其是根据浏览器窗口定位的。

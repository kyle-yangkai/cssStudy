`px`、`em`、`rem`都是计量单位，都能表示尺寸，但是有有所不同，而且其各有各的优缺点。
`px`表示“绝对尺寸”（并非真正的绝对），实际上就是css中定义的像素（此像素与设备的物理像素有一定的区别，后续详细说明见文末说明1），利用`px`设置字体大小及元素宽高等比较稳定和精确。`px`的缺点是其不能适应浏览器缩放时产生的变化，因此一般不用于响应式网站。
`em`表示相对尺寸，其相对于当前对象内文本的`ont-size`（如果当前对象内文本的`font-size`计量单位也是`em`，则当前对象内文本的`font-size`的参考对象为父元素文本`font-size`）。使用em可以较好的相应设备屏幕尺寸的变化，但是在进行元素设置时都需要知道父元素文本的`font-size`及当前对象内文本的`font-size`，如有遗漏可能会导致错误。
`rem`也表示相对尺寸，其参考对象为根元素`html`的`font-size`，因此只需要确定这一个`font-size`。
表1表示在不同环境下em和rem换算成的px。
 ![表1：em、rem换算px表](https://github.com/kyle-yangkai/images/raw/master/20180704-css-px%2Cem%2Crem%E8%81%94%E7%B3%BB%E4%B8%8E%E5%8C%BA%E5%88%AB/%E8%AE%BE%E7%BD%AE%E5%AF%B9%E7%85%A7.jpg)

以下为实例展示。（只显示相关代码，`html`设定`ont-size=15px`）
相关代码如下：
```
<div style="width:50%; border: 1px solid #000000;">
第一组
<h1 style="height: 4em;width: 10em; border: 1px solid #000000;">
h1节点 em测试
</h1>
<h1 style="height: 4rem;width: 10rem; border: 1px solid #000000;">
h1节点 rem测试
</h1>
</div>
```

```
<div style="width:50%; border: 1px solid #000000; font-size:20px;">
第二组
<h1 style="height: 4em;width: 10em; border: 1px solid #000000;">
h1节点 em测试
</h1>
<h1 style="height: 4rem;width: 10rem; border: 1px solid #000000;">
h1节点 rem测试
</h1>
</div>
```

```
<div style="width:50%; border: 1px solid #000000; font-size:20px;">
第三组
<h1 style="height: 4em;width: 10em; font-size:1em;border: 1px solid #000000;">
h1节点 em测试
</h1>
<h1 style="height: 4rem;width: 10rem;font-size: 1rem; border: 1px solid #000000;">
h1节点 rem测试
</h1>
</div>
```
结果如图1所示：
 ![图1：测试结果](https://github.com/kyle-yangkai/images/raw/master/20180704-css-px%2Cem%2Crem%E8%81%94%E7%B3%BB%E4%B8%8E%E5%8C%BA%E5%88%AB/%E6%B5%8B%E8%AF%95%E7%BB%93%E6%9E%9C.png)

说明1：以上所述`px`为css中定义的像素（以下简称css像素），与实际的物理像素是有区别的，早期电脑屏幕的物理像素与css像素相同，但是随着科技的发展，高精度屏幕开始出现在人们的视野中。以iPhone的Retina屏为例，其物理像素与css像素关系见图2。
![图2：Retina屏物理像素与css像素关系图](https://github.com/kyle-yangkai/images/raw/master/20180704-css-px%2Cem%2Crem%E8%81%94%E7%B3%BB%E4%B8%8E%E5%8C%BA%E5%88%AB/%E7%89%A9%E7%90%86%E5%83%8F%E7%B4%A0%E5%92%8Ccss%E5%83%8F%E7%B4%A0.png)

为此移动端浏览器以及某些桌面浏览器引入了`devicePixelRatio（DPR）`属性，其官方的定义为：设备物理像素和设备独立像素的比例，也就是 `devicePixelRatio = 物理像素 / 独立像素`。而`css像素=独立像素`，由此我们可以得出 `devicePixelRatio = 物理像素 / css像素`，进而可以推算出该设备上一个css像素代表几个物理像素。例如iPhone的retina屏的`devicePixelRatio = 2`，那么该设备上一个css像素相当于2个物理像素。了解更多像素相关知识，可以参考 https://github.com/jawil/blog/issues/21。


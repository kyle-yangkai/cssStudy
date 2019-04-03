ie8不支持css中的阴影和圆角，因此我们采用插件`pie.htc`（下载链接：[http://pan.baidu.com/s/1mhRS7Le ](http://pan.baidu.com/s/1mhRS7Le)密码：cd3n）来实现。

下载完成添加到项目中，建议放在js或者css文件夹里面，编写css时在需要做兼容的地方加上“behavior:url(pie.htc路径);”，示例代码如图1所示：

![图1：示例代码](https://github.com/kyle-yangkai/images/raw/master/20180711-css-ie8%E5%85%BC%E5%AE%B9%E5%9C%86%E8%A7%92%E3%80%81%E9%98%B4%E5%BD%B1/ie8%E5%85%BC%E5%AE%B9.png)

Ie8真机测试结果如图2所示。

![图2：测试结果](https://github.com/kyle-yangkai/images/raw/master/20180711-css-ie8%E5%85%BC%E5%AE%B9%E5%9C%86%E8%A7%92%E3%80%81%E9%98%B4%E5%BD%B1/%E6%B5%8B%E8%AF%95%E7%BB%93%E6%9E%9C.png)

使用`pie.htc`需要注意以下几点：

1．添加`pie.htc`时路径是相对于当前`htm`l的而不是相对于`css`的，从图1示例代码可以看出。在此我们可以使用根路径`/css/pie.htc`，这样不用考虑`html`、`css`和`pie.htc`的相对位置。

2\. 项目需要在服务器或者本地服务器上运行才有效果 。

3.给`div`添加阴影时必须给`div`加上背景，否则`div`内部也全是阴影。

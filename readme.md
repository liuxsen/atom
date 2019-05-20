# 原子类库

## 开发

原子类库的维护，直接编写 `src` 目录下的四个 `scss` 文件即可。完成编写后，在根目录下执行 `gulp` 命令。

`src` 目录下，有四个文件分别是：

* `atom-common.scss`，通用原子类
* `atom-pc.scss`，pc 端原子类
* `atom-h5.scss`，移动端原子类
* `atom-wxapp.scss`，小程序原子类

`gulp` 命令执行的内容是：

* 删除 `dist/` 文件夹内的所有内容
* 将 `src/` 文件夹内的 `.scss` 文件编译成 `.css` 文件，按照固定大小做切割处理，压缩后存放在 `dist/` 中
* 重命名 `atom-common.css`、`atom-pc.css`、`atom-h5.css`、`atom-wxapp.css`，为 `atom-common.min.css`、`atom-pc.min.css`、`atom-h5.min.css`、`atom-wxapp.min.css`
* 删除 `atom-common.css`、`atom-pc.css`、`atom-h5.css`、`atom-wxapp.css`

## 基础原子类

具有单位的原子类，有三种应用场景：pc、h5、小程序，因此分成了三个文件：`atom-pc.scss`, `atom-h5.scss`, `atom-wxapp.scss`。

### pc 端原子类

<p class="tip">
切割后是 5 个文件，分别是：`atom-pc.[1~4].min.css` 和 `atom-pc.min.css`。每个文件 gzip + min 不大于 22 KB，总大小约：gzip + min 85 KB
</p>

#### margin

范围：0 ~ 750

分组：

* `margin`
* `margin-left`
* `margin-right`
* `margin-top`
* `margin-bottom`
* `margin-left & margin-right`
* `margin-top & margin-bottom`

scss 如下：

```scss
@for $i from 0 through 750 {
  .m-#{$i} {
    margin: $i * 1px;
  }
  .ml-#{$i} {
    margin-left: $i * 1px;
  }
  .mr-#{$i} {
    margin-right: $i * 1px;
  }
  .mt-#{$i} {
    margin-top: $i * 1px;
  }
  .mb-#{$i} {
    margin-bottom: $i * 1px;
  }
  .mlr-#{$i} {
    margin-left: $i * 1px;
    margin-right: $i * 1px;
  }
  .mtb-#{$i} {
    margin-top: $i * 1px;
    margin-bottom: $i * 1px;
  }
}
```

#### padding

范围：0 ~ 750

分组：

* `padding`
* `padding-left`
* `padding-right`
* `padding-top`
* `padding-bottom`
* `padding-left & padding-right`
* `padding-top & padding-bottom`

```scss
@for $i from 0 through 750 {
  .p-#{$i} {
    padding: $i * 1px;
  }
  .pl-#{$i} {
    padding-left: $i * 1px;
  }
  .pr-#{$i} {
    padding-right: $i * 1px;
  }
  .pb-#{$i} {
    padding-bottom: $i * 1px;
  }
  .pt-#{$i} {
    padding-top: $i * 1px;
  }
  .plr-#{$i} {
    padding-left: $i * 1px;
    padding-right: $i * 1px;
  }
  .ptb-#{$i} {
    padding-top: $i * 1px;
    padding-bottom: $i * 1px;
  }
}
```

#### border

范围：0 ~ 50

分组：

* `border-radius`
* `border-width`
* `border-top-width`
* `border-bottom-width`
* `border-top-width & border-bottom-width`
* `border-left-width`
* `border-right-width`
* `border-left-width & border-right-width`

```scss
@for $i from 0 through 50 {
  .rounded-#{$i} {
    border-radius: $i * 1px;
  }
  .bd-#{$i} {
    border-width: $i * 1px;
  }
  .bdt-#{$i} {
    border-top-width: $i * 1px;
  }
  .bdb-#{$i} {
    border-bottom-width: $i * 1px;
  }
  .bdtb-#{$i} {
    border-top-width: $i * 1px;
    border-bottom-width: $i * 1px;
  }
  .bdr-#{$i} {
    border-right-width: $i * 1px;
  }
  .bdl-#{$i} {
    border-left-width: $i * 1px;
  }
  .bdlr-#{$i} {
    border-left-width: $i * 1px;
    border-right-width: $i * 1px;
  }
}
```

#### 宽高度

范围：0 ~ 750，0% ~ 100%

分组：

* `width`
* `height`

```scss
@for $i from 0 through 750 {
  .w-#{$i} {
    width: $i * 1px;
  }
  .h-#{$i} {
    height: $i * 1px;
  }
}

@for $i from 0 through 100 {
  .w-p#{$i} {
    width: $i * 1%;
  }
  .h-p#{$i} {
    height: $i * 1%;
  }
}
```

#### 四方向

范围：0 ~ 750

分组：

* `left`
* `right`
* `top`
* `bottom`

```scss
@for $i from 0 through 750 {
  .r-#{$i} {
    right: $i * 1px;
  }
  .l-#{$i} {
    left: $i * 1px;
  }
  .t-#{$i} {
    top: $i * 1px;
  }
  .b-#{$i} {
    bottom: $i * 1px;
  }
}
```

#### 行高

范围：0 ~ 750

分组：

* `line-height`

```scss
@for $i from 0 through 750 {
  .lh-#{$i} {
    line-height: $i * 1px;
  }
}
```

#### 字体

范围：0 ~ 100，0 ~ 6

分组：

* `font-size`
* `font-weight`

```scss
@for $i from 0 through 100 {
  .fs-#{$i} {
    font-size: $i * 1px;
  }
}

@for $i from 0 through 6 {
  .fw-#{$i}00 {
    font-weight: $i * 100;
  }
}
```

### h5 原子类

<p class="tip">
切割后是 3 个文件，分别是：`atom-h5.[1~2].min.css` 和 `atom-h5.min.css`。每个文件 gzip + min 不大于 22 KB
</p>

#### margin

范围：0 ~ 350

分组：

* `margin`
* `margin-left`
* `margin-right`
* `margin-top`
* `margin-bottom`
* `margin-left & margin-right`
* `margin-top & margin-bottom`

scss 如下：

```scss
@for $i from 0 through 350 {
  .m-#{$i} {
    margin: $i * 0.01rem;
  }
  .ml-#{$i} {
    margin-left: $i * 0.01rem;
  }
  .mr-#{$i} {
    margin-right: $i * 0.01rem;
  }
  .mt-#{$i} {
    margin-top: $i * 0.01rem;
  }
  .mb-#{$i} {
    margin-bottom: $i * 0.01rem;
  }
  .mlr-#{$i} {
    margin-left: $i * 0.01rem;
    margin-right: $i * 0.01rem;
  }
  .mtb-#{$i} {
    margin-top: $i * 0.01rem;
    margin-bottom: $i * 0.01rem;
  }
}
```

#### padding

范围：0 ~ 350

分组：

* `padding`
* `padding-left`
* `padding-right`
* `padding-top`
* `padding-bottom`
* `padding-left & padding-right`
* `padding-top & padding-bottom`

```scss
@for $i from 0 through 350 {
  .p-#{$i} {
    padding: $i * 0.01rem;
  }
  .pl-#{$i} {
    padding-left: $i * 0.01rem;
  }
  .pr-#{$i} {
    padding-right: $i * 0.01rem;
  }
  .pb-#{$i} {
    padding-bottom: $i * 0.01rem;
  }
  .pt-#{$i} {
    padding-top: $i * 0.01rem;
  }
  .plr-#{$i} {
    padding-left: $i * 0.01rem;
    padding-right: $i * 0.01rem;
  }
  .ptb-#{$i} {
    padding-top: $i * 0.01rem;
    padding-bottom: $i * 0.01rem;
  }
}
```

#### border

范围：0 ~ 50

分组：

* `border-radius`
* `border-width`
* `border-top-width`
* `border-bottom-width`
* `border-top-width & border-bottom-width`
* `border-left-width`
* `border-right-width`
* `border-left-width & border-right-width`

```scss
@for $i from 0 through 50 {
  .rounded-#{$i} {
    border-radius: $i * 0.01rem;
  }
  .bd-#{$i} {
    border-width: $i * 0.01rem;
  }
  .bdt-#{$i} {
    border-top-width: $i * 0.01rem;
  }
  .bdb-#{$i} {
    border-bottom-width: $i * 0.01rem;
  }
  .bdtb-#{$i} {
    border-top-width: $i * 0.01rem;
    border-bottom-width: $i * 0.01rem;
  }
  .bdr-#{$i} {
    border-right-width: $i * 0.01rem;
  }
  .bdl-#{$i} {
    border-left-width: $i * 0.01rem;
  }
  .bdlr-#{$i} {
    border-left-width: $i * 0.01rem;
    border-right-width: $i * 0.01rem;
  }
}
```

#### 宽高度

范围：0 ~ 750，0% ~ 100%

分组：

* `width`
* `height`

```scss
@for $i from 0 through 750 {
  .w-#{$i} {
    width: $i * 0.01rem;
  }
  .h-#{$i} {
    height: $i * 0.01rem;
  }
}

@for $i from 0 through 100 {
  .w-p#{$i} {
    width: $i * 1%;
  }
  .h-p#{$i} {
    height: $i * 1%;
  }
}
```

#### 四方向

范围：0 ~ 750

分组：

* `left`
* `right`
* `top`
* `bottom`

```scss
@for $i from 0 through 750 {
  .r-#{$i} {
    right: $i * 0.01rem;
  }
  .l-#{$i} {
    left: $i * 0.01rem;
  }
  .t-#{$i} {
    top: $i * 0.01rem;
  }
  .b-#{$i} {
    bottom: $i * 0.01rem;
  }
}
```

#### 行高

范围：0 ~ 750

分组：

* `line-height`

```scss
@for $i from 0 through 750 {
  .lh-#{$i} {
    line-height: $i * 0.01rem;
  }
}
```

#### 字体

范围：0 ~ 100，0 ~ 6

分组：

* `font-size`
* `font-weight`

```scss
@for $i from 0 through 100 {
  .fs-#{$i} {
    font-size: $i * 0.01rem;
  }
}

@for $i from 0 through 6 {
  .fw-#{$i}00 {
    font-weight: $i * 100;
  }
}
```

### 小程序原子类

<p class="tip">
切割后是 3 个文件，分别是：`atom-wxapp.[1~2].min.css` 和 `atom-wxapp.min.css`。每个文件 gzip + min 不大于 22 KB
</p>

#### margin

范围：0 ~ 350

分组：

* `margin`
* `margin-left`
* `margin-right`
* `margin-top`
* `margin-bottom`
* `margin-left & margin-right`
* `margin-top & margin-bottom`

scss 如下：

```scss
@for $i from 0 through 350 {
  .m-#{$i} {
    margin: $i * 0.01rpx;
  }
  .ml-#{$i} {
    margin-left: $i * 0.01rpx;
  }
  .mr-#{$i} {
    margin-right: $i * 0.01rpx;
  }
  .mt-#{$i} {
    margin-top: $i * 0.01rpx;
  }
  .mb-#{$i} {
    margin-bottom: $i * 0.01rpx;
  }
  .mlr-#{$i} {
    margin-left: $i * 0.01rpx;
    margin-right: $i * 0.01rpx;
  }
  .mtb-#{$i} {
    margin-top: $i * 0.01rpx;
    margin-bottom: $i * 0.01rpx;
  }
}
```

#### padding

范围：0 ~ 350

分组：

* `padding`
* `padding-left`
* `padding-right`
* `padding-top`
* `padding-bottom`
* `padding-left & padding-right`
* `padding-top & padding-bottom`

```scss
@for $i from 0 through 350 {
  .p-#{$i} {
    padding: $i * 0.01rpx;
  }
  .pl-#{$i} {
    padding-left: $i * 0.01rpx;
  }
  .pr-#{$i} {
    padding-right: $i * 0.01rpx;
  }
  .pb-#{$i} {
    padding-bottom: $i * 0.01rpx;
  }
  .pt-#{$i} {
    padding-top: $i * 0.01rpx;
  }
  .plr-#{$i} {
    padding-left: $i * 0.01rpx;
    padding-right: $i * 0.01rpx;
  }
  .ptb-#{$i} {
    padding-top: $i * 0.01rpx;
    padding-bottom: $i * 0.01rpx;
  }
}
```

#### border

范围：0 ~ 50

分组：

* `border-radius`
* `border-width`
* `border-top-width`
* `border-bottom-width`
* `border-top-width & border-bottom-width`
* `border-left-width`
* `border-right-width`
* `border-left-width & border-right-width`

```scss
@for $i from 0 through 50 {
  .rounded-#{$i} {
    border-radius: $i * 0.01rpx;
  }
  .bd-#{$i} {
    border-width: $i * 0.01rpx;
  }
  .bdt-#{$i} {
    border-top-width: $i * 0.01rpx;
  }
  .bdb-#{$i} {
    border-bottom-width: $i * 0.01rpx;
  }
  .bdtb-#{$i} {
    border-top-width: $i * 0.01rpx;
    border-bottom-width: $i * 0.01rpx;
  }
  .bdr-#{$i} {
    border-right-width: $i * 0.01rpx;
  }
  .bdl-#{$i} {
    border-left-width: $i * 0.01rpx;
  }
  .bdlr-#{$i} {
    border-left-width: $i * 0.01rpx;
    border-right-width: $i * 0.01rpx;
  }
}
```

#### 宽高度

范围：0 ~ 750，0% ~ 100%

分组：

* `width`
* `height`

```scss
@for $i from 0 through 750 {
  .w-#{$i} {
    width: $i * 0.01rpx;
  }
  .h-#{$i} {
    height: $i * 0.01rpx;
  }
}

@for $i from 0 through 100 {
  .w-p#{$i} {
    width: $i * 1%;
  }
  .h-p#{$i} {
    height: $i * 1%;
  }
}
```

#### 四方向

范围：0 ~ 750

分组：

* `left`
* `right`
* `top`
* `bottom`

```scss
@for $i from 0 through 750 {
  .r-#{$i} {
    right: $i * 1rpx;
  }
  .l-#{$i} {
    left: $i * 1rpx;
  }
  .t-#{$i} {
    top: $i * 1rpx;
  }
  .b-#{$i} {
    bottom: $i * 1rpx;
  }
}
```

#### 行高

范围：0 ~ 750

分组：

* `line-height`

```scss
@for $i from 0 through 750 {
  .lh-#{$i} {
    line-height: $i * 1rpx;
  }
}
```

#### 字体

范围：0 ~ 100，0 ~ 6

分组：

* `font-size`
* `font-weight`

```scss
@for $i from 0 through 100 {
  .fs-#{$i} {
    font-size: $i * 1rpx;
  }
}

@for $i from 0 through 6 {
  .fw-#{$i}00 {
    font-weight: $i * 100;
  }
}
```

## 通用原子类

不具有单位，各端通用：`atom-commom.scss`。

<p class="tip">
gzip + min 1KB
</p>

### 水平垂直居中

```scss
// 通用水平垂直居中
.vh-parent {
  position: relative;
}
.v {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.h {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.vh {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### 单行和多行省略

```scss
// 单行省略
.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
// 多行省略 2 ~ 5
@for $i from 2 through 10 {
  .text-ellipsis-#{$i} {
    overflow : hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: $i;
    -webkit-box-orient: vertical;
  }
}
```

### 水平滑动

```scss
// 水平滑动
.h-scroll {
  overflow-x: scroll;
  width: 100%;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
```

### 折行

```scss
// 折行
.word-wrap {
  white-space: pre-wrap;
  word-wrap: break-word;
  word-break: break-all;
}
```

### 禁止事件

```scss
// 禁止事件
.event-disabled {
  pointer-events: none;
}
```

### 背景色

```scss
// 通用背景色
.bg-white {
  background-color: white;
}
.bg-yellow {
  background-color: yellow;
}
.bg-blue {
  background-color: blue;
}
.bg-green {
  background-color: green;
}
.bg-red {
  background-color: red;
}
.bg-black {
  background-color: black;
}

```

### 字体色

```scss
// 通用字体色
.color-white {
  color: white;
}
.color-black {
  color: black;
}
```

### 字体位置

```scss
// text-align
.text-center {
  text-align: center;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
```

### display

```scss
// display
.dspl-inbl {
  display: inline-block;
}
.dspl-bl {
  display: block;
}
```

### vertical-align

```scss
// vertical-align
.vtal-md {
  vertical-align: middle;
}
.vtal-bt {
  vertical-align: bottom;
}
.vtal-top {
  vertical-align: top;
}
```

### float

```scss
// float
.fl-right {
  float: right;
}
.fl-left {
  float: left;
}
```

### box-sizing

```scss
// box-sizing
.bs-ct {
  box-sizing: content-box;
}
.bs-bd {
  box-sizing: border-box;
}
```

### position

```scss
// position
.pst-rlt {
  position: relative;
}
.pst-absl {
  position: absolute;
}
.pst-fx {
  position: fixed;
}
```

### overflow

```scss
// overflow
.ovfl-hd {
  overflow: hidden;
}
.ovfl-scroll {
  overflow: scroll;
}
.ovfl-vsb {
  overflow: visible;
}
.ovfl-x-hd {
  overflow-x: hidden;
}
.ovfl-x-scroll {
  overflow-x: scroll;
}
.ovfl-y-hd {
  overflow-y: hidden;
}
.ovfl-y-scroll {
  overflow-y: scroll;
}
```

### border-style

```scss
// border-style
.bd-solid {
  border-style: solid;
}
```

### 清除浮动

```scss
.cl-b {
  clear: both;
}
.cl-l {
  clear: left;
}
.cl-r {
  clear: right;
}
```

这是什么
-------

之前帮一些朋友写了个脚本备份他们的即刻动态，得到了这么一个目录结构，其中 data.json 就是即刻 API 的原样返回，可能有 pictures, video, linkInfo, topic, target 等等 fields。

```
{screenName}_{username}
- {actionTime}${id}
--- data.json
--- xxx.jpg
- {actionTime}${id}
--- data.json
--- video.json
--- xxx.mp4
- {actionTime}${id}
--- data.json
...
```

这种东西肯定不具备可读性，所以最好能转换成 HTML。那么就 Hugo 好了，于是有了这个主题。

使用方法
-------

参考：

```
root_dir
- content
--- posts
----- {actionTime}${id} #目录名不重要
------- index.md
------- data.json
----- {actionTime}${id} #目录名不重要
------- index.md
------- data.json
------- video.json
----- ...
--- tags
----- {topic.content}
------- _index.md
----- {topic.content}
------- _index.md
----- ...
- static/s
--- xxx.jpg
--- xxx.mp4
--- xxx.png
--- ...
```

1. 移动全部媒体文件到 static/s
2. 为每个 data.json 创建对应的 index.md

### index.md

``` markdown
---
title: "..."
slug: "{id}" # 或者其它什么唯一值，id 比较简洁
draft: false
tags:
  - {topic.content}
---

{content}
```

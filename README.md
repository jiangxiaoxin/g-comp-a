# Vue 3 + Typescript + Vite

a npm package demo for vue3.0 + typescript + vite


## how to use ?

```
// in *.vue
// 单独注册 GCompA 组件并使用
import { GCompA } from 'g-comp-a'

components: {
   GCompA
},

<GCompA :msg="count" @click-btn="clickHandler"/>

or

// in main.ts
// 统一注册 g-comp-a 内的所有组件后，在其他地方使用
import GComp from 'g-comp-a'

app.use(GComp)

and then in *.vue

<GCompA :msg="count" @click-btn="clickHandler"/>
```

## next

继续扩展，就会得到一个组件库

## tips

`package.json`里指定的`main`是`dist/g-comp-a.umd.js`，那么`.d.ts`就放在同目录下，叫`g-comp-a.umd.d.ts`

<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h1>{{details()}}</h1>

    // Vue.js 模板语法
    <div v-html="htmlmsg"></div>
    <label for="r1">修改颜色</label><input type="checkbox" v-model="useclass1" id="r1">
    <br><br>
    <div v-bind:class="{'class1':useclass1}"> v-bind:class directions</div>

    {{5+5}}<br>
    {{isok ? 'YES':'NO'}}<br>
    {{message.split('').reverse().join('')}}

    <div v-bind:id="'list-' + myid">vue javascript</div>

    <p v-if="seen">now you're able to see me</p>
    <label for="r1">click to change</label><input type="checkbox" v-model="seen" id="r2">

    <pre><a v-bind:href="url" v-on:click="doSomething">urls</a></pre>

    <p>{{ inputmessage}}</p>
    <input v-model="inputmessage"/>

    <p>{{reversestr}}</p>
    <button v-on:click="reverseMessage"> reverse</button><br>

    {{ formatmsg | msgUpperCase}}
    <div v-bind:id="formatmsg | msgUpperCase"> id中也可以format</div>
    {{ formatmsg | msgUpperCase | filterAcceptParam(' can pass parameters')}}

    // Vue.js 为两个最为常用的指令提供了特别的缩写：
    <a :href="url">v-bind:href 缩写</a>
    <a @click="doSomething">v-on:click缩写</a>

    // Vue.js 条件与循环
    // 条件判断
    <p v-if="seenOrNot"> now you see me</p>
    <template v-if="seenOrNot">
      <h1>see 1</h1>
      <p>see 2</p>
    </template>

    <div v-if="Math.random() > 0.5">
      random less than 0.5
    </div>
    <div v-else>
      random > 0.5
    </div>

    <div v-if="type === 'A'">A</div>
    <div v-else-if="type === 'B'">B</div>
    <div v-else-if="type === 'C'">C</div>
    <div v-else>not A/B/C</div>

    <h1 v-show="seenOrNot">v-show is true</h1>

    // 循环语句
    <ol>
      <li v-for="site in sites" v-bind:key="site.name">{{site.name}}</li>
    </ol>

    <template v-for="site in sites">
      <li v-bind:key="site.name">{{site.name}}</li>
    </template>

    <ul>
      <li v-for="value in myobject" v-bind:key="value">{{value}}</li>
    </ul>

    <ul>
      <li v-for="(value,key,index) in myobject">
        {{ index }}. {{key}}. {{value}}
      </li>
    </ul>

    <ul>
      <li v-for="n in 10">{{n}}</li>
    </ul>

    // Vue.js 计算属性
    {{ reversestr.split('').reverse().join('')}}
    <p>原始字符:{{reversestr}}</p>
    <p>计算反转后： {{afterreverse}}</p>

    // Vue.js 监听属性
    <p style="font-size:25px">计数器：</p>
    <button @click="counter++" style="font-size:25px">click me</button>

    // Vue.js 样式绑定
    <div v-bind:class="{'class1':useclass1}"> v-bind:class directions</div>

    // 实际class static active text-danger
    <div class="static" v-bind:class="{active:useclass1, 'text-danger':hasError}"> 实际class static active text-danger</div>

    //我们也可以直接绑定数据里的一个对象：
    <div v-bind:class="classObject">我们也可以直接绑定数据里的一个对象</div>

    //我们也可以直接绑定数据里的一个对象：
    <div v-bind:class="classObjectInComputed">我们也可以直接绑定数据里的一个对象classObjectInComputed</div>

    <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">在 v-bind:style 直接设置样式：</div>

    // Vue.js 事件处理器
    <button @click="counter += 1">click add 1</button>
    <p> button click {{counter}} times</p>

    // 使用一个方法来调用 JavaScript 方法。
    // v-on 可以接收一个定义的方法来调用。
    <button v-on:click="greet">Greet</button>

    //除了直接绑定到一个方法，也可以用内联 JavaScript 语句：
    <button @click="say('hi')"> say hi</button>
    <button @click="say('what')"> say what?</button>

    <!-- 阻止单击事件冒泡 -->
     <a v-on:click.stop="doThis">阻止单击事件冒泡</a><br>
    <!-- 提交事件不再重载页面 -->
     <form v-on:submit.prevent="onSubmit">提交事件不再重载页面</form><br>
    <!-- 修饰符可以串联  -->
     <a v-on:click.stop.prevent="doThat"> 修饰符可以串联</a><br>
    <!-- 只有修饰符 -->
     <form v-on:submit.prevent>只有修饰符</form><br>
    <!-- 添加事件侦听器时使用事件捕获模式 -->
     <div v-on:click.capture="doThis">添加事件侦听器时使用事件捕获模式 </div><br>
    <!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
     <div v-on:click.self="doThat">只当事件在该元素本身（而不是子元素）触发时触发回调</div><br>

    <!-- click 事件只能点击一次，2.1.4版本新增 -->
     <a v-on:click.once="doThis">lick 事件只能点击一次，2.1.4版本新增</a><br>

    //按键修饰符
    // Vue 允许为 v-on 在监听键盘事件时添加按键修饰符：
    <!-- 同上 -->
    <input v-on:keyup.enter="submit">
    <!-- 缩写语法 -->
    <input @keyup.enter="submit">br>

    // Vue.js 表单
    <p>input 元素：</p>
    <input v-model="message" placeholder="edit"/>
    <p> message is :{{message}}</p>
    <p>textarea 元素：</p>
    <p style="white-space: pre">{{message2}}</p>
    <textarea v-model="message2" placeholder="edit"></textarea><br>

    // 复选框如果是一个为逻辑值，如果是多个则绑定到同一个数组：
    <p> single checkbox:</p>
    <input type="checkbox" id="checkbox" v-model="checked"/>
    <label for="checkbox">{{checked}}</label><br>

    <p>multiple checkboxes:</p>
    <input type="checkbox" id="m1" value="Baidu" v-model="checkedNames"/><label>BA</label>
    <input type="checkbox" id="m2" value="google" v-model="checkedNames"/><label>goo</label>
    <input type="checkbox" id="m3" value="Taobao" v-model="checkedNames"/><label>tb</label>
    <br>
    <span>current selection: {{checkedNames}}</span>

    // select 列表 下拉列表的双向数据绑定：
    <select v-model="selectedElements" name="fruit">
      <option value="">chose a website</option>
      <option value="www.baidu.com">Baidu</option>
      <option value="www.google.com">Google</option>
    </select>
    <div id="output">
      selected: {{selectedElements}}
    </div>

    // v-model.lazy 失焦时才改变，而不是实时更新
    <input v-model.lazy="msg" >
    <p> message is :{{msg}}</p>

    // Vue.js 过渡 & 动画
    <br><button v-on:click="show = !show">click to show/hide</button>
    <transition name="fade">
      <p v-show="show" v-bind:style="styleobj">动画实例</p>
    </transition>

    // Vue.js 混入

    // Vue.js Ajax(vue-resource)
    <input type="button" @click="get()" value="click to get(ajax)"/>
    <br>
    <!-- 激活的菜单样式为  active 类 -->
    <!-- 为了阻止链接在点击时跳转，我们使用了 "prevent" 修饰符 (preventDefault 的简称)。 -->
    <div>
    <nav v-bind:class="navactive" v-on:click.prevent>
      <a href="#" class="home" v-on:click="makeActive('home')"></a>
      <a href="#" class="projects" v-on:click="makeActive('projects')"></a>
      <a href="#" class="services" v-on:click="makeActive('services')"></a>
      <a href="#" class="contact" v-on:click="makeActive('contact')"></a>
    </nav>

    <p> you choose <b>{{navactive}} menu</b></p>
    </div>

    <div id="main1" v-cloak v-on:click="hideTooltip">
      <div class="tooltip" v-on:click.stop v-if="show_tooltip">
        <input type="text" v-model="text_content"/>
      </div>
      <!-- 点击后调用 "toggleTooltip"，显示text输入框， 方法并阻止事件传递 -->
      <p v-on:click.stop="toggleTooltip">{{text_content}}</p>
    </div>

    <form id="mainform" v-cloak>
      <h1>Services</h1>
      <ul>
        <li v-for="service in services" v-on:click="toggleActive(service)" v-bind:class="{'active':service.active}">
          {{service.name}} <span>{{service.price | currencyFilter}}</span>
        </li>
      </ul>
      <div class="total">
        Total: <span>{{total() | currencyFilter}}</span>
      </div>
    </form>
  </div>

</template>
<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'welcome to Patrick VUE！',
      htmlmsg: '<h2> this is the html msg</h2>',
      useclass1: false,
      myid: 1,
      message: 'patrick',
      message2: 'patrick',
      isok: true,
      seen: true,
      url: 'http://url.com',
      inputmessage: 'myinputmessage',
      reversestr: 'reversestr',
      formatmsg: 'formatmsg',
      seenOrNot: true,
      type: 'C',
      sites: [{name: 'forloop1'}, {name: 'forloop2'}, {name: 'forloop3'}],
      myobject: {name: 'loop_object_name', url: 'www.loop_object_url', slogan: 'loop_object_slogan'},
      name: 'myname',
      counter: 1,
      hasError: true,
      classObject: {static: true, active: true, 'text-danger': true},
      isActive: true,
      error: {value: true, type: 'fatal'},
      activeColor: 'green',
      fontSize: 30,
      checked: false,
      checkedNames: [],
      selectedElements: '',
      show: true,
      styleobj: {fontSize: '30px', color: 'red'},
      navactive: 'home',
      show_tooltip: false,
      text_content: 'click to edit',
      services: [
        {name: 'Web Dev', price: 300, active: true},
        {name: 'Design', price: 400, active: false},
        {name: 'Integration', price: 250, active: false},
        {name: 'Training', price: 220, active: false},
      ]
    }
  },
  // computed vs methods
  // 我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
  computed: {
    // 计算属性的 getter
    afterreverse: function () {
      return this.reversestr.split('').reverse().join('')
    },

    site: {
      // getter setter
      get: function () {
        return this.name + ' '+this.url
      },
      set: function (newValue) {
        var names = newValue.split(' ')
        this.name = names[0]
        this.url = names[1]
      }
    },
    classObjectInComputed: function() {
      return {
        base: true,
        active: this.isActive && !this.error.value,
        'text-danger': this.error.value && this.error.type === 'fatal',
      }
    }
  },
  filters: {
    msgUpperCase: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },

    filterAcceptParam (value, param) {
      return value + param
    },

    currencyFilter (value) {
      return '$' + value.toFixed(2);
    }
  },
  methods: {
    details () {
      return 'this is the details'
    },
    doSomething () {
      console.info('doSomething')
    },
    reverseMessage () {
      this.reversestr = this.reversestr.split('').reverse().join('')
    },
    greet: function (event) {
      // this is Vue instance
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    },
    say: function (message) {
      alert(message)
    },
    submit: function () {
      alert('you submitted')
    },
    get: function () {
      console.log('getting data')
      this.$http.get('http://www.runoob.com/try/ajax/ajax_info.txt').then(function (res) {
        document.write(res.body)
      }, function () {
        console.log('request failed')
      })
    },
    makeActive: function (item) {
      this.navactive = item;
    },
    hideTooltip: function () {
      this.show_tooltip = false;
    },
    toggleTooltip: function () {
      this.show_tooltip = !this.show_tooltip;
    },
    toggleActive: function (s) {
      s.active = !s.active;
    },
    total: function () {
      var total = 0;
      this.services.forEach(function (s) {
        if (s.active) {
          total += s.price
        }
      });
      return total;
    }

  }
}
</script>
<style>
  .class1{
    background: #444;
    color: #eee;
  }
  .text-danger {
    background: red;
  }
  .active {
    width: 100px;
    height: 100px;
    background: green;
  }
</style>

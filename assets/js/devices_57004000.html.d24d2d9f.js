"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[98936],{49607:(e,n,s)=>{s.r(n),s.d(n,{comp:()=>o,data:()=>l});var t=s(6254);const a={},o=(0,s(58079).A)(a,[["render",function(e,n){const s=(0,t.g2)("RouteLink");return(0,t.uX)(),(0,t.CE)("div",null,[n[8]||(n[8]=(0,t.Lk)("h1",{id:"insta-57004000",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#insta-57004000"},[(0,t.Lk)("span",null,"Insta 57004000")])],-1)),(0,t.Lk)("table",null,[n[6]||(n[6]=(0,t.Lk)("thead",null,[(0,t.Lk)("tr",null,[(0,t.Lk)("th"),(0,t.Lk)("th")])],-1)),(0,t.Lk)("tbody",null,[n[2]||(n[2]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Model"),(0,t.Lk)("td",null,"57004000")],-1)),(0,t.Lk)("tr",null,[n[1]||(n[1]=(0,t.Lk)("td",null,"Vendor",-1)),(0,t.Lk)("td",null,[(0,t.bF)(s,{to:"/supported-devices/#v=Insta"},{default:(0,t.k6)((()=>n[0]||(n[0]=[(0,t.eW)("Insta")]))),_:1})])]),n[3]||(n[3]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Description"),(0,t.Lk)("td",null,"Pushbutton Interface 2-gang 230V")],-1)),n[4]||(n[4]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Exposes"),(0,t.Lk)("td",null,"action")],-1)),n[5]||(n[5]=(0,t.Lk)("tr",null,[(0,t.Lk)("td",null,"Picture"),(0,t.Lk)("td",null,[(0,t.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/57004000.png",alt:"Insta 57004000"})])],-1))])]),n[9]||(n[9]=(0,t.Lk)("h2",{id:"notes",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#notes"},[(0,t.Lk)("span",null,"Notes")])],-1)),n[10]||(n[10]=(0,t.Lk)("p",null,"This device can be setup in different modes: control, switch, sensors/blinds and scenes.",-1)),n[11]||(n[11]=(0,t.Lk)("p",null,"In switch mode, this device has a rather long internal debounce (waiting for 2x the switch flipped for 50% brightness, or 3x for 100% brightness). This causes a noteable delay before sending a e1_toggle or e2_toggle.",-1)),n[12]||(n[12]=(0,t.Lk)("p",null,"For a simple lights on/off scenario you can avoid this delay by putting the device into sensor mode, and call a lights toggle function on both e1_on / e1_off actions.",-1)),n[13]||(n[13]=(0,t.Lk)("h2",{id:"options",tabindex:"-1"},[(0,t.Lk)("a",{class:"header-anchor",href:"#options"},[(0,t.Lk)("span",null,"Options")])],-1)),(0,t.Lk)("p",null,[(0,t.Lk)("em",null,[(0,t.bF)(s,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,t.k6)((()=>n[7]||(n[7]=[(0,t.eW)("How to use device type specific configuration")]))),_:1})])]),n[14]||(n[14]=(0,t.Fv)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. The action_brightness_delta indicates the delta for each interval. Example:</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span></span>\n<span class="line">  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_e1</code>, <code>off_e1</code>, <code>toggle_e1</code>, <code>recall_*_e1</code>, <code>brightness_stop_e1</code>, <code>brightness_move_*_e1</code>, <code>on_e2</code>, <code>off_e2</code>, <code>toggle_e2</code>, <code>recall_*_e2</code>, <code>brightness_stop_e2</code>, <code>brightness_move_*_e2</code>, <code>close_cover</code>, <code>open_cover</code>, <code>stop_cover</code>.</p>',5))])}]]),l=JSON.parse('{"path":"/devices/57004000.html","title":"Insta 57004000 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Insta 57004000 control via MQTT","description":"Integrate your Insta 57004000 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-02-28T10:33:51.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]}]}],"git":{"updatedTime":1743854184000},"filePathRelative":"devices/57004000.md"}')}}]);
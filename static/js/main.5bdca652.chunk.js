(this.webpackJsonpcreap=this.webpackJsonpcreap||[]).push([[0],{120:function(e,a,t){e.exports=t(153)},125:function(e,a,t){},126:function(e,a,t){},153:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(10),l=t.n(c),i=(t(125),t(233)),o=(t(126),t(67)),s=t(4),u=t(209),m=t(210),d=(Object(s.a)({switchBase:{color:u.a[300],"&$checked":{color:u.a[500]},"&$checked + $track":{backgroundColor:u.a[500]}},checked:{},track:{}})(m.a),Object(s.a)((function(e){return{root:{width:42,height:26,padding:0,margin:e.spacing(1)},switchBase:{padding:1,"&$checked":{transform:"translateX(16px)",color:e.palette.common.white,"& + $track":{backgroundColor:"#52d869",opacity:1,border:"none"}},"&$focusVisible $thumb":{color:"#52d869",border:"6px solid #fff"}},thumb:{width:24,height:24},track:{borderRadius:13,border:"1px solid ".concat(e.palette.grey[400]),backgroundColor:e.palette.grey[50],opacity:1,transition:e.transitions.create(["background-color","border"])},checked:{},focusVisible:{}}}))((function(e){var a=e.classes,t=Object(o.a)(e,["classes"]);return r.a.createElement(m.a,Object.assign({focusVisibleClassName:a.focusVisible,disableRipple:!0,classes:{root:a.root,switchBase:a.switchBase,thumb:a.thumb,track:a.track,checked:a.checked}},t))})),Object(s.a)((function(e){return{root:{width:28,height:16,padding:0,display:"flex"},switchBase:{padding:2,color:e.palette.grey[500],"&$checked":{transform:"translateX(12px)",color:e.palette.common.white,"& + $track":{opacity:1,backgroundColor:e.palette.primary.main,borderColor:e.palette.primary.main}}},thumb:{width:12,height:12,boxShadow:"none"},track:{border:"1px solid ".concat(e.palette.grey[500]),borderRadius:8,opacity:1,backgroundColor:e.palette.common.white},checked:{}}}))(m.a),t(16)),p=t(90),g=t(18),h=t(3),b=t(211),E=t(9),f=t(12),k=t(217),w=t(218),v=t(53),y=t(240),O=t(216),C=t(215),j=t(101),S=t(91),x=t.n(S),N=t(92),P=t.n(N),B=t(74),R=t.n(B),I=t(73),$=t.n(I),z=t(93),D=t.n(z),L=t(238),M=t(214),T=t(219),H=t(156),A=t(94),F=t.n(A),G=t(95),V=t.n(G),W=t(158),J=t(220),K=t(221),q=t(75),X=t.n(q),U=t(52),Q=t.n(U),Y=Object(b.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(g.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(p.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},search:Object(g.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(g.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:"20ch"}),sectionDesktop:Object(g.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(g.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}}));function Z(){var e=Y(),a=r.a.useState(null),t=Object(d.a)(a,2),n=t[0],c=t[1],l=r.a.useState(null),i=Object(d.a)(l,2),o=i[0],s=i[1],u=Object(f.a)(),m=r.a.useState(!1),p=Object(d.a)(m,2),b=p[0],E=p[1],S=Boolean(n),N=Boolean(o),B=function(e){c(e.currentTarget)},I=function(){s(null)},z=function(){c(null),I()},A="primary-search-account-menu",G=r.a.createElement(j.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:A,keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:S,onClose:z},r.a.createElement(C.a,{onClick:z},"Profile"),r.a.createElement(C.a,{onClick:z},"My account")),q=r.a.createElement(j.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:N,onClose:I},r.a.createElement(C.a,null,r.a.createElement(H.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(O.a,{badgeContent:4,color:"secondary"},r.a.createElement(Q.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(C.a,null,r.a.createElement(H.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(O.a,{badgeContent:11,color:"secondary"},r.a.createElement($.a,null))),r.a.createElement("p",null,"Notifications")),r.a.createElement(C.a,{onClick:B},r.a.createElement(H.a,{"aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(R.a,null)),r.a.createElement("p",null,"Profile")));return r.a.createElement("div",{className:e.grow},r.a.createElement(k.a,{position:"fixed",className:Object(h.a)(e.appBar,Object(g.a)({},e.appBarShift,b))},r.a.createElement(w.a,null,r.a.createElement(H.a,{color:"inherit","aria-label":"open drawer",onClick:function(){E(!0)},edge:"start",className:Object(h.a)(e.menuButton,b&&e.hide)},r.a.createElement(x.a,null)),r.a.createElement(v.a,{className:e.title,variant:"h6",noWrap:!0},"Project-DUCK"),r.a.createElement("div",{className:e.search},r.a.createElement("div",{className:e.searchIcon},r.a.createElement(P.a,null)),r.a.createElement(y.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(H.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(O.a,{badgeContent:"99+",color:"secondary"},r.a.createElement(Q.a,null))),r.a.createElement(H.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(O.a,{badgeContent:"99+",color:"secondary"},r.a.createElement($.a,null))),r.a.createElement(H.a,{edge:"end","aria-label":"account of current user","aria-controls":A,"aria-haspopup":"true",onClick:B,color:"inherit"},r.a.createElement(R.a,null))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(H.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)},color:"inherit"},r.a.createElement(D.a,null))))),q,G,r.a.createElement(L.a,{className:e.drawer,variant:"persistent",anchor:"left",open:b,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(H.a,{onClick:function(){E(!1)}},"ltr"===u.direction?r.a.createElement(F.a,null):r.a.createElement(V.a,null))),r.a.createElement(T.a,null),r.a.createElement(M.a,null,["Inbox","Starred","Send email","Drafts"].map((function(e,a){return r.a.createElement(W.a,{button:!0,key:e},r.a.createElement(J.a,null,a%2===0?r.a.createElement(X.a,null):r.a.createElement(Q.a,null)),r.a.createElement(K.a,{primary:e}))}))),r.a.createElement(T.a,null),r.a.createElement(M.a,null,["All mail","Trash","Spam"].map((function(e,a){return r.a.createElement(W.a,{button:!0,key:e},r.a.createElement(J.a,null,a%2===0?r.a.createElement(X.a,null):r.a.createElement(Q.a,null)),r.a.createElement(K.a,{primary:e}))})))),r.a.createElement("main",{className:Object(h.a)(e.content,Object(g.a)({},e.contentShift,b))},r.a.createElement("div",{className:e.drawerHeader})))}t(236),t(222),t(234);Object(b.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));var _=t(224),ee=t(68),ae=t(225),te=t(223),ne=t(96),re=t.n(ne),ce=t(97),le=t.n(ce),ie=Object(b.a)((function(e){return{root:{display:"flex",alignItems:"center"},wrapper:{margin:e.spacing(1),position:"relative"},buttonSuccess:{backgroundColor:ee.a[500],"&:hover":{backgroundColor:ee.a[700]}},fabProgress:{color:ee.a[500],position:"absolute",top:-6,left:-6,zIndex:1},buttonProgress:{color:ee.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}}));function oe(){var e=ie(),a=r.a.useState(!1),t=Object(d.a)(a,2),n=t[0],c=t[1],l=r.a.useState(!1),i=Object(d.a)(l,2),o=i[0],s=i[1],u=r.a.useRef(),m=Object(h.a)(Object(g.a)({},e.buttonSuccess,o));r.a.useEffect((function(){return function(){clearTimeout(u.current)}}),[]);var p=function(){n||(s(!1),c(!0),u.current=window.setTimeout((function(){s(!0),c(!1)}),2e3))};return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.wrapper},r.a.createElement(te.a,{"aria-label":"save",color:"primary",className:m,onClick:p},o?r.a.createElement(re.a,null):r.a.createElement(le.a,null)),n&&r.a.createElement(_.a,{size:68,className:e.fabProgress})),r.a.createElement("div",{className:e.wrapper},r.a.createElement(ae.a,{variant:"contained",color:"primary",className:m,disabled:n,onClick:p},"Accept terms"),n&&r.a.createElement(_.a,{size:24,className:e.buttonProgress})))}var se=t(230),ue=t(231),me=t(228),de=t(229),pe=t(226),ge=t(235),he=t(227),be=t(241),Ee=t(157),fe=t(239),ke=t(242),we=t(232),ve=t(99),ye=t.n(ve),Oe=t(100),Ce=t.n(Oe);function je(e,a,t,n,r){return{name:e,calories:a,fat:t,carbs:n,protein:r}}var Se=[je("Cupcake",305,3.7,67,4.3),je("Donut",452,25,51,4.9),je("Eclair",262,16,24,6),je("Frozen yoghurt",159,6,24,4),je("Gingerbread",356,16,49,3.9),je("Honeycomb",408,3.2,87,6.5),je("Ice cream sandwich",237,9,37,4.3),je("Jelly Bean",375,0,94,0),je("KitKat",518,26,65,7),je("Lollipop",392,.2,98,0),je("Marshmallow",318,0,81,2),je("Nougat",360,19,9,37),je("Oreo",437,18,63,4)];function xe(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var Ne=[{id:"name",numeric:!1,disablePadding:!0,label:"Dessert\xa0(100g serving)"},{id:"calories",numeric:!0,disablePadding:!1,label:"Calories"},{id:"fat",numeric:!0,disablePadding:!1,label:"Fat\xa0(g)"},{id:"carbs",numeric:!0,disablePadding:!1,label:"Carbs\xa0(g)"},{id:"protein",numeric:!0,disablePadding:!1,label:"Protein\xa0(g)"}];function Pe(e){var a=e.classes,t=e.onSelectAllClick,n=e.order,c=e.orderBy,l=e.numSelected,i=e.rowCount,o=e.onRequestSort;return r.a.createElement(pe.a,null,r.a.createElement(he.a,null,r.a.createElement(me.a,{padding:"checkbox"},r.a.createElement(fe.a,{indeterminate:l>0&&l<i,checked:i>0&&l===i,onChange:t,inputProps:{"aria-label":"select all desserts"}})),Ne.map((function(e){return r.a.createElement(me.a,{key:e.id,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:c===e.id&&n},r.a.createElement(be.a,{active:c===e.id,direction:c===e.id?n:"asc",onClick:(t=e.id,function(e){o(e,t)})},e.label,c===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===n?"sorted descending":"sorted ascending"):null));var t}))))}var Be=Object(b.a)((function(e){return{root:{paddingLeft:e.spacing(2),paddingRight:e.spacing(1)},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(E.d)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},title:{flex:"1 1 100%"}}})),Re=function(e){var a=Be(),t=e.numSelected;return r.a.createElement(w.a,{className:Object(h.a)(a.root,Object(g.a)({},a.highlight,t>0))},t>0?r.a.createElement(v.a,{className:a.title,color:"inherit",variant:"subtitle1",component:"div"},t," selected"):r.a.createElement(v.a,{className:a.title,variant:"h6",id:"tableTitle",component:"div"},"Nutrition"),t>0?r.a.createElement(ke.a,{title:"Delete"},r.a.createElement(H.a,{"aria-label":"delete"},r.a.createElement(ye.a,null))):r.a.createElement(ke.a,{title:"Filter list"},r.a.createElement(H.a,{"aria-label":"filter list"},r.a.createElement(Ce.a,null))))},Ie=Object(b.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function $e(){var e=Ie(),a=r.a.useState("asc"),t=Object(d.a)(a,2),n=t[0],c=t[1],l=r.a.useState("calories"),i=Object(d.a)(l,2),o=i[0],s=i[1],u=r.a.useState([]),p=Object(d.a)(u,2),g=p[0],h=p[1],b=r.a.useState(0),E=Object(d.a)(b,2),f=E[0],k=E[1],w=r.a.useState(!1),v=Object(d.a)(w,2),y=v[0],O=v[1],C=r.a.useState(5),j=Object(d.a)(C,2),S=j[0],x=j[1],N=S-Math.min(S,Se.length-f*S);return r.a.createElement("div",{className:e.root},r.a.createElement(Ee.a,{className:e.paper},r.a.createElement(Re,{numSelected:g.length}),r.a.createElement(de.a,null,r.a.createElement(se.a,{className:e.table,"aria-labelledby":"tableTitle",size:y?"small":"medium","aria-label":"enhanced table"},r.a.createElement(Pe,{classes:e,numSelected:g.length,order:n,orderBy:o,onSelectAllClick:function(e){if(e.target.checked){var a=Se.map((function(e){return e.name}));h(a)}else h([])},onRequestSort:function(e,a){c(o===a&&"asc"===n?"desc":"asc"),s(a)},rowCount:Se.length}),r.a.createElement(ue.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(Se,function(e,a){return"desc"===e?function(e,t){return xe(e,t,a)}:function(e,t){return-xe(e,t,a)}}(n,o)).slice(f*S,f*S+S).map((function(e,a){var t,n=(t=e.name,-1!==g.indexOf(t)),c="enhanced-table-checkbox-".concat(a);return r.a.createElement(he.a,{hover:!0,onClick:function(a){return function(e,a){var t=g.indexOf(a),n=[];-1===t?n=n.concat(g,a):0===t?n=n.concat(g.slice(1)):t===g.length-1?n=n.concat(g.slice(0,-1)):t>0&&(n=n.concat(g.slice(0,t),g.slice(t+1))),h(n)}(0,e.name)},role:"checkbox","aria-checked":n,tabIndex:-1,key:e.name,selected:n},r.a.createElement(me.a,{padding:"checkbox"},r.a.createElement(fe.a,{checked:n,inputProps:{"aria-labelledby":c}})),r.a.createElement(me.a,{component:"th",id:c,scope:"row",padding:"none"},e.name),r.a.createElement(me.a,{align:"right"},e.calories),r.a.createElement(me.a,{align:"right"},e.fat),r.a.createElement(me.a,{align:"right"},e.carbs),r.a.createElement(me.a,{align:"right"},e.protein))})),N>0&&r.a.createElement(he.a,{style:{height:(y?33:53)*N}},r.a.createElement(me.a,{colSpan:6}))))),r.a.createElement(ge.a,{rowsPerPageOptions:[5,10,25],component:"div",count:Se.length,rowsPerPage:S,page:f,onChangePage:function(e,a){k(a)},onChangeRowsPerPage:function(e){x(parseInt(e.target.value,10)),k(0)}})),r.a.createElement(we.a,{control:r.a.createElement(m.a,{checked:y,onChange:function(e){O(e.target.checked)}}),label:"Dense padding"}))}t(134);var ze=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(i.a,null),r.a.createElement(Z,null),r.a.createElement(oe,null),r.a.createElement($e,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ze,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[120,1,2]]]);
//# sourceMappingURL=main.5bdca652.chunk.js.map
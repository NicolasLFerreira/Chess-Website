(this["webpackJsonpchess-website"]=this["webpackJsonpchess-website"]||[]).push([[0],{12:function(e,t,i){},14:function(e,t,i){"use strict";i.r(t);var n=i(2),r=i.n(n),s=i(7),c=i.n(s),a=(i(12),i(1)),o=i(3),l=i(5),u=i(4),d=function(){function e(){var t=this;Object(a.a)(this,e),this.buildPiece=function(e){return{id:e,team:t.team,position:t.position}},this.position=new Array(2),this.team=void 0}return Object(o.a)(e,[{key:"buildBoard",value:function(){for(var e=new Array(8),t=0;t<8;t++){e[t]=new Array(8);for(var i=0;i<8;i++)this.position=[t,i],t<=1||t>=6?(this.team=t<4,e[t][i]=0==t||7==t?0==i||7==i?this.buildPiece(2):1==i||6==i?this.buildPiece(4):2==i||5==i?this.buildPiece(3):3==i?this.buildPiece(1):this.buildPiece(0):this.buildPiece(5)):(this.team=void 0,e[t][i]=this.buildPiece(6))}return e}}]),e}(),b=i(0),h=[["\u265a","\u265b","\u265c","\u265e","\u265d","\u265f","\0"],["\u2654","\u2655","\u2656","\u2658","\u2657","\u2659","\0"]],j=function(e){Object(l.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).backgroundColor=function(e){return e[0]%2==0&&e[1]%2!=0||e[0]%2!=0&&e[1]%2==0?1:2},n.board=n.props.board,n}return Object(o.a)(i,[{key:"square",value:function(e,t){return Object(b.jsx)("button",{class:"flex-grow-1 p-2 square-size bgc-"+this.backgroundColor(t)+" "+(e.team?"dark":"light"),children:Object(b.jsx)("div",{className:"center-text",children:h[e.team?0:1][e.id]})})}},{key:"render",value:function(){for(var e=new Array(8),t=void 0,i=0;i<8;i++){t=new Array(8);for(var n=0;n<8;n++)t[n]=this.square(this.board[i][n],[i,n]);e[i]=Object(b.jsx)("div",{className:"d-flex justify-content-center",children:t})}return Object(b.jsx)("div",{children:e})}}]),i}(n.Component),f=function e(t){Object(a.a)(this,e),this.data=t,this.whitePieces=new Array(16),this.blackPieces=new Array(16)},v=function e(){var t=this;Object(a.a)(this,e),this.printBoard=function(){return Object(b.jsx)(j,{board:t.board.data})},this.board=new f((new d).buildBoard())},m=function(e){Object(l.a)(i,e);var t=Object(u.a)(i);function i(e){var n;return Object(a.a)(this,i),(n=t.call(this,e)).board=new v,n.state={},n}return Object(o.a)(i,[{key:"menu",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:"display-3",children:[this.state.turn?"White":"Black"," to play"]})})}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"App display-3",children:[Object(b.jsx)("div",{className:"row",children:this.menu()}),Object(b.jsxs)("div",{className:"d-flex flex-row",children:[Object(b.jsx)("div",{className:"flex-column flex-fill mobile-show"}),Object(b.jsx)("div",{className:"flex-column flex-fill center-text",children:this.board.printBoard()}),Object(b.jsx)("div",{className:"flex-column flex-fill mobile-show"})]})]})}}]),i}(n.Component),x=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,15)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),r(e),s(e),c(e)}))};c.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(m,{})}),document.getElementById("root")),x()}},[[14,1,2]]]);
//# sourceMappingURL=main.c1259315.chunk.js.map
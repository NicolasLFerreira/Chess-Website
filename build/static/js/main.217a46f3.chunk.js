(this["webpackJsonpchess-website"]=this["webpackJsonpchess-website"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var i=c(1),s=c.n(i),r=c(7),n=c.n(r),a=(c(13),c(8)),o=c(2),u=c(3),l=c(5),d=c(4),b=c(0),h=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var i;return Object(o.a)(this,c),(i=t.call(this,e)).state={},i}return Object(u.a)(c,[{key:"render",value:function(){var e=this;return Object(b.jsx)("button",{class:this.props.boardStyle+" flex-grow-1 p-2 square-size",onClick:function(){return e.props.movePiece(e.props.item)},children:Object(b.jsx)("div",{className:"center-text",children:this.props.item.icon})})}}]),c}(i.Component),j=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var i;return Object(o.a)(this,c),(i=t.call(this,e)).state={},i}return Object(u.a)(c,[{key:"render",value:function(){for(var e,t=this,c=[],i=this.props.item,s=function(s){e=(s%2==0&&(t.props.row+1)%2==0||s%2!=0&&t.props.row%2==0?"bgc-1 ":"bgc-2 ")+(i[s].team?"white":"black"),c.push(Object(b.jsx)(h,{movePiece:function(){return t.props.movePiece(i[s])},item:i[s],boardStyle:e}))},r=0;r<8;r++)s(r);return Object(b.jsxs)("div",{className:"d-flex bd-highlight",children:[" ",c," "]})}}]),c}(i.Component),p=["\u2659","\u2656","\u2658","\u2657","\u2655","\u2654",Object(b.jsx)("span",{children:"\xa0"})],v=new(function(){function e(){Object(o.a)(this,e),this.board=new Array(8),this.selectedPiece=void 0}return Object(u.a)(e,[{key:"createPiece",value:function(e,t,c){return{icon:p[e],team:t,id:(6==e?"S":p[e])+(t?0:1)+c,pos:c}}},{key:"buildBoard",value:function(){for(var e=!0,t=0;t<8;t++){this.board[t]=new Array(8);for(var c=0;c<8;c++){var i=t+""+c;if(t>1&&t<6)this.board[t][c]=this.createPiece(6,e,i);else if(e=t>=4,0==t||7==t){for(var s=0;s<3;s++)c!=s&&c!=7-s||(this.board[t][c]=this.createPiece(s+1,e,i));4==c&&(this.board[t][c]=this.createPiece(5,e,i)),3==c&&(this.board[t][c]=this.createPiece(4,e,i))}null==this.board[t][c]&&(this.board[t][c]=this.createPiece(0,e,i))}}return this.board}}]),e}()),f=function(e){Object(l.a)(c,e);var t=Object(d.a)(c);function c(e){var i;return Object(o.a)(this,c),(i=t.call(this,e)).selectPieces=function(e){console.log(e.id),i.setState((function(){if(void 0==i.state.selectedPiece)return"S"==e.id[0]||e.team!=i.state.turn?null:{selectedPiece:e};void 0==i.state.selectedTarget&&i.movePiece(e)}))},i.movePiece=function(e){i.setState((function(t){if(void 0!=i.state.selectedPiece){var c=i.state.selectedPiece,s=e,r=Object(a.a)(t.board);return r[c.pos[0]][c.pos[1]]=v.createPiece(6,c.pos[0]>=4,c.pos),c.pos=s.pos,r[c.pos[0]][c.pos[1]]=c,{board:r,selectedPiece:void 0,selectedTarget:void 0,turn:!i.state.turn}}}))},i.state={board:v.buildBoard(),turn:!0,selectedPiece:void 0},i}return Object(u.a)(c,[{key:"menu",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("p",{className:"display-3",children:[this.state.turn?"White":"Black"," to play"]})})}},{key:"render",value:function(){for(var e=this,t=[],c=0;c<8;c++)t.push(Object(b.jsx)(j,{item:this.state.board[c],row:c,movePiece:function(t){return e.selectPieces(t)}}));return Object(b.jsxs)("div",{className:"App display-1 row",children:[Object(b.jsx)("div",{className:"col",children:this.menu()}),Object(b.jsx)("div",{className:"col-6",children:t}),Object(b.jsx)("div",{className:"col mobileShow"})]})}}]),c}(i.Component),m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;c(e),i(e),s(e),r(e),n(e)}))};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),m()}},[[15,1,2]]]);
//# sourceMappingURL=main.217a46f3.chunk.js.map
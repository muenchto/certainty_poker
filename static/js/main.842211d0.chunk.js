(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,n,t){e.exports=t(86)},64:function(e,n,t){},72:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},77:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),i=t.n(u),l=t(29),o=t(19),c=t(12),d=t(55),s=t(28),m=t(7),f=t(3),p=t(26),v=(t(64),t(25)),b=t(41),g=t.n(b),y=t(50),h=t(8),E=t(22),I=t(23),O=t(24);function j(){var e=Object(E.a)(["\n  mutation createGame {\n    createGame {\n      id\n    }\n  }\n"]);return j=function(){return e},e}var w=Object(O.a)(j());var R=function(){var e=Object(v.f)(),n=Object(I.b)(w),t=Object(h.a)(n,2),u=t[0],i=t[1],l=i.loading,o=i.data,c=i.error;c&&console.error(c),Object(a.useEffect)((function(){o&&!l&&e.push("/".concat(o.createGame.id))}),[e,o,l]);var d=function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"mt-3"},"Start a new game or open a link of an existing game."),r.a.createElement("button",{className:"btn btn-lg btn-primary mt-auto mb-3 mx-5",onClick:d},l?"Loading...":"Create Game"))};function N(){var e=Object(E.a)(["\n  mutation addGuess($input: GuessInput!) {\n    addGuess(input: $input)\n  }\n"]);return N=function(){return e},e}function x(){var e=Object(E.a)(["\n  mutation placeBet($input: BetInput!) {\n    placeBet(input: $input)\n  }\n"]);return x=function(){return e},e}function k(){var e=Object(E.a)(["\n  mutation startGame($gameId: ID!) {\n    startGame(gameId: $gameId)\n  }\n"]);return k=function(){return e},e}function q(){var e=Object(E.a)(["\n  mutation addPlayer($input: PlayerInput!) {\n    addPlayer(input: $input) {\n      id\n      money\n      name\n    }\n  }\n"]);return q=function(){return e},e}function S(){var e=Object(E.a)(["\n  subscription GameUpdated($gameId: ID!, $hash: String!) {\n    gameUpdated(gameId: $gameId, hash: $hash) {\n      id\n      questionRounds {\n        question {\n          id\n          hints\n          answer\n          question\n        }\n        foldedPlayerIds\n        bettingRounds {\n          currentPlayer {\n            id\n          }\n          bets {\n            amount\n            playerId\n          }\n        }\n        guesses {\n          guess\n          playerId\n        }\n        results {\n          playerId\n          changeInMoney\n        }\n        isOver\n      }\n      players {\n        id\n        money\n        name\n      }\n      dealerId\n      questions {\n        id\n      }\n      isOver\n    }\n  }\n"]);return S=function(){return e},e}function C(){var e=Object(E.a)(["\n  query findGame($gameId: ID!) {\n    game(gameId: $gameId) {\n      id\n      questionRounds {\n        question {\n          id\n          hints\n          answer\n          question\n        }\n        foldedPlayerIds\n        bettingRounds {\n          currentPlayer {\n            id\n          }\n          bets {\n            amount\n            playerId\n          }\n        }\n        guesses {\n          guess\n          playerId\n        }\n        results {\n          playerId\n          changeInMoney\n        }\n        isOver\n      }\n      players {\n        id\n        money\n        name\n      }\n      dealerId\n      questions {\n        id\n      }\n      isOver\n    }\n  }\n"]);return C=function(){return e},e}var B,P=Object(O.a)(C()),Q=Object(O.a)(S()),D=Object(O.a)(q()),G=Object(O.a)(k()),F=Object(O.a)(x()),$=Object(O.a)(N()),M=function(e){var n=Math.random().toString(36).substring(2);return localStorage.setItem("".concat("fingerprint","_").concat(e),n),n},z=function(e){return localStorage.getItem("".concat("fingerprint","_").concat(e))},A=t(32),T=t(33),_=t(27),H=function(e,n){return e.bets.reduce((function(e,t){return e+(t.playerId===n?t.amount:0)}),0)},U=function(e){var n;return null===e||void 0===e?void 0:e.questionRounds[(null===e||void 0===e||null===(n=e.questionRounds)||void 0===n?void 0:n.length)-1]},Y=function(e){var n;return null===e||void 0===e?void 0:e.bettingRounds[(null===e||void 0===e||null===(n=e.bettingRounds)||void 0===n?void 0:n.length)-1]},L=function(e,n){var t=n.filter((function(n){return!W(e,n)}));return e.guesses.length===t.length},W=function(e,n){if(n.money>0)return!1;var t,a,r=(t=n.id,null===(a=e)||void 0===a?void 0:a.bettingRounds.reduce((function(e,n){return e+H(n,t)}),0));return!(r&&r>0&&!K(e,n.id))},J=function(e,n){if(!e.bets.length)return 0;var t=H(e,n),a=e.bets.reduce((function(e,n){return e[n.playerId]=(e[n.playerId]||0)+n.amount,e}),{});return Math.max.apply(Math,Object(_.a)(Object.values(a)))-t},K=function(e,n){return null===e||void 0===e?void 0:e.foldedPlayerIds.includes(n)},V=function(e){return e.isOver||e.question.hints.length+1<e.bettingRounds.length},X=function(e,n,t,a){var r,u,i=U(t),l=Y(i);if(i&&(null===l||void 0===l?void 0:l.currentPlayer.id)===a){if(J(l,a)>e)throw new Error("Amount to call is greater than raised amount.");var o=null!==(r=null===(u=t.players.find((function(e){return e.id===a})))||void 0===u?void 0:u.money)&&void 0!==r?r:0;n({variables:{input:{gameId:t.id,playerId:a,amount:Math.min(e,o)}}})}};t(72);!function(e){e.lg="lg",e.md="md"}(B||(B={}));var Z=function(e){var n=e.id,t=e.name,a=e.currentBettingRound,u=e.isDead,i=e.isFolded,l=e.gameIsOver,o=e.size,c=e.isDealer;return r.a.createElement("div",{className:"avatar ".concat(o," ").concat(u||i?"dead":"")},r.a.createElement("span",null,t),!l&&(null===a||void 0===a?void 0:a.currentPlayer.id)===n&&r.a.createElement("span",{className:"turn"},">"),c&&r.a.createElement("span",{className:"dealer"},"D"))},ee=(t(73),function(e){var n,t=e.players,a=e.playerId,u=e.currentBettingRound,i=e.currentQuestionRound,l=e.previousQuestionRound,o=e.game;if(!(null===(n=t)||void 0===n?void 0:n.length)||!a)return null;var c=(o||{}).isOver;c&&t.sort((function(e,n){return n.money-e.money})).forEach((function(e,n){e.rank=n+1})),t=function(e,n){var t=Object(_.a)(e),a=t.splice(t.findIndex((function(e){return e.id===n})),t.length);return[].concat(Object(_.a)(a),Object(_.a)(t))}(t,a);var d,s,m=(null===o||void 0===o?void 0:o.isOver)||o&&o.questionRounds.length>1&&!(null===i||void 0===i?void 0:i.guesses.find((function(e){return e.playerId===a})));l&&m&&(s=l.guesses.reduce((function(e,n){return Object(T.a)({},e,Object(A.a)({},n.playerId,n.guess))}),{})),i&&(d=i.guesses.reduce((function(e,n){return Object(T.a)({},e,Object(A.a)({},n.playerId,n.guess))}),{}));var f=t.reduce((function(e,n,t){return 0===t?e:e[0].money<n.money?[n]:e[0].money===n.money?[].concat(Object(_.a)(e),[n]):e}),[t[0]]).map((function(e){return e.id}));return r.a.createElement(r.a.Fragment,null,(t||[]).map((function(e,n){var t,p,v=e.id,b=e.money,g=e.name,y=e.rank,h=i&&W(i,{id:v,money:b}),E=i&&K(i,v),I=null===l||void 0===l||null===(t=l.results)||void 0===t||null===(p=t.find((function(e){var n=e.playerId;return v===n})))||void 0===p?void 0:p.changeInMoney;return r.a.createElement("div",{key:v,className:"d-flex align-items-center pt-4 ml-4"},c&&r.a.createElement("span",{className:"rank"},y,"."),r.a.createElement(Z,{id:v,name:g,currentBettingRound:u,isDead:h,isFolded:E,gameIsOver:c,isDealer:(null===o||void 0===o?void 0:o.dealerId)===v,size:0===n?B.lg:B.md}),r.a.createElement("div",{className:"money ".concat(v===a?"":"md"," ").concat(!h&&!E||c?"":"dead")},m&&(s[v]||0===s[v])?r.a.createElement("span",{role:"img","aria-label":"answer"},"\ud83d\udca1 ",s[v]):i&&r.a.createElement("span",{role:"img","aria-label":"answer"},"\ud83d\udca1"," ",r.a.createElement("span",{className:v===a?"":"obfuscate"},d[v]||0===d[v]?v===a?d[v]:432:null)),r.a.createElement("div",{className:"d-flex"},r.a.createElement("span",{role:"img","aria-label":"money"},"\ud83d\udcb0",b+(m&&u?H(u,v):0)),m&&I&&r.a.createElement("span",{className:"ml-2 ".concat(I>0?"text-success":"text-danger")},I))),c&&f.includes(v)&&r.a.createElement("span",{className:"trophy",role:"img","aria-label":"trophy"},"\ud83c\udfc6"),h&&!c&&r.a.createElement("span",{className:"skull",role:"img","aria-label":"skull"},"\ud83d\udc80"))})))}),ne={question:{fontSize:"2em"},title:{fontSize:"0.7em"},answer:{fontSize:"2em"}},te=function(e){var n=e.game,t=e.usedQuestionRound,a=(e.playerId,t.bettingRounds.length<=1),u=n.questionRounds.length+n.questions.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"mb-0",style:!a&&{fontSize:"0.6em"}||{}},"Question (",n.questionRounds.length,"/",u,"):"),r.a.createElement("p",{style:a&&ne.question||{}},t.question.question),V(t)&&r.a.createElement("p",{style:ne.answer},"Answer: ",r.a.createElement("b",null,t.question.answer)))},ae={title:{fontSize:"0.8em",borderTop:"1px solid #ebebeb",marginTop:"0.3em",paddingTop:"1em"},currentHint:{fontSize:"1.5em"},oldHint:{fontSize:"0.7em"}},re=function(e){var n=e.usedQuestionRound,t=n.question.hints,a=n.isOver?t.length:Math.min(n.bettingRounds.length-1,t.length);return a<1?null:(null===t||void 0===t?void 0:t.length)?r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{style:ae.title},"Hint",a>1&&"s"," (",a,"/",t.length,"):"),r.a.createElement("ol",null,n.question.hints.slice(0,a).map((function(e,t){return r.a.createElement("li",{key:e,style:a!==t+1||V(n)?ae.oldHint:ae.currentHint},e)})))):null},ue=t(56),ie=t(107),le=(t(74),function(e){var n=e.children,t=e.title,a=e.onClose,u=Object(ue.a)(e,["children","title","onClose"]);return r.a.createElement(ie.a,Object(T.a)({className:"drawer"},u),r.a.createElement("div",{className:"d-flex align-items-center flex-column"},r.a.createElement("div",{className:"d-flex justify-content-center",id:"drawer-title"},r.a.createElement("span",{className:a?"ml-auto":""},t),a&&r.a.createElement("span",{id:"drawer-close",className:"ml-auto mr-3",onClick:a},"\u2573")),r.a.createElement("div",{className:"container px-5 pt-4 pb-5 d-flex flex-column"},n)))}),oe=function(e){var n=e.currentQuestionRound,t=e.playerId,u=e.addGuessMutation,i=e.game,l=e.showNewQuestionRound,o=e.setShowNewQuestionRound,c=i.players.find((function(e){return e.id===t}));if(c&&W(n,c))return null;var d=Object(a.useState)(""),s=Object(h.a)(d,2),m=s[0],f=s[1],p=!n.guesses.find((function(e){return e.playerId===t}));return r.a.createElement(le,{title:"New Question",onClose:function(){o(!1)},anchor:"bottom",open:p&&l&&!(null===n||void 0===n?void 0:n.guesses.find((function(e){return e.playerId===t}))),variant:"persistent"},r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n.question.question),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{value:m,onChange:function(e){var n=parseFloat(e.target.value);f(n||e.target.value)},disabled:!p,type:"number",className:"form-control form-control-lg",placeholder:"Your answer","aria-label":"Your answer","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!p||"string"===typeof m||!m&&0!==m,onClick:function(e){!m&&0!==m||"number"!==typeof m||(!function(e,n,t,a){e({variables:{input:{gameId:n.id,playerId:a,guess:t}}})}(u,i,m,t),f(""),o(!1))}},"\u2b91")))))},ce=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,de=function(e){var n=e.createPlayer,t=e.gameId,u=e.playerId,i=Object(a.useState)(""),l=Object(h.a)(i,2),o=l[0],c=l[1];return r.a.createElement(le,{title:"Your avatar",anchor:"bottom",open:!u,variant:"persistent",className:"drawer"},r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Use an emoji or your initials as your avatar"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{value:o,onChange:function(e){var n=e.target.value,t=n.match(ce);c(t?n:n.substring(0,2))},type:"text",className:"form-control form-control-lg",placeholder:"Type an emoji or letter","aria-label":"Your answer","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{disabled:!o.length,className:"btn btn-primary",onClick:function(){n({variables:{input:{gameId:t,playerName:o}}})}},"\u2b91")))))},se=function(e){var n=e.text,t=e.handleOnClick,a=e.isDisabled;return r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:t,disabled:a},n)},me=function(e){var n,t=e.currentBettingRound,u=e.game,i=e.handleRaise,l=e.placeBet,o=e.playerId,c=e.showRaiseDrawer,d=e.setShowRaiseDrawer,s=J(t,o),m=null===(n=u.players.find((function(e){return e.id===o})))||void 0===n?void 0:n.money,f=Object(a.useState)(s),p=Object(h.a)(f,2),v=p[0],b=p[1];return r.a.createElement(le,{title:"Raise",anchor:"bottom",open:c,onClose:function(){d(!1)},variant:"temporary",className:"drawer"},r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Raise by how much?"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{value:v,onChange:function(e){b(Math.round(parseFloat(e.target.value)))},type:"number",pattern:"[0-9]",min:s,max:m,className:"form-control form-control-lg",placeholder:"Amount to raise","aria-label":"Amount to raise","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{disabled:!!m&&(v<s||v>m),className:"btn btn-primary",onClick:function(){i(v,l,u,o),d(!1)}},"\u2b91"))),m&&r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return b(m)},className:"badge badge-pill badge-primary mr-auto px-4"},"All in")))},fe=function(e){var n=e.game,t=e.currentQuestionRound,u=e.currentBettingRound,i=e.playerId,l=e.placeBet;if(!t||!u)return null;var o=Object(a.useState)(!1),c=Object(h.a)(o,2),d=c[0],s=c[1],m=n.players.find((function(e){return e.id===i}));return r.a.createElement("div",{className:"d-flex flex-row w-100 justify-content-between"},[{text:"Check",handleOnClick:function(){!function(e,n,t){var a=U(n),r=Y(a);a&&(null===r||void 0===r?void 0:r.currentPlayer.id)===t&&(J(r,t)>0||e({variables:{input:{gameId:n.id,playerId:t,amount:0}}}))}(l,n,i)},isDisabled:J(u,i)>0},{text:"Call",handleOnClick:function(){!function(e,n,t){var a,r,u=U(n),i=Y(u);if(u&&(null===i||void 0===i?void 0:i.currentPlayer.id)===t){var l=J(i,t),o=null!==(a=null===(r=n.players.find((function(e){return e.id===t})))||void 0===r?void 0:r.money)&&void 0!==a?a:0;e({variables:{input:{gameId:n.id,playerId:t,amount:Math.min(l,o)}}})}}(l,n,i)},isDisabled:J(u,i)<=0},{text:"Raise",handleOnClick:function(){s(!0)},isDisabled:(null===m||void 0===m?void 0:m.money)&&J(u,i)>=(null===m||void 0===m?void 0:m.money)},{text:"Fold",handleOnClick:function(){!function(e,n,t){var a=U(n),r=Y(a);a&&(null===r||void 0===r?void 0:r.currentPlayer.id)===t&&e({variables:{input:{gameId:n.id,playerId:t,amount:-1}}})}(l,n,i)}}].map((function(e){return r.a.createElement(se,Object.assign({key:e.text},e,{isDisabled:e.isDisabled||(null===u||void 0===u?void 0:u.currentPlayer.id)!==i||!L(t,n.players)}))})),r.a.createElement(me,{game:n,placeBet:l,playerId:i,currentBettingRound:u,handleRaise:X,showRaiseDrawer:d,setShowRaiseDrawer:s}))},pe={fontSize:"0.9em"},ve=function(e){var n=e.currentQuestionRound,t=e.currentBettingRound,a=e.playerId,u=e.revealPreviousAnswers,i=u?[0,0]:n.bettingRounds.reduce((function(e,n){var t=Object(h.a)(e,2),r=t[0],u=t[1];return n.bets.forEach((function(e){r+=e.amount,e.playerId===a&&(u+=e.amount)})),[r,u]}),[0,0]),l=Object(h.a)(i,2),o=l[0],c=l[1],d=u?0:J(t,a);return r.a.createElement("div",{className:"d-flex w-100 flex-row  justify-content-between pb-3 px-1",style:pe},r.a.createElement("span",null,"Pot (total/you):"," ",r.a.createElement("span",{role:"img","aria-label":"money"},"\ud83d\udcb0"),o,"/",c),r.a.createElement("span",null,"To call:"," ",r.a.createElement("span",{role:"img","aria-label":"money"},"\ud83d\udcb0"),d))},be=(t(75),function(e){var n=e.game,t=e.currentQuestionRound,a=e.currentBettingRound,u=e.playerId,i=e.placeBet,l=e.startGame,o=(null===n||void 0===n?void 0:n.isOver)||n&&n.questionRounds.length>1&&!(null===t||void 0===t?void 0:t.guesses.find((function(e){return e.playerId===u})));return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-content"},!n.questionRounds.length&&r.a.createElement("button",{className:"btn btn-lg btn-primary mt-auto mx-5",disabled:n.players.length<=1,onClick:function(){l({variables:{gameId:n.id}})}},"Start Game"),t&&a&&u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ve,{playerId:u,currentQuestionRound:t,currentBettingRound:a,revealPreviousAnswers:o}),r.a.createElement(fe,{game:n,currentQuestionRound:t,currentBettingRound:a,placeBet:i,playerId:u}))))});t(76);var ge=function(){var e,n=Object(a.useState)(void 0),t=Object(h.a)(n,2),u=t[0],i=t[1],l=Object(a.useState)(void 0),o=Object(h.a)(l,2),c=o[0],d=o[1],s=U(c),m=Y(s),f=Object(a.useState)(!0),p=Object(h.a)(f,2),b=p[0],g=p[1],y=Object(v.g)().gameId,E=Object(I.a)(P,{fetchPolicy:"cache-and-network"}),O=Object(h.a)(E,2),j=O[0],w=O[1],R=w.data,N=w.error,x=Object(I.b)(D),k=Object(h.a)(x,2),q=k[0],S=k[1],C=S.data,B=S.loading,A=S.error,T=Object(I.b)(G),_=Object(h.a)(T,2),H=_[0],L=_[1],W=L.loading,J=L.error,K=Object(I.b)(F),V=Object(h.a)(K,2),X=V[0],Z=V[1],ne=Z.loading,ae=Z.error,ue=Object(I.b)($),ie=Object(h.a)(ue,2),le=ie[0],ce=ie[1],se=ce.loading,me=ce.error,fe=Object(I.c)(Q,{variables:{gameId:y,hash:z(y)||M(y)}}),pe=fe.data,ve=fe.error;if(Object(a.useEffect)((function(){j({variables:{gameId:y}})}),[j,y]),Object(a.useEffect)((function(){d((null===pe||void 0===pe?void 0:pe.gameUpdated)||(null===R||void 0===R?void 0:R.game))}),[R,pe,d]),Object(a.useEffect)((function(){if(y){var e,n=function(e){return localStorage.getItem("".concat("player_id","_").concat(e))}(y),t=null===C||void 0===C||null===(e=C.addPlayer)||void 0===e?void 0:e.id;n&&i(n),t&&(!function(e,n){localStorage.setItem("".concat("player_id","_").concat(e),n)}(y,t),i(t))}}),[y,C]),!c)return r.a.createElement("h3",null,"Loading...");if(N||A||J||ae||ve||me)return console.error(N||A||J||ae||ve||me),r.a.createElement("p",null,"A technical error occurred. Try to refresh the page");var ge=!!(null===s||void 0===s?void 0:s.guesses.find((function(e){return e.playerId===u}))),ye=!ge||c.isOver?null===c||void 0===c?void 0:c.questionRounds[(null===c||void 0===c||null===(e=c.questionRounds)||void 0===e?void 0:e.length)-2]:void 0;return r.a.createElement(r.a.Fragment,null,(B||W||ne||se)&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"grid mt-3",style:{fontWeight:300,paddingBottom:"130px"}},s&&u&&r.a.createElement("div",null,r.a.createElement(te,{game:c,usedQuestionRound:ye||s,playerId:u}),r.a.createElement(re,{usedQuestionRound:ye||s})),r.a.createElement("div",{className:"d-flex flex-column align-items-center align-items-sm-start align-items-md-center"},r.a.createElement(ee,{players:null===c||void 0===c?void 0:c.players,playerId:u,currentQuestionRound:s,currentBettingRound:m,previousQuestionRound:ye,game:c})),!b&&!ge&&r.a.createElement("button",{className:"new-question-button btn btn-primary mx-auto mt-5",onClick:function(){g(!0)}},"Answer New Question")),s&&u&&r.a.createElement(oe,{game:c,addGuessMutation:le,currentQuestionRound:s,playerId:u,showNewQuestionRound:b,setShowNewQuestionRound:g}),!c.isOver&&r.a.createElement(be,{game:c,currentQuestionRound:s,currentBettingRound:m,placeBet:X,playerId:u,startGame:H}),r.a.createElement(de,{gameId:y,createPlayer:q,playerId:u}))};t(77);function ye(){return r.a.createElement("p",null,"Page not found.")}var he=function(){return r.a.createElement("div",{id:"app",className:"container-sm py-2"},r.a.createElement("a",{href:"/",id:"title"},"Certainty Poker"),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",component:R,exact:!0}),r.a.createElement(v.a,{path:"/:gameId",component:ge,exact:!0}),r.a.createElement(v.a,{component:ye})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee="s://certainty-poker.herokuapp.com",Ie=new s.a({uri:"http".concat(Ee,"/query")}),Oe=new d.a({uri:"ws".concat(Ee,"/query"),options:{reconnect:!0}}),je=Object(m.d)((function(e){var n=e.query,t=Object(f.l)(n),a=t.kind,r=t.operation;return"OperationDefinition"===a&&"subscription"===r}),Oe,Ie),we=new o.c({link:je,cache:new p.a});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{client:we},r.a.createElement(l.a,null,r.a.createElement(he,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.842211d0.chunk.js.map
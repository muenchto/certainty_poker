(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{59:function(e,n,t){e.exports=t(85)},64:function(e,n,t){},72:function(e,n,t){},73:function(e,n,t){},74:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},85:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(14),i=t.n(u),o=t(29),l=t(19),c=t(12),d=t(55),s=t(28),m=t(7),p=t(3),f=t(26),v=(t(64),t(25)),b=t(41),g=t.n(b),y=t(50),E=t(8),h=t(22),O=t(23),I=t(24);function j(){var e=Object(h.a)(["\n  mutation createGame {\n    createGame {\n      id\n    }\n  }\n"]);return j=function(){return e},e}var R=Object(I.a)(j());var w=function(){var e=Object(v.f)(),n=Object(O.b)(R),t=Object(E.a)(n,2),u=t[0],i=t[1],o=i.loading,l=i.data,c=i.error;c&&console.error(c),Object(a.useEffect)((function(){l&&!o&&e.push("/".concat(l.createGame.id))}),[e,l,o]);var d=function(){var e=Object(y.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u();case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"mt-3"},"Start a new game or open a link of an existing game."),r.a.createElement("button",{className:"btn btn-lg btn-primary mt-auto mb-3 mx-5",onClick:d},o?"Loading...":"Create Game"))};function N(){var e=Object(h.a)(["\n  mutation addGuess($input: GuessInput!) {\n    addGuess(input: $input) {}\n  }\n"]);return N=function(){return e},e}function x(){var e=Object(h.a)(["\n  mutation placeBet($input: BetInput!) {\n    placeBet(input: $input) {}\n  }\n"]);return x=function(){return e},e}function q(){var e=Object(h.a)(["\n  mutation startGame($gameId: ID!) {\n    startGame(gameId: $gameId) {}\n  }\n"]);return q=function(){return e},e}function k(){var e=Object(h.a)(["\n  mutation addPlayer($input: PlayerInput!) {\n    addPlayer(input: $input) {\n      id\n      money\n      name\n    }\n  }\n"]);return k=function(){return e},e}function C(){var e=Object(h.a)(["\n  subscription GameUpdated($gameId: ID!) {\n    gameUpdated(gameId: $gameId) {\n      id\n      questionRounds {\n        question {\n          id\n          hints\n          answer\n          question\n        }\n        foldedPlayerIds\n        bettingRounds {\n          currentPlayer {\n            id\n          }\n          bets {\n            amount\n            playerId\n          }\n        }\n        guesses {\n          guess\n          playerId\n        }\n      }\n      players {\n        id\n        money\n        name\n      }\n      dealerId\n      questions {\n        id\n      }\n      isOver\n    }\n  }\n"]);return C=function(){return e},e}function B(){var e=Object(h.a)(["\n  query findGame($gameId: ID!) {\n    game(gameId: $gameId) {\n      id\n      questionRounds {\n        question {\n          id\n          hints\n          answer\n          question\n        }\n        foldedPlayerIds\n        bettingRounds {\n          currentPlayer {\n            id\n          }\n          bets {\n            amount\n            playerId\n          }\n        }\n        guesses {\n          guess\n          playerId\n        }\n      }\n      players {\n        id\n        money\n        name\n      }\n      dealerId\n      questions {\n        id\n      }\n      isOver\n    }\n  }\n"]);return B=function(){return e},e}var S,P=Object(I.a)(B()),Q=Object(I.a)(C()),D=Object(I.a)(k()),G=Object(I.a)(q()),F=Object(I.a)(x()),$=Object(I.a)(N()),z=t(32),A=t(33),M=t(27),T=function(e,n){return e.bets.reduce((function(e,t){return e+(t.playerId===n?t.amount:0)}),0)},H=function(e){var n;return null===e||void 0===e?void 0:e.questionRounds[(null===e||void 0===e||null===(n=e.questionRounds)||void 0===n?void 0:n.length)-1]},U=function(e){var n;return null===e||void 0===e?void 0:e.bettingRounds[(null===e||void 0===e||null===(n=e.bettingRounds)||void 0===n?void 0:n.length)-1]},Y=function(e,n){var t=n.filter((function(n){return!_(e,n)}));return e.guesses.length===t.length},_=function(e,n){if(n.money>0)return!1;var t,a,r=(t=n.id,null===(a=e)||void 0===a?void 0:a.bettingRounds.reduce((function(e,n){return e+T(n,t)}),0));return!(r&&r>0&&!W(e,n.id))},L=function(e,n){if(!e.bets.length)return 0;var t=T(e,n),a=e.bets.reduce((function(e,n){return e[n.playerId]=(e[n.playerId]||0)+n.amount,e}),{});return Math.max.apply(Math,Object(M.a)(Object.values(a)))-t},W=function(e,n){return null===e||void 0===e?void 0:e.foldedPlayerIds.includes(n)},J=function(e,n,t,a){var r,u,i=H(t),o=U(i);if(i&&(null===o||void 0===o?void 0:o.currentPlayer.id)===a){if(L(o,a)>e)throw new Error("Amount to call is greater than raised amount.");var l=null!==(r=null===(u=t.players.find((function(e){return e.id===a})))||void 0===u?void 0:u.money)&&void 0!==r?r:0;n({variables:{input:{gameId:t.id,playerId:a,amount:Math.min(e,l)}}})}};t(72);!function(e){e.lg="lg",e.md="md"}(S||(S={}));var K=function(e){var n=e.id,t=e.name,a=e.currentBettingRound,u=e.isDead,i=e.isFolded,o=e.gameIsOver,l=e.size,c=e.isDealer;return r.a.createElement("div",{className:"avatar ".concat(l," ").concat(u||i?"dead":"")},r.a.createElement("span",null,t),!o&&(null===a||void 0===a?void 0:a.currentPlayer.id)===n&&r.a.createElement("span",{className:"turn"},">"),c&&r.a.createElement("span",{className:"dealer"},"D"))},V=(t(73),function(e){var n,t=e.players,a=e.playerId,u=e.currentBettingRound,i=e.currentQuestionRound,o=e.game;if(!(null===(n=t)||void 0===n?void 0:n.length)||!a)return null;var l=(o||{}).isOver;l&&t.sort((function(e,n){return n.money-e.money})).forEach((function(e,n){e.rank=n+1})),t=function(e,n){var t=Object(M.a)(e),a=t.splice(t.findIndex((function(e){return e.id===n})),t.length);return[].concat(Object(M.a)(a),Object(M.a)(t))}(t,a);var c,d,s=(null===o||void 0===o?void 0:o.isOver)||o&&o.questionRounds.length>1&&!(null===i||void 0===i?void 0:i.guesses.find((function(e){return e.playerId===a})));o&&s&&(d=o.questionRounds[o.questionRounds.length-(o.isOver?1:2)].guesses.reduce((function(e,n){return Object(A.a)({},e,Object(z.a)({},n.playerId,n.guess))}),{})),i&&(c=i.guesses.reduce((function(e,n){return Object(A.a)({},e,Object(z.a)({},n.playerId,n.guess))}),{}));var m=t.reduce((function(e,n,t){return 0===t?e:e[0].money<n.money?[n]:e[0].money===n.money?[].concat(Object(M.a)(e),[n]):e}),[t[0]]).map((function(e){return e.id}));return r.a.createElement("div",null,(t||[]).map((function(e,n){var t=e.id,p=e.money,f=e.name,v=e.rank,b=i&&_(i,{id:t,money:p}),g=i&&W(i,t);return r.a.createElement("div",{key:t,className:"d-flex align-items-center pt-4 ml-4"},l&&r.a.createElement("span",{className:"rank"},v,"."),r.a.createElement(K,{id:t,name:f,currentBettingRound:u,isDead:b,isFolded:g,gameIsOver:l,isDealer:(null===o||void 0===o?void 0:o.dealerId)===t,size:0===n?S.lg:S.md}),r.a.createElement("div",{className:"money ".concat(t===a?"":"md"," ").concat(!b&&!g||l?"":"dead")},s&&(d[t]||0===d[t])?r.a.createElement("span",{role:"img","aria-label":"answer"},"\ud83d\udca1 ",d[t]):i&&r.a.createElement("span",{role:"img","aria-label":"answer"},"\ud83d\udca1"," ",r.a.createElement("span",{className:t===a?"":"obfuscate"},c[t]||0===c[t]?t===a?c[t]:432:null)),r.a.createElement("span",{role:"img","aria-label":"money"},"\ud83d\udcb0",p+(s&&u?T(u,t):0))),l&&m.includes(t)&&r.a.createElement("span",{className:"trophy",role:"img","aria-label":"trophy"},"\ud83c\udfc6"),b&&!l&&r.a.createElement("span",{className:"skull",role:"img","aria-label":"skull"},"\ud83d\udc80"))})))}),X={question:{fontSize:"2em"},title:{fontSize:"0.7em"},answer:{fontSize:"2em"}},Z=function(e){var n=e.game,t=e.currentQuestionRound,a=e.playerId;if(n.isOver||n.questionRounds.length>1&&!t.guesses.find((function(e){return e.playerId===a}))){var u=n.questionRounds[n.questionRounds.length-(n.isOver?1:2)];return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,u.question.question),r.a.createElement("p",{style:X.answer},"Answer: ",r.a.createElement("b",null,u.question.answer)))}var i=t.bettingRounds.length<=1,o=n.questionRounds.length+n.questions.length;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"mb-0",style:!i&&{fontSize:"0.6em"}||{}},"Question (",n.questionRounds.length,"/",o,"):"),r.a.createElement("span",{style:i&&X.question||{}},t.question.question))},ee={title:{fontSize:"0.8em",borderTop:"1px solid #ebebeb",marginTop:"0.3em",paddingTop:"1em"},currentHint:{fontSize:"1.5em"},oldHint:{fontSize:"0.7em"}},ne=function(e){var n=e.currentQuestionRound,t=e.previousQuestionRound,a=t||n,u=a.question.hints,i=a.bettingRounds.length-1;return i<1?null:(null===u||void 0===u?void 0:u.length)?r.a.createElement("div",{className:"d-flex flex-column"},r.a.createElement("span",{style:ee.title},"Hint",i>1&&"s"," (",i,"/",u.length,"):"),a.question.hints.slice(0,a.bettingRounds.length-1).map((function(e,n){return r.a.createElement("span",{key:e,style:i!==n+1||t?ee.oldHint:ee.currentHint},e)}))):null},te=t(56),ae=t(106),re=(t(74),function(e){var n=e.children,t=e.title,a=e.onClose,u=Object(te.a)(e,["children","title","onClose"]);return r.a.createElement(ae.a,Object(A.a)({className:"drawer"},u),r.a.createElement("div",{className:"d-flex align-items-center flex-column"},r.a.createElement("div",{className:"d-flex",id:"drawer-title"},r.a.createElement("span",{className:"ml-auto"},t),a&&r.a.createElement("span",{id:"drawer-close",className:"ml-auto mr-3",onClick:a},"\u2573")),r.a.createElement("div",{className:"container px-5 pt-4 pb-5 d-flex flex-column"},n)))}),ue=function(e){var n=e.currentQuestionRound,t=e.playerId,u=e.addGuessMutation,i=e.game,o=e.showNewQuestionRound,l=e.setShowNewQuestionRound,c=i.players.find((function(e){return e.id===t}));if(c&&_(n,c))return null;var d=Object(a.useState)(""),s=Object(E.a)(d,2),m=s[0],p=s[1],f=!n.guesses.find((function(e){return e.playerId===t}));return r.a.createElement(re,{title:"New Question",onClose:function(){l(!1)},anchor:"bottom",open:f&&o&&!(null===n||void 0===n?void 0:n.guesses.find((function(e){return e.playerId===t}))),variant:"persistent"},r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,n.question.question),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{value:m,onChange:function(e){var n=parseFloat(e.target.value);p(n||e.target.value)},disabled:!f,type:"number",className:"form-control form-control-lg",placeholder:"Your answer","aria-label":"Your answer","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:!f||"string"===typeof m||!m&&0!==m,onClick:function(e){!m&&0!==m||"number"!==typeof m||(!function(e,n,t,a){e({variables:{input:{gameId:n.id,playerId:a,guess:t}}})}(u,i,m,t),p(""),l(!1))}},"\u2b91")))))},ie=/(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g,oe=function(e){var n=e.createPlayer,t=e.gameId,u=e.playerId,i=Object(a.useState)(""),o=Object(E.a)(i,2),l=o[0],c=o[1];return r.a.createElement(re,{title:"Your avatar",anchor:"bottom",open:!u,variant:"persistent",className:"drawer"},r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Use an emoji or your initials as your avatar"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{value:l,onChange:function(e){var n=e.target.value,t=n.match(ie);c(t?n:n.substring(0,2))},type:"text",className:"form-control form-control-lg",placeholder:"Type an emoji or letter","aria-label":"Your answer","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{disabled:!l.length,className:"btn btn-primary",onClick:function(){n({variables:{input:{gameId:t,playerName:l}}})}},"\u2b91")))))},le=function(e){var n=e.text,t=e.handleOnClick,a=e.isDisabled;return r.a.createElement("button",{className:"btn btn-primary mx-1",onClick:t,disabled:a},n)},ce=function(e){var n,t=e.currentBettingRound,u=e.game,i=e.handleRaise,o=e.placeBet,l=e.playerId,c=e.showRaiseDrawer,d=e.setShowRaiseDrawer,s=L(t,l),m=null===(n=u.players.find((function(e){return e.id===l})))||void 0===n?void 0:n.money,p=Object(a.useState)(s),f=Object(E.a)(p,2),v=f[0],b=f[1];return r.a.createElement(re,{title:"Raise",anchor:"bottom",open:c,onClose:function(){d(!1)},variant:"temporary",className:"drawer"},r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Raise by how much?"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{value:v,onChange:function(e){b(Math.round(parseFloat(e.target.value)))},type:"number",pattern:"[0-9]",min:s,max:m,className:"form-control form-control-lg",placeholder:"Amount to raise","aria-label":"Amount to raise","aria-describedby":"basic-addon2"}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{disabled:!!m&&(v<s||v>m),className:"btn btn-primary",onClick:function(){i(v,o,u,l),d(!1)}},"\u2b91"))),m&&r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return b(m)},className:"badge badge-pill badge-primary mr-auto px-4"},"All in")))},de=function(e){var n=e.game,t=e.currentQuestionRound,u=e.currentBettingRound,i=e.playerId,o=e.placeBet;if(!t||!u)return null;var l=Object(a.useState)(!1),c=Object(E.a)(l,2),d=c[0],s=c[1],m=n.players.find((function(e){return e.id===i}));return r.a.createElement("div",{className:"d-flex flex-row w-100 justify-content-between"},[{text:"Check",handleOnClick:function(){!function(e,n,t){var a=H(n),r=U(a);a&&(null===r||void 0===r?void 0:r.currentPlayer.id)===t&&(L(r,t)>0||e({variables:{input:{gameId:n.id,playerId:t,amount:0}}}))}(o,n,i)},isDisabled:L(u,i)>0},{text:"Call",handleOnClick:function(){!function(e,n,t){var a,r,u=H(n),i=U(u);if(u&&(null===i||void 0===i?void 0:i.currentPlayer.id)===t){var o=L(i,t),l=null!==(a=null===(r=n.players.find((function(e){return e.id===t})))||void 0===r?void 0:r.money)&&void 0!==a?a:0;e({variables:{input:{gameId:n.id,playerId:t,amount:Math.min(o,l)}}})}}(o,n,i)},isDisabled:L(u,i)<=0},{text:"Raise",handleOnClick:function(){s(!0)},isDisabled:(null===m||void 0===m?void 0:m.money)&&L(u,i)>=(null===m||void 0===m?void 0:m.money)},{text:"Fold",handleOnClick:function(){!function(e,n,t){var a=H(n),r=U(a);a&&(null===r||void 0===r?void 0:r.currentPlayer.id)===t&&e({variables:{input:{gameId:n.id,playerId:t,amount:-1}}})}(o,n,i)}}].map((function(e){return r.a.createElement(le,Object.assign({key:e.text},e,{isDisabled:e.isDisabled||(null===u||void 0===u?void 0:u.currentPlayer.id)!==i||!Y(t,n.players)}))})),r.a.createElement(ce,{game:n,placeBet:o,playerId:i,currentBettingRound:u,handleRaise:J,showRaiseDrawer:d,setShowRaiseDrawer:s}))},se={fontSize:"0.9em"},me=function(e){var n=e.currentQuestionRound,t=e.currentBettingRound,a=e.playerId,u=e.revealPreviousAnswers,i=u?[0,0]:n.bettingRounds.reduce((function(e,n){var t=Object(E.a)(e,2),r=t[0],u=t[1];return n.bets.forEach((function(e){r+=e.amount,e.playerId===a&&(u+=e.amount)})),[r,u]}),[0,0]),o=Object(E.a)(i,2),l=o[0],c=o[1],d=u?0:L(t,a);return r.a.createElement("div",{className:"d-flex w-100 flex-row  justify-content-between pb-3 px-1",style:se},r.a.createElement("span",null,"Pot (total/you):"," ",r.a.createElement("span",{role:"img","aria-label":"money"},"\ud83d\udcb0"),l,"/",c),r.a.createElement("span",null,"To call:"," ",r.a.createElement("span",{role:"img","aria-label":"money"},"\ud83d\udcb0"),d))},pe=(t(75),function(e){var n=e.game,t=e.currentQuestionRound,a=e.currentBettingRound,u=e.playerId,i=e.placeBet,o=e.startGame,l=(null===n||void 0===n?void 0:n.isOver)||n&&n.questionRounds.length>1&&!(null===t||void 0===t?void 0:t.guesses.find((function(e){return e.playerId===u})));return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-content"},!n.questionRounds.length&&r.a.createElement("button",{className:"btn btn-lg btn-primary mt-auto mx-5",disabled:n.players.length<=1,onClick:function(){o({variables:{gameId:n.id}})}},"Start Game"),t&&a&&u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(me,{playerId:u,currentQuestionRound:t,currentBettingRound:a,revealPreviousAnswers:l}),r.a.createElement(de,{game:n,currentQuestionRound:t,currentBettingRound:a,placeBet:i,playerId:u}))))});var fe=function(){var e,n=Object(a.useState)(void 0),t=Object(E.a)(n,2),u=t[0],i=t[1],o=Object(a.useState)(void 0),l=Object(E.a)(o,2),c=l[0],d=l[1],s=Object(a.useState)(!1),m=Object(E.a)(s,2),p=m[0],f=m[1],b=Object(v.g)().gameId,g=Object(O.a)(P,{fetchPolicy:"cache-and-network"}),y=Object(E.a)(g,2),h=y[0],I=y[1],j=I.data,R=I.error,w=Object(O.b)(D),N=Object(E.a)(w,2),x=N[0],q=N[1],k=q.data,C=q.loading,B=q.error,S=Object(O.b)(G),z=Object(E.a)(S,2),A=z[0],M=z[1],T=M.loading,Y=M.error,_=Object(O.b)(F),L=Object(E.a)(_,2),W=L[0],J=L[1],K=J.loading,X=J.error,ee=Object(O.b)($),te=Object(E.a)(ee,2),ae=te[0],re=te[1],ie=re.loading,le=re.error,ce=Object(O.c)(Q,{variables:{gameId:b}}),de=ce.data,se=ce.error;if(Object(a.useEffect)((function(){h({variables:{gameId:b}})}),[h,b]),Object(a.useEffect)((function(){d((null===de||void 0===de?void 0:de.gameUpdated)||(null===j||void 0===j?void 0:j.game))}),[j,de,d]),Object(a.useEffect)((function(){if(b){var e,n=function(e){return localStorage.getItem("".concat("player_id","_").concat(e))}(b),t=null===k||void 0===k||null===(e=k.addPlayer)||void 0===e?void 0:e.id;n&&i(n),t&&(!function(e,n){localStorage.setItem("".concat("player_id","_").concat(e),n)}(b,t),i(t))}}),[b,k]),!c)return r.a.createElement("h3",null,"Loading...");if(R||B||Y||X||se||le)return console.error(R||B||Y||X||se||le),r.a.createElement("p",null,"A technical error occurred. Try to refresh the page");var me=H(c),fe=U(me),ve=null===me||void 0===me?void 0:me.guesses.find((function(e){return e.playerId===u})),be=!!ve||0===ve,ge=be||null===c||void 0===c?void 0:c.questionRounds[(null===c||void 0===c||null===(e=c.questionRounds)||void 0===e?void 0:e.length)-2];return r.a.createElement(r.a.Fragment,null,(C||T||K||ie)&&r.a.createElement("p",null,"Loading..."),r.a.createElement("div",{className:"d-flex flex-column mt-3",style:{fontWeight:300,paddingBottom:"130px"}},me&&u&&r.a.createElement("div",null,r.a.createElement(Z,{game:c,currentQuestionRound:me,playerId:u}),r.a.createElement(ne,{currentQuestionRound:me,previousQuestionRound:ge})),r.a.createElement(V,{players:null===c||void 0===c?void 0:c.players,playerId:u,currentQuestionRound:me,currentBettingRound:fe,game:c}),!p&&!be&&r.a.createElement("button",{className:"btn btn-primary mx-auto mt-5",onClick:function(){f(!0)}},"Next Question")),me&&u&&r.a.createElement(ue,{game:c,addGuessMutation:ae,currentQuestionRound:me,playerId:u,showNewQuestionRound:p,setShowNewQuestionRound:f}),!c.isOver&&r.a.createElement(pe,{game:c,currentQuestionRound:me,currentBettingRound:fe,placeBet:W,playerId:u,startGame:A}),r.a.createElement(oe,{gameId:b,createPlayer:x,playerId:u}))};t(76);function ve(){return r.a.createElement("p",null,"Page not found.")}var be=function(){return r.a.createElement("div",{id:"app",className:"container py-2"},r.a.createElement("a",{href:"/",id:"title"},"Certainty Poker"),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",component:w,exact:!0}),r.a.createElement(v.a,{path:"/:gameId",component:fe,exact:!0}),r.a.createElement(v.a,{component:ve})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=new s.a({uri:"".concat("https://certainty-poker.herokuapp.com","/query")}),ye=new d.a({uri:"ws://localhost:8080/query",options:{reconnect:!0}}),Ee=Object(m.d)((function(e){var n=e.query,t=Object(p.l)(n),a=t.kind,r=t.operation;return"OperationDefinition"===a&&"subscription"===r}),ye,ge),he=new l.c({link:Ee,cache:new f.a});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,{client:he},r.a.createElement(o.a,null,r.a.createElement(be,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.60c6eea4.chunk.js.map
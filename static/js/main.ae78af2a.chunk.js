(this["webpackJsonphorticultura-oo2"]=this["webpackJsonphorticultura-oo2"]||[]).push([[0],{162:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(46),c=a.n(r),s=a(9),o=a(58),d=a(251),l=a(244),u=a(106),j=a(108),b=a(86),p=a(33),m=a(240),O=a(56),x=a(100),h=a.n(x),g=a(128),f=a.n(g),v=a(127),C=a.n(v),w=a(39),S=a(55),I=a(17),k=a(233),L=a(239),y=a(105),P=a(247),T=a(176),_=a(135),E=a(2),A={top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",height:{xs:"65%",md:"30%"},position:"absolute",bgcolor:"#FFF",padding:"2em"},R=Object(n.forwardRef)((function(e,t){var a=e.closeModal,i=e.activeIngredientList,r=e.activeIngredientsLoading,c=e.aptitudeList,d=e.aptitudesLoading,u=e.cropList,j=e.cropsLoading,b=e.residualLimitPost,p=(e.residualLimitGet,e.dataset),m=e.datasetPut,O=Object(n.useState)(null),x=Object(s.a)(O,2),h=x[0],g=x[1],f=Object(n.useState)(null),v=Object(s.a)(f,2),C=v[0],w=v[1],R=Object(n.useState)(null),D=Object(s.a)(R,2),M=D[0],F=D[1],N=Object(n.useState)(0),V=Object(s.a)(N,2),B=V[0],G=V[1],U=Object(n.useState)(!1),W=Object(s.a)(U,2),q=W[0],H=W[1],K=Object(n.useCallback)((function(e,t){var n={active_ingredient:"".concat(h),aptitude:"".concat(C),crop:"".concat(M),residual:"".concat(B),harvest:"".concat(q)};b(n).then((function(e){var t=e.id,a=p.residual_limits.map((function(e){return e.id}));m("".concat(p.id),{residual_limits:[].concat(Object(I.a)(a),[t])})})),a()}),[p,m,b,h,C,M,B,q,a]);return Object(E.jsxs)(l.a,{sx:A,ref:t,children:[Object(E.jsx)("h2",{children:"Agregar"}),Object(E.jsxs)(k.a,{direction:{xs:"column",md:"row"},justifyContent:"center",alignItems:"center",spacing:{xs:1,md:2},children:[Object(E.jsx)(L.a,{sx:{width:"100%"},id:"activeIngredient",options:i,getOptionLabel:function(e){return e.name},onChange:function(e,t){g(t?t.id:null)},loading:r,isOptionEqualToValue:function(e,t){return e.id===t.id},renderInput:function(e){return Object(E.jsx)(y.a,Object(S.a)(Object(S.a)({},e),{},{label:"Ingrediente activo",variant:"outlined"}))}}),Object(E.jsx)(L.a,{sx:{width:"100%"},id:"aptitudes",options:c,getOptionLabel:function(e){return e.name},onChange:function(e,t){w(t?t.id:null)},loading:d,isOptionEqualToValue:function(e,t){return e.id===t.id},renderInput:function(e){return Object(E.jsx)(y.a,Object(S.a)(Object(S.a)({},e),{},{label:"Aptitud",variant:"outlined"}))}}),Object(E.jsx)(L.a,{sx:{width:"100%"},id:"crops",options:u,getOptionLabel:function(e){return e.name},onChange:function(e,t){F(t?t.id:null)},loading:j,isOptionEqualToValue:function(e,t){return e.id===t.id},renderInput:function(e){return Object(E.jsx)(y.a,Object(S.a)(Object(S.a)({},e),{},{label:"Cultivos",variant:"outlined"}))}})]}),Object(E.jsxs)(k.a,{direction:{xs:"column",md:"row"},justifyContent:"left",alignItems:"center",spacing:{xs:1,md:2},sx:{paddingTop:"1em"},children:[Object(E.jsx)(y.a,{sx:{width:{xs:"100%",md:"32%",lg:"32.5%"}},id:"residual",label:"Residuos",type:"number",inputProps:{min:0},onChange:function(e,t){G(e.target.value)},endadornment:Object(E.jsx)(P.a,{position:"end",children:"g"})}),Object(E.jsx)(T.a,{control:Object(E.jsx)(_.a,{checked:q,onChange:function(e,t){H(t)}}),label:"Post Cosecha"})]}),Object(E.jsx)(k.a,{direction:{xs:"column",md:"row"},justifyContent:"flex-end",alignItems:"flex-end",spacing:{xs:1,md:2},sx:{paddingTop:"1em"},children:Object(E.jsx)(o.a,{variant:"contained",disabled:!(h&&C&&M&&B),onClick:K,children:"Guardar"})})]})})),D={top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"70%",height:{xs:"65%",md:"30%"},position:"absolute",bgcolor:"#FFF",padding:"2em"},M=Object(n.forwardRef)((function(e,t){var a=e.closeModal,i=e.datasetPost,r=Object(n.useState)(""),c=Object(s.a)(r,2),d=c[0],u=c[1],j=Object(n.useState)(""),b=Object(s.a)(j,2),p=b[0],m=b[1],O=Object(n.useCallback)((function(e,t){i({title:d,description:p}),a()}),[d,p,i,a]);return Object(E.jsxs)(l.a,{sx:D,ref:t,children:[Object(E.jsx)("h2",{children:"Agregar"}),Object(E.jsxs)(k.a,{direction:{xs:"column",md:"row"},justifyContent:"left",alignItems:"center",spacing:{xs:1,md:2},sx:{paddingTop:"1em"},children:[Object(E.jsx)(y.a,{sx:{width:{xs:"100%",md:"32%",lg:"32.5%"}},id:"title",label:"T\xedtulo",onChange:function(e,t){u(e.target.value)}}),Object(E.jsx)(y.a,{sx:{width:{xs:"100%",md:"32%",lg:"32.5%"}},id:"description",label:"Descripci\xf3n",multiline:!0,maxRows:4,onChange:function(e,t){m(e.target.value)}})]}),Object(E.jsx)(k.a,{direction:{xs:"column",md:"row"},justifyContent:"flex-end",alignItems:"flex-end",spacing:{xs:1,md:2},sx:{paddingTop:"1em"},children:Object(E.jsx)(o.a,{variant:"contained",disabled:!d,onClick:O,children:"Guardar"})})]})})),F=a(242),N=a(249),V=function(e){var t="";switch(e){case 401:t="Acceso no autorizado";break;case 403:t="Acceso denegado";break;case 404:t="Recurso no encontrado";break;case 405:case 406:case 407:case 408:case 409:case 410:case 411:case 412:case 413:case 414:case 415:case 416:case 417:case 418:t="Error desconocido, por favor, contacte con el administrador del sitio";break;case 500:case 501:case 502:case 503:case 505:case 511:t="Error interno del servidor, por favor, contacte con el administrador del sitio";break;case 504:t="Se esper\xf3 demasiado tiempo la respuesta, por favor, intentelo m\xe1s tarde";break;default:t="Problema de conexi\xf3n"}return t},B=function(e){var t=e.data;return t.reduce((function(e,t){return e||t.error}),!1)?Object(E.jsxs)(F.a,{style:{marginTop:"1em",marginBottom:"1em"},severity:"error",children:[Object(E.jsx)(N.a,{children:"Algo sali\xf3 mal"}),Object(E.jsx)("ul",{children:t.map((function(e){return e.error&&Object(E.jsxs)("li",{children:[Object(E.jsx)("b",{children:e.msg})," ",V(e.response.status)]})}))})]}):null},G=function(e){return{id:e.id,activeIngredient:e.active_ingredient.name,aptitude:e.aptitude.name,crop:e.crop.name,residual:e.residual,harvest:e.harvest}},U=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],i=t[1],r=Object(n.useState)([]),c=Object(s.a)(r,2),x=c[0],g=c[1],v={data:[],cachePolicy:"no-cache"},S=Object(w.b)("/residual-limits",{data:{}}),I=S.error,k=S.response,L=S.post,y=S.put,P=S.del,T=Object(w.b)("/datasets",{cachePolicy:"no-cache",data:{}}),_=T.error,A=T.response,D=T.post,F=T.get,N=T.put,V=Object(w.b)("/datasets",v,[A.data]),U=V.error,W=V.response,q=V.data,H=V.loading,K=Object(w.b)("/active-ingredients",v,[a]),z=K.error,J=K.response,Q=K.data,X=K.loading,Y=Object(w.b)("/aptitudes",v,[a]),Z=Y.error,$=Y.response,ee=Y.data,te=Y.loading,ae=Object(w.b)("/crops",v,[a]),ne=ae.error,ie=ae.response,re=ae.data,ce=ae.loading,se=[{field:"id",headerName:"ID",width:75,hide:!0,sortable:!1,disableExport:!0},{field:"activeIngredient",headerName:"Ingredientes activos",flex:3,editable:!0,type:"singleSelect",valueOptions:J.ok?Q.map((function(e){return e.name})):[],sortable:!1},{field:"aptitude",headerName:"Aptiudes",flex:2,editable:!0,type:"singleSelect",valueOptions:$.ok?ee.map((function(e){return e.name})):[],sortable:!1},{field:"crop",headerName:"Cultivos",flex:1,editable:!0,type:"singleSelect",valueOptions:ie.ok?re.map((function(e){return e.name})):[],sortable:!1},{field:"residual",headerName:"Residuos",flex:1,editable:!0,type:"number",sortable:!1},{field:"harvest",headerName:"Post-cosecha",flex:1,editable:!0,type:"boolean",sortable:!1}],oe=Object(n.useCallback)((function(e,t){var a=Q.find((function(t){return t.name===e.getValue(e.id,"activeIngredient")})),n=ee.find((function(t){return t.name===e.getValue(e.id,"aptitude")})),i=re.find((function(t){return t.name===e.getValue(e.id,"crop")})),r={active_ingredient:"".concat(a.id),aptitude:"".concat(n.id),crop:"".concat(i.id),residual:"".concat(e.row.residual),harvest:"".concat(e.row.harvest)};y("".concat(e.row.id),r).then((function(){F("".concat(A.data.id))}))}),[F,A.data,y,Q,ee,re]);return Object(E.jsx)(d.a,{maxWidth:"xl",children:Object(E.jsxs)(l.a,{sx:{height:600,width:"100%"},children:[Object(E.jsx)(B,{data:[{msg:"Operaciones con datasets: ",error:_,response:A},{msg:"Operaciones con residuos l\xedmite: ",error:I,response:k},{msg:"Datasets: ",error:U,response:W},{msg:"Ingredientes activos: ",error:z,response:J},{msg:"Aptiudes: ",error:Z,response:$},{msg:"Cultivos: ",error:ne,response:ie}]}),Object(E.jsxs)(l.a,{style:{marginTop:"1em",marginBottom:"1em"},children:[Object(E.jsxs)(u.a,{id:"dataset-label",children:["Dataset",A.ok&&A.data.description&&Object(E.jsx)(j.a,{title:A.data.description,placement:"right",children:Object(E.jsx)("sup",{children:Object(E.jsx)(f.a,{sx:{fontSize:15}})})})]}),Object(E.jsx)(b.a,{style:{width:"20em"},labelId:"dataset-label",id:"dataset-select",value:A.ok?A.data.id:"",label:"Dataset",onChange:function(e){var t=e.target.value;F("".concat(t))},children:W.ok&&q.map((function(e){return Object(E.jsx)(p.a,{value:e.id,children:e.title},e.id)}))}),Object(E.jsx)(o.a,{color:"primary",startIcon:Object(E.jsx)(h.a,{}),onClick:function(){return i("dataset")},children:"Agregar dataset"})]}),Object(E.jsx)(m.a,{open:Boolean(a),onClose:function(){return i("")},"aria-labelledby":"add-residual-limit","aria-describedby":"add-residual-limit-form",children:Object(E.jsxs)(E.Fragment,{children:["residualLimit"===a&&Object(E.jsx)(R,{closeModal:function(){return i("")},activeIngredientList:Q,activeIngredientsLoading:X,aptitudeList:ee,aptitudesLoading:te,cropList:re,cropsLoading:ce,residualLimitPost:L,dataset:A.data,datasetPut:N}),"dataset"===a&&Object(E.jsx)(M,{closeModal:function(){return i("")},datasetPost:D})]})}),Object(E.jsx)(O.a,{components:{Toolbar:function(){return Object(E.jsxs)(O.c,{children:[Object(E.jsx)(o.a,{color:"primary",startIcon:Object(E.jsx)(h.a,{}),disabled:!Object.entries(A.data).length,onClick:function(){return i("residualLimit")},children:"Agregar"}),Object(E.jsx)(o.a,{color:"primary",startIcon:Object(E.jsx)(C.a,{}),disabled:!x.length,onClick:function(){var e=x.map((function(e){return P("".concat(e))}));Promise.all(e).then((function(){F("".concat(A.data.id))}))},children:"Eliminar"}),Object(E.jsx)(O.b,{}),Object(E.jsx)(O.e,{}),Object(E.jsx)(O.d,{})]})}},rows:A.ok?A.data.residual_limits.map(G):[],columns:se,checkboxSelection:!0,editMode:"row",loading:H,onRowEditStop:oe,onSelectionModelChange:function(e){return g(e)},sortModel:[{field:"id",sort:"asc"}],localeText:O.f.components.MuiDataGrid.defaultProps.localeText})]})})},W=a(48),q=a(253),H=a(252),K=a(250),z=a(248),J=Object(W.b)();var Q=function(){return Object(E.jsx)(q.a,{theme:J,children:Object(E.jsx)(w.a,{url:Object({NODE_ENV:"production",PUBLIC_URL:"/horticultura",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_BASE_URL:"https://horticultura.herokuapp.com"}).REACT_APP_API_URL,children:Object(E.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(E.jsx)(H.a,{position:"static",children:Object(E.jsx)(K.a,{children:Object(E.jsx)(z.a,{variant:"h6",children:"L\xedmites m\xe1ximos de residuos (LMR)"})})}),Object(E.jsx)(U,{})]})})})};c.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(Q,{})}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.ae78af2a.chunk.js.map
import{ag as l,ao as j,ah as e,ak as p,an as k}from"./index-1e03a33d.js";import{R as A}from"./Review-fd522410.js";function M({courceDetails:i,converstationId:n,setMessages:r,messages:t,getOldMessage:d}){const[u,y]=l.useState(""),g=j(s=>s.userData._id);console.log(i,n,t,d);const f=({msg:s,own:x})=>e.jsx("div",{className:"w-full flex flex-wrap",children:e.jsx("div",{className:`${x?"bg-gray-300":"ml-auto bg-blue-200"} max-w-[60%] rounded-xl p-2`,children:s.text})}),w=async s=>{s.preventDefault();let x={senderId:g,conversationId:n,text:u};console.log(x);try{const h=await p.post("http://localhost:8080/chat/message/add",x);console.log(h.data),r([...t,h.data]),y("")}catch(h){console.log("Error while calling newConversations API ",h)}},c=s=>{s.key==="Enter"&&!s.shiftKey&&w(s)};return e.jsxs("div",{className:"w-full my-5",children:[e.jsx("h1",{className:"underline  flex justify-center text-xl font-semibold",children:"You can chat"}),e.jsx("div",{className:"w-[100vw] flex ",children:e.jsxs("div",{className:"w-[30%] p-3  my-10 mx-auto justify-center rounded-xl bottom-2 ring-2",children:[e.jsx("div",{className:"overflow-y-auto  gap-y-4  h-[50dvh] flex flex-col",children:(t==null?void 0:t.length)>0?t.map(s=>e.jsxs(e.Fragment,{children:[console.log(s),e.jsx(f,{msg:s,own:s.senderId===g},s._id)]})):e.jsx("h1",{className:"text-xl font-semibold my-auto",children:"No messages yet"})}),e.jsx("textarea",{rows:3,cols:10,className:"resize-none w-full rounded-lg",placeholder:"Type here..",name:"newMessage",value:u,onChange:s=>y(s.target.value),onKeyDown:c})]})})]})}const P=({videoUrl:i,isPlaying:n})=>{const r=l.useRef(null);return l.useEffect(()=>{n?r.current.play():r.current.pause()},[n]),e.jsx("div",{className:"p-5",children:e.jsx("div",{style:{position:"relative",paddingTop:"56.25%"},children:e.jsx("video",{ref:r,src:i,style:{border:"none",position:"absolute",top:0,height:"100%",width:"100%"},controls:!0})})})},V=({syllabus:i,videoUrl:n,onAccordionClick:r})=>{const[t,d]=l.useState(!1),u=()=>{d(!t),r(n)};return e.jsx("div",{className:"border rounded-lg border-gray-600",children:e.jsx("button",{className:`flex items-center justify-between w-full py-4 px-6 bg-white hover:bg-gray-100 focus:outline-none transition-all duration-300 ease-in-out ${t?"rounded-t-lg":"rounded-lg"}`,onClick:u,children:e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:i})})})},U=({selectedSyllabus:i,selectedVideoUrl:n,courceData:r})=>{const t=k(),d=j(a=>a.userData._id),u=j(a=>a.userData.email),[y,g]=l.useState(-1),f=i||t.state&&t.state.selectedSyllabus,w=n||t.state&&t.state.selectedVideoUrl,c=r||t.state&&t.state.courceData,[s,x]=l.useState(""),[h,C]=l.useState(!1),[m,I]=l.useState(""),[S,b]=l.useState([]),D=async a=>{const o={senderId:u,receiverId:a.createBy};try{let v=await p.post("http://localhost:8080/chat/conversation/add",o);console.log(v.data.user._id),I(v.data.user._id)}catch(v){console.log("Error while calling getConversation API ",v)}},N=async a=>{try{const o=await p.get(`http://localhost:8080/chat/message/get/${a}`);console.log(o.data),o.data.length>0&&b(o.data)}catch(o){console.log("Error while calling newConversations API ",o)}},E=a=>{x(a),C(!0)};return l.useEffect(()=>{c&&D(c),c&&m&&N(m)},[c,m]),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{className:"flex flex-col outline-double -outline-offset-8 rounded-2xl md:rounded-3xl md:flex-row bg-gray-100 bg-gradient-to-r from-white via-blue-200 to-white",children:[e.jsxs("div",{className:"md:w-1/2 w-full",children:[e.jsx(P,{videoUrl:s,isPlaying:h}),e.jsx("div",{className:"flex justify-center"})]}),e.jsx("div",{className:"md:w-1/2",children:e.jsx("div",{className:"p-6 md:my-10 max-h-[300px] overflow-auto",children:w.map((a,o)=>e.jsx("div",{onClick:()=>g(f[o]),children:e.jsx(V,{syllabus:f[o],videoUrl:a,onAccordionClick:E})},o))})})]}),e.jsx("div",{className:"",children:e.jsx(M,{courceDetails:c,converstationId:m,setMessages:b,messages:S,getOldMessage:N})}),e.jsx("div",{children:d&&c&&e.jsx(A,{userId:d,courseDetails:c})})]})};export{U as default};
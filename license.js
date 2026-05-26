!function(w,d){
  var y=0x1a2b3c4d,z=0x4d3c2b1a,p=(375534388^y)>>>0,q=(405535388^z)>>>0,H=((p^y)+(q^z))>>>0,
  S1=[0x4411d99a,0x6633b01c],E1=[3442228635,4034481967],M1=[0xa7b3c9d1,0xb8c4d2e3],
  Ha=3750863588,Hc=4033443595,Hp=1765140415,Har=3240729449,Hpl=4005959344,Hpo=2292358402,Hcr=781069776,Gh=1989791412,
  B={
    s1:"110110001010101011011000101101011101100110000101110110011000101011011001100001010010000011011001100010001101100010101010110110001011011111011001100010001101100110001010110110001011000100111010001000001101100010101110",
    s2:"1101100010100111110110011000010011011000101011110010000011011000101110011101100010101000110110001010111100100000110110001010011111011001100001001101100010111001110110001010011111011000101101111101100110001010",
    au:"010010110110100001100001011011000110100101100100001000000100000101100010011001000110010101101100011000010111010001111001",
    cp:"01000011011011110111000001111001011100100110100101100111011010000111010000100000001100100011000000110010001101100010000001001011011010000110000101101100011010010110010000100000010000010110001001100100011001010110110001100001011101000111100100100000111000101000000010010100001000000110000101110100011101000111001001101001011000100111010101110100011010010110111101101110001000000111001001100101011100010111010101101001011100100110010101100100",
    ap:"010001000110111100100000011011100110111101110100001000000111001001100101011011010110111101110110011001010010000001100100011001010111011001100101011011000110111101110000011001010111001000100000011000110111001001100101011001000110100101110100001110110010000001110011011001010110010100100000010000010100011101000101010011100101010001010011001011100110110101100100001000000110000101101110011001000010000001000001010010010101111101000001010100110101001101001001010100110101010001000001010011100101010001010011001011100110110101100100",
    po:"0101011101001001001011010101000001001111010011000100100101000011010110010011101001001011011010000110000101101100011010010110010000101101010000010110001001100100011001010110110001100001011101000111100100111010010100100100010101000110010101010101001101000101001011010111011000110001",
    cj:"01111011001000100111011000100010001110100011000100101100001000100110100000100010001110100011011100111000001100010011000000110110001110010011011100110111001101100010110000100010011000010010001000111010001000100100101101101000011000010110110001101001011001000010110101000001011000100110010001100101011011000110000101110100011110010010001001111101",
    ar:"010010110110100001100001011011000110100101100100001011010100000101100010011001000110010101101100011000010111010001111001",
    pl:"0110000101110100011101000111001001101001011000100111010101110100011010010110111101101110001011010111001001100101011100010111010101101001011100100110010101100100",
    f0:"010000010100011101000101010011100101010001010011001011100110110101100100",
    f1:"01000001010010010101111101000001010100110101001101001001010100110101010001000001010011100101010001010011001011100110110101100100",
    f2:"0100110001001001010000110100010101001110010100110100010100101110011101000111100001110100",
    f3:"01000011010101010101001001010011010011110101001001011111010100000100111101001100010010010100001101011001001011100110110101100100"
  },policyReady=!1;

  function u(b){
    var o=[],i,x,j,n=b.length>>3;
    for(i=0;i<n;i+=1){
      x=0;
      for(j=0;j<8;j+=1)x=(x<<1)|(b.charCodeAt((i<<3)+j)&1);
      o.push(x);
    }
    return new TextDecoder("utf-8").decode(new Uint8Array(o));
  }

  w.__wiU=u;

  w.__wiStr=function(){
    var b2=w.__wiB2||"";
    return u(B.s1)+u(b2);
  };

  function g(t){
    var h=5381,i;
    if(!t)return 0;
    for(i=0;i<t.length;i+=1)h=((h*33)^t.charCodeAt(i))>>>0;
    return h;
  }

  w.__wiH=g;

  function seed(){
    var e=d.getElementById("x7Dc"),k=d.getElementById("x7K7"),c=d.getElementById("x7Cf"),p=d.getElementById("x7Po"),
      ma=d.querySelector('meta[name="author"]'),mc=d.querySelector('meta[name="copyright"]'),
      mp=d.querySelector('meta[name="ai-content-policy"]'),
      F=[104,116,116,112,115,58,47,47,119,119,119,46,102,97,99,101,98,111,111,107,46,99,111,109,47,107,104,97,108,101,100,46,97,98,100,101,108,97,116,105,105],
      prefix,name,href,i;
    if(!e||!k||!c||!p||!ma||!mc||!mp)return!1;
    prefix=u(B.s1);
    name=u(w.__wiB2||"");
    href="";
    for(i=0;i<F.length;i+=1)href+=String.fromCharCode(F[i]);
    e.innerHTML=prefix+'<a class="dev-credit-link" href="'+href+'" target="_blank" rel="noopener noreferrer">'+name+"</a>";
    e.setAttribute("data-dev-credit","");
    e.setAttribute("data-required-attribution",u(B.ar));
    ma.setAttribute("content",u(B.au));
    mc.setAttribute("content",u(B.cp));
    mp.setAttribute("content",u(B.ap));
    c.textContent=u(B.cj);
    p.textContent=u(B.po);
    k.setAttribute("data-wi",String(Hcr%97));
    k.setAttribute("data-ai-policy",u(B.pl));
    return!0;
  }

  function rDoc(){
    var ma=d.querySelector('meta[name="author"]'),mc=d.querySelector('meta[name="copyright"]'),
      mp=d.querySelector('meta[name="ai-content-policy"]'),c=d.getElementById("x7Cf"),p=d.getElementById("x7Po"),j;
    if(!ma||!mc||!mp||!c||!p)return!1;
    if(g(ma.getAttribute("content"))!==Ha)return!1;
    if(g(mc.getAttribute("content"))!==Hc)return!1;
    if(g(mp.getAttribute("content"))!==Hp)return!1;
    try{
      j=JSON.parse(c.textContent);
      if(j.v!==1||j.h!==H||g(j.a)!==Har)return!1;
    }catch(e){return!1;}
    if(g(p.textContent.replace(/\s+/g," ").trim())!==Hpo)return!1;
    return!0;
  }

  function r(){
    var e=d.getElementById("x7Dc"),k=d.getElementById("x7K7"),s=w.__wiStr(),t,h;
    if(!e||!w.__wiB2||!k)return!1;
    if(!rDoc())return!1;
    t=e.textContent.replace(/\s+/g," ").trim();
    if(t!==s)return!1;
    h=g(t);
    if(h!==Hcr||h!==H)return!1;
    if(k.getAttribute("data-wi")!==String(h%97))return!1;
    if(!e.hasAttribute("data-dev-credit"))return!1;
    if(k.getAttribute("data-ai-policy")!==u(B.pl))return!1;
    if(e.getAttribute("data-required-attribution")!==u(B.ar))return!1;
    if(d.location.protocol!=="file:"&&!policyReady)return!1;
    return!0;
  }

  function revoke(){
    d.documentElement.removeAttribute("data-wi");
    d.documentElement.classList.remove("wi-ready");
  }

  function b(){
    if(!r()){revoke();return!1;}
    d.documentElement.setAttribute("data-wi","1");
    d.documentElement.classList.add("wi-ready");
    return!0;
  }

  function pf(){
    var h=w.__wiPh,m=w.__wiPm,b2=w.__wiBf,i,out=[];
    if(!h||!m||!b2||h.length!==m.length||h.length!==b2.length)return[];
    for(i=0;i<b2.length;i+=1)out.push(u(b2[i]));
    return out;
  }

  function fetchPolicies(){
    var names=pf(),h=w.__wiPh,m=w.__wiPm;
    if(d.location.protocol==="file:"){
      policyReady=rDoc();
      return Promise.resolve(policyReady);
    }
    if(!names.length||!h||!m||names.length!==h.length)return Promise.resolve(!1);
    return Promise.all(names.map(function(name,idx){
      return fetch(name,{cache:"no-store"}).then(function(res){
        if(!res.ok)return!1;
        return res.text().then(function(text){
          var ix=text.indexOf("---"),head;
          if(ix<0)return!1;
          head=text.slice(0,ix+3)+"\n";
          if(g(head)!==Gh)return!1;
          return g(text)===((h[idx]^m[idx])>>>0);
        });
      }).catch(function(){return!1;});
    })).then(function(results){
      policyReady=results.every(Boolean);
      return policyReady;
    });
  }

  function boot(){
    if(!seed()){revoke();return;}
    fetchPolicies().then(function(){if(!b())revoke();});
  }

  w.__wiGate=function(i){
    var h,j;
    if(!r())return!1;
    h=g(w.__wiStr());
    if(i<2){
      j=i|0;
      return((h^S1[j])>>>0)===((E1[j]^M1[j])>>>0);
    }
    return typeof w.__wiGateX==="function"&&w.__wiGateX(i,h);
  };

  w.__wiInit=b;
  w.__wiOk=function(){return d.documentElement.getAttribute("data-wi")==="1"&&r();};

  if(d.readyState==="loading")d.addEventListener("DOMContentLoaded",boot,{once:!0});
  else boot();
}(window,document);

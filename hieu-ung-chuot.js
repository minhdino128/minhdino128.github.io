/*
 * HIỆU ỨNG CHUỘT — giao diện 20/10
 * Rê chuột: vệt tim + hạt sáng. Bấm/chạm: tim bung.
 * Canvas phủ màn hình nhưng pointer-events:none nên không cản nút bốc thăm.
 */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const canvas = document.createElement('canvas');
  canvas.id = 'mouseFx';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;
  let W=0,H=0,dpr=1, particles=[];
  const cursor={x:0,y:0,visible:false,seen:0};
  let lastMove=0;
  const rand=(a,b)=>a+Math.random()*(b-a);
  function resize(){
    W=window.innerWidth; H=window.innerHeight;
    dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  window.addEventListener('resize',resize,{passive:true});resize();
  function add(x,y,vx,vy,type='heart',life=0.9){
    if(particles.length>=170) particles.splice(0,particles.length-150);
    particles.push({x,y,vx,vy,type,life,initial:life,size:rand(type==='heart'?3.6:1.7,type==='heart'?8:3.8),
      rotation:rand(-1,1),spin:rand(-1.4,1.4),hue:type==='heart'?[330,340,350][Math.floor(rand(0,3))]:rand(40,58)});
  }
  function trail(x,y){
    add(x+rand(-4,4),y+rand(-4,4),rand(-15,15),rand(-23,-7),'heart',rand(.55,1));
    add(x+rand(-8,8),y+rand(-8,8),rand(-14,14),rand(-20,-1),'spark',rand(.4,.8));
  }
  document.addEventListener('pointermove',e=>{
    if(e.pointerType==='touch' || !fine.matches) return;
    cursor.x=e.clientX;cursor.y=e.clientY;cursor.visible=true;cursor.seen=performance.now();
    const t=performance.now();
    if(t-lastMove>=30){trail(e.clientX,e.clientY);lastMove=t;}
  },{passive:true});
  document.addEventListener('pointerleave',()=>{cursor.visible=false;},{passive:true});
  document.addEventListener('pointerdown',e=>{
    const x=e.clientX,y=e.clientY;
    const n=reduced.matches?5:19;
    for(let i=0;i<n;i++){
      const angle=Math.PI*2*i/n+rand(-.12,.12),speed=rand(35,125);
      add(x,y,Math.cos(angle)*speed,Math.sin(angle)*speed-17,i%4?'heart':'spark',rand(.56,1.15));
    }
  },{passive:true});
  function heart(x,y,r){
    ctx.beginPath();ctx.moveTo(x,y+r*.9);
    ctx.bezierCurveTo(x-r*1.25,y+r*.08,x-r*.85,y-r*.88,x,y-r*.34);
    ctx.bezierCurveTo(x+r*.85,y-r*.88,x+r*1.25,y+r*.08,x,y+r*.9);
    ctx.closePath();ctx.fill();
  }
  let prev=performance.now();
  function animate(now){
    const dt=Math.min(.05,(now-prev)/1000);prev=now;
    ctx.clearRect(0,0,W,H);
    for(let i=particles.length-1;i>=0;i--){
      const p=particles[i];p.life-=dt;
      if(p.life<=0){particles.splice(i,1);continue;}
      p.vy+=(p.type==='heart'?14:24)*dt;
      p.x+=p.vx*dt;p.y+=p.vy*dt;p.rotation+=p.spin*dt;
      const alpha=Math.min(1,(p.life/p.initial))*0.85;
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rotation);ctx.globalAlpha=alpha;
      if(p.type==='heart'){
        ctx.fillStyle='hsl('+p.hue+' 100% 82%)';ctx.shadowColor='#ff89c7';ctx.shadowBlur=12;
        heart(0,0,p.size);
      }else{
        ctx.fillStyle='#ffe7b9';ctx.shadowColor='#ffe4af';ctx.shadowBlur=8;
        ctx.beginPath();ctx.arc(0,0,p.size,0,Math.PI*2);ctx.fill();
      }
      ctx.restore();
    }
    if(fine.matches && cursor.visible && !reduced.matches){
      const alpha=Math.max(0,Math.min(1,(2200-(now-cursor.seen))/450));
      if(alpha>0){
        ctx.save();ctx.globalAlpha=alpha*.82;ctx.strokeStyle='#ffd6ef';
        ctx.lineWidth=1.5;ctx.shadowColor='#ff84bd';ctx.shadowBlur=10;
        ctx.beginPath();ctx.arc(cursor.x,cursor.y,8,0,Math.PI*2);ctx.stroke();
        ctx.fillStyle='#fff6fb';ctx.beginPath();ctx.arc(cursor.x,cursor.y,2,0,Math.PI*2);ctx.fill();ctx.restore();
      }
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();

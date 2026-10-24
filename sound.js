/* Sonidos sintetizados localmente: disponibles offline, sin descargas. */
const PartySound=(()=>{
 let ctx,master,enabled=true;
 try{enabled=localStorage.getItem('monster-party-sound')!=='off';}catch{}
 function unlock(){
  if(!enabled)return;
  try{if(!ctx){const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;ctx=new Audio();master=ctx.createGain();master.gain.value=.32;master.connect(ctx.destination);}if(ctx.state==='suspended')ctx.resume().catch(()=>{});}catch{}
 }
 function tone(freq,delay=0,duration=.15,type='sine',volume=.2,end=freq){
  if(!enabled||!ctx||ctx.state!=='running')return;
  const start=ctx.currentTime+delay,o=ctx.createOscillator(),g=ctx.createGain();o.type=type;o.frequency.setValueAtTime(freq,start);o.frequency.exponentialRampToValueAtTime(Math.max(20,end),start+duration);g.gain.setValueAtTime(0,start);g.gain.linearRampToValueAtTime(volume,start+.012);g.gain.exponentialRampToValueAtTime(.001,start+duration);o.connect(g);g.connect(master);o.start(start);o.stop(start+duration+.03);o.onended=()=>{o.disconnect();g.disconnect();};
 }
 function play(name){
  if(!enabled)return;unlock();
  // Resume may be asynchronous on iPhone; schedule once it has completed.
  if(!ctx)return;
  const emit=()=>{if(!enabled||document.hidden)return;
   if(name==='roll'){[0,.12,.27,.45,.68,.96,1.3,1.7,2.15,2.65].forEach((t,i)=>{tone(160-i*7,t,.12,'triangle',.4,45);tone(1100-i*60,t,.055,'square',.025,250);});tone(100,.02,1.1,'sine',.08,310);}
   if(name==='reveal'){[261.63,329.63,392,523.25].forEach((f,i)=>tone(f,i*.095,.55,'triangle',.25));tone(1046.5,.3,.8,'sine',.12);}
   if(name==='timer'){[0,.25,.5].forEach(t=>{tone(783.99,t,.2,'sine',.3);tone(523.25,t,.2,'triangle',.2);});}
   if(name==='point')tone(660,0,.12,'sine',.15,880);
  };
  if(ctx.state==='running')emit();else ctx.resume().then(emit).catch(()=>{});
 }
 function toggle(){enabled=!enabled;try{localStorage.setItem('monster-party-sound',enabled?'on':'off');}catch{}if(master)master.gain.setValueAtTime(enabled?.32:0,ctx.currentTime);if(enabled){unlock();play('point');}return enabled;}
 document.addEventListener('visibilitychange',()=>{if(ctx&&document.hidden)ctx.suspend().catch(()=>{});});
 return{play,unlock,toggle,get enabled(){return enabled;}};
})();

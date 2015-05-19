define("chartx/layout/force/kernel",["chartx/layout/force/physics/physics"],function(a){var b=function(b){var c="file:"==window.location.protocol&&navigator.userAgent.toLowerCase().indexOf("chrome")>-1,d=void 0!==window.Worker&&!c,e=null,f=null,g=[];g.last=new Date;var h=null,i=null,j=null,k=null,l=!1,m={system:b,tween:null,nodes:{},init:function(){m.tween=f;var c=b.parameters();return d?(h=setInterval(m.screenUpdate,c.timeout),e=new Worker(Chartx.path+"chartx/layout/force/worker.js"),e.onmessage=m.workerMsg,e.onerror=function(a){},e.postMessage({type:"physics",physics:_.extend(c,{timeout:Math.ceil(c.timeout)})})):(e=a(c.dt,c.stiffness,c.repulsion,c.friction,m.system._updateGeometry,c.integrator),m.start()),m},graphChanged:function(a){d?e.postMessage({type:"changes",changes:a}):e._update(a),m.start()},particleModified:function(a,b){d?e.postMessage({type:"modify",id:a,mods:b}):e.modifyNode(a,b),m.start()},physicsModified:function(a){isNaN(a.timeout)||(d?(clearInterval(h),h=setInterval(m.screenUpdate,a.timeout)):(clearInterval(j),j=null)),d?e.postMessage({type:"sys",param:a}):e.modifyPhysics(a),m.start()},workerMsg:function(a){var b=a.data.type;"stopping"==b&&(clearInterval(h),h=null),"geometry"==b&&m.workerUpdate(a.data)},_lastPositions:null,workerUpdate:function(a){m._lastPositions=a,m._lastBounds=a.bounds},_lastFrametime:(new Date).valueOf(),_lastBounds:null,_currentRenderer:null,screenUpdate:function(){var a=((new Date).valueOf(),!1);if(null!==m._lastPositions&&(m.system._updateGeometry(m._lastPositions),m._lastPositions=null,a=!0),f&&f.busy()&&(a=!0),m.system._updateBounds(m._lastBounds)&&(a=!0),a){var b=m.system.renderer;if(void 0!==b){b!==i&&(b.init(m.system),i=b),f&&f.tick(),b.redraw();var c=g.last;g.last=new Date,g.push(g.last-c),g.length>50&&g.shift()}}},physicsUpdate:function(){f&&f.tick(),e.tick();var a=m.system._updateBounds();f&&f.busy()&&(a=!0);var b=m.system.renderer,c=new Date,b=m.system.renderer;void 0!==b&&(b!==i&&(b.init(m.system),i=b),b.redraw({timestamp:c}));var d=g.last;g.last=c,g.push(g.last-d),g.length>50&&g.shift();var h=e.systemEnergy();(h.mean+h.max)/2<1?(null===k&&(k=(new Date).valueOf()),(new Date).valueOf()-k>1e3&&(clearInterval(j),j=null)):k=null},fps:function(a){if(void 0!==a){var b=1e3/Math.max(1,targetFps);m.physicsModified({timeout:b})}for(var c=0,d=0,e=g.length;e>d;d++)c+=g[d];var f=c/Math.max(1,g.length);return isNaN(f)?0:Math.round(1e3/f)},start:function(a){null===j&&(!l||a)&&(l=!1,d?e.postMessage({type:"start"}):(k=null,j=setInterval(m.physicsUpdate,m.system.parameters().timeout)))},stop:function(){l=!0,d?e.postMessage({type:"stop"}):null!==j&&(clearInterval(j),j=null)}};return m.init()};return b});
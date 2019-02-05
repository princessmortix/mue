!function(e){var o={};function t(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=o,t.d=function(e,o,a){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)t.d(a,n,function(o){return e[o]}.bind(null,n));return a},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="",t(t.s=1)}([function(e,o){e.exports=class{static formatTimeUnit(e){return e<10?"0"+e:e}static setHTMLContent(e,o){return document.querySelector(e).innerHTML=o}static getRandIndex(e){return Math.floor(Math.random()*(e.length-1))}static pickFromArray(e){return e[Math.floor(Math.random()*(e.length-1))]}static contains(e){let o,t=e!=e;return(o=t||"function"!=typeof Array.prototype.indexOf?e=>{let o=-1,a=-1;for(o=0;o<this.length;o++){let n=this[o];if(t&&n!=n||n===e){a=o;break}}return a}:Array.prototype.indexOf).call(this,e)>-1}}},function(e,o,t){e.exports=t(2)},function(e,o,t){const a=t(3);document.addEventListener("DOMContentLoaded",()=>{a.setDaytimeMessage(),a.setRandomBackground(),a.setRandomQuote(),a.setTime();setInterval(a.setTime,1e3)}),document.oncontextmenu=function(){return!1}},function(e,o,t){const a=t(0),n=t(4),s=t(5),i=t(6),r=t(7);let u=navigator.language;e.exports=class{static setDaytimeMessage(){a.contains.call(r.itcodes,u)?n.itMessageSet():a.contains.call(r.nlcodes,u)?n.nlMessageSet():a.contains.call(r.frcodes,u)?n.frMessageSet():a.contains.call(r.spcodes,u)?n.spMessageSet():a.contains.call(r.ficodes,u)?n.spMessageSet():a.contains.call(r.decodes,u)?n.spMessageSet():a.contains.call(r.hecodes,u)?n.heMessageSet():a.contains.call(r.rucodes,u)?n.ruMessageSet():a.contains.call(r.arcodes,u)?n.arMessageSet():a.contains.call(r.svcodes,u)?n.svMessageSet():n.engMessageSet()}static setRandomBackground(){let e=a.pickFromArray(i);document.body.classList.add(e)}static setRandomQuote(){let e=a.getRandIndex(s.authors);a.contains.call(r.itcodes,u)?a.setHTMLContent("blockquote",`"${s.ita[e]}"`):a.contains.call(r.ptcodes,u)?a.setHTMLContent("blockquote",`"${s.pt[e]}"`||`"${s.eng[e]}"`):a.contains.call(r.spcodes,u)?a.setHTMLContent("blockquote",`"${s.spa[e]}"`):a.setHTMLContent("blockquote",`"${s.eng[e]}"`),a.setHTMLContent("cite",s.authors[e])}static setTime(){let e=new Date,o=[a.formatTimeUnit(e.getHours()),a.formatTimeUnit(e.getMinutes()),a.formatTimeUnit(e.getSeconds())];a.setHTMLContent("time",o.join(":"))}}},function(e,o,t){const{setHTMLContent:a}=t(0);e.exports=class{static engMessageSet(){let e=(new Date).getHours(),o="Good evening";a(".greeting",o=e<12?"Good morning":e<18?"Good afternoon":o)}static itMessageSet(){let e="Buongiorno";(new Date).getHours()>18&&(e="Buonasera"),a(".greeting",e)}static nlMessageSet(){let e=(new Date).getHours(),o="Goedemiddag";a(".greeting",o=e<12?"Goedemorgen":e>18?"Goedenavond":o)}static frMessageSet(){let e=(new Date).getHours(),o="Bonsoir";e<12?o="Bonjour":e>18&&(o="Bonne après-midi"),a(".greeting",o)}static spMessageSet(){let e=(new Date).getHours(),o="Buenas Tardes";a(".greeting",o=e<12?"Buenos Días":e>18?"Buenas Noches":o)}static fiMessageSet(){let e=(new Date).getHours(),o="Hyvää iltaa";a(".greeting",o=e<12?"Hyvää huomenta":e>18?"Hyvää iltapäivää":o)}static deMessageSet(){let e=(new Date).getHours(),o="Guten Abend";e<12?o="Guten Morgen":e>18&&(o="Guten Nachmittag"),a(".greeting",o)}static heMessageSet(){let e=(new Date).getHours(),o="ערב טוב";a(".greeting",o=e<12?"בוקר טוב":e>18?"אחר הצהריים טובים":o)}static ruMessageSet(){let e=(new Date).getHours(),o="Добрый Вечер";a(".greeting",o=e<12?"добрый утро":e>18?"добрый день":o)}static arMessageSet(){let e=(new Date).getHours(),o="مساء الخير";a(".greeting",o=e<12?"صباح الخير":e>18?"مساء الخير":o)}static svMessageSet(){let e=(new Date).getHours(),o="God kväll";e<12?o="God morgon":e>18&&(o="Dod eftermiddag"),a(".greeting",o)}}},function(e,o){e.exports={eng:["Time goes on. So whatever you’re going to do, do it. Do it now. Don’t wait.","All our dreams can come true, if we have the courage to pursue them.","It does not matter how slowly you go as long as you do not stop.","Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.","If you believe it will work out, you’ll see opportunities. If you believe it won’t, you will see obstacles","Everything you’ve ever wanted is on the other side of fear.","Success is not final, failure is not fatal: it is the courage to continue that counts.","There is only one thing that makes a dream impossible to achieve: the fear of failure.","Your true success in life begins only when you make the commitment to become excellent at what you do.","Believe in yourself, take on your challenges, dig deep within yourself to conquer fears. Never let anyone bring you down. You got to keep going.","Too many of us are not living our dreams because we are living our fears.","Hard times don’t create heroes. It is during the hard times when the ‘hero’ within us is revealed.","If you can tune into your purpose and really align with it, setting goals so that your vision is an expression of that purpose, then life flows much more easily.","Whatever the mind can conceive and believe, it can achieve.","Don’t wish it were easier. Wish you were better.","A champion is defined not by their wins but by how they can recover when they fall.","Motivation comes from working on things we care about.","With the right kind of coaching and determination you can accomplish anything.","Some people look for a beautiful place. Others make a place beautiful.","Life is like riding a bicycle. To keep your balance, you must keep moving."],ita:["Il tempo passa. Quindi qualunque cosa che farai, falla. Falla ora. Non aspettare","Tutti i nostri sogni possono diventare reali, se abbiamo il coraggio di seguirli.","Non importa quanto lentamente vai fino a quando non ti fermi","Credi in te stesso. Sei più coraggioso di quanto pensi, più talentuoso di quanto credi, e capace più di quanto puoi immaginare.","Se ci credi funzionerà, vedrai delle opportunità. Se non ci credi, vedrai solamente ostacoli","Tutti i tuoi desideri sono opposti alla paura","Il successo non è la fine, il fallimento non è fatale: è il coraggio per continuare quello che conta.","C'è solo una cosa che fa i sogni impossibili: la paura di fallire","Il vero successo nella tua vita inizia solo quando fai il sacrificio per diventare eccellente a quello che ami.","Credi in te stesso, sfida i tuoi problemi, scava nel profondo del tuo io per sconfiggere le tue paure. Mai arrendersi per qualcun'altro. Tu devi continuare.","Troppe persone non vivono i loro sogni per vivere nelle loro paure",'Tempi difficili non fanno eroi. È durante i tempi duri che "l\'eroe" in noi viene rivelato.',"Se puoi sintonizzare sul tuo senso e allinearti a quest'ultimo, impostando i tuoi obiettivi in modo che la tua visione sia un'espressione di quel senso, La tua vita scorre molto più facilmente","Qualunque cosa la mente può immaginare e crederese, si può realizzare","Non desiderare che fosse stato più facile. Desidera che tu fossi stato migliore.","Un campione si definisce non dalle sue vittorie ma da come recupera quando cade","La motivazione viene dal lavorare so cose che amiamo","Con il giusto tipo di allenamento e determinazione puoi fare tutto","Alcune persone cercano un posto indimenticabile. Altre lo transformano in un posto mozzafiato.","La vita è come andare in bicicletta. Per tenerti in equilibrio, devi continuare a muoverti"],spa:["El tiempo continúa. Así que lo que sea que vayas a hacer, hazlo. Hazlo ahora. No esperes","Todos nuestros sueños pueden hacerse realidad, si tenemos el coraje de perseguirlos.","No importa qué tan lento vayas, siempre y cuando no te detengas.","Cree en ti mismo. Eres más valiente de lo que crees, más talentoso de lo que sabes y capaz de más de lo que imaginas.","Si crees que funcionará, verás oportunidades. Si crees que no, verás obstáculos ","Todo lo que siempre has querido está al otro lado del miedo","El éxito no es definitivo, el fracaso no es fatal: el coraje para continuar es lo que cuenta","Solo hay una cosa que hace que un sueño sea imposible de lograr: el miedo al fracaso","Tu verdadero éxito en la vida comienza solo cuando te comprometes a ser excelente en lo que haces","Cree en ti mismo, asume tus desafíos, excava profundo dentro de ti mismo para vencer tus miedos. Nunca dejes que nadie te derribe. Tienes que seguir adelante.","Muchos de nosotros no estamos viviendo nuestros sueños porque estamos viviendo nuestros miedos","Los tiempos difíciles no crean héroes. Es durante los momentos difíciles en que se revela el héroe dentro de nosotros.","Si  puedes sincornizarte con tu propósito, y realmente alinearte con él, estableciendo metas para que tu visión sea una expresión de ese propósito, entonces la vida fluye mucho más fácilmente","Lo que la mente pueda concebir y creer, lo puede lograr","No desees que sea fácil. Desea ser mejor.","Un campeón se define no por sus victorias, sino por cómo pueden recuperarse cuando caen","La motivación viene de trabajar en cosas que nos importan","Con el entrenamiento y la determinación adecuados, puedes lograr cualquier cosa","Algunas personas buscan un lugar hermoso. Otras, hacen un lugar hermoso."],pt:["O tempo continua. Então o que quer que você vai fazer,faça. Faça agora. Não espere.","Todos os sonhos podem virar verdade,se tivermos a coragem de persegui-los.","Não importa o quão devagar você for,desde que você não pare.","Acredite em si mesmo. Você é mais corajoso que pensa,mais talentoso que sabe,e capaz de mais que imagina.","Se você acredita que vai dar certo,você verá oportunidades. Se você acredita que não vai,você vera obstáculos."],authors:["Robert De Niro","Walt Disney","Confucius","Roy T. Bennett","Wayne Dyer","George Addair","Winston Churchill","Paulo Coelho","Brian Tracy","Chantal Sutherland","Les Brown","Bob Riley","Jack Canfield","Napoleon Hill","Jim Rohn","Serena Williams","Sheryl Sandberg","Reese Witherspoon","Hazrat Inayat Khan","Albert Einstein"]}},function(e,o){e.exports=["mountain","sunrise","butterfly","leaves","river","sea","space","ice","waterfall","river","sunset","desert","canyon","rose","forest","cherry","clouds","autumn","winter","flowers","sunrise","rocks","trees","mountains","beach"]},function(e,o){e.exports={itcodes:["it","it-IT","it-CH"],nlcodes:["nl","nl-BE"],frcodes:["fr","fr-BE","fr-CA","fr-FR","fr-LU","fr-MC","fr-CH"],ptcodes:["pt","pt-BR"],spcodes:["es","es-AR","es-BO","es-CL","es-CO","es-CR","es-DO","es-EC","es-ES","es-GT","es-HN","es-MX","es-NI","es-PA","es-PE","es-PR","es-PY","es-SV","es-UY","es-VE"],ficodes:["fi"],decodes:["de","de-AT","de-DE","de-LI","de-LU","de-CH"],hecodes:["he"],rucodes:["ru","ru-MO"],arcodes:["ar","ar-DZ","ar-BH","ar-EG","ar-IQ","ar-JO","ar-KW","ar-LB","ar-LY","ar-QA","ar-SA","ar-SY","ar-TN","ar-AE","ar-YE"],svcodes:["sv","sv-FI","sv-SV"]}}]);
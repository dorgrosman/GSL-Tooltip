'use strict'

function injectJSONPScript() {
    const script = document.createElement('script');
    script.src = 'https://guidedlearning.oracle.com/player/latest/api/scenario/get/v_IlPvRLRWObwLnV5sTOaw/5szm2kaj/?callback=__5szm2kaj&refresh=true&env=dev&type=startPanel&vars%5Btype%5D=startPanel&sid=none&_=1582203987867';
    document.head.appendChild(script);
}

function injectCSSLink() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://guidedlearning.oracle.com/player/latest/static/css/stTip.css';
    document.head.appendChild(link);
}

function createTooltip() {
    const div = document.createElement('div')
    div.className = 'sttip'
    div.innerHTML = `<div class="tooltip in">
                        <div class="tooltip-arrow"></div>
                        <div class="tooltip-arrow second-arrow"></div>
                        <div class="popover-inner">
                        </div>
                    </div>`
    return div
}

function updateTiplate(tiplate) {
    const elPopoverInner = elTooltip.querySelector('.popover-inner')
    elPopoverInner.innerHTML = tiplate
    if(index == 4 ){
        elPopoverInner.innerHTML.removeChild(elPopoverInner)
    }
    
    return elTooltip
}

injectCSSLink()
injectJSONPScript()
const elTooltip = createTooltip()
var index = 0 ;
var closeBtn = true ;


window.__5szm2kaj = function (details) {

    var staps = (details.data.structure.steps)
    

    var currentStep = staps[index]     
    var updated = updateTiplate(details.data.tiplates.tip)             
    var content = updated.querySelector('[data-iridize-id="content"]').innerHTML = currentStep.action.contents['#content']    
    var prevBt = updated.querySelector('[data-iridize-role="prevBt"]').innerHTML //dosnt prestn me the Back btn

    if(index == 0){
    document.querySelector('.sttip').style.position ="fixed"
    document.querySelector('.sttip').style.top ='60px'
    document.querySelector('.sttip').style.left ="814px"
    }


    var stepCounter =updated.querySelector('[data-iridize-role="stepCount"]').innerText = ` ${index + 1}`
    var stepsCounter =updated.querySelector('[data-iridize-role="stepsCount"]').innerText = ` 4`
    
    var nextBt = updated.querySelector('[data-iridize-role="nextBt"]').addEventListener("click",() =>{
//     var popupPosi = updated.querySelector('.k1zIA').setAttribute("style","margin-top: 60px")
//     var popupPosi = updated.querySelector('.k1zIA').style.left ='-120px'
//      var popupPosi = updated.querySelector('.sttip').setAttribute("style","left: 60px")
     
    
   

    stepCounter =updated.querySelector('[data-iridize-role="stepCount"]').innerText = ` ${index + 2}`

        if(index == 3){
         document.querySelector('.sttip').style.display ="none"
             return 
         }else{
         index = index + 1;
         currentStep = staps[index]
         if(index != '0' )
         
         content = updated.querySelector('[data-iridize-id="content"]').innerHTML = currentStep.action.contents['#content']
        if(index == 1){
         document.querySelector('.sttip').style.position ="fixed"
         document.querySelector('.sttip').style.top ="50px"
         document.querySelector('.sttip').style.left ="1580px"
          }else if(index == 2){
         document.querySelector('.sttip').style.position ="fixed"
         document.querySelector('.sttip').style.top ='450px'
         document.querySelector('.sttip').style.left ="814px"
         }else if(index == 3){
          document.querySelector('.sttip').style.position ="fixed"
          document.querySelector('.sttip').style.left ="750px"
          document.querySelector('.sttip').style.top ='500px'
         }
        


     } })

    var closePop = updated.querySelector('[data-iridize-role="closeBt"]').addEventListener("click",() =>{
        document.querySelector('.sttip').style.display ="none"

    })

}
document.body.appendChild(elTooltip);
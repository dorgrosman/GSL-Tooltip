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
//     const elPopoverInner = elTooltip.querySelector('.popover-inner')
    const elPopoverInner = elTooltip.querySelector('.popover-inner')
    elPopoverInner.innerHTML = tiplate
    
    return elTooltip
}

injectCSSLink()
injectJSONPScript()
const elTooltip = createTooltip()

window.__5szm2kaj = function (details) {
    var index = '0' ;
    const staps = (details.data.structure.steps)
    var currentStep =staps[index]
    console.log('currentStep',currentStep)
        
    var updated = updateTiplate(details.data.tiplates.tip)
    var nextBt = updated.querySelector("[data-iridize-role=\"nextBt\"]")



document.body.appendChild(elTooltip);


}

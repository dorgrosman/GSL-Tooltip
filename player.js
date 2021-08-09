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
                        <div class="tooltip-arrow "></div>
                        <div class="popover-inner">
                        </div>
                    </div>`
    return div
}

function updateTiplate(tiplate) {
    const elPopoverInner = elTooltipContainer.querySelector('.popover-inner')
    elPopoverInner.innerHTML = tiplate
    if (index == 4) {
        elPopoverInner.innerHTML.removeChild(elPopoverInner)
    }

    return elTooltipContainer
}

injectCSSLink()
injectJSONPScript()
const elTooltipContainer = createTooltip()
const elTooltip = elTooltipContainer.children[0]
var index = 0;
var closeBtn = true;

function calcTooltipPosition(targetSelector, placement) {
       console.log('placement',placement)
    var target = document.querySelector(targetSelector)
    var targetRect = target.getBoundingClientRect()
    console.log('targetRect',targetRect)
    var position = { top: 0, left: 0 }

    var tooltipRect = elTooltip.getBoundingClientRect()

    switch (placement) {
        case 'right':
            position.left = targetRect.x + targetRect.width
            position.top = targetRect.y
            break;
        case 'left':
            position.left = targetRect.x - tooltipRect.width
            position.top = targetRect.y
            break;
        case 'top':
            position.right = targetRect.x
            position.top = targetRect.y - tooltipRect.height
            break;
        case 'bottom':
            position.left = targetRect.x
            position.top = targetRect.y + targetRect.height
            break;
    }

    return position
}
function updateTooltipPosition(position) {
    elTooltipContainer.style.top = `${position.top}px`
    elTooltipContainer.style.left = `${position.left}px`
}
function updateTooltipPlacement(placement ,x) {
    if(x == 'yes'){
         elTooltip.classList.add(placement)
    }else{
        console.log('nooo')
        elTooltip.classList.remove(placement)
    }
  
}

window.__5szm2kaj = function (details) {

    var staps = (details.data.structure.steps)
    var currentStep = staps[index]
    var updated = updateTiplate(details.data.tiplates.tip)
    var content = updated.querySelector('[data-iridize-id="content"]').innerHTML = currentStep.action.contents['#content']
    var prevBt = updated.querySelector('[data-iridize-role="prevBt"]').innerHTML //dosnt prestn me the Back btn
    var popup


    if (index == 0) {
        elTooltipContainer.style.position = 'fixed'
        const placement = currentStep.action.placement;
        
        var newPosition = calcTooltipPosition('.k1zIA', placement)
        updateTooltipPosition(newPosition)
        updateTooltipPlacement('right','yes')
    }


    var stepCounter = updated.querySelector('[data-iridize-role="stepCount"]').innerText = ` ${index + 1}`
    var stepsCounter = updated.querySelector('[data-iridize-role="stepsCount"]').innerText = ` 4`
    var nextBt = updated.querySelector('[data-iridize-role="nextBt"]').addEventListener("click", () => {
        stepCounter = updated.querySelector('[data-iridize-role="stepCount"]').innerText = ` ${index + 2}`
        
        if (index == 3) {
            document.querySelector('.sttip').style.display = "none"
            return
        } else {
            index = index + 1;
            currentStep = staps[index]
            if (index != '0')
                content = updated.querySelector('[data-iridize-id="content"]').innerHTML = currentStep.action.contents['#content']
            if (index == 1) {
//                 elTooltipContainer.style.position = 'fixed'
                const leatPlacement = staps[index -1].action.placement;
//                     const placement = 'left'
//                 var newPosition = calcTooltipPosition('.gb_f', placement)
//                 updateTooltipPosition(newPosition)
                updateTooltipPlacement(leatPlacement,'no')
//                 updateTooltipPlacement('left')


                
                document.querySelector('.sttip').style.position = "fixed"
                popup = document.querySelector('.gb_f').getBoundingClientRect()
                document.querySelector('.sttip').style.top = `${popup.y + 30}px`
                document.querySelector('.sttip').style.left = `${popup.x - 80}px`
//                 updateTooltipPlacement('bottom')
                updateTooltipPlacement('bottom','yes')
            } else if (index == 2) {

                elTooltipContainer.style.position = 'fixed'

                   
                const placement = currentStep.action.placement;
                const leatPlacement =staps[index -1].action.placement
                updateTooltipPlacement(leatPlacement ,'no')
                var newPosition = calcTooltipPosition('.RNNXgb', placement)
                updateTooltipPosition(newPosition)

                updateTooltipPlacement(placement ,'yes')

//                 document.querySelector('.sttip').style.position = "fixed"
//                 popup = document.querySelector('.RNNXgb').getBoundingClientRect()
//                 document.querySelector('.sttip').style.top = `${popup.y + 60}px`
//                 document.querySelector('.sttip').style.left = `${popup.x + 150}px`
            } else if (index == 3) {

                elTooltipContainer.style.position = 'fixed'
                const placement = currentStep.action.placement;
                const leatPlacement =staps[index -1].action.placement
                updateTooltipPlacement(leatPlacement ,'no')
                var newPosition = calcTooltipPosition('.FPdoLc.lJ9FBc', placement)
                updateTooltipPosition(newPosition)
                updateTooltipPlacement(placement,'yes')

//                 document.querySelector('.sttip').style.position = "fixed"
//                 document.querySelector('.gNO89b').getBoundingClientRect()
//                 document.querySelector('.sttip').style.top = `${popup.y + 120}px`
//                 document.querySelector('.sttip').style.left = `${popup.x + 40}px`
            }
        }
    })

    var closePop = updated.querySelector('[data-iridize-role="closeBt"]').addEventListener("click", () => {
        document.querySelector('.sttip').style.display = "none"

    })

}
document.body.appendChild(elTooltipContainer);
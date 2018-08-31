webpackJsonp([65],{507:function(e,t){e.exports=[{license:"MIT",author:"Mihail Zachepilo(mihailzachepilo@gmail.com)\nCopyright 2018 Peculiar Ventures and Pentatonica.\nAll rights reserved."},{name:"AdaptiveThreshold",description:[{type:"paragraph",children:["Applyes an adaptive threshold to the input image,\n threshold will be applied to the given channel.\n ",{type:"link",href:"https://www.researchgate.net/publication/220494200_Adaptive_Thresholding_using_the_Integral_Image",title:"https://www.researchgate.net/publication/220494200_Adaptive_Thresholding_using_the_Integral_Image",children:["Original paper"]}]}],examples:[{title:"example",description:"gm.adaptiveThreshold(inputImage);"}],params:[{name:"tSrc",description:"The source to be thresholded.",type:[{type:"Tensor"}]},{name:"uS",description:"Size of the avarange box",type:[{type:"Tensor"}],optional:!0},{name:"threshold",description:"Percent of the diff to mark black",type:[{type:"number"}],optional:!0},{name:"channel",description:"Channel to be applied",type:[{type:"number"}],optional:!0},{name:"tIntegralImage",description:"summed area table of the input",type:[{type:"Tensor"},{type:"Operation"}],optional:!0}]}]}});
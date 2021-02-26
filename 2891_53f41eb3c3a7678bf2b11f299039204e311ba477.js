(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2891],{2891:e=>{"use strict";e.exports=JSON.parse('[{"license":"MIT","author":"Mihail Zachepilo(mihailzachepilo@gmail.com)\\nCopyright 2018 Peculiar Ventures and Pentatonica.\\nAll rights reserved."},{"type":"class","name":"Session","description":[{"type":"paragraph","children":["This is a runtime which allows you to run computational graphs on different backends"]}],"methods":[{"description":[{"type":"paragraph","children":["Intialize operations for session"]}],"params":[{"name":"node","description":[{"type":"paragraph","children":["operation chain to be used in session"]}],"type":[{"type":"Operation"}]}],"name":"init","type":"method"},{"description":[{"type":"paragraph","children":["Run Operation"]}],"params":[{"name":"op","description":[{"type":"paragraph","children":["operation to run"]}],"type":[{"type":"Operation"}]},{"name":"ctx","description":[{"type":"paragraph","children":["context of a run, passing the same context twice in a raw\\n   will use cached result"]}],"type":[]},{"name":"output","description":[{"type":"paragraph","children":["if passed, the output is put into it."]}],"type":[{"type":"Tensor"},{"type":"HTMLCanvasElement"}],"optional":true}],"name":"runOp","type":"method"},{"description":[{"type":"paragraph","children":["Destroy all initialized operations,\\ntextures and other data connected to this session."]}],"name":"destroy","params":[],"type":"method"}]}]')}}]);
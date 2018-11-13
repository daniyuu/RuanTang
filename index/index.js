const app = getApp()
var historyMessages = [];

Page({
  data: {
    inputValue: '',
    chatHistory:[]
  },
  onLoad: function () {
   
  },
  handlerInput: function(e){
    this.setData({
      inputValue: e.detail.value
    })
  },
  handlerSend: function(){
    historyMessages.push(this.data.inputValue)
    this.setData({
      chatHistory: historyMessages
    })
    console.info(this.data.chatHistory)
  }
})
